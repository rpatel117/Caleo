// background.js
import { supabase } from "./popup/api/supabase";
// Listen for the message from your React component
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startOAuth") {
    initiateOAuthFlow(sendResponse);
    return true; // Indicates you intend to send a response asynchronously
  }
});

// Function to initiate the OAuth flow
function initiateOAuthFlow(sendResponse) {
  const manifest = chrome.runtime.getManifest()

const url = new URL('https://accounts.google.com/o/oauth2/auth')

url.searchParams.set('client_id', manifest.oauth2.client_id)
url.searchParams.set('response_type', 'id_token')
url.searchParams.set('access_type', 'offline')
url.searchParams.set('redirect_uri', `https://${chrome.runtime.id}.chromiumapp.org`)
url.searchParams.set('scope', manifest.oauth2.scopes.join(' '))

chrome.identity.launchWebAuthFlow(
  {
    url: url.href,
    interactive: true,
  },
  async (redirectedTo) => {
    if (chrome.runtime.lastError) {
      // auth was not successful
    } else {
      // auth was successful, extract the ID token from the redirectedTo URL
      const url = new URL(redirectedTo)
      const params = new URLSearchParams(url.hash.replace('#', ''));
      supabase.auth.startAutoRefresh();
      const { data, error } = await supabase.auth.signInWithIdToken({
        provider: 'google',
        token: params.get('id_token'),
      });
      supabase.auth.startAutoRefresh();
      
      if (error) {
        console.error('Supabase auth error:', error);
        chrome.storage.local.set({authError: error});
      } else {
        console.log('Supabase auth success:', data);
        supabase.auth.startAutoRefresh();
        chrome.storage.local.set({authData: data});
      }
    }
  }
)
}

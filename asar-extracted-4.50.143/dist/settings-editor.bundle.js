(()=>{var Gk=(Se,ye)=>()=>(ye||Se((ye={exports:{}}).exports,ye),ye.exports);var Yk=Gk((ge,pe)=>{(function(){try{var Se=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ye=new Error().stack;ye&&(Se._sentryDebugIds=Se._sentryDebugIds||{},Se._sentryDebugIds[ye]="b5716d37-0b9b-4369-9cff-37b22c064931",Se._sentryDebugIdIdentifier="sentry-dbid-b5716d37-0b9b-4369-9cff-37b22c064931")}catch{}})();var Wk=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};Wk.SENTRY_RELEASE={id:"Slack@4.50.143"};var Kk;(()=>{var Se={5974(y,_,d){"use strict";d.d(_,{A:()=>_t});var k=d(2845),C=d.n(k),g=d(8843),B=d.n(g),w=d(5858),T=d.n(w),P=new URL(d(5539),d.b),I=new URL(d(4603),d.b),q=new URL(d(4392),d.b),J=new URL(d(9138),d.b),O=new URL(d(5906),d.b),Z=new URL(d(9269),d.b),ee=new URL(d(5959),d.b),W=new URL(d(7),d.b),H=new URL(d(6723),d.b),ie=B()(C()),ne=T()(P),ae=T()(I),K=T()(q),N=T()(J),h=T()(O),b=T()(Z),se=T()(ee),qe=T()(W),He=T()(H);ie.push([y.id,`/*

This is a smaller variant of the new Lato2, serving compressed woff2 files.

Currently: TS-Only
Clients needs to have Lato2 pref turned ON.

The payload is 50% smaller. However, woff2 is not yet well supported,
so we're still providing the woff as fallback.

*/
/* Light */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 300;
  src: url(${ne}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(${ae}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(${K}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(${N}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(${h}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(${b}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(${se}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(${qe}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
@font-face {
  font-family: 'Slack v2';
  src: url(${He}) format('woff2');
  font-style: normal;
  font-weight: 400;
}
.c-icon {
  position: relative;
  display: inline-flex;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
}
.c-icon:before {
  font-family: 'Slack v2';
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
}
.c-icon--inline {
  width: 20px;
  height: auto;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
}
.c-icon--inline:before {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -0.5em;
  margin-left: -0.5em;
  width: 1em;
  height: 1em;
}
.c-icon--inline:after {
  content: '\\200B';
}
.c-icon--inherit {
  width: 1em;
}
.c-icon--inherit:before {
  font-size: inherit;
}
.c-icon--star-o:before {
  content: '\\E001';
}
.c-icon--unstar-o:before {
  content: '\\E002';
}
.c-icon--user:before {
  content: '\\E003';
}
.c-icon--comment-alt:before {
  content: '\\E004';
}
.c-icon--comment-o:before {
  content: '\\E005';
}
.c-icon--home:before {
  content: '\\E006';
}
.c-icon--info:before {
  content: '\\E007';
}
.c-icon--channel-info:before {
  content: '\\E008';
}
.c-icon--info-circle:before {
  content: '\\E008';
}
.c-icon--mentions:before {
  content: '\\E009';
}
.c-icon--gn-menu:before {
  content: '\\E00A';
}
.c-icon--search:before {
  content: '\\E010';
}
.c-icon--bolt:before {
  content: '\\E011';
}
.c-icon--mobile:before {
  content: '\\E012';
}
.c-icon--tablet:before {
  content: '\\E013';
}
.c-icon--laptop:before {
  content: '\\E014';
}
.c-icon--bell-o:before {
  content: '\\E015';
}
.c-icon--bell-slash:before {
  content: '\\E016';
}
.c-icon--team-directory:before {
  content: '\\E017';
}
.c-icon--cloud-upload:before {
  content: '\\E018';
}
.c-icon--cloud-download:before {
  content: '\\E019';
}
.c-icon--bolt-add:before {
  content: '\\E01A';
}
.c-icon--search-medium:before {
  content: '\\E01B';
}
.c-icon--cog-o:before {
  content: '\\E020';
}
.c-icon--cogs:before {
  content: '\\E021';
}
.c-icon--key:before {
  content: '\\E022';
}
.c-icon--calendar:before {
  content: '\\E023';
}
.c-icon--pencil:before {
  content: '\\E024';
}
.c-icon--lightbulb-o:before {
  content: '\\E025';
}
.c-icon--magic:before {
  content: '\\E026';
}
.c-icon--external-link:before {
  content: '\\E027';
}
.c-icon--external-link-square:before {
  content: '\\E028';
}
.c-icon--lock-o:before {
  content: '\\E029';
}
.c-icon--unlock:before {
  content: '\\E030';
}
.c-icon--folder:before {
  content: '\\E031';
}
.c-icon--folder-open:before {
  content: '\\E032';
}
.c-icon--archive:before {
  content: '\\E033';
}
.c-icon--inbox:before {
  content: '\\E034';
}
.c-icon--sitemap:before {
  content: '\\E035';
}
.c-icon--book:before {
  content: '\\E036';
}
.c-icon--envelope-o:before {
  content: '\\E037';
}
.c-icon--image:before {
  content: '\\E038';
}
.c-icon--building:before {
  content: '\\E039';
}
.c-icon--plug:before {
  content: '\\E040';
}
.c-icon--paper-plane:before {
  content: '\\E041';
}
.c-icon--credit-card:before {
  content: '\\E042';
}
.c-icon--life-ring:before {
  content: '\\E043';
}
.c-icon--thumb-tack:before {
  content: '\\E044';
}
.c-icon--trash:before {
  content: '\\E045';
}
.c-icon--print:before {
  content: '\\E046';
}
.c-icon--quote-o:before {
  content: '\\E047';
}
.c-icon--th-large:before {
  content: '\\E048';
}
.c-icon--eye:before {
  content: '\\E049';
}
.c-icon--eye-closed:before {
  content: '\\E050';
}
.c-icon--volume-off:before {
  content: '\\E051';
}
.c-icon--volume-down:before {
  content: '\\E052';
}
.c-icon--volume-medium:before {
  content: '\\E053';
}
.c-icon--volume-up:before {
  content: '\\E054';
}
.c-icon--volume-off-alt:before {
  content: '\\E055';
}
.c-icon--heart-o:before {
  content: '\\E056';
}
.c-icon--wrench:before {
  content: '\\E057';
}
.c-icon--file:before {
  content: '\\E058';
}
.c-icon--all-files:before {
  content: '\\E059';
}
.c-icon--img-left:before {
  content: '\\E05A';
}
.c-icon--img-center:before {
  content: '\\E05B';
}
.c-icon--img-right:before {
  content: '\\E05C';
}
.c-icon--img-fullbleed:before {
  content: '\\E05D';
}
.c-icon--img-fullwidth:before {
  content: '\\E05D';
}
.c-icon--your-files:before {
  content: '\\E060';
}
.c-icon--align-left:before {
  content: '\\E061';
}
.c-icon--align-center:before {
  content: '\\E062';
}
.c-icon--align-right:before {
  content: '\\E063';
}
.c-icon--align-justify:before {
  content: '\\E064';
}
.c-icon--paragraph:before {
  content: '\\E065';
}
.c-icon--code:before {
  content: '\\E066';
}
.c-icon--ellipsis:before {
  content: '\\E067';
}
.c-icon--ellipsis-baseline:before {
  content: '\\E068';
}
.c-icon--spinner:before {
  content: '\\E069';
}
.c-icon--spiral:before {
  content: '\\E070';
}
.c-icon--random:before {
  content: '\\E071';
}
.c-icon--repeat:before {
  content: '\\E072';
}
.c-icon--share-square-o:before {
  content: '\\E073';
}
.c-icon--link:before {
  content: '\\E074';
}
.c-icon--undo:before {
  content: '\\E075';
}
.c-icon--history:before {
  content: '\\E076';
}
.c-icon--hourglass-empty:before {
  content: '\\E077';
}
.c-icon--hourglass:before {
  content: '\\E078';
}
.c-icon--clock-o:before {
  content: '\\E079';
}
.c-icon--dashboard:before {
  content: '\\E080';
}
.c-icon--power-off:before {
  content: '\\E081';
}
.c-icon--sign-in:before {
  content: '\\E082';
}
.c-icon--sign-out:before {
  content: '\\E083';
}
.c-icon--jump:before {
  content: '\\E084';
}
.c-icon--globe:before {
  content: '\\E085';
}
.c-icon--filter:before {
  content: '\\E086';
}
.c-icon--microphone:before {
  content: '\\E087';
}
.c-icon--microphone-slash:before {
  content: '\\E088';
}
.c-icon--paperclip:before {
  content: '\\E089';
}
.c-icon--video-camera:before {
  content: '\\E090';
}
.c-icon--stop-video:before {
  content: '\\E091';
}
.c-icon--phone:before {
  content: '\\E092';
}
.c-icon--unarchive:before {
  content: '\\E093';
}
.c-icon--smile-o:before {
  content: '\\E094';
}
.c-icon--share-screen:before {
  content: '\\E095';
}
.c-icon--stop-screen-sharing:before {
  content: '\\E096';
}
.c-icon--stop-screen-sharing-alt:before {
  content: '\\E097';
}
.c-icon--feedback:before {
  content: '\\E098';
}
.c-icon--paper-plane-alt:before {
  content: '\\E099';
}
.c-icon--cloud-offline:before {
  content: '\\E0A0';
}
.c-icon--cloud-offline-small:before {
  content: '\\E0A1';
}
.c-icon--filters:before {
  content: '\\E0A2';
}
.c-icon--lock-large:before {
  content: '\\E0A3';
}
.c-icon--checkbox-empty:before {
  content: '\\E0A4';
}
.c-icon--input-file:before {
  content: '\\E0A5';
}
.c-icon--input-fullscreen:before {
  content: '\\E0A6';
}
.c-icon--input-img:before {
  content: '\\E0A7';
}
.c-icon--input-integration:before {
  content: '\\E0A8';
}
.c-icon--share:before {
  content: '\\E100';
}
.c-icon--save:before {
  content: '\\E101';
}
.c-icon--message-notification:before {
  content: '\\E102';
}
.c-icon--list:before {
  content: '\\E103';
}
.c-icon--channel:before {
  content: '\\E104';
}
.c-icon--share-other-alt:before {
  content: '\\E105';
}
.c-icon--broadcast:before {
  content: '\\E106';
}
.c-icon--all-files-alt:before {
  content: '\\E107';
}
.c-icon--search-files:before {
  content: '\\E108';
}
.c-icon--add-user:before {
  content: '\\E109';
}
.c-icon--switch-team:before {
  content: '\\E110';
}
.c-icon--create-snippet:before {
  content: '\\E111';
}
.c-icon--create-post:before {
  content: '\\E112';
}
.c-icon--upload:before {
  content: '\\E113';
}
.c-icon--download:before {
  content: '\\E114';
}
.c-icon--share-email:before {
  content: '\\E115';
}
.c-icon--import-email:before {
  content: '\\E116';
}
.c-icon--ellipsis-o:before {
  content: '\\E117';
}
.c-icon--add-reaction:before {
  content: '\\E118';
}
.c-icon--happy-smile:before {
  content: '\\E119';
}
.c-icon--quote-post:before {
  content: '\\E120';
}
.c-icon--camera:before {
  content: '\\E121';
}
.c-icon--phone-flat:before {
  content: '\\E122';
}
.c-icon--sparkles:before {
  content: '\\E123';
}
.c-icon--location-pin:before {
  content: '\\E124';
}
.c-icon--channel-pane-hash:before {
  content: '\\E125';
}
.c-icon--emoji-nature:before {
  content: '\\E126';
}
.c-icon--emoji-food:before {
  content: '\\E127';
}
.c-icon--emoji-celebration:before {
  content: '\\E128';
}
.c-icon--emoji-activities:before {
  content: '\\E129';
}
.c-icon--emoji-travel:before {
  content: '\\E130';
}
.c-icon--emoji-objects:before {
  content: '\\E131';
}
.c-icon--pause:before {
  content: '\\E132';
}
.c-icon--file-gdrive:before {
  content: '\\E133';
}
.c-icon--play:before {
  content: '\\E134';
}
.c-icon--stream:before {
  content: '\\E135';
}
.c-icon--field-text:before {
  content: '\\E136';
}
.c-icon--poo:before {
  content: '\\E137';
}
.c-icon--channel-list:before {
  content: '\\E138';
}
.c-icon--share-android:before {
  content: '\\E139';
}
.c-icon--highlight:before {
  content: '\\E140';
}
.c-icon--flag:before {
  content: '\\E141';
}
.c-icon--grabby-patty:before {
  content: '\\E142';
}
.c-icon--backspace:before {
  content: '\\E143';
}
.c-icon--share-forward:before {
  content: '\\E144';
}
.c-icon--side-panel:before {
  content: '\\E145';
}
.c-icon--search-small:before {
  content: '\\E146';
}
.c-icon--reload-small:before {
  content: '\\E147';
}
.c-icon--vertical-ellipsis:before {
  content: '\\E148';
}
.c-icon--disable:before {
  content: '\\E149';
}
.c-icon--bold-hash-small:before {
  content: '\\E150';
}
.c-icon--cart:before {
  content: '\\E151';
}
.c-icon--snooze-outline:before {
  content: '\\E152';
}
.c-icon--new-window:before {
  content: '\\E153';
}
.c-icon--h1:before {
  content: '\\E154';
}
.c-icon--h2:before {
  content: '\\E155';
}
.c-icon--h3:before {
  content: '\\E156';
}
.c-icon--bullet-list:before {
  content: '\\E157';
}
.c-icon--numbered-list:before {
  content: '\\E158';
}
.c-icon--text-format-menu:before {
  content: '\\E159';
}
.c-icon--check-list:before {
  content: '\\E15A';
}
.c-icon--code-block:before {
  content: '\\E15B';
}
.c-icon--codeblock:before {
  content: '\\E15B';
}
.c-icon--bold:before {
  content: '\\E160';
}
.c-icon--italic:before {
  content: '\\E161';
}
.c-icon--underline:before {
  content: '\\E162';
}
.c-icon--strikethrough:before {
  content: '\\E163';
}
.c-icon--tag:before {
  content: '\\E164';
}
.c-icon--org-shared-channel:before {
  content: '\\E165';
}
.c-icon--shared-channel:before {
  content: '\\E166';
}
.c-icon--external-channel:before {
  content: '\\E167';
}
.c-icon--external-channel-square:before {
  content: '\\E168';
}
.c-icon--external-channel-triangle:before {
  content: '\\E169';
}
.c-icon--small-reaction:before {
  content: '\\E170';
}
.c-icon--small-reply:before {
  content: '\\E171';
}
.c-icon--small-ellipsis:before {
  content: '\\E172';
}
.c-icon--small-star:before {
  content: '\\E173';
}
.c-icon--small-quote:before {
  content: '\\E174';
}
.c-icon--keyboard:before {
  content: '\\E175';
}
.c-icon--share-action:before {
  content: '\\E176';
}
.c-icon--handset:before {
  content: '\\E177';
}
.c-icon--bluetooth-sound:before {
  content: '\\E178';
}
.c-icon--bluetooth:before {
  content: '\\E179';
}
.c-icon--bot:before {
  content: '\\E180';
}
.c-icon--globe-plus:before {
  content: '\\E181';
}
.c-icon--user-groups:before {
  content: '\\E182';
}
.c-icon--rocket:before {
  content: '\\E183';
}
.c-icon--mobile-notification:before {
  content: '\\E184';
}
.c-icon--desktop-notification:before {
  content: '\\E185';
}
.c-icon--collab-screenshare-on:before {
  content: '\\E186';
}
.c-icon--collab-screenshare-off:before {
  content: '\\E187';
}
.c-icon--thumbs-up:before {
  content: '\\E188';
}
.c-icon--thumbs-down:before {
  content: '\\E189';
}
.c-icon--bug:before {
  content: '\\E190';
}
.c-icon--mark-unread:before {
  content: '\\E191';
}
.c-icon--compose-dm:before {
  content: '\\E192';
}
.c-icon--invoice:before {
  content: '\\E193';
}
.c-icon--expand:before {
  content: '\\E200';
}
.c-icon--reduce:before {
  content: '\\E201';
}
.c-icon--arrows-alt:before {
  content: '\\E202';
}
.c-icon--reduce-alt:before {
  content: '\\E203';
}
.c-icon--check-square-o:before {
  content: '\\E204';
}
.c-icon--check-circle-o:before {
  content: '\\E205';
}
.c-icon--check-circle-o-large:before {
  content: '\\E206';
}
.c-icon--question:before {
  content: '\\E207';
}
.c-icon--exclamation:before {
  content: '\\E208';
}
.c-icon--warning:before {
  content: '\\E209';
}
.c-icon--exclamation-circle:before {
  content: '\\E210';
}
.c-icon--question-circle:before {
  content: '\\E211';
}
.c-icon--plus-circle:before {
  content: '\\E212';
}
.c-icon--minus-circle:before {
  content: '\\E213';
}
.c-icon--times-circle:before {
  content: '\\E214';
}
.c-icon--arrow-circle-o-up:before {
  content: '\\E215';
}
.c-icon--arrow-circle-o-down:before {
  content: '\\E216';
}
.c-icon--arrow-circle-o-right:before {
  content: '\\E217';
}
.c-icon--arrow-circle-o-left:before {
  content: '\\E218';
}
.c-icon--chevron-circle-left:before {
  content: '\\E219';
}
.c-icon--chevron-circle-right:before {
  content: '\\E220';
}
.c-icon--chevron-circle-down:before {
  content: '\\E221';
}
.c-icon--chevron-circle-up:before {
  content: '\\E222';
}
.c-icon--plus-circle-small:before {
  content: '\\E223';
}
.c-icon--circle-small:before {
  content: '\\E224';
}
.c-icon--circle-large:before {
  content: '\\E225';
}
.c-icon--navigate:before {
  content: '\\E226';
}
.c-icon--times-circle-small:before {
  content: '\\E520';
}
.c-icon--plus-circle-medium:before {
  content: '\\E228';
}
.c-icon--times-circle-medium:before {
  content: '\\E229';
}
.c-icon--square-warning:before {
  content: '\\E230';
}
.c-icon--square-question:before {
  content: '\\E231';
}
.c-icon--plus-square-o:before {
  content: '\\E232';
}
.c-icon--minus-square-o:before {
  content: '\\E233';
}
.c-icon--square-times:before {
  content: '\\E234';
}
.c-icon--square-arrow-up:before {
  content: '\\E235';
}
.c-icon--square-arrow-down:before {
  content: '\\E236';
}
.c-icon--square-arrow-right:before {
  content: '\\E237';
}
.c-icon--square-arrow-left:before {
  content: '\\E238';
}
.c-icon--square-chevron-left:before {
  content: '\\E239';
}
.c-icon--square-chevron-right:before {
  content: '\\E240';
}
.c-icon--square-chevron-down:before {
  content: '\\E241';
}
.c-icon--square-chevron-up:before {
  content: '\\E242';
}
.c-icon--chevron-right:before {
  content: '\\E250';
}
.c-icon--chevron-left:before {
  content: '\\E251';
}
.c-icon--chevron-down:before {
  content: '\\E252';
}
.c-icon--chevron-up:before {
  content: '\\E253';
}
.c-icon--chevron-medium-right:before {
  content: '\\E254';
}
.c-icon--chevron-medium-left:before {
  content: '\\E255';
}
.c-icon--chevron-medium-down:before {
  content: '\\E256';
}
.c-icon--chevron-medium-up:before {
  content: '\\E257';
}
.c-icon--chevron-large-right:before {
  content: '\\E258';
}
.c-icon--chevron-large-left:before {
  content: '\\E259';
}
.c-icon--chevron-large-up:before {
  content: '\\E260';
}
.c-icon--chevron-large-down:before {
  content: '\\E261';
}
.c-icon--arrow-large-right:before {
  content: '\\E262';
}
.c-icon--arrow-large-left:before {
  content: '\\E263';
}
.c-icon--arrow-large-up:before {
  content: '\\E264';
}
.c-icon--arrow-large-down:before {
  content: '\\E265';
}
.c-icon--caret-outline-left:before {
  content: '\\E266';
}
.c-icon--caret-outline-right:before {
  content: '\\E267';
}
.c-icon--caret-outline-up:before {
  content: '\\E268';
}
.c-icon--caret-outline-down:before {
  content: '\\E269';
}
.c-icon--caret-up:before {
  content: '\\E270';
}
.c-icon--caret-down:before {
  content: '\\E271';
}
.c-icon--caret-right:before {
  content: '\\E272';
}
.c-icon--caret-left:before {
  content: '\\E273';
}
.c-icon--angle-arrow-down-left:before {
  content: '\\E274';
}
.c-icon--angle-arrow-down-right:before {
  content: '\\E275';
}
.c-icon--angle-arrow-up-right:before {
  content: '\\E276';
}
.c-icon--angle-arrow-up-left:before {
  content: '\\E277';
}
.c-icon--times:before {
  content: '\\E278';
}
.c-icon--plus:before {
  content: '\\E279';
}
.c-icon--minus:before {
  content: '\\E280';
}
.c-icon--plus-small:before {
  content: '\\E281';
}
.c-icon--minus-small:before {
  content: '\\E282';
}
.c-icon--exclamation-small:before {
  content: '\\E283';
}
.c-icon--question-small:before {
  content: '\\E284';
}
.c-icon--check-small:before {
  content: '\\E285';
}
.c-icon--arrow-right:before {
  content: '\\E286';
}
.c-icon--arrow-left:before {
  content: '\\E287';
}
.c-icon--arrow-up:before {
  content: '\\E288';
}
.c-icon--arrow-down:before {
  content: '\\E289';
}
.c-icon--arrow-right-medium:before {
  content: '\\E290';
}
.c-icon--arrow-left-medium:before {
  content: '\\E291';
}
.c-icon--arrow-up-medium:before {
  content: '\\E292';
}
.c-icon--arrow-down-medium:before {
  content: '\\E293';
}
.c-icon--times-small:before {
  content: '\\E294';
}
.c-icon--sync:before {
  content: '\\E295';
}
.c-icon--replies:before {
  content: '\\E296';
}
.c-icon--angle-arrow-down-right-alt:before {
  content: '\\E297';
}
.c-icon--angle-arrow-up-right-alt:before {
  content: '\\E298';
}
.c-icon--angle-arrow-up-left-alt:before {
  content: '\\E299';
}
.c-icon--angle-arrow-down-left-alt:before {
  content: '\\E300';
}
.c-icon--check-small-bold:before {
  content: '\\E301';
}
.c-icon--enter:before {
  content: '\\E302';
}
.c-icon--expand-vertical:before {
  content: '\\E303';
}
.c-icon--collapse-vertical:before {
  content: '\\E304';
}
.c-icon--android-upload:before {
  content: '\\E305';
}
.c-icon--plus-thick:before {
  content: '\\E306';
}
.c-icon--arrow-ne-large:before {
  content: '\\E307';
}
.c-icon--arrow-nw-large:before {
  content: '\\E308';
}
.c-icon--arrow-sw-large:before {
  content: '\\E309';
}
.c-icon--arrow-se-large:before {
  content: '\\E310';
}
.c-icon--arrow-ne-medium:before {
  content: '\\E311';
}
.c-icon--arrow-nw-medium:before {
  content: '\\E312';
}
.c-icon--arrow-sw-medium:before {
  content: '\\E313';
}
.c-icon--arrow-se-medium:before {
  content: '\\E314';
}
.c-icon--arrow-ne-small:before {
  content: '\\E315';
}
.c-icon--arrow-nw-small:before {
  content: '\\E316';
}
.c-icon--arrow-sw-small:before {
  content: '\\E317';
}
.c-icon--arrow-se-small:before {
  content: '\\E318';
}
.c-icon--check-large-bold:before {
  content: '\\E319';
}
.c-icon--check-large:before {
  content: '\\E320';
}
.c-icon--times-medium:before {
  content: '\\E321';
}
.c-icon--real-checkbox-empty:before {
  content: '\\E322';
}
.c-icon--real-checkbox-checked:before {
  content: '\\E323';
}
.c-icon--real-checkbox-checked-o:before {
  content: '\\E324';
}
.c-icon--circle-checkbox-empty:before {
  content: '\\E325';
}
.c-icon--circle-checkbox-checked:before {
  content: '\\E326';
}
.c-icon--circle-checkbox-checked-o:before {
  content: '\\E327';
}
.c-icon--times-large:before {
  content: '\\E328';
}
.c-icon--file-generic:before {
  content: '\\E400';
}
.c-icon--file-generic-small:before {
  content: '\\E401';
}
.c-icon--file-spaces:before {
  content: '\\E402';
}
.c-icon--file-spaces-small:before {
  content: '\\E403';
}
.c-icon--file-image:before {
  content: '\\E404';
}
.c-icon--file-image-small:before {
  content: '\\E405';
}
.c-icon--file-pdf:before {
  content: '\\E406';
}
.c-icon--file-pdf-small:before {
  content: '\\E407';
}
.c-icon--file-audio:before {
  content: '\\E408';
}
.c-icon--file-audio-small:before {
  content: '\\E409';
}
.c-icon--file-video:before {
  content: '\\E410';
}
.c-icon--file-video-small:before {
  content: '\\E411';
}
.c-icon--file-presentation:before {
  content: '\\E412';
}
.c-icon--file-presentation-small:before {
  content: '\\E413';
}
.c-icon--file-email:before {
  content: '\\E414';
}
.c-icon--file-email-small:before {
  content: '\\E415';
}
.c-icon--file-vector:before {
  content: '\\E416';
}
.c-icon--file-vector-small:before {
  content: '\\E417';
}
.c-icon--file-spreadsheet:before {
  content: '\\E418';
}
.c-icon--file-spreadsheet-small:before {
  content: '\\E419';
}
.c-icon--file-media-archive:before {
  content: '\\E420';
}
.c-icon--file-media-archive-small:before {
  content: '\\E421';
}
.c-icon--file-archive:before {
  content: '\\E422';
}
.c-icon--file-archive-small:before {
  content: '\\E423';
}
.c-icon--file-executable:before {
  content: '\\E424';
}
.c-icon--file-executable-small:before {
  content: '\\E425';
}
.c-icon--file-disk-image:before {
  content: '\\E426';
}
.c-icon--file-disk-image-small:before {
  content: '\\E427';
}
.c-icon--file-cad:before {
  content: '\\E428';
}
.c-icon--file-cad-small:before {
  content: '\\E429';
}
.c-icon--file-3d-graphic:before {
  content: '\\E430';
}
.c-icon--file-3d-graphic-small:before {
  content: '\\E431';
}
.c-icon--file-database:before {
  content: '\\E432';
}
.c-icon--file-database-small:before {
  content: '\\E433';
}
.c-icon--file-binary:before {
  content: '\\E434';
}
.c-icon--file-binary-small:before {
  content: '\\E435';
}
.c-icon--file-markdown:before {
  content: '\\E436';
}
.c-icon--file-markdown-small:before {
  content: '\\E437';
}
.c-icon--file-text-post:before {
  content: '\\E438';
}
.c-icon--file-text-post-small:before {
  content: '\\E439';
}
.c-icon--file-html:before {
  content: '\\E440';
}
.c-icon--file-html-small:before {
  content: '\\E441';
}
.c-icon--file-code:before {
  content: '\\E442';
}
.c-icon--file-code-small:before {
  content: '\\E443';
}
.c-icon--file-css:before {
  content: '\\E444';
}
.c-icon--file-css-small:before {
  content: '\\E445';
}
.c-icon--file-php:before {
  content: '\\E446';
}
.c-icon--file-php-small:before {
  content: '\\E447';
}
.c-icon--file-snippet:before {
  content: '\\E448';
}
.c-icon--file-snippet-small:before {
  content: '\\E449';
}
.c-icon--file-word:before {
  content: '\\E450';
}
.c-icon--file-word-small:before {
  content: '\\E451';
}
.c-icon--file-excel:before {
  content: '\\E452';
}
.c-icon--file-excel-small:before {
  content: '\\E453';
}
.c-icon--file-powerpoint:before {
  content: '\\E454';
}
.c-icon--file-powerpoint-small:before {
  content: '\\E455';
}
.c-icon--file-illustrator:before {
  content: '\\E456';
}
.c-icon--file-illustrator-small:before {
  content: '\\E457';
}
.c-icon--file-photoshop:before {
  content: '\\E458';
}
.c-icon--file-photoshop-small:before {
  content: '\\E459';
}
.c-icon--file-indesign:before {
  content: '\\E460';
}
.c-icon--file-indesign-small:before {
  content: '\\E461';
}
.c-icon--file-adobe-flash:before {
  content: '\\E462';
}
.c-icon--file-adobe-flash-small:before {
  content: '\\E463';
}
.c-icon--file-adobe-swf:before {
  content: '\\E464';
}
.c-icon--file-adobe-swf-small:before {
  content: '\\E465';
}
.c-icon--file-iphone-app:before {
  content: '\\E466';
}
.c-icon--file-iphone-app-small:before {
  content: '\\E467';
}
.c-icon--file-android-app:before {
  content: '\\E468';
}
.c-icon--file-android-app-small:before {
  content: '\\E469';
}
.c-icon--file-dropbox:before {
  content: '\\E470';
}
.c-icon--file-dropbox-small:before {
  content: '\\E471';
}
.c-icon--file-google:before {
  content: '\\E472';
}
.c-icon--file-google-document:before {
  content: '\\E472';
}
.c-icon--file-google-form:before {
  content: '\\E472';
}
.c-icon--file-google-presentation:before {
  content: '\\E472';
}
.c-icon--file-google-spreadsheet:before {
  content: '\\E472';
}
.c-icon--file-google-document-small:before {
  content: '\\E473';
}
.c-icon--file-google-form-small:before {
  content: '\\E473';
}
.c-icon--file-google-presentation-small:before {
  content: '\\E473';
}
.c-icon--file-google-small:before {
  content: '\\E473';
}
.c-icon--file-google-spreadsheet-small:before {
  content: '\\E473';
}
.c-icon--file-qtz:before {
  content: '\\E474';
}
.c-icon--file-qtz-small:before {
  content: '\\E475';
}
.c-icon--file-sketch:before {
  content: '\\E476';
}
.c-icon--file-sketch-small:before {
  content: '\\E477';
}
.c-icon--calls:before {
  content: '\\E478';
}
.c-icon--calls-small:before {
  content: '\\E479';
}
.c-icon--calls-ended:before {
  content: '\\E480';
}
.c-icon--calls-ended-small:before {
  content: '\\E481';
}
.c-icon--file-figma:before {
  content: '\\E482';
}
.c-icon--file-figma-small:before {
  content: '\\E483';
}
.c-icon--file-generic-tiny:before {
  content: '\\E4A0';
}
.c-icon--file-spaces-tiny:before {
  content: '\\E4AA';
}
.c-icon--file-image-tiny:before {
  content: '\\E4AB';
}
.c-icon--file-pdf-tiny:before {
  content: '\\E4AC';
}
.c-icon--file-audio-tiny:before {
  content: '\\E4AD';
}
.c-icon--file-video-tiny:before {
  content: '\\E4AE';
}
.c-icon--file-presentation-tiny:before {
  content: '\\E4AF';
}
.c-icon--file-email-tiny:before {
  content: '\\E4BA';
}
.c-icon--file-vector-tiny:before {
  content: '\\E4BB';
}
.c-icon--file-spreadsheet-tiny:before {
  content: '\\E4BC';
}
.c-icon--file-media-archive-tiny:before {
  content: '\\E4BD';
}
.c-icon--file-archive-tiny:before {
  content: '\\E4BE';
}
.c-icon--file-executable-tiny:before {
  content: '\\E4BF';
}
.c-icon--file-disk-image-tiny:before {
  content: '\\E4CA';
}
.c-icon--file-cad-tiny:before {
  content: '\\E4CB';
}
.c-icon--file-3d-graphic-tiny:before {
  content: '\\E4CC';
}
.c-icon--file-database-tiny:before {
  content: '\\E4CD';
}
.c-icon--file-binary-tiny:before {
  content: '\\E4CE';
}
.c-icon--file-markdown-tiny:before {
  content: '\\E4CF';
}
.c-icon--file-text-post-tiny:before {
  content: '\\E4DA';
}
.c-icon--file-html-tiny:before {
  content: '\\E4DB';
}
.c-icon--file-code-tiny:before {
  content: '\\E4DC';
}
.c-icon--file-css-tiny:before {
  content: '\\E4DD';
}
.c-icon--file-php-tiny:before {
  content: '\\E4DE';
}
.c-icon--file-snippet-tiny:before {
  content: '\\E4DF';
}
.c-icon--file-word-tiny:before {
  content: '\\E4EA';
}
.c-icon--file-excel-tiny:before {
  content: '\\E4EB';
}
.c-icon--file-powerpoint-tiny:before {
  content: '\\E4EC';
}
.c-icon--file-illustrator-tiny:before {
  content: '\\E4ED';
}
.c-icon--file-photoshop-tiny:before {
  content: '\\E4EE';
}
.c-icon--file-indesign-tiny:before {
  content: '\\E4EF';
}
.c-icon--file-adobe-flash-tiny:before {
  content: '\\E4F0';
}
.c-icon--file-adobe-swf-tiny:before {
  content: '\\E4F1';
}
.c-icon--file-iphone-app-tiny:before {
  content: '\\E4F2';
}
.c-icon--file-android-app-tiny:before {
  content: '\\E4F3';
}
.c-icon--file-dropbox-tiny:before {
  content: '\\E4F4';
}
.c-icon--file-google-document-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-form-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-presentation-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-spreadsheet-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-google-tiny:before {
  content: '\\E4F5';
}
.c-icon--file-qtz-tiny:before {
  content: '\\E4F6';
}
.c-icon--file-sketch-tiny:before {
  content: '\\E4F7';
}
.c-icon--file-figma-tiny:before {
  content: '\\E4F8';
}
.c-icon--star:before {
  content: '\\E500';
}
.c-icon--unstar:before {
  content: '\\E501';
}
.c-icon--bell:before {
  content: '\\E502';
}
.c-icon--lock:before {
  content: '\\E503';
}
.c-icon--external-link-small:before {
  content: '\\E504';
}
.c-icon--external-link-large:before {
  content: '\\E505';
}
.c-icon--presence-online:before {
  content: '\\E506';
}
.c-icon--presence-offline:before {
  content: '\\E507';
}
.c-icon--presence-dnd:before {
  content: '\\E508';
}
.c-icon--presence-external-online:before {
  content: '\\E509';
}
.c-icon--presence-ra-online:before {
  content: '\\E509';
}
.c-icon--restricted-user:before {
  content: '\\E509';
}
.c-icon--presence-external-offline:before {
  content: '\\E510';
}
.c-icon--presence-ra-offline:before {
  content: '\\E510';
}
.c-icon--presence-external-dnd:before {
  content: '\\E511';
}
.c-icon--presence-ra-dnd:before {
  content: '\\E511';
}
.c-icon--presence-ura-online:before {
  content: '\\E512';
}
.c-icon--single-channel-guest:before {
  content: '\\E512';
}
.c-icon--presence-ura-offline:before {
  content: '\\E513';
}
.c-icon--presence-ura-dnd:before {
  content: '\\E514';
}
.c-icon--heart:before {
  content: '\\E515';
}
.c-icon--quote:before {
  content: '\\E516';
}
.c-icon--cog:before {
  content: '\\E517';
}
.c-icon--comment:before {
  content: '\\E518';
}
.c-icon--minus-circle-small:before {
  content: '\\E519';
}
.c-icon--times-circle-small:before {
  content: '\\E520';
}
.c-icon--times-circle-small-filled:before {
  content: '\\E520';
}
.c-icon--multiparty-dm-2:before {
  content: '\\E521';
}
.c-icon--multiparty-dm-3:before {
  content: '\\E522';
}
.c-icon--multiparty-dm-4:before {
  content: '\\E523';
}
.c-icon--multiparty-dm-5:before {
  content: '\\E524';
}
.c-icon--multiparty-dm-6:before {
  content: '\\E525';
}
.c-icon--multiparty-dm-7:before {
  content: '\\E526';
}
.c-icon--multiparty-dm-8:before {
  content: '\\E527';
}
.c-icon--multiparty-dm-9:before {
  content: '\\E528';
}
.c-icon--poo-filled:before {
  content: '\\E529';
}
.c-icon--circle-fill:before {
  content: '\\E530';
}
.c-icon--flag-filled:before {
  content: '\\E531';
}
.c-icon--refresh-small:before {
  content: '\\E532';
}
.c-icon--snooze-filled:before {
  content: '\\E533';
}
.c-icon--archived-channel:before {
  content: '\\E534';
}
.c-icon--presence-dnd-offline:before {
  content: '\\E535';
}
.c-icon--presence-external-dnd-offline:before {
  content: '\\E536';
}
.c-icon--presence-ra-dnd-offline:before {
  content: '\\E536';
}
.c-icon--presence-ura-dnd-offline:before {
  content: '\\E537';
}
.c-icon--presence-mobile-dnd:before {
  content: '\\E538';
}
.c-icon--play-filled:before {
  content: '\\E539';
}
.c-icon--broadcast-filled:before {
  content: '\\E540';
}
.c-icon--small-star-filled:before {
  content: '\\E541';
}
.c-icon--small-comment-filled:before {
  content: '\\E542';
}
.c-icon--paperplane-filled:before {
  content: '\\E543';
}
.c-icon--filebg-large-filled:before {
  content: '\\E544';
}
.c-icon--filebg-small-filled:before {
  content: '\\E545';
}
.c-icon--highlight-filled:before {
  content: '\\E546';
}
.c-icon--pin-filled:before {
  content: '\\E547';
}
.c-icon--thumb-tack-filled:before {
  content: '\\E547';
}
.c-icon--close-filled:before {
  content: '\\E548';
}
.c-icon--share-filled:before {
  content: '\\E549';
}
.c-icon--pencil-filled:before {
  content: '\\E550';
}
.c-icon--side-panel-filled:before {
  content: '\\E551';
}
.c-icon--add-reaction-filled:before {
  content: '\\E552';
}
.c-icon--mentions-filled:before {
  content: '\\E553';
}
.c-icon--small-reply-filled:before {
  content: '\\E554';
}
.c-icon--user-filled:before {
  content: '\\E555';
}
.c-icon--microphone-on:before {
  content: '\\E556';
}
.c-icon--camera-on:before {
  content: '\\E557';
}
.c-icon--screenshare-on:before {
  content: '\\E558';
}
.c-icon--shared-channels:before {
  content: '\\E559';
}
.c-icon--heart-large-filled:before {
  content: '\\E560';
}
.c-icon--thumbs-up-filled:before {
  content: '\\E561';
}
.c-icon--thumbs-down-filled:before {
  content: '\\E562';
}
.c-icon--slow-network:before {
  content: '\\E563';
}
.c-icon--sparkles-filled:before {
  content: '\\E564';
}
.c-icon--small-warning-filled:before {
  content: '\\E565';
}
.c-icon--deactivated-user:before {
  content: '\\E566';
}
.c-icon--lock-small:before {
  content: '\\E567';
}
.c-icon--sc-baseline:before {
  content: '\\E568';
}
.c-icon--shared-channels-baseline:before {
  content: '\\E568';
}
.c-icon--sc-pending:before {
  content: '\\E569';
}
.c-icon--shared-channels-pending:before {
  content: '\\E569';
}
.c-icon--sc-baseline-pending:before {
  content: '\\E570';
}
.c-icon--shared-channels-baseline-pending:before {
  content: '\\E570';
}
.c-icon--cloud-offline-filled:before {
  content: '\\E571';
}
.c-icon--cloud-offline-small-filled:before {
  content: '\\E572';
}
.c-icon--lock-large-filled:before {
  content: '\\E573';
}
.c-icon--input-file-active:before {
  content: '\\E574';
}
.c-icon--input-img-active:before {
  content: '\\E575';
}
.c-icon--input-integration-active:before {
  content: '\\E576';
}
.c-icon--checkbox-full:before {
  content: '\\E577';
}
.c-icon--add-reaction-bg:before {
  content: '\\E578';
}
.c-icon--small-reaction-bg:before {
  content: '\\E579';
}
.c-icon--info-circle-filled:before {
  content: '\\E580';
}
.c-icon--exclamation-circle-filled:before {
  content: '\\E581';
}
.c-icon--missing-emoji:before {
  content: '\\E582';
}
.c-icon--warning-filled:before {
  content: '\\E583';
}
.c-icon--eye-filled:before {
  content: '\\E584';
}
.c-icon--circle-minus-filled:before {
  content: '\\E585';
}
.c-icon--slack:before {
  content: '\\E800';
}
.c-icon--slack-pillow:before {
  content: '\\E801';
}
.c-icon--apple:before {
  content: '\\E802';
}
.c-icon--android:before {
  content: '\\E803';
}
.c-icon--twitter:before {
  content: '\\E804';
}
.c-icon--github:before {
  content: '\\E805';
}
.c-icon--dropbox:before {
  content: '\\E806';
}
.c-icon--google:before {
  content: '\\E807';
}
.c-icon--windows:before {
  content: '\\E808';
}
.c-icon--youtube:before {
  content: '\\E809';
}
.c-icon--google-drive:before {
  content: '\\E810';
}
.c-icon--skype:before {
  content: '\\E811';
}
.c-icon--rss:before {
  content: '\\E812';
}
.c-icon--facebook:before {
  content: '\\E813';
}
.c-icon--asana:before {
  content: '\\E814';
}
.c-icon--linkedin:before {
  content: '\\E815';
}
.c-icon--tumblr:before {
  content: '\\E816';
}
.c-icon--instagram:before {
  content: '\\E817';
}
.c-icon--google-plus:before {
  content: '\\E818';
}
.c-icon--soundcloud:before {
  content: '\\E819';
}
.c-icon--flickr:before {
  content: '\\E820';
}
.c-icon--pinterest:before {
  content: '\\E821';
}
.c-icon--tripit:before {
  content: '\\E822';
}
.c-icon--hangouts:before {
  content: '\\E823';
}
.c-icon--viber:before {
  content: '\\E824';
}
.c-icon--line:before {
  content: '\\E825';
}
.c-icon--facebook-messenger:before {
  content: '\\E826';
}
.c-icon--1password:before {
  content: '\\E827';
}
.c-icon--box:before {
  content: '\\E828';
}
.c-icon--box-square:before {
  content: '\\E829';
}
.c-icon--google-play:before {
  content: '\\E830';
}
.c-icon--spotify:before {
  content: '\\E831';
}
.c-icon--siriusxm:before {
  content: '\\E832';
}
.c-icon--stitcher:before {
  content: '\\E833';
}
.c-icon--pocket-casts:before {
  content: '\\E834';
}
.c-icon--onedrive:before {
  content: '\\E835';
}
.c-icon--vogue:before {
  content: '\\E80A';
}
.c-icon--filetype {
  width: 50px;
}
.c-icon--filetype:before {
  content: '\\E400';
  color: #3aa3e3;
}
.c-icon--filetype:after {
  background-color: #3aa3e3;
}
.c-icon--filetype:before {
  font-size: 50px;
}
.c-icon--filetype-small {
  width: 40px;
}
.c-icon--filetype-small:before {
  content: '\\E401';
  color: #3aa3e3;
}
.c-icon--filetype-small:after {
  background-color: #3aa3e3;
}
.c-icon--filetype-small:before {
  font-size: 40px;
}
.c-icon--filetype-tiny {
  width: 20px;
}
.c-icon--filetype-tiny:before {
  content: '\\E4A0';
  color: #3aa3e3;
}
.c-icon--filetype-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--filetype-tiny:before {
  font-size: 20px;
}
.c-icon--file-spaces:before {
  content: '\\E402';
  color: #66c79e;
}
.c-icon--file-spaces:after {
  background-color: #66c79e;
}
.c-icon--file-spaces-small:before {
  content: '\\E403';
  color: #66c79e;
}
.c-icon--file-spaces-small:after {
  background-color: #66c79e;
}
.c-icon--file-spaces-tiny:before {
  content: '\\E4AA';
  color: #66c79e;
}
.c-icon--file-spaces-tiny:after {
  background-color: #66c79e;
}
.c-icon--file-image:before {
  content: '\\E404';
  color: #3aa3e3;
}
.c-icon--file-image:after {
  background-color: #3aa3e3;
}
.c-icon--file-image-small:before {
  content: '\\E405';
  color: #3aa3e3;
}
.c-icon--file-image-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-image-tiny:before {
  content: '\\E4AB';
  color: #3aa3e3;
}
.c-icon--file-image-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-pdf:before {
  content: '\\E406';
  color: #db4437;
}
.c-icon--file-pdf:after {
  background-color: #db4437;
}
.c-icon--file-pdf-small:before {
  content: '\\E407';
  color: #db4437;
}
.c-icon--file-pdf-small:after {
  background-color: #db4437;
}
.c-icon--file-pdf-tiny:before {
  content: '\\E4AC';
  color: #db4437;
}
.c-icon--file-pdf-tiny:after {
  background-color: #db4437;
}
.c-icon--file-audio:before {
  content: '\\E408';
  color: #3aa3e3;
}
.c-icon--file-audio:after {
  background-color: #3aa3e3;
}
.c-icon--file-audio-small:before {
  content: '\\E409';
  color: #3aa3e3;
}
.c-icon--file-audio-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-audio-tiny:before {
  content: '\\E4AD';
  color: #3aa3e3;
}
.c-icon--file-audio-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-video:before {
  content: '\\E410';
  color: #3aa3e3;
}
.c-icon--file-video:after {
  background-color: #3aa3e3;
}
.c-icon--file-video-small:before {
  content: '\\E411';
  color: #3aa3e3;
}
.c-icon--file-video-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-video-tiny:before {
  content: '\\E4AE';
  color: #3aa3e3;
}
.c-icon--file-video-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-presentation:before {
  content: '\\E412';
  color: #3aa3e3;
}
.c-icon--file-presentation:after {
  background-color: #3aa3e3;
}
.c-icon--file-presentation-small:before {
  content: '\\E413';
  color: #3aa3e3;
}
.c-icon--file-presentation-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-presentation-tiny:before {
  content: '\\E4AF';
  color: #3aa3e3;
}
.c-icon--file-presentation-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-email:before {
  content: '\\E414';
  color: #3aa3e3;
}
.c-icon--file-email:after {
  background-color: #3aa3e3;
}
.c-icon--file-email-small:before {
  content: '\\E415';
  color: #3aa3e3;
}
.c-icon--file-email-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-email-tiny:before {
  content: '\\E4BA';
  color: #3aa3e3;
}
.c-icon--file-email-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-vector:before {
  content: '\\E416';
  color: #3aa3e3;
}
.c-icon--file-vector:after {
  background-color: #3aa3e3;
}
.c-icon--file-vector-small:before {
  content: '\\E417';
  color: #3aa3e3;
}
.c-icon--file-vector-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-vector-tiny:before {
  content: '\\E4BB';
  color: #3aa3e3;
}
.c-icon--file-vector-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-spreadsheet:before {
  content: '\\E418';
  color: #3aa3e3;
}
.c-icon--file-spreadsheet:after {
  background-color: #3aa3e3;
}
.c-icon--file-spreadsheet-small:before {
  content: '\\E419';
  color: #3aa3e3;
}
.c-icon--file-spreadsheet-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-spreadsheet-tiny:before {
  content: '\\E4BC';
  color: #3aa3e3;
}
.c-icon--file-spreadsheet-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-media-archive:before {
  content: '\\E420';
  color: #3aa3e3;
}
.c-icon--file-media-archive:after {
  background-color: #3aa3e3;
}
.c-icon--file-media-archive-small:before {
  content: '\\E421';
  color: #3aa3e3;
}
.c-icon--file-media-archive-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-media-archive-tiny:before {
  content: '\\E4BD';
  color: #3aa3e3;
}
.c-icon--file-media-archive-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-archive:before {
  content: '\\E422';
  color: #3aa3e3;
}
.c-icon--file-archive:after {
  background-color: #3aa3e3;
}
.c-icon--file-archive-small:before {
  content: '\\E423';
  color: #3aa3e3;
}
.c-icon--file-archive-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-archive-tiny:before {
  content: '\\E4BE';
  color: #3aa3e3;
}
.c-icon--file-archive-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-executable:before {
  content: '\\E424';
  color: #3aa3e3;
}
.c-icon--file-executable:after {
  background-color: #3aa3e3;
}
.c-icon--file-executable-small:before {
  content: '\\E425';
  color: #3aa3e3;
}
.c-icon--file-executable-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-executable-tiny:before {
  content: '\\E4BF';
  color: #3aa3e3;
}
.c-icon--file-executable-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-disk-image:before {
  content: '\\E426';
  color: #3aa3e3;
}
.c-icon--file-disk-image:after {
  background-color: #3aa3e3;
}
.c-icon--file-disk-image-small:before {
  content: '\\E427';
  color: #3aa3e3;
}
.c-icon--file-disk-image-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-disk-image-tiny:before {
  content: '\\E4CA';
  color: #3aa3e3;
}
.c-icon--file-disk-image-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-cad:before {
  content: '\\E428';
  color: #3aa3e3;
}
.c-icon--file-cad:after {
  background-color: #3aa3e3;
}
.c-icon--file-cad-small:before {
  content: '\\E429';
  color: #3aa3e3;
}
.c-icon--file-cad-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-cad-tiny:before {
  content: '\\E4CB';
  color: #3aa3e3;
}
.c-icon--file-cad-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-3d-graphic:before {
  content: '\\E430';
  color: #3aa3e3;
}
.c-icon--file-3d-graphic:after {
  background-color: #3aa3e3;
}
.c-icon--file-3d-graphic-small:before {
  content: '\\E431';
  color: #3aa3e3;
}
.c-icon--file-3d-graphic-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-3d-graphic-tiny:before {
  content: '\\E4CC';
  color: #3aa3e3;
}
.c-icon--file-3d-graphic-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-database:before {
  content: '\\E432';
  color: #3aa3e3;
}
.c-icon--file-database:after {
  background-color: #3aa3e3;
}
.c-icon--file-database-small:before {
  content: '\\E433';
  color: #3aa3e3;
}
.c-icon--file-database-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-database-tiny:before {
  content: '\\E4CD';
  color: #3aa3e3;
}
.c-icon--file-database-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-binary:before {
  content: '\\E434';
  color: #3aa3e3;
}
.c-icon--file-binary:after {
  background-color: #3aa3e3;
}
.c-icon--file-binary-small:before {
  content: '\\E435';
  color: #3aa3e3;
}
.c-icon--file-binary-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-binary-tiny:before {
  content: '\\E4CE';
  color: #3aa3e3;
}
.c-icon--file-binary-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-markdown:before {
  content: '\\E436';
  color: #3aa3e3;
}
.c-icon--file-markdown:after {
  background-color: #3aa3e3;
}
.c-icon--file-markdown-small:before {
  content: '\\E437';
  color: #3aa3e3;
}
.c-icon--file-markdown-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-markdown-tiny:before {
  content: '\\E4CF';
  color: #3aa3e3;
}
.c-icon--file-markdown-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-text-post:before {
  content: '\\E438';
  color: #66c79e;
}
.c-icon--file-text-post:after {
  background-color: #66c79e;
}
.c-icon--file-text-post-small:before {
  content: '\\E439';
  color: #66c79e;
}
.c-icon--file-text-post-small:after {
  background-color: #66c79e;
}
.c-icon--file-text-post-tiny:before {
  content: '\\E4DA';
  color: #66c79e;
}
.c-icon--file-text-post-tiny:after {
  background-color: #66c79e;
}
.c-icon--file-html:before {
  content: '\\E440';
  color: #3aa3e3;
}
.c-icon--file-html:after {
  background-color: #3aa3e3;
}
.c-icon--file-html-small:before {
  content: '\\E441';
  color: #3aa3e3;
}
.c-icon--file-html-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-html-tiny:before {
  content: '\\E4DB';
  color: #3aa3e3;
}
.c-icon--file-html-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-code:before {
  content: '\\E442';
  color: #3aa3e3;
}
.c-icon--file-code:after {
  background-color: #3aa3e3;
}
.c-icon--file-code-small:before {
  content: '\\E443';
  color: #3aa3e3;
}
.c-icon--file-code-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-code-tiny:before {
  content: '\\E4DC';
  color: #3aa3e3;
}
.c-icon--file-code-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-css:before {
  content: '\\E444';
  color: #3aa3e3;
}
.c-icon--file-css:after {
  background-color: #3aa3e3;
}
.c-icon--file-css-small:before {
  content: '\\E445';
  color: #3aa3e3;
}
.c-icon--file-css-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-css-tiny:before {
  content: '\\E4DD';
  color: #3aa3e3;
}
.c-icon--file-css-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-php:before {
  content: '\\E446';
  color: #3aa3e3;
}
.c-icon--file-php:after {
  background-color: #3aa3e3;
}
.c-icon--file-php-small:before {
  content: '\\E447';
  color: #3aa3e3;
}
.c-icon--file-php-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-php-tiny:before {
  content: '\\E4DE';
  color: #3aa3e3;
}
.c-icon--file-php-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-snippet:before {
  content: '\\E448';
  color: #4d394b;
}
.c-icon--file-snippet:after {
  background-color: #4d394b;
}
.c-icon--file-snippet-small:before {
  content: '\\E449';
  color: #4d394b;
}
.c-icon--file-snippet-small:after {
  background-color: #4d394b;
}
.c-icon--file-snippet-tiny:before {
  content: '\\E4DF';
  color: #4d394b;
}
.c-icon--file-snippet-tiny:after {
  background-color: #4d394b;
}
.c-icon--file-word:before {
  content: '\\E450';
  color: #2c4098;
}
.c-icon--file-word:after {
  background-color: #2c4098;
}
.c-icon--file-word-small:before {
  content: '\\E451';
  color: #2c4098;
}
.c-icon--file-word-small:after {
  background-color: #2c4098;
}
.c-icon--file-word-tiny:before {
  content: '\\E4EA';
  color: #2c4098;
}
.c-icon--file-word-tiny:after {
  background-color: #2c4098;
}
.c-icon--file-excel:before {
  content: '\\E452';
  color: #377437;
}
.c-icon--file-excel:after {
  background-color: #377437;
}
.c-icon--file-excel-small:before {
  content: '\\E453';
  color: #377437;
}
.c-icon--file-excel-small:after {
  background-color: #377437;
}
.c-icon--file-excel-tiny:before {
  content: '\\E4EB';
  color: #377437;
}
.c-icon--file-excel-tiny:after {
  background-color: #377437;
}
.c-icon--file-powerpoint:before {
  content: '\\E454';
  color: #e05a30;
}
.c-icon--file-powerpoint:after {
  background-color: #e05a30;
}
.c-icon--file-powerpoint-small:before {
  content: '\\E455';
  color: #e05a30;
}
.c-icon--file-powerpoint-small:after {
  background-color: #e05a30;
}
.c-icon--file-powerpoint-tiny:before {
  content: '\\E4EC';
  color: #e05a30;
}
.c-icon--file-powerpoint-tiny:after {
  background-color: #e05a30;
}
.c-icon--file-illustrator:before {
  content: '\\E456';
  color: #f4993c;
}
.c-icon--file-illustrator:after {
  background-color: #f4993c;
}
.c-icon--file-illustrator-small:before {
  content: '\\E457';
  color: #f4993c;
}
.c-icon--file-illustrator-small:after {
  background-color: #f4993c;
}
.c-icon--file-illustrator-tiny:before {
  content: '\\E4ED';
  color: #f4993c;
}
.c-icon--file-illustrator-tiny:after {
  background-color: #f4993c;
}
.c-icon--file-photoshop:before {
  content: '\\E458';
  color: #56b6de;
}
.c-icon--file-photoshop:after {
  background-color: #56b6de;
}
.c-icon--file-photoshop-small:before {
  content: '\\E459';
  color: #56b6de;
}
.c-icon--file-photoshop-small:after {
  background-color: #56b6de;
}
.c-icon--file-photoshop-tiny:before {
  content: '\\E4EE';
  color: #56b6de;
}
.c-icon--file-photoshop-tiny:after {
  background-color: #56b6de;
}
.c-icon--file-indesign:before {
  content: '\\E460';
  color: #eb81ab;
}
.c-icon--file-indesign:after {
  background-color: #eb81ab;
}
.c-icon--file-indesign-small:before {
  content: '\\E461';
  color: #eb81ab;
}
.c-icon--file-indesign-small:after {
  background-color: #eb81ab;
}
.c-icon--file-indesign-tiny:before {
  content: '\\E4EF';
  color: #eb81ab;
}
.c-icon--file-indesign-tiny:after {
  background-color: #eb81ab;
}
.c-icon--file-adobe-flash:before {
  content: '\\E462';
  color: #a72428;
}
.c-icon--file-adobe-flash:after {
  background-color: #a72428;
}
.c-icon--file-adobe-flash-small:before {
  content: '\\E463';
  color: #a72428;
}
.c-icon--file-adobe-flash-small:after {
  background-color: #a72428;
}
.c-icon--file-adobe-flash-tiny:before {
  content: '\\E4F0';
  color: #a72428;
}
.c-icon--file-adobe-flash-tiny:after {
  background-color: #a72428;
}
.c-icon--file-adobe-swf:before {
  content: '\\E464';
  color: #a72428;
}
.c-icon--file-adobe-swf:after {
  background-color: #a72428;
}
.c-icon--file-adobe-swf-small:before {
  content: '\\E465';
  color: #a72428;
}
.c-icon--file-adobe-swf-small:after {
  background-color: #a72428;
}
.c-icon--file-adobe-swf-tiny:before {
  content: '\\E4F1';
  color: #a72428;
}
.c-icon--file-adobe-swf-tiny:after {
  background-color: #a72428;
}
.c-icon--file-iphone-app:before {
  content: '\\E466';
  color: #9ea0a7;
}
.c-icon--file-iphone-app:after {
  background-color: #9ea0a7;
}
.c-icon--file-iphone-app-small:before {
  content: '\\E467';
  color: #9ea0a7;
}
.c-icon--file-iphone-app-small:after {
  background-color: #9ea0a7;
}
.c-icon--file-iphone-app-tiny:before {
  content: '\\E4F2';
  color: #9ea0a7;
}
.c-icon--file-iphone-app-tiny:after {
  background-color: #9ea0a7;
}
.c-icon--file-android-app:before {
  content: '\\E468';
  color: #a4ca3a;
}
.c-icon--file-android-app:after {
  background-color: #a4ca3a;
}
.c-icon--file-android-app-small:before {
  content: '\\E469';
  color: #a4ca3a;
}
.c-icon--file-android-app-small:after {
  background-color: #a4ca3a;
}
.c-icon--file-android-app-tiny:before {
  content: '\\E4F3';
  color: #a4ca3a;
}
.c-icon--file-android-app-tiny:after {
  background-color: #a4ca3a;
}
.c-icon--file-dropbox:before {
  content: '\\E470';
  color: #007ee5;
}
.c-icon--file-dropbox:after {
  background-color: #007ee5;
}
.c-icon--file-dropbox-small:before {
  content: '\\E471';
  color: #007ee5;
}
.c-icon--file-dropbox-small:after {
  background-color: #007ee5;
}
.c-icon--file-dropbox-tiny:before {
  content: '\\E4F4';
  color: #007ee5;
}
.c-icon--file-dropbox-tiny:after {
  background-color: #007ee5;
}
.c-icon--file-google-presentation:before {
  content: '\\E472';
  color: #f4b400;
}
.c-icon--file-google-presentation:after {
  background-color: #f4b400;
}
.c-icon--file-google-presentation-small:before {
  content: '\\E473';
  color: #f4b400;
}
.c-icon--file-google-presentation-small:after {
  background-color: #f4b400;
}
.c-icon--file-google-presentation-tiny:before {
  content: '\\E4F5';
  color: #f4b400;
}
.c-icon--file-google-presentation-tiny:after {
  background-color: #f4b400;
}
.c-icon--file-google-spreadsheet:before {
  content: '\\E472';
  color: #0f9d58;
}
.c-icon--file-google-spreadsheet:after {
  background-color: #0f9d58;
}
.c-icon--file-google-spreadsheet-small:before {
  content: '\\E473';
  color: #0f9d58;
}
.c-icon--file-google-spreadsheet-small:after {
  background-color: #0f9d58;
}
.c-icon--file-google-spreadsheet-tiny:before {
  content: '\\E4F5';
  color: #0f9d58;
}
.c-icon--file-google-spreadsheet-tiny:after {
  background-color: #0f9d58;
}
.c-icon--file-google-document:before {
  content: '\\E472';
  color: #4285f4;
}
.c-icon--file-google-document:after {
  background-color: #4285f4;
}
.c-icon--file-google-document-small:before {
  content: '\\E473';
  color: #4285f4;
}
.c-icon--file-google-document-small:after {
  background-color: #4285f4;
}
.c-icon--file-google-document-tiny:before {
  content: '\\E4F5';
  color: #4285f4;
}
.c-icon--file-google-document-tiny:after {
  background-color: #4285f4;
}
.c-icon--file-google-form:before {
  content: '\\E472';
  color: #db4437;
}
.c-icon--file-google-form:after {
  background-color: #db4437;
}
.c-icon--file-google-form-small:before {
  content: '\\E473';
  color: #db4437;
}
.c-icon--file-google-form-small:after {
  background-color: #db4437;
}
.c-icon--file-google-form-tiny:before {
  content: '\\E4F5';
  color: #db4437;
}
.c-icon--file-google-form-tiny:after {
  background-color: #db4437;
}
.c-icon--file-qtz:before {
  content: '\\E474';
  color: #3aa3e3;
}
.c-icon--file-qtz:after {
  background-color: #3aa3e3;
}
.c-icon--file-qtz-small:before {
  content: '\\E475';
  color: #3aa3e3;
}
.c-icon--file-qtz-small:after {
  background-color: #3aa3e3;
}
.c-icon--file-qtz-tiny:before {
  content: '\\E4F6';
  color: #3aa3e3;
}
.c-icon--file-qtz-tiny:after {
  background-color: #3aa3e3;
}
.c-icon--file-sketch:before {
  content: '\\E476';
  color: #f4993c;
}
.c-icon--file-sketch:after {
  background-color: #f4993c;
}
.c-icon--file-sketch-small:before {
  content: '\\E477';
  color: #f4993c;
}
.c-icon--file-sketch-small:after {
  background-color: #f4993c;
}
.c-icon--file-sketch-tiny:before {
  content: '\\E4F7';
  color: #f4993c;
}
.c-icon--file-sketch-tiny:after {
  background-color: #f4993c;
}
.c-icon--file-figma-tiny:before {
  content: '\\E4F8';
  color: #1d1c1d;
}
.c-icon--file-figma-tiny:after {
  background-color: #1d1c1d;
}
/*
 * PLASTIC
 * Fonts
 * Site-wide fonts and helpers
 */
@font-face {
  font-family: 'appleLogo';
  src: local('Lucida Grande');
  unicode-range: U+F8FF;
}
/* Double-quotes are required to get Helvetica Neue to load properly */
/*
 * Explanation of font-family choice / sequence ...
 * consolas is a MSFT font included with Windows XP and is designed for legibility,
 * ClearType-friendly etc. https://en.wikipedia.org/wiki/Consolas
 * \`courier\` is next as it looks nice on the Mac, which won't have Consolas.
 * there is \`Menlo\` on the Mac, but it's quite tall and long compared to courier.
 * as a fallback, \`monospace\` is the generic family we want to render snippets with.
 */
/*
 * PLASTIC
 * Utilities
 * Mixins for common styles.
 *
 * To be used in other stylesheets in the form:
 * .selector {
 *     .name_of_mixin;
 * }
 *
 * plastic_helpers.source.less defines helper classes for these mixins, to be used as inline classes in markup:
 * <div class="name_of_helper"></div>
 *
 */
/* Font Size Mixin
 * For example:
 * 	.font_size(16px);		// 16 is in px unit and will output in rem unit: \`font-size: 1rem;\`
*/
/* Line Height Mixin
 * For example:
 * 	.line_height(24px);	// 24 is in px unit and will output in rem unit: \`line-height: 1.5rem;\`
*/
.tiny {
  font-size: 0.7rem;
}
.small {
  font-size: 0.9rem;
}
.SettingsEditor {
  background: white;
  font-family: Slack-Lato, Lucida Grande, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;
}
.SettingsEditor header {
  position: fixed;
  background-color: #f8f8f8;
  padding: 8px;
  border-bottom: 1px solid #e2e2e2;
  text-align: center;
  width: 100%;
}
.SettingsEditor button {
  background: #007a5a;
  color: #fff;
  line-height: 1.2rem;
  font-weight: 900;
  cursor: pointer;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  padding: 8px 14px 9px;
  font-size: 15px;
  font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
  width: 150px;
  margin-right: 20px;
  transition: background-color 0.5s;
}
.SettingsEditor button:focus,
.SettingsEditor button:hover {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
  outline: none;
}
.SettingsEditor button:active {
  background-color: #9ecebb;
}
.SettingsEditor table#settings {
  display: inline-block;
  margin: 53px 0 0 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
  border-collapse: collapse;
}
.SettingsEditor table#settings thead tr {
  position: sticky;
  top: 0;
  background-color: #f8f8f8;
}
.SettingsEditor table#settings tr.settings-row {
  white-space: nowrap;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
}
.SettingsEditor table#settings tr.settings-row td label.computed-value {
  display: block;
  max-width: 300px;
  overflow: scroll;
}
.SettingsEditor table#settings tr.settings-row td input {
  flex-grow: 1;
  font-family: Consolas, Monaco, 'Lucida Console', monospace;
}
.SettingsEditor table#settings tr.settings-row td input,
.SettingsEditor table#settings tr.settings-row td select {
  background-color: transparent;
  border: 1px solid #ddd;
}
.SettingsEditor table#settings tr.settings-row td:first-child {
  padding-left: 5px;
}
.SettingsEditor table#settings tr.settings-row:first-child {
  border-top: none;
}
.SettingsEditor table#settings tr.settings-row:last-child {
  border-bottom: none;
}
.SettingsEditor table#settings #feature-flags {
  width: 100%;
}
.SettingsEditor table#settings td.highlight {
  background: #fcf4da;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/settings-editor.less","webpack://./src/resources/lato.less","webpack://./src/resources/slack-icons-font.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AElEA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AFmEF;AEvDA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AFyDF;AExDE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AF0EF;AExDA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AF0DF;AEzDE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AF2DJ;AEzDE;EAEE,gBAAA;AF0DJ;AEnDA;EACE,UAAA;AFqDF;AEpDE;EACE,kBAAA;AFsDJ;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEknBA;EAEE,WAAA;AFjnBF;AEsmBE;EACE,gBAAA;EACA,cAAA;AFpmBJ;AEsmBE;EACE,yBAAA;AFpmBJ;AE4mBE;EACE,eAAA;AF1mBJ;AE8mBA;EAEE,WAAA;AF7mBF;AEylBE;EACE,gBAAA;EACA,cAAA;AFvlBJ;AEylBE;EACE,yBAAA;AFvlBJ;AEwmBE;EACE,eAAA;AFtmBJ;AE0mBA;EAEE,WAAA;AFzmBF;AE4kBE;EACE,gBAAA;EACA,cAAA;AF1kBJ;AE4kBE;EACE,yBAAA;AF1kBJ;AEomBE;EACE,eAAA;AFlmBJ;AEkkBE;EACE,gBAAA;EACA,cAAA;AFhkBJ;AEkkBE;EACE,yBAAA;AFhkBJ;AE2jBE;EACE,gBAAA;EACA,cAAA;AFzjBJ;AE2jBE;EACE,yBAAA;AFzjBJ;AEojBE;EACE,gBAAA;EACA,cAAA;AFljBJ;AEojBE;EACE,yBAAA;AFljBJ;AE6iBE;EACE,gBAAA;EACA,cAAA;AF3iBJ;AE6iBE;EACE,yBAAA;AF3iBJ;AEsiBE;EACE,gBAAA;EACA,cAAA;AFpiBJ;AEsiBE;EACE,yBAAA;AFpiBJ;AE+hBE;EACE,gBAAA;EACA,cAAA;AF7hBJ;AE+hBE;EACE,yBAAA;AF7hBJ;AEwhBE;EACE,gBAAA;EACA,cAAA;AFthBJ;AEwhBE;EACE,yBAAA;AFthBJ;AEihBE;EACE,gBAAA;EACA,cAAA;AF/gBJ;AEihBE;EACE,yBAAA;AF/gBJ;AE0gBE;EACE,gBAAA;EACA,cAAA;AFxgBJ;AE0gBE;EACE,yBAAA;AFxgBJ;AEmgBE;EACE,gBAAA;EACA,cAAA;AFjgBJ;AEmgBE;EACE,yBAAA;AFjgBJ;AE4fE;EACE,gBAAA;EACA,cAAA;AF1fJ;AE4fE;EACE,yBAAA;AF1fJ;AEqfE;EACE,gBAAA;EACA,cAAA;AFnfJ;AEqfE;EACE,yBAAA;AFnfJ;AE8eE;EACE,gBAAA;EACA,cAAA;AF5eJ;AE8eE;EACE,yBAAA;AF5eJ;AEueE;EACE,gBAAA;EACA,cAAA;AFreJ;AEueE;EACE,yBAAA;AFreJ;AEgeE;EACE,gBAAA;EACA,cAAA;AF9dJ;AEgeE;EACE,yBAAA;AF9dJ;AEydE;EACE,gBAAA;EACA,cAAA;AFvdJ;AEydE;EACE,yBAAA;AFvdJ;AEkdE;EACE,gBAAA;EACA,cAAA;AFhdJ;AEkdE;EACE,yBAAA;AFhdJ;AE2cE;EACE,gBAAA;EACA,cAAA;AFzcJ;AE2cE;EACE,yBAAA;AFzcJ;AEocE;EACE,gBAAA;EACA,cAAA;AFlcJ;AEocE;EACE,yBAAA;AFlcJ;AE6bE;EACE,gBAAA;EACA,cAAA;AF3bJ;AE6bE;EACE,yBAAA;AF3bJ;AEsbE;EACE,gBAAA;EACA,cAAA;AFpbJ;AEsbE;EACE,yBAAA;AFpbJ;AE+aE;EACE,gBAAA;EACA,cAAA;AF7aJ;AE+aE;EACE,yBAAA;AF7aJ;AEwaE;EACE,gBAAA;EACA,cAAA;AFtaJ;AEwaE;EACE,yBAAA;AFtaJ;AEiaE;EACE,gBAAA;EACA,cAAA;AF/ZJ;AEiaE;EACE,yBAAA;AF/ZJ;AE0ZE;EACE,gBAAA;EACA,cAAA;AFxZJ;AE0ZE;EACE,yBAAA;AFxZJ;AEmZE;EACE,gBAAA;EACA,cAAA;AFjZJ;AEmZE;EACE,yBAAA;AFjZJ;AE4YE;EACE,gBAAA;EACA,cAAA;AF1YJ;AE4YE;EACE,yBAAA;AF1YJ;AEqYE;EACE,gBAAA;EACA,cAAA;AFnYJ;AEqYE;EACE,yBAAA;AFnYJ;AE8XE;EACE,gBAAA;EACA,cAAA;AF5XJ;AE8XE;EACE,yBAAA;AF5XJ;AEuXE;EACE,gBAAA;EACA,cAAA;AFrXJ;AEuXE;EACE,yBAAA;AFrXJ;AEgXE;EACE,gBAAA;EACA,cAAA;AF9WJ;AEgXE;EACE,yBAAA;AF9WJ;AEyWE;EACE,gBAAA;EACA,cAAA;AFvWJ;AEyWE;EACE,yBAAA;AFvWJ;AEkWE;EACE,gBAAA;EACA,cAAA;AFhWJ;AEkWE;EACE,yBAAA;AFhWJ;AE2VE;EACE,gBAAA;EACA,cAAA;AFzVJ;AE2VE;EACE,yBAAA;AFzVJ;AEoVE;EACE,gBAAA;EACA,cAAA;AFlVJ;AEoVE;EACE,yBAAA;AFlVJ;AE6UE;EACE,gBAAA;EACA,cAAA;AF3UJ;AE6UE;EACE,yBAAA;AF3UJ;AEsUE;EACE,gBAAA;EACA,cAAA;AFpUJ;AEsUE;EACE,yBAAA;AFpUJ;AE+TE;EACE,gBAAA;EACA,cAAA;AF7TJ;AE+TE;EACE,yBAAA;AF7TJ;AEwTE;EACE,gBAAA;EACA,cAAA;AFtTJ;AEwTE;EACE,yBAAA;AFtTJ;AEiTE;EACE,gBAAA;EACA,cAAA;AF/SJ;AEiTE;EACE,yBAAA;AF/SJ;AE0SE;EACE,gBAAA;EACA,cAAA;AFxSJ;AE0SE;EACE,yBAAA;AFxSJ;AEmSE;EACE,gBAAA;EACA,cAAA;AFjSJ;AEmSE;EACE,yBAAA;AFjSJ;AE4RE;EACE,gBAAA;EACA,cAAA;AF1RJ;AE4RE;EACE,yBAAA;AF1RJ;AEqRE;EACE,gBAAA;EACA,cAAA;AFnRJ;AEqRE;EACE,yBAAA;AFnRJ;AE8QE;EACE,gBAAA;EACA,cAAA;AF5QJ;AE8QE;EACE,yBAAA;AF5QJ;AEuQE;EACE,gBAAA;EACA,cAAA;AFrQJ;AEuQE;EACE,yBAAA;AFrQJ;AEgQE;EACE,gBAAA;EACA,cAAA;AF9PJ;AEgQE;EACE,yBAAA;AF9PJ;AEyPE;EACE,gBAAA;EACA,cAAA;AFvPJ;AEyPE;EACE,yBAAA;AFvPJ;AEkPE;EACE,gBAAA;EACA,cAAA;AFhPJ;AEkPE;EACE,yBAAA;AFhPJ;AE2OE;EACE,gBAAA;EACA,cAAA;AFzOJ;AE2OE;EACE,yBAAA;AFzOJ;AEoOE;EACE,gBAAA;EACA,cAAA;AFlOJ;AEoOE;EACE,yBAAA;AFlOJ;AE6NE;EACE,gBAAA;EACA,cAAA;AF3NJ;AE6NE;EACE,yBAAA;AF3NJ;AEsNE;EACE,gBAAA;EACA,cAAA;AFpNJ;AEsNE;EACE,yBAAA;AFpNJ;AE+ME;EACE,gBAAA;EACA,cAAA;AF7MJ;AE+ME;EACE,yBAAA;AF7MJ;AEwME;EACE,gBAAA;EACA,cAAA;AFtMJ;AEwME;EACE,yBAAA;AFtMJ;AEiME;EACE,gBAAA;EACA,cAAA;AF/LJ;AEiME;EACE,yBAAA;AF/LJ;AE0LE;EACE,gBAAA;EACA,cAAA;AFxLJ;AE0LE;EACE,yBAAA;AFxLJ;AEmLE;EACE,gBAAA;EACA,cAAA;AFjLJ;AEmLE;EACE,yBAAA;AFjLJ;AE4KE;EACE,gBAAA;EACA,cAAA;AF1KJ;AE4KE;EACE,yBAAA;AF1KJ;AEqKE;EACE,gBAAA;EACA,cAAA;AFnKJ;AEqKE;EACE,yBAAA;AFnKJ;AE8JE;EACE,gBAAA;EACA,cAAA;AF5JJ;AE8JE;EACE,yBAAA;AF5JJ;AEuJE;EACE,gBAAA;EACA,cAAA;AFrJJ;AEuJE;EACE,yBAAA;AFrJJ;AEgJE;EACE,gBAAA;EACA,cAAA;AF9IJ;AEgJE;EACE,yBAAA;AF9IJ;AEyIE;EACE,gBAAA;EACA,cAAA;AFvIJ;AEyIE;EACE,yBAAA;AFvIJ;AEkIE;EACE,gBAAA;EACA,cAAA;AFhIJ;AEkIE;EACE,yBAAA;AFhIJ;AE2HE;EACE,gBAAA;EACA,cAAA;AFzHJ;AE2HE;EACE,yBAAA;AFzHJ;AEoHE;EACE,gBAAA;EACA,cAAA;AFlHJ;AEoHE;EACE,yBAAA;AFlHJ;AE6GE;EACE,gBAAA;EACA,cAAA;AF3GJ;AE6GE;EACE,yBAAA;AF3GJ;AEsGE;EACE,gBAAA;EACA,cAAA;AFpGJ;AEsGE;EACE,yBAAA;AFpGJ;AE+FE;EACE,gBAAA;EACA,cAAA;AF7FJ;AE+FE;EACE,yBAAA;AF7FJ;AEwFE;EACE,gBAAA;EACA,cAAA;AFtFJ;AEwFE;EACE,yBAAA;AFtFJ;AEiFE;EACE,gBAAA;EACA,cAAA;AF/EJ;AEiFE;EACE,yBAAA;AF/EJ;AE0EE;EACE,gBAAA;EACA,cAAA;AFxEJ;AE0EE;EACE,yBAAA;AFxEJ;AEmEE;EACE,gBAAA;EACA,cAAA;AFjEJ;AEmEE;EACE,yBAAA;AFjEJ;AE4DE;EACE,gBAAA;EACA,cAAA;AF1DJ;AE4DE;EACE,yBAAA;AF1DJ;AEqDE;EACE,gBAAA;EACA,cAAA;AFnDJ;AEqDE;EACE,yBAAA;AFnDJ;AE8CE;EACE,gBAAA;EACA,cAAA;AF5CJ;AE8CE;EACE,yBAAA;AF5CJ;AEuCE;EACE,gBAAA;EACA,cAAA;AFrCJ;AEuCE;EACE,yBAAA;AFrCJ;AEgCE;EACE,gBAAA;EACA,cAAA;AF9BJ;AEgCE;EACE,yBAAA;AF9BJ;AEyBE;EACE,gBAAA;EACA,cAAA;AFvBJ;AEyBE;EACE,yBAAA;AFvBJ;AEkBE;EACE,gBAAA;EACA,cAAA;AFhBJ;AEkBE;EACE,yBAAA;AFhBJ;AEWE;EACE,gBAAA;EACA,cAAA;AFTJ;AEWE;EACE,yBAAA;AFTJ;AEIE;EACE,gBAAA;EACA,cAAA;AFFJ;AEIE;EACE,yBAAA;AFFJ;AEHE;EACE,gBAAA;EACA,cAAA;AFKJ;AEHE;EACE,yBAAA;AFKJ;AEVE;EACE,gBAAA;EACA,cAAA;AFYJ;AEVE;EACE,yBAAA;AFYJ;AEjBE;EACE,gBAAA;EACA,cAAA;AFmBJ;AEjBE;EACE,yBAAA;AFmBJ;AExBE;EACE,gBAAA;EACA,cAAA;AF0BJ;AExBE;EACE,yBAAA;AF0BJ;AE/BE;EACE,gBAAA;EACA,cAAA;AFiCJ;AE/BE;EACE,yBAAA;AFiCJ;AEtCE;EACE,gBAAA;EACA,cAAA;AFwCJ;AEtCE;EACE,yBAAA;AFwCJ;AE7CE;EACE,gBAAA;EACA,cAAA;AF+CJ;AE7CE;EACE,yBAAA;AF+CJ;AEpDE;EACE,gBAAA;EACA,cAAA;AFsDJ;AEpDE;EACE,yBAAA;AFsDJ;AE3DE;EACE,gBAAA;EACA,cAAA;AF6DJ;AE3DE;EACE,yBAAA;AF6DJ;AElEE;EACE,gBAAA;EACA,cAAA;AFoEJ;AElEE;EACE,yBAAA;AFoEJ;AEzEE;EACE,gBAAA;EACA,cAAA;AF2EJ;AEzEE;EACE,yBAAA;AF2EJ;AEhFE;EACE,gBAAA;EACA,cAAA;AFkFJ;AEhFE;EACE,yBAAA;AFkFJ;AEvFE;EACE,gBAAA;EACA,cAAA;AFyFJ;AEvFE;EACE,yBAAA;AFyFJ;AE9FE;EACE,gBAAA;EACA,cAAA;AFgGJ;AE9FE;EACE,yBAAA;AFgGJ;AErGE;EACE,gBAAA;EACA,cAAA;AFuGJ;AErGE;EACE,yBAAA;AFuGJ;AE5GE;EACE,gBAAA;EACA,cAAA;AF8GJ;AE5GE;EACE,yBAAA;AF8GJ;AEnHE;EACE,gBAAA;EACA,cAAA;AFqHJ;AEnHE;EACE,yBAAA;AFqHJ;AE1HE;EACE,gBAAA;EACA,cAAA;AF4HJ;AE1HE;EACE,yBAAA;AF4HJ;AEjIE;EACE,gBAAA;EACA,cAAA;AFmIJ;AEjIE;EACE,yBAAA;AFmIJ;AExIE;EACE,gBAAA;EACA,cAAA;AF0IJ;AExIE;EACE,yBAAA;AF0IJ;AE/IE;EACE,gBAAA;EACA,cAAA;AFiJJ;AE/IE;EACE,yBAAA;AFiJJ;AEtJE;EACE,gBAAA;EACA,cAAA;AFwJJ;AEtJE;EACE,yBAAA;AFwJJ;AE7JE;EACE,gBAAA;EACA,cAAA;AF+JJ;AE7JE;EACE,yBAAA;AF+JJ;AEpKE;EACE,gBAAA;EACA,cAAA;AFsKJ;AEpKE;EACE,yBAAA;AFsKJ;AE3KE;EACE,gBAAA;EACA,cAAA;AF6KJ;AE3KE;EACE,yBAAA;AF6KJ;AElLE;EACE,gBAAA;EACA,cAAA;AFoLJ;AElLE;EACE,yBAAA;AFoLJ;AEzLE;EACE,gBAAA;EACA,cAAA;AF2LJ;AEzLE;EACE,yBAAA;AF2LJ;AEhME;EACE,gBAAA;EACA,cAAA;AFkMJ;AEhME;EACE,yBAAA;AFkMJ;AEvME;EACE,gBAAA;EACA,cAAA;AFyMJ;AEvME;EACE,yBAAA;AFyMJ;AE9ME;EACE,gBAAA;EACA,cAAA;AFgNJ;AE9ME;EACE,yBAAA;AFgNJ;AErNE;EACE,gBAAA;EACA,cAAA;AFuNJ;AErNE;EACE,yBAAA;AFuNJ;AE5NE;EACE,gBAAA;EACA,cAAA;AF8NJ;AE5NE;EACE,yBAAA;AF8NJ;AEnOE;EACE,gBAAA;EACA,cAAA;AFqOJ;AEnOE;EACE,yBAAA;AFqOJ;AE1OE;EACE,gBAAA;EACA,cAAA;AF4OJ;AE1OE;EACE,yBAAA;AF4OJ;AEjPE;EACE,gBAAA;EACA,cAAA;AFmPJ;AEjPE;EACE,yBAAA;AFmPJ;AExPE;EACE,gBAAA;EACA,cAAA;AF0PJ;AExPE;EACE,yBAAA;AF0PJ;AE/PE;EACE,gBAAA;EACA,cAAA;AFiQJ;AE/PE;EACE,yBAAA;AFiQJ;AEtQE;EACE,gBAAA;EACA,cAAA;AFwQJ;AEtQE;EACE,yBAAA;AFwQJ;AE7QE;EACE,gBAAA;EACA,cAAA;AF+QJ;AE7QE;EACE,yBAAA;AF+QJ;AEpRE;EACE,gBAAA;EACA,cAAA;AFsRJ;AEpRE;EACE,yBAAA;AFsRJ;AE3RE;EACE,gBAAA;EACA,cAAA;AF6RJ;AE3RE;EACE,yBAAA;AF6RJ;AACA;;;;EAIE;AG7xFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AH+xFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;;;;;;;;;;;EAaE;AACF;;;CAGC;AACD;;;CAGC;AIxuFD;EACE,iBAAA;AJ0uFF;AIxuFA;EACE,iBAAA;AJ0uFF;AAl0FA;EACE,iBAAA;EACA,kDAAA;EAEA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,aAAA;AAm0FF;AA10FA;EAUI,eAAA;EACA,yBAAA;EACA,YAAA;EACA,gCAAA;EACA,kBAAA;EACA,WAAA;AAm0FJ;AAl1FA;EAmBI,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,yCAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,0DAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;AAk0FJ;AAn2FA;;EAsCI,4CAAA;EACA,aAAA;AAi0FJ;AAx2FA;EA2CI,yBAAA;AAg0FJ;AA32FA;EA+CI,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;AA+zFJ;AAn3FA;EAuDM,gBAAA;EACA,MAAA;EACA,yBAAA;AA+zFN;AAx3FA;EA6DM,mBAAA;EACA,6BAAA;EACA,gCAAA;AA8zFN;AA73FA;EAkEU,cAAA;EACA,gBAAA;EACA,gBAAA;AA8zFV;AAl4FA;EAuEU,YAAA;EACA,0DAAA;AA8zFV;AAt4FA;;EA4EU,6BAAA;EACA,sBAAA;AA8zFV;AA5zFQ;EACE,iBAAA;AA8zFV;AA94FA;EAsFM,gBAAA;AA2zFN;AAj5FA;EA0FM,mBAAA;AA0zFN;AAp5FA;EA8FM,WAAA;AAyzFN;AAv5FA;EAkGM,mBAAA;AAwzFN",sourcesContent:[`@import '../../resources/lato.less';
@import '../../resources/slack-icons-font.less';
@import '../../resources/plastic/plastic_colors.less';
@import '../../resources/plastic/plastic_typography.less';
@import '../../resources/plastic/plastic_utilities.less';

@settings-font-family:
  Slack-Lato,
  Lucida Grande,
  sans-serif;

.SettingsEditor {
  background: white;
  font-family: @settings-font-family;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100vh;

  header {
    position: fixed;
    background-color: @sk_off_white_hex;
    padding: 8px;
    border-bottom: 1px solid #e2e2e2;
    text-align: center;
    width: 100%;
  }

  button {
    background: @sk_seafoam_green;
    color: #fff;
    line-height: 1.2rem;
    font-weight: 900;
    cursor: pointer;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 0.25rem;
    box-shadow: none;
    padding: 8px 14px 9px;
    font-size: 15px;
    font-family: NotoSansJP, Slack-Lato, appleLogo, sans-serif;
    width: 150px;
    margin-right: 20px;
    transition: background-color 0.5s;
  }

  button:focus,
  button:hover {
    box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
    outline: none;
  }

  button:active {
    background-color: rgb(158, 206, 187);
  }

  table#settings {
    display: inline-block;
    margin: 53px 0 0 0;
    height: 100%;
    width: 100%;
    overflow: scroll;
    border-collapse: collapse;

    thead tr {
      position: sticky;
      top: 0;
      background-color: @sk_off_white_hex;
    }

    tr.settings-row {
      white-space: nowrap;
      border-top: 1px solid #ebebeb;
      border-bottom: 1px solid #ebebeb;
      td {
        label.computed-value {
          display: block;
          max-width: 300px;
          overflow: scroll;
        }
        input {
          flex-grow: 1;
          font-family: Consolas, Monaco, 'Lucida Console', monospace;
        }
        input,
        select {
          background-color: transparent;
          border: 1px solid @sk_soft_grey_hex;
        }
        &:first-child {
          padding-left: 5px;
        }
      }
    }

    tr.settings-row:first-child {
      border-top: none;
    }

    tr.settings-row:last-child {
      border-bottom: none;
    }

    #feature-flags {
      width: 100%;
    }

    td.highlight {
      background: @sk_mention_yellow;
    }
  }
}
`,`/*

This is a smaller variant of the new Lato2, serving compressed woff2 files.

Currently: TS-Only
Clients needs to have Lato2 pref turned ON.

The payload is 50% smaller. However, woff2 is not yet well supported,
so we're still providing the woff as fallback.

*/

/* Light */

@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 300;
  src: url(./fonts/woff2/lato-light.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(./fonts/woff2/lato-regular.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(./fonts/woff2/lato-bold.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(./fonts/woff2/lato-black.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(./fonts/woff2/lato-italic-light.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(./fonts/woff2/lato-italic.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(./fonts/woff2/lato-italic-bold.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(./fonts/woff2/lato-italic-black.woff2) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
`,`// This file is an adapted version of Slack Icons v2,
// stripped down for desktop needs. This surgery was necessary
// so that we can use the new Slack icons without carrying around
// all of Slack Kit.
@import 'plastic/plastic_utilities.less';

@c-icon_default_size: 20px;

@font-face {
  // This is the new icon font with square boxes for better default alignment
  font-family: 'Slack v2';
  src: url(./fonts/slack-icons-v2.woff2) format('woff2');
  font-style: normal;
  font-weight: 400;
}

.t-icon(@size: 20px) {
  font-family: 'Slack v2';
  font-size: @size;
  font-style: normal;
  font-weight: normal;
  display: inline-block;
  vertical-align: middle;
}

.c-icon {
  position: relative;
  display: inline-flex;
  width: @c-icon_default_size;
  height: @c-icon_default_size;
  align-items: center;
  justify-content: center;
  &:before {
    .t-icon(@c-icon_default_size);
  }
}

// -------------------------------------------------------
// Inline with Text Variation
// -------------------------------------------------------
.c-icon--inline {
  width: @c-icon_default_size;
  height: auto;
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.5em;
    margin-left: -0.5em;
    width: 1em;
    height: 1em;
  }
  &:after {
    // Zero-width space
    content: '\\200B';
  }
}

// -------------------------------------------------------
// Inherit Font Size Variation
// -------------------------------------------------------
.c-icon--inherit {
  width: 1em;
  &:before {
    font-size: inherit;
  }
}

// -------------------------------------------------------
// Animated Variations
//
// DISABLED since we currently don't need them. Uncomment
// when you do!
//
// -------------------------------------------------------
// // Spin
// .t-keyframes(@instance_name; @global_name) when (@global_name = spin) {
//   @keyframes @instance_name {
//       0% {
//           transform: rotate(0deg);
//       }
//       100% {
//           transform: rotate(360deg);
//       }
//   }
// }

// // Fade
// .t-keyframes(@instance_name; @global_name) when (@global_name = fade) {
//   @keyframes @instance_name {
//       from { opacity: 0; }
//       to { opacity: 1; }
//   }
// }

// .c-icon--spin:before {
//   .t-keyframes(c-icon--spin, spin);
//   .t-animation(c-icon--spin);
// }

// -------------------------------------------------------
// Character definitions
// -------------------------------------------------------
@icon-star-o: '\\E001';
@icon-unstar-o: '\\E002';
@icon-user: '\\E003';
@icon-comment-alt: '\\E004';
@icon-comment-o: '\\E005';
@icon-home: '\\E006';
@icon-info: '\\E007';
@icon-channel-info: '\\E008';
@icon-info-circle: '\\E008';
@icon-mentions: '\\E009';
@icon-gn-menu: '\\E00A';
@icon-search: '\\E010';
@icon-bolt: '\\E011';
@icon-mobile: '\\E012';
@icon-tablet: '\\E013';
@icon-laptop: '\\E014';
@icon-bell-o: '\\E015';
@icon-bell-slash: '\\E016';
@icon-team-directory: '\\E017';
@icon-cloud-upload: '\\E018';
@icon-cloud-download: '\\E019';
@icon-bolt-add: '\\E01A';
@icon-search-medium: '\\E01B';
@icon-cog-o: '\\E020';
@icon-cogs: '\\E021';
@icon-key: '\\E022';
@icon-calendar: '\\E023';
@icon-pencil: '\\E024';
@icon-lightbulb-o: '\\E025';
@icon-magic: '\\E026';
@icon-external-link: '\\E027';
@icon-external-link-square: '\\E028';
@icon-lock-o: '\\E029';
@icon-unlock: '\\E030';
@icon-folder: '\\E031';
@icon-folder-open: '\\E032';
@icon-archive: '\\E033';
@icon-inbox: '\\E034';
@icon-sitemap: '\\E035';
@icon-book: '\\E036';
@icon-envelope-o: '\\E037';
@icon-image: '\\E038';
@icon-building: '\\E039';
@icon-plug: '\\E040';
@icon-paper-plane: '\\E041';
@icon-credit-card: '\\E042';
@icon-life-ring: '\\E043';
@icon-thumb-tack: '\\E044';
@icon-trash: '\\E045';
@icon-print: '\\E046';
@icon-quote-o: '\\E047';
@icon-th-large: '\\E048';
@icon-eye: '\\E049';
@icon-eye-closed: '\\E050';
@icon-volume-off: '\\E051';
@icon-volume-down: '\\E052';
@icon-volume-medium: '\\E053';
@icon-volume-up: '\\E054';
@icon-volume-off-alt: '\\E055';
@icon-heart-o: '\\E056';
@icon-wrench: '\\E057';
@icon-file: '\\E058';
@icon-all-files: '\\E059';
@icon-img-left: '\\E05A';
@icon-img-center: '\\E05B';
@icon-img-right: '\\E05C';
@icon-img-fullbleed: '\\E05D';
@icon-img-fullwidth: '\\E05D';
@icon-your-files: '\\E060';
@icon-align-left: '\\E061';
@icon-align-center: '\\E062';
@icon-align-right: '\\E063';
@icon-align-justify: '\\E064';
@icon-paragraph: '\\E065';
@icon-code: '\\E066';
@icon-ellipsis: '\\E067';
@icon-ellipsis-baseline: '\\E068';
@icon-spinner: '\\E069';
@icon-spiral: '\\E070';
@icon-random: '\\E071';
@icon-repeat: '\\E072';
@icon-share-square-o: '\\E073';
@icon-link: '\\E074';
@icon-undo: '\\E075';
@icon-history: '\\E076';
@icon-hourglass-empty: '\\E077';
@icon-hourglass: '\\E078';
@icon-clock-o: '\\E079';
@icon-dashboard: '\\E080';
@icon-power-off: '\\E081';
@icon-sign-in: '\\E082';
@icon-sign-out: '\\E083';
@icon-jump: '\\E084';
@icon-globe: '\\E085';
@icon-filter: '\\E086';
@icon-microphone: '\\E087';
@icon-microphone-slash: '\\E088';
@icon-paperclip: '\\E089';
@icon-video-camera: '\\E090';
@icon-stop-video: '\\E091';
@icon-phone: '\\E092';
@icon-unarchive: '\\E093';
@icon-smile-o: '\\E094';
@icon-share-screen: '\\E095';
@icon-stop-screen-sharing: '\\E096';
@icon-stop-screen-sharing-alt: '\\E097';
@icon-feedback: '\\E098';
@icon-paper-plane-alt: '\\E099';
@icon-cloud-offline: '\\E0A0';
@icon-cloud-offline-small: '\\E0A1';
@icon-filters: '\\E0A2';
@icon-lock-large: '\\E0A3';
@icon-checkbox-empty: '\\E0A4';
@icon-input-file: '\\E0A5';
@icon-input-fullscreen: '\\E0A6';
@icon-input-img: '\\E0A7';
@icon-input-integration: '\\E0A8';
@icon-share: '\\E100';
@icon-save: '\\E101';
@icon-message-notification: '\\E102';
@icon-list: '\\E103';
@icon-channel: '\\E104';
@icon-share-other-alt: '\\E105';
@icon-broadcast: '\\E106';
@icon-all-files-alt: '\\E107';
@icon-search-files: '\\E108';
@icon-add-user: '\\E109';
@icon-switch-team: '\\E110';
@icon-create-snippet: '\\E111';
@icon-create-post: '\\E112';
@icon-upload: '\\E113';
@icon-download: '\\E114';
@icon-share-email: '\\E115';
@icon-import-email: '\\E116';
@icon-ellipsis-o: '\\E117';
@icon-add-reaction: '\\E118';
@icon-happy-smile: '\\E119';
@icon-quote-post: '\\E120';
@icon-camera: '\\E121';
@icon-phone-flat: '\\E122';
@icon-sparkles: '\\E123';
@icon-location-pin: '\\E124';
@icon-channel-pane-hash: '\\E125';
@icon-emoji-nature: '\\E126';
@icon-emoji-food: '\\E127';
@icon-emoji-celebration: '\\E128';
@icon-emoji-activities: '\\E129';
@icon-emoji-travel: '\\E130';
@icon-emoji-objects: '\\E131';
@icon-pause: '\\E132';
@icon-file-gdrive: '\\E133';
@icon-play: '\\E134';
@icon-stream: '\\E135';
@icon-field-text: '\\E136';
@icon-poo: '\\E137';
@icon-channel-list: '\\E138';
@icon-share-android: '\\E139';
@icon-highlight: '\\E140';
@icon-flag: '\\E141';
@icon-grabby-patty: '\\E142';
@icon-backspace: '\\E143';
@icon-share-forward: '\\E144';
@icon-side-panel: '\\E145';
@icon-search-small: '\\E146';
@icon-reload-small: '\\E147';
@icon-vertical-ellipsis: '\\E148';
@icon-disable: '\\E149';
@icon-bold-hash-small: '\\E150';
@icon-cart: '\\E151';
@icon-snooze-outline: '\\E152';
@icon-new-window: '\\E153';
@icon-h1: '\\E154';
@icon-h2: '\\E155';
@icon-h3: '\\E156';
@icon-bullet-list: '\\E157';
@icon-numbered-list: '\\E158';
@icon-text-format-menu: '\\E159';
@icon-check-list: '\\E15A';
@icon-code-block: '\\E15B';
@icon-codeblock: '\\E15B';
@icon-bold: '\\E160';
@icon-italic: '\\E161';
@icon-underline: '\\E162';
@icon-strikethrough: '\\E163';
@icon-tag: '\\E164';
@icon-org-shared-channel: '\\E165';
@icon-shared-channel: '\\E166';
@icon-external-channel: '\\E167';
@icon-external-channel-square: '\\E168';
@icon-external-channel-triangle: '\\E169';
@icon-small-reaction: '\\E170';
@icon-small-reply: '\\E171';
@icon-small-ellipsis: '\\E172';
@icon-small-star: '\\E173';
@icon-small-quote: '\\E174';
@icon-keyboard: '\\E175';
@icon-share-action: '\\E176';
@icon-handset: '\\E177';
@icon-bluetooth-sound: '\\E178';
@icon-bluetooth: '\\E179';
@icon-bot: '\\E180';
@icon-globe-plus: '\\E181';
@icon-user-groups: '\\E182';
@icon-rocket: '\\E183';
@icon-mobile-notification: '\\E184';
@icon-desktop-notification: '\\E185';
@icon-collab-screenshare-on: '\\E186';
@icon-collab-screenshare-off: '\\E187';
@icon-thumbs-up: '\\E188';
@icon-thumbs-down: '\\E189';
@icon-bug: '\\E190';
@icon-mark-unread: '\\E191';
@icon-compose-dm: '\\E192';
@icon-invoice: '\\E193';
@icon-expand: '\\E200';
@icon-reduce: '\\E201';
@icon-arrows-alt: '\\E202';
@icon-reduce-alt: '\\E203';
@icon-check-square-o: '\\E204';
@icon-check-circle-o: '\\E205';
@icon-check-circle-o-large: '\\E206';
@icon-question: '\\E207';
@icon-exclamation: '\\E208';
@icon-warning: '\\E209';
@icon-exclamation-circle: '\\E210';
@icon-question-circle: '\\E211';
@icon-plus-circle: '\\E212';
@icon-minus-circle: '\\E213';
@icon-times-circle: '\\E214';
@icon-arrow-circle-o-up: '\\E215';
@icon-arrow-circle-o-down: '\\E216';
@icon-arrow-circle-o-right: '\\E217';
@icon-arrow-circle-o-left: '\\E218';
@icon-chevron-circle-left: '\\E219';
@icon-chevron-circle-right: '\\E220';
@icon-chevron-circle-down: '\\E221';
@icon-chevron-circle-up: '\\E222';
@icon-plus-circle-small: '\\E223';
@icon-circle-small: '\\E224';
@icon-circle-large: '\\E225';
@icon-navigate: '\\E226';
@icon-times-circle-small: '\\E227';
@icon-plus-circle-medium: '\\E228';
@icon-times-circle-medium: '\\E229';
@icon-square-warning: '\\E230';
@icon-square-question: '\\E231';
@icon-plus-square-o: '\\E232';
@icon-minus-square-o: '\\E233';
@icon-square-times: '\\E234';
@icon-square-arrow-up: '\\E235';
@icon-square-arrow-down: '\\E236';
@icon-square-arrow-right: '\\E237';
@icon-square-arrow-left: '\\E238';
@icon-square-chevron-left: '\\E239';
@icon-square-chevron-right: '\\E240';
@icon-square-chevron-down: '\\E241';
@icon-square-chevron-up: '\\E242';
@icon-chevron-right: '\\E250';
@icon-chevron-left: '\\E251';
@icon-chevron-down: '\\E252';
@icon-chevron-up: '\\E253';
@icon-chevron-medium-right: '\\E254';
@icon-chevron-medium-left: '\\E255';
@icon-chevron-medium-down: '\\E256';
@icon-chevron-medium-up: '\\E257';
@icon-chevron-large-right: '\\E258';
@icon-chevron-large-left: '\\E259';
@icon-chevron-large-up: '\\E260';
@icon-chevron-large-down: '\\E261';
@icon-arrow-large-right: '\\E262';
@icon-arrow-large-left: '\\E263';
@icon-arrow-large-up: '\\E264';
@icon-arrow-large-down: '\\E265';
@icon-caret-outline-left: '\\E266';
@icon-caret-outline-right: '\\E267';
@icon-caret-outline-up: '\\E268';
@icon-caret-outline-down: '\\E269';
@icon-caret-up: '\\E270';
@icon-caret-down: '\\E271';
@icon-caret-right: '\\E272';
@icon-caret-left: '\\E273';
@icon-angle-arrow-down-left: '\\E274';
@icon-angle-arrow-down-right: '\\E275';
@icon-angle-arrow-up-right: '\\E276';
@icon-angle-arrow-up-left: '\\E277';
@icon-times: '\\E278';
@icon-plus: '\\E279';
@icon-minus: '\\E280';
@icon-plus-small: '\\E281';
@icon-minus-small: '\\E282';
@icon-exclamation-small: '\\E283';
@icon-question-small: '\\E284';
@icon-check-small: '\\E285';
@icon-arrow-right: '\\E286';
@icon-arrow-left: '\\E287';
@icon-arrow-up: '\\E288';
@icon-arrow-down: '\\E289';
@icon-arrow-right-medium: '\\E290';
@icon-arrow-left-medium: '\\E291';
@icon-arrow-up-medium: '\\E292';
@icon-arrow-down-medium: '\\E293';
@icon-times-small: '\\E294';
@icon-sync: '\\E295';
@icon-replies: '\\E296';
@icon-angle-arrow-down-right-alt: '\\E297';
@icon-angle-arrow-up-right-alt: '\\E298';
@icon-angle-arrow-up-left-alt: '\\E299';
@icon-angle-arrow-down-left-alt: '\\E300';
@icon-check-small-bold: '\\E301';
@icon-enter: '\\E302';
@icon-expand-vertical: '\\E303';
@icon-collapse-vertical: '\\E304';
@icon-android-upload: '\\E305';
@icon-plus-thick: '\\E306';
@icon-arrow-ne-large: '\\E307';
@icon-arrow-nw-large: '\\E308';
@icon-arrow-sw-large: '\\E309';
@icon-arrow-se-large: '\\E310';
@icon-arrow-ne-medium: '\\E311';
@icon-arrow-nw-medium: '\\E312';
@icon-arrow-sw-medium: '\\E313';
@icon-arrow-se-medium: '\\E314';
@icon-arrow-ne-small: '\\E315';
@icon-arrow-nw-small: '\\E316';
@icon-arrow-sw-small: '\\E317';
@icon-arrow-se-small: '\\E318';
@icon-check-large-bold: '\\E319';
@icon-check-large: '\\E320';
@icon-times-medium: '\\E321';
@icon-real-checkbox-empty: '\\E322';
@icon-real-checkbox-checked: '\\E323';
@icon-real-checkbox-checked-o: '\\E324';
@icon-circle-checkbox-empty: '\\E325';
@icon-circle-checkbox-checked: '\\E326';
@icon-circle-checkbox-checked-o: '\\E327';
@icon-times-large: '\\E328';
@icon-file-generic: '\\E400';
@icon-file-generic-small: '\\E401';
@icon-file-spaces: '\\E402';
@icon-file-spaces-small: '\\E403';
@icon-file-image: '\\E404';
@icon-file-image-small: '\\E405';
@icon-file-pdf: '\\E406';
@icon-file-pdf-small: '\\E407';
@icon-file-audio: '\\E408';
@icon-file-audio-small: '\\E409';
@icon-file-video: '\\E410';
@icon-file-video-small: '\\E411';
@icon-file-presentation: '\\E412';
@icon-file-presentation-small: '\\E413';
@icon-file-email: '\\E414';
@icon-file-email-small: '\\E415';
@icon-file-vector: '\\E416';
@icon-file-vector-small: '\\E417';
@icon-file-spreadsheet: '\\E418';
@icon-file-spreadsheet-small: '\\E419';
@icon-file-media-archive: '\\E420';
@icon-file-media-archive-small: '\\E421';
@icon-file-archive: '\\E422';
@icon-file-archive-small: '\\E423';
@icon-file-executable: '\\E424';
@icon-file-executable-small: '\\E425';
@icon-file-disk-image: '\\E426';
@icon-file-disk-image-small: '\\E427';
@icon-file-cad: '\\E428';
@icon-file-cad-small: '\\E429';
@icon-file-3d-graphic: '\\E430';
@icon-file-3d-graphic-small: '\\E431';
@icon-file-database: '\\E432';
@icon-file-database-small: '\\E433';
@icon-file-binary: '\\E434';
@icon-file-binary-small: '\\E435';
@icon-file-markdown: '\\E436';
@icon-file-markdown-small: '\\E437';
@icon-file-text-post: '\\E438';
@icon-file-text-post-small: '\\E439';
@icon-file-html: '\\E440';
@icon-file-html-small: '\\E441';
@icon-file-code: '\\E442';
@icon-file-code-small: '\\E443';
@icon-file-css: '\\E444';
@icon-file-css-small: '\\E445';
@icon-file-php: '\\E446';
@icon-file-php-small: '\\E447';
@icon-file-snippet: '\\E448';
@icon-file-snippet-small: '\\E449';
@icon-file-word: '\\E450';
@icon-file-word-small: '\\E451';
@icon-file-excel: '\\E452';
@icon-file-excel-small: '\\E453';
@icon-file-powerpoint: '\\E454';
@icon-file-powerpoint-small: '\\E455';
@icon-file-illustrator: '\\E456';
@icon-file-illustrator-small: '\\E457';
@icon-file-photoshop: '\\E458';
@icon-file-photoshop-small: '\\E459';
@icon-file-indesign: '\\E460';
@icon-file-indesign-small: '\\E461';
@icon-file-adobe-flash: '\\E462';
@icon-file-adobe-flash-small: '\\E463';
@icon-file-adobe-swf: '\\E464';
@icon-file-adobe-swf-small: '\\E465';
@icon-file-iphone-app: '\\E466';
@icon-file-iphone-app-small: '\\E467';
@icon-file-android-app: '\\E468';
@icon-file-android-app-small: '\\E469';
@icon-file-dropbox: '\\E470';
@icon-file-dropbox-small: '\\E471';
@icon-file-google: '\\E472';
@icon-file-google-document: '\\E472';
@icon-file-google-form: '\\E472';
@icon-file-google-presentation: '\\E472';
@icon-file-google-spreadsheet: '\\E472';
@icon-file-google-document-small: '\\E473';
@icon-file-google-form-small: '\\E473';
@icon-file-google-presentation-small: '\\E473';
@icon-file-google-small: '\\E473';
@icon-file-google-spreadsheet-small: '\\E473';
@icon-file-qtz: '\\E474';
@icon-file-qtz-small: '\\E475';
@icon-file-sketch: '\\E476';
@icon-file-sketch-small: '\\E477';
@icon-calls: '\\E478';
@icon-calls-small: '\\E479';
@icon-calls-ended: '\\E480';
@icon-calls-ended-small: '\\E481';
@icon-file-figma: '\\E482';
@icon-file-figma-small: '\\E483';
@icon-file-generic-tiny: '\\E4A0';
@icon-file-spaces-tiny: '\\E4AA';
@icon-file-image-tiny: '\\E4AB';
@icon-file-pdf-tiny: '\\E4AC';
@icon-file-audio-tiny: '\\E4AD';
@icon-file-video-tiny: '\\E4AE';
@icon-file-presentation-tiny: '\\E4AF';
@icon-file-email-tiny: '\\E4BA';
@icon-file-vector-tiny: '\\E4BB';
@icon-file-spreadsheet-tiny: '\\E4BC';
@icon-file-media-archive-tiny: '\\E4BD';
@icon-file-archive-tiny: '\\E4BE';
@icon-file-executable-tiny: '\\E4BF';
@icon-file-disk-image-tiny: '\\E4CA';
@icon-file-cad-tiny: '\\E4CB';
@icon-file-3d-graphic-tiny: '\\E4CC';
@icon-file-database-tiny: '\\E4CD';
@icon-file-binary-tiny: '\\E4CE';
@icon-file-markdown-tiny: '\\E4CF';
@icon-file-text-post-tiny: '\\E4DA';
@icon-file-html-tiny: '\\E4DB';
@icon-file-code-tiny: '\\E4DC';
@icon-file-css-tiny: '\\E4DD';
@icon-file-php-tiny: '\\E4DE';
@icon-file-snippet-tiny: '\\E4DF';
@icon-file-word-tiny: '\\E4EA';
@icon-file-excel-tiny: '\\E4EB';
@icon-file-powerpoint-tiny: '\\E4EC';
@icon-file-illustrator-tiny: '\\E4ED';
@icon-file-photoshop-tiny: '\\E4EE';
@icon-file-indesign-tiny: '\\E4EF';
@icon-file-adobe-flash-tiny: '\\E4F0';
@icon-file-adobe-swf-tiny: '\\E4F1';
@icon-file-iphone-app-tiny: '\\E4F2';
@icon-file-android-app-tiny: '\\E4F3';
@icon-file-dropbox-tiny: '\\E4F4';
@icon-file-google-document-tiny: '\\E4F5';
@icon-file-google-form-tiny: '\\E4F5';
@icon-file-google-presentation-tiny: '\\E4F5';
@icon-file-google-spreadsheet-tiny: '\\E4F5';
@icon-file-google-tiny: '\\E4F5';
@icon-file-qtz-tiny: '\\E4F6';
@icon-file-sketch-tiny: '\\E4F7';
@icon-file-figma-tiny: '\\E4F8';
@icon-star: '\\E500';
@icon-unstar: '\\E501';
@icon-bell: '\\E502';
@icon-lock: '\\E503';
@icon-external-link-small: '\\E504';
@icon-external-link-large: '\\E505';
@icon-presence-online: '\\E506';
@icon-presence-offline: '\\E507';
@icon-presence-dnd: '\\E508';
@icon-presence-external-online: '\\E509';
@icon-presence-ra-online: '\\E509';
@icon-restricted-user: '\\E509';
@icon-presence-external-offline: '\\E510';
@icon-presence-ra-offline: '\\E510';
@icon-presence-external-dnd: '\\E511';
@icon-presence-ra-dnd: '\\E511';
@icon-presence-ura-online: '\\E512';
@icon-single-channel-guest: '\\E512';
@icon-presence-ura-offline: '\\E513';
@icon-presence-ura-dnd: '\\E514';
@icon-heart: '\\E515';
@icon-quote: '\\E516';
@icon-cog: '\\E517';
@icon-comment: '\\E518';
@icon-minus-circle-small: '\\E519';
@icon-times-circle-small: '\\E520';
@icon-times-circle-small-filled: '\\E520';
@icon-multiparty-dm-2: '\\E521';
@icon-multiparty-dm-3: '\\E522';
@icon-multiparty-dm-4: '\\E523';
@icon-multiparty-dm-5: '\\E524';
@icon-multiparty-dm-6: '\\E525';
@icon-multiparty-dm-7: '\\E526';
@icon-multiparty-dm-8: '\\E527';
@icon-multiparty-dm-9: '\\E528';
@icon-poo-filled: '\\E529';
@icon-circle-fill: '\\E530';
@icon-flag-filled: '\\E531';
@icon-refresh-small: '\\E532';
@icon-snooze-filled: '\\E533';
@icon-archived-channel: '\\E534';
@icon-presence-dnd-offline: '\\E535';
@icon-presence-external-dnd-offline: '\\E536';
@icon-presence-ra-dnd-offline: '\\E536';
@icon-presence-ura-dnd-offline: '\\E537';
@icon-presence-mobile-dnd: '\\E538';
@icon-play-filled: '\\E539';
@icon-broadcast-filled: '\\E540';
@icon-small-star-filled: '\\E541';
@icon-small-comment-filled: '\\E542';
@icon-paperplane-filled: '\\E543';
@icon-filebg-large-filled: '\\E544';
@icon-filebg-small-filled: '\\E545';
@icon-highlight-filled: '\\E546';
@icon-pin-filled: '\\E547';
@icon-thumb-tack-filled: '\\E547';
@icon-close-filled: '\\E548';
@icon-share-filled: '\\E549';
@icon-pencil-filled: '\\E550';
@icon-side-panel-filled: '\\E551';
@icon-add-reaction-filled: '\\E552';
@icon-mentions-filled: '\\E553';
@icon-small-reply-filled: '\\E554';
@icon-user-filled: '\\E555';
@icon-microphone-on: '\\E556';
@icon-camera-on: '\\E557';
@icon-screenshare-on: '\\E558';
@icon-shared-channels: '\\E559';
@icon-heart-large-filled: '\\E560';
@icon-thumbs-up-filled: '\\E561';
@icon-thumbs-down-filled: '\\E562';
@icon-slow-network: '\\E563';
@icon-sparkles-filled: '\\E564';
@icon-small-warning-filled: '\\E565';
@icon-deactivated-user: '\\E566';
@icon-lock-small: '\\E567';
@icon-sc-baseline: '\\E568';
@icon-shared-channels-baseline: '\\E568';
@icon-sc-pending: '\\E569';
@icon-shared-channels-pending: '\\E569';
@icon-sc-baseline-pending: '\\E570';
@icon-shared-channels-baseline-pending: '\\E570';
@icon-cloud-offline-filled: '\\E571';
@icon-cloud-offline-small-filled: '\\E572';
@icon-lock-large-filled: '\\E573';
@icon-input-file-active: '\\E574';
@icon-input-img-active: '\\E575';
@icon-input-integration-active: '\\E576';
@icon-checkbox-full: '\\E577';
@icon-add-reaction-bg: '\\E578';
@icon-small-reaction-bg: '\\E579';
@icon-info-circle-filled: '\\E580';
@icon-exclamation-circle-filled: '\\E581';
@icon-missing-emoji: '\\E582';
@icon-warning-filled: '\\E583';
@icon-eye-filled: '\\E584';
@icon-circle-minus-filled: '\\E585';
@icon-slack: '\\E800';
@icon-slack-pillow: '\\E801';
@icon-apple: '\\E802';
@icon-android: '\\E803';
@icon-twitter: '\\E804';
@icon-github: '\\E805';
@icon-dropbox: '\\E806';
@icon-google: '\\E807';
@icon-windows: '\\E808';
@icon-youtube: '\\E809';
@icon-google-drive: '\\E810';
@icon-skype: '\\E811';
@icon-rss: '\\E812';
@icon-facebook: '\\E813';
@icon-asana: '\\E814';
@icon-linkedin: '\\E815';
@icon-tumblr: '\\E816';
@icon-instagram: '\\E817';
@icon-google-plus: '\\E818';
@icon-soundcloud: '\\E819';
@icon-flickr: '\\E820';
@icon-pinterest: '\\E821';
@icon-tripit: '\\E822';
@icon-hangouts: '\\E823';
@icon-viber: '\\E824';
@icon-line: '\\E825';
@icon-facebook-messenger: '\\E826';
@icon-1password: '\\E827';
@icon-box: '\\E828';
@icon-box-square: '\\E829';
@icon-google-play: '\\E830';
@icon-spotify: '\\E831';
@icon-siriusxm: '\\E832';
@icon-stitcher: '\\E833';
@icon-pocket-casts: '\\E834';
@icon-onedrive: '\\E835';
@icon-vogue: '\\E80A';

.c-icon--star-o:before {
  content: @icon-star-o;
}
.c-icon--unstar-o:before {
  content: @icon-unstar-o;
}
.c-icon--user:before {
  content: @icon-user;
}
.c-icon--comment-alt:before {
  content: @icon-comment-alt;
}
.c-icon--comment-o:before {
  content: @icon-comment-o;
}
.c-icon--home:before {
  content: @icon-home;
}
.c-icon--info:before {
  content: @icon-info;
}
.c-icon--channel-info:before {
  content: @icon-channel-info;
}
.c-icon--info-circle:before {
  content: @icon-info-circle;
}
.c-icon--mentions:before {
  content: @icon-mentions;
}
.c-icon--gn-menu:before {
  content: @icon-gn-menu;
}
.c-icon--search:before {
  content: @icon-search;
}
.c-icon--bolt:before {
  content: @icon-bolt;
}
.c-icon--mobile:before {
  content: @icon-mobile;
}
.c-icon--tablet:before {
  content: @icon-tablet;
}
.c-icon--laptop:before {
  content: @icon-laptop;
}
.c-icon--bell-o:before {
  content: @icon-bell-o;
}
.c-icon--bell-slash:before {
  content: @icon-bell-slash;
}
.c-icon--team-directory:before {
  content: @icon-team-directory;
}
.c-icon--cloud-upload:before {
  content: @icon-cloud-upload;
}
.c-icon--cloud-download:before {
  content: @icon-cloud-download;
}
.c-icon--bolt-add:before {
  content: @icon-bolt-add;
}
.c-icon--search-medium:before {
  content: @icon-search-medium;
}
.c-icon--cog-o:before {
  content: @icon-cog-o;
}
.c-icon--cogs:before {
  content: @icon-cogs;
}
.c-icon--key:before {
  content: @icon-key;
}
.c-icon--calendar:before {
  content: @icon-calendar;
}
.c-icon--pencil:before {
  content: @icon-pencil;
}
.c-icon--lightbulb-o:before {
  content: @icon-lightbulb-o;
}
.c-icon--magic:before {
  content: @icon-magic;
}
.c-icon--external-link:before {
  content: @icon-external-link;
}
.c-icon--external-link-square:before {
  content: @icon-external-link-square;
}
.c-icon--lock-o:before {
  content: @icon-lock-o;
}
.c-icon--unlock:before {
  content: @icon-unlock;
}
.c-icon--folder:before {
  content: @icon-folder;
}
.c-icon--folder-open:before {
  content: @icon-folder-open;
}
.c-icon--archive:before {
  content: @icon-archive;
}
.c-icon--inbox:before {
  content: @icon-inbox;
}
.c-icon--sitemap:before {
  content: @icon-sitemap;
}
.c-icon--book:before {
  content: @icon-book;
}
.c-icon--envelope-o:before {
  content: @icon-envelope-o;
}
.c-icon--image:before {
  content: @icon-image;
}
.c-icon--building:before {
  content: @icon-building;
}
.c-icon--plug:before {
  content: @icon-plug;
}
.c-icon--paper-plane:before {
  content: @icon-paper-plane;
}
.c-icon--credit-card:before {
  content: @icon-credit-card;
}
.c-icon--life-ring:before {
  content: @icon-life-ring;
}
.c-icon--thumb-tack:before {
  content: @icon-thumb-tack;
}
.c-icon--trash:before {
  content: @icon-trash;
}
.c-icon--print:before {
  content: @icon-print;
}
.c-icon--quote-o:before {
  content: @icon-quote-o;
}
.c-icon--th-large:before {
  content: @icon-th-large;
}
.c-icon--eye:before {
  content: @icon-eye;
}
.c-icon--eye-closed:before {
  content: @icon-eye-closed;
}
.c-icon--volume-off:before {
  content: @icon-volume-off;
}
.c-icon--volume-down:before {
  content: @icon-volume-down;
}
.c-icon--volume-medium:before {
  content: @icon-volume-medium;
}
.c-icon--volume-up:before {
  content: @icon-volume-up;
}
.c-icon--volume-off-alt:before {
  content: @icon-volume-off-alt;
}
.c-icon--heart-o:before {
  content: @icon-heart-o;
}
.c-icon--wrench:before {
  content: @icon-wrench;
}
.c-icon--file:before {
  content: @icon-file;
}
.c-icon--all-files:before {
  content: @icon-all-files;
}
.c-icon--img-left:before {
  content: @icon-img-left;
}
.c-icon--img-center:before {
  content: @icon-img-center;
}
.c-icon--img-right:before {
  content: @icon-img-right;
}
.c-icon--img-fullbleed:before {
  content: @icon-img-fullbleed;
}
.c-icon--img-fullwidth:before {
  content: @icon-img-fullwidth;
}
.c-icon--your-files:before {
  content: @icon-your-files;
}
.c-icon--align-left:before {
  content: @icon-align-left;
}
.c-icon--align-center:before {
  content: @icon-align-center;
}
.c-icon--align-right:before {
  content: @icon-align-right;
}
.c-icon--align-justify:before {
  content: @icon-align-justify;
}
.c-icon--paragraph:before {
  content: @icon-paragraph;
}
.c-icon--code:before {
  content: @icon-code;
}
.c-icon--ellipsis:before {
  content: @icon-ellipsis;
}
.c-icon--ellipsis-baseline:before {
  content: @icon-ellipsis-baseline;
}
.c-icon--spinner:before {
  content: @icon-spinner;
}
.c-icon--spiral:before {
  content: @icon-spiral;
}
.c-icon--random:before {
  content: @icon-random;
}
.c-icon--repeat:before {
  content: @icon-repeat;
}
.c-icon--share-square-o:before {
  content: @icon-share-square-o;
}
.c-icon--link:before {
  content: @icon-link;
}
.c-icon--undo:before {
  content: @icon-undo;
}
.c-icon--history:before {
  content: @icon-history;
}
.c-icon--hourglass-empty:before {
  content: @icon-hourglass-empty;
}
.c-icon--hourglass:before {
  content: @icon-hourglass;
}
.c-icon--clock-o:before {
  content: @icon-clock-o;
}
.c-icon--dashboard:before {
  content: @icon-dashboard;
}
.c-icon--power-off:before {
  content: @icon-power-off;
}
.c-icon--sign-in:before {
  content: @icon-sign-in;
}
.c-icon--sign-out:before {
  content: @icon-sign-out;
}
.c-icon--jump:before {
  content: @icon-jump;
}
.c-icon--globe:before {
  content: @icon-globe;
}
.c-icon--filter:before {
  content: @icon-filter;
}
.c-icon--microphone:before {
  content: @icon-microphone;
}
.c-icon--microphone-slash:before {
  content: @icon-microphone-slash;
}
.c-icon--paperclip:before {
  content: @icon-paperclip;
}
.c-icon--video-camera:before {
  content: @icon-video-camera;
}
.c-icon--stop-video:before {
  content: @icon-stop-video;
}
.c-icon--phone:before {
  content: @icon-phone;
}
.c-icon--unarchive:before {
  content: @icon-unarchive;
}
.c-icon--smile-o:before {
  content: @icon-smile-o;
}
.c-icon--share-screen:before {
  content: @icon-share-screen;
}
.c-icon--stop-screen-sharing:before {
  content: @icon-stop-screen-sharing;
}
.c-icon--stop-screen-sharing-alt:before {
  content: @icon-stop-screen-sharing-alt;
}
.c-icon--feedback:before {
  content: @icon-feedback;
}
.c-icon--paper-plane-alt:before {
  content: @icon-paper-plane-alt;
}
.c-icon--cloud-offline:before {
  content: @icon-cloud-offline;
}
.c-icon--cloud-offline-small:before {
  content: @icon-cloud-offline-small;
}
.c-icon--filters:before {
  content: @icon-filters;
}
.c-icon--lock-large:before {
  content: @icon-lock-large;
}
.c-icon--checkbox-empty:before {
  content: @icon-checkbox-empty;
}
.c-icon--input-file:before {
  content: @icon-input-file;
}
.c-icon--input-fullscreen:before {
  content: @icon-input-fullscreen;
}
.c-icon--input-img:before {
  content: @icon-input-img;
}
.c-icon--input-integration:before {
  content: @icon-input-integration;
}
.c-icon--share:before {
  content: @icon-share;
}
.c-icon--save:before {
  content: @icon-save;
}
.c-icon--message-notification:before {
  content: @icon-message-notification;
}
.c-icon--list:before {
  content: @icon-list;
}
.c-icon--channel:before {
  content: @icon-channel;
}
.c-icon--share-other-alt:before {
  content: @icon-share-other-alt;
}
.c-icon--broadcast:before {
  content: @icon-broadcast;
}
.c-icon--all-files-alt:before {
  content: @icon-all-files-alt;
}
.c-icon--search-files:before {
  content: @icon-search-files;
}
.c-icon--add-user:before {
  content: @icon-add-user;
}
.c-icon--switch-team:before {
  content: @icon-switch-team;
}
.c-icon--create-snippet:before {
  content: @icon-create-snippet;
}
.c-icon--create-post:before {
  content: @icon-create-post;
}
.c-icon--upload:before {
  content: @icon-upload;
}
.c-icon--download:before {
  content: @icon-download;
}
.c-icon--share-email:before {
  content: @icon-share-email;
}
.c-icon--import-email:before {
  content: @icon-import-email;
}
.c-icon--ellipsis-o:before {
  content: @icon-ellipsis-o;
}
.c-icon--add-reaction:before {
  content: @icon-add-reaction;
}
.c-icon--happy-smile:before {
  content: @icon-happy-smile;
}
.c-icon--quote-post:before {
  content: @icon-quote-post;
}
.c-icon--camera:before {
  content: @icon-camera;
}
.c-icon--phone-flat:before {
  content: @icon-phone-flat;
}
.c-icon--sparkles:before {
  content: @icon-sparkles;
}
.c-icon--location-pin:before {
  content: @icon-location-pin;
}
.c-icon--channel-pane-hash:before {
  content: @icon-channel-pane-hash;
}
.c-icon--emoji-nature:before {
  content: @icon-emoji-nature;
}
.c-icon--emoji-food:before {
  content: @icon-emoji-food;
}
.c-icon--emoji-celebration:before {
  content: @icon-emoji-celebration;
}
.c-icon--emoji-activities:before {
  content: @icon-emoji-activities;
}
.c-icon--emoji-travel:before {
  content: @icon-emoji-travel;
}
.c-icon--emoji-objects:before {
  content: @icon-emoji-objects;
}
.c-icon--pause:before {
  content: @icon-pause;
}
.c-icon--file-gdrive:before {
  content: @icon-file-gdrive;
}
.c-icon--play:before {
  content: @icon-play;
}
.c-icon--stream:before {
  content: @icon-stream;
}
.c-icon--field-text:before {
  content: @icon-field-text;
}
.c-icon--poo:before {
  content: @icon-poo;
}
.c-icon--channel-list:before {
  content: @icon-channel-list;
}
.c-icon--share-android:before {
  content: @icon-share-android;
}
.c-icon--highlight:before {
  content: @icon-highlight;
}
.c-icon--flag:before {
  content: @icon-flag;
}
.c-icon--grabby-patty:before {
  content: @icon-grabby-patty;
}
.c-icon--backspace:before {
  content: @icon-backspace;
}
.c-icon--share-forward:before {
  content: @icon-share-forward;
}
.c-icon--side-panel:before {
  content: @icon-side-panel;
}
.c-icon--search-small:before {
  content: @icon-search-small;
}
.c-icon--reload-small:before {
  content: @icon-reload-small;
}
.c-icon--vertical-ellipsis:before {
  content: @icon-vertical-ellipsis;
}
.c-icon--disable:before {
  content: @icon-disable;
}
.c-icon--bold-hash-small:before {
  content: @icon-bold-hash-small;
}
.c-icon--cart:before {
  content: @icon-cart;
}
.c-icon--snooze-outline:before {
  content: @icon-snooze-outline;
}
.c-icon--new-window:before {
  content: @icon-new-window;
}
.c-icon--h1:before {
  content: @icon-h1;
}
.c-icon--h2:before {
  content: @icon-h2;
}
.c-icon--h3:before {
  content: @icon-h3;
}
.c-icon--bullet-list:before {
  content: @icon-bullet-list;
}
.c-icon--numbered-list:before {
  content: @icon-numbered-list;
}
.c-icon--text-format-menu:before {
  content: @icon-text-format-menu;
}
.c-icon--check-list:before {
  content: @icon-check-list;
}
.c-icon--code-block:before {
  content: @icon-code-block;
}
.c-icon--codeblock:before {
  content: @icon-codeblock;
}
.c-icon--bold:before {
  content: @icon-bold;
}
.c-icon--italic:before {
  content: @icon-italic;
}
.c-icon--underline:before {
  content: @icon-underline;
}
.c-icon--strikethrough:before {
  content: @icon-strikethrough;
}
.c-icon--tag:before {
  content: @icon-tag;
}
.c-icon--org-shared-channel:before {
  content: @icon-org-shared-channel;
}
.c-icon--shared-channel:before {
  content: @icon-shared-channel;
}
.c-icon--external-channel:before {
  content: @icon-external-channel;
}
.c-icon--external-channel-square:before {
  content: @icon-external-channel-square;
}
.c-icon--external-channel-triangle:before {
  content: @icon-external-channel-triangle;
}
.c-icon--small-reaction:before {
  content: @icon-small-reaction;
}
.c-icon--small-reply:before {
  content: @icon-small-reply;
}
.c-icon--small-ellipsis:before {
  content: @icon-small-ellipsis;
}
.c-icon--small-star:before {
  content: @icon-small-star;
}
.c-icon--small-quote:before {
  content: @icon-small-quote;
}
.c-icon--keyboard:before {
  content: @icon-keyboard;
}
.c-icon--share-action:before {
  content: @icon-share-action;
}
.c-icon--handset:before {
  content: @icon-handset;
}
.c-icon--bluetooth-sound:before {
  content: @icon-bluetooth-sound;
}
.c-icon--bluetooth:before {
  content: @icon-bluetooth;
}
.c-icon--bot:before {
  content: @icon-bot;
}
.c-icon--globe-plus:before {
  content: @icon-globe-plus;
}
.c-icon--user-groups:before {
  content: @icon-user-groups;
}
.c-icon--rocket:before {
  content: @icon-rocket;
}
.c-icon--mobile-notification:before {
  content: @icon-mobile-notification;
}
.c-icon--desktop-notification:before {
  content: @icon-desktop-notification;
}
.c-icon--collab-screenshare-on:before {
  content: @icon-collab-screenshare-on;
}
.c-icon--collab-screenshare-off:before {
  content: @icon-collab-screenshare-off;
}
.c-icon--thumbs-up:before {
  content: @icon-thumbs-up;
}
.c-icon--thumbs-down:before {
  content: @icon-thumbs-down;
}
.c-icon--bug:before {
  content: @icon-bug;
}
.c-icon--mark-unread:before {
  content: @icon-mark-unread;
}
.c-icon--compose-dm:before {
  content: @icon-compose-dm;
}
.c-icon--invoice:before {
  content: @icon-invoice;
}
.c-icon--expand:before {
  content: @icon-expand;
}
.c-icon--reduce:before {
  content: @icon-reduce;
}
.c-icon--arrows-alt:before {
  content: @icon-arrows-alt;
}
.c-icon--reduce-alt:before {
  content: @icon-reduce-alt;
}
.c-icon--check-square-o:before {
  content: @icon-check-square-o;
}
.c-icon--check-circle-o:before {
  content: @icon-check-circle-o;
}
.c-icon--check-circle-o-large:before {
  content: @icon-check-circle-o-large;
}
.c-icon--question:before {
  content: @icon-question;
}
.c-icon--exclamation:before {
  content: @icon-exclamation;
}
.c-icon--warning:before {
  content: @icon-warning;
}
.c-icon--exclamation-circle:before {
  content: @icon-exclamation-circle;
}
.c-icon--question-circle:before {
  content: @icon-question-circle;
}
.c-icon--plus-circle:before {
  content: @icon-plus-circle;
}
.c-icon--minus-circle:before {
  content: @icon-minus-circle;
}
.c-icon--times-circle:before {
  content: @icon-times-circle;
}
.c-icon--arrow-circle-o-up:before {
  content: @icon-arrow-circle-o-up;
}
.c-icon--arrow-circle-o-down:before {
  content: @icon-arrow-circle-o-down;
}
.c-icon--arrow-circle-o-right:before {
  content: @icon-arrow-circle-o-right;
}
.c-icon--arrow-circle-o-left:before {
  content: @icon-arrow-circle-o-left;
}
.c-icon--chevron-circle-left:before {
  content: @icon-chevron-circle-left;
}
.c-icon--chevron-circle-right:before {
  content: @icon-chevron-circle-right;
}
.c-icon--chevron-circle-down:before {
  content: @icon-chevron-circle-down;
}
.c-icon--chevron-circle-up:before {
  content: @icon-chevron-circle-up;
}
.c-icon--plus-circle-small:before {
  content: @icon-plus-circle-small;
}
.c-icon--circle-small:before {
  content: @icon-circle-small;
}
.c-icon--circle-large:before {
  content: @icon-circle-large;
}
.c-icon--navigate:before {
  content: @icon-navigate;
}
.c-icon--times-circle-small:before {
  content: @icon-times-circle-small;
}
.c-icon--plus-circle-medium:before {
  content: @icon-plus-circle-medium;
}
.c-icon--times-circle-medium:before {
  content: @icon-times-circle-medium;
}
.c-icon--square-warning:before {
  content: @icon-square-warning;
}
.c-icon--square-question:before {
  content: @icon-square-question;
}
.c-icon--plus-square-o:before {
  content: @icon-plus-square-o;
}
.c-icon--minus-square-o:before {
  content: @icon-minus-square-o;
}
.c-icon--square-times:before {
  content: @icon-square-times;
}
.c-icon--square-arrow-up:before {
  content: @icon-square-arrow-up;
}
.c-icon--square-arrow-down:before {
  content: @icon-square-arrow-down;
}
.c-icon--square-arrow-right:before {
  content: @icon-square-arrow-right;
}
.c-icon--square-arrow-left:before {
  content: @icon-square-arrow-left;
}
.c-icon--square-chevron-left:before {
  content: @icon-square-chevron-left;
}
.c-icon--square-chevron-right:before {
  content: @icon-square-chevron-right;
}
.c-icon--square-chevron-down:before {
  content: @icon-square-chevron-down;
}
.c-icon--square-chevron-up:before {
  content: @icon-square-chevron-up;
}
.c-icon--chevron-right:before {
  content: @icon-chevron-right;
}
.c-icon--chevron-left:before {
  content: @icon-chevron-left;
}
.c-icon--chevron-down:before {
  content: @icon-chevron-down;
}
.c-icon--chevron-up:before {
  content: @icon-chevron-up;
}
.c-icon--chevron-medium-right:before {
  content: @icon-chevron-medium-right;
}
.c-icon--chevron-medium-left:before {
  content: @icon-chevron-medium-left;
}
.c-icon--chevron-medium-down:before {
  content: @icon-chevron-medium-down;
}
.c-icon--chevron-medium-up:before {
  content: @icon-chevron-medium-up;
}
.c-icon--chevron-large-right:before {
  content: @icon-chevron-large-right;
}
.c-icon--chevron-large-left:before {
  content: @icon-chevron-large-left;
}
.c-icon--chevron-large-up:before {
  content: @icon-chevron-large-up;
}
.c-icon--chevron-large-down:before {
  content: @icon-chevron-large-down;
}
.c-icon--arrow-large-right:before {
  content: @icon-arrow-large-right;
}
.c-icon--arrow-large-left:before {
  content: @icon-arrow-large-left;
}
.c-icon--arrow-large-up:before {
  content: @icon-arrow-large-up;
}
.c-icon--arrow-large-down:before {
  content: @icon-arrow-large-down;
}
.c-icon--caret-outline-left:before {
  content: @icon-caret-outline-left;
}
.c-icon--caret-outline-right:before {
  content: @icon-caret-outline-right;
}
.c-icon--caret-outline-up:before {
  content: @icon-caret-outline-up;
}
.c-icon--caret-outline-down:before {
  content: @icon-caret-outline-down;
}
.c-icon--caret-up:before {
  content: @icon-caret-up;
}
.c-icon--caret-down:before {
  content: @icon-caret-down;
}
.c-icon--caret-right:before {
  content: @icon-caret-right;
}
.c-icon--caret-left:before {
  content: @icon-caret-left;
}
.c-icon--angle-arrow-down-left:before {
  content: @icon-angle-arrow-down-left;
}
.c-icon--angle-arrow-down-right:before {
  content: @icon-angle-arrow-down-right;
}
.c-icon--angle-arrow-up-right:before {
  content: @icon-angle-arrow-up-right;
}
.c-icon--angle-arrow-up-left:before {
  content: @icon-angle-arrow-up-left;
}
.c-icon--times:before {
  content: @icon-times;
}
.c-icon--plus:before {
  content: @icon-plus;
}
.c-icon--minus:before {
  content: @icon-minus;
}
.c-icon--plus-small:before {
  content: @icon-plus-small;
}
.c-icon--minus-small:before {
  content: @icon-minus-small;
}
.c-icon--exclamation-small:before {
  content: @icon-exclamation-small;
}
.c-icon--question-small:before {
  content: @icon-question-small;
}
.c-icon--check-small:before {
  content: @icon-check-small;
}
.c-icon--arrow-right:before {
  content: @icon-arrow-right;
}
.c-icon--arrow-left:before {
  content: @icon-arrow-left;
}
.c-icon--arrow-up:before {
  content: @icon-arrow-up;
}
.c-icon--arrow-down:before {
  content: @icon-arrow-down;
}
.c-icon--arrow-right-medium:before {
  content: @icon-arrow-right-medium;
}
.c-icon--arrow-left-medium:before {
  content: @icon-arrow-left-medium;
}
.c-icon--arrow-up-medium:before {
  content: @icon-arrow-up-medium;
}
.c-icon--arrow-down-medium:before {
  content: @icon-arrow-down-medium;
}
.c-icon--times-small:before {
  content: @icon-times-small;
}
.c-icon--sync:before {
  content: @icon-sync;
}
.c-icon--replies:before {
  content: @icon-replies;
}
.c-icon--angle-arrow-down-right-alt:before {
  content: @icon-angle-arrow-down-right-alt;
}
.c-icon--angle-arrow-up-right-alt:before {
  content: @icon-angle-arrow-up-right-alt;
}
.c-icon--angle-arrow-up-left-alt:before {
  content: @icon-angle-arrow-up-left-alt;
}
.c-icon--angle-arrow-down-left-alt:before {
  content: @icon-angle-arrow-down-left-alt;
}
.c-icon--check-small-bold:before {
  content: @icon-check-small-bold;
}
.c-icon--enter:before {
  content: @icon-enter;
}
.c-icon--expand-vertical:before {
  content: @icon-expand-vertical;
}
.c-icon--collapse-vertical:before {
  content: @icon-collapse-vertical;
}
.c-icon--android-upload:before {
  content: @icon-android-upload;
}
.c-icon--plus-thick:before {
  content: @icon-plus-thick;
}
.c-icon--arrow-ne-large:before {
  content: @icon-arrow-ne-large;
}
.c-icon--arrow-nw-large:before {
  content: @icon-arrow-nw-large;
}
.c-icon--arrow-sw-large:before {
  content: @icon-arrow-sw-large;
}
.c-icon--arrow-se-large:before {
  content: @icon-arrow-se-large;
}
.c-icon--arrow-ne-medium:before {
  content: @icon-arrow-ne-medium;
}
.c-icon--arrow-nw-medium:before {
  content: @icon-arrow-nw-medium;
}
.c-icon--arrow-sw-medium:before {
  content: @icon-arrow-sw-medium;
}
.c-icon--arrow-se-medium:before {
  content: @icon-arrow-se-medium;
}
.c-icon--arrow-ne-small:before {
  content: @icon-arrow-ne-small;
}
.c-icon--arrow-nw-small:before {
  content: @icon-arrow-nw-small;
}
.c-icon--arrow-sw-small:before {
  content: @icon-arrow-sw-small;
}
.c-icon--arrow-se-small:before {
  content: @icon-arrow-se-small;
}
.c-icon--check-large-bold:before {
  content: @icon-check-large-bold;
}
.c-icon--check-large:before {
  content: @icon-check-large;
}
.c-icon--times-medium:before {
  content: @icon-times-medium;
}
.c-icon--real-checkbox-empty:before {
  content: @icon-real-checkbox-empty;
}
.c-icon--real-checkbox-checked:before {
  content: @icon-real-checkbox-checked;
}
.c-icon--real-checkbox-checked-o:before {
  content: @icon-real-checkbox-checked-o;
}
.c-icon--circle-checkbox-empty:before {
  content: @icon-circle-checkbox-empty;
}
.c-icon--circle-checkbox-checked:before {
  content: @icon-circle-checkbox-checked;
}
.c-icon--circle-checkbox-checked-o:before {
  content: @icon-circle-checkbox-checked-o;
}
.c-icon--times-large:before {
  content: @icon-times-large;
}
.c-icon--file-generic:before {
  content: @icon-file-generic;
}
.c-icon--file-generic-small:before {
  content: @icon-file-generic-small;
}
.c-icon--file-spaces:before {
  content: @icon-file-spaces;
}
.c-icon--file-spaces-small:before {
  content: @icon-file-spaces-small;
}
.c-icon--file-image:before {
  content: @icon-file-image;
}
.c-icon--file-image-small:before {
  content: @icon-file-image-small;
}
.c-icon--file-pdf:before {
  content: @icon-file-pdf;
}
.c-icon--file-pdf-small:before {
  content: @icon-file-pdf-small;
}
.c-icon--file-audio:before {
  content: @icon-file-audio;
}
.c-icon--file-audio-small:before {
  content: @icon-file-audio-small;
}
.c-icon--file-video:before {
  content: @icon-file-video;
}
.c-icon--file-video-small:before {
  content: @icon-file-video-small;
}
.c-icon--file-presentation:before {
  content: @icon-file-presentation;
}
.c-icon--file-presentation-small:before {
  content: @icon-file-presentation-small;
}
.c-icon--file-email:before {
  content: @icon-file-email;
}
.c-icon--file-email-small:before {
  content: @icon-file-email-small;
}
.c-icon--file-vector:before {
  content: @icon-file-vector;
}
.c-icon--file-vector-small:before {
  content: @icon-file-vector-small;
}
.c-icon--file-spreadsheet:before {
  content: @icon-file-spreadsheet;
}
.c-icon--file-spreadsheet-small:before {
  content: @icon-file-spreadsheet-small;
}
.c-icon--file-media-archive:before {
  content: @icon-file-media-archive;
}
.c-icon--file-media-archive-small:before {
  content: @icon-file-media-archive-small;
}
.c-icon--file-archive:before {
  content: @icon-file-archive;
}
.c-icon--file-archive-small:before {
  content: @icon-file-archive-small;
}
.c-icon--file-executable:before {
  content: @icon-file-executable;
}
.c-icon--file-executable-small:before {
  content: @icon-file-executable-small;
}
.c-icon--file-disk-image:before {
  content: @icon-file-disk-image;
}
.c-icon--file-disk-image-small:before {
  content: @icon-file-disk-image-small;
}
.c-icon--file-cad:before {
  content: @icon-file-cad;
}
.c-icon--file-cad-small:before {
  content: @icon-file-cad-small;
}
.c-icon--file-3d-graphic:before {
  content: @icon-file-3d-graphic;
}
.c-icon--file-3d-graphic-small:before {
  content: @icon-file-3d-graphic-small;
}
.c-icon--file-database:before {
  content: @icon-file-database;
}
.c-icon--file-database-small:before {
  content: @icon-file-database-small;
}
.c-icon--file-binary:before {
  content: @icon-file-binary;
}
.c-icon--file-binary-small:before {
  content: @icon-file-binary-small;
}
.c-icon--file-markdown:before {
  content: @icon-file-markdown;
}
.c-icon--file-markdown-small:before {
  content: @icon-file-markdown-small;
}
.c-icon--file-text-post:before {
  content: @icon-file-text-post;
}
.c-icon--file-text-post-small:before {
  content: @icon-file-text-post-small;
}
.c-icon--file-html:before {
  content: @icon-file-html;
}
.c-icon--file-html-small:before {
  content: @icon-file-html-small;
}
.c-icon--file-code:before {
  content: @icon-file-code;
}
.c-icon--file-code-small:before {
  content: @icon-file-code-small;
}
.c-icon--file-css:before {
  content: @icon-file-css;
}
.c-icon--file-css-small:before {
  content: @icon-file-css-small;
}
.c-icon--file-php:before {
  content: @icon-file-php;
}
.c-icon--file-php-small:before {
  content: @icon-file-php-small;
}
.c-icon--file-snippet:before {
  content: @icon-file-snippet;
}
.c-icon--file-snippet-small:before {
  content: @icon-file-snippet-small;
}
.c-icon--file-word:before {
  content: @icon-file-word;
}
.c-icon--file-word-small:before {
  content: @icon-file-word-small;
}
.c-icon--file-excel:before {
  content: @icon-file-excel;
}
.c-icon--file-excel-small:before {
  content: @icon-file-excel-small;
}
.c-icon--file-powerpoint:before {
  content: @icon-file-powerpoint;
}
.c-icon--file-powerpoint-small:before {
  content: @icon-file-powerpoint-small;
}
.c-icon--file-illustrator:before {
  content: @icon-file-illustrator;
}
.c-icon--file-illustrator-small:before {
  content: @icon-file-illustrator-small;
}
.c-icon--file-photoshop:before {
  content: @icon-file-photoshop;
}
.c-icon--file-photoshop-small:before {
  content: @icon-file-photoshop-small;
}
.c-icon--file-indesign:before {
  content: @icon-file-indesign;
}
.c-icon--file-indesign-small:before {
  content: @icon-file-indesign-small;
}
.c-icon--file-adobe-flash:before {
  content: @icon-file-adobe-flash;
}
.c-icon--file-adobe-flash-small:before {
  content: @icon-file-adobe-flash-small;
}
.c-icon--file-adobe-swf:before {
  content: @icon-file-adobe-swf;
}
.c-icon--file-adobe-swf-small:before {
  content: @icon-file-adobe-swf-small;
}
.c-icon--file-iphone-app:before {
  content: @icon-file-iphone-app;
}
.c-icon--file-iphone-app-small:before {
  content: @icon-file-iphone-app-small;
}
.c-icon--file-android-app:before {
  content: @icon-file-android-app;
}
.c-icon--file-android-app-small:before {
  content: @icon-file-android-app-small;
}
.c-icon--file-dropbox:before {
  content: @icon-file-dropbox;
}
.c-icon--file-dropbox-small:before {
  content: @icon-file-dropbox-small;
}
.c-icon--file-google:before {
  content: @icon-file-google;
}
.c-icon--file-google-document:before {
  content: @icon-file-google-document;
}
.c-icon--file-google-form:before {
  content: @icon-file-google-form;
}
.c-icon--file-google-presentation:before {
  content: @icon-file-google-presentation;
}
.c-icon--file-google-spreadsheet:before {
  content: @icon-file-google-spreadsheet;
}
.c-icon--file-google-document-small:before {
  content: @icon-file-google-document-small;
}
.c-icon--file-google-form-small:before {
  content: @icon-file-google-form-small;
}
.c-icon--file-google-presentation-small:before {
  content: @icon-file-google-presentation-small;
}
.c-icon--file-google-small:before {
  content: @icon-file-google-small;
}
.c-icon--file-google-spreadsheet-small:before {
  content: @icon-file-google-spreadsheet-small;
}
.c-icon--file-qtz:before {
  content: @icon-file-qtz;
}
.c-icon--file-qtz-small:before {
  content: @icon-file-qtz-small;
}
.c-icon--file-sketch:before {
  content: @icon-file-sketch;
}
.c-icon--file-sketch-small:before {
  content: @icon-file-sketch-small;
}
.c-icon--calls:before {
  content: @icon-calls;
}
.c-icon--calls-small:before {
  content: @icon-calls-small;
}
.c-icon--calls-ended:before {
  content: @icon-calls-ended;
}
.c-icon--calls-ended-small:before {
  content: @icon-calls-ended-small;
}
.c-icon--file-figma:before {
  content: @icon-file-figma;
}
.c-icon--file-figma-small:before {
  content: @icon-file-figma-small;
}
.c-icon--file-generic-tiny:before {
  content: @icon-file-generic-tiny;
}
.c-icon--file-spaces-tiny:before {
  content: @icon-file-spaces-tiny;
}
.c-icon--file-image-tiny:before {
  content: @icon-file-image-tiny;
}
.c-icon--file-pdf-tiny:before {
  content: @icon-file-pdf-tiny;
}
.c-icon--file-audio-tiny:before {
  content: @icon-file-audio-tiny;
}
.c-icon--file-video-tiny:before {
  content: @icon-file-video-tiny;
}
.c-icon--file-presentation-tiny:before {
  content: @icon-file-presentation-tiny;
}
.c-icon--file-email-tiny:before {
  content: @icon-file-email-tiny;
}
.c-icon--file-vector-tiny:before {
  content: @icon-file-vector-tiny;
}
.c-icon--file-spreadsheet-tiny:before {
  content: @icon-file-spreadsheet-tiny;
}
.c-icon--file-media-archive-tiny:before {
  content: @icon-file-media-archive-tiny;
}
.c-icon--file-archive-tiny:before {
  content: @icon-file-archive-tiny;
}
.c-icon--file-executable-tiny:before {
  content: @icon-file-executable-tiny;
}
.c-icon--file-disk-image-tiny:before {
  content: @icon-file-disk-image-tiny;
}
.c-icon--file-cad-tiny:before {
  content: @icon-file-cad-tiny;
}
.c-icon--file-3d-graphic-tiny:before {
  content: @icon-file-3d-graphic-tiny;
}
.c-icon--file-database-tiny:before {
  content: @icon-file-database-tiny;
}
.c-icon--file-binary-tiny:before {
  content: @icon-file-binary-tiny;
}
.c-icon--file-markdown-tiny:before {
  content: @icon-file-markdown-tiny;
}
.c-icon--file-text-post-tiny:before {
  content: @icon-file-text-post-tiny;
}
.c-icon--file-html-tiny:before {
  content: @icon-file-html-tiny;
}
.c-icon--file-code-tiny:before {
  content: @icon-file-code-tiny;
}
.c-icon--file-css-tiny:before {
  content: @icon-file-css-tiny;
}
.c-icon--file-php-tiny:before {
  content: @icon-file-php-tiny;
}
.c-icon--file-snippet-tiny:before {
  content: @icon-file-snippet-tiny;
}
.c-icon--file-word-tiny:before {
  content: @icon-file-word-tiny;
}
.c-icon--file-excel-tiny:before {
  content: @icon-file-excel-tiny;
}
.c-icon--file-powerpoint-tiny:before {
  content: @icon-file-powerpoint-tiny;
}
.c-icon--file-illustrator-tiny:before {
  content: @icon-file-illustrator-tiny;
}
.c-icon--file-photoshop-tiny:before {
  content: @icon-file-photoshop-tiny;
}
.c-icon--file-indesign-tiny:before {
  content: @icon-file-indesign-tiny;
}
.c-icon--file-adobe-flash-tiny:before {
  content: @icon-file-adobe-flash-tiny;
}
.c-icon--file-adobe-swf-tiny:before {
  content: @icon-file-adobe-swf-tiny;
}
.c-icon--file-iphone-app-tiny:before {
  content: @icon-file-iphone-app-tiny;
}
.c-icon--file-android-app-tiny:before {
  content: @icon-file-android-app-tiny;
}
.c-icon--file-dropbox-tiny:before {
  content: @icon-file-dropbox-tiny;
}
.c-icon--file-google-document-tiny:before {
  content: @icon-file-google-document-tiny;
}
.c-icon--file-google-form-tiny:before {
  content: @icon-file-google-form-tiny;
}
.c-icon--file-google-presentation-tiny:before {
  content: @icon-file-google-presentation-tiny;
}
.c-icon--file-google-spreadsheet-tiny:before {
  content: @icon-file-google-spreadsheet-tiny;
}
.c-icon--file-google-tiny:before {
  content: @icon-file-google-tiny;
}
.c-icon--file-qtz-tiny:before {
  content: @icon-file-qtz-tiny;
}
.c-icon--file-sketch-tiny:before {
  content: @icon-file-sketch-tiny;
}
.c-icon--file-figma-tiny:before {
  content: @icon-file-figma-tiny;
}
.c-icon--star:before {
  content: @icon-star;
}
.c-icon--unstar:before {
  content: @icon-unstar;
}
.c-icon--bell:before {
  content: @icon-bell;
}
.c-icon--lock:before {
  content: @icon-lock;
}
.c-icon--external-link-small:before {
  content: @icon-external-link-small;
}
.c-icon--external-link-large:before {
  content: @icon-external-link-large;
}
.c-icon--presence-online:before {
  content: @icon-presence-online;
}
.c-icon--presence-offline:before {
  content: @icon-presence-offline;
}
.c-icon--presence-dnd:before {
  content: @icon-presence-dnd;
}
.c-icon--presence-external-online:before {
  content: @icon-presence-external-online;
}
.c-icon--presence-ra-online:before {
  content: @icon-presence-ra-online;
}
.c-icon--restricted-user:before {
  content: @icon-restricted-user;
}
.c-icon--presence-external-offline:before {
  content: @icon-presence-external-offline;
}
.c-icon--presence-ra-offline:before {
  content: @icon-presence-ra-offline;
}
.c-icon--presence-external-dnd:before {
  content: @icon-presence-external-dnd;
}
.c-icon--presence-ra-dnd:before {
  content: @icon-presence-ra-dnd;
}
.c-icon--presence-ura-online:before {
  content: @icon-presence-ura-online;
}
.c-icon--single-channel-guest:before {
  content: @icon-single-channel-guest;
}
.c-icon--presence-ura-offline:before {
  content: @icon-presence-ura-offline;
}
.c-icon--presence-ura-dnd:before {
  content: @icon-presence-ura-dnd;
}
.c-icon--heart:before {
  content: @icon-heart;
}
.c-icon--quote:before {
  content: @icon-quote;
}
.c-icon--cog:before {
  content: @icon-cog;
}
.c-icon--comment:before {
  content: @icon-comment;
}
.c-icon--minus-circle-small:before {
  content: @icon-minus-circle-small;
}
.c-icon--times-circle-small:before {
  content: @icon-times-circle-small;
}
.c-icon--times-circle-small-filled:before {
  content: @icon-times-circle-small-filled;
}
.c-icon--multiparty-dm-2:before {
  content: @icon-multiparty-dm-2;
}
.c-icon--multiparty-dm-3:before {
  content: @icon-multiparty-dm-3;
}
.c-icon--multiparty-dm-4:before {
  content: @icon-multiparty-dm-4;
}
.c-icon--multiparty-dm-5:before {
  content: @icon-multiparty-dm-5;
}
.c-icon--multiparty-dm-6:before {
  content: @icon-multiparty-dm-6;
}
.c-icon--multiparty-dm-7:before {
  content: @icon-multiparty-dm-7;
}
.c-icon--multiparty-dm-8:before {
  content: @icon-multiparty-dm-8;
}
.c-icon--multiparty-dm-9:before {
  content: @icon-multiparty-dm-9;
}
.c-icon--poo-filled:before {
  content: @icon-poo-filled;
}
.c-icon--circle-fill:before {
  content: @icon-circle-fill;
}
.c-icon--flag-filled:before {
  content: @icon-flag-filled;
}
.c-icon--refresh-small:before {
  content: @icon-refresh-small;
}
.c-icon--snooze-filled:before {
  content: @icon-snooze-filled;
}
.c-icon--archived-channel:before {
  content: @icon-archived-channel;
}
.c-icon--presence-dnd-offline:before {
  content: @icon-presence-dnd-offline;
}
.c-icon--presence-external-dnd-offline:before {
  content: @icon-presence-external-dnd-offline;
}
.c-icon--presence-ra-dnd-offline:before {
  content: @icon-presence-ra-dnd-offline;
}
.c-icon--presence-ura-dnd-offline:before {
  content: @icon-presence-ura-dnd-offline;
}
.c-icon--presence-mobile-dnd:before {
  content: @icon-presence-mobile-dnd;
}
.c-icon--play-filled:before {
  content: @icon-play-filled;
}
.c-icon--broadcast-filled:before {
  content: @icon-broadcast-filled;
}
.c-icon--small-star-filled:before {
  content: @icon-small-star-filled;
}
.c-icon--small-comment-filled:before {
  content: @icon-small-comment-filled;
}
.c-icon--paperplane-filled:before {
  content: @icon-paperplane-filled;
}
.c-icon--filebg-large-filled:before {
  content: @icon-filebg-large-filled;
}
.c-icon--filebg-small-filled:before {
  content: @icon-filebg-small-filled;
}
.c-icon--highlight-filled:before {
  content: @icon-highlight-filled;
}
.c-icon--pin-filled:before {
  content: @icon-pin-filled;
}
.c-icon--thumb-tack-filled:before {
  content: @icon-thumb-tack-filled;
}
.c-icon--close-filled:before {
  content: @icon-close-filled;
}
.c-icon--share-filled:before {
  content: @icon-share-filled;
}
.c-icon--pencil-filled:before {
  content: @icon-pencil-filled;
}
.c-icon--side-panel-filled:before {
  content: @icon-side-panel-filled;
}
.c-icon--add-reaction-filled:before {
  content: @icon-add-reaction-filled;
}
.c-icon--mentions-filled:before {
  content: @icon-mentions-filled;
}
.c-icon--small-reply-filled:before {
  content: @icon-small-reply-filled;
}
.c-icon--user-filled:before {
  content: @icon-user-filled;
}
.c-icon--microphone-on:before {
  content: @icon-microphone-on;
}
.c-icon--camera-on:before {
  content: @icon-camera-on;
}
.c-icon--screenshare-on:before {
  content: @icon-screenshare-on;
}
.c-icon--shared-channels:before {
  content: @icon-shared-channels;
}
.c-icon--heart-large-filled:before {
  content: @icon-heart-large-filled;
}
.c-icon--thumbs-up-filled:before {
  content: @icon-thumbs-up-filled;
}
.c-icon--thumbs-down-filled:before {
  content: @icon-thumbs-down-filled;
}
.c-icon--slow-network:before {
  content: @icon-slow-network;
}
.c-icon--sparkles-filled:before {
  content: @icon-sparkles-filled;
}
.c-icon--small-warning-filled:before {
  content: @icon-small-warning-filled;
}
.c-icon--deactivated-user:before {
  content: @icon-deactivated-user;
}
.c-icon--lock-small:before {
  content: @icon-lock-small;
}
.c-icon--sc-baseline:before {
  content: @icon-sc-baseline;
}
.c-icon--shared-channels-baseline:before {
  content: @icon-shared-channels-baseline;
}
.c-icon--sc-pending:before {
  content: @icon-sc-pending;
}
.c-icon--shared-channels-pending:before {
  content: @icon-shared-channels-pending;
}
.c-icon--sc-baseline-pending:before {
  content: @icon-sc-baseline-pending;
}
.c-icon--shared-channels-baseline-pending:before {
  content: @icon-shared-channels-baseline-pending;
}
.c-icon--cloud-offline-filled:before {
  content: @icon-cloud-offline-filled;
}
.c-icon--cloud-offline-small-filled:before {
  content: @icon-cloud-offline-small-filled;
}
.c-icon--lock-large-filled:before {
  content: @icon-lock-large-filled;
}
.c-icon--input-file-active:before {
  content: @icon-input-file-active;
}
.c-icon--input-img-active:before {
  content: @icon-input-img-active;
}
.c-icon--input-integration-active:before {
  content: @icon-input-integration-active;
}
.c-icon--checkbox-full:before {
  content: @icon-checkbox-full;
}
.c-icon--add-reaction-bg:before {
  content: @icon-add-reaction-bg;
}
.c-icon--small-reaction-bg:before {
  content: @icon-small-reaction-bg;
}
.c-icon--info-circle-filled:before {
  content: @icon-info-circle-filled;
}
.c-icon--exclamation-circle-filled:before {
  content: @icon-exclamation-circle-filled;
}
.c-icon--missing-emoji:before {
  content: @icon-missing-emoji;
}
.c-icon--warning-filled:before {
  content: @icon-warning-filled;
}
.c-icon--eye-filled:before {
  content: @icon-eye-filled;
}
.c-icon--circle-minus-filled:before {
  content: @icon-circle-minus-filled;
}
.c-icon--slack:before {
  content: @icon-slack;
}
.c-icon--slack-pillow:before {
  content: @icon-slack-pillow;
}
.c-icon--apple:before {
  content: @icon-apple;
}
.c-icon--android:before {
  content: @icon-android;
}
.c-icon--twitter:before {
  content: @icon-twitter;
}
.c-icon--github:before {
  content: @icon-github;
}
.c-icon--dropbox:before {
  content: @icon-dropbox;
}
.c-icon--google:before {
  content: @icon-google;
}
.c-icon--windows:before {
  content: @icon-windows;
}
.c-icon--youtube:before {
  content: @icon-youtube;
}
.c-icon--google-drive:before {
  content: @icon-google-drive;
}
.c-icon--skype:before {
  content: @icon-skype;
}
.c-icon--rss:before {
  content: @icon-rss;
}
.c-icon--facebook:before {
  content: @icon-facebook;
}
.c-icon--asana:before {
  content: @icon-asana;
}
.c-icon--linkedin:before {
  content: @icon-linkedin;
}
.c-icon--tumblr:before {
  content: @icon-tumblr;
}
.c-icon--instagram:before {
  content: @icon-instagram;
}
.c-icon--google-plus:before {
  content: @icon-google-plus;
}
.c-icon--soundcloud:before {
  content: @icon-soundcloud;
}
.c-icon--flickr:before {
  content: @icon-flickr;
}
.c-icon--pinterest:before {
  content: @icon-pinterest;
}
.c-icon--tripit:before {
  content: @icon-tripit;
}
.c-icon--hangouts:before {
  content: @icon-hangouts;
}
.c-icon--viber:before {
  content: @icon-viber;
}
.c-icon--line:before {
  content: @icon-line;
}
.c-icon--facebook-messenger:before {
  content: @icon-facebook-messenger;
}
.c-icon--1password:before {
  content: @icon-1password;
}
.c-icon--box:before {
  content: @icon-box;
}
.c-icon--box-square:before {
  content: @icon-box-square;
}
.c-icon--google-play:before {
  content: @icon-google-play;
}
.c-icon--spotify:before {
  content: @icon-spotify;
}
.c-icon--siriusxm:before {
  content: @icon-siriusxm;
}
.c-icon--stitcher:before {
  content: @icon-stitcher;
}
.c-icon--pocket-casts:before {
  content: @icon-pocket-casts;
}
.c-icon--onedrive:before {
  content: @icon-onedrive;
}
.c-icon--vogue:before {
  content: @icon-vogue;
}

// -------------------------------------------------------
// Filetypes
// -------------------------------------------------------
@file-generic-blue: #3aa3e3; // @note clear_blue in legacy
@file-spaces-green: #66c79e;
@file-gdrive-red: #db4437;
@file-gdrive-blue: #4285f4;
@file-gdrive-yellow: #f4b400;
@file-gdrive-green: #0f9d58;
@file-snippet-violet: #4d394b; // @note burnt_violet in legacy
@file-ms-word-blue: #2c4098;
@file-ms-excel-green: #377437;
@file-ms-powerpoint-orange: #e05a30;
@file-adobe-ai-orange: #f4993c;
@file-adobe-ps-blue: #56b6de;
@file-adobe-in-pink: #eb81ab;
@file-adobe-flash-red: #a72428;
@file-apple-gray: #9ea0a7;
@file-android-green: #a4ca3a;
@file-dropbox-blue: #007ee5;
@file-figma-black: @sk_black; // @todo [alfred] ask Hubert about this
// Helper mixin (local: DO NOT import and use outside this file!)
._file_icon(@content, @color) {
  // The icon itself
  &:before {
    content: @content;
    color: @color;
  } // For file hover action icons (download, external, view)
  &:after {
    background-color: @color;
  }
}

.c-icon--filetype {
  @file_icon_size: 50px;
  width: @file_icon_size;
  ._file_icon(@icon-file-generic, @file-generic-blue);
  &:before {
    font-size: @file_icon_size;
  }
}

.c-icon--filetype-small {
  @file_icon_size: 40px;
  width: @file_icon_size;
  ._file_icon(@icon-file-generic-small, @file-generic-blue);
  &:before {
    font-size: @file_icon_size;
  }
}

.c-icon--filetype-tiny {
  @file_icon_size: 20px;
  width: @file_icon_size;
  ._file_icon(@icon-file-generic-tiny, @file-generic-blue);
  &:before {
    font-size: @file_icon_size;
  }
}

.c-icon--file-spaces {
  ._file_icon(@icon-file-spaces, @file-spaces-green);
}

.c-icon--file-spaces-small {
  ._file_icon(@icon-file-spaces-small, @file-spaces-green);
}

.c-icon--file-spaces-tiny {
  ._file_icon(@icon-file-spaces-tiny, @file-spaces-green);
}

.c-icon--file-image {
  ._file_icon(@icon-file-image, @file-generic-blue);
}

.c-icon--file-image-small {
  ._file_icon(@icon-file-image-small, @file-generic-blue);
}

.c-icon--file-image-tiny {
  ._file_icon(@icon-file-image-tiny, @file-generic-blue);
}

.c-icon--file-pdf {
  ._file_icon(@icon-file-pdf, @file-gdrive-red);
}

.c-icon--file-pdf-small {
  ._file_icon(@icon-file-pdf-small, @file-gdrive-red);
}

.c-icon--file-pdf-tiny {
  ._file_icon(@icon-file-pdf-tiny, @file-gdrive-red);
}

.c-icon--file-audio {
  ._file_icon(@icon-file-audio, @file-generic-blue);
}

.c-icon--file-audio-small {
  ._file_icon(@icon-file-audio-small, @file-generic-blue);
}

.c-icon--file-audio-tiny {
  ._file_icon(@icon-file-audio-tiny, @file-generic-blue);
}

.c-icon--file-video {
  ._file_icon(@icon-file-video, @file-generic-blue);
}

.c-icon--file-video-small {
  ._file_icon(@icon-file-video-small, @file-generic-blue);
}

.c-icon--file-video-tiny {
  ._file_icon(@icon-file-video-tiny, @file-generic-blue);
}

.c-icon--file-presentation {
  ._file_icon(@icon-file-presentation, @file-generic-blue);
}

.c-icon--file-presentation-small {
  ._file_icon(@icon-file-presentation-small, @file-generic-blue);
}

.c-icon--file-presentation-tiny {
  ._file_icon(@icon-file-presentation-tiny, @file-generic-blue);
}

.c-icon--file-email {
  ._file_icon(@icon-file-email, @file-generic-blue);
}

.c-icon--file-email-small {
  ._file_icon(@icon-file-email-small, @file-generic-blue);
}

.c-icon--file-email-tiny {
  ._file_icon(@icon-file-email-tiny, @file-generic-blue);
}

.c-icon--file-vector {
  ._file_icon(@icon-file-vector, @file-generic-blue);
}

.c-icon--file-vector-small {
  ._file_icon(@icon-file-vector-small, @file-generic-blue);
}

.c-icon--file-vector-tiny {
  ._file_icon(@icon-file-vector-tiny, @file-generic-blue);
}

.c-icon--file-spreadsheet {
  ._file_icon(@icon-file-spreadsheet, @file-generic-blue);
}

.c-icon--file-spreadsheet-small {
  ._file_icon(@icon-file-spreadsheet-small, @file-generic-blue);
}

.c-icon--file-spreadsheet-tiny {
  ._file_icon(@icon-file-spreadsheet-tiny, @file-generic-blue);
}

.c-icon--file-media-archive {
  ._file_icon(@icon-file-media-archive, @file-generic-blue);
}

.c-icon--file-media-archive-small {
  ._file_icon(@icon-file-media-archive-small, @file-generic-blue);
}

.c-icon--file-media-archive-tiny {
  ._file_icon(@icon-file-media-archive-tiny, @file-generic-blue);
}

.c-icon--file-archive {
  ._file_icon(@icon-file-archive, @file-generic-blue);
}

.c-icon--file-archive-small {
  ._file_icon(@icon-file-archive-small, @file-generic-blue);
}

.c-icon--file-archive-tiny {
  ._file_icon(@icon-file-archive-tiny, @file-generic-blue);
}

.c-icon--file-executable {
  ._file_icon(@icon-file-executable, @file-generic-blue);
}

.c-icon--file-executable-small {
  ._file_icon(@icon-file-executable-small, @file-generic-blue);
}

.c-icon--file-executable-tiny {
  ._file_icon(@icon-file-executable-tiny, @file-generic-blue);
}

.c-icon--file-disk-image {
  ._file_icon(@icon-file-disk-image, @file-generic-blue);
}

.c-icon--file-disk-image-small {
  ._file_icon(@icon-file-disk-image-small, @file-generic-blue);
}

.c-icon--file-disk-image-tiny {
  ._file_icon(@icon-file-disk-image-tiny, @file-generic-blue);
}

.c-icon--file-cad {
  ._file_icon(@icon-file-cad, @file-generic-blue);
}

.c-icon--file-cad-small {
  ._file_icon(@icon-file-cad-small, @file-generic-blue);
}

.c-icon--file-cad-tiny {
  ._file_icon(@icon-file-cad-tiny, @file-generic-blue);
}

.c-icon--file-3d-graphic {
  ._file_icon(@icon-file-3d-graphic, @file-generic-blue);
}

.c-icon--file-3d-graphic-small {
  ._file_icon(@icon-file-3d-graphic-small, @file-generic-blue);
}

.c-icon--file-3d-graphic-tiny {
  ._file_icon(@icon-file-3d-graphic-tiny, @file-generic-blue);
}

.c-icon--file-database {
  ._file_icon(@icon-file-database, @file-generic-blue);
}

.c-icon--file-database-small {
  ._file_icon(@icon-file-database-small, @file-generic-blue);
}

.c-icon--file-database-tiny {
  ._file_icon(@icon-file-database-tiny, @file-generic-blue);
}

.c-icon--file-binary {
  ._file_icon(@icon-file-binary, @file-generic-blue);
}

.c-icon--file-binary-small {
  ._file_icon(@icon-file-binary-small, @file-generic-blue);
}

.c-icon--file-binary-tiny {
  ._file_icon(@icon-file-binary-tiny, @file-generic-blue);
}

.c-icon--file-markdown {
  ._file_icon(@icon-file-markdown, @file-generic-blue);
}

.c-icon--file-markdown-small {
  ._file_icon(@icon-file-markdown-small, @file-generic-blue);
}

.c-icon--file-markdown-tiny {
  ._file_icon(@icon-file-markdown-tiny, @file-generic-blue);
}

.c-icon--file-text-post {
  ._file_icon(@icon-file-text-post, @file-spaces-green);
}

.c-icon--file-text-post-small {
  ._file_icon(@icon-file-text-post-small, @file-spaces-green);
}

.c-icon--file-text-post-tiny {
  ._file_icon(@icon-file-text-post-tiny, @file-spaces-green);
}

.c-icon--file-html {
  ._file_icon(@icon-file-html, @file-generic-blue);
}

.c-icon--file-html-small {
  ._file_icon(@icon-file-html-small, @file-generic-blue);
}

.c-icon--file-html-tiny {
  ._file_icon(@icon-file-html-tiny, @file-generic-blue);
}

.c-icon--file-code {
  ._file_icon(@icon-file-code, @file-generic-blue);
}

.c-icon--file-code-small {
  ._file_icon(@icon-file-code-small, @file-generic-blue);
}

.c-icon--file-code-tiny {
  ._file_icon(@icon-file-code-tiny, @file-generic-blue);
}

.c-icon--file-css {
  ._file_icon(@icon-file-css, @file-generic-blue);
}

.c-icon--file-css-small {
  ._file_icon(@icon-file-css-small, @file-generic-blue);
}

.c-icon--file-css-tiny {
  ._file_icon(@icon-file-css-tiny, @file-generic-blue);
}

.c-icon--file-php {
  ._file_icon(@icon-file-php, @file-generic-blue);
}

.c-icon--file-php-small {
  ._file_icon(@icon-file-php-small, @file-generic-blue);
}

.c-icon--file-php-tiny {
  ._file_icon(@icon-file-php-tiny, @file-generic-blue);
}

.c-icon--file-snippet {
  ._file_icon(@icon-file-snippet, @file-snippet-violet);
}

.c-icon--file-snippet-small {
  ._file_icon(@icon-file-snippet-small, @file-snippet-violet);
}

.c-icon--file-snippet-tiny {
  ._file_icon(@icon-file-snippet-tiny, @file-snippet-violet);
}

.c-icon--file-word {
  ._file_icon(@icon-file-word, @file-ms-word-blue);
}

.c-icon--file-word-small {
  ._file_icon(@icon-file-word-small, @file-ms-word-blue);
}

.c-icon--file-word-tiny {
  ._file_icon(@icon-file-word-tiny, @file-ms-word-blue);
}

.c-icon--file-excel {
  ._file_icon(@icon-file-excel, @file-ms-excel-green);
}

.c-icon--file-excel-small {
  ._file_icon(@icon-file-excel-small, @file-ms-excel-green);
}

.c-icon--file-excel-tiny {
  ._file_icon(@icon-file-excel-tiny, @file-ms-excel-green);
}

.c-icon--file-powerpoint {
  ._file_icon(@icon-file-powerpoint, @file-ms-powerpoint-orange);
}

.c-icon--file-powerpoint-small {
  ._file_icon(@icon-file-powerpoint-small, @file-ms-powerpoint-orange);
}

.c-icon--file-powerpoint-tiny {
  ._file_icon(@icon-file-powerpoint-tiny, @file-ms-powerpoint-orange);
}

.c-icon--file-illustrator {
  ._file_icon(@icon-file-illustrator, @file-adobe-ai-orange);
}

.c-icon--file-illustrator-small {
  ._file_icon(@icon-file-illustrator-small, @file-adobe-ai-orange);
}

.c-icon--file-illustrator-tiny {
  ._file_icon(@icon-file-illustrator-tiny, @file-adobe-ai-orange);
}

.c-icon--file-photoshop {
  ._file_icon(@icon-file-photoshop, @file-adobe-ps-blue);
}

.c-icon--file-photoshop-small {
  ._file_icon(@icon-file-photoshop-small, @file-adobe-ps-blue);
}

.c-icon--file-photoshop-tiny {
  ._file_icon(@icon-file-photoshop-tiny, @file-adobe-ps-blue);
}

.c-icon--file-indesign {
  ._file_icon(@icon-file-indesign, @file-adobe-in-pink);
}

.c-icon--file-indesign-small {
  ._file_icon(@icon-file-indesign-small, @file-adobe-in-pink);
}

.c-icon--file-indesign-tiny {
  ._file_icon(@icon-file-indesign-tiny, @file-adobe-in-pink);
}

.c-icon--file-adobe-flash {
  ._file_icon(@icon-file-adobe-flash, @file-adobe-flash-red);
}

.c-icon--file-adobe-flash-small {
  ._file_icon(@icon-file-adobe-flash-small, @file-adobe-flash-red);
}

.c-icon--file-adobe-flash-tiny {
  ._file_icon(@icon-file-adobe-flash-tiny, @file-adobe-flash-red);
}

.c-icon--file-adobe-swf {
  ._file_icon(@icon-file-adobe-swf, @file-adobe-flash-red);
}

.c-icon--file-adobe-swf-small {
  ._file_icon(@icon-file-adobe-swf-small, @file-adobe-flash-red);
}

.c-icon--file-adobe-swf-tiny {
  ._file_icon(@icon-file-adobe-swf-tiny, @file-adobe-flash-red);
}

.c-icon--file-iphone-app {
  ._file_icon(@icon-file-iphone-app, @file-apple-gray);
}

.c-icon--file-iphone-app-small {
  ._file_icon(@icon-file-iphone-app-small, @file-apple-gray);
}

.c-icon--file-iphone-app-tiny {
  ._file_icon(@icon-file-iphone-app-tiny, @file-apple-gray);
}

.c-icon--file-android-app {
  ._file_icon(@icon-file-android-app, @file-android-green);
}

.c-icon--file-android-app-small {
  ._file_icon(@icon-file-android-app-small, @file-android-green);
}

.c-icon--file-android-app-tiny {
  ._file_icon(@icon-file-android-app-tiny, @file-android-green);
}

.c-icon--file-dropbox {
  ._file_icon(@icon-file-dropbox, @file-dropbox-blue);
}

.c-icon--file-dropbox-small {
  ._file_icon(@icon-file-dropbox-small, @file-dropbox-blue);
}

.c-icon--file-dropbox-tiny {
  ._file_icon(@icon-file-dropbox-tiny, @file-dropbox-blue);
}

.c-icon--file-google-presentation {
  ._file_icon(@icon-file-google-presentation, @file-gdrive-yellow);
}

.c-icon--file-google-presentation-small {
  ._file_icon(@icon-file-google-presentation-small, @file-gdrive-yellow);
}

.c-icon--file-google-presentation-tiny {
  ._file_icon(@icon-file-google-presentation-tiny, @file-gdrive-yellow);
}

.c-icon--file-google-spreadsheet {
  ._file_icon(@icon-file-google-spreadsheet, @file-gdrive-green);
}

.c-icon--file-google-spreadsheet-small {
  ._file_icon(@icon-file-google-spreadsheet-small, @file-gdrive-green);
}

.c-icon--file-google-spreadsheet-tiny {
  ._file_icon(@icon-file-google-spreadsheet-tiny, @file-gdrive-green);
}

.c-icon--file-google-document {
  ._file_icon(@icon-file-google-document, @file-gdrive-blue);
}

.c-icon--file-google-document-small {
  ._file_icon(@icon-file-google-document-small, @file-gdrive-blue);
}

.c-icon--file-google-document-tiny {
  ._file_icon(@icon-file-google-document-tiny, @file-gdrive-blue);
}

.c-icon--file-google-form {
  ._file_icon(@icon-file-google-form, @file-gdrive-red);
}

.c-icon--file-google-form-small {
  ._file_icon(@icon-file-google-form-small, @file-gdrive-red);
}

.c-icon--file-google-form-tiny {
  ._file_icon(@icon-file-google-form-tiny, @file-gdrive-red);
}

.c-icon--file-qtz {
  ._file_icon(@icon-file-qtz, @file-generic-blue);
}

.c-icon--file-qtz-small {
  ._file_icon(@icon-file-qtz-small, @file-generic-blue);
}

.c-icon--file-qtz-tiny {
  ._file_icon(@icon-file-qtz-tiny, @file-generic-blue);
}

.c-icon--file-sketch {
  ._file_icon(@icon-file-sketch, @file-adobe-ai-orange);
}

.c-icon--file-sketch-small {
  ._file_icon(@icon-file-sketch-small, @file-adobe-ai-orange);
}

.c-icon--file-sketch-tiny {
  ._file_icon(@icon-file-sketch-tiny, @file-adobe-ai-orange);
}

.c-icon--file-figma-tiny {
  ._file_icon(@icon-file-figma-tiny, @file-figma-black);
}
`,`/*
 * PLASTIC
 * Fonts
 * Site-wide fonts and helpers
 */

@font-face {
  font-family: 'appleLogo';
  src: local('Lucida Grande');
  unicode-range: U+F8FF;
}

/* Double-quotes are required to get Helvetica Neue to load properly */
@lato: 'Slack-Lato', 'appleLogo', sans-serif;
@helvetica: 'Helvetica Neue', Helvetica, 'Segoe UI', Tahoma, Arial, sans-serif;

/*
 * Explanation of font-family choice / sequence ...
 * consolas is a MSFT font included with Windows XP and is designed for legibility,
 * ClearType-friendly etc. https://en.wikipedia.org/wiki/Consolas
 * \`courier\` is next as it looks nice on the Mac, which won't have Consolas.
 * there is \`Menlo\` on the Mac, but it's quite tall and long compared to courier.
 * as a fallback, \`monospace\` is the generic family we want to render snippets with.
 */
@monospace:
  Consolas,
  monaco,
  courier,
  monospace !important;
`,`/*
 * PLASTIC
 * Utilities
 * Mixins for common styles.
 *
 * To be used in other stylesheets in the form:
 * .selector {
 *     .name_of_mixin;
 * }
 *
 * plastic_helpers.source.less defines helper classes for these mixins, to be used as inline classes in markup:
 * <div class="name_of_helper"></div>
 *
 */

@import './plastic_typography.less';
@import './plastic_colors.less';

// Fonts
.helvetica() {
  font-family: @helvetica;
}
.lato() {
  font-family: @lato;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
}
.lato_black() {
  font-family: @lato;
  font-weight: 900;
}
.lato_bold() {
  font-family: @lato;
  font-weight: 700;
}
.lato_regular() {
  font-family: @lato;
  font-weight: 500;
}
.lato_light() {
  font-family: @lato;
  font-weight: 300;
}
.monospace() {
  font-family: @monospace;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
}

// Unit conversion
.px_to_rem(@property, @px_value) when (ispixel(@px_value)) {
  @{property}: unit(@px_value / 16, rem);
}

/* Font Size Mixin
 * For example:
 * 	.font_size(16px);		// 16 is in px unit and will output in rem unit: \`font-size: 1rem;\`
*/
.font_size(@px_value) when (ispixel(@px_value)) {
  .px_to_rem(font-size, @px_value);
}

/* Line Height Mixin
 * For example:
 * 	.line_height(24px);	// 24 is in px unit and will output in rem unit: \`line-height: 1.5rem;\`
*/
.line_height(@px_value) when (ispixel(@px_value)) {
  .px_to_rem(line-height, @px_value);
}

// Font Styles
.normal() {
  font-weight: normal;
}
.black() {
  font-weight: 900;
}
.bold() {
  font-weight: 700;
}
.medium() {
  font-weight: 500;
}
.light() {
  font-weight: 300;
}
.italic() {
  font-style: italic;
}
.underline() {
  text-decoration: underline;
}
.no_underline() {
  text-decoration: none;
}
.tiny {
  font-size: 0.7rem;
}
.small {
  font-size: 0.9rem;
}
`],sourceRoot:""}]);const _t=ie},8843(y){"use strict";y.exports=function(_){var d=[];return d.toString=function(){return this.map(function(C){var g="",B=typeof C[5]<"u";return C[4]&&(g+="@supports (".concat(C[4],") {")),C[2]&&(g+="@media ".concat(C[2]," {")),B&&(g+="@layer".concat(C[5].length>0?" ".concat(C[5]):""," {")),g+=_(C),B&&(g+="}"),C[2]&&(g+="}"),C[4]&&(g+="}"),g}).join("")},d.i=function(C,g,B,w,T){typeof C=="string"&&(C=[[null,C,void 0]]);var P={};if(B)for(var I=0;I<this.length;I++){var q=this[I][0];q!=null&&(P[q]=!0)}for(var J=0;J<C.length;J++){var O=[].concat(C[J]);B&&P[O[0]]||(typeof T<"u"&&(typeof O[5]>"u"||(O[1]="@layer".concat(O[5].length>0?" ".concat(O[5]):""," {").concat(O[1],"}")),O[5]=T),g&&(O[2]&&(O[1]="@media ".concat(O[2]," {").concat(O[1],"}")),O[2]=g),w&&(O[4]?(O[1]="@supports (".concat(O[4],") {").concat(O[1],"}"),O[4]=w):O[4]="".concat(w)),d.push(O))}},d}},5858(y){"use strict";y.exports=function(_,d){return d||(d={}),_&&(_=String(_.__esModule?_.default:_),/^['"].*['"]$/.test(_)&&(_=_.slice(1,-1)),d.hash&&(_+=d.hash),/["'() \t\n]|(%20)/.test(_)||d.needQuotes?'"'.concat(_.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):_)}},2845(y){"use strict";y.exports=function(_){var d=_[1],k=_[3];if(!k)return d;if(typeof btoa=="function"){var C=btoa(unescape(encodeURIComponent(JSON.stringify(k)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(C),B="/*# ".concat(g," */");return[d].concat([B]).join(`
`)}return[d].join(`
`)}},3869(y,_,d){"use strict";var k=d(4717),C={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},T={};T[k.ForwardRef]=B,T[k.Memo]=w;function P(H){return k.isMemo(H)?w:T[H.$$typeof]||C}var I=Object.defineProperty,q=Object.getOwnPropertyNames,J=Object.getOwnPropertySymbols,O=Object.getOwnPropertyDescriptor,Z=Object.getPrototypeOf,ee=Object.prototype;function W(H,ie,ne){if(typeof ie!="string"){if(ee){var ae=Z(ie);ae&&ae!==ee&&W(H,ae,ne)}var K=q(ie);J&&(K=K.concat(J(ie)));for(var N=P(H),h=P(ie),b=0;b<K.length;++b){var se=K[b];if(!g[se]&&!(ne&&ne[se])&&!(h&&h[se])&&!(N&&N[se])){var qe=O(ie,se);try{I(H,se,qe)}catch{}}}}return H}y.exports=W},5889(y,_){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=typeof Symbol=="function"&&Symbol.for,k=d?Symbol.for("react.element"):60103,C=d?Symbol.for("react.portal"):60106,g=d?Symbol.for("react.fragment"):60107,B=d?Symbol.for("react.strict_mode"):60108,w=d?Symbol.for("react.profiler"):60114,T=d?Symbol.for("react.provider"):60109,P=d?Symbol.for("react.context"):60110,I=d?Symbol.for("react.async_mode"):60111,q=d?Symbol.for("react.concurrent_mode"):60111,J=d?Symbol.for("react.forward_ref"):60112,O=d?Symbol.for("react.suspense"):60113,Z=d?Symbol.for("react.suspense_list"):60120,ee=d?Symbol.for("react.memo"):60115,W=d?Symbol.for("react.lazy"):60116,H=d?Symbol.for("react.block"):60121,ie=d?Symbol.for("react.fundamental"):60117,ne=d?Symbol.for("react.responder"):60118,ae=d?Symbol.for("react.scope"):60119;function K(h){if(typeof h=="object"&&h!==null){var b=h.$$typeof;switch(b){case k:switch(h=h.type,h){case I:case q:case g:case w:case B:case O:return h;default:switch(h=h&&h.$$typeof,h){case P:case J:case W:case ee:case T:return h;default:return b}}case C:return b}}}function N(h){return K(h)===q}_.AsyncMode=I,_.ConcurrentMode=q,_.ContextConsumer=P,_.ContextProvider=T,_.Element=k,_.ForwardRef=J,_.Fragment=g,_.Lazy=W,_.Memo=ee,_.Portal=C,_.Profiler=w,_.StrictMode=B,_.Suspense=O,_.isAsyncMode=function(h){return N(h)||K(h)===I},_.isConcurrentMode=N,_.isContextConsumer=function(h){return K(h)===P},_.isContextProvider=function(h){return K(h)===T},_.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===k},_.isForwardRef=function(h){return K(h)===J},_.isFragment=function(h){return K(h)===g},_.isLazy=function(h){return K(h)===W},_.isMemo=function(h){return K(h)===ee},_.isPortal=function(h){return K(h)===C},_.isProfiler=function(h){return K(h)===w},_.isStrictMode=function(h){return K(h)===B},_.isSuspense=function(h){return K(h)===O},_.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===g||h===q||h===w||h===B||h===O||h===Z||typeof h=="object"&&h!==null&&(h.$$typeof===W||h.$$typeof===ee||h.$$typeof===T||h.$$typeof===P||h.$$typeof===J||h.$$typeof===ie||h.$$typeof===ne||h.$$typeof===ae||h.$$typeof===H)},_.typeOf=K},4717(y,_,d){"use strict";y.exports=d(5889)},3475(y,_,d){"use strict";var k=d(9572);function C(){}function g(){}g.resetWarningCache=C,y.exports=function(){function B(P,I,q,J,O,Z){if(Z!==k){var ee=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw ee.name="Invariant Violation",ee}}B.isRequired=B;function w(){return B}var T={array:B,bool:B,func:B,number:B,object:B,string:B,symbol:B,any:B,arrayOf:w,element:B,elementType:B,instanceOf:w,node:B,objectOf:w,oneOf:w,oneOfType:w,shape:w,exact:w,checkPropTypes:g,resetWarningCache:C};return T.PropTypes=T,T}},4031(y,_,d){if(0)var k,C;else y.exports=d(3475)()},9572(y){"use strict";var _="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";y.exports=_},6988(y,_){"use strict";var d;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=typeof Symbol=="function"&&Symbol.for,C=k?Symbol.for("react.element"):60103,g=k?Symbol.for("react.portal"):60106,B=k?Symbol.for("react.fragment"):60107,w=k?Symbol.for("react.strict_mode"):60108,T=k?Symbol.for("react.profiler"):60114,P=k?Symbol.for("react.provider"):60109,I=k?Symbol.for("react.context"):60110,q=k?Symbol.for("react.async_mode"):60111,J=k?Symbol.for("react.concurrent_mode"):60111,O=k?Symbol.for("react.forward_ref"):60112,Z=k?Symbol.for("react.suspense"):60113,ee=k?Symbol.for("react.suspense_list"):60120,W=k?Symbol.for("react.memo"):60115,H=k?Symbol.for("react.lazy"):60116,ie=k?Symbol.for("react.block"):60121,ne=k?Symbol.for("react.fundamental"):60117,ae=k?Symbol.for("react.responder"):60118,K=k?Symbol.for("react.scope"):60119;function N(b){if(typeof b=="object"&&b!==null){var se=b.$$typeof;switch(se){case C:switch(b=b.type,b){case q:case J:case B:case T:case w:case Z:return b;default:switch(b=b&&b.$$typeof,b){case I:case O:case H:case W:case P:return b;default:return se}}case g:return se}}}function h(b){return N(b)===J}d=q,d=J,d=I,d=P,d=C,d=O,d=B,d=H,d=W,d=g,d=T,d=w,d=Z,d=function(b){return h(b)||N(b)===q},d=h,d=function(b){return N(b)===I},d=function(b){return N(b)===P},d=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===C},d=function(b){return N(b)===O},d=function(b){return N(b)===B},d=function(b){return N(b)===H},d=function(b){return N(b)===W},d=function(b){return N(b)===g},d=function(b){return N(b)===T},d=function(b){return N(b)===w},d=function(b){return N(b)===Z},d=function(b){return typeof b=="string"||typeof b=="function"||b===B||b===J||b===T||b===w||b===Z||b===ee||typeof b=="object"&&b!==null&&(b.$$typeof===H||b.$$typeof===W||b.$$typeof===P||b.$$typeof===I||b.$$typeof===O||b.$$typeof===ne||b.$$typeof===ae||b.$$typeof===K||b.$$typeof===ie)},d=N},5376(y,_,d){"use strict";d(6988)},403(y){"use strict";var _=[];function d(g){for(var B=-1,w=0;w<_.length;w++)if(_[w].identifier===g){B=w;break}return B}function k(g,B){for(var w={},T=[],P=0;P<g.length;P++){var I=g[P],q=B.base?I[0]+B.base:I[0],J=w[q]||0,O="".concat(q," ").concat(J);w[q]=J+1;var Z=d(O),ee={css:I[1],media:I[2],sourceMap:I[3],supports:I[4],layer:I[5]};if(Z!==-1)_[Z].references++,_[Z].updater(ee);else{var W=C(ee,B);B.byIndex=P,_.splice(P,0,{identifier:O,updater:W,references:1})}T.push(O)}return T}function C(g,B){var w=B.domAPI(B);w.update(g);var T=function(I){if(I){if(I.css===g.css&&I.media===g.media&&I.sourceMap===g.sourceMap&&I.supports===g.supports&&I.layer===g.layer)return;w.update(g=I)}else w.remove()};return T}y.exports=function(g,B){B=B||{},g=g||[];var w=k(g,B);return function(P){P=P||[];for(var I=0;I<w.length;I++){var q=w[I],J=d(q);_[J].references--}for(var O=k(P,B),Z=0;Z<w.length;Z++){var ee=w[Z],W=d(ee);_[W].references===0&&(_[W].updater(),_.splice(W,1))}w=O}}},7380(y){"use strict";var _={};function d(C){if(typeof _[C]>"u"){var g=document.querySelector(C);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch{g=null}_[C]=g}return _[C]}function k(C,g){var B=d(C);if(!B)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");B.appendChild(g)}y.exports=k},7031(y){"use strict";function _(d){var k=document.createElement("style");return d.setAttributes(k,d.attributes),d.insert(k,d.options),k}y.exports=_},211(y,_,d){"use strict";function k(C){var g=d.nc;g&&C.setAttribute("nonce",g)}y.exports=k},2792(y){"use strict";function _(C,g,B){var w="";B.supports&&(w+="@supports (".concat(B.supports,") {")),B.media&&(w+="@media ".concat(B.media," {"));var T=typeof B.layer<"u";T&&(w+="@layer".concat(B.layer.length>0?" ".concat(B.layer):""," {")),w+=B.css,T&&(w+="}"),B.media&&(w+="}"),B.supports&&(w+="}");var P=B.sourceMap;P&&typeof btoa<"u"&&(w+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(P))))," */")),g.styleTagTransform(w,C,g.options)}function d(C){if(C.parentNode===null)return!1;C.parentNode.removeChild(C)}function k(C){var g=C.insertStyleElement(C);return{update:function(w){_(g,C,w)},remove:function(){d(g)}}}y.exports=k},1684(y){"use strict";function _(d,k){if(k.styleSheet)k.styleSheet.cssText=d;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(d))}}y.exports=_},6723(y,_,d){"use strict";y.exports=d.p+"slack-icons-v25aaab12924ee17421031.woff2"},9138(y,_,d){"use strict";y.exports=d.p+"lato-blackd3e44e6115ad32c37176.woff2"},4392(y,_,d){"use strict";y.exports=d.p+"lato-bold31816c24a18fbc659282.woff2"},7(y,_,d){"use strict";y.exports=d.p+"lato-italic-black62bc5da14d9c6ff41e5f.woff2"},5959(y,_,d){"use strict";y.exports=d.p+"lato-italic-bold365ea5a303e2259ca5ab.woff2"},5906(y,_,d){"use strict";y.exports=d.p+"lato-italic-light074c7fc38126bb94664d.woff2"},9269(y,_,d){"use strict";y.exports=d.p+"lato-italic4484c4211566a05bd71b.woff2"},5539(y,_,d){"use strict";y.exports=d.p+"lato-light2815bd9ba07f2cbe781a.woff2"},4603(y,_,d){"use strict";y.exports=d.p+"lato-regularf1aa7a0753149183efa2.woff2"}},ye={};function R(y){var _=ye[y];if(_!==void 0)return _.exports;var d=ye[y]={id:y,exports:{}};return Se[y](d,d.exports,R),d.exports}R.m=Se,R.n=y=>{var _=y&&y.__esModule?()=>y.default:()=>y;return R.d(_,{a:_}),_},R.d=(y,_)=>{for(var d in _)R.o(_,d)&&!R.o(y,d)&&Object.defineProperty(y,d,{enumerable:!0,get:_[d]})},R.o=(y,_)=>Object.prototype.hasOwnProperty.call(y,_),R.r=y=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})},R.p="./",(()=>{R.b=typeof document<"u"&&document.baseURI||self.location.href;var y={982:0}})(),R.nc=void 0;var vf={};(()=>{"use strict";var y={};R.r(y),R.d(y,{uA:()=>h,FK:()=>N,Ob:()=>Ti,q6:()=>Oi,n:()=>ne,_3:()=>K,Qv:()=>To,fF:()=>g,XX:()=>tn,v2:()=>Be});var _={};R.r(_),R.d(_,{FunctionToString:()=>vF,InboundFilters:()=>wF,LinkedErrors:()=>YF});var d={};R.r(d),R.d(d,{Breadcrumbs:()=>Uv,Dedupe:()=>Zv,GlobalHandlers:()=>fv,HttpContext:()=>Xv,LinkedErrors:()=>Vv,TryCatch:()=>_v});var k={};R.r(k),R.d(k,{EventToMain:()=>_o,ScopeToMain:()=>cC});var C,g,B,w,T,P,I,q,J,O={},Z=[],ee=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,W=Array.isArray;function H(e,n){for(var t in n)e[t]=n[t];return e}function ie(e){var n=e.parentNode;n&&n.removeChild(e)}function ne(e,n,t){var o,r,i,c={};for(i in n)i=="key"?o=n[i]:i=="ref"?r=n[i]:c[i]=n[i];if(arguments.length>2&&(c.children=arguments.length>3?C.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)c[i]===void 0&&(c[i]=e.defaultProps[i]);return ae(e,c,o,r,null)}function ae(e,n,t,o,r){var i={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++B,__i:-1,__u:0};return r==null&&g.vnode!=null&&g.vnode(i),i}function K(){return{current:null}}function N(e){return e.children}function h(e,n){this.props=e,this.context=n}function b(e,n){if(n==null)return e.__?b(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?b(e):null}function se(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return se(e)}}function qe(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!He.__r++||P!==g.debounceRendering)&&((P=g.debounceRendering)||I)(He)}function He(){var e,n,t,o,r,i,c,a,s;for(T.sort(q);e=T.shift();)e.__d&&(n=T.length,o=void 0,i=(r=(t=e).__v).__e,a=[],s=[],(c=t.__P)&&((o=H({},r)).__v=r.__v+1,g.vnode&&g.vnode(o),wo(c,o,r,t.__n,c.ownerSVGElement!==void 0,32&r.__u?[i]:null,a,i??b(r),!!(32&r.__u),s),o.__.__k[o.__i]=o,xi(a,o,s),o.__e!=i&&se(o)),T.length>n&&T.sort(q));He.__r=0}function _t(e,n,t,o,r,i,c,a,s,l,A){var f,E,u,p,v,m=o&&o.__k||Z,F=n.length;for(t.__d=s,Cf(t,n,m),s=t.__d,f=0;f<F;f++)(u=t.__k[f])!=null&&typeof u!="boolean"&&typeof u!="function"&&(E=u.__i===-1?O:m[u.__i]||O,u.__i=f,wo(e,u,E,r,i,c,a,s,l,A),p=u.__e,u.ref&&E.ref!=u.ref&&(E.ref&&So(E.ref,null,u),A.push(u.ref,u.__c||p,u)),v==null&&p!=null&&(v=p),65536&u.__u||E.__k===u.__k?s=Ci(u,s,e):typeof u.type=="function"&&u.__d!==void 0?s=u.__d:p&&(s=p.nextSibling),u.__d=void 0,u.__u&=-196609);t.__d=s,t.__e=v}function Cf(e,n,t){var o,r,i,c,a,s=n.length,l=t.length,A=l,f=0;for(e.__k=[],o=0;o<s;o++)(r=e.__k[o]=(r=n[o])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?ae(null,r,null,null,r):W(r)?ae(N,{children:r},null,null,null):r.__b>0?ae(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,a=kf(r,t,c=o+f,A),r.__i=a,i=null,a!==-1&&(A--,(i=t[a])&&(i.__u|=131072)),i==null||i.__v===null?(a==-1&&f--,typeof r.type!="function"&&(r.__u|=65536)):a!==c&&(a===c+1?f++:a>c?A>s-c?f+=a-c:f--:f=a<c&&a==c-1?a-c:0,a!==o+f&&(r.__u|=65536))):(i=t[o])&&i.key==null&&i.__e&&(i.__e==e.__d&&(e.__d=b(i)),xo(i,i,!1),t[o]=null,A--);if(A)for(o=0;o<l;o++)(i=t[o])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),xo(i,i))}function Ci(e,n,t){var o,r;if(typeof e.type=="function"){for(o=e.__k,r=0;o&&r<o.length;r++)o[r]&&(o[r].__=e,n=Ci(o[r],n,t));return n}return e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e),n&&n.nextSibling}function Be(e,n){return n=n||[],e==null||typeof e=="boolean"||(W(e)?e.some(function(t){Be(t,n)}):n.push(e)),n}function kf(e,n,t,o){var r=e.key,i=e.type,c=t-1,a=t+1,s=n[t];if(s===null||s&&r==s.key&&i===s.type)return t;if(o>(s!=null&&!(131072&s.__u)?1:0))for(;c>=0||a<n.length;){if(c>=0){if((s=n[c])&&!(131072&s.__u)&&r==s.key&&i===s.type)return c;c--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&r==s.key&&i===s.type)return a;a++}}return-1}function ki(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||ee.test(n)?t:t+"px"}function ht(e,n,t,o,r){var i;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||ki(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||ki(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")i=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+i]=t,t?o?t.u=o.u:(t.u=Date.now(),e.addEventListener(n,i?Si:wi,i)):e.removeEventListener(n,i?Si:wi,i);else{if(r)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="width"&&n!=="height"&&n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n!=="rowSpan"&&n!=="colSpan"&&n!=="role"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function wi(e){var n=this.l[e.type+!1];if(e.t){if(e.t<=n.u)return}else e.t=Date.now();return n(g.event?g.event(e):e)}function Si(e){return this.l[e.type+!0](g.event?g.event(e):e)}function wo(e,n,t,o,r,i,c,a,s,l){var A,f,E,u,p,v,m,F,S,D,V,G,re,X,ce,Q=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),i=[a=n.__e=t.__e]),(A=g.__b)&&A(n);e:if(typeof Q=="function")try{if(F=n.props,S=(A=Q.contextType)&&o[A.__c],D=A?S?S.props.value:A.__:o,t.__c?m=(f=n.__c=t.__c).__=f.__E:("prototype"in Q&&Q.prototype.render?n.__c=f=new Q(F,D):(n.__c=f=new h(F,D),f.constructor=Q,f.render=Sf),S&&S.sub(f),f.props=F,f.state||(f.state={}),f.context=D,f.__n=o,E=f.__d=!0,f.__h=[],f._sb=[]),f.__s==null&&(f.__s=f.state),Q.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=H({},f.__s)),H(f.__s,Q.getDerivedStateFromProps(F,f.__s))),u=f.props,p=f.state,f.__v=n,E)Q.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(Q.getDerivedStateFromProps==null&&F!==u&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(F,D),!f.__e&&(f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(F,f.__s,D)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(f.props=F,f.state=f.__s,f.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(Ne){Ne&&(Ne.__=n)}),V=0;V<f._sb.length;V++)f.__h.push(f._sb[V]);f._sb=[],f.__h.length&&c.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(F,f.__s,D),f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(u,p,v)})}if(f.context=D,f.props=F,f.__P=e,f.__e=!1,G=g.__r,re=0,"prototype"in Q&&Q.prototype.render){for(f.state=f.__s,f.__d=!1,G&&G(n),A=f.render(f.props,f.state,f.context),X=0;X<f._sb.length;X++)f.__h.push(f._sb[X]);f._sb=[]}else do f.__d=!1,G&&G(n),A=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++re<25);f.state=f.__s,f.getChildContext!=null&&(o=H(H({},o),f.getChildContext())),E||f.getSnapshotBeforeUpdate==null||(v=f.getSnapshotBeforeUpdate(u,p)),_t(e,W(ce=A!=null&&A.type===N&&A.key==null?A.props.children:A)?ce:[ce],n,t,o,r,i,c,a,s,l),f.base=n.__e,n.__u&=-161,f.__h.length&&c.push(f),m&&(f.__E=f.__=null)}catch(Ne){n.__v=null,s||i!=null?(n.__e=a,n.__u|=s?160:32,i[i.indexOf(a)]=null):(n.__e=t.__e,n.__k=t.__k),g.__e(Ne,n,t)}else i==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=wf(t.__e,n,t,o,r,i,c,s,l);(A=g.diffed)&&A(n)}function xi(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)So(t[o],t[++o],t[++o]);g.__c&&g.__c(n,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(i){i.call(r)})}catch(i){g.__e(i,r.__v)}})}function wf(e,n,t,o,r,i,c,a,s){var l,A,f,E,u,p,v,m=t.props,F=n.props,S=n.type;if(S==="svg"&&(r=!0),i!=null){for(l=0;l<i.length;l++)if((u=i[l])&&"setAttribute"in u==!!S&&(S?u.localName===S:u.nodeType===3)){e=u,i[l]=null;break}}if(e==null){if(S===null)return document.createTextNode(F);e=r?document.createElementNS("http://www.w3.org/2000/svg",S):document.createElement(S,F.is&&F),i=null,a=!1}if(S===null)m===F||a&&e.data===F||(e.data=F);else{if(i=i&&C.call(e.childNodes),m=t.props||O,!a&&i!=null)for(m={},l=0;l<e.attributes.length;l++)m[(u=e.attributes[l]).name]=u.value;for(l in m)u=m[l],l=="children"||(l=="dangerouslySetInnerHTML"?f=u:l==="key"||l in F||ht(e,l,null,u,r));for(l in F)u=F[l],l=="children"?E=u:l=="dangerouslySetInnerHTML"?A=u:l=="value"?p=u:l=="checked"?v=u:l==="key"||a&&typeof u!="function"||m[l]===u||ht(e,l,u,m[l],r);if(A)a||f&&(A.__html===f.__html||A.__html===e.innerHTML)||(e.innerHTML=A.__html),n.__k=[];else if(f&&(e.innerHTML=""),_t(e,W(E)?E:[E],n,t,o,r&&S!=="foreignObject",i,c,i?i[0]:t.__k&&b(t,0),a,s),i!=null)for(l=i.length;l--;)i[l]!=null&&ie(i[l]);a||(l="value",p!==void 0&&(p!==e[l]||S==="progress"&&!p||S==="option"&&p!==m[l])&&ht(e,l,p,m[l],!1),l="checked",v!==void 0&&v!==e[l]&&ht(e,l,v,m[l],!1))}return e}function So(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(o){g.__e(o,t)}}function xo(e,n,t){var o,r;if(g.unmount&&g.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||So(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){g.__e(i,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&xo(o[r],n,t||typeof e.type!="function");t||e.__e==null||ie(e.__e),e.__=e.__e=e.__d=void 0}function Sf(e,n,t){return this.constructor(e,t)}function tn(e,n,t){var o,r,i,c;g.__&&g.__(e,n),r=(o=typeof t=="function")?null:t&&t.__k||n.__k,i=[],c=[],wo(n,e=(!o&&t||n).__k=ne(N,null,[e]),r||O,O,n.ownerSVGElement!==void 0,!o&&t?[t]:r?null:n.firstChild?C.call(n.childNodes):null,i,!o&&t?t:r?r.__e:n.firstChild,o,c),xi(i,e,c)}function To(e,n){tn(e,n,To)}function Ti(e,n,t){var o,r,i,c,a=H({},e.props);for(i in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),n)i=="key"?o=n[i]:i=="ref"?r=n[i]:a[i]=n[i]===void 0&&c!==void 0?c[i]:n[i];return arguments.length>2&&(a.children=arguments.length>3?C.call(arguments,2):t),ae(e.type,a,o||e.key,r||e.ref,null)}function Oi(e,n){var t={__c:n="__cC"+J++,__:e,Consumer:function(o,r){return o.children(r)},Provider:function(o){var r,i;return this.getChildContext||(r=[],(i={})[n]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&r.some(function(a){a.__e=!0,qe(a)})},this.sub=function(c){r.push(c);var a=c.componentWillUnmount;c.componentWillUnmount=function(){r.splice(r.indexOf(c),1),a&&a.call(c)}}),o.children}};return t.Provider.__=t.Consumer.contextType=t}C=Z.slice,g={__e:function(e,n,t,o){for(var r,i,c;n=n.__;)if((r=n.__c)&&!r.__)try{if((i=r.constructor)&&i.getDerivedStateFromError!=null&&(r.setState(i.getDerivedStateFromError(e)),c=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,o||{}),c=r.__d),c)return r.__E=r}catch(a){e=a}throw e}},B=0,w=function(e){return e!=null&&e.constructor==null},h.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof e=="function"&&(e=e(H({},t),this.props)),e&&H(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),qe(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),qe(this))},h.prototype.render=N,T=[],I=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,n){return e.__v.__b-n.__v.__b},He.__r=0,J=0;var xf,Ii,Tf=/["&<]/;function Ri(e){if(e.length===0||Tf.test(e)===!1)return e;for(var n=0,t=0,o="",r="";t<e.length;t++){switch(e.charCodeAt(t)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 60:r="&lt;";break;default:continue}t!==n&&(o+=e.slice(n,t)),o+=r,n=t+1}return t!==n&&(o+=e.slice(n,t)),o}var Of=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,If=0,Rf=Array.isArray;function M(e,n,t,o,r,i){var c,a,s={};for(a in n)a=="ref"?c=n[a]:s[a]=n[a];var l={type:e,props:s,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--If,__i:-1,__u:0,__source:r,__self:i};if(typeof e=="function"&&(c=e.defaultProps))for(a in c)s[a]===void 0&&(s[a]=c[a]);return g.vnode&&g.vnode(l),l}function Vk(e){var n=M(xf,{tpl:e,exprs:[].slice.call(arguments,1)});return n.key=n.__v,n}var Pi={},Pf=/[A-Z]/g;function Xk(e,n){if(Ii.attr){var t=Ii.attr(e,n);if(typeof t=="string")return t}if(e==="ref"||e==="key")return"";if(e==="style"&&typeof n=="object"){var o="";for(var r in n){var i=n[r];if(i!=null&&i!==""){var c=r[0]=="-"?r:Pi[r]||(Pi[r]=r.replace(Pf,"-$&").toLowerCase()),a=";";typeof i!="number"||c.startsWith("--")||Of.test(c)||(a="px;"),o=o+c+":"+i+a}}return e+'="'+o+'"'}return n==null||n===!1||typeof n=="function"||typeof n=="object"?"":n===!0?e:e+'="'+Ri(n)+'"'}function Df(e){if(e==null||typeof e=="boolean"||typeof e=="function")return null;if(typeof e=="object"){if(e.constructor===void 0)return e;if(Rf(e)){for(var n=0;n<e.length;n++)e[n]=Df(e[n]);return e}}return Ri(""+e)}var Nf=R(403),Mf=R.n(Nf),Lf=R(2792),jf=R.n(Lf),Uf=R(7380),Jf=R.n(Uf),$f=R(211),qf=R.n($f),Hf=R(7031),zf=R.n(Hf),Gf=R(1684),Wf=R.n(Gf),bt=R(5974),on={};on.styleTagTransform=Wf(),on.setAttributes=qf(),on.insert=Jf().bind(null,"head"),on.domAPI=jf(),on.insertStyleElement=zf();var Zk=Mf()(bt.A,on);const Qk=bt.A&&bt.A.locals?bt.A.locals:void 0;function Kf(){this.__data__=[],this.size=0}const Yf=Kf;function Vf(e,n){return e===n||e!==e&&n!==n}const Nn=Vf;function Xf(e,n){for(var t=e.length;t--;)if(Nn(e[t][0],n))return t;return-1}const mt=Xf;var Zf=Array.prototype,Qf=Zf.splice;function eA(e){var n=this.__data__,t=mt(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():Qf.call(n,t,1),--this.size,!0}const nA=eA;function tA(e){var n=this.__data__,t=mt(n,e);return t<0?void 0:n[t][1]}const oA=tA;function rA(e){return mt(this.__data__,e)>-1}const iA=rA;function cA(e,n){var t=this.__data__,o=mt(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}const aA=cA;function rn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}rn.prototype.clear=Yf,rn.prototype.delete=nA,rn.prototype.get=oA,rn.prototype.has=iA,rn.prototype.set=aA;const yt=rn;function sA(){this.__data__=new yt,this.size=0}const lA=sA;function fA(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}const AA=fA;function uA(e){return this.__data__.get(e)}const EA=uA;function dA(e){return this.__data__.has(e)}const gA=dA;var pA=typeof global=="object"&&global&&global.Object===Object&&global;const Di=pA;var _A=typeof self=="object"&&self&&self.Object===Object&&self,hA=Di||_A||Function("return this")();const Fe=hA;var bA=Fe.Symbol;const _e=bA;var Ni=Object.prototype,mA=Ni.hasOwnProperty,yA=Ni.toString,Mn=_e?_e.toStringTag:void 0;function BA(e){var n=mA.call(e,Mn),t=e[Mn];try{e[Mn]=void 0;var o=!0}catch{}var r=yA.call(e);return o&&(n?e[Mn]=t:delete e[Mn]),r}const FA=BA;var vA=Object.prototype,CA=vA.toString;function kA(e){return CA.call(e)}const wA=kA;var SA="[object Null]",xA="[object Undefined]",Mi=_e?_e.toStringTag:void 0;function TA(e){return e==null?e===void 0?xA:SA:Mi&&Mi in Object(e)?FA(e):wA(e)}const ze=TA;function OA(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}const Ae=OA;var IA="[object AsyncFunction]",RA="[object Function]",PA="[object GeneratorFunction]",DA="[object Proxy]";function NA(e){if(!Ae(e))return!1;var n=ze(e);return n==RA||n==PA||n==IA||n==DA}const Oo=NA;var MA=Fe["__core-js_shared__"];const Io=MA;var Li=function(){var e=/[^.]+$/.exec(Io&&Io.keys&&Io.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function LA(e){return!!Li&&Li in e}const jA=LA;var UA=Function.prototype,JA=UA.toString;function $A(e){if(e!=null){try{return JA.call(e)}catch{}try{return e+""}catch{}}return""}const Ge=$A;var qA=/[\\^$.*+?()[\]{}|]/g,HA=/^\[object .+?Constructor\]$/,zA=Function.prototype,GA=Object.prototype,WA=zA.toString,KA=GA.hasOwnProperty,YA=RegExp("^"+WA.call(KA).replace(qA,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function VA(e){if(!Ae(e)||jA(e))return!1;var n=Oo(e)?YA:HA;return n.test(Ge(e))}const XA=VA;function ZA(e,n){return e?.[n]}const QA=ZA;function eu(e,n){var t=QA(e,n);return XA(t)?t:void 0}const We=eu;var nu=We(Fe,"Map");const Ln=nu;var tu=We(Object,"create");const jn=tu;function ou(){this.__data__=jn?jn(null):{},this.size=0}const ru=ou;function iu(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}const cu=iu;var au="__lodash_hash_undefined__",su=Object.prototype,lu=su.hasOwnProperty;function fu(e){var n=this.__data__;if(jn){var t=n[e];return t===au?void 0:t}return lu.call(n,e)?n[e]:void 0}const Au=fu;var uu=Object.prototype,Eu=uu.hasOwnProperty;function du(e){var n=this.__data__;return jn?n[e]!==void 0:Eu.call(n,e)}const gu=du;var pu="__lodash_hash_undefined__";function _u(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=jn&&n===void 0?pu:n,this}const hu=_u;function cn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}cn.prototype.clear=ru,cn.prototype.delete=cu,cn.prototype.get=Au,cn.prototype.has=gu,cn.prototype.set=hu;const ji=cn;function bu(){this.size=0,this.__data__={hash:new ji,map:new(Ln||yt),string:new ji}}const mu=bu;function yu(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}const Bu=yu;function Fu(e,n){var t=e.__data__;return Bu(n)?t[typeof n=="string"?"string":"hash"]:t.map}const Bt=Fu;function vu(e){var n=Bt(this,e).delete(e);return this.size-=n?1:0,n}const Cu=vu;function ku(e){return Bt(this,e).get(e)}const wu=ku;function Su(e){return Bt(this,e).has(e)}const xu=Su;function Tu(e,n){var t=Bt(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}const Ou=Tu;function an(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}an.prototype.clear=mu,an.prototype.delete=Cu,an.prototype.get=wu,an.prototype.has=xu,an.prototype.set=Ou;const Ft=an;var Iu=200;function Ru(e,n){var t=this.__data__;if(t instanceof yt){var o=t.__data__;if(!Ln||o.length<Iu-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new Ft(o)}return t.set(e,n),this.size=t.size,this}const Pu=Ru;function sn(e){var n=this.__data__=new yt(e);this.size=n.size}sn.prototype.clear=lA,sn.prototype.delete=AA,sn.prototype.get=EA,sn.prototype.has=gA,sn.prototype.set=Pu;const ln=sn;var Du="__lodash_hash_undefined__";function Nu(e){return this.__data__.set(e,Du),this}const Mu=Nu;function Lu(e){return this.__data__.has(e)}const ju=Lu;function vt(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Ft;++n<t;)this.add(e[n])}vt.prototype.add=vt.prototype.push=Mu,vt.prototype.has=ju;const Ro=vt;function Uu(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}const Ju=Uu;function $u(e,n){return e.has(n)}const Po=$u;var qu=1,Hu=2;function zu(e,n,t,o,r,i){var c=t&qu,a=e.length,s=n.length;if(a!=s&&!(c&&s>a))return!1;var l=i.get(e),A=i.get(n);if(l&&A)return l==n&&A==e;var f=-1,E=!0,u=t&Hu?new Ro:void 0;for(i.set(e,n),i.set(n,e);++f<a;){var p=e[f],v=n[f];if(o)var m=c?o(v,p,f,n,e,i):o(p,v,f,e,n,i);if(m!==void 0){if(m)continue;E=!1;break}if(u){if(!Ju(n,function(F,S){if(!Po(u,S)&&(p===F||r(p,F,t,o,i)))return u.push(S)})){E=!1;break}}else if(!(p===v||r(p,v,t,o,i))){E=!1;break}}return i.delete(e),i.delete(n),E}const Ui=zu;var Gu=Fe.Uint8Array;const Ct=Gu;function Wu(e){var n=-1,t=Array(e.size);return e.forEach(function(o,r){t[++n]=[r,o]}),t}const Ku=Wu;function Yu(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}const Do=Yu;var Vu=1,Xu=2,Zu="[object Boolean]",Qu="[object Date]",eE="[object Error]",nE="[object Map]",tE="[object Number]",oE="[object RegExp]",rE="[object Set]",iE="[object String]",cE="[object Symbol]",aE="[object ArrayBuffer]",sE="[object DataView]",Ji=_e?_e.prototype:void 0,No=Ji?Ji.valueOf:void 0;function lE(e,n,t,o,r,i,c){switch(t){case sE:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case aE:return!(e.byteLength!=n.byteLength||!i(new Ct(e),new Ct(n)));case Zu:case Qu:case tE:return Nn(+e,+n);case eE:return e.name==n.name&&e.message==n.message;case oE:case iE:return e==n+"";case nE:var a=Ku;case rE:var s=o&Vu;if(a||(a=Do),e.size!=n.size&&!s)return!1;var l=c.get(e);if(l)return l==n;o|=Xu,c.set(e,n);var A=Ui(a(e),a(n),o,r,i,c);return c.delete(e),A;case cE:if(No)return No.call(e)==No.call(n)}return!1}const fE=lE;function AE(e,n){for(var t=-1,o=n.length,r=e.length;++t<o;)e[r+t]=n[t];return e}const Mo=AE;var uE=Array.isArray;const fe=uE;function EE(e,n,t){var o=n(e);return fe(e)?o:Mo(o,t(e))}const $i=EE;function dE(e,n){for(var t=-1,o=e==null?0:e.length,r=0,i=[];++t<o;){var c=e[t];n(c,t,e)&&(i[r++]=c)}return i}const gE=dE;function pE(){return[]}const qi=pE;var _E=Object.prototype,hE=_E.propertyIsEnumerable,Hi=Object.getOwnPropertySymbols,bE=Hi?function(e){return e==null?[]:(e=Object(e),gE(Hi(e),function(n){return hE.call(e,n)}))}:qi;const Lo=bE;function mE(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}const yE=mE;function BE(e){return e!=null&&typeof e=="object"}const ve=BE;var FE="[object Arguments]";function vE(e){return ve(e)&&ze(e)==FE}const zi=vE;var Gi=Object.prototype,CE=Gi.hasOwnProperty,kE=Gi.propertyIsEnumerable,wE=zi(function(){return arguments}())?zi:function(e){return ve(e)&&CE.call(e,"callee")&&!kE.call(e,"callee")};const fn=wE;function SE(){return!1}const xE=SE;var Wi=typeof ge=="object"&&ge&&!ge.nodeType&&ge,Ki=Wi&&typeof pe=="object"&&pe&&!pe.nodeType&&pe,TE=Ki&&Ki.exports===Wi,Yi=TE?Fe.Buffer:void 0,OE=Yi?Yi.isBuffer:void 0,IE=OE||xE;const An=IE;var RE=9007199254740991,PE=/^(?:0|[1-9]\d*)$/;function DE(e,n){var t=typeof e;return n=n??RE,!!n&&(t=="number"||t!="symbol"&&PE.test(e))&&e>-1&&e%1==0&&e<n}const kt=DE;var NE=9007199254740991;function ME(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=NE}const jo=ME;var LE="[object Arguments]",jE="[object Array]",UE="[object Boolean]",JE="[object Date]",$E="[object Error]",qE="[object Function]",HE="[object Map]",zE="[object Number]",GE="[object Object]",WE="[object RegExp]",KE="[object Set]",YE="[object String]",VE="[object WeakMap]",XE="[object ArrayBuffer]",ZE="[object DataView]",QE="[object Float32Array]",ed="[object Float64Array]",nd="[object Int8Array]",td="[object Int16Array]",od="[object Int32Array]",rd="[object Uint8Array]",id="[object Uint8ClampedArray]",cd="[object Uint16Array]",ad="[object Uint32Array]",Y={};Y[QE]=Y[ed]=Y[nd]=Y[td]=Y[od]=Y[rd]=Y[id]=Y[cd]=Y[ad]=!0,Y[LE]=Y[jE]=Y[XE]=Y[UE]=Y[ZE]=Y[JE]=Y[$E]=Y[qE]=Y[HE]=Y[zE]=Y[GE]=Y[WE]=Y[KE]=Y[YE]=Y[VE]=!1;function sd(e){return ve(e)&&jo(e.length)&&!!Y[ze(e)]}const ld=sd;function fd(e){return function(n){return e(n)}}const wt=fd;var Vi=typeof ge=="object"&&ge&&!ge.nodeType&&ge,Un=Vi&&typeof pe=="object"&&pe&&!pe.nodeType&&pe,Ad=Un&&Un.exports===Vi,Uo=Ad&&Di.process,ud=function(){try{var e=Un&&Un.require&&Un.require("util").types;return e||Uo&&Uo.binding&&Uo.binding("util")}catch{}}();const un=ud;var Xi=un&&un.isTypedArray,Ed=Xi?wt(Xi):ld;const St=Ed;var dd=Object.prototype,gd=dd.hasOwnProperty;function pd(e,n){var t=fe(e),o=!t&&fn(e),r=!t&&!o&&An(e),i=!t&&!o&&!r&&St(e),c=t||o||r||i,a=c?yE(e.length,String):[],s=a.length;for(var l in e)(n||gd.call(e,l))&&!(c&&(l=="length"||r&&(l=="offset"||l=="parent")||i&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||kt(l,s)))&&a.push(l);return a}const Zi=pd;var _d=Object.prototype;function hd(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||_d;return e===t}const xt=hd;function bd(e,n){return function(t){return e(n(t))}}const Qi=bd;var md=Qi(Object.keys,Object);const yd=md;var Bd=Object.prototype,Fd=Bd.hasOwnProperty;function vd(e){if(!xt(e))return yd(e);var n=[];for(var t in Object(e))Fd.call(e,t)&&t!="constructor"&&n.push(t);return n}const ec=vd;function Cd(e){return e!=null&&jo(e.length)&&!Oo(e)}const En=Cd;function kd(e){return En(e)?Zi(e):ec(e)}const Jn=kd;function wd(e){return $i(e,Jn,Lo)}const Jo=wd;var Sd=1,xd=Object.prototype,Td=xd.hasOwnProperty;function Od(e,n,t,o,r,i){var c=t&Sd,a=Jo(e),s=a.length,l=Jo(n),A=l.length;if(s!=A&&!c)return!1;for(var f=s;f--;){var E=a[f];if(!(c?E in n:Td.call(n,E)))return!1}var u=i.get(e),p=i.get(n);if(u&&p)return u==n&&p==e;var v=!0;i.set(e,n),i.set(n,e);for(var m=c;++f<s;){E=a[f];var F=e[E],S=n[E];if(o)var D=c?o(S,F,E,n,e,i):o(F,S,E,e,n,i);if(!(D===void 0?F===S||r(F,S,t,o,i):D)){v=!1;break}m||(m=E=="constructor")}if(v&&!m){var V=e.constructor,G=n.constructor;V!=G&&"constructor"in e&&"constructor"in n&&!(typeof V=="function"&&V instanceof V&&typeof G=="function"&&G instanceof G)&&(v=!1)}return i.delete(e),i.delete(n),v}const Id=Od;var Rd=We(Fe,"DataView");const $o=Rd;var Pd=We(Fe,"Promise");const qo=Pd;var Dd=We(Fe,"Set");const dn=Dd;var Nd=We(Fe,"WeakMap");const Ho=Nd;var nc="[object Map]",Md="[object Object]",tc="[object Promise]",oc="[object Set]",rc="[object WeakMap]",ic="[object DataView]",Ld=Ge($o),jd=Ge(Ln),Ud=Ge(qo),Jd=Ge(dn),$d=Ge(Ho),Ke=ze;($o&&Ke(new $o(new ArrayBuffer(1)))!=ic||Ln&&Ke(new Ln)!=nc||qo&&Ke(qo.resolve())!=tc||dn&&Ke(new dn)!=oc||Ho&&Ke(new Ho)!=rc)&&(Ke=function(e){var n=ze(e),t=n==Md?e.constructor:void 0,o=t?Ge(t):"";if(o)switch(o){case Ld:return ic;case jd:return nc;case Ud:return tc;case Jd:return oc;case $d:return rc}return n});const gn=Ke;var qd=1,cc="[object Arguments]",ac="[object Array]",Tt="[object Object]",Hd=Object.prototype,sc=Hd.hasOwnProperty;function zd(e,n,t,o,r,i){var c=fe(e),a=fe(n),s=c?ac:gn(e),l=a?ac:gn(n);s=s==cc?Tt:s,l=l==cc?Tt:l;var A=s==Tt,f=l==Tt,E=s==l;if(E&&An(e)){if(!An(n))return!1;c=!0,A=!1}if(E&&!A)return i||(i=new ln),c||St(e)?Ui(e,n,t,o,r,i):fE(e,n,s,t,o,r,i);if(!(t&qd)){var u=A&&sc.call(e,"__wrapped__"),p=f&&sc.call(n,"__wrapped__");if(u||p){var v=u?e.value():e,m=p?n.value():n;return i||(i=new ln),r(v,m,t,o,i)}}return E?(i||(i=new ln),Id(e,n,t,o,r,i)):!1}const Gd=zd;function lc(e,n,t,o,r){return e===n?!0:e==null||n==null||!ve(e)&&!ve(n)?e!==e&&n!==n:Gd(e,n,t,o,lc,r)}const zo=lc;var Wd=1,Kd=2;function Yd(e,n,t,o){var r=t.length,i=r,c=!o;if(e==null)return!i;for(e=Object(e);r--;){var a=t[r];if(c&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++r<i;){a=t[r];var s=a[0],l=e[s],A=a[1];if(c&&a[2]){if(l===void 0&&!(s in e))return!1}else{var f=new ln;if(o)var E=o(l,A,s,e,n,f);if(!(E===void 0?zo(A,l,Wd|Kd,o,f):E))return!1}}return!0}const Vd=Yd;function Xd(e){return e===e&&!Ae(e)}const fc=Xd;function Zd(e){for(var n=Jn(e),t=n.length;t--;){var o=n[t],r=e[o];n[t]=[o,r,fc(r)]}return n}const Qd=Zd;function eg(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}const Ac=eg;function ng(e){var n=Qd(e);return n.length==1&&n[0][2]?Ac(n[0][0],n[0][1]):function(t){return t===e||Vd(t,e,n)}}const tg=ng;var og="[object Symbol]";function rg(e){return typeof e=="symbol"||ve(e)&&ze(e)==og}const Ot=rg;var ig=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,cg=/^\w*$/;function ag(e,n){if(fe(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||Ot(e)?!0:cg.test(e)||!ig.test(e)||n!=null&&e in Object(n)}const Go=ag;var sg="Expected a function";function Wo(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(sg);var t=function(){var o=arguments,r=n?n.apply(this,o):o[0],i=t.cache;if(i.has(r))return i.get(r);var c=e.apply(this,o);return t.cache=i.set(r,c)||i,c};return t.cache=new(Wo.Cache||Ft),t}Wo.Cache=Ft;const lg=Wo;var fg=500;function Ag(e){var n=lg(e,function(o){return t.size===fg&&t.clear(),o}),t=n.cache;return n}const ug=Ag;var Eg=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,dg=/\\(\\)?/g,gg=ug(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(Eg,function(t,o,r,i){n.push(r?i.replace(dg,"$1"):o||t)}),n});const pg=gg;function _g(e,n){for(var t=-1,o=e==null?0:e.length,r=Array(o);++t<o;)r[t]=n(e[t],t,e);return r}const uc=_g;var hg=1/0,Ec=_e?_e.prototype:void 0,dc=Ec?Ec.toString:void 0;function gc(e){if(typeof e=="string")return e;if(fe(e))return uc(e,gc)+"";if(Ot(e))return dc?dc.call(e):"";var n=e+"";return n=="0"&&1/e==-hg?"-0":n}const bg=gc;function mg(e){return e==null?"":bg(e)}const yg=mg;function Bg(e,n){return fe(e)?e:Go(e,n)?[e]:pg(yg(e))}const Ko=Bg;var Fg=1/0;function vg(e){if(typeof e=="string"||Ot(e))return e;var n=e+"";return n=="0"&&1/e==-Fg?"-0":n}const $n=vg;function Cg(e,n){n=Ko(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[$n(n[t++])];return t&&t==o?e:void 0}const pc=Cg;function kg(e,n,t){var o=e==null?void 0:pc(e,n);return o===void 0?t:o}const pn=kg;function wg(e,n){return e!=null&&n in Object(e)}const Sg=wg;function xg(e,n,t){n=Ko(n,e);for(var o=-1,r=n.length,i=!1;++o<r;){var c=$n(n[o]);if(!(i=e!=null&&t(e,c)))break;e=e[c]}return i||++o!=r?i:(r=e==null?0:e.length,!!r&&jo(r)&&kt(c,r)&&(fe(e)||fn(e)))}const _c=xg;function Tg(e,n){return e!=null&&_c(e,n,Sg)}const Og=Tg;var Ig=1,Rg=2;function Pg(e,n){return Go(e)&&fc(n)?Ac($n(e),n):function(t){var o=pn(t,e);return o===void 0&&o===n?Og(t,e):zo(n,o,Ig|Rg)}}const Dg=Pg;function Ng(e){return e}const Yo=Ng;function Mg(e){return function(n){return n?.[e]}}const Lg=Mg;function jg(e){return function(n){return pc(n,e)}}const Ug=jg;function Jg(e){return Go(e)?Lg($n(e)):Ug(e)}const $g=Jg;function qg(e){return typeof e=="function"?e:e==null?Yo:typeof e=="object"?fe(e)?Dg(e[0],e[1]):tg(e):$g(e)}const hc=qg;function Hg(e){return function(n,t,o){var r=Object(n);if(!En(n)){var i=hc(t,3);n=Jn(n),t=function(a){return i(r[a],a,r)}}var c=e(n,t,o);return c>-1?r[i?n[c]:c]:void 0}}const zg=Hg;function Gg(e,n,t,o){for(var r=e.length,i=t+(o?1:-1);o?i--:++i<r;)if(n(e[i],i,e))return i;return-1}const bc=Gg;var Wg=/\s/;function Kg(e){for(var n=e.length;n--&&Wg.test(e.charAt(n)););return n}const Yg=Kg;var Vg=/^\s+/;function Xg(e){return e&&e.slice(0,Yg(e)+1).replace(Vg,"")}const Zg=Xg;var mc=NaN,Qg=/^[-+]0x[0-9a-f]+$/i,ep=/^0b[01]+$/i,np=/^0o[0-7]+$/i,tp=parseInt;function op(e){if(typeof e=="number")return e;if(Ot(e))return mc;if(Ae(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Ae(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Zg(e);var t=ep.test(e);return t||np.test(e)?tp(e.slice(2),t?2:8):Qg.test(e)?mc:+e}const rp=op;var yc=1/0,ip=17976931348623157e292;function cp(e){if(!e)return e===0?e:0;if(e=rp(e),e===yc||e===-yc){var n=e<0?-1:1;return n*ip}return e===e?e:0}const ap=cp;function sp(e){var n=ap(e),t=n%1;return n===n?t?n-t:n:0}const Bc=sp;var lp=Math.max;function fp(e,n,t){var o=e==null?0:e.length;if(!o)return-1;var r=t==null?0:Bc(t);return r<0&&(r=lp(o+r,0)),bc(e,hc(n,3),r)}var Ap=zg(fp);const up=Ap;var Ep=(e=>(e.BOX="box",e.DROPBOX="dropbox",e.GDRIVE="gdrive",e.ONEDRIVE="onedrive",e))(Ep||{}),Fc=(e=>(e.APP="app",e.AUTH="auth",e.POSTS="posts",e.REPORT_ISSUE="report_issue",e))(Fc||{}),dp=(e=>(e.ABOUT_BOX="about-box",e.SETTINGS_EDITOR="settings-editor",e.BASIC_AUTH_VIEW="basic-auth-view",e.NET_LOG_WINDOW="net-log-window",e))(dp||{}),gp;function Vo(e){return pp(e,Fc.APP)}function nw(e){return Vo(e)?.id}function tw(e,n,t){return e[n]?.type===t}function ow(e){return Vo(e)?.state===gp.WEBAPP_LOADED}function pp(e,n){return up(Object.values(e),t=>t.type===n)}var vc=_e?_e.isConcatSpreadable:void 0;function _p(e){return fe(e)||fn(e)||!!(vc&&e&&e[vc])}const hp=_p;function Cc(e,n,t,o,r){var i=-1,c=e.length;for(t||(t=hp),r||(r=[]);++i<c;){var a=e[i];n>0&&t(a)?n>1?Cc(a,n-1,t,o,r):Mo(r,a):o||(r[r.length]=a)}return r}const kc=Cc;function bp(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}const mp=bp;var wc=Math.max;function yp(e,n,t){return n=wc(n===void 0?e.length-1:n,0),function(){for(var o=arguments,r=-1,i=wc(o.length-n,0),c=Array(i);++r<i;)c[r]=o[n+r];r=-1;for(var a=Array(n+1);++r<n;)a[r]=o[r];return a[n]=t(c),mp(e,this,a)}}const Bp=yp;function Fp(e){return function(){return e}}const vp=Fp;var Cp=function(){try{var e=We(Object,"defineProperty");return e({},"",{}),e}catch{}}();const It=Cp;var kp=It?function(e,n){return It(e,"toString",{configurable:!0,enumerable:!1,value:vp(n),writable:!0})}:Yo;const wp=kp;var Sp=800,xp=16,Tp=Date.now;function Op(e){var n=0,t=0;return function(){var o=Tp(),r=xp-(o-t);if(t=o,r>0){if(++n>=Sp)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}var Ip=Op(wp);const Rp=Ip;function Pp(e,n){return Rp(Bp(e,n,Yo),e+"")}const Xo=Pp;function Dp(e){return e!==e}const Np=Dp;function Mp(e,n,t){for(var o=t-1,r=e.length;++o<r;)if(e[o]===n)return o;return-1}const Lp=Mp;function jp(e,n,t){return n===n?Lp(e,n,t):bc(e,Np,t)}const Up=jp;function Jp(e,n){var t=e==null?0:e.length;return!!t&&Up(e,n,0)>-1}const Sc=Jp;function $p(e,n,t){for(var o=-1,r=e==null?0:e.length;++o<r;)if(t(n,e[o]))return!0;return!1}const xc=$p;function qp(){}const Tc=qp;var Hp=1/0,zp=dn&&1/Do(new dn([,-0]))[1]==Hp?function(e){return new dn(e)}:Tc;const Gp=zp;var Wp=200;function Kp(e,n,t){var o=-1,r=Sc,i=e.length,c=!0,a=[],s=a;if(t)c=!1,r=xc;else if(i>=Wp){var l=n?null:Gp(e);if(l)return Do(l);c=!1,r=Po,s=new Ro}else s=n?[]:a;e:for(;++o<i;){var A=e[o],f=n?n(A):A;if(A=t||A!==0?A:0,c&&f===f){for(var E=s.length;E--;)if(s[E]===f)continue e;n&&s.push(f),a.push(A)}else r(s,f,t)||(s!==a&&s.push(f),a.push(A))}return a}const Yp=Kp;function Vp(e){return ve(e)&&En(e)}const Rt=Vp;var Xp=Xo(function(e){return Yp(kc(e,1,Rt,!0))});const Zp=Xp;function Qp(e,n,t){n=="__proto__"&&It?It(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}const Zo=Qp;function e_(e,n,t){(t!==void 0&&!Nn(e[n],t)||t===void 0&&!(n in e))&&Zo(e,n,t)}const Qo=e_;function n_(e){return function(n,t,o){for(var r=-1,i=Object(n),c=o(n),a=c.length;a--;){var s=c[e?a:++r];if(t(i[s],s,i)===!1)break}return n}}var t_=n_();const o_=t_;var Oc=typeof ge=="object"&&ge&&!ge.nodeType&&ge,Ic=Oc&&typeof pe=="object"&&pe&&!pe.nodeType&&pe,r_=Ic&&Ic.exports===Oc,Rc=r_?Fe.Buffer:void 0,Pc=Rc?Rc.allocUnsafe:void 0;function i_(e,n){if(n)return e.slice();var t=e.length,o=Pc?Pc(t):new e.constructor(t);return e.copy(o),o}const Dc=i_;function c_(e){var n=new e.constructor(e.byteLength);return new Ct(n).set(new Ct(e)),n}const er=c_;function a_(e,n){var t=n?er(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}const Nc=a_;function s_(e,n){var t=-1,o=e.length;for(n||(n=Array(o));++t<o;)n[t]=e[t];return n}const Mc=s_;var Lc=Object.create,l_=function(){function e(){}return function(n){if(!Ae(n))return{};if(Lc)return Lc(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}();const f_=l_;var A_=Qi(Object.getPrototypeOf,Object);const nr=A_;function u_(e){return typeof e.constructor=="function"&&!xt(e)?f_(nr(e)):{}}const jc=u_;var E_="[object Object]",d_=Function.prototype,g_=Object.prototype,Uc=d_.toString,p_=g_.hasOwnProperty,__=Uc.call(Object);function h_(e){if(!ve(e)||ze(e)!=E_)return!1;var n=nr(e);if(n===null)return!0;var t=p_.call(n,"constructor")&&n.constructor;return typeof t=="function"&&t instanceof t&&Uc.call(t)==__}const Jc=h_;function b_(e,n){if(!(n==="constructor"&&typeof e[n]=="function")&&n!="__proto__")return e[n]}const tr=b_;var m_=Object.prototype,y_=m_.hasOwnProperty;function B_(e,n,t){var o=e[n];(!(y_.call(e,n)&&Nn(o,t))||t===void 0&&!(n in e))&&Zo(e,n,t)}const or=B_;function F_(e,n,t,o){var r=!t;t||(t={});for(var i=-1,c=n.length;++i<c;){var a=n[i],s=o?o(t[a],e[a],a,t,e):void 0;s===void 0&&(s=e[a]),r?Zo(t,a,s):or(t,a,s)}return t}const qn=F_;function v_(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}const C_=v_;var k_=Object.prototype,w_=k_.hasOwnProperty;function S_(e){if(!Ae(e))return C_(e);var n=xt(e),t=[];for(var o in e)o=="constructor"&&(n||!w_.call(e,o))||t.push(o);return t}const x_=S_;function T_(e){return En(e)?Zi(e,!0):x_(e)}const Hn=T_;function O_(e){return qn(e,Hn(e))}const I_=O_;function R_(e,n,t,o,r,i,c){var a=tr(e,t),s=tr(n,t),l=c.get(s);if(l){Qo(e,t,l);return}var A=i?i(a,s,t+"",e,n,c):void 0,f=A===void 0;if(f){var E=fe(s),u=!E&&An(s),p=!E&&!u&&St(s);A=s,E||u||p?fe(a)?A=a:Rt(a)?A=Mc(a):u?(f=!1,A=Dc(s,!0)):p?(f=!1,A=Nc(s,!0)):A=[]:Jc(s)||fn(s)?(A=a,fn(a)?A=I_(a):(!Ae(a)||Oo(a))&&(A=jc(s))):f=!1}f&&(c.set(s,A),r(A,s,o,i,c),c.delete(s)),Qo(e,t,A)}const P_=R_;function $c(e,n,t,o,r){e!==n&&o_(n,function(i,c){if(r||(r=new ln),Ae(i))P_(e,n,c,t,$c,o,r);else{var a=o?o(tr(e,c),i,c+"",e,n,r):void 0;a===void 0&&(a=i),Qo(e,c,a)}},Hn)}const D_=$c;function N_(e,n,t){if(!Ae(t))return!1;var o=typeof n;return(o=="number"?En(t)&&kt(n,t.length):o=="string"&&n in t)?Nn(t[n],e):!1}const M_=N_;function L_(e){return Xo(function(n,t){var o=-1,r=t.length,i=r>1?t[r-1]:void 0,c=r>2?t[2]:void 0;for(i=e.length>3&&typeof i=="function"?(r--,i):void 0,c&&M_(t[0],t[1],c)&&(i=r<3?void 0:i,r=1),n=Object(n);++o<r;){var a=t[o];a&&e(n,a,o,i)}return n})}var j_=L_(function(e,n,t,o){D_(e,n,t,o)});const U_=j_;var J_,qc,Hc,$_,q_,H_,z_;function zc(e){return K_(e)||W_(e)||G_()}function G_(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function W_(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function K_(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}function Gc(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function rr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Gc(t,!0).forEach(function(o){Y_(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Gc(t).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function Y_(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Wc={registry:[],bootstrapped:!1},V_=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Wc,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case qc:return rr({},n,{registry:[].concat(zc(n.registry),[t.key])});case Hc:var o=n.registry.indexOf(t.key),r=zc(n.registry);return r.splice(o,1),rr({},n,{registry:r,bootstrapped:r.length===0});default:return n}};function aw(e,n,t){if(0)var o,r;var i=t||!1,c=J_(V_,Wc,n&&n.enhancer?n.enhancer:void 0),a=function(f){c.dispatch({type:qc,key:f})},s=function(f,E,u){var p={type:Hc,payload:E,err:u,key:f};e.dispatch(p),c.dispatch(p),i&&l.getState().bootstrapped&&(i(),i=!1)},l=rr({},c,{purge:function(){var f=[];return e.dispatch({type:$_,result:function(u){f.push(u)}}),Promise.all(f)},flush:function(){var f=[];return e.dispatch({type:q_,result:function(u){f.push(u)}}),Promise.all(f)},pause:function(){e.dispatch({type:H_})},persist:function(){e.dispatch({type:z_,register:a,rehydrate:s})}});return n&&n.manualPersist||l.persist(),l}var X_,Z_,_n,Q_,ir,eh,Kc;function sw(e=Kc(),n){switch(n.type){case _n.UPDATE_SETTINGS:const t=n.meta?.layer;return zn(e,n.payload,t);case _n.ZOOM_IN:return cr(e,e.zoomLevel+1);case _n.ZOOM_OUT:return cr(e,e.zoomLevel-1);case _n.RESET_ZOOM:return cr(e,0);case _n.WHITELIST_PROTOCOL:return nh(e,n.payload);case _n.ALLOWLIST_FILE_EXT:return zn(e,{allowedFileExts:[n.payload]});case Z_:return th(e,n.payload);default:return e}}function cr(e,n){return zn(e,{zoomLevel:X_(n,-3,5)})}function nh(e,n){return Q_.includes(n.protocol)&&n.hostname?zn(e,{allowedHostnames:{[n.protocol]:[n.hostname]}}):zn(e,{whitelistedUrlSchemes:[n.protocol]})}function th(e,n){return n?Pt(e,n?.settings):e}const oh=(e,n)=>Array.isArray(e)&&Array.isArray(n)?Zp(e,n):void 0,Pt=(...e)=>U_({},...e,oh);function zn(e,n,t=ir.UserChoices){const o=Pt(Kc(),e,{[t]:t===ir.UserChoices?eh(n,Object.values(ir)):n});return Pt(o.slackDefaults,o.itDefaults,o.userChoices,o.itPolicy,{slackDefaults:o.slackDefaults,itDefaults:o.itDefaults,userChoices:o.userChoices,itPolicy:o.itPolicy})}var rh=(e,n,t)=>{if(n.length===1&&n[0]===t){let o=!1;try{const r={};e(r)===r&&(o=!0)}catch{}if(o){let r;try{throw new Error}catch(i){({stack:r}=i)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:r})}}},ih=(e,n,t)=>{const{memoize:o,memoizeOptions:r}=n,{inputSelectorResults:i,inputSelectorResultsCopy:c}=e,a=o(()=>({}),...r);if(!(a.apply(null,i)===a.apply(null,c))){let l;try{throw new Error}catch(A){({stack:l}=A)}console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:t,firstInputs:i,secondInputs:c,stack:l})}},Yc={inputStabilityCheck:"once",identityFunctionCheck:"once"},lw=e=>{Object.assign(Yc,e)},Dt=null;function Vc(e,n=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(n)}function ch(e,n=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(n)}function ah(e,n="expected all items to be functions, instead received the following types: "){if(!e.every(t=>typeof t=="function")){const t=e.map(o=>typeof o=="function"?`function ${o.name||"unnamed"}()`:typeof o).join(", ");throw new TypeError(`${n}[${t}]`)}}var Xc=e=>Array.isArray(e)?e:[e];function sh(e){const n=Array.isArray(e[0])?e[0]:e;return ah(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}function lh(e,n){const t=[],{length:o}=e;for(let r=0;r<o;r++)t.push(e[r].apply(null,n));return t}var fw=(e,n)=>{const{identityFunctionCheck:t,inputStabilityCheck:o}={...Yc,...n};return{identityFunctionCheck:{shouldRun:t==="always"||t==="once"&&e,run:rh},inputStabilityCheck:{shouldRun:o==="always"||o==="once"&&e,run:ih}}},Zc=0,Gn=null,ar=class{revision=Zc;_value;_lastValue;_isEqual=sr;constructor(e,n=sr){this._value=this._lastValue=e,this._isEqual=n}get value(){return Gn?.add(this),this._value}set value(e){this.value!==e&&(this._value=e,this.revision=++Zc)}};function sr(e,n){return e===n}var fh=class{_cachedValue;_cachedRevision=-1;_deps=[];hits=0;fn;constructor(e){this.fn=e}clear(){this._cachedValue=void 0,this._cachedRevision=-1,this._deps=[],this.hits=0}get value(){if(this.revision>this._cachedRevision){const{fn:e}=this,n=new Set,t=Gn;Gn=n,this._cachedValue=e(),Gn=t,this.hits++,this._deps=Array.from(n),this._cachedRevision=this.revision}return Gn?.add(this),this._cachedValue}get revision(){return Math.max(...this._deps.map(e=>e.revision),0)}};function lr(e){return e instanceof ar||console.warn("Not a valid cell! ",e),e.value}function Ah(e,n){if(!(e instanceof ar))throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");e.value=e._lastValue=n}function uh(e,n=sr){return new ar(e,n)}function Eh(e){return Vc(e,"the first parameter to `createCache` must be a function"),new fh(e)}var dh=(e,n)=>!1;function Nt(){return uh(null,dh)}function Mt(e,n){Ah(e,n)}var Qc=e=>{let n=e.collectionTag;n===null&&(n=e.collectionTag=Nt()),lr(n)},Lt=e=>{const n=e.collectionTag;n!==null&&Mt(n,null)},Aw=Symbol(),ea=0,gh=Object.getPrototypeOf({}),ph=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy(this,Wn);tag=Nt();tags={};children={};collectionTag=null;id=ea++},Wn={get(e,n){function t(){const{value:r}=e,i=Reflect.get(r,n);if(typeof n=="symbol"||n in gh)return i;if(typeof i=="object"&&i!==null){let c=e.children[n];return c===void 0&&(c=e.children[n]=na(i)),c.tag&&lr(c.tag),c.proxy}else{let c=e.tags[n];return c===void 0&&(c=e.tags[n]=Nt(),c.value=i),lr(c),i}}return t()},ownKeys(e){return Qc(e),Reflect.ownKeys(e.value)},getOwnPropertyDescriptor(e,n){return Reflect.getOwnPropertyDescriptor(e.value,n)},has(e,n){return Reflect.has(e.value,n)}},_h=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy([this],hh);tag=Nt();tags={};children={};collectionTag=null;id=ea++},hh={get([e],n){return n==="length"&&Qc(e),Wn.get(e,n)},ownKeys([e]){return Wn.ownKeys(e)},getOwnPropertyDescriptor([e],n){return Wn.getOwnPropertyDescriptor(e,n)},has([e],n){return Wn.has(e,n)}};function na(e){return Array.isArray(e)?new _h(e):new ph(e)}function ta(e,n){const{value:t,tags:o,children:r}=e;if(e.value=n,Array.isArray(t)&&Array.isArray(n)&&t.length!==n.length)Lt(e);else if(t!==n){let i=0,c=0,a=!1;for(const l in t)i++;for(const l in n)if(c++,!(l in t)){a=!0;break}(a||i!==c)&&Lt(e)}for(const i in o){const c=t[i],a=n[i];c!==a&&(Lt(e),Mt(o[i],a)),typeof a=="object"&&a!==null&&delete o[i]}for(const i in r){const c=r[i],a=n[i];c.value!==a&&(typeof a=="object"&&a!==null?ta(c,a):(oa(c),delete r[i]))}}function oa(e){e.tag&&Mt(e.tag,null),Lt(e);for(const n in e.tags)Mt(e.tags[n],null);for(const n in e.children)oa(e.children[n])}function bh(e){let n;return{get(t){return n&&e(n.key,t)?n.value:Dt},put(t,o){n={key:t,value:o}},getEntries(){return n?[n]:[]},clear(){n=void 0}}}function mh(e,n){let t=[];function o(a){const s=t.findIndex(l=>n(a,l.key));if(s>-1){const l=t[s];return s>0&&(t.splice(s,1),t.unshift(l)),l.value}return Dt}function r(a,s){o(a)===Dt&&(t.unshift({key:a,value:s}),t.length>e&&t.pop())}function i(){return t}function c(){t=[]}return{get:o,put:r,getEntries:i,clear:c}}var ra=(e,n)=>e===n;function ia(e){return function(t,o){if(t===null||o===null||t.length!==o.length)return!1;const{length:r}=t;for(let i=0;i<r;i++)if(!e(t[i],o[i]))return!1;return!0}}function uw(e,n){const t=typeof n=="object"?n:{equalityCheck:n},{equalityCheck:o=ra,maxSize:r=1,resultEqualityCheck:i}=t,c=ia(o);let a=0;const s=r<=1?bh(c):mh(r,c);function l(){let A=s.get(arguments);if(A===Dt){if(A=e.apply(null,arguments),a++,i){const E=s.getEntries().find(u=>i(u.value,A));E&&(A=E.value,a!==0&&a--)}s.put(arguments,A)}return A}return l.clearCache=()=>{s.clear(),l.resetResultsCount()},l.resultsCount=()=>a,l.resetResultsCount=()=>{a=0},l}function Ew(e){const n=na([]);let t=null;const o=ia(ra),r=Eh(()=>e.apply(null,n.proxy));function i(){return o(t,arguments)||(ta(n,arguments),t=arguments),r.value}return i.clearCache=()=>r.clear(),i}var yh=class{constructor(e){this.value=e}deref(){return this.value}},Bh=typeof WeakRef<"u"?WeakRef:yh,Fh=0,ca=1;function jt(){return{s:Fh,v:void 0,o:null,p:null}}function aa(e,n={}){let t=jt();const{resultEqualityCheck:o}=n;let r,i=0;function c(){let a=t;const{length:s}=arguments;for(let f=0,E=s;f<E;f++){const u=arguments[f];if(typeof u=="function"||typeof u=="object"&&u!==null){let p=a.o;p===null&&(a.o=p=new WeakMap);const v=p.get(u);v===void 0?(a=jt(),p.set(u,a)):a=v}else{let p=a.p;p===null&&(a.p=p=new Map);const v=p.get(u);v===void 0?(a=jt(),p.set(u,a)):a=v}}const l=a;let A;if(a.s===ca)A=a.v;else if(A=e.apply(null,arguments),i++,o){const f=r?.deref?.()??r;f!=null&&o(f,A)&&(A=f,i!==0&&i--),r=typeof A=="object"&&A!==null||typeof A=="function"?new Bh(A):A}return l.s=ca,l.v=A,A}return c.clearCache=()=>{t=jt(),c.resetResultsCount()},c.resultsCount=()=>i,c.resetResultsCount=()=>{i=0},c}function vh(e,...n){const t=typeof e=="function"?{memoize:e,memoizeOptions:n}:e,o=(...r)=>{let i=0,c=0,a,s={},l=r.pop();typeof l=="object"&&(s=l,l=r.pop()),Vc(l,`createSelector expects an output function after the inputs, but received: [${typeof l}]`);const A={...t,...s},{memoize:f,memoizeOptions:E=[],argsMemoize:u=aa,argsMemoizeOptions:p=[],devModeChecks:v={}}=A,m=Xc(E),F=Xc(p),S=sh(r),D=f(function(){return i++,l.apply(null,arguments)},...m);let V=!0;const G=u(function(){c++;const X=lh(S,arguments);return a=D.apply(null,X),a},...F);return Object.assign(G,{resultFunc:l,memoizedResultFunc:D,dependencies:S,dependencyRecomputations:()=>c,resetDependencyRecomputations:()=>{c=0},lastResult:()=>a,recomputations:()=>i,resetRecomputations:()=>{i=0},memoize:f,argsMemoize:u})};return Object.assign(o,{withTypes:()=>o}),o}var fr=vh(aa),Ch=Object.assign((e,n=fr)=>{ch(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const t=Object.keys(e),o=t.map(i=>e[i]);return n(o,(...i)=>i.reduce((c,a,s)=>(c[t[s]]=a,c),{}))},{withTypes:()=>Ch}),kh=Object.prototype,wh=kh.hasOwnProperty;function Sh(e,n){return e!=null&&wh.call(e,n)}const xh=Sh;function Th(e,n){return e!=null&&_c(e,n,xh)}const Oh=Th;var Ih=(e=>(e.ReactDevTools="react-devtools",e.OPFSExplorer="opfs-explorer",e.EpicTrace="epic-trace",e.WindowChrome="window-chrome",e.WebappExtendedLogs="webapp-extended-logs",e))(Ih||{}),ue=(e=>(e.ITPolicy="itPolicy",e.UserChoices="userChoices",e.ITDefaults="itDefaults",e.SlackDefaults="slackDefaults",e))(ue||{}),sa,Rh,Ph,Dh;function Nh(e,n){for(const t of Object.values(ue))if(Oh(e[t],n))return t;return null}const Mh=fr(e=>e,({zoomLevel:e,notificationZoomLevel:n})=>n&&n!==null?n:e),dw=fr(Mh,e=>1+e*.2),gw=({settings:e})=>e.releaseChannelOverride||Rh.PROD,pw=({environment:e,settings:n})=>{const t=process.env.SLACK_DEVELOPER_MENU;if(t==="false")return!1;const{isDevMode:o,devEnv:r,openDevToolsOnStart:i}=e,{devToolsEnabled:c}=n;return o||!!r||i||!!t||c},_w=({settings:e})=>{const{devToolsEnabled:n}=e;return n},Lh=e=>!0,hw=({app:e,environment:n,settings:t})=>{const{notificationMethod:o}=t,r=Dh(Ph.FORCE_NATIVE_NOTIFICATIONS,e),i=o==="html",c=Lh(n);return sa.debug("isShowingHtmlNotifications",{notificationMethod:o,enforceNativeNotifications:r,isPreferred:i,canShow:c}),r?(sa.info("isShowingHtmlNotifications: notification method is HTML but we force native notification via experiment."),!1):!!(i&&c)},bw=e=>{const n=e.notificationTimeout;return Number.isSafeInteger(n)&&n===Number.MAX_SAFE_INTEGER};var Kn=(e=>(e.GENERAL="desktop_general",e.BROWSER="desktop_browser",e.RENDERER="desktop_renderer",e.MESSAGEBOX="desktop_messagebox",e.MENU="desktop_menu",e.EXTERNAL="desktop_external",e))(Kn||{});const la={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},fa=(e,n)=>(...t)=>{try{const o=t.map(r=>typeof r=="object"?JSON.stringify(r,null,2):r).join(" ");n?console[e](`[${n}]	${o}`):console[e](o)}catch{}},Aa=Object.entries(la).reduce((e,[n,t])=>(e[n]=fa(t),e),{}),mw=(e,n)=>Object.entries(la).reduce((t,[o,r])=>(t[o]=fa(r,e),t),{});function jh(e,n){for(var t=-1,o=e==null?0:e.length;++t<o&&n(e[t],t,e)!==!1;);return e}const Uh=jh;function Jh(e,n){return e&&qn(n,Jn(n),e)}const $h=Jh;function qh(e,n){return e&&qn(n,Hn(n),e)}const Hh=qh;function zh(e,n){return qn(e,Lo(e),n)}const Gh=zh;var Wh=Object.getOwnPropertySymbols,Kh=Wh?function(e){for(var n=[];e;)Mo(n,Lo(e)),e=nr(e);return n}:qi;const ua=Kh;function Yh(e,n){return qn(e,ua(e),n)}const Vh=Yh;function Xh(e){return $i(e,Hn,ua)}const Zh=Xh;var Qh=Object.prototype,eb=Qh.hasOwnProperty;function nb(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&eb.call(e,"index")&&(t.index=e.index,t.input=e.input),t}const tb=nb;function ob(e,n){var t=n?er(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}const rb=ob;var ib=/\w*$/;function cb(e){var n=new e.constructor(e.source,ib.exec(e));return n.lastIndex=e.lastIndex,n}const ab=cb;var Ea=_e?_e.prototype:void 0,da=Ea?Ea.valueOf:void 0;function sb(e){return da?Object(da.call(e)):{}}const lb=sb;var fb="[object Boolean]",Ab="[object Date]",ub="[object Map]",Eb="[object Number]",db="[object RegExp]",gb="[object Set]",pb="[object String]",_b="[object Symbol]",hb="[object ArrayBuffer]",bb="[object DataView]",mb="[object Float32Array]",yb="[object Float64Array]",Bb="[object Int8Array]",Fb="[object Int16Array]",vb="[object Int32Array]",Cb="[object Uint8Array]",kb="[object Uint8ClampedArray]",wb="[object Uint16Array]",Sb="[object Uint32Array]";function xb(e,n,t){var o=e.constructor;switch(n){case hb:return er(e);case fb:case Ab:return new o(+e);case bb:return rb(e,t);case mb:case yb:case Bb:case Fb:case vb:case Cb:case kb:case wb:case Sb:return Nc(e,t);case ub:return new o;case Eb:case pb:return new o(e);case db:return ab(e);case gb:return new o;case _b:return lb(e)}}const Tb=xb;var Ob="[object Map]";function Ib(e){return ve(e)&&gn(e)==Ob}const Rb=Ib;var ga=un&&un.isMap,Pb=ga?wt(ga):Rb;const Db=Pb;var Nb="[object Set]";function Mb(e){return ve(e)&&gn(e)==Nb}const Lb=Mb;var pa=un&&un.isSet,jb=pa?wt(pa):Lb;const Ub=jb;var Jb=1,$b=2,qb=4,_a="[object Arguments]",Hb="[object Array]",zb="[object Boolean]",Gb="[object Date]",Wb="[object Error]",ha="[object Function]",Kb="[object GeneratorFunction]",Yb="[object Map]",Vb="[object Number]",ba="[object Object]",Xb="[object RegExp]",Zb="[object Set]",Qb="[object String]",em="[object Symbol]",nm="[object WeakMap]",tm="[object ArrayBuffer]",om="[object DataView]",rm="[object Float32Array]",im="[object Float64Array]",cm="[object Int8Array]",am="[object Int16Array]",sm="[object Int32Array]",lm="[object Uint8Array]",fm="[object Uint8ClampedArray]",Am="[object Uint16Array]",um="[object Uint32Array]",z={};z[_a]=z[Hb]=z[tm]=z[om]=z[zb]=z[Gb]=z[rm]=z[im]=z[cm]=z[am]=z[sm]=z[Yb]=z[Vb]=z[ba]=z[Xb]=z[Zb]=z[Qb]=z[em]=z[lm]=z[fm]=z[Am]=z[um]=!0,z[Wb]=z[ha]=z[nm]=!1;function Ut(e,n,t,o,r,i){var c,a=n&Jb,s=n&$b,l=n&qb;if(t&&(c=r?t(e,o,r,i):t(e)),c!==void 0)return c;if(!Ae(e))return e;var A=fe(e);if(A){if(c=tb(e),!a)return Mc(e,c)}else{var f=gn(e),E=f==ha||f==Kb;if(An(e))return Dc(e,a);if(f==ba||f==_a||E&&!r){if(c=s||E?{}:jc(e),!a)return s?Vh(e,Hh(c,e)):Gh(e,$h(c,e))}else{if(!z[f])return r?e:{};c=Tb(e,f,a)}}i||(i=new ln);var u=i.get(e);if(u)return u;i.set(e,c),Ub(e)?e.forEach(function(m){c.add(Ut(m,n,t,m,e,i))}):Db(e)&&e.forEach(function(m,F){c.set(F,Ut(m,n,t,F,e,i))});var p=l?s?Zh:Jo:s?Hn:Jn,v=A?void 0:p(e);return Uh(v||e,function(m,F){v&&(F=m,m=e[F]),or(c,F,Ut(m,n,t,F,e,i))}),c}const Em=Ut;var dm=1,gm=4;function pm(e){return Em(e,dm|gm)}const ma=pm;var _m=200;function hm(e,n,t,o){var r=-1,i=Sc,c=!0,a=e.length,s=[],l=n.length;if(!a)return s;t&&(n=uc(n,wt(t))),o?(i=xc,c=!1):n.length>=_m&&(i=Po,c=!1,n=new Ro(n));e:for(;++r<a;){var A=e[r],f=t==null?A:t(A);if(A=o||A!==0?A:0,c&&f===f){for(var E=l;E--;)if(n[E]===f)continue e;s.push(A)}else i(n,f,o)||s.push(A)}return s}const bm=hm;var mm=Xo(function(e,n){return Rt(e)?bm(e,kc(n,1,Rt,!0)):[]});const Ar=mm;function ym(e,n){return zo(e,n)}const ya=ym;var Bm="[object Map]",Fm="[object Set]",vm=Object.prototype,Cm=vm.hasOwnProperty;function km(e){if(e==null)return!0;if(En(e)&&(fe(e)||typeof e=="string"||typeof e.splice=="function"||An(e)||St(e)||fn(e)))return!e.length;var n=gn(e);if(n==Bm||n==Fm)return!e.size;if(xt(e))return!ec(e).length;for(var t in e)if(Cm.call(e,t))return!1;return!0}const Ba=km;function wm(e,n,t,o){if(!Ae(e))return e;n=Ko(n,e);for(var r=-1,i=n.length,c=i-1,a=e;a!=null&&++r<i;){var s=$n(n[r]),l=t;if(s==="__proto__"||s==="constructor"||s==="prototype")return e;if(r!=c){var A=a[s];l=o?o(A,s,a):void 0,l===void 0&&(l=Ae(A)?A:kt(n[r+1])?[]:{})}or(a,s,l),a=a[s]}return e}const Sm=wm;function xm(e,n,t){return e==null?e:Sm(e,n,t)}const Tm=xm;var xe,$,ur,Fa,hn=0,va=[],Jt=[],Ca=g.__b,ka=g.__r,wa=g.diffed,Sa=g.__c,xa=g.unmount;function Ye(e,n){g.__h&&g.__h($,e,hn||n),hn=0;var t=$.__H||($.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Jt}),t.__[e]}function Yn(e){return hn=1,Er(Ia,e)}function Er(e,n,t){var o=Ye(xe++,2);if(o.t=e,!o.__c&&(o.__=[t?t(n):Ia(void 0,n),function(a){var s=o.__N?o.__N[0]:o.__[0],l=o.t(s,a);s!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=$,!$.u)){var r=function(a,s,l){if(!o.__c.__H)return!0;var A=o.__c.__H.__.filter(function(E){return E.__c});if(A.every(function(E){return!E.__N}))return!i||i.call(this,a,s,l);var f=!1;return A.forEach(function(E){if(E.__N){var u=E.__[0];E.__=E.__N,E.__N=void 0,u!==E.__[0]&&(f=!0)}}),!(!f&&o.__c.props===a)&&(!i||i.call(this,a,s,l))};$.u=!0;var i=$.shouldComponentUpdate,c=$.componentWillUpdate;$.componentWillUpdate=function(a,s,l){if(this.__e){var A=i;i=void 0,r(a,s,l),i=A}c&&c.call(this,a,s,l)},$.shouldComponentUpdate=r}return o.__N||o.__}function dr(e,n){var t=Ye(xe++,3);!g.__s&&_r(t.__H,n)&&(t.__=e,t.i=n,$.__H.__h.push(t))}function Vn(e,n){var t=Ye(xe++,4);!g.__s&&_r(t.__H,n)&&(t.__=e,t.i=n,$.__h.push(t))}function Xn(e){return hn=5,bn(function(){return{current:e}},[])}function Om(e,n,t){hn=6,Vn(function(){return typeof e=="function"?(e(n()),function(){return e(null)}):e?(e.current=n(),function(){return e.current=null}):void 0},t==null?t:t.concat(e))}function bn(e,n){var t=Ye(xe++,7);return _r(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function Im(e,n){return hn=8,bn(function(){return e},n)}function gr(e){var n=$.context[e.__c],t=Ye(xe++,9);return t.c=e,n?(t.__==null&&(t.__=!0,n.sub($)),n.props.value):e.__}function Ta(e,n){g.useDebugValue&&g.useDebugValue(n?n(e):e)}function yw(e){var n=Ye(xe++,10),t=Yn();return n.__=e,$.componentDidCatch||($.componentDidCatch=function(o,r){n.__&&n.__(o,r),t[1](o)}),[t[0],function(){t[1](void 0)}]}function Rm(){var e=Ye(xe++,11);if(!e.__){for(var n=$.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;var t=n.__m||(n.__m=[0,0]);e.__="P"+t[0]+"-"+t[1]++}return e.__}function Pm(){for(var e;e=va.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach($t),e.__H.__h.forEach(pr),e.__H.__h=[]}catch(n){e.__H.__h=[],g.__e(n,e.__v)}}g.__b=function(e){$=null,Ca&&Ca(e)},g.__r=function(e){ka&&ka(e),xe=0;var n=($=e.__c).__H;n&&(ur===$?(n.__h=[],$.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Jt,t.__N=t.i=void 0})):(n.__h.forEach($t),n.__h.forEach(pr),n.__h=[],xe=0)),ur=$},g.diffed=function(e){wa&&wa(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(va.push(n)!==1&&Fa===g.requestAnimationFrame||((Fa=g.requestAnimationFrame)||Dm)(Pm)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Jt&&(t.__=t.__V),t.i=void 0,t.__V=Jt})),ur=$=null},g.__c=function(e,n){n.some(function(t){try{t.__h.forEach($t),t.__h=t.__h.filter(function(o){return!o.__||pr(o)})}catch(o){n.some(function(r){r.__h&&(r.__h=[])}),n=[],g.__e(o,t.__v)}}),Sa&&Sa(e,n)},g.unmount=function(e){xa&&xa(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{$t(o)}catch(r){n=r}}),t.__H=void 0,n&&g.__e(n,t.__v))};var Oa=typeof requestAnimationFrame=="function";function Dm(e){var n,t=function(){clearTimeout(o),Oa&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);Oa&&(n=requestAnimationFrame(t))}function $t(e){var n=$,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),$=n}function pr(e){var n=$;e.__c=e.__(),$=n}function _r(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function Ia(e,n){return typeof n=="function"?n(e):n}function Ra(e,n){for(var t in n)e[t]=n[t];return e}function hr(e,n){for(var t in e)if(t!=="__source"&&!(t in n))return!0;for(var o in n)if(o!=="__source"&&e[o]!==n[o])return!0;return!1}function br(e){this.props=e}function Nm(e,n){function t(r){var i=this.props.ref,c=i==r.ref;return!c&&i&&(i.call?i(null):i.current=null),n?!n(this.props,r)||!c:hr(this.props,r)}function o(r){return this.shouldComponentUpdate=t,ne(e,r)}return o.displayName="Memo("+(e.displayName||e.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(br.prototype=new h).isPureReactComponent=!0,br.prototype.shouldComponentUpdate=function(e,n){return hr(this.props,e)||hr(this.state,n)};var Pa=g.__b;g.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Pa&&Pa(e)};var Mm=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Lm(e){function n(t){var o=Ra({},t);return delete o.ref,e(o,t.ref||null)}return n.$$typeof=Mm,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var Da=function(e,n){return e==null?null:Be(Be(e).map(n))},jm={map:Da,forEach:Da,count:function(e){return e?Be(e).length:0},only:function(e){var n=Be(e);if(n.length!==1)throw"Children.only";return n[0]},toArray:Be},Um=g.__e;g.__e=function(e,n,t,o){if(e.then){for(var r,i=n;i=i.__;)if((r=i.__c)&&r.__c)return n.__e==null&&(n.__e=t.__e,n.__k=t.__k),r.__c(e,n)}Um(e,n,t,o)};var Na=g.unmount;function Ma(e,n,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Ra({},e)).__c!=null&&(e.__c.__P===t&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return Ma(o,n,t)})),e}function La(e,n,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return La(o,n,t)}),e.__c&&e.__c.__P===n&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function qt(){this.__u=0,this.t=null,this.__b=null}function ja(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function Jm(e){var n,t,o;function r(i){if(n||(n=e()).then(function(c){t=c.default||c},function(c){o=c}),o)throw o;if(!t)throw n;return ne(t,i)}return r.displayName="Lazy",r.__f=!0,r}function Zn(){this.u=null,this.o=null}g.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&32&e.__u&&(e.type=null),Na&&Na(e)},(qt.prototype=new h).__c=function(e,n){var t=n.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var r=ja(o.__v),i=!1,c=function(){i||(i=!0,t.__R=null,r?r(a):a())};t.__R=c;var a=function(){if(!--o.__u){if(o.state.__a){var s=o.state.__a;o.__v.__k[0]=La(s,s.__c.__P,s.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.t.pop();)l.forceUpdate()}};o.__u++||32&n.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(c,c)},qt.prototype.componentWillUnmount=function(){this.t=[]},qt.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=Ma(this.__b,t,o.__O=o.__P)}this.__b=null}var r=n.__a&&ne(N,null,e.fallback);return r&&(r.__u&=-33),[ne(N,null,n.__a?null:e.children),r]};var Ua=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function $m(e){return this.getChildContext=function(){return e.context},e.children}function qm(e){var n=this,t=e.i;n.componentWillUnmount=function(){tn(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(o){this.childNodes.push(o),n.i.appendChild(o)},insertBefore:function(o,r){this.childNodes.push(o),n.i.appendChild(o)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),n.i.removeChild(o)}}),tn(ne($m,{context:n.context},e.__v),n.l)}function Hm(e,n){var t=ne(qm,{__v:e,i:n});return t.containerInfo=n,t}(Zn.prototype=new h).__a=function(e){var n=this,t=ja(n.__v),o=n.o.get(e);return o[0]++,function(r){var i=function(){n.props.revealOrder?(o.push(r),Ua(n,e,o)):r()};t?t(i):i()}},Zn.prototype.render=function(e){this.u=null,this.o=new Map;var n=Be(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},Zn.prototype.componentDidUpdate=Zn.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(n,t){Ua(e,t,n)})};var Ja=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,zm=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Gm=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Wm=/[A-Z0-9]/g,Km=typeof document<"u",Ym=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Vm(e,n,t){return n.__k==null&&(n.textContent=""),tn(e,n),typeof t=="function"&&t(),e?e.__c:null}function Xm(e,n,t){return To(e,n),typeof t=="function"&&t(),e?e.__c:null}h.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(h.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var $a=g.event;function Zm(){}function Qm(){return this.cancelBubble}function ey(){return this.defaultPrevented}g.event=function(e){return $a&&(e=$a(e)),e.persist=Zm,e.isPropagationStopped=Qm,e.isDefaultPrevented=ey,e.nativeEvent=e};var mr,ny={enumerable:!1,configurable:!0,get:function(){return this.class}},qa=g.vnode;g.vnode=function(e){typeof e.type=="string"&&function(n){var t=n.props,o=n.type,r={};for(var i in t){var c=t[i];if(!(i==="value"&&"defaultValue"in t&&c==null||Km&&i==="children"&&o==="noscript"||i==="class"||i==="className")){var a=i.toLowerCase();i==="defaultValue"&&"value"in t&&t.value==null?i="value":i==="download"&&c===!0?c="":a==="ondoubleclick"?i="ondblclick":a!=="onchange"||o!=="input"&&o!=="textarea"||Ym(t.type)?a==="onfocus"?i="onfocusin":a==="onblur"?i="onfocusout":Gm.test(i)?i=a:o.indexOf("-")===-1&&zm.test(i)?i=i.replace(Wm,"-$&").toLowerCase():c===null&&(c=void 0):a=i="oninput",a==="oninput"&&r[i=a]&&(i="oninputCapture"),r[i]=c}}o=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=Be(t.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),o=="select"&&r.defaultValue!=null&&(r.value=Be(t.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",ny)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),n.props=r}(e),e.$$typeof=Ja,qa&&qa(e)};var Ha=g.__r;g.__r=function(e){Ha&&Ha(e),mr=e.__c};var za=g.diffed;g.diffed=function(e){za&&za(e);var n=e.props,t=e.__e;t!=null&&e.type==="textarea"&&"value"in n&&n.value!==t.value&&(t.value=n.value==null?"":n.value),mr=null};var ty={ReactCurrentDispatcher:{current:{readContext:function(e){return mr.__n[e.__c].props.value}}}},Bw="17.0.2";function oy(e){return ne.bind(null,e)}function Ht(e){return!!e&&e.$$typeof===Ja}function ry(e){return Ht(e)&&e.type===N}function iy(e){return Ht(e)?Ti.apply(null,arguments):e}function Ga(e){return!!e.__k&&(tn(null,e),!0)}function cy(e){return e&&(e.base||e.nodeType===1&&e)||null}var Wa=function(e,n){return e(n)},ay=function(e,n){return e(n)},sy=N;function Ka(e){e()}function ly(e){return e}function fy(){return[!1,Ka]}var Ay=Vn,uy=Ht;function Ey(e,n){var t=n(),o=Yn({h:{__:t,v:n}}),r=o[0].h,i=o[1];return Vn(function(){r.__=t,r.v=n,yr(r)&&i({h:r})},[e,t,n]),dr(function(){return yr(r)&&i({h:r}),e(function(){yr(r)&&i({h:r})})},[e]),t}function yr(e){var n,t,o=e.v,r=e.__;try{var i=o();return!((n=r)===(t=i)&&(n!==0||1/n==1/t)||n!=n&&t!=t)}catch{return!0}}var Ya={useState:Yn,useId:Rm,useReducer:Er,useEffect:dr,useLayoutEffect:Vn,useInsertionEffect:Ay,useTransition:fy,useDeferredValue:ly,useSyncExternalStore:Ey,startTransition:Ka,useRef:Xn,useImperativeHandle:Om,useMemo:bn,useCallback:Im,useContext:gr,useDebugValue:Ta,version:"17.0.2",Children:jm,render:Vm,hydrate:Xm,unmountComponentAtNode:Ga,createPortal:Hm,createElement:ne,createContext:Oi,createFactory:oy,cloneElement:iy,createRef:K,Fragment:N,isValidElement:Ht,isElement:uy,isFragment:ry,findDOMNode:cy,Component:h,PureComponent:br,memo:Nm,forwardRef:Lm,flushSync:ay,unstable_batchedUpdates:Wa,StrictMode:sy,Suspense:qt,SuspenseList:Zn,lazy:Jm,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ty},Fw=R(4031),zt=Ya.createContext(null);const vw=null;function dy(e){e()}var Va=dy,gy=function(n){return Va=n},py=function(){return Va},Xa={notify:function(){}};function _y(){var e=py(),n=null,t=null;return{clear:function(){n=null,t=null},notify:function(){e(function(){for(var r=n;r;)r.callback(),r=r.next})},get:function(){for(var r=[],i=n;i;)r.push(i),i=i.next;return r},subscribe:function(r){var i=!0,c=t={callback:r,next:null,prev:t};return c.prev?c.prev.next=c:n=c,function(){!i||n===null||(i=!1,c.next?c.next.prev=c.prev:t=c.prev,c.prev?c.prev.next=c.next:n=c.next)}}}}var Za=function(){function e(t,o){this.store=t,this.parentSub=o,this.unsubscribe=null,this.listeners=Xa,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(o){return this.trySubscribe(),this.listeners.subscribe(o)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return!!this.unsubscribe},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=_y())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=Xa)},e}(),Br=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?Vn:dr;function hy(e){var n=e.store,t=e.context,o=e.children,r=bn(function(){var a=new Za(n);return a.onStateChange=a.notifyNestedSubs,{store:n,subscription:a}},[n]),i=bn(function(){return n.getState()},[n]);Br(function(){var a=r.subscription;return a.trySubscribe(),i!==n.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[r,i]);var c=t||zt;return Ya.createElement(c.Provider,{value:r},o)}const by=hy;var Cw=R(3869),kw=R(5376),Gt,Qa,es,Me,mn,my,yy,Wt,By,Fy,vy,Cy,ky=null,wy=null,ww=function(n){try{return JSON.stringify(n)}catch{return String(n)}};function Sy(e,n){var t=e[1];return[n.payload,t+1]}function ns(e,n,t){vy(function(){return e.apply(void 0,n)},t)}function xy(e,n,t,o,r,i,c){e.current=o,n.current=r,t.current=!1,i.current&&(i.current=null,c())}function Ty(e,n,t,o,r,i,c,a,s,l){if(e){var A=!1,f=null,E=function(){if(!A){var v=n.getState(),m,F;try{m=o(v,r.current)}catch(S){F=S,f=S}F||(f=null),m===i.current?c.current||s():(i.current=m,a.current=m,c.current=!0,l({type:"STORE_UPDATED",payload:{error:F}}))}};t.onStateChange=E,t.trySubscribe(),E();var u=function(){if(A=!0,t.tryUnsubscribe(),t.onStateChange=null,f)throw f};return u}}var Oy=function(){return[null,0]};function Sw(e,n){n===void 0&&(n={});var t=n,o=t.getDisplayName,r=o===void 0?function(re){return"ConnectAdvanced("+re+")"}:o,i=t.methodName,c=i===void 0?"connectAdvanced":i,a=t.renderCountProp,s=a===void 0?void 0:a,l=t.shouldHandleStateChanges,A=l===void 0?!0:l,f=t.storeKey,E=f===void 0?"store":f,u=t.withRef,p=u===void 0?!1:u,v=t.forwardRef,m=v===void 0?!1:v,F=t.context,S=F===void 0?Cy:F,D=Qa(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(0)var V;var G=S;return function(X){var ce=X.displayName||X.name||"Component",Q=r(ce),Ne=Gt({},D,{getDisplayName:r,methodName:c,renderCountProp:s,shouldHandleStateChanges:A,storeKey:E,displayName:Q,wrappedComponentName:ce,WrappedComponent:X}),Bo=D.pure;function _i(le){return e(le.dispatch,Ne)}var hi=Bo?Me:function(le){return le()};function ut(le){var Et=Me(function(){var pt=le.reactReduxForwardedRef,vi=Qa(le,["reactReduxForwardedRef"]);return[le.context,pt,vi]},[le]),nn=Et[0],_f=Et[1],dt=Et[2],bi=Me(function(){return nn&&nn.Consumer&&By(mn.createElement(nn.Consumer,null))?nn:G},[nn,G]),Je=my(bi),gt=!!le.store&&!!le.store.getState&&!!le.store.dispatch,v1=!!Je&&!!Je.store,$e=gt?le.store:Je.store,mi=Me(function(){return _i($e)},[$e]),hf=Me(function(){if(!A)return wy;var pt=new Fy($e,gt?null:Je.subscription),vi=pt.notifyNestedSubs.bind(pt);return[pt,vi]},[$e,gt,Je]),vo=hf[0],bf=hf[1],mf=Me(function(){return gt?Je:Gt({},Je,{subscription:vo})},[gt,Je,vo]),yf=yy(Sy,ky,Oy),qk=yf[0],Co=qk[0],Hk=yf[1];if(Co&&Co.error)throw Co.error;var Bf=Wt(),yi=Wt(dt),ko=Wt(),Ff=Wt(!1),Bi=hi(function(){return ko.current&&dt===yi.current?ko.current:mi($e.getState(),dt)},[$e,Co,dt]);ns(xy,[yi,Bf,Ff,dt,Bi,ko,bf]),ns(Ty,[A,$e,vo,mi,yi,Bf,Ff,ko,bf,Hk],[$e,vo,mi]);var Fi=Me(function(){return mn.createElement(X,Gt({},Bi,{ref:_f}))},[_f,X,Bi]),zk=Me(function(){return A?mn.createElement(bi.Provider,{value:mf},Fi):Fi},[bi,Fi,mf]);return zk}var Dn=Bo?mn.memo(ut):ut;if(Dn.WrappedComponent=X,Dn.displayName=ut.displayName=Q,m){var Fo=mn.forwardRef(function(Et,nn){return mn.createElement(Dn,Gt({},Et,{reactReduxForwardedRef:nn}))});return Fo.displayName=Q,Fo.WrappedComponent=X,es(Fo,X)}return es(Dn,X)}}function Iy(e,n){var t={},o=function(c){var a=e[c];typeof a=="function"&&(t[c]=function(){return n(a.apply(void 0,arguments))})};for(var r in e)o(r);return t}function Fr(e){return function(t,o){var r=e(t,o);function i(){return r}return i.dependsOnOwnProps=!1,i}}function ts(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function os(e,n){return function(o,r){var i=r.displayName,c=function(s,l){return c.dependsOnOwnProps?c.mapToProps(s,l):c.mapToProps(s)};return c.dependsOnOwnProps=!0,c.mapToProps=function(s,l){c.mapToProps=e,c.dependsOnOwnProps=ts(e);var A=c(s,l);return typeof A=="function"&&(c.mapToProps=A,c.dependsOnOwnProps=ts(A),A=c(s,l)),A},c}}function Ry(e){return typeof e=="function"?os(e,"mapDispatchToProps"):void 0}function Py(e){return e?void 0:Fr(function(n){return{dispatch:n}})}function Dy(e){return e&&typeof e=="object"?Fr(function(n){return Iy(e,n)}):void 0}const xw=[Ry,Py,Dy];function Ny(e){return typeof e=="function"?os(e,"mapStateToProps"):void 0}function My(e){return e?void 0:Fr(function(){return{}})}const Tw=[Ny,My];function vr(){return vr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},vr.apply(null,arguments)}function Ly(e,n,t){return vr({},t,e,n)}function jy(e){return function(t,o){var r=o.displayName,i=o.pure,c=o.areMergedPropsEqual,a=!1,s;return function(A,f,E){var u=e(A,f,E);return a?(!i||!c(u,s))&&(s=u):(a=!0,s=u),s}}}function Uy(e){return typeof e=="function"?jy(e):void 0}function Jy(e){return e?void 0:function(){return Ly}}const Ow=[Uy,Jy];var $y,qy,Hy,Cr,zy,Gy,Wy,Ky;function kr(e,n,t){for(var o=n.length-1;o>=0;o--){var r=n[o](e);if(r)return r}return function(i,c){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+c.wrappedComponentName+".")}}function Yy(e,n){return e===n}function Iw(e){var n=e===void 0?{}:e,t=n.connectHOC,o=t===void 0?Hy:t,r=n.mapStateToPropsFactories,i=r===void 0?Gy:r,c=n.mapDispatchToPropsFactories,a=c===void 0?zy:c,s=n.mergePropsFactories,l=s===void 0?Wy:s,A=n.selectorFactory,f=A===void 0?Ky:A;return function(u,p,v,m){m===void 0&&(m={});var F=m,S=F.pure,D=S===void 0?!0:S,V=F.areStatesEqual,G=V===void 0?Yy:V,re=F.areOwnPropsEqual,X=re===void 0?Cr:re,ce=F.areStatePropsEqual,Q=ce===void 0?Cr:ce,Ne=F.areMergedPropsEqual,Bo=Ne===void 0?Cr:Ne,_i=qy(F,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),hi=kr(u,i,"mapStateToProps"),ut=kr(p,a,"mapDispatchToProps"),Dn=kr(v,l,"mergeProps");return o(f,$y({methodName:"connect",getDisplayName:function(le){return"Connect("+le+")"},shouldHandleStateChanges:!!u,initMapStateToProps:hi,initMapDispatchToProps:ut,initMergeProps:Dn,pure:D,areStatesEqual:G,areOwnPropsEqual:X,areStatePropsEqual:Q,areMergedPropsEqual:Bo},_i))}}const Rw=null;function Vy(){var e=gr(zt);return e}var Xy,rs,Zy;function Pw(e){e===void 0&&(e=rs);var n=e===rs?Zy:function(){return Xy(e)};return function(){var o=n(),r=o.store;return r}}var Dw=null,is,Qy,eB;function Nw(e){e===void 0&&(e=is);var n=e===is?Qy:eB(e);return function(){var o=n();return o.dispatch}}var Mw=null,nB=function(n,t){return n===t};function tB(e,n,t,o){var r=Er(function(p){return p+1},0),i=r[1],c=bn(function(){return new Za(t,o)},[t,o]),a=Xn(),s=Xn(),l=Xn(),A=Xn(),f=t.getState(),E;try{if(e!==s.current||f!==l.current||a.current){var u=e(f);A.current===void 0||!n(u,A.current)?E=u:E=A.current}else E=A.current}catch(p){throw a.current&&(p.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),p}return Br(function(){s.current=e,l.current=f,A.current=E,a.current=void 0}),Br(function(){function p(){try{var v=t.getState(),m=s.current(v);if(n(m,A.current))return;A.current=m,l.current=v}catch(F){a.current=F}i()}return c.onStateChange=p,c.trySubscribe(),p(),function(){return c.tryUnsubscribe()}},[t,c]),E}function oB(e){e===void 0&&(e=zt);var n=e===zt?Vy:function(){return gr(e)};return function(o,r){r===void 0&&(r=nB);var i=n(),c=i.store,a=i.subscription,s=tB(o,r,c,a);return Ta(s),s}}var rB=oB();gy(Wa);var iB="Expected a function";function cB(e,n){var t;if(typeof n!="function")throw new TypeError(iB);return e=Bc(e),function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=void 0),t}}const aB=cB;function sB(e){return aB(2,e)}const lB=sB(()=>({...window.desktop.store,dispatch:Tc})),{XX:fB}=y,AB=async(e,n="div")=>{const t=lB(),r=t.getState().settings.locale;r&&await window.desktop.intl.applyLocale(r);const i=document.createElement(n);document.body.appendChild(i),window.addEventListener("beforeunload",()=>Ga(i)),fB(M(by,{store:t,children:M(e,{})}),i)},{notifyError:jw,setupErrorReporter:uB}=(()=>{let e=null;return{setupErrorReporter:n=>e=n,notifyError:n=>{if(e){e(n);return}Aa.warn("notifyError: skipping error reporting, reporter is not initialized.",{error:n})}}})(),cs=Object.prototype.toString;function as(e){switch(cs.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Ve(e,Error)}}function yn(e,n){return cs.call(e)===`[object ${n}]`}function wr(e){return yn(e,"ErrorEvent")}function ss(e){return yn(e,"DOMError")}function EB(e){return yn(e,"DOMException")}function Te(e){return yn(e,"String")}function Sr(e){return typeof e=="object"&&e!==null&&"__sentry_template_string__"in e&&"__sentry_template_values__"in e}function xr(e){return e===null||Sr(e)||typeof e!="object"&&typeof e!="function"}function Bn(e){return yn(e,"Object")}function Kt(e){return typeof Event<"u"&&Ve(e,Event)}function dB(e){return typeof Element<"u"&&Ve(e,Element)}function gB(e){return yn(e,"RegExp")}function Yt(e){return!!(e&&e.then&&typeof e.then=="function")}function pB(e){return Bn(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function _B(e){return typeof e=="number"&&e!==e}function Ve(e,n){try{return e instanceof n}catch{return!1}}function ls(e){return!!(typeof e=="object"&&e!==null&&(e.__isVue||e._isVue))}function Vt(e){return e&&e.Math==Math?e:void 0}const L=typeof globalThis=="object"&&Vt(globalThis)||typeof window=="object"&&Vt(window)||typeof self=="object"&&Vt(self)||typeof global=="object"&&Vt(global)||function(){return this}()||{};function Tr(){return L}function fs(e,n,t){const o=t||L,r=o.__SENTRY__=o.__SENTRY__||{};return r[e]||(r[e]=n())}const Fn=Tr(),hB=80;function As(e,n={}){if(!e)return"<unknown>";try{let t=e;const o=5,r=[];let i=0,c=0;const a=" > ",s=a.length;let l;const A=Array.isArray(n)?n:n.keyAttrs,f=!Array.isArray(n)&&n.maxStringLength||hB;for(;t&&i++<o&&(l=bB(t,A),!(l==="html"||i>1&&c+r.length*s+l.length>=f));)r.push(l),c+=l.length,t=t.parentNode;return r.reverse().join(a)}catch{return"<unknown>"}}function bB(e,n){const t=e,o=[];let r,i,c,a,s;if(!t||!t.tagName)return"";if(Fn.HTMLElement&&t instanceof HTMLElement&&t.dataset&&t.dataset.sentryComponent)return t.dataset.sentryComponent;o.push(t.tagName.toLowerCase());const l=n&&n.length?n.filter(f=>t.getAttribute(f)).map(f=>[f,t.getAttribute(f)]):null;if(l&&l.length)l.forEach(f=>{o.push(`[${f[0]}="${f[1]}"]`)});else if(t.id&&o.push(`#${t.id}`),r=t.className,r&&Te(r))for(i=r.split(/\s+/),s=0;s<i.length;s++)o.push(`.${i[s]}`);const A=["aria-label","type","name","title","alt"];for(s=0;s<A.length;s++)c=A[s],a=t.getAttribute(c),a&&o.push(`[${c}="${a}"]`);return o.join("")}function mB(){try{return Fn.document.location.href}catch{return""}}function Uw(e){return Fn.document&&Fn.document.querySelector?Fn.document.querySelector(e):null}function yB(e){if(!Fn.HTMLElement)return null;let n=e;const t=5;for(let o=0;o<t;o++){if(!n)return null;if(n instanceof HTMLElement&&n.dataset.sentryComponent)return n.dataset.sentryComponent;n=n.parentNode}return null}const Qn=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,BB="Sentry Logger ",Or=["debug","info","warn","error","log","assert","trace"],Xt={};function Zt(e){if(!("console"in L))return e();const n=L.console,t={},o=Object.keys(Xt);o.forEach(r=>{const i=Xt[r];t[r]=n[r],n[r]=i});try{return e()}finally{o.forEach(r=>{n[r]=t[r]})}}function FB(){let e=!1;const n={enable:()=>{e=!0},disable:()=>{e=!1},isEnabled:()=>e};return Qn?Or.forEach(t=>{n[t]=(...o)=>{e&&Zt(()=>{L.console[t](`${BB}[${t}]:`,...o)})}}):Or.forEach(t=>{n[t]=()=>{}}),n}const x=FB();function vn(e,n=0){return typeof e!="string"||n===0||e.length<=n?e:`${e.slice(0,n)}...`}function Jw(e,n){let t=e;const o=t.length;if(o<=150)return t;n>o&&(n=o);let r=Math.max(n-60,0);r<5&&(r=0);let i=Math.min(r+140,o);return i>o-5&&(i=o),i===o&&(r=Math.max(i-140,0)),t=t.slice(r,i),r>0&&(t=`'{snip} ${t}`),i<o&&(t+=" {snip}"),t}function us(e,n){if(!Array.isArray(e))return"";const t=[];for(let o=0;o<e.length;o++){const r=e[o];try{ls(r)?t.push("[VueViewModel]"):t.push(String(r))}catch{t.push("[value cannot be serialized]")}}return t.join(n)}function vB(e,n,t=!1){return Te(e)?gB(n)?n.test(e):Te(n)?t?e===n:e.includes(n):!1:!1}function Qt(e,n=[],t=!1){return n.some(o=>vB(e,o,t))}var CB;function oe(e,n,t){if(!(n in e))return;const o=e[n],r=t(o);typeof r=="function"&&Es(r,o),e[n]=r}function et(e,n,t){try{Object.defineProperty(e,n,{value:t,writable:!0,configurable:!0})}catch{Qn&&x.log(`Failed to add non-enumerable property "${n}" to object`,e)}}function Es(e,n){try{const t=n.prototype||{};e.prototype=n.prototype=t,et(e,"__sentry_original__",n)}catch{}}function Ir(e){return e.__sentry_original__}function kB(e){return Object.keys(e).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&")}function ds(e){if(as(e))return{message:e.message,name:e.name,stack:e.stack,...ps(e)};if(Kt(e)){const n={type:e.type,target:gs(e.target),currentTarget:gs(e.currentTarget),...ps(e)};return typeof CustomEvent<"u"&&Ve(e,CustomEvent)&&(n.detail=e.detail),n}else return e}function gs(e){try{return dB(e)?As(e):Object.prototype.toString.call(e)}catch{return"<unknown>"}}function ps(e){if(typeof e=="object"&&e!==null){const n={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}else return{}}function wB(e,n=40){const t=Object.keys(ds(e));if(t.sort(),!t.length)return"[object has no keys]";if(t[0].length>=n)return vn(t[0],n);for(let o=t.length;o>0;o--){const r=t.slice(0,o).join(", ");if(!(r.length>n))return o===t.length?r:vn(r,n)}return""}function be(e){return Rr(e,new Map)}function Rr(e,n){if(SB(e)){const t=n.get(e);if(t!==void 0)return t;const o={};n.set(e,o);for(const r of Object.keys(e))typeof e[r]<"u"&&(o[r]=Rr(e[r],n));return o}if(Array.isArray(e)){const t=n.get(e);if(t!==void 0)return t;const o=[];return n.set(e,o),e.forEach(r=>{o.push(Rr(r,n))}),o}return e}function SB(e){if(!Bn(e))return!1;try{const n=Object.getPrototypeOf(e).constructor.name;return!n||n==="Object"}catch{return!0}}function $w(e){let n;switch(!0){case e==null:n=new String(e);break;case(typeof e=="symbol"||typeof e=="bigint"):n=Object(e);break;case CB(e):n=new e.constructor(e);break;default:n=e;break}return n}const eo="production";var Pr;function Ee(){const e=L,n=e.crypto||e.msCrypto;let t=()=>Math.random()*16;try{if(n&&n.randomUUID)return n.randomUUID().replace(/-/g,"");n&&n.getRandomValues&&(t=()=>{const o=new Uint8Array(1);return n.getRandomValues(o),o[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,o=>(o^(t()&15)>>o/4).toString(16))}function _s(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function Le(e){const{message:n,event_id:t}=e;if(n)return n;const o=_s(e);return o?o.type&&o.value?`${o.type}: ${o.value}`:o.type||o.value||t||"<unknown>":t||"<unknown>"}function Dr(e,n,t){const o=e.exception=e.exception||{},r=o.values=o.values||[],i=r[0]=r[0]||{};i.value||(i.value=n||""),i.type||(i.type=t||"Error")}function nt(e,n){const t=_s(e);if(!t)return;const o={type:"generic",handled:!0},r=t.mechanism;if(t.mechanism={...o,...r,...n},n&&"data"in n){const i={...r&&r.data,...n.data};t.mechanism.data=i}}const xB=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function qw(e){const n=e.match(xB)||[],t=parseInt(n[1],10),o=parseInt(n[2],10),r=parseInt(n[3],10);return{buildmetadata:n[5],major:isNaN(t)?void 0:t,minor:isNaN(o)?void 0:o,patch:isNaN(r)?void 0:r,prerelease:n[4]}}function Hw(e,n,t=5){if(n.lineno===void 0)return;const o=e.length,r=Math.max(Math.min(o-1,n.lineno-1),0);n.pre_context=e.slice(Math.max(0,r-t),r).map(i=>Pr(i,0)),n.context_line=Pr(e[Math.min(o-1,r)],n.colno||0),n.post_context=e.slice(Math.min(r+1,o),r+1+t).map(i=>Pr(i,0))}function hs(e){if(e&&e.__sentry_captured__)return!0;try{et(e,"__sentry_captured__",!0)}catch{}return!1}function bs(e){return Array.isArray(e)?e:[e]}const ms=1e3;function tt(){return Date.now()/ms}function TB(){const{performance:e}=L;if(!e||!e.now)return tt;const n=Date.now()-e.now(),t=e.timeOrigin==null?n:e.timeOrigin;return()=>(t+e.now())/ms}const Nr=TB(),zw=null;let no;const Gw=(()=>{const{performance:e}=L;if(!e||!e.now){no="none";return}const n=3600*1e3,t=e.now(),o=Date.now(),r=e.timeOrigin?Math.abs(e.timeOrigin+t-o):n,i=r<n,c=e.timing&&e.timing.navigationStart,s=typeof c=="number"?Math.abs(c+t-o):n,l=s<n;return i||l?r<=s?(no="timeOrigin",e.timeOrigin):(no="navigationStart",c):(no="dateNow",o)})(),U=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;var Oe;(function(e){e[e.PENDING=0]="PENDING";const t=1;e[e.RESOLVED=t]="RESOLVED";const o=2;e[e.REJECTED=o]="REJECTED"})(Oe||(Oe={}));function Cn(e){return new de(n=>{n(e)})}function Mr(e){return new de((n,t)=>{t(e)})}class de{constructor(n){de.prototype.__init.call(this),de.prototype.__init2.call(this),de.prototype.__init3.call(this),de.prototype.__init4.call(this),this._state=Oe.PENDING,this._handlers=[];try{n(this._resolve,this._reject)}catch(t){this._reject(t)}}then(n,t){return new de((o,r)=>{this._handlers.push([!1,i=>{if(!n)o(i);else try{o(n(i))}catch(c){r(c)}},i=>{if(!t)r(i);else try{o(t(i))}catch(c){r(c)}}]),this._executeHandlers()})}catch(n){return this.then(t=>t,n)}finally(n){return new de((t,o)=>{let r,i;return this.then(c=>{i=!1,r=c,n&&n()},c=>{i=!0,r=c,n&&n()}).then(()=>{if(i){o(r);return}t(r)})})}__init(){this._resolve=n=>{this._setResult(Oe.RESOLVED,n)}}__init2(){this._reject=n=>{this._setResult(Oe.REJECTED,n)}}__init3(){this._setResult=(n,t)=>{if(this._state===Oe.PENDING){if(Yt(t)){t.then(this._resolve,this._reject);return}this._state=n,this._value=t,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===Oe.PENDING)return;const n=this._handlers.slice();this._handlers=[],n.forEach(t=>{t[0]||(this._state===Oe.RESOLVED&&t[1](this._value),this._state===Oe.REJECTED&&t[2](this._value),t[0]=!0)})}}}function Lr(){return fs("globalEventProcessors",()=>[])}function OB(e){Lr().push(e)}function to(e,n,t,o=0){return new de((r,i)=>{const c=e[o];if(n===null||typeof c!="function")r(n);else{const a=c({...n},t);U&&c.id&&a===null&&x.log(`Event processor "${c.id}" dropped event`),Yt(a)?a.then(s=>to(e,s,t,o+1).then(r)).then(null,i):to(e,a,t,o+1).then(r).then(null,i)}})}function ys(e){const n=Nr(),t={sid:Ee(),init:!0,timestamp:n,started:n,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>IB(t)};return e&&Xe(t,e),t}function Xe(e,n={}){if(n.user&&(!e.ipAddress&&n.user.ip_address&&(e.ipAddress=n.user.ip_address),!e.did&&!n.did&&(e.did=n.user.id||n.user.email||n.user.username)),e.timestamp=n.timestamp||Nr(),n.abnormal_mechanism&&(e.abnormal_mechanism=n.abnormal_mechanism),n.ignoreDuration&&(e.ignoreDuration=n.ignoreDuration),n.sid&&(e.sid=n.sid.length===32?n.sid:Ee()),n.init!==void 0&&(e.init=n.init),!e.did&&n.did&&(e.did=`${n.did}`),typeof n.started=="number"&&(e.started=n.started),e.ignoreDuration)e.duration=void 0;else if(typeof n.duration=="number")e.duration=n.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}n.release&&(e.release=n.release),n.environment&&(e.environment=n.environment),!e.ipAddress&&n.ipAddress&&(e.ipAddress=n.ipAddress),!e.userAgent&&n.userAgent&&(e.userAgent=n.userAgent),typeof n.errors=="number"&&(e.errors=n.errors),n.status&&(e.status=n.status)}function Bs(e,n){let t={};n?t={status:n}:e.status==="ok"&&(t={status:"exited"}),Xe(e,t)}function IB(e){return be({sid:`${e.sid}`,init:e.init,started:new Date(e.started*1e3).toISOString(),timestamp:new Date(e.timestamp*1e3).toISOString(),status:e.status,errors:e.errors,did:typeof e.did=="number"||typeof e.did=="string"?`${e.did}`:void 0,duration:e.duration,abnormal_mechanism:e.abnormal_mechanism,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}function Fs(e){return e.transaction}var RB,PB;const Ww=0,DB=1;function NB(e){const{spanId:n,traceId:t}=e.spanContext(),{data:o,op:r,parent_span_id:i,status:c,tags:a,origin:s}=kn(e);return be({data:o,op:r,parent_span_id:i,span_id:n,status:c,tags:a,trace_id:t,origin:s})}function Kw(e){const{traceId:n,spanId:t}=e.spanContext(),o=Cs(e);return PB(n,t,o)}function Yw(e){return typeof e=="number"?vs(e):Array.isArray(e)?e[0]+e[1]/1e9:e instanceof Date?vs(e.getTime()):RB()}function vs(e){return e>9999999999?e/1e3:e}function kn(e){return MB(e)?e.getSpanJSON():typeof e.toJSON=="function"?e.toJSON():{}}function MB(e){return typeof e.getSpanJSON=="function"}function Cs(e){const{traceFlags:n}=e.spanContext();return!!(n&DB)}function ks(e,n,t){const o=n.getOptions(),{publicKey:r}=n.getDsn()||{},{segment:i}=t&&t.getUser()||{},c=be({environment:o.environment||eo,release:o.release,user_segment:i,public_key:r,trace_id:e});return n.emit&&n.emit("createDsc",c),c}function LB(e){const n=te();if(!n)return{};const t=ks(kn(e).trace_id||"",n,Pe()),o=Fs(e);if(!o)return t;const r=o&&o._frozenDynamicSamplingContext;if(r)return r;const{sampleRate:i,source:c}=o.metadata;i!=null&&(t.sample_rate=`${i}`);const a=kn(o);return c&&c!=="url"&&(t.transaction=a.description),t.sampled=String(Cs(o)),n.emit&&n.emit("createDsc",t),t}function ws(e,n){const{fingerprint:t,span:o,breadcrumbs:r,sdkProcessingMetadata:i}=n;jB(e,n),o&&$B(e,o),qB(e,t),UB(e,r),JB(e,i)}function Ss(e,n){const{extra:t,tags:o,user:r,contexts:i,level:c,sdkProcessingMetadata:a,breadcrumbs:s,fingerprint:l,eventProcessors:A,attachments:f,propagationContext:E,transactionName:u,span:p}=n;ot(e,"extra",t),ot(e,"tags",o),ot(e,"user",r),ot(e,"contexts",i),ot(e,"sdkProcessingMetadata",a),c&&(e.level=c),u&&(e.transactionName=u),p&&(e.span=p),s.length&&(e.breadcrumbs=[...e.breadcrumbs,...s]),l.length&&(e.fingerprint=[...e.fingerprint,...l]),A.length&&(e.eventProcessors=[...e.eventProcessors,...A]),f.length&&(e.attachments=[...e.attachments,...f]),e.propagationContext={...e.propagationContext,...E}}function ot(e,n,t){if(t&&Object.keys(t).length){e[n]={...e[n]};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[n][o]=t[o])}}function jB(e,n){const{extra:t,tags:o,user:r,contexts:i,level:c,transactionName:a}=n,s=be(t);s&&Object.keys(s).length&&(e.extra={...s,...e.extra});const l=be(o);l&&Object.keys(l).length&&(e.tags={...l,...e.tags});const A=be(r);A&&Object.keys(A).length&&(e.user={...A,...e.user});const f=be(i);f&&Object.keys(f).length&&(e.contexts={...f,...e.contexts}),c&&(e.level=c),a&&(e.transaction=a)}function UB(e,n){const t=[...e.breadcrumbs||[],...n];e.breadcrumbs=t.length?t:void 0}function JB(e,n){e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...n}}function $B(e,n){e.contexts={trace:NB(n),...e.contexts};const t=Fs(n);if(t){e.sdkProcessingMetadata={dynamicSamplingContext:LB(n),...e.sdkProcessingMetadata};const o=kn(t).description;o&&(e.tags={transaction:o,...e.tags})}}function qB(e,n){e.fingerprint=e.fingerprint?bs(e.fingerprint):[],n&&(e.fingerprint=e.fingerprint.concat(n)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}const HB=100;let oo;class Ie{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=xs()}static clone(n){return n?n.clone():new Ie}clone(){const n=new Ie;return n._breadcrumbs=[...this._breadcrumbs],n._tags={...this._tags},n._extra={...this._extra},n._contexts={...this._contexts},n._user=this._user,n._level=this._level,n._span=this._span,n._session=this._session,n._transactionName=this._transactionName,n._fingerprint=this._fingerprint,n._eventProcessors=[...this._eventProcessors],n._requestSession=this._requestSession,n._attachments=[...this._attachments],n._sdkProcessingMetadata={...this._sdkProcessingMetadata},n._propagationContext={...this._propagationContext},n._client=this._client,n}setClient(n){this._client=n}getClient(){return this._client}addScopeListener(n){this._scopeListeners.push(n)}addEventProcessor(n){return this._eventProcessors.push(n),this}setUser(n){return this._user=n||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&Xe(this._session,{user:n}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(n){return this._requestSession=n,this}setTags(n){return this._tags={...this._tags,...n},this._notifyScopeListeners(),this}setTag(n,t){return this._tags={...this._tags,[n]:t},this._notifyScopeListeners(),this}setExtras(n){return this._extra={...this._extra,...n},this._notifyScopeListeners(),this}setExtra(n,t){return this._extra={...this._extra,[n]:t},this._notifyScopeListeners(),this}setFingerprint(n){return this._fingerprint=n,this._notifyScopeListeners(),this}setLevel(n){return this._level=n,this._notifyScopeListeners(),this}setTransactionName(n){return this._transactionName=n,this._notifyScopeListeners(),this}setContext(n,t){return t===null?delete this._contexts[n]:this._contexts[n]=t,this._notifyScopeListeners(),this}setSpan(n){return this._span=n,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const n=this._span;return n&&n.transaction}setSession(n){return n?this._session=n:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(n){if(!n)return this;const t=typeof n=="function"?n(this):n;if(t instanceof Ie){const o=t.getScopeData();this._tags={...this._tags,...o.tags},this._extra={...this._extra,...o.extra},this._contexts={...this._contexts,...o.contexts},o.user&&Object.keys(o.user).length&&(this._user=o.user),o.level&&(this._level=o.level),o.fingerprint.length&&(this._fingerprint=o.fingerprint),t.getRequestSession()&&(this._requestSession=t.getRequestSession()),o.propagationContext&&(this._propagationContext=o.propagationContext)}else if(Bn(t)){const o=n;this._tags={...this._tags,...o.tags},this._extra={...this._extra,...o.extra},this._contexts={...this._contexts,...o.contexts},o.user&&(this._user=o.user),o.level&&(this._level=o.level),o.fingerprint&&(this._fingerprint=o.fingerprint),o.requestSession&&(this._requestSession=o.requestSession),o.propagationContext&&(this._propagationContext=o.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=xs(),this}addBreadcrumb(n,t){const o=typeof t=="number"?t:HB;if(o<=0)return this;const r={timestamp:tt(),...n},i=this._breadcrumbs;return i.push(r),this._breadcrumbs=i.length>o?i.slice(-o):i,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(n){return this._attachments.push(n),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:n,_attachments:t,_contexts:o,_tags:r,_extra:i,_user:c,_level:a,_fingerprint:s,_eventProcessors:l,_propagationContext:A,_sdkProcessingMetadata:f,_transactionName:E,_span:u}=this;return{breadcrumbs:n,attachments:t,contexts:o,tags:r,extra:i,user:c,level:a,fingerprint:s||[],eventProcessors:l,propagationContext:A,sdkProcessingMetadata:f,transactionName:E,span:u}}applyToEvent(n,t={},o=[]){ws(n,this.getScopeData());const r=[...o,...Lr(),...this._eventProcessors];return to(r,n,t)}setSDKProcessingMetadata(n){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...n},this}setPropagationContext(n){return this._propagationContext=n,this}getPropagationContext(){return this._propagationContext}captureException(n,t){const o=t&&t.event_id?t.event_id:Ee();if(!this._client)return x.warn("No client configured on scope - will not capture exception!"),o;const r=new Error("Sentry syntheticException");return this._client.captureException(n,{originalException:n,syntheticException:r,...t,event_id:o},this),o}captureMessage(n,t,o){const r=o&&o.event_id?o.event_id:Ee();if(!this._client)return x.warn("No client configured on scope - will not capture message!"),r;const i=new Error(n);return this._client.captureMessage(n,t,{originalException:n,syntheticException:i,...o,event_id:r},this),r}captureEvent(n,t){const o=t&&t.event_id?t.event_id:Ee();return this._client?(this._client.captureEvent(n,{...t,event_id:o},this),o):(x.warn("No client configured on scope - will not capture event!"),o)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(n=>{n(this)}),this._notifyingListeners=!1)}}function zB(){return oo||(oo=new Ie),oo}function Vw(e){oo=e}function xs(){return{traceId:Ee(),spanId:Ee().substring(16)}}const jr="7.112.0",Ur=parseFloat(jr),GB=100;class Jr{constructor(n,t,o,r=Ur){this._version=r;let i;t?i=t:(i=new Ie,i.setClient(n));let c;o?c=o:(c=new Ie,c.setClient(n)),this._stack=[{scope:i}],n&&this.bindClient(n),this._isolationScope=c}isOlderThan(n){return this._version<n}bindClient(n){const t=this.getStackTop();t.client=n,t.scope.setClient(n),n&&n.setupIntegrations&&n.setupIntegrations()}pushScope(){const n=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:n}),n}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(n){const t=this.pushScope();let o;try{o=n(t)}catch(r){throw this.popScope(),r}return Yt(o)?o.then(r=>(this.popScope(),r),r=>{throw this.popScope(),r}):(this.popScope(),o)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(n,t){const o=this._lastEventId=t&&t.event_id?t.event_id:Ee(),r=new Error("Sentry syntheticException");return this.getScope().captureException(n,{originalException:n,syntheticException:r,...t,event_id:o}),o}captureMessage(n,t,o){const r=this._lastEventId=o&&o.event_id?o.event_id:Ee(),i=new Error(n);return this.getScope().captureMessage(n,t,{originalException:n,syntheticException:i,...o,event_id:r}),r}captureEvent(n,t){const o=t&&t.event_id?t.event_id:Ee();return n.type||(this._lastEventId=o),this.getScope().captureEvent(n,{...t,event_id:o}),o}lastEventId(){return this._lastEventId}addBreadcrumb(n,t){const{scope:o,client:r}=this.getStackTop();if(!r)return;const{beforeBreadcrumb:i=null,maxBreadcrumbs:c=GB}=r.getOptions&&r.getOptions()||{};if(c<=0)return;const s={timestamp:tt(),...n},l=i?Zt(()=>i(s,t)):s;l!==null&&(r.emit&&r.emit("beforeAddBreadcrumb",l,t),o.addBreadcrumb(l,c))}setUser(n){this.getScope().setUser(n),this.getIsolationScope().setUser(n)}setTags(n){this.getScope().setTags(n),this.getIsolationScope().setTags(n)}setExtras(n){this.getScope().setExtras(n),this.getIsolationScope().setExtras(n)}setTag(n,t){this.getScope().setTag(n,t),this.getIsolationScope().setTag(n,t)}setExtra(n,t){this.getScope().setExtra(n,t),this.getIsolationScope().setExtra(n,t)}setContext(n,t){this.getScope().setContext(n,t),this.getIsolationScope().setContext(n,t)}configureScope(n){const{scope:t,client:o}=this.getStackTop();o&&n(t)}run(n){const t=Ts(this);try{n(this)}finally{Ts(t)}}getIntegration(n){const t=this.getClient();if(!t)return null;try{return t.getIntegration(n)}catch{return U&&x.warn(`Cannot retrieve integration ${n.id} from the current Hub`),null}}startTransaction(n,t){const o=this._callExtensionMethod("startTransaction",n,t);return U&&!o&&(this.getClient()?x.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):x.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),o}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(n=!1){if(n)return this.endSession();this._sendSessionUpdate()}endSession(){const t=this.getStackTop().scope,o=t.getSession();o&&Bs(o),this._sendSessionUpdate(),t.setSession()}startSession(n){const{scope:t,client:o}=this.getStackTop(),{release:r,environment:i=eo}=o&&o.getOptions()||{},{userAgent:c}=L.navigator||{},a=ys({release:r,environment:i,user:t.getUser(),...c&&{userAgent:c},...n}),s=t.getSession&&t.getSession();return s&&s.status==="ok"&&Xe(s,{status:"exited"}),this.endSession(),t.setSession(a),a}shouldSendDefaultPii(){const n=this.getClient(),t=n&&n.getOptions();return!!(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:n,client:t}=this.getStackTop(),o=n.getSession();o&&t&&t.captureSession&&t.captureSession(o)}_callExtensionMethod(n,...t){const r=wn().__SENTRY__;if(r&&r.extensions&&typeof r.extensions[n]=="function")return r.extensions[n].apply(this,t);U&&x.warn(`Extension method ${n} couldn't be found, doing nothing.`)}}function wn(){return L.__SENTRY__=L.__SENTRY__||{extensions:{},hub:void 0},L}function Ts(e){const n=wn(),t=io(n);return $r(n,e),t}function Re(){const e=wn();if(e.__SENTRY__&&e.__SENTRY__.acs){const n=e.__SENTRY__.acs.getCurrentHub();if(n)return n}return Os(e)}function ro(){return Re().getIsolationScope()}function Os(e=wn()){return(!Is(e)||io(e).isOlderThan(Ur))&&$r(e,new Jr),io(e)}function Xw(e,n=Os()){if(!Is(e)||io(e).isOlderThan(Ur)){const t=n.getClient(),o=n.getScope(),r=n.getIsolationScope();$r(e,new Jr(t,o.clone(),r.clone()))}}function Zw(e){const n=wn();n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.acs=e}function Qw(e,n={}){const t=wn();return t.__SENTRY__&&t.__SENTRY__.acs?t.__SENTRY__.acs.runWithAsyncContext(e,n):e()}function Is(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function io(e){return fs("hub",()=>new Jr,e)}function $r(e,n){if(!e)return!1;const t=e.__SENTRY__=e.__SENTRY__||{};return t.hub=n,!0}function WB(){const e=typeof WeakSet=="function",n=e?new WeakSet:[];function t(r){if(e)return n.has(r)?!0:(n.add(r),!1);for(let i=0;i<n.length;i++)if(n[i]===r)return!0;return n.push(r),!1}function o(r){if(e)n.delete(r);else for(let i=0;i<n.length;i++)if(n[i]===r){n.splice(i,1);break}}return[t,o]}function KB(e,n=!1){return!(n||e&&!e.startsWith("/")&&!e.match(/^[A-Z]:/)&&!e.startsWith(".")&&!e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))&&e!==void 0&&!e.includes("node_modules/")}function YB(e){const n=/^\s*[-]{4,}$/,t=/at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;return o=>{const r=o.match(t);if(r){let i,c,a,s,l;if(r[1]){a=r[1];let E=a.lastIndexOf(".");if(a[E-1]==="."&&E--,E>0){i=a.slice(0,E),c=a.slice(E+1);const u=i.indexOf(".Module");u>0&&(a=a.slice(u+1),i=i.slice(0,u))}s=void 0}c&&(s=i,l=c),c==="<anonymous>"&&(l=void 0,a=void 0),a===void 0&&(l=l||"<anonymous>",a=s?`${s}.${l}`:l);let A=r[2]&&r[2].startsWith("file://")?r[2].slice(7):r[2];const f=r[5]==="native";return A&&A.match(/\/[A-Z]:/)&&(A=A.slice(1)),!A&&r[5]&&!f&&(A=r[5]),{filename:A,module:e?e(A):void 0,function:a,lineno:parseInt(r[3],10)||void 0,colno:parseInt(r[4],10)||void 0,in_app:KB(A,f)}}if(o.match(n))return{filename:o}}}const Rs=50,Ps=/\(error: (.*)\)/,Ds=/captureMessage|captureException/;function Ns(...e){const n=e.sort((t,o)=>t[0]-o[0]).map(t=>t[1]);return(t,o=0)=>{const r=[],i=t.split(`
`);for(let c=o;c<i.length;c++){const a=i[c];if(a.length>1024)continue;const s=Ps.test(a)?a.replace(Ps,"$1"):a;if(!s.match(/\S*Error: /)){for(const l of n){const A=l(s);if(A){r.push(A);break}}if(r.length>=Rs)break}}return Ms(r)}}function VB(e){return Array.isArray(e)?Ns(...e):e}function Ms(e){if(!e.length)return[];const n=Array.from(e);return/sentryWrapped/.test(n[n.length-1].function||"")&&n.pop(),n.reverse(),Ds.test(n[n.length-1].function||"")&&(n.pop(),Ds.test(n[n.length-1].function||"")&&n.pop()),n.slice(0,Rs).map(t=>({...t,filename:t.filename||n[n.length-1].filename,function:t.function||"?"}))}const qr="<anonymous>";function je(e){try{return!e||typeof e!="function"?qr:e.name||qr}catch{return qr}}function XB(e){return[90,YB(e)]}function Ce(e,n=100,t=1/0){try{return Hr("",e,n,t)}catch(o){return{ERROR:`**non-serializable** (${o})`}}}function Ls(e,n=3,t=100*1024){const o=Ce(e,n);return nF(o)>t?Ls(e,n-1,t):o}function Hr(e,n,t=1/0,o=1/0,r=WB()){const[i,c]=r;if(n==null||["number","boolean","string"].includes(typeof n)&&!_B(n))return n;const a=ZB(e,n);if(!a.startsWith("[object "))return a;if(n.__sentry_skip_normalization__)return n;const s=typeof n.__sentry_override_normalization_depth__=="number"?n.__sentry_override_normalization_depth__:t;if(s===0)return a.replace("object ","");if(i(n))return"[Circular ~]";const l=n;if(l&&typeof l.toJSON=="function")try{const u=l.toJSON();return Hr("",u,s-1,o,r)}catch{}const A=Array.isArray(n)?[]:{};let f=0;const E=ds(n);for(const u in E){if(!Object.prototype.hasOwnProperty.call(E,u))continue;if(f>=o){A[u]="[MaxProperties ~]";break}const p=E[u];A[u]=Hr(u,p,s-1,o,r),f++}return c(n),A}function ZB(e,n){try{if(e==="domain"&&n&&typeof n=="object"&&n._events)return"[Domain]";if(e==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&n===global)return"[Global]";if(typeof window<"u"&&n===window)return"[Window]";if(typeof document<"u"&&n===document)return"[Document]";if(ls(n))return"[VueViewModel]";if(pB(n))return"[SyntheticEvent]";if(typeof n=="number"&&n!==n)return"[NaN]";if(typeof n=="function")return`[Function: ${je(n)}]`;if(typeof n=="symbol")return`[${String(n)}]`;if(typeof n=="bigint")return`[BigInt: ${String(n)}]`;const t=QB(n);return/^HTML(\w*)Element$/.test(t)?`[HTMLElement: ${t}]`:`[object ${t}]`}catch(t){return`**non-serializable** (${t})`}}function QB(e){const n=Object.getPrototypeOf(e);return n?n.constructor.name:"null prototype"}function eF(e){return~-encodeURI(e).split(/%..|./).length}function nF(e){return eF(JSON.stringify(e))}function eS(e,n){const t=n.replace(/\\/g,"/").replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let o=e;try{o=decodeURI(e)}catch{}return o.replace(/\\/g,"/").replace(/webpack:\/?/g,"").replace(new RegExp(`(file://)?/*${t}/*`,"ig"),"app:///")}function tF(e,n,t,o,r,i){const{normalizeDepth:c=3,normalizeMaxBreadth:a=1e3}=e,s={...n,event_id:n.event_id||t.event_id||Ee(),timestamp:n.timestamp||tt()},l=t.integrations||e.integrations.map(m=>m.name);oF(s,e),cF(s,l),n.type===void 0&&rF(s,e.stackParser);const A=sF(o,t.captureContext);t.mechanism&&nt(s,t.mechanism);const f=r&&r.getEventProcessors?r.getEventProcessors():[],E=zB().getScopeData();if(i){const m=i.getScopeData();Ss(E,m)}if(A){const m=A.getScopeData();Ss(E,m)}const u=[...t.attachments||[],...E.attachments];u.length&&(t.attachments=u),ws(s,E);const p=[...f,...Lr(),...E.eventProcessors];return to(p,s,t).then(m=>(m&&iF(m),typeof c=="number"&&c>0?aF(m,c,a):m))}function oF(e,n){const{environment:t,release:o,dist:r,maxValueLength:i=250}=n;"environment"in e||(e.environment="environment"in n?t:eo),e.release===void 0&&o!==void 0&&(e.release=o),e.dist===void 0&&r!==void 0&&(e.dist=r),e.message&&(e.message=vn(e.message,i));const c=e.exception&&e.exception.values&&e.exception.values[0];c&&c.value&&(c.value=vn(c.value,i));const a=e.request;a&&a.url&&(a.url=vn(a.url,i))}const js=new WeakMap;function rF(e,n){const t=L._sentryDebugIds;if(!t)return;let o;const r=js.get(n);r?o=r:(o=new Map,js.set(n,o));const i=Object.keys(t).reduce((c,a)=>{let s;const l=o.get(a);l?s=l:(s=n(a),o.set(a,s));for(let A=s.length-1;A>=0;A--){const f=s[A];if(f.filename){c[f.filename]=t[a];break}}return c},{});try{e.exception.values.forEach(c=>{c.stacktrace.frames.forEach(a=>{a.filename&&(a.debug_id=i[a.filename])})})}catch{}}function iF(e){const n={};try{e.exception.values.forEach(o=>{o.stacktrace.frames.forEach(r=>{r.debug_id&&(r.abs_path?n[r.abs_path]=r.debug_id:r.filename&&(n[r.filename]=r.debug_id),delete r.debug_id)})})}catch{}if(Object.keys(n).length===0)return;e.debug_meta=e.debug_meta||{},e.debug_meta.images=e.debug_meta.images||[];const t=e.debug_meta.images;Object.keys(n).forEach(o=>{t.push({type:"sourcemap",code_file:o,debug_id:n[o]})})}function cF(e,n){n.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...n])}function aF(e,n,t){if(!e)return null;const o={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map(r=>({...r,...r.data&&{data:Ce(r.data,n,t)}}))},...e.user&&{user:Ce(e.user,n,t)},...e.contexts&&{contexts:Ce(e.contexts,n,t)},...e.extra&&{extra:Ce(e.extra,n,t)}};return e.contexts&&e.contexts.trace&&o.contexts&&(o.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(o.contexts.trace.data=Ce(e.contexts.trace.data,n,t))),e.spans&&(o.spans=e.spans.map(r=>{const i=kn(r).data;return i&&(r.data=Ce(i,n,t)),r})),o}function sF(e,n){if(!n)return e;const t=e?e.clone():new Ie;return t.update(n),t}function lF(e){if(e)return fF(e)?{captureContext:e}:uF(e)?{captureContext:e}:e}function fF(e){return e instanceof Ie||typeof e=="function"}const AF=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function uF(e){return Object.keys(e).some(n=>AF.includes(n))}var EF,co,dF,Us,ao,ke,gF,pF;function Js(e,n){return Re().captureException(e,lF(n))}function nS(e,n){const t=typeof n=="string"?n:void 0,o=typeof n!="string"?{captureContext:n}:void 0;return ke().captureMessage(e,t,o)}function $s(e,n){return Re().captureEvent(e,n)}function tS(e){ke().configureScope(e)}function Ze(e,n){Re().addBreadcrumb(e,n)}function oS(e,n){ke().setContext(e,n)}function rS(e){ke().setExtras(e)}function iS(e,n){ke().setExtra(e,n)}function cS(e){ke().setTags(e)}function aS(e,n){ke().setTag(e,n)}function sS(e){ke().setUser(e)}function qs(...e){const n=Re();if(e.length===2){const[t,o]=e;return t?n.withScope(()=>(n.getStackTop().scope=t,o(t))):n.withScope(o)}return n.withScope(e[0])}function lS(e){return gF(()=>e(pF()))}function fS(e,n){return qs(t=>(t.setSpan(e),n(t)))}function AS(e,n){return ke().startTransaction({...e},n)}function Hs(e,n){const t=Pe(),o=te();if(!o)ao&&co.warn("Cannot capture check-in. No client defined.");else if(!o.captureCheckIn)ao&&co.warn("Cannot capture check-in. Client does not support sending check-ins.");else return o.captureCheckIn(e,n,t);return dF()}function uS(e,n,t){const o=Hs({monitorSlug:e,status:"in_progress"},t),r=Us();function i(a){Hs({monitorSlug:e,status:a,checkInId:o,duration:Us()-r})}let c;try{c=n()}catch(a){throw i("error"),a}return EF(c)?Promise.resolve(c).then(()=>{i("ok")},()=>{i("error")}):i("ok"),c}async function ES(e){const n=te();return n?n.flush(e):(ao&&co.warn("Cannot flush events. No client defined."),Promise.resolve(!1))}async function dS(e){const n=te();return n?n.close(e):(ao&&co.warn("Cannot flush events and disable SDK. No client defined."),Promise.resolve(!1))}function gS(){return ke().lastEventId()}function te(){return Re().getClient()}function pS(){return!!te()}function Pe(){return Re().getScope()}function zs(e){const n=te(),t=ro(),o=Pe(),{release:r,environment:i=eo}=n&&n.getOptions()||{},{userAgent:c}=L.navigator||{},a=ys({release:r,environment:i,user:o.getUser()||t.getUser(),...c&&{userAgent:c},...e}),s=t.getSession();return s&&s.status==="ok"&&Xe(s,{status:"exited"}),Gs(),t.setSession(a),o.setSession(a),a}function Gs(){const e=ro(),n=Pe(),t=n.getSession()||e.getSession();t&&Bs(t),Ws(),e.setSession(),n.setSession()}function Ws(){const e=ro(),n=Pe(),t=te(),o=n.getSession()||e.getSession();o&&t&&t.captureSession&&t.captureSession(o)}function Ks(e=!1){if(e){Gs();return}Ws()}var _F,hF,bF;const Ys=[];function mF(e){const n={};return e.forEach(t=>{const{name:o}=t,r=n[o];r&&!r.isDefaultInstance&&t.isDefaultInstance||(n[o]=t)}),Object.keys(n).map(t=>n[t])}function yF(e){const n=e.defaultIntegrations||[],t=e.integrations;n.forEach(c=>{c.isDefaultInstance=!0});let o;Array.isArray(t)?o=[...n,...t]:typeof t=="function"?o=bs(t(n)):o=n;const r=mF(o),i=FF(r,c=>c.name==="Debug");if(i!==-1){const[c]=r.splice(i,1);r.push(c)}return r}function BF(e,n){const t={};return n.forEach(o=>{o&&Xs(e,o,t)}),t}function Vs(e,n){for(const t of n)t&&t.afterAllSetup&&t.afterAllSetup(e)}function Xs(e,n,t){if(t[n.name]){U&&x.log(`Integration skipped because it was already installed: ${n.name}`);return}if(t[n.name]=n,Ys.indexOf(n.name)===-1&&(n.setupOnce(OB,Re),Ys.push(n.name)),n.setup&&typeof n.setup=="function"&&n.setup(e),e.on&&typeof n.preprocessEvent=="function"){const o=n.preprocessEvent.bind(n);e.on("preprocessEvent",(r,i)=>o(r,i,e))}if(e.addEventProcessor&&typeof n.processEvent=="function"){const o=n.processEvent.bind(n),r=Object.assign((i,c)=>o(i,c,e),{id:n.name});e.addEventProcessor(r)}U&&x.log(`Integration installed: ${n.name}`)}function _S(e){const n=bF();if(!n||!n.addIntegration){hF&&_F.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);return}n.addIntegration(e)}function FF(e,n){for(let t=0;t<e.length;t++)if(n(e[t])===!0)return t;return-1}function he(e,n){return Object.assign(function(...o){return n(...o)},{id:e})}function hS(e){return e}let Zs;const Qs="FunctionToString",el=new WeakMap,nl=()=>({name:Qs,setupOnce(){Zs=Function.prototype.toString;try{Function.prototype.toString=function(...e){const n=Ir(this),t=el.has(te())&&n!==void 0?n:this;return Zs.apply(t,e)}}catch{}},setup(e){el.set(e,!0)}}),vF=he(Qs,nl),CF=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/],kF=[/^.*\/healthcheck$/,/^.*\/healthy$/,/^.*\/live$/,/^.*\/ready$/,/^.*\/heartbeat$/,/^.*\/health$/,/^.*\/healthz$/],tl="InboundFilters",ol=(e={})=>({name:tl,setupOnce(){},processEvent(n,t,o){const r=o.getOptions(),i=SF(e,r);return xF(n,i)?null:n}}),wF=he(tl,ol);function SF(e={},n={}){return{allowUrls:[...e.allowUrls||[],...n.allowUrls||[]],denyUrls:[...e.denyUrls||[],...n.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...n.ignoreErrors||[],...e.disableErrorDefaults?[]:CF],ignoreTransactions:[...e.ignoreTransactions||[],...n.ignoreTransactions||[],...e.disableTransactionDefaults?[]:kF],ignoreInternal:e.ignoreInternal!==void 0?e.ignoreInternal:!0}}function xF(e,n){return n.ignoreInternal&&DF(e)?(U&&x.warn(`Event dropped due to being internal Sentry Error.
Event: ${Le(e)}`),!0):TF(e,n.ignoreErrors)?(U&&x.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Le(e)}`),!0):OF(e,n.ignoreTransactions)?(U&&x.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Le(e)}`),!0):IF(e,n.denyUrls)?(U&&x.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Le(e)}.
Url: ${so(e)}`),!0):RF(e,n.allowUrls)?!1:(U&&x.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Le(e)}.
Url: ${so(e)}`),!0)}function TF(e,n){return e.type||!n||!n.length?!1:PF(e).some(t=>Qt(t,n))}function OF(e,n){if(e.type!=="transaction"||!n||!n.length)return!1;const t=e.transaction;return t?Qt(t,n):!1}function IF(e,n){if(!n||!n.length)return!1;const t=so(e);return t?Qt(t,n):!1}function RF(e,n){if(!n||!n.length)return!0;const t=so(e);return t?Qt(t,n):!0}function PF(e){const n=[];e.message&&n.push(e.message);let t;try{t=e.exception.values[e.exception.values.length-1]}catch{}return t&&t.value&&(n.push(t.value),t.type&&n.push(`${t.type}: ${t.value}`)),U&&n.length===0&&x.error(`Could not extract message for event ${Le(e)}`),n}function DF(e){try{return e.exception.values[0].type==="SentryError"}catch{}return!1}function NF(e=[]){for(let n=e.length-1;n>=0;n--){const t=e[n];if(t&&t.filename!=="<anonymous>"&&t.filename!=="[native code]")return t.filename||null}return null}function so(e){try{let n;try{n=e.exception.values[0].stacktrace.frames}catch{}return n?NF(n):null}catch{return U&&x.error(`Cannot extract url for event ${Le(e)}`),null}}function rl(e,n,t=250,o,r,i,c){if(!i.exception||!i.exception.values||!c||!Ve(c.originalException,Error))return;const a=i.exception.values.length>0?i.exception.values[i.exception.values.length-1]:void 0;a&&(i.exception.values=MF(zr(e,n,r,c.originalException,o,i.exception.values,a,0),t))}function zr(e,n,t,o,r,i,c,a){if(i.length>=t+1)return i;let s=[...i];if(Ve(o[r],Error)){il(c,a);const l=e(n,o[r]),A=s.length;cl(l,r,A,a),s=zr(e,n,t,o[r],r,[l,...s],l,A)}return Array.isArray(o.errors)&&o.errors.forEach((l,A)=>{if(Ve(l,Error)){il(c,a);const f=e(n,l),E=s.length;cl(f,`errors[${A}]`,E,a),s=zr(e,n,t,l,r,[f,...s],f,E)}}),s}function il(e,n){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,...e.type==="AggregateError"&&{is_exception_group:!0},exception_id:n}}function cl(e,n,t,o){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,type:"chained",source:n,exception_id:t,parent_id:o}}function MF(e,n){return e.map(t=>(t.value&&(t.value=vn(t.value,n)),t))}var LF,jF,UF,JF,$F,qF,HF;function al(e,n){return e(n.stack||"",1)}function sl(e,n){const t={type:n.name||n.constructor.name,value:n.message},o=al(e,n);return o.length&&(t.stacktrace={frames:o}),t}function zF(e){if("name"in e&&typeof e.name=="string"){let n=`'${e.name}' captured as exception`;return"message"in e&&typeof e.message=="string"&&(n+=` with message '${e.message}'`),n}else return"message"in e&&typeof e.message=="string"?e.message:`Object captured as exception with keys: ${HF(e)}`}function yS(e,n,t,o){const r=typeof e=="function"?e().getClient():e;let i=t;const a=o&&o.data&&o.data.mechanism||{handled:!0,type:"generic"};let s;if(!LF(t)){if(jF(t)){const A=r&&r.getOptions().normalizeDepth;s={__serialized__:qF(t,A)};const f=zF(t);i=o&&o.syntheticException||new Error(f),i.message=f}else i=o&&o.syntheticException||new Error(t),i.message=t;a.synthetic=!0}const l={exception:{values:[sl(n,i)]}};return s&&(l.extra=s),JF(l,void 0,void 0),$F(l,a),{...l,event_id:o&&o.event_id}}function BS(e,n,t="info",o,r){const i={event_id:o&&o.event_id,level:t};if(r&&o&&o.syntheticException){const c=al(e,o.syntheticException);c.length&&(i.exception={values:[{value:n,stacktrace:{frames:c}}]})}if(UF(n)){const{__sentry_template_string__:c,__sentry_template_values__:a}=n;return i.logentry={message:c,params:a},i}return i.message=n,i}const GF="cause",WF=5,ll="LinkedErrors",KF=(e={})=>{const n=e.limit||WF,t=e.key||GF;return{name:ll,setupOnce(){},preprocessEvent(o,r,i){const c=i.getOptions();rl(sl,c.stackParser,c.maxValueLength,t,n,o,r)}}},YF=he(ll,KF),VF=_,j=L;let Gr=0;function fl(){return Gr>0}function XF(){Gr++,setTimeout(()=>{Gr--})}function Sn(e,n={},t){if(typeof e!="function")return e;try{const r=e.__sentry_wrapped__;if(r)return r;if(Ir(e))return e}catch{return e}const o=function(){const r=Array.prototype.slice.call(arguments);try{t&&typeof t=="function"&&t.apply(this,arguments);const i=r.map(c=>Sn(c,n));return e.apply(this,i)}catch(i){throw XF(),qs(c=>{c.addEventProcessor(a=>(n.mechanism&&(Dr(a,void 0,void 0),nt(a,n.mechanism)),a.extra={...a.extra,arguments:r},a)),Js(i)}),i}};try{for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o[r]=e[r])}catch{}Es(o,e),et(e,"__sentry_wrapped__",o);try{Object.getOwnPropertyDescriptor(o,"name").configurable&&Object.defineProperty(o,"name",{get(){return e.name}})}catch{}return o}const xn={},Al={};function Qe(e,n){xn[e]=xn[e]||[],xn[e].push(n)}function vS(){Object.keys(xn).forEach(e=>{xn[e]=void 0})}function en(e,n){Al[e]||(n(),Al[e]=!0)}function me(e,n){const t=e&&xn[e];if(t)for(const o of t)try{o(n)}catch(r){Qn&&x.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${je(o)}
Error:`,r)}}let lo=null;function ZF(e){const n="error";Qe(n,e),en(n,QF)}function QF(){lo=L.onerror,L.onerror=function(e,n,t,o,r){return me("error",{column:o,error:r,line:t,msg:e,url:n}),lo&&!lo.__SENTRY_LOADER__?lo.apply(this,arguments):!1},L.onerror.__SENTRY_INSTRUMENTED__=!0}let fo=null;function ev(e){const n="unhandledrejection";Qe(n,e),en(n,nv)}function nv(){fo=L.onunhandledrejection,L.onunhandledrejection=function(e){return me("unhandledrejection",e),fo&&!fo.__SENTRY_LOADER__?fo.apply(this,arguments):!0},L.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const De=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;function ul(e,n){const t=Kr(e,n),o={type:n&&n.name,value:iv(n)};return t.length&&(o.stacktrace={frames:t}),o.type===void 0&&o.value===""&&(o.value="Unrecoverable error caught"),o}function tv(e,n,t,o){const r=te(),i=r&&r.getOptions().normalizeDepth,c={exception:{values:[{type:Kt(n)?n.constructor.name:o?"UnhandledRejection":"Error",value:sv(n,{isUnhandledRejection:o})}]},extra:{__serialized__:Ls(n,i)}};if(t){const a=Kr(e,t);a.length&&(c.exception.values[0].stacktrace={frames:a})}return c}function Wr(e,n){return{exception:{values:[ul(e,n)]}}}function Kr(e,n){const t=n.stacktrace||n.stack||"",o=rv(n);try{return e(t,o)}catch{}return[]}const ov=/Minified React error #\d+;/i;function rv(e){if(e){if(typeof e.framesToPop=="number")return e.framesToPop;if(ov.test(e.message))return 1}return 0}function iv(e){const n=e&&e.message;return n?n.error&&typeof n.error.message=="string"?n.error.message:n:"No error message"}function cv(e,n,t,o){const r=t&&t.syntheticException||void 0,i=Yr(e,n,r,o);return nt(i),i.level="error",t&&t.event_id&&(i.event_id=t.event_id),Cn(i)}function av(e,n,t="info",o,r){const i=o&&o.syntheticException||void 0,c=Vr(e,n,i,r);return c.level=t,o&&o.event_id&&(c.event_id=o.event_id),Cn(c)}function Yr(e,n,t,o,r){let i;if(wr(n)&&n.error)return Wr(e,n.error);if(ss(n)||EB(n)){const c=n;if("stack"in n)i=Wr(e,n);else{const a=c.name||(ss(c)?"DOMError":"DOMException"),s=c.message?`${a}: ${c.message}`:a;i=Vr(e,s,t,o),Dr(i,s)}return"code"in c&&(i.tags={...i.tags,"DOMException.code":`${c.code}`}),i}return as(n)?Wr(e,n):Bn(n)||Kt(n)?(i=tv(e,n,t,r),nt(i,{synthetic:!0}),i):(i=Vr(e,n,t,o),Dr(i,`${n}`,void 0),nt(i,{synthetic:!0}),i)}function Vr(e,n,t,o){const r={};if(o&&t){const i=Kr(e,t);i.length&&(r.exception={values:[{value:n,stacktrace:{frames:i}}]})}if(Sr(n)){const{__sentry_template_string__:i,__sentry_template_values__:c}=n;return r.logentry={message:i,params:c},r}return r.message=n,r}function sv(e,{isUnhandledRejection:n}){const t=wB(e),o=n?"promise rejection":"exception";return wr(e)?`Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``:Kt(e)?`Event \`${lv(e)}\` (type=${e.type}) captured as ${o}`:`Object captured as ${o} with keys: ${t}`}function lv(e){try{const n=Object.getPrototypeOf(e);return n?n.constructor.name:void 0}catch{}}const El="GlobalHandlers",dl=(e={})=>{const n={onerror:!0,onunhandledrejection:!0,...e};return{name:El,setupOnce(){Error.stackTraceLimit=50},setup(t){n.onerror&&(Av(t),pl("onerror")),n.onunhandledrejection&&(uv(t),pl("onunhandledrejection"))}}},fv=he(El,dl);function Av(e){ZF(n=>{const{stackParser:t,attachStacktrace:o}=_l();if(te()!==e||fl())return;const{msg:r,url:i,line:c,column:a,error:s}=n,l=s===void 0&&Te(r)?gv(r,i,c,a):gl(Yr(t,s||r,void 0,o,!1),i,c,a);l.level="error",$s(l,{originalException:s,mechanism:{handled:!1,type:"onerror"}})})}function uv(e){ev(n=>{const{stackParser:t,attachStacktrace:o}=_l();if(te()!==e||fl())return;const r=Ev(n),i=xr(r)?dv(r):Yr(t,r,void 0,o,!0);i.level="error",$s(i,{originalException:r,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function Ev(e){if(xr(e))return e;const n=e;try{if("reason"in n)return n.reason;if("detail"in n&&"reason"in n.detail)return n.detail.reason}catch{}return e}function dv(e){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(e)}`}]}}}function gv(e,n,t,o){const r=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let i=wr(e)?e.message:e,c="Error";const a=i.match(r);return a&&(c=a[1],i=a[2]),gl({exception:{values:[{type:c,value:i}]}},n,t,o)}function gl(e,n,t,o){const r=e.exception=e.exception||{},i=r.values=r.values||[],c=i[0]=i[0]||{},a=c.stacktrace=c.stacktrace||{},s=a.frames=a.frames||[],l=isNaN(parseInt(o,10))?void 0:o,A=isNaN(parseInt(t,10))?void 0:t,f=Te(n)&&n.length>0?n:mB();return s.length===0&&s.push({colno:l,filename:f,function:"?",in_app:!0,lineno:A}),e}function pl(e){De&&x.log(`Global Handler attached: ${e}`)}function _l(){const e=te();return e&&e.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const pv=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],hl="TryCatch",bl=(e={})=>{const n={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e};return{name:hl,setupOnce(){n.setTimeout&&oe(j,"setTimeout",ml),n.setInterval&&oe(j,"setInterval",ml),n.requestAnimationFrame&&oe(j,"requestAnimationFrame",hv),n.XMLHttpRequest&&"XMLHttpRequest"in j&&oe(XMLHttpRequest.prototype,"send",bv);const t=n.eventTarget;t&&(Array.isArray(t)?t:pv).forEach(mv)}}},_v=he(hl,bl);function ml(e){return function(...n){const t=n[0];return n[0]=Sn(t,{mechanism:{data:{function:je(e)},handled:!1,type:"instrument"}}),e.apply(this,n)}}function hv(e){return function(n){return e.apply(this,[Sn(n,{mechanism:{data:{function:"requestAnimationFrame",handler:je(e)},handled:!1,type:"instrument"}})])}}function bv(e){return function(...n){const t=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(r=>{r in t&&typeof t[r]=="function"&&oe(t,r,function(i){const c={mechanism:{data:{function:r,handler:je(i)},handled:!1,type:"instrument"}},a=Ir(i);return a&&(c.mechanism.data.handler=je(a)),Sn(i,c)})}),e.apply(this,n)}}function mv(e){const n=j,t=n[e]&&n[e].prototype;!t||!t.hasOwnProperty||!t.hasOwnProperty("addEventListener")||(oe(t,"addEventListener",function(o){return function(r,i,c){try{typeof i.handleEvent=="function"&&(i.handleEvent=Sn(i.handleEvent,{mechanism:{data:{function:"handleEvent",handler:je(i),target:e},handled:!1,type:"instrument"}}))}catch{}return o.apply(this,[r,Sn(i,{mechanism:{data:{function:"addEventListener",handler:je(i),target:e},handled:!1,type:"instrument"}}),c])}}),oe(t,"removeEventListener",function(o){return function(r,i,c){const a=i;try{const s=a&&a.__sentry_wrapped__;s&&o.call(this,r,s,c)}catch{}return o.call(this,r,a,c)}}))}function yv(e){const n="console";Qe(n,e),en(n,Bv)}function Bv(){"console"in L&&Or.forEach(function(e){e in L.console&&oe(L.console,e,function(n){return Xt[e]=n,function(...t){me("console",{args:t,level:e});const r=Xt[e];r&&r.apply(L.console,t)}})})}const Tn=L,Fv=1e3;let yl,Xr,Zr;function vv(e){const n="dom";Qe(n,e),en(n,Cv)}function Cv(){if(!Tn.document)return;const e=me.bind(null,"dom"),n=Bl(e,!0);Tn.document.addEventListener("click",n,!1),Tn.document.addEventListener("keypress",n,!1),["EventTarget","Node"].forEach(t=>{const o=Tn[t]&&Tn[t].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(oe(o,"addEventListener",function(r){return function(i,c,a){if(i==="click"||i=="keypress")try{const s=this,l=s.__sentry_instrumentation_handlers__=s.__sentry_instrumentation_handlers__||{},A=l[i]=l[i]||{refCount:0};if(!A.handler){const f=Bl(e);A.handler=f,r.call(this,i,f,a)}A.refCount++}catch{}return r.call(this,i,c,a)}}),oe(o,"removeEventListener",function(r){return function(i,c,a){if(i==="click"||i=="keypress")try{const s=this,l=s.__sentry_instrumentation_handlers__||{},A=l[i];A&&(A.refCount--,A.refCount<=0&&(r.call(this,i,A.handler,a),A.handler=void 0,delete l[i]),Object.keys(l).length===0&&delete s.__sentry_instrumentation_handlers__)}catch{}return r.call(this,i,c,a)}}))})}function kv(e){if(e.type!==Xr)return!1;try{if(!e.target||e.target._sentryId!==Zr)return!1}catch{}return!0}function wv(e,n){return e!=="keypress"?!1:!n||!n.tagName?!0:!(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)}function Bl(e,n=!1){return t=>{if(!t||t._sentryCaptured)return;const o=Sv(t);if(wv(t.type,o))return;et(t,"_sentryCaptured",!0),o&&!o._sentryId&&et(o,"_sentryId",Ee());const r=t.type==="keypress"?"input":t.type;kv(t)||(e({event:t,name:r,global:n}),Xr=t.type,Zr=o?o._sentryId:void 0),clearTimeout(yl),yl=Tn.setTimeout(()=>{Zr=void 0,Xr=void 0},Fv)}}function Sv(e){try{return e.target}catch{return null}}const xv=L,rt="__sentry_xhr_v3__";function Tv(e){const n="xhr";Qe(n,e),en(n,Ov)}function Ov(){if(!xv.XMLHttpRequest)return;const e=XMLHttpRequest.prototype;oe(e,"open",function(n){return function(...t){const o=Date.now(),r=Te(t[0])?t[0].toUpperCase():void 0,i=Iv(t[1]);if(!r||!i)return n.apply(this,t);this[rt]={method:r,url:i,request_headers:{}},r==="POST"&&i.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const c=()=>{const a=this[rt];if(a&&this.readyState===4){try{a.status_code=this.status}catch{}const s={args:[r,i],endTimestamp:Date.now(),startTimestamp:o,xhr:this};me("xhr",s)}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?oe(this,"onreadystatechange",function(a){return function(...s){return c(),a.apply(this,s)}}):this.addEventListener("readystatechange",c),oe(this,"setRequestHeader",function(a){return function(...s){const[l,A]=s,f=this[rt];return f&&Te(l)&&Te(A)&&(f.request_headers[l.toLowerCase()]=A),a.apply(this,s)}}),n.apply(this,t)}}),oe(e,"send",function(n){return function(...t){const o=this[rt];if(!o)return n.apply(this,t);t[0]!==void 0&&(o.body=t[0]);const r={args:[o.method,o.url],startTimestamp:Date.now(),xhr:this};return me("xhr",r),n.apply(this,t)}})}function Iv(e){if(Te(e))return e;try{return e.toString()}catch{}}const Ao=Tr();function wS(){try{return new ErrorEvent(""),!0}catch{return!1}}function SS(){try{return new DOMError(""),!0}catch{return!1}}function xS(){try{return new DOMException(""),!0}catch{return!1}}function Qr(){if(!("fetch"in Ao))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function ei(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function Rv(){if(typeof EdgeRuntime=="string")return!0;if(!Qr())return!1;if(ei(Ao.fetch))return!0;let e=!1;const n=Ao.document;if(n&&typeof n.createElement=="function")try{const t=n.createElement("iframe");t.hidden=!0,n.head.appendChild(t),t.contentWindow&&t.contentWindow.fetch&&(e=ei(t.contentWindow.fetch)),n.head.removeChild(t)}catch(t){Qn&&x.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return e}function TS(){return"ReportingObserver"in Ao}function OS(){if(!Qr())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function Pv(e){const n="fetch";Qe(n,e),en(n,Dv)}function Dv(){Rv()&&oe(L,"fetch",function(e){return function(...n){const{method:t,url:o}=Nv(n),r={args:n,fetchData:{method:t,url:o},startTimestamp:Date.now()};return me("fetch",{...r}),e.apply(L,n).then(i=>{const c={...r,endTimestamp:Date.now(),response:i};return me("fetch",c),i},i=>{const c={...r,endTimestamp:Date.now(),error:i};throw me("fetch",c),i})}})}function ni(e,n){return!!e&&typeof e=="object"&&!!e[n]}function Fl(e){return typeof e=="string"?e:e?ni(e,"url")?e.url:e.toString?e.toString():"":""}function Nv(e){if(e.length===0)return{method:"GET",url:""};if(e.length===2){const[t,o]=e;return{url:Fl(t),method:ni(o,"method")?String(o.method).toUpperCase():"GET"}}const n=e[0];return{url:Fl(n),method:ni(n,"method")?String(n.method).toUpperCase():"GET"}}const uo=Tr();function Mv(){const e=uo.chrome,n=e&&e.app&&e.app.runtime,t="history"in uo&&!!uo.history.pushState&&!!uo.history.replaceState;return!n&&t}const it=L;let Eo;function vl(e){const n="history";Qe(n,e),en(n,Lv)}function Lv(){if(!Mv())return;const e=it.onpopstate;it.onpopstate=function(...t){const o=it.location.href,r=Eo;if(Eo=o,me("history",{from:r,to:o}),e)try{return e.apply(this,t)}catch{}};function n(t){return function(...o){const r=o.length>2?o[2]:void 0;if(r){const i=Eo,c=String(r);Eo=c,me("history",{from:i,to:c})}return t.apply(this,o)}}oe(it.history,"pushState",n),oe(it.history,"replaceState",n)}const jv=["fatal","error","warning","log","info","debug"];function IS(e){return Cl(e)}function Cl(e){return e==="warn"?"warning":jv.includes(e)?e:"log"}function ti(e){if(!e)return{};const n=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!n)return{};const t=n[6]||"",o=n[8]||"";return{host:n[4],path:n[5],protocol:n[2],search:t,hash:o,relative:n[5]+t+o}}function RS(e){return e.split(/[\?#]/,1)[0]}function PS(e){return e.split(/\\?\//).filter(n=>n.length>0&&n!==",").length}function DS(e){const{protocol:n,host:t,path:o}=e,r=t&&t.replace(/^.*@/,"[filtered]:[filtered]@").replace(/(:80)$/,"").replace(/(:443)$/,"")||"";return`${n?`${n}://`:""}${r}${o}`}const go=1024,kl="Breadcrumbs",wl=(e={})=>{const n={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e};return{name:kl,setupOnce(){},setup(t){n.console&&yv(qv(t)),n.dom&&vv($v(t,n.dom)),n.xhr&&Tv(Hv(t)),n.fetch&&Pv(zv(t)),n.history&&vl(Gv(t)),n.sentry&&t.on&&t.on("beforeSendEvent",Jv(t))}}},Uv=he(kl,wl);function Jv(e){return function(t){te()===e&&Ze({category:`sentry.${t.type==="transaction"?"transaction":"event"}`,event_id:t.event_id,level:t.level,message:Le(t)},{event:t})}}function $v(e,n){return function(o){if(te()!==e)return;let r,i,c=typeof n=="object"?n.serializeAttribute:void 0,a=typeof n=="object"&&typeof n.maxStringLength=="number"?n.maxStringLength:void 0;a&&a>go&&(De&&x.warn(`\`dom.maxStringLength\` cannot exceed ${go}, but a value of ${a} was configured. Sentry will use ${go} instead.`),a=go),typeof c=="string"&&(c=[c]);try{const l=o.event,A=Wv(l)?l.target:l;r=As(A,{keyAttrs:c,maxStringLength:a}),i=yB(A)}catch{r="<unknown>"}if(r.length===0)return;const s={category:`ui.${o.name}`,message:r};i&&(s.data={"ui.component_name":i}),Ze(s,{event:o.event,name:o.name,global:o.global})}}function qv(e){return function(t){if(te()!==e)return;const o={category:"console",data:{arguments:t.args,logger:"console"},level:Cl(t.level),message:us(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)o.message=`Assertion failed: ${us(t.args.slice(1)," ")||"console.assert"}`,o.data.arguments=t.args.slice(1);else return;Ze(o,{input:t.args,level:t.level})}}function Hv(e){return function(t){if(te()!==e)return;const{startTimestamp:o,endTimestamp:r}=t,i=t.xhr[rt];if(!o||!r||!i)return;const{method:c,url:a,status_code:s,body:l}=i,A={method:c,url:a,status_code:s},f={xhr:t.xhr,input:l,startTimestamp:o,endTimestamp:r};Ze({category:"xhr",data:A,type:"http"},f)}}function zv(e){return function(t){if(te()!==e)return;const{startTimestamp:o,endTimestamp:r}=t;if(r&&!(t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"))if(t.error){const i=t.fetchData,c={data:t.error,input:t.args,startTimestamp:o,endTimestamp:r};Ze({category:"fetch",data:i,level:"error",type:"http"},c)}else{const i=t.response,c={...t.fetchData,status_code:i&&i.status},a={input:t.args,response:i,startTimestamp:o,endTimestamp:r};Ze({category:"fetch",data:c,type:"http"},a)}}}function Gv(e){return function(t){if(te()!==e)return;let o=t.from,r=t.to;const i=ti(j.location.href);let c=o?ti(o):void 0;const a=ti(r);(!c||!c.path)&&(c=i),i.protocol===a.protocol&&i.host===a.host&&(r=a.relative),i.protocol===c.protocol&&i.host===c.host&&(o=c.relative),Ze({category:"navigation",data:{from:o,to:r}})}}function Wv(e){return!!e&&!!e.target}const Kv="cause",Yv=5,Sl="LinkedErrors",xl=(e={})=>{const n=e.limit||Yv,t=e.key||Kv;return{name:Sl,setupOnce(){},preprocessEvent(o,r,i){const c=i.getOptions();rl(ul,c.stackParser,c.maxValueLength,t,n,o,r)}}},Vv=he(Sl,xl),Tl="HttpContext",Ol=()=>({name:Tl,setupOnce(){},preprocessEvent(e){if(!j.navigator&&!j.location&&!j.document)return;const n=e.request&&e.request.url||j.location&&j.location.href,{referrer:t}=j.document||{},{userAgent:o}=j.navigator||{},r={...e.request&&e.request.headers,...t&&{Referer:t},...o&&{"User-Agent":o}},i={...e.request,...n&&{url:n},headers:r};e.request=i}}),Xv=he(Tl,Ol),Il="Dedupe",Rl=()=>{let e;return{name:Il,setupOnce(){},processEvent(n){if(n.type)return n;try{if(Qv(n,e))return De&&x.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return e=n}}},Zv=he(Il,Rl);function Qv(e,n){return n?!!(eC(e,n)||nC(e,n)):!1}function eC(e,n){const t=e.message,o=n.message;return!(!t&&!o||t&&!o||!t&&o||t!==o||!Dl(e,n)||!Pl(e,n))}function nC(e,n){const t=Nl(n),o=Nl(e);return!(!t||!o||t.type!==o.type||t.value!==o.value||!Dl(e,n)||!Pl(e,n))}function Pl(e,n){let t=Ml(e),o=Ml(n);if(!t&&!o)return!0;if(t&&!o||!t&&o||(t=t,o=o,o.length!==t.length))return!1;for(let r=0;r<o.length;r++){const i=o[r],c=t[r];if(i.filename!==c.filename||i.lineno!==c.lineno||i.colno!==c.colno||i.function!==c.function)return!1}return!0}function Dl(e,n){let t=e.fingerprint,o=n.fingerprint;if(!t&&!o)return!0;if(t&&!o||!t&&o)return!1;t=t,o=o;try{return t.join("")===o.join("")}catch{return!1}}function Nl(e){return e.exception&&e.exception.values&&e.exception.values[0]}function Ml(e){const n=e.exception;if(n)try{return n.values[0].stacktrace.frames}catch{return}}let Ll={};j.Sentry&&j.Sentry.Integrations&&(Ll=j.Sentry.Integrations);const tC={...Ll,...VF,...d},oC="sentry-ipc";var Ue;(function(e){e.RENDERER_START="sentry-electron.renderer-start",e.EVENT="sentry-electron.event",e.SCOPE="sentry-electron.scope",e.ENVELOPE="sentry-electron.envelope",e.STATUS="sentry-electron.status",e.ADD_METRIC="sentry-electron.add-metric"})(Ue||(Ue={}));const rC="sentry-electron-renderer-id";function On(e){return`${oC}://${e}/sentry_key`}function iC(){if(window.__SENTRY_IPC__)return window.__SENTRY_IPC__;{x.log("IPC was not configured in preload script, falling back to custom protocol and fetch");const e=window.__SENTRY_RENDERER_ID__=Ee(),n={[rC]:e};return{sendRendererStart:()=>{fetch(On(Ue.RENDERER_START),{method:"POST",body:"",headers:n}).catch(()=>{console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`)})},sendScope:t=>{fetch(On(Ue.SCOPE),{method:"POST",body:t,headers:n}).catch(()=>{})},sendEvent:t=>{fetch(On(Ue.EVENT),{method:"POST",body:t,headers:n}).catch(()=>{})},sendEnvelope:t=>{fetch(On(Ue.ENVELOPE),{method:"POST",body:t,headers:n}).catch(()=>{})},sendStatus:t=>{fetch(On(Ue.STATUS),{method:"POST",body:JSON.stringify({status:t}),headers:n}).catch(()=>{})},sendAddMetric:t=>{fetch(On(Ue.ADD_METRIC),{method:"POST",body:JSON.stringify(t),headers:n}).catch(()=>{})}}}}let po;function ct(){return po||(po=iC(),po.sendRendererStart()),po}const jl="ScopeToMain",Ul=()=>({name:jl,setupOnce(){},setup(){const e=Pe();if(e){const n=ct();e.addScopeListener(t=>{n.sendScope(JSON.stringify(Ce(t.getScopeData(),20,2e3))),e.clearBreadcrumbs(),e.clearAttachments()})}}}),cC=he(jl,Ul);class _o{constructor(){this.name=_o.id}setupOnce(n){const t=ct();n(o=>(o.breadcrumbs=o.breadcrumbs||[],o.environment=void 0,t.sendEvent(JSON.stringify(Ce(o,20,2e3))),null))}}_o.id="EventToMain";const Jl="c",$l="g",oi="s",ql="d",aC=5e3,US=1e4,JS=1e4;function sC(e,n,t,o){const r=Object.entries(be(o)).sort((i,c)=>i[0].localeCompare(c[0]));return`${e}${n}${t}${r}`}function lC(e){let n=0;for(let t=0;t<e.length;t++){const o=e.charCodeAt(t);n=(n<<5)-n+o,n&=n}return n>>>0}function fC(e){let n="";for(const t of e){const o=Object.entries(t.tags),r=o.length>0?`|#${o.map(([i,c])=>`${i}:${c}`).join(",")}`:"";n+=`${t.name}@${t.unit}:${t.metric}|${t.metricType}${r}|T${t.timestamp}
`}return n}function AC(e){return e.replace(/[^\w]+/gi,"_")}function uC(e){return e.replace(/[^\w\-.]+/gi,"_")}function EC(e){return e.replace(/[^\w\-./]+/gi,"")}const dC=[[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\\","\\\\"],["|","\\u{7c}"],[",","\\u{2c}"]];function gC(e){for(const[n,t]of dC)if(e===n)return t;return e}function pC(e){return[...e].reduce((n,t)=>n+gC(t),"")}function _C(e){const n={};for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const o=EC(t);n[o]=pC(String(e[t]))}return n}class hC{constructor(n){this._value=n}get weight(){return 1}add(n){this._value+=n}toString(){return`${this._value}`}}class bC{constructor(n){this._last=n,this._min=n,this._max=n,this._sum=n,this._count=1}get weight(){return 5}add(n){this._last=n,n<this._min&&(this._min=n),n>this._max&&(this._max=n),this._sum+=n,this._count++}toString(){return`${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`}}class mC{constructor(n){this._value=[n]}get weight(){return this._value.length}add(n){this._value.push(n)}toString(){return this._value.join(":")}}class yC{constructor(n){this.first=n,this._value=new Set([n])}get weight(){return this._value.size}add(n){this._value.add(n)}toString(){return Array.from(this._value).map(n=>typeof n=="string"?lC(n):n).join(":")}}const BC={[Jl]:hC,[$l]:bC,[ql]:mC,[oi]:yC};var FC,vC,Hl,CC,kC,ho,ri,wC,zl,SC,xC,TC,ii,Gl,ci,Wl;function $S(e,n,t=()=>{},o=()=>{}){const r=ho(),i=ii(),c=i.getSpan(),a=mo(e),s=bo(r,{parentSpan:c,spanContext:a,forceTransaction:!1,scope:i});return i.setSpan(s),ci(()=>n(s),l=>{s&&s.setStatus("internal_error"),t(l,s)},()=>{s&&s.end(),i.setSpan(c),o()})}function qS(e,n){const t=mo(e);return ri(()=>Gl(e.scope,o=>{const r=ho(),i=o.getSpan(),a=e.onlyIfParent&&!i?void 0:bo(r,{parentSpan:i,spanContext:t,forceTransaction:e.forceTransaction,scope:o});return ci(()=>n(a),()=>{if(a){const{status:s}=zl(a);(!s||s==="ok")&&a.setStatus("internal_error")}},()=>a&&a.end())}))}const HS=null;function zS(e,n){const t=mo(e);return ri(()=>Gl(e.scope,o=>{const r=ho(),i=o.getSpan(),a=e.onlyIfParent&&!i?void 0:bo(r,{parentSpan:i,spanContext:t,forceTransaction:e.forceTransaction,scope:o});function s(){a&&a.end()}return ci(()=>n(a,s),()=>{if(a&&a.isRecording()){const{status:l}=zl(a);(!l||l==="ok")&&a.setStatus("internal_error")}})}))}function GS(e){if(!Wl())return;const n=mo(e),t=ho(),o=e.scope?e.scope.getSpan():Kl();if(e.onlyIfParent&&!o)return;const c=(e.scope||ii()).clone();return bo(t,{parentSpan:o,spanContext:n,forceTransaction:e.forceTransaction,scope:c})}function Kl(){return Pe().getSpan()}const WS=({sentryTrace:e,baggage:n},t)=>{const o=ii(),{traceparentData:r,dynamicSamplingContext:i,propagationContext:c}=CC(e,n);o.setPropagationContext(c),kC&&r&&FC.log(`[Tracing] Continuing trace ${r.traceId}.`);const a={...r,metadata:vC({dynamicSamplingContext:i})};return t?ri(()=>t(a)):a};function bo(e,{parentSpan:n,spanContext:t,forceTransaction:o,scope:r}){if(!Wl())return;const i=wC();let c;if(n&&!o)c=n.startChild(t);else if(n){const a=TC(n),{traceId:s,spanId:l}=n.spanContext(),A=SC(n);c=e.startTransaction({traceId:s,parentSpanId:l,parentSampled:A,...t,metadata:{dynamicSamplingContext:a,...t.metadata}})}else{const{traceId:a,dsc:s,parentSpanId:l,sampled:A}={...i.getPropagationContext(),...r.getPropagationContext()};c=e.startTransaction({traceId:a,parentSpanId:l,parentSampled:A,...t,metadata:{dynamicSamplingContext:s,...t.metadata}})}return r.setSpan(c),OC(c,r,i),c}function mo(e){if(e.startTime){const n={...e};return n.startTimestamp=xC(e.startTime),delete n.startTime,n}return e}const Yl="_sentryScope",Vl="_sentryIsolationScope";function OC(e,n,t){e&&(Hl(e,Vl,t),Hl(e,Yl,n))}function KS(e){return{scope:e[Yl],isolationScope:e[Vl]}}var IC;let at;function Xl(e){return at?at.get(e):void 0}function YS(e){const n=Xl(e);if(!n)return;const t={};for(const[,[o,r]]of n)t[o]||(t[o]=[]),t[o].push(IC(r));return t}function RC(e,n,t,o,r,i){const c=Kl();if(c){const a=Xl(c)||new Map,s=`${e}:${n}@${o}`,l=a.get(i);if(l){const[,A]=l;a.set(i,[s,{min:Math.min(A.min,t),max:Math.max(A.max,t),count:A.count+=1,sum:A.sum+=t,tags:A.tags}])}else a.set(i,[s,{min:t,max:t,count:1,sum:t,tags:r}]);at||(at=new WeakMap),at.set(c,a)}}class PC{constructor(n){this._client=n,this._buckets=new Map,this._interval=setInterval(()=>this.flush(),aC)}add(n,t,o,r="none",i={},c=Nr()){const a=Math.floor(c),s=uC(t),l=_C(i),A=AC(r),f=sC(n,s,A,l);let E=this._buckets.get(f);const u=E&&n===oi?E.metric.weight:0;E?(E.metric.add(o),E.timestamp<a&&(E.timestamp=a)):(E={metric:new BC[n](o),timestamp:a,metricType:n,name:s,unit:A,tags:l},this._buckets.set(f,E));const p=typeof o=="string"?E.metric.weight-u:o;RC(n,s,p,A,i,f)}flush(){if(this._buckets.size!==0){if(this._client.captureAggregateMetrics){const n=Array.from(this._buckets).map(([,t])=>t);this._client.captureAggregateMetrics(n)}this._buckets.clear()}}close(){clearInterval(this._interval),this.flush()}}const Zl="MetricsAggregator",Ql=()=>({name:Zl,setupOnce(){},setup(e){e.metricsAggregator=new PC(e)}}),DC=he(Zl,Ql);function yo(e,n,t,o={}){const r=te(),i=Pe();if(r){if(!r.metricsAggregator){U&&x.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");return}const{unit:c,tags:a,timestamp:s}=o,{release:l,environment:A}=r.getOptions(),f=i.getTransaction(),E={};l&&(E.release=l),A&&(E.environment=A),f&&(E.transaction=kn(f).description||""),U&&x.log(`Adding value of ${t} to ${e} metric ${n}`),r.metricsAggregator.add(e,n,t,c,{...E,...a},s)}}function NC(e,n=1,t){yo(Jl,e,n,t)}function MC(e,n,t){yo(ql,e,n,t)}function LC(e,n,t){yo(oi,e,n,t)}function jC(e,n,t){yo($l,e,n,t)}const UC={increment:NC,distribution:MC,set:LC,gauge:jC,MetricsAggregator:DC,metricsAggregatorIntegration:Ql};class JC{constructor(){this._ipc=ct()}add(n,t,o,r,i,c){this._ipc.sendAddMetric({metricType:n,name:t,value:o,unit:r,tags:i,timestamp:c})}flush(){}close(){}toString(){return""}}const ef="MetricsAggregator",nf=()=>({name:ef,setupOnce(){},setup(e){e.metricsAggregator=new JC}}),$C=he(ef,nf);function qC(e,n){n.debug===!0&&(U?x.enable():Zt(()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})),Pe().update(n.initialScope);const o=new e(n);HC(o),zC(o)}function HC(e){const t=Re().getStackTop();t.client=e,t.scope.setClient(e)}function zC(e){e.init?e.init():e.setupIntegrations&&e.setupIntegrations()}const GC=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function WC(e){return e==="http"||e==="https"}function st(e,n=!1){const{host:t,path:o,pass:r,port:i,projectId:c,protocol:a,publicKey:s}=e;return`${a}://${s}${n&&r?`:${r}`:""}@${t}${i?`:${i}`:""}/${o&&`${o}/`}${c}`}function KC(e){const n=GC.exec(e);if(!n){Zt(()=>{console.error(`Invalid Sentry Dsn: ${e}`)});return}const[t,o,r="",i,c="",a]=n.slice(1);let s="",l=a;const A=l.split("/");if(A.length>1&&(s=A.slice(0,-1).join("/"),l=A.pop()),l){const f=l.match(/^\d+/);f&&(l=f[0])}return tf({host:i,pass:r,path:s,projectId:l,port:c,protocol:t,publicKey:o})}function tf(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function YC(e){if(!Qn)return!0;const{port:n,projectId:t,protocol:o}=e;return["protocol","publicKey","host","projectId"].find(c=>e[c]?!1:(x.error(`Invalid Sentry Dsn: ${c} missing`),!0))?!1:t.match(/^\d+$/)?WC(o)?n&&isNaN(parseInt(n,10))?(x.error(`Invalid Sentry Dsn: Invalid port ${n}`),!1):!0:(x.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),!1):(x.error(`Invalid Sentry Dsn: Invalid projectId ${t}`),!1)}function VC(e){const n=typeof e=="string"?KC(e):tf(e);if(!(!n||!YC(n)))return n}function In(e,n=[]){return[e,n]}function XC(e,n){const[t,o]=e;return[t,[...o,n]]}function ai(e,n){const t=e[1];for(const o of t){const r=o[0].type;if(n(o,r))return!0}return!1}function XS(e,n){return ai(e,(t,o)=>n.includes(o))}function si(e,n){return(n||new TextEncoder).encode(e)}function ZC(e,n){const[t,o]=e;let r=JSON.stringify(t);function i(c){typeof r=="string"?r=typeof c=="string"?r+c:[si(r,n),c]:r.push(typeof c=="string"?si(c,n):c)}for(const c of o){const[a,s]=c;if(i(`
${JSON.stringify(a)}
`),typeof s=="string"||s instanceof Uint8Array)i(s);else{let l;try{l=JSON.stringify(s)}catch{l=JSON.stringify(Ce(s))}i(l)}}return typeof r=="string"?r:QC(r)}function QC(e){const n=e.reduce((r,i)=>r+i.length,0),t=new Uint8Array(n);let o=0;for(const r of e)t.set(r,o),o+=r.length;return t}function ZS(e,n,t){let o=typeof e=="string"?n.encode(e):e;function r(s){const l=o.subarray(0,s);return o=o.subarray(s+1),l}function i(){let s=o.indexOf(10);return s<0&&(s=o.length),JSON.parse(t.decode(r(s)))}const c=i(),a=[];for(;o.length;){const s=i(),l=typeof s.length=="number"?s.length:void 0;a.push([s,l?r(l):i()])}return[c,a]}function e0(e,n){const t=typeof e.data=="string"?si(e.data,n):e.data;return[be({type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),t]}const n0={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket"};function of(e){return n0[e]}function rf(e){if(!e||!e.sdk)return;const{name:n,version:t}=e.sdk;return{name:n,version:t}}function t0(e,n,t,o){const r=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:e.event_id,sent_at:new Date().toISOString(),...n&&{sdk:n},...!!t&&o&&{dsn:st(o)},...r&&{trace:be({...r})}}}class we extends Error{constructor(n,t="warn"){super(n),this.message=n,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}var o0,r0;const i0="7";function cf(e){const n=e.protocol?`${e.protocol}:`:"",t=e.port?`:${e.port}`:"";return`${n}//${e.host}${t}${e.path?`/${e.path}`:""}/api/`}function c0(e){return`${cf(e)}${e.projectId}/envelope/`}function a0(e,n){return kB({sentry_key:e.publicKey,sentry_version:i0,...n&&{sentry_client:`${n.name}/${n.version}`}})}function s0(e,n={}){const t=typeof n=="string"?n:n.tunnel,o=typeof n=="string"||!n._metadata?void 0:n._metadata.sdk;return t||`${c0(e)}?${a0(e,o)}`}function QS(e,n){const t=o0(e);if(!t)return"";const o=`${cf(t)}embed/error-page/`;let r=`dsn=${r0(t)}`;for(const i in n)if(i!=="dsn"&&i!=="onClose")if(i==="user"){const c=n.user;if(!c)continue;c.name&&(r+=`&name=${encodeURIComponent(c.name)}`),c.email&&(r+=`&email=${encodeURIComponent(c.email)}`)}else r+=`&${encodeURIComponent(i)}=${encodeURIComponent(n[i])}`;return`${o}?${r}`}function l0(e,n){return n&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||n.name,e.sdk.version=e.sdk.version||n.version,e.sdk.integrations=[...e.sdk.integrations||[],...n.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...n.packages||[]]),e}function f0(e,n,t,o){const r=rf(t),i={sent_at:new Date().toISOString(),...r&&{sdk:r},...!!o&&n&&{dsn:st(n)}},c="aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()];return In(i,[c])}function A0(e,n,t,o){const r=rf(t),i=e.type&&e.type!=="replay_event"?e.type:"event";l0(e,t&&t.sdk);const c=t0(e,r,o,n);return delete e.sdkProcessingMetadata,In(c,[[{type:i},e]])}function u0(e,n,t,o){const r={sent_at:new Date().toISOString()};t&&t.sdk&&(r.sdk={name:t.sdk.name,version:t.sdk.version}),o&&n&&(r.dsn=st(n));const i=E0(e);return In(r,[i])}function E0(e){const n=fC(e);return[{type:"statsd",length:n.length},n]}var d0;const af="Not capturing exception because it's already been captured.";class g0{constructor(n){if(this._options=n,this._integrations={},this._integrationsInitialized=!1,this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],n.dsn?this._dsn=VC(n.dsn):U&&x.warn("No DSN provided, client will not send events."),this._dsn){const t=s0(this._dsn,n);this._transport=n.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...n.transportOptions,url:t})}}captureException(n,t,o){if(hs(n)){U&&x.log(af);return}let r=t&&t.event_id;return this._process(this.eventFromException(n,t).then(i=>this._captureEvent(i,t,o)).then(i=>{r=i})),r}captureMessage(n,t,o,r){let i=o&&o.event_id;const c=Sr(n)?n:String(n),a=xr(n)?this.eventFromMessage(c,t,o):this.eventFromException(n,o);return this._process(a.then(s=>this._captureEvent(s,o,r)).then(s=>{i=s})),i}captureEvent(n,t,o){if(t&&t.originalException&&hs(t.originalException)){U&&x.log(af);return}let r=t&&t.event_id;const c=(n.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(n,t,c||o).then(a=>{r=a})),r}captureSession(n){typeof n.release!="string"?U&&x.warn("Discarded session because of missing or non-string release"):(this.sendSession(n),Xe(n,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(n){const t=this._transport;return t?(this.metricsAggregator&&this.metricsAggregator.flush(),this._isClientDoneProcessing(n).then(o=>t.flush(n).then(r=>o&&r))):Cn(!0)}close(n){return this.flush(n).then(t=>(this.getOptions().enabled=!1,this.metricsAggregator&&this.metricsAggregator.close(),t))}getEventProcessors(){return this._eventProcessors}addEventProcessor(n){this._eventProcessors.push(n)}setupIntegrations(n){(n&&!this._integrationsInitialized||this._isEnabled()&&!this._integrationsInitialized)&&this._setupIntegrations()}init(){this._isEnabled()&&this._setupIntegrations()}getIntegrationById(n){return this.getIntegrationByName(n)}getIntegrationByName(n){return this._integrations[n]}getIntegration(n){try{return this._integrations[n.id]||null}catch{return U&&x.warn(`Cannot retrieve integration ${n.id} from the current Client`),null}}addIntegration(n){const t=this._integrations[n.name];Xs(this,n,this._integrations),t||Vs(this,[n])}sendEvent(n,t={}){this.emit("beforeSendEvent",n,t);let o=A0(n,this._dsn,this._options._metadata,this._options.tunnel);for(const i of t.attachments||[])o=XC(o,e0(i,this._options.transportOptions&&this._options.transportOptions.textEncoder));const r=this._sendEnvelope(o);r&&r.then(i=>this.emit("afterSendEvent",n,i),null)}sendSession(n){const t=f0(n,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}recordDroppedEvent(n,t,o){if(this._options.sendClientReports){const r=`${n}:${t}`;U&&x.log(`Adding outcome: "${r}"`),this._outcomes[r]=this._outcomes[r]+1||1}}captureAggregateMetrics(n){U&&x.log(`Flushing aggregated metrics, number of metrics: ${n.length}`);const t=u0(n,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}on(n,t){this._hooks[n]||(this._hooks[n]=[]),this._hooks[n].push(t)}emit(n,...t){this._hooks[n]&&this._hooks[n].forEach(o=>o(...t))}_setupIntegrations(){const{integrations:n}=this._options;this._integrations=BF(this,n),Vs(this,n),this._integrationsInitialized=!0}_updateSessionFromEvent(n,t){let o=!1,r=!1;const i=t.exception&&t.exception.values;if(i){r=!0;for(const s of i){const l=s.mechanism;if(l&&l.handled===!1){o=!0;break}}}const c=n.status==="ok";(c&&n.errors===0||c&&o)&&(Xe(n,{...o&&{status:"crashed"},errors:n.errors||Number(r||o)}),this.captureSession(n))}_isClientDoneProcessing(n){return new de(t=>{let o=0;const r=1,i=setInterval(()=>{this._numProcessing==0?(clearInterval(i),t(!0)):(o+=r,n&&o>=n&&(clearInterval(i),t(!1)))},r)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(n,t,o,r=ro()){const i=this.getOptions(),c=Object.keys(this._integrations);return!t.integrations&&c.length>0&&(t.integrations=c),this.emit("preprocessEvent",n,t),tF(i,n,t,o,this,r).then(a=>{if(a===null)return a;const s={...r.getPropagationContext(),...o?o.getPropagationContext():void 0};if(!(a.contexts&&a.contexts.trace)&&s){const{traceId:A,spanId:f,parentSpanId:E,dsc:u}=s;a.contexts={trace:{trace_id:A,span_id:f,parent_span_id:E},...a.contexts};const p=u||ks(A,this,o);a.sdkProcessingMetadata={dynamicSamplingContext:p,...a.sdkProcessingMetadata}}return a})}_captureEvent(n,t={},o){return this._processEvent(n,t,o).then(r=>r.event_id,r=>{if(U){const i=r;i.logLevel==="log"?x.log(i.message):x.warn(i)}})}_processEvent(n,t,o){const r=this.getOptions(),{sampleRate:i}=r,c=lf(n),a=sf(n),s=n.type||"error",l=`before send for type \`${s}\``;if(a&&typeof i=="number"&&Math.random()>i)return this.recordDroppedEvent("sample_rate","error",n),Mr(new we(`Discarding event because it's not included in the random sample (sampling rate = ${i})`,"log"));const A=s==="replay_event"?"replay":s,E=(n.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(n,t,o,E).then(u=>{if(u===null)throw this.recordDroppedEvent("event_processor",A,n),new we("An event processor returned `null`, will not send event.","log");if(t.data&&t.data.__sentry__===!0)return u;const v=_0(r,u,t);return p0(v,l)}).then(u=>{if(u===null)throw this.recordDroppedEvent("before_send",A,n),new we(`${l} returned \`null\`, will not send event.`,"log");const p=o&&o.getSession();!c&&p&&this._updateSessionFromEvent(p,u);const v=u.transaction_info;if(c&&v&&u.transaction!==n.transaction){const m="custom";u.transaction_info={...v,source:m}}return this.sendEvent(u,t),u}).then(null,u=>{throw u instanceof we?u:(this.captureException(u,{data:{__sentry__:!0},originalException:u}),new we(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${u}`))})}_process(n){this._numProcessing++,n.then(t=>(this._numProcessing--,t),t=>(this._numProcessing--,t))}_sendEnvelope(n){if(this.emit("beforeEnvelope",n),this._isEnabled()&&this._transport)return this._transport.send(n).then(null,t=>{U&&x.error("Error while sending event:",t)});U&&x.error("Transport disabled")}_clearOutcomes(){const n=this._outcomes;return this._outcomes={},Object.keys(n).map(t=>{const[o,r]=t.split(":");return{reason:o,category:r,quantity:n[t]}})}}function p0(e,n){const t=`${n} must return \`null\` or a valid event.`;if(Yt(e))return e.then(o=>{if(!Bn(o)&&o!==null)throw new we(t);return o},o=>{throw new we(`${n} rejected with ${o}`)});if(!Bn(e)&&e!==null)throw new we(t);return e}function _0(e,n,t){const{beforeSend:o,beforeSendTransaction:r}=e;return sf(n)&&o?o(n,t):lf(n)&&r?r(n,t):n}function sf(e){return e.type===void 0}function lf(e){return e.type==="transaction"}function e1(e){const n=d0();!n||!n.addEventProcessor||n.addEventProcessor(e)}function h0(e,n,t=[n],o="npm"){const r=e._metadata||{};r.sdk||(r.sdk={name:`sentry.javascript.${n}`,packages:t.map(i=>({name:`${o}:@sentry/${i}`,version:jr})),version:jr}),e._metadata=r}function n1(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function b0(){return"npm"}function m0(e,n,t){const o=[{type:"client_report"},{timestamp:t||tt(),discarded_events:e}];return In(n?{dsn:n}:{},[o])}function y0(e,{metadata:n,tunnel:t,dsn:o}){const r={event_id:e.event_id,sent_at:new Date().toISOString(),...n&&n.sdk&&{sdk:{name:n.sdk.name,version:n.sdk.version}},...!!t&&!!o&&{dsn:st(o)}},i=B0(e);return In(r,[i])}function B0(e){return[{type:"user_report"},e]}class F0 extends g0{constructor(n){const t=j.SENTRY_SDK_SOURCE||b0();h0(n,"browser",["browser"],t),super(n),n.sendClientReports&&j.document&&j.document.addEventListener("visibilitychange",()=>{j.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(n,t){return cv(this._options.stackParser,n,t,this._options.attachStacktrace)}eventFromMessage(n,t="info",o){return av(this._options.stackParser,n,t,o,this._options.attachStacktrace)}captureUserFeedback(n){if(!this._isEnabled()){De&&x.warn("SDK not enabled, will not capture user feedback.");return}const t=y0(n,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this._sendEnvelope(t)}_prepareEvent(n,t,o){return n.platform=n.platform||"javascript",super._prepareEvent(n,t,o)}_flushOutcomes(){const n=this._clearOutcomes();if(n.length===0){De&&x.log("No outcomes to send");return}if(!this._dsn){De&&x.log("No dsn provided, will not send outcomes");return}De&&x.log("Sending outcomes:",n);const t=m0(n,this._options.tunnel&&st(this._dsn));this._sendEnvelope(t)}}const Rn="?",v0=10,C0=20,k0=30,w0=40,S0=50;function lt(e,n,t,o){const r={filename:e,function:n,in_app:!0};return t!==void 0&&(r.lineno=t),o!==void 0&&(r.colno=o),r}const x0=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,T0=/\((\S*)(?::(\d+))(?::(\d+))\)/,ff=[k0,e=>{const n=x0.exec(e);if(n){if(n[2]&&n[2].indexOf("eval")===0){const i=T0.exec(n[2]);i&&(n[2]=i[1],n[3]=i[2],n[4]=i[3])}const[o,r]=Af(n[1]||Rn,n[2]);return lt(r,o,n[3]?+n[3]:void 0,n[4]?+n[4]:void 0)}}],O0=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,I0=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,R0=[S0,e=>{const n=O0.exec(e);if(n){if(n[3]&&n[3].indexOf(" > eval")>-1){const i=I0.exec(n[3]);i&&(n[1]=n[1]||"eval",n[3]=i[1],n[4]=i[2],n[5]="")}let o=n[3],r=n[1]||Rn;return[r,o]=Af(r,o),lt(o,r,n[4]?+n[4]:void 0,n[5]?+n[5]:void 0)}}],P0=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,D0=[w0,e=>{const n=P0.exec(e);return n?lt(n[2],n[1]||Rn,+n[3],n[4]?+n[4]:void 0):void 0}],N0=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,c1=[v0,e=>{const n=N0.exec(e);return n?lt(n[2],n[3]||Rn,+n[1]):void 0}],M0=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,s1=[C0,e=>{const n=M0.exec(e);return n?lt(n[5],n[3]||n[4]||Rn,+n[1],+n[2]):void 0}],L0=Ns(...[ff,R0,D0]),Af=(e,n)=>{const t=e.indexOf("safari-extension")!==-1,o=e.indexOf("safari-web-extension")!==-1;return t||o?[e.indexOf("@")!==-1?e.split("@")[0]:Rn,t?`safari-extension:${n}`:`safari-web-extension:${n}`]:[e,n]};function j0(e){const n=[];function t(){return e===void 0||n.length<e}function o(c){return n.splice(n.indexOf(c),1)[0]}function r(c){if(!t())return Mr(new we("Not adding Promise because buffer limit was reached."));const a=c();return n.indexOf(a)===-1&&n.push(a),a.then(()=>o(a)).then(null,()=>o(a).then(null,()=>{})),a}function i(c){return new de((a,s)=>{let l=n.length;if(!l)return a(!0);const A=setTimeout(()=>{c&&c>0&&a(!1)},c);n.forEach(f=>{Cn(f).then(()=>{--l||(clearTimeout(A),a(!0))},s)})})}return{$:n,add:r,drain:i}}const U0=60*1e3;function J0(e,n=Date.now()){const t=parseInt(`${e}`,10);if(!isNaN(t))return t*1e3;const o=Date.parse(`${e}`);return isNaN(o)?U0:o-n}function $0(e,n){return e[n]||e.all||0}function q0(e,n,t=Date.now()){return $0(e,n)>t}function H0(e,{statusCode:n,headers:t},o=Date.now()){const r={...e},i=t&&t["x-sentry-rate-limits"],c=t&&t["retry-after"];if(i)for(const a of i.trim().split(",")){const[s,l,,,A]=a.split(":",5),f=parseInt(s,10),E=(isNaN(f)?60:f)*1e3;if(!l)r.all=o+E;else for(const u of l.split(";"))u==="metric_bucket"?(!A||A.split(";").includes("custom"))&&(r[u]=o+E):r[u]=o+E}else c?r.all=o+J0(c,o):n===429&&(r.all=o+60*1e3);return r}const z0=30;function li(e,n,t=j0(e.bufferSize||z0)){let o={};const r=c=>t.drain(c);function i(c){const a=[];if(ai(c,(f,E)=>{const u=of(E);if(q0(o,u)){const p=uf(f,E);e.recordDroppedEvent("ratelimit_backoff",u,p)}else a.push(f)}),a.length===0)return Cn();const s=In(c[0],a),l=f=>{ai(s,(E,u)=>{const p=uf(E,u);e.recordDroppedEvent(f,of(u),p)})},A=()=>n({body:ZC(s,e.textEncoder)}).then(f=>(f.statusCode!==void 0&&(f.statusCode<200||f.statusCode>=300)&&U&&x.warn(`Sentry responded with status code ${f.statusCode} to sent event.`),o=H0(o,f),f),f=>{throw l("network_error"),f});return t.add(A).then(f=>f,f=>{if(f instanceof we)return U&&x.error("Skipped sending event because buffer is full."),l("queue_overflow"),Cn();throw f})}return i.__sentry__baseTransport__=!0,{send:i,flush:r}}function uf(e,n){if(!(n!=="event"&&n!=="transaction"))return Array.isArray(e)?e[1]:void 0}let ft;function G0(){if(ft)return ft;if(ei(j.fetch))return ft=j.fetch.bind(j);const e=j.document;let n=j.fetch;if(e&&typeof e.createElement=="function")try{const t=e.createElement("iframe");t.hidden=!0,e.head.appendChild(t);const o=t.contentWindow;o&&o.fetch&&(n=o.fetch),e.head.removeChild(t)}catch(t){De&&x.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return ft=n.bind(j)}function W0(){ft=void 0}function K0(e,n=G0()){let t=0,o=0;function r(i){const c=i.body.length;t+=c,o++;const a={body:i.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:t<=6e4&&o<15,...e.fetchOptions};try{return n(e.url,a).then(s=>(t-=c,o--,{statusCode:s.status,headers:{"x-sentry-rate-limits":s.headers.get("X-Sentry-Rate-Limits"),"retry-after":s.headers.get("Retry-After")}}))}catch(s){return W0(),t-=c,o--,Mr(s)}}return li(e,r)}const Y0=4;function V0(e){function n(t){return new de((o,r)=>{const i=new XMLHttpRequest;i.onerror=r,i.onreadystatechange=()=>{i.readyState===Y0&&o({statusCode:i.status,headers:{"x-sentry-rate-limits":i.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":i.getResponseHeader("Retry-After")}})},i.open("POST",e.url);for(const c in e.headers)Object.prototype.hasOwnProperty.call(e.headers,c)&&i.setRequestHeader(c,e.headers[c]);i.send(t.body)})}return li(e,n)}var X0,Z0,Q0,fi,Ai,Pn,ek;const Ef=[ol(),nl(),bl(),wl(),dl(),xl(),Rl(),Ol()];function nk(e){return[...Ef]}function tk(e={}){e.defaultIntegrations===void 0&&(e.defaultIntegrations=nk()),e.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(e.release=__SENTRY_RELEASE__),j.SENTRY_RELEASE&&j.SENTRY_RELEASE.id&&(e.release=j.SENTRY_RELEASE.id)),e.autoSessionTracking===void 0&&(e.autoSessionTracking=!0),e.sendClientReports===void 0&&(e.sendClientReports=!0);const n={...e,stackParser:VB(e.stackParser||L0),integrations:yF(e),transport:e.transport||(Qr()?K0:V0)};qC(F0,n),e.autoSessionTracking&&ok()}const f1=(e={},n=Z0())=>{if(!Pn.document){Ai&&fi.error("Global document not defined in showReportDialog call");return}const{client:t,scope:o}=n.getStackTop(),r=e.dsn||t&&t.getDsn();if(!r){Ai&&fi.error("DSN not configured for showReportDialog call");return}o&&(e.user={...o.getUser(),...e.user}),e.eventId||(e.eventId=n.lastEventId());const i=Pn.document.createElement("script");i.async=!0,i.crossOrigin="anonymous",i.src=Q0(r,e),e.onLoad&&(i.onload=e.onLoad);const{onClose:c}=e;if(c){const s=l=>{if(l.data==="__sentry_reportdialog_closed__")try{c()}finally{Pn.removeEventListener("message",s)}};Pn.addEventListener("message",s)}const a=Pn.document.head||Pn.document.body;a?a.appendChild(i):Ai&&fi.error("Not injecting report dialog. No injection point found in HTML")};function A1(){}function u1(e){e()}function E1(e){return ek(e)()}function ok(){if(typeof j.document>"u"){De&&x.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}zs({ignoreDuration:!0}),Ks(),vl(({from:e,to:n})=>{e!==void 0&&e!==n&&(zs({ignoreDuration:!0}),Ks())})}function d1(e){const n=X0();n&&n.captureUserFeedback(e)}function rk(e){const n=Object.assign({pollInterval:1e3,anrThreshold:5e3,captureStackTrace:!1},e),t=ct();document.addEventListener("visibilitychange",()=>{t.sendStatus({status:document.visibilityState,config:n})}),t.sendStatus({status:document.visibilityState,config:n}),setInterval(()=>{t.sendStatus({status:"alive",config:n})},n.pollInterval)}const ik=50,[,ck]=ff,[,ak]=XB(),sk=(e,n=0)=>{const t=[];for(const o of e.split(`
`).slice(n)){const r=ck(o),i=ak(o);if(r&&i?.in_app!==!1?t.push(r):i&&t.push(be(i)),t.length>=ik)break}return Ms(t)};var ui=function(e,n){return ui=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])},ui(e,n)};function lk(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");ui(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var Ei=function(){return Ei=Object.assign||function(n){for(var t,o=1,r=arguments.length;o<r;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ei.apply(this,arguments)};function fk(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)n.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(t[o[r]]=e[o[r]]);return t}function Ak(e,n,t,o){var r=arguments.length,i=r<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(i=(r<3?c(i):r>3?c(n,t,i):c(n,t))||i);return r>3&&i&&Object.defineProperty(n,t,i),i}function uk(e,n){return function(t,o){n(t,o,e)}}function g1(e,n,t,o,r,i){function c(F){if(F!==void 0&&typeof F!="function")throw new TypeError("Function expected");return F}for(var a=o.kind,s=a==="getter"?"get":a==="setter"?"set":"value",l=!n&&e?o.static?e:e.prototype:null,A=n||(l?Object.getOwnPropertyDescriptor(l,o.name):{}),f,E=!1,u=t.length-1;u>=0;u--){var p={};for(var v in o)p[v]=v==="access"?{}:o[v];for(var v in o.access)p.access[v]=o.access[v];p.addInitializer=function(F){if(E)throw new TypeError("Cannot add initializers after decoration has completed");i.push(c(F||null))};var m=(0,t[u])(a==="accessor"?{get:A.get,set:A.set}:A[s],p);if(a==="accessor"){if(m===void 0)continue;if(m===null||typeof m!="object")throw new TypeError("Object expected");(f=c(m.get))&&(A.get=f),(f=c(m.set))&&(A.set=f),(f=c(m.init))&&r.unshift(f)}else(f=c(m))&&(a==="field"?r.unshift(f):A[s]=f)}l&&Object.defineProperty(l,o.name,A),E=!0}function p1(e,n,t){for(var o=arguments.length>2,r=0;r<n.length;r++)t=o?n[r].call(e,t):n[r].call(e);return o?t:void 0}function _1(e){return typeof e=="symbol"?e:"".concat(e)}function h1(e,n,t){return typeof n=="symbol"&&(n=n.description?"[".concat(n.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",n):n})}function Ek(e,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,n)}function df(e,n,t,o){function r(i){return i instanceof t?i:new t(function(c){c(i)})}return new(t||(t=Promise))(function(i,c){function a(A){try{l(o.next(A))}catch(f){c(f)}}function s(A){try{l(o.throw(A))}catch(f){c(f)}}function l(A){A.done?i(A.value):r(A.value).then(a,s)}l((o=o.apply(e,n||[])).next())})}function dk(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(A){return s([l,A])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;c&&(c=0,l[0]&&(t=0)),t;)try{if(o=1,r&&(i=l[0]&2?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1],i=l;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(l);break}i[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(A){l=[6,A],r=0}finally{o=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var di=Object.create?function(e,n,t,o){o===void 0&&(o=t);var r=Object.getOwnPropertyDescriptor(n,t);(!r||("get"in r?!n.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,o,r)}:function(e,n,t,o){o===void 0&&(o=t),e[o]=n[t]};function gk(e,n){for(var t in e)t!=="default"&&!Object.prototype.hasOwnProperty.call(n,t)&&di(n,e,t)}function gi(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function gf(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),r,i=[],c;try{for(;(n===void 0||n-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(a){c={error:a}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return i}function pk(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(gf(arguments[n]));return e}function _k(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var o=Array(e),r=0,n=0;n<t;n++)for(var i=arguments[n],c=0,a=i.length;c<a;c++,r++)o[r]=i[c];return o}function hk(e,n,t){if(t||arguments.length===2)for(var o=0,r=n.length,i;o<r;o++)(i||!(o in n))&&(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return e.concat(i||Array.prototype.slice.call(n))}function At(e){return this instanceof At?(this.v=e,this):new At(e)}function bk(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),r,i=[];return r={},c("next"),c("throw"),c("return"),r[Symbol.asyncIterator]=function(){return this},r;function c(E){o[E]&&(r[E]=function(u){return new Promise(function(p,v){i.push([E,u,p,v])>1||a(E,u)})})}function a(E,u){try{s(o[E](u))}catch(p){f(i[0][3],p)}}function s(E){E.value instanceof At?Promise.resolve(E.value.v).then(l,A):f(i[0][2],E)}function l(E){a("next",E)}function A(E){a("throw",E)}function f(E,u){E(u),i.shift(),i.length&&a(i[0][0],i[0][1])}}function mk(e){var n,t;return n={},o("next"),o("throw",function(r){throw r}),o("return"),n[Symbol.iterator]=function(){return this},n;function o(r,i){n[r]=e[r]?function(c){return(t=!t)?{value:At(e[r](c)),done:!1}:i?i(c):c}:i}}function yk(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof gi=="function"?gi(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=e[i]&&function(c){return new Promise(function(a,s){c=e[i](c),r(a,s,c.done,c.value)})}}function r(i,c,a,s){Promise.resolve(s).then(function(l){i({value:l,done:a})},c)}}function Bk(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var Fk=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function vk(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&di(n,e,t);return Fk(n,e),n}function Ck(e){return e&&e.__esModule?e:{default:e}}function kk(e,n,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?e!==n||!o:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(e):o?o.value:n.get(e)}function wk(e,n,t,o,r){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!r)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?e!==n||!r:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?r.call(e,t):r?r.value=t:n.set(e,t),t}function Sk(e,n){if(n===null||typeof n!="object"&&typeof n!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?n===e:e.has(n)}function xk(e,n,t){if(n!=null){if(typeof n!="object"&&typeof n!="function")throw new TypeError("Object expected.");var o;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=n[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=n[Symbol.dispose]}if(typeof o!="function")throw new TypeError("Object not disposable.");e.stack.push({value:n,dispose:o,async:t})}else t&&e.stack.push({async:!0});return n}var Tk=typeof SuppressedError=="function"?SuppressedError:function(e,n,t){var o=new Error(t);return o.name="SuppressedError",o.error=e,o.suppressed=n,o};function Ok(e){function n(o){e.error=e.hasError?new Tk(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}function t(){for(;e.stack.length;){var o=e.stack.pop();try{var r=o.dispose&&o.dispose.call(o.value);if(o.async)return Promise.resolve(r).then(t,function(i){return n(i),t()})}catch(i){n(i)}}if(e.hasError)throw e.error}return t()}const b1={__extends:lk,__assign:Ei,__rest:fk,__decorate:Ak,__param:uk,__metadata:Ek,__awaiter:df,__generator:dk,__createBinding:di,__exportStar:gk,__values:gi,__read:gf,__spread:pk,__spreadArrays:_k,__spreadArray:hk,__await:At,__asyncGenerator:bk,__asyncDelegator:mk,__asyncValues:yk,__makeTemplateObject:Bk,__importStar:vk,__importDefault:Ck,__classPrivateFieldGet:kk,__classPrivateFieldSet:wk,__classPrivateFieldIn:Sk,__addDisposableResource:xk,__disposeResources:Ok};function Ik(e){const n=ct();return li(e,t=>df(this,void 0,void 0,function*(){return n.sendEnvelope(t.body),{statusCode:200}}))}function Rk(e){const n=typeof window<"u"?"renderer":"main";if(n!==e)throw new Error(`This code is intended to run in the Electron ${e} process but is currently running in the ${n} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${n}';`)}const Pk=[...Ef,Ul(),nf()];function Dk(e={},n=tk){if(Rk("renderer"),window?.__SENTRY__RENDERER_INIT__){x.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);return}window.__SENTRY__RENDERER_INIT__=!0,e.autoSessionTracking===void 0&&(e.autoSessionTracking=!1),e.sendClientReports=!1,e.defaultIntegrations===void 0&&(e.defaultIntegrations=Pk),e.stackParser===void 0&&(e.stackParser=sk),e.dsn===void 0&&(e.dsn="https://12345@dummy.dsn/12345"),e.transport===void 0&&(e.transport=Ik),e.anrDetection&&rk(e.anrDetection===!0?{}:e.anrDetection),delete e.initialScope,n(e)}const m1=Object.assign(Object.assign({},UC),{MetricsAggregator:$C}),y1=Object.assign(Object.assign({},tC),k);function Nk(){console.log("Starting Sentry (Renderer)"),Dk({...window.desktop?.diagnostics?.sentryOptions}),uB(Js)}var Mk,Lk,jk,Uk;function Jk(e){const n=jk(e);return!Mk(e,n.current)&&!Lk(e,n.current)&&(n.current=e),n.current}function B1(e,n){Uk(e,[Jk(n)])}function $k(e){return rB(e,ya)}Nk();const pf=e=>{const n=Vo(e)?.history,t=Array.isArray(n)?n[n.length-1]:null;try{return t?Array.from(new URL(t).searchParams.keys()):[]}catch(o){return Aa.error("getFlags: unexpected error occurred",{error:o,url:t}),[]}},pi={[ue.ITPolicy]:{},[ue.UserChoices]:{},[ue.ITDefaults]:{},[ue.SlackDefaults]:{}};void AB(()=>{const{intl:e}=window.desktop,{settings:n,webContents:t}=$k(f=>({settings:f.settings,webContents:f.webContents})),[o,r]=Yn(ma(pi)),[i,c]=Yn(pf(t)),a=()=>r(ma(pi)),s=()=>{const f=pf(t),E=Ar(i,f),u=Ar(f,i);if(!ya(pi,o))for(const p of Object.values(ue))window.desktop.settingsEditor.updateSettings(o[p],p);if(!Ba(E)||!Ba(u)){const p=[[E,!0],[u,!1]];for(const[v,m]of p)v.forEach(F=>window.desktop.settingsEditor.toggleFeatureFragment({feature:F,enabled:m}))}},l=f=>{const{currentTarget:E}=f,u={...o};let p=E.value;(p==="undefined"||p==="")&&(p=void 0),p==="null"&&(p=null),p==="false"&&(p=!1),p==="true"&&(p=!0);const v=E.id.split("."),[m,...F]=v,S=pn(n,["slackDefaults",...F]),D=Array.isArray(S)?p.split(",").map(V=>V.trim()):p;Tm(u,v,D),r(u)},A=()=>{const f=Pt(n,o[ue.SlackDefaults],o[ue.ITDefaults],o[ue.UserChoices],o[ue.ITPolicy],o),E=(S,D,V,G)=>{const re=[S,...D],X=pn(f,re),ce=re.join(".");return V==="dropdown"?M("td",{class:G?"highlight":"",children:M("select",{name:ce,id:ce,onChange:l,children:[void 0,null,!1,!0].map(Q=>M("option",{selected:Q===X,value:String(Q),children:String(Q)}))})}):M("td",{class:G?"highlight":"",children:M("input",{class:"layer-value",type:V,id:ce,value:X===void 0?"":String(X),onInput:l})})},u=S=>{const D=pn(f,["slackDefaults",...S]),V=pn(f,S);let G="text";typeof D=="number"&&(G="number"),typeof D=="boolean"&&(G="dropdown");const re=S.join("."),X=Nh(n,re);return M("tr",{class:"settings-row",children:[M("td",{children:M("label",{class:"key",htmlFor:re,children:re})}),M("td",{children:M("label",{htmlFor:"computed-value",class:"computed-value",children:String(V)})}),...Object.values(ue).map(ce=>E(ce,S,G,ce===X))]})},p=S=>{const D=pn(f,S);return Jc(D)?Object.keys(D).flatMap(V=>p(S.concat(V))):[u(S)]},v=[],m=Ar(Object.keys(f),Object.values(ue));for(const S of m){const D=p([S]);v.push(...D)}const F=S=>{const{currentTarget:D}=S,V=D.value.split(",").map(G=>G.trim());c(V)};return M("table",{id:"settings",children:[M("thead",{children:M("tr",{children:[M("th",{children:"Preference"}),M("th",{children:"Computed value"}),M("th",{children:"itPolicy"}),M("th",{children:"userChoices"}),M("th",{children:"itDefaults"}),M("th",{children:"slackDefaults"})]})}),M("tbody",{children:[...v,M("tr",{children:[M("td",{children:M("label",{htmlFor:"feature_flag",children:"feature_flag"})}),M("td",{colSpan:5,children:M("input",{type:"string",id:"feature-flags",value:i,onInput:F})})]})]})]})};return M("div",{className:"SettingsEditor",children:[M("header",{children:[M("button",{title:e.t("Save",Kn.RENDERER)(),onClick:s,children:e.t("Save",Kn.RENDERER)()}),M("button",{title:e.t("Reset",Kn.RENDERER)(),onClick:a,children:e.t("Reset",Kn.RENDERER)()})]}),A()]})})})(),Kk=vf})()});Yk();})();

//# sourceMappingURL=settings-editor.bundle.js.map
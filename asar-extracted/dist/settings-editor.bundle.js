(()=>{var gv=Object.defineProperty;var pv=(re,te,P)=>te in re?gv(re,te,{enumerable:!0,configurable:!0,writable:!0,value:P}):re[te]=P;var hv=(re,te)=>()=>(te||re((te={exports:{}}).exports,te),te.exports);var V=(re,te,P)=>pv(re,typeof te!="symbol"?te+"":te,P);var mv=hv((ge,pe)=>{(function(){try{var re=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},te=new Error().stack;te&&(re._sentryDebugIds=re._sentryDebugIds||{},re._sentryDebugIds[te]="f7e1ccb2-83f0-461c-be89-eb22243de24d",re._sentryDebugIdIdentifier="sentry-dbid-f7e1ccb2-83f0-461c-be89-eb22243de24d")}catch{}})();var bv=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};bv.SENTRY_RELEASE={id:"Slack@4.47.69"};var _v;(()=>{var re={6261:(m,b,d)=>{"use strict";d.d(b,{A:()=>Me});var p=d(264),S=d.n(p),v=d(6520),B=d.n(v),w=d(9571),R=d.n(w),k=new URL(d(5539),d.b),D=new URL(d(4603),d.b),q=new URL(d(4392),d.b),J=new URL(d(9138),d.b),I=new URL(d(5906),d.b),K=new URL(d(9269),d.b),X=new URL(d(5959),d.b),Y=new URL(d(7),d.b),oe=new URL(d(6723),d.b),ce=B()(S()),me=R()(k),ye=R()(D),z=R()(q),W=R()(J),F=R()(I),y=R()(K),se=R()(X),xn=R()(Y),qe=R()(oe);ce.push([m.id,`/*

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
  src: url(${me}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(${ye}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(${z}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(${W}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(${F}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(${y}) format('woff2');
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
  src: url(${xn}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
@font-face {
  font-family: 'Slack v2';
  src: url(${qe}) format('woff2');
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
`,"",{version:3,sources:["webpack://./src/renderer/styles/settings-editor.less","webpack://./src/resources/lato.less","webpack://./src/resources/slack-icons-font.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AElEA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AFmEF;AEvDA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AFyDF;AExDE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AF0EF;AExDA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AF0DF;AEzDE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AF2DJ;AEzDE;EAEE,gBAAA;AF0DJ;AEnDA;EACE,UAAA;AFqDF;AEpDE;EACE,kBAAA;AFsDJ;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEknBA;EAEE,WAAA;AFjnBF;AEsmBE;EACE,gBAAA;EACA,cAAA;AFpmBJ;AEsmBE;EACE,yBAAA;AFpmBJ;AE4mBE;EACE,eAAA;AF1mBJ;AE8mBA;EAEE,WAAA;AF7mBF;AEylBE;EACE,gBAAA;EACA,cAAA;AFvlBJ;AEylBE;EACE,yBAAA;AFvlBJ;AEwmBE;EACE,eAAA;AFtmBJ;AE0mBA;EAEE,WAAA;AFzmBF;AE4kBE;EACE,gBAAA;EACA,cAAA;AF1kBJ;AE4kBE;EACE,yBAAA;AF1kBJ;AEomBE;EACE,eAAA;AFlmBJ;AEkkBE;EACE,gBAAA;EACA,cAAA;AFhkBJ;AEkkBE;EACE,yBAAA;AFhkBJ;AE2jBE;EACE,gBAAA;EACA,cAAA;AFzjBJ;AE2jBE;EACE,yBAAA;AFzjBJ;AEojBE;EACE,gBAAA;EACA,cAAA;AFljBJ;AEojBE;EACE,yBAAA;AFljBJ;AE6iBE;EACE,gBAAA;EACA,cAAA;AF3iBJ;AE6iBE;EACE,yBAAA;AF3iBJ;AEsiBE;EACE,gBAAA;EACA,cAAA;AFpiBJ;AEsiBE;EACE,yBAAA;AFpiBJ;AE+hBE;EACE,gBAAA;EACA,cAAA;AF7hBJ;AE+hBE;EACE,yBAAA;AF7hBJ;AEwhBE;EACE,gBAAA;EACA,cAAA;AFthBJ;AEwhBE;EACE,yBAAA;AFthBJ;AEihBE;EACE,gBAAA;EACA,cAAA;AF/gBJ;AEihBE;EACE,yBAAA;AF/gBJ;AE0gBE;EACE,gBAAA;EACA,cAAA;AFxgBJ;AE0gBE;EACE,yBAAA;AFxgBJ;AEmgBE;EACE,gBAAA;EACA,cAAA;AFjgBJ;AEmgBE;EACE,yBAAA;AFjgBJ;AE4fE;EACE,gBAAA;EACA,cAAA;AF1fJ;AE4fE;EACE,yBAAA;AF1fJ;AEqfE;EACE,gBAAA;EACA,cAAA;AFnfJ;AEqfE;EACE,yBAAA;AFnfJ;AE8eE;EACE,gBAAA;EACA,cAAA;AF5eJ;AE8eE;EACE,yBAAA;AF5eJ;AEueE;EACE,gBAAA;EACA,cAAA;AFreJ;AEueE;EACE,yBAAA;AFreJ;AEgeE;EACE,gBAAA;EACA,cAAA;AF9dJ;AEgeE;EACE,yBAAA;AF9dJ;AEydE;EACE,gBAAA;EACA,cAAA;AFvdJ;AEydE;EACE,yBAAA;AFvdJ;AEkdE;EACE,gBAAA;EACA,cAAA;AFhdJ;AEkdE;EACE,yBAAA;AFhdJ;AE2cE;EACE,gBAAA;EACA,cAAA;AFzcJ;AE2cE;EACE,yBAAA;AFzcJ;AEocE;EACE,gBAAA;EACA,cAAA;AFlcJ;AEocE;EACE,yBAAA;AFlcJ;AE6bE;EACE,gBAAA;EACA,cAAA;AF3bJ;AE6bE;EACE,yBAAA;AF3bJ;AEsbE;EACE,gBAAA;EACA,cAAA;AFpbJ;AEsbE;EACE,yBAAA;AFpbJ;AE+aE;EACE,gBAAA;EACA,cAAA;AF7aJ;AE+aE;EACE,yBAAA;AF7aJ;AEwaE;EACE,gBAAA;EACA,cAAA;AFtaJ;AEwaE;EACE,yBAAA;AFtaJ;AEiaE;EACE,gBAAA;EACA,cAAA;AF/ZJ;AEiaE;EACE,yBAAA;AF/ZJ;AE0ZE;EACE,gBAAA;EACA,cAAA;AFxZJ;AE0ZE;EACE,yBAAA;AFxZJ;AEmZE;EACE,gBAAA;EACA,cAAA;AFjZJ;AEmZE;EACE,yBAAA;AFjZJ;AE4YE;EACE,gBAAA;EACA,cAAA;AF1YJ;AE4YE;EACE,yBAAA;AF1YJ;AEqYE;EACE,gBAAA;EACA,cAAA;AFnYJ;AEqYE;EACE,yBAAA;AFnYJ;AE8XE;EACE,gBAAA;EACA,cAAA;AF5XJ;AE8XE;EACE,yBAAA;AF5XJ;AEuXE;EACE,gBAAA;EACA,cAAA;AFrXJ;AEuXE;EACE,yBAAA;AFrXJ;AEgXE;EACE,gBAAA;EACA,cAAA;AF9WJ;AEgXE;EACE,yBAAA;AF9WJ;AEyWE;EACE,gBAAA;EACA,cAAA;AFvWJ;AEyWE;EACE,yBAAA;AFvWJ;AEkWE;EACE,gBAAA;EACA,cAAA;AFhWJ;AEkWE;EACE,yBAAA;AFhWJ;AE2VE;EACE,gBAAA;EACA,cAAA;AFzVJ;AE2VE;EACE,yBAAA;AFzVJ;AEoVE;EACE,gBAAA;EACA,cAAA;AFlVJ;AEoVE;EACE,yBAAA;AFlVJ;AE6UE;EACE,gBAAA;EACA,cAAA;AF3UJ;AE6UE;EACE,yBAAA;AF3UJ;AEsUE;EACE,gBAAA;EACA,cAAA;AFpUJ;AEsUE;EACE,yBAAA;AFpUJ;AE+TE;EACE,gBAAA;EACA,cAAA;AF7TJ;AE+TE;EACE,yBAAA;AF7TJ;AEwTE;EACE,gBAAA;EACA,cAAA;AFtTJ;AEwTE;EACE,yBAAA;AFtTJ;AEiTE;EACE,gBAAA;EACA,cAAA;AF/SJ;AEiTE;EACE,yBAAA;AF/SJ;AE0SE;EACE,gBAAA;EACA,cAAA;AFxSJ;AE0SE;EACE,yBAAA;AFxSJ;AEmSE;EACE,gBAAA;EACA,cAAA;AFjSJ;AEmSE;EACE,yBAAA;AFjSJ;AE4RE;EACE,gBAAA;EACA,cAAA;AF1RJ;AE4RE;EACE,yBAAA;AF1RJ;AEqRE;EACE,gBAAA;EACA,cAAA;AFnRJ;AEqRE;EACE,yBAAA;AFnRJ;AE8QE;EACE,gBAAA;EACA,cAAA;AF5QJ;AE8QE;EACE,yBAAA;AF5QJ;AEuQE;EACE,gBAAA;EACA,cAAA;AFrQJ;AEuQE;EACE,yBAAA;AFrQJ;AEgQE;EACE,gBAAA;EACA,cAAA;AF9PJ;AEgQE;EACE,yBAAA;AF9PJ;AEyPE;EACE,gBAAA;EACA,cAAA;AFvPJ;AEyPE;EACE,yBAAA;AFvPJ;AEkPE;EACE,gBAAA;EACA,cAAA;AFhPJ;AEkPE;EACE,yBAAA;AFhPJ;AE2OE;EACE,gBAAA;EACA,cAAA;AFzOJ;AE2OE;EACE,yBAAA;AFzOJ;AEoOE;EACE,gBAAA;EACA,cAAA;AFlOJ;AEoOE;EACE,yBAAA;AFlOJ;AE6NE;EACE,gBAAA;EACA,cAAA;AF3NJ;AE6NE;EACE,yBAAA;AF3NJ;AEsNE;EACE,gBAAA;EACA,cAAA;AFpNJ;AEsNE;EACE,yBAAA;AFpNJ;AE+ME;EACE,gBAAA;EACA,cAAA;AF7MJ;AE+ME;EACE,yBAAA;AF7MJ;AEwME;EACE,gBAAA;EACA,cAAA;AFtMJ;AEwME;EACE,yBAAA;AFtMJ;AEiME;EACE,gBAAA;EACA,cAAA;AF/LJ;AEiME;EACE,yBAAA;AF/LJ;AE0LE;EACE,gBAAA;EACA,cAAA;AFxLJ;AE0LE;EACE,yBAAA;AFxLJ;AEmLE;EACE,gBAAA;EACA,cAAA;AFjLJ;AEmLE;EACE,yBAAA;AFjLJ;AE4KE;EACE,gBAAA;EACA,cAAA;AF1KJ;AE4KE;EACE,yBAAA;AF1KJ;AEqKE;EACE,gBAAA;EACA,cAAA;AFnKJ;AEqKE;EACE,yBAAA;AFnKJ;AE8JE;EACE,gBAAA;EACA,cAAA;AF5JJ;AE8JE;EACE,yBAAA;AF5JJ;AEuJE;EACE,gBAAA;EACA,cAAA;AFrJJ;AEuJE;EACE,yBAAA;AFrJJ;AEgJE;EACE,gBAAA;EACA,cAAA;AF9IJ;AEgJE;EACE,yBAAA;AF9IJ;AEyIE;EACE,gBAAA;EACA,cAAA;AFvIJ;AEyIE;EACE,yBAAA;AFvIJ;AEkIE;EACE,gBAAA;EACA,cAAA;AFhIJ;AEkIE;EACE,yBAAA;AFhIJ;AE2HE;EACE,gBAAA;EACA,cAAA;AFzHJ;AE2HE;EACE,yBAAA;AFzHJ;AEoHE;EACE,gBAAA;EACA,cAAA;AFlHJ;AEoHE;EACE,yBAAA;AFlHJ;AE6GE;EACE,gBAAA;EACA,cAAA;AF3GJ;AE6GE;EACE,yBAAA;AF3GJ;AEsGE;EACE,gBAAA;EACA,cAAA;AFpGJ;AEsGE;EACE,yBAAA;AFpGJ;AE+FE;EACE,gBAAA;EACA,cAAA;AF7FJ;AE+FE;EACE,yBAAA;AF7FJ;AEwFE;EACE,gBAAA;EACA,cAAA;AFtFJ;AEwFE;EACE,yBAAA;AFtFJ;AEiFE;EACE,gBAAA;EACA,cAAA;AF/EJ;AEiFE;EACE,yBAAA;AF/EJ;AE0EE;EACE,gBAAA;EACA,cAAA;AFxEJ;AE0EE;EACE,yBAAA;AFxEJ;AEmEE;EACE,gBAAA;EACA,cAAA;AFjEJ;AEmEE;EACE,yBAAA;AFjEJ;AE4DE;EACE,gBAAA;EACA,cAAA;AF1DJ;AE4DE;EACE,yBAAA;AF1DJ;AEqDE;EACE,gBAAA;EACA,cAAA;AFnDJ;AEqDE;EACE,yBAAA;AFnDJ;AE8CE;EACE,gBAAA;EACA,cAAA;AF5CJ;AE8CE;EACE,yBAAA;AF5CJ;AEuCE;EACE,gBAAA;EACA,cAAA;AFrCJ;AEuCE;EACE,yBAAA;AFrCJ;AEgCE;EACE,gBAAA;EACA,cAAA;AF9BJ;AEgCE;EACE,yBAAA;AF9BJ;AEyBE;EACE,gBAAA;EACA,cAAA;AFvBJ;AEyBE;EACE,yBAAA;AFvBJ;AEkBE;EACE,gBAAA;EACA,cAAA;AFhBJ;AEkBE;EACE,yBAAA;AFhBJ;AEWE;EACE,gBAAA;EACA,cAAA;AFTJ;AEWE;EACE,yBAAA;AFTJ;AEIE;EACE,gBAAA;EACA,cAAA;AFFJ;AEIE;EACE,yBAAA;AFFJ;AEHE;EACE,gBAAA;EACA,cAAA;AFKJ;AEHE;EACE,yBAAA;AFKJ;AEVE;EACE,gBAAA;EACA,cAAA;AFYJ;AEVE;EACE,yBAAA;AFYJ;AEjBE;EACE,gBAAA;EACA,cAAA;AFmBJ;AEjBE;EACE,yBAAA;AFmBJ;AExBE;EACE,gBAAA;EACA,cAAA;AF0BJ;AExBE;EACE,yBAAA;AF0BJ;AE/BE;EACE,gBAAA;EACA,cAAA;AFiCJ;AE/BE;EACE,yBAAA;AFiCJ;AEtCE;EACE,gBAAA;EACA,cAAA;AFwCJ;AEtCE;EACE,yBAAA;AFwCJ;AE7CE;EACE,gBAAA;EACA,cAAA;AF+CJ;AE7CE;EACE,yBAAA;AF+CJ;AEpDE;EACE,gBAAA;EACA,cAAA;AFsDJ;AEpDE;EACE,yBAAA;AFsDJ;AE3DE;EACE,gBAAA;EACA,cAAA;AF6DJ;AE3DE;EACE,yBAAA;AF6DJ;AElEE;EACE,gBAAA;EACA,cAAA;AFoEJ;AElEE;EACE,yBAAA;AFoEJ;AEzEE;EACE,gBAAA;EACA,cAAA;AF2EJ;AEzEE;EACE,yBAAA;AF2EJ;AEhFE;EACE,gBAAA;EACA,cAAA;AFkFJ;AEhFE;EACE,yBAAA;AFkFJ;AEvFE;EACE,gBAAA;EACA,cAAA;AFyFJ;AEvFE;EACE,yBAAA;AFyFJ;AE9FE;EACE,gBAAA;EACA,cAAA;AFgGJ;AE9FE;EACE,yBAAA;AFgGJ;AErGE;EACE,gBAAA;EACA,cAAA;AFuGJ;AErGE;EACE,yBAAA;AFuGJ;AE5GE;EACE,gBAAA;EACA,cAAA;AF8GJ;AE5GE;EACE,yBAAA;AF8GJ;AEnHE;EACE,gBAAA;EACA,cAAA;AFqHJ;AEnHE;EACE,yBAAA;AFqHJ;AE1HE;EACE,gBAAA;EACA,cAAA;AF4HJ;AE1HE;EACE,yBAAA;AF4HJ;AEjIE;EACE,gBAAA;EACA,cAAA;AFmIJ;AEjIE;EACE,yBAAA;AFmIJ;AExIE;EACE,gBAAA;EACA,cAAA;AF0IJ;AExIE;EACE,yBAAA;AF0IJ;AE/IE;EACE,gBAAA;EACA,cAAA;AFiJJ;AE/IE;EACE,yBAAA;AFiJJ;AEtJE;EACE,gBAAA;EACA,cAAA;AFwJJ;AEtJE;EACE,yBAAA;AFwJJ;AE7JE;EACE,gBAAA;EACA,cAAA;AF+JJ;AE7JE;EACE,yBAAA;AF+JJ;AEpKE;EACE,gBAAA;EACA,cAAA;AFsKJ;AEpKE;EACE,yBAAA;AFsKJ;AE3KE;EACE,gBAAA;EACA,cAAA;AF6KJ;AE3KE;EACE,yBAAA;AF6KJ;AElLE;EACE,gBAAA;EACA,cAAA;AFoLJ;AElLE;EACE,yBAAA;AFoLJ;AEzLE;EACE,gBAAA;EACA,cAAA;AF2LJ;AEzLE;EACE,yBAAA;AF2LJ;AEhME;EACE,gBAAA;EACA,cAAA;AFkMJ;AEhME;EACE,yBAAA;AFkMJ;AEvME;EACE,gBAAA;EACA,cAAA;AFyMJ;AEvME;EACE,yBAAA;AFyMJ;AE9ME;EACE,gBAAA;EACA,cAAA;AFgNJ;AE9ME;EACE,yBAAA;AFgNJ;AErNE;EACE,gBAAA;EACA,cAAA;AFuNJ;AErNE;EACE,yBAAA;AFuNJ;AE5NE;EACE,gBAAA;EACA,cAAA;AF8NJ;AE5NE;EACE,yBAAA;AF8NJ;AEnOE;EACE,gBAAA;EACA,cAAA;AFqOJ;AEnOE;EACE,yBAAA;AFqOJ;AE1OE;EACE,gBAAA;EACA,cAAA;AF4OJ;AE1OE;EACE,yBAAA;AF4OJ;AEjPE;EACE,gBAAA;EACA,cAAA;AFmPJ;AEjPE;EACE,yBAAA;AFmPJ;AExPE;EACE,gBAAA;EACA,cAAA;AF0PJ;AExPE;EACE,yBAAA;AF0PJ;AE/PE;EACE,gBAAA;EACA,cAAA;AFiQJ;AE/PE;EACE,yBAAA;AFiQJ;AEtQE;EACE,gBAAA;EACA,cAAA;AFwQJ;AEtQE;EACE,yBAAA;AFwQJ;AE7QE;EACE,gBAAA;EACA,cAAA;AF+QJ;AE7QE;EACE,yBAAA;AF+QJ;AEpRE;EACE,gBAAA;EACA,cAAA;AFsRJ;AEpRE;EACE,yBAAA;AFsRJ;AE3RE;EACE,gBAAA;EACA,cAAA;AF6RJ;AE3RE;EACE,yBAAA;AF6RJ;AACA;;;;EAIE;AG7xFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AH+xFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;;;;;;;;;;;EAaE;AACF;;;CAGC;AACD;;;CAGC;AIxuFD;EACE,iBAAA;AJ0uFF;AIxuFA;EACE,iBAAA;AJ0uFF;AAr0FA;EACE,iBAAA;EACA,kDAAA;EAEA,aAAA;EACA,sBAAA;EACA,oBAAA;EACA,aAAA;AAs0FF;AA70FA;EAUI,eAAA;EACA,yBAAA;EACA,YAAA;EACA,gCAAA;EACA,kBAAA;EACA,WAAA;AAs0FJ;AAr1FA;EAmBI,mBAAA;EACA,WAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,yCAAA;EACA,YAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,0DAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;AAq0FJ;AAt2FA;;EAsCI,4CAAA;EACA,aAAA;AAo0FJ;AA32FA;EA2CI,yBAAA;AAm0FJ;AA92FA;EA+CI,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;AAk0FJ;AAt3FA;EAuDM,gBAAA;EACA,MAAA;EACA,yBAAA;AAk0FN;AA33FA;EA6DM,mBAAA;EACA,6BAAA;EACA,gCAAA;AAi0FN;AAh4FA;EAkEU,cAAA;EACA,gBAAA;EACA,gBAAA;AAi0FV;AAr4FA;EAuEU,YAAA;EACA,0DAAA;AAi0FV;AAz4FA;;EA4EU,6BAAA;EACA,sBAAA;AAi0FV;AA/zFQ;EACE,iBAAA;AAi0FV;AAj5FA;EAsFM,gBAAA;AA8zFN;AAp5FA;EA0FM,mBAAA;AA6zFN;AAv5FA;EA8FM,WAAA;AA4zFN;AA15FA;EAkGM,mBAAA;AA2zFN",sourcesContent:[`@import '../../resources/lato.less';
@import '../../resources/slack-icons-font.less';
@import '../../resources/plastic/plastic_colors.less';
@import '../../resources/plastic/plastic_typography.less';
@import '../../resources/plastic/plastic_utilities.less';

@settings-font-family: Slack-Lato, Lucida Grande, sans-serif;

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
@monospace: Consolas, monaco, courier, monospace !important;
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
`],sourceRoot:""}]);const Me=ce},6520:m=>{"use strict";m.exports=function(b){var d=[];return d.toString=function(){return this.map(function(S){var v="",B=typeof S[5]!="undefined";return S[4]&&(v+="@supports (".concat(S[4],") {")),S[2]&&(v+="@media ".concat(S[2]," {")),B&&(v+="@layer".concat(S[5].length>0?" ".concat(S[5]):""," {")),v+=b(S),B&&(v+="}"),S[2]&&(v+="}"),S[4]&&(v+="}"),v}).join("")},d.i=function(S,v,B,w,R){typeof S=="string"&&(S=[[null,S,void 0]]);var k={};if(B)for(var D=0;D<this.length;D++){var q=this[D][0];q!=null&&(k[q]=!0)}for(var J=0;J<S.length;J++){var I=[].concat(S[J]);B&&k[I[0]]||(typeof R!="undefined"&&(typeof I[5]=="undefined"||(I[1]="@layer".concat(I[5].length>0?" ".concat(I[5]):""," {").concat(I[1],"}")),I[5]=R),v&&(I[2]&&(I[1]="@media ".concat(I[2]," {").concat(I[1],"}")),I[2]=v),w&&(I[4]?(I[1]="@supports (".concat(I[4],") {").concat(I[1],"}"),I[4]=w):I[4]="".concat(w)),d.push(I))}},d}},9571:m=>{"use strict";m.exports=function(b,d){return d||(d={}),b&&(b=String(b.__esModule?b.default:b),/^['"].*['"]$/.test(b)&&(b=b.slice(1,-1)),d.hash&&(b+=d.hash),/["'() \t\n]|(%20)/.test(b)||d.needQuotes?'"'.concat(b.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):b)}},264:m=>{"use strict";m.exports=function(b){var d=b[1],p=b[3];if(!p)return d;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(p)))),v="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),B="/*# ".concat(v," */");return[d].concat([B]).join(`
`)}return[d].join(`
`)}},2676:(m,b,d)=>{"use strict";var p=d(4038),S={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},w={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[p.ForwardRef]=B,R[p.Memo]=w;function k(oe){return p.isMemo(oe)?w:R[oe.$$typeof]||S}var D=Object.defineProperty,q=Object.getOwnPropertyNames,J=Object.getOwnPropertySymbols,I=Object.getOwnPropertyDescriptor,K=Object.getPrototypeOf,X=Object.prototype;function Y(oe,ce,me){if(typeof ce!="string"){if(X){var ye=K(ce);ye&&ye!==X&&Y(oe,ye,me)}var z=q(ce);J&&(z=z.concat(J(ce)));for(var W=k(oe),F=k(ce),y=0;y<z.length;++y){var se=z[y];if(!v[se]&&!(me&&me[se])&&!(F&&F[se])&&!(W&&W[se])){var xn=I(ce,se);try{D(oe,se,xn)}catch{}}}}return oe}m.exports=Y},4874:(m,b)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=typeof Symbol=="function"&&Symbol.for,p=d?Symbol.for("react.element"):60103,S=d?Symbol.for("react.portal"):60106,v=d?Symbol.for("react.fragment"):60107,B=d?Symbol.for("react.strict_mode"):60108,w=d?Symbol.for("react.profiler"):60114,R=d?Symbol.for("react.provider"):60109,k=d?Symbol.for("react.context"):60110,D=d?Symbol.for("react.async_mode"):60111,q=d?Symbol.for("react.concurrent_mode"):60111,J=d?Symbol.for("react.forward_ref"):60112,I=d?Symbol.for("react.suspense"):60113,K=d?Symbol.for("react.suspense_list"):60120,X=d?Symbol.for("react.memo"):60115,Y=d?Symbol.for("react.lazy"):60116,oe=d?Symbol.for("react.block"):60121,ce=d?Symbol.for("react.fundamental"):60117,me=d?Symbol.for("react.responder"):60118,ye=d?Symbol.for("react.scope"):60119;function z(F){if(typeof F=="object"&&F!==null){var y=F.$$typeof;switch(y){case p:switch(F=F.type,F){case D:case q:case v:case w:case B:case I:return F;default:switch(F=F&&F.$$typeof,F){case k:case J:case Y:case X:case R:return F;default:return y}}case S:return y}}}function W(F){return z(F)===q}b.AsyncMode=D,b.ConcurrentMode=q,b.ContextConsumer=k,b.ContextProvider=R,b.Element=p,b.ForwardRef=J,b.Fragment=v,b.Lazy=Y,b.Memo=X,b.Portal=S,b.Profiler=w,b.StrictMode=B,b.Suspense=I,b.isAsyncMode=function(F){return W(F)||z(F)===D},b.isConcurrentMode=W,b.isContextConsumer=function(F){return z(F)===k},b.isContextProvider=function(F){return z(F)===R},b.isElement=function(F){return typeof F=="object"&&F!==null&&F.$$typeof===p},b.isForwardRef=function(F){return z(F)===J},b.isFragment=function(F){return z(F)===v},b.isLazy=function(F){return z(F)===Y},b.isMemo=function(F){return z(F)===X},b.isPortal=function(F){return z(F)===S},b.isProfiler=function(F){return z(F)===w},b.isStrictMode=function(F){return z(F)===B},b.isSuspense=function(F){return z(F)===I},b.isValidElementType=function(F){return typeof F=="string"||typeof F=="function"||F===v||F===q||F===w||F===B||F===I||F===K||typeof F=="object"&&F!==null&&(F.$$typeof===Y||F.$$typeof===X||F.$$typeof===R||F.$$typeof===k||F.$$typeof===J||F.$$typeof===ce||F.$$typeof===me||F.$$typeof===ye||F.$$typeof===oe)},b.typeOf=z},4038:(m,b,d)=>{"use strict";m.exports=d(4874)},7760:(m,b,d)=>{"use strict";var p=d(6471);function S(){}function v(){}v.resetWarningCache=S,m.exports=function(){function B(k,D,q,J,I,K){if(K!==p){var X=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw X.name="Invariant Violation",X}}B.isRequired=B;function w(){return B}var R={array:B,bool:B,func:B,number:B,object:B,string:B,symbol:B,any:B,arrayOf:w,element:B,elementType:B,instanceOf:w,node:B,objectOf:w,oneOf:w,oneOfType:w,shape:w,exact:w,checkPropTypes:v,resetWarningCache:S};return R.PropTypes=R,R}},8182:(m,b,d)=>{if(0)var p,S;else m.exports=d(7760)()},6471:m=>{"use strict";var b="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";m.exports=b},5323:(m,b)=>{"use strict";var d;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=typeof Symbol=="function"&&Symbol.for,S=p?Symbol.for("react.element"):60103,v=p?Symbol.for("react.portal"):60106,B=p?Symbol.for("react.fragment"):60107,w=p?Symbol.for("react.strict_mode"):60108,R=p?Symbol.for("react.profiler"):60114,k=p?Symbol.for("react.provider"):60109,D=p?Symbol.for("react.context"):60110,q=p?Symbol.for("react.async_mode"):60111,J=p?Symbol.for("react.concurrent_mode"):60111,I=p?Symbol.for("react.forward_ref"):60112,K=p?Symbol.for("react.suspense"):60113,X=p?Symbol.for("react.suspense_list"):60120,Y=p?Symbol.for("react.memo"):60115,oe=p?Symbol.for("react.lazy"):60116,ce=p?Symbol.for("react.block"):60121,me=p?Symbol.for("react.fundamental"):60117,ye=p?Symbol.for("react.responder"):60118,z=p?Symbol.for("react.scope"):60119;function W(y){if(typeof y=="object"&&y!==null){var se=y.$$typeof;switch(se){case S:switch(y=y.type,y){case q:case J:case B:case R:case w:case K:return y;default:switch(y=y&&y.$$typeof,y){case D:case I:case oe:case Y:case k:return y;default:return se}}case v:return se}}}function F(y){return W(y)===J}d=q,d=J,d=D,d=k,d=S,d=I,d=B,d=oe,d=Y,d=v,d=R,d=w,d=K,d=function(y){return F(y)||W(y)===q},d=F,d=function(y){return W(y)===D},d=function(y){return W(y)===k},d=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===S},d=function(y){return W(y)===I},d=function(y){return W(y)===B},d=function(y){return W(y)===oe},d=function(y){return W(y)===Y},d=function(y){return W(y)===v},d=function(y){return W(y)===R},d=function(y){return W(y)===w},d=function(y){return W(y)===K},d=function(y){return typeof y=="string"||typeof y=="function"||y===B||y===J||y===R||y===w||y===K||y===X||typeof y=="object"&&y!==null&&(y.$$typeof===oe||y.$$typeof===Y||y.$$typeof===k||y.$$typeof===D||y.$$typeof===I||y.$$typeof===me||y.$$typeof===ye||y.$$typeof===z||y.$$typeof===ce)},d=W},8063:(m,b,d)=>{"use strict";d(5323)},382:m=>{"use strict";var b=[];function d(v){for(var B=-1,w=0;w<b.length;w++)if(b[w].identifier===v){B=w;break}return B}function p(v,B){for(var w={},R=[],k=0;k<v.length;k++){var D=v[k],q=B.base?D[0]+B.base:D[0],J=w[q]||0,I="".concat(q," ").concat(J);w[q]=J+1;var K=d(I),X={css:D[1],media:D[2],sourceMap:D[3],supports:D[4],layer:D[5]};if(K!==-1)b[K].references++,b[K].updater(X);else{var Y=S(X,B);B.byIndex=k,b.splice(k,0,{identifier:I,updater:Y,references:1})}R.push(I)}return R}function S(v,B){var w=B.domAPI(B);w.update(v);var R=function(D){if(D){if(D.css===v.css&&D.media===v.media&&D.sourceMap===v.sourceMap&&D.supports===v.supports&&D.layer===v.layer)return;w.update(v=D)}else w.remove()};return R}m.exports=function(v,B){B=B||{},v=v||[];var w=p(v,B);return function(k){k=k||[];for(var D=0;D<w.length;D++){var q=w[D],J=d(q);b[J].references--}for(var I=p(k,B),K=0;K<w.length;K++){var X=w[K],Y=d(X);b[Y].references===0&&(b[Y].updater(),b.splice(Y,1))}w=I}}},6349:m=>{"use strict";var b={};function d(S){if(typeof b[S]=="undefined"){var v=document.querySelector(S);if(window.HTMLIFrameElement&&v instanceof window.HTMLIFrameElement)try{v=v.contentDocument.head}catch{v=null}b[S]=v}return b[S]}function p(S,v){var B=d(S);if(!B)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");B.appendChild(v)}m.exports=p},8170:m=>{"use strict";function b(d){var p=document.createElement("style");return d.setAttributes(p,d.attributes),d.insert(p,d.options),p}m.exports=b},8990:(m,b,d)=>{"use strict";function p(S){var v=d.nc;v&&S.setAttribute("nonce",v)}m.exports=p},727:m=>{"use strict";function b(S,v,B){var w="";B.supports&&(w+="@supports (".concat(B.supports,") {")),B.media&&(w+="@media ".concat(B.media," {"));var R=typeof B.layer!="undefined";R&&(w+="@layer".concat(B.layer.length>0?" ".concat(B.layer):""," {")),w+=B.css,R&&(w+="}"),B.media&&(w+="}"),B.supports&&(w+="}");var k=B.sourceMap;k&&typeof btoa!="undefined"&&(w+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),v.styleTagTransform(w,S,v.options)}function d(S){if(S.parentNode===null)return!1;S.parentNode.removeChild(S)}function p(S){var v=S.insertStyleElement(S);return{update:function(w){b(v,S,w)},remove:function(){d(v)}}}m.exports=p},1487:m=>{"use strict";function b(d,p){if(p.styleSheet)p.styleSheet.cssText=d;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(d))}}m.exports=b},6723:(m,b,d)=>{"use strict";m.exports=d.p+"slack-icons-v25aaab12924ee17421031.woff2"},9138:(m,b,d)=>{"use strict";m.exports=d.p+"lato-blackd3e44e6115ad32c37176.woff2"},4392:(m,b,d)=>{"use strict";m.exports=d.p+"lato-bold31816c24a18fbc659282.woff2"},7:(m,b,d)=>{"use strict";m.exports=d.p+"lato-italic-black62bc5da14d9c6ff41e5f.woff2"},5959:(m,b,d)=>{"use strict";m.exports=d.p+"lato-italic-bold365ea5a303e2259ca5ab.woff2"},5906:(m,b,d)=>{"use strict";m.exports=d.p+"lato-italic-light074c7fc38126bb94664d.woff2"},9269:(m,b,d)=>{"use strict";m.exports=d.p+"lato-italic4484c4211566a05bd71b.woff2"},5539:(m,b,d)=>{"use strict";m.exports=d.p+"lato-light2815bd9ba07f2cbe781a.woff2"},4603:(m,b,d)=>{"use strict";m.exports=d.p+"lato-regularf1aa7a0753149183efa2.woff2"},5083:(m,b,d)=>{m.exports=d(4496)(172)},4496:m=>{"use strict";m.exports=self.rendererVendor}},te={};function P(m){var b=te[m];if(b!==void 0)return b.exports;var d=te[m]={id:m,exports:{}};return re[m](d,d.exports,P),d.exports}P.m=re,P.n=m=>{var b=m&&m.__esModule?()=>m.default:()=>m;return P.d(b,{a:b}),b},P.d=(m,b)=>{for(var d in b)P.o(b,d)&&!P.o(m,d)&&Object.defineProperty(m,d,{enumerable:!0,get:b[d]})},P.o=(m,b)=>Object.prototype.hasOwnProperty.call(m,b),P.r=m=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})},P.p="./",(()=>{P.b=document.baseURI||self.location.href;var m={982:0}})(),P.nc=void 0;var Tl={};(()=>{"use strict";var m={};P.r(m),P.d(m,{FunctionToString:()=>my,InboundFilters:()=>Fy,LinkedErrors:()=>Ly});var b={};P.r(b),P.d(b,{Breadcrumbs:()=>TB,Dedupe:()=>JB,GlobalHandlers:()=>Qy,HttpContext:()=>UB,LinkedErrors:()=>jB,TryCatch:()=>cB});var d={};P.r(d),P.d(d,{EventToMain:()=>oo,ScopeToMain:()=>YB});var p=P(5083),S=/["&<]/;function v(n){if(n.length===0||S.test(n)===!1)return n;for(var t=0,o=0,i="",c="";o<n.length;o++){switch(n.charCodeAt(o)){case 34:c="&quot;";break;case 38:c="&amp;";break;case 60:c="&lt;";break;default:continue}o!==t&&(i+=n.slice(t,o)),i+=c,t=o+1}return o!==t&&(i+=n.slice(t,o)),i}var B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w=0,R=Array.isArray;function k(n,t,o,i,c,a){var s,l,A={};for(l in t)l=="ref"?s=t[l]:A[l]=t[l];var f={type:n,props:A,key:o,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--w,__i:-1,__u:0,__source:c,__self:a};if(typeof n=="function"&&(s=n.defaultProps))for(l in s)A[l]===void 0&&(A[l]=s[l]);return p.options.vnode&&p.options.vnode(f),f}function D(n){var t=k(e,{tpl:n,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var q={},J=/[A-Z]/g;function I(n,t){if(r.attr){var o=r.attr(n,t);if(typeof o=="string")return o}if(n==="ref"||n==="key")return"";if(n==="style"&&typeof t=="object"){var i="";for(var c in t){var a=t[c];if(a!=null&&a!==""){var s=c[0]=="-"?c:q[c]||(q[c]=c.replace(J,"-$&").toLowerCase()),l=";";typeof a!="number"||s.startsWith("--")||B.test(s)||(l="px;"),i=i+s+":"+a+l}}return n+'="'+i+'"'}return t==null||t===!1||typeof t=="function"||typeof t=="object"?"":t===!0?n:n+'="'+v(t)+'"'}function K(n){if(n==null||typeof n=="boolean"||typeof n=="function")return null;if(typeof n=="object"){if(n.constructor===void 0)return n;if(R(n)){for(var t=0;t<n.length;t++)n[t]=K(n[t]);return n}}return v(""+n)}var X=P(382),Y=P.n(X),oe=P(727),ce=P.n(oe),me=P(6349),ye=P.n(me),z=P(8990),W=P.n(z),F=P(8170),y=P.n(F),se=P(1487),xn=P.n(se),qe=P(6261),Me={};Me.styleTagTransform=xn(),Me.setAttributes=W(),Me.insert=ye().bind(null,"head"),Me.domAPI=ce(),Me.insertStyleElement=y();var yv=Y()(qe.A,Me);const Bv=qe.A&&qe.A.locals?qe.A.locals:void 0;function xl(){this.__data__=[],this.size=0}const Ol=xl;function Il(n,t){return n===t||n!==n&&t!==t}const On=Il;function Rl(n,t){for(var o=n.length;o--;)if(On(n[o][0],t))return o;return-1}const ft=Rl;var Pl=Array.prototype,Dl=Pl.splice;function Nl(n){var t=this.__data__,o=ft(t,n);if(o<0)return!1;var i=t.length-1;return o==i?t.pop():Dl.call(t,o,1),--this.size,!0}const Ml=Nl;function Ll(n){var t=this.__data__,o=ft(t,n);return o<0?void 0:t[o][1]}const jl=Ll;function Ul(n){return ft(this.__data__,n)>-1}const Jl=Ul;function $l(n,t){var o=this.__data__,i=ft(o,n);return i<0?(++this.size,o.push([n,t])):o[i][1]=t,this}const ql=$l;function nn(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}nn.prototype.clear=Ol,nn.prototype.delete=Ml,nn.prototype.get=jl,nn.prototype.has=Jl,nn.prototype.set=ql;const ut=nn;function Hl(){this.__data__=new ut,this.size=0}const zl=Hl;function Gl(n){var t=this.__data__,o=t.delete(n);return this.size=t.size,o}const Wl=Gl;function Kl(n){return this.__data__.get(n)}const Yl=Kl;function Vl(n){return this.__data__.has(n)}const Xl=Vl;var Zl=typeof global=="object"&&global&&global.Object===Object&&global;const er=Zl;var Ql=typeof self=="object"&&self&&self.Object===Object&&self,eA=er||Ql||Function("return this")();const Ce=eA;var nA=Ce.Symbol;const he=nA;var nr=Object.prototype,tA=nr.hasOwnProperty,oA=nr.toString,In=he?he.toStringTag:void 0;function iA(n){var t=tA.call(n,In),o=n[In];try{n[In]=void 0;var i=!0}catch{}var c=oA.call(n);return i&&(t?n[In]=o:delete n[In]),c}const rA=iA;var cA=Object.prototype,aA=cA.toString;function sA(n){return aA.call(n)}const lA=sA;var AA="[object Null]",fA="[object Undefined]",tr=he?he.toStringTag:void 0;function uA(n){return n==null?n===void 0?fA:AA:tr&&tr in Object(n)?rA(n):lA(n)}const He=uA;function EA(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}const fe=EA;var dA="[object AsyncFunction]",gA="[object Function]",pA="[object GeneratorFunction]",hA="[object Proxy]";function bA(n){if(!fe(n))return!1;var t=He(n);return t==gA||t==pA||t==dA||t==hA}const Eo=bA;var _A=Ce["__core-js_shared__"];const go=_A;var or=function(){var n=/[^.]+$/.exec(go&&go.keys&&go.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function mA(n){return!!or&&or in n}const yA=mA;var BA=Function.prototype,FA=BA.toString;function CA(n){if(n!=null){try{return FA.call(n)}catch{}try{return n+""}catch{}}return""}const ze=CA;var vA=/[\\^$.*+?()[\]{}|]/g,kA=/^\[object .+?Constructor\]$/,wA=Function.prototype,SA=Object.prototype,TA=wA.toString,xA=SA.hasOwnProperty,OA=RegExp("^"+TA.call(xA).replace(vA,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function IA(n){if(!fe(n)||yA(n))return!1;var t=Eo(n)?OA:kA;return t.test(ze(n))}const RA=IA;function PA(n,t){return n==null?void 0:n[t]}const DA=PA;function NA(n,t){var o=DA(n,t);return RA(o)?o:void 0}const Ge=NA;var MA=Ge(Ce,"Map");const Rn=MA;var LA=Ge(Object,"create");const Pn=LA;function jA(){this.__data__=Pn?Pn(null):{},this.size=0}const UA=jA;function JA(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}const $A=JA;var qA="__lodash_hash_undefined__",HA=Object.prototype,zA=HA.hasOwnProperty;function GA(n){var t=this.__data__;if(Pn){var o=t[n];return o===qA?void 0:o}return zA.call(t,n)?t[n]:void 0}const WA=GA;var KA=Object.prototype,YA=KA.hasOwnProperty;function VA(n){var t=this.__data__;return Pn?t[n]!==void 0:YA.call(t,n)}const XA=VA;var ZA="__lodash_hash_undefined__";function QA(n,t){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=Pn&&t===void 0?ZA:t,this}const ef=QA;function tn(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}tn.prototype.clear=UA,tn.prototype.delete=$A,tn.prototype.get=WA,tn.prototype.has=XA,tn.prototype.set=ef;const ir=tn;function nf(){this.size=0,this.__data__={hash:new ir,map:new(Rn||ut),string:new ir}}const tf=nf;function of(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}const rf=of;function cf(n,t){var o=n.__data__;return rf(t)?o[typeof t=="string"?"string":"hash"]:o.map}const Et=cf;function af(n){var t=Et(this,n).delete(n);return this.size-=t?1:0,t}const sf=af;function lf(n){return Et(this,n).get(n)}const Af=lf;function ff(n){return Et(this,n).has(n)}const uf=ff;function Ef(n,t){var o=Et(this,n),i=o.size;return o.set(n,t),this.size+=o.size==i?0:1,this}const df=Ef;function on(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}on.prototype.clear=tf,on.prototype.delete=sf,on.prototype.get=Af,on.prototype.has=uf,on.prototype.set=df;const dt=on;var gf=200;function pf(n,t){var o=this.__data__;if(o instanceof ut){var i=o.__data__;if(!Rn||i.length<gf-1)return i.push([n,t]),this.size=++o.size,this;o=this.__data__=new dt(i)}return o.set(n,t),this.size=o.size,this}const hf=pf;function rn(n){var t=this.__data__=new ut(n);this.size=t.size}rn.prototype.clear=zl,rn.prototype.delete=Wl,rn.prototype.get=Yl,rn.prototype.has=Xl,rn.prototype.set=hf;const cn=rn;var bf="__lodash_hash_undefined__";function _f(n){return this.__data__.set(n,bf),this}const mf=_f;function yf(n){return this.__data__.has(n)}const Bf=yf;function gt(n){var t=-1,o=n==null?0:n.length;for(this.__data__=new dt;++t<o;)this.add(n[t])}gt.prototype.add=gt.prototype.push=mf,gt.prototype.has=Bf;const po=gt;function Ff(n,t){for(var o=-1,i=n==null?0:n.length;++o<i;)if(t(n[o],o,n))return!0;return!1}const Cf=Ff;function vf(n,t){return n.has(t)}const ho=vf;var kf=1,wf=2;function Sf(n,t,o,i,c,a){var s=o&kf,l=n.length,A=t.length;if(l!=A&&!(s&&A>l))return!1;var f=a.get(n),u=a.get(t);if(f&&u)return f==t&&u==n;var E=-1,g=!0,h=o&wf?new po:void 0;for(a.set(n,t),a.set(t,n);++E<l;){var _=n[E],T=t[E];if(i)var C=s?i(T,_,E,t,n,a):i(_,T,E,n,t,a);if(C!==void 0){if(C)continue;g=!1;break}if(h){if(!Cf(t,function(O,N){if(!ho(h,N)&&(_===O||c(_,O,o,i,a)))return h.push(N)})){g=!1;break}}else if(!(_===T||c(_,T,o,i,a))){g=!1;break}}return a.delete(n),a.delete(t),g}const rr=Sf;var Tf=Ce.Uint8Array;const pt=Tf;function xf(n){var t=-1,o=Array(n.size);return n.forEach(function(i,c){o[++t]=[c,i]}),o}const Of=xf;function If(n){var t=-1,o=Array(n.size);return n.forEach(function(i){o[++t]=i}),o}const bo=If;var Rf=1,Pf=2,Df="[object Boolean]",Nf="[object Date]",Mf="[object Error]",Lf="[object Map]",jf="[object Number]",Uf="[object RegExp]",Jf="[object Set]",$f="[object String]",qf="[object Symbol]",Hf="[object ArrayBuffer]",zf="[object DataView]",cr=he?he.prototype:void 0,_o=cr?cr.valueOf:void 0;function Gf(n,t,o,i,c,a,s){switch(o){case zf:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case Hf:return!(n.byteLength!=t.byteLength||!a(new pt(n),new pt(t)));case Df:case Nf:case jf:return On(+n,+t);case Mf:return n.name==t.name&&n.message==t.message;case Uf:case $f:return n==t+"";case Lf:var l=Of;case Jf:var A=i&Rf;if(l||(l=bo),n.size!=t.size&&!A)return!1;var f=s.get(n);if(f)return f==t;i|=Pf,s.set(n,t);var u=rr(l(n),l(t),i,c,a,s);return s.delete(n),u;case qf:if(_o)return _o.call(n)==_o.call(t)}return!1}const Wf=Gf;function Kf(n,t){for(var o=-1,i=t.length,c=n.length;++o<i;)n[c+o]=t[o];return n}const mo=Kf;var Yf=Array.isArray;const le=Yf;function Vf(n,t,o){var i=t(n);return le(n)?i:mo(i,o(n))}const ar=Vf;function Xf(n,t){for(var o=-1,i=n==null?0:n.length,c=0,a=[];++o<i;){var s=n[o];t(s,o,n)&&(a[c++]=s)}return a}const Zf=Xf;function Qf(){return[]}const sr=Qf;var eu=Object.prototype,nu=eu.propertyIsEnumerable,lr=Object.getOwnPropertySymbols,tu=lr?function(n){return n==null?[]:(n=Object(n),Zf(lr(n),function(t){return nu.call(n,t)}))}:sr;const yo=tu;function ou(n,t){for(var o=-1,i=Array(n);++o<n;)i[o]=t(o);return i}const iu=ou;function ru(n){return n!=null&&typeof n=="object"}const ve=ru;var cu="[object Arguments]";function au(n){return ve(n)&&He(n)==cu}const Ar=au;var fr=Object.prototype,su=fr.hasOwnProperty,lu=fr.propertyIsEnumerable,Au=Ar(function(){return arguments}())?Ar:function(n){return ve(n)&&su.call(n,"callee")&&!lu.call(n,"callee")};const an=Au;function fu(){return!1}const uu=fu;var ur=typeof ge=="object"&&ge&&!ge.nodeType&&ge,Er=ur&&typeof pe=="object"&&pe&&!pe.nodeType&&pe,Eu=Er&&Er.exports===ur,dr=Eu?Ce.Buffer:void 0,du=dr?dr.isBuffer:void 0,gu=du||uu;const sn=gu;var pu=9007199254740991,hu=/^(?:0|[1-9]\d*)$/;function bu(n,t){var o=typeof n;return t=t==null?pu:t,!!t&&(o=="number"||o!="symbol"&&hu.test(n))&&n>-1&&n%1==0&&n<t}const ht=bu;var _u=9007199254740991;function mu(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=_u}const Bo=mu;var yu="[object Arguments]",Bu="[object Array]",Fu="[object Boolean]",Cu="[object Date]",vu="[object Error]",ku="[object Function]",wu="[object Map]",Su="[object Number]",Tu="[object Object]",xu="[object RegExp]",Ou="[object Set]",Iu="[object String]",Ru="[object WeakMap]",Pu="[object ArrayBuffer]",Du="[object DataView]",Nu="[object Float32Array]",Mu="[object Float64Array]",Lu="[object Int8Array]",ju="[object Int16Array]",Uu="[object Int32Array]",Ju="[object Uint8Array]",$u="[object Uint8ClampedArray]",qu="[object Uint16Array]",Hu="[object Uint32Array]",H={};H[Nu]=H[Mu]=H[Lu]=H[ju]=H[Uu]=H[Ju]=H[$u]=H[qu]=H[Hu]=!0,H[yu]=H[Bu]=H[Pu]=H[Fu]=H[Du]=H[Cu]=H[vu]=H[ku]=H[wu]=H[Su]=H[Tu]=H[xu]=H[Ou]=H[Iu]=H[Ru]=!1;function zu(n){return ve(n)&&Bo(n.length)&&!!H[He(n)]}const Gu=zu;function Wu(n){return function(t){return n(t)}}const bt=Wu;var gr=typeof ge=="object"&&ge&&!ge.nodeType&&ge,Dn=gr&&typeof pe=="object"&&pe&&!pe.nodeType&&pe,Ku=Dn&&Dn.exports===gr,Fo=Ku&&er.process,Yu=function(){try{var n=Dn&&Dn.require&&Dn.require("util").types;return n||Fo&&Fo.binding&&Fo.binding("util")}catch{}}();const ln=Yu;var pr=ln&&ln.isTypedArray,Vu=pr?bt(pr):Gu;const _t=Vu;var Xu=Object.prototype,Zu=Xu.hasOwnProperty;function Qu(n,t){var o=le(n),i=!o&&an(n),c=!o&&!i&&sn(n),a=!o&&!i&&!c&&_t(n),s=o||i||c||a,l=s?iu(n.length,String):[],A=l.length;for(var f in n)(t||Zu.call(n,f))&&!(s&&(f=="length"||c&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||ht(f,A)))&&l.push(f);return l}const hr=Qu;var eE=Object.prototype;function nE(n){var t=n&&n.constructor,o=typeof t=="function"&&t.prototype||eE;return n===o}const mt=nE;function tE(n,t){return function(o){return n(t(o))}}const br=tE;var oE=br(Object.keys,Object);const iE=oE;var rE=Object.prototype,cE=rE.hasOwnProperty;function aE(n){if(!mt(n))return iE(n);var t=[];for(var o in Object(n))cE.call(n,o)&&o!="constructor"&&t.push(o);return t}const _r=aE;function sE(n){return n!=null&&Bo(n.length)&&!Eo(n)}const An=sE;function lE(n){return An(n)?hr(n):_r(n)}const Nn=lE;function AE(n){return ar(n,Nn,yo)}const Co=AE;var fE=1,uE=Object.prototype,EE=uE.hasOwnProperty;function dE(n,t,o,i,c,a){var s=o&fE,l=Co(n),A=l.length,f=Co(t),u=f.length;if(A!=u&&!s)return!1;for(var E=A;E--;){var g=l[E];if(!(s?g in t:EE.call(t,g)))return!1}var h=a.get(n),_=a.get(t);if(h&&_)return h==t&&_==n;var T=!0;a.set(n,t),a.set(t,n);for(var C=s;++E<A;){g=l[E];var O=n[g],N=t[g];if(i)var G=s?i(N,O,g,t,n,a):i(O,N,g,n,t,a);if(!(G===void 0?O===N||c(O,N,o,i,a):G)){T=!1;break}C||(C=g=="constructor")}if(T&&!C){var Z=n.constructor,Q=t.constructor;Z!=Q&&"constructor"in n&&"constructor"in t&&!(typeof Z=="function"&&Z instanceof Z&&typeof Q=="function"&&Q instanceof Q)&&(T=!1)}return a.delete(n),a.delete(t),T}const gE=dE;var pE=Ge(Ce,"DataView");const vo=pE;var hE=Ge(Ce,"Promise");const ko=hE;var bE=Ge(Ce,"Set");const fn=bE;var _E=Ge(Ce,"WeakMap");const wo=_E;var mr="[object Map]",mE="[object Object]",yr="[object Promise]",Br="[object Set]",Fr="[object WeakMap]",Cr="[object DataView]",yE=ze(vo),BE=ze(Rn),FE=ze(ko),CE=ze(fn),vE=ze(wo),We=He;(vo&&We(new vo(new ArrayBuffer(1)))!=Cr||Rn&&We(new Rn)!=mr||ko&&We(ko.resolve())!=yr||fn&&We(new fn)!=Br||wo&&We(new wo)!=Fr)&&(We=function(n){var t=He(n),o=t==mE?n.constructor:void 0,i=o?ze(o):"";if(i)switch(i){case yE:return Cr;case BE:return mr;case FE:return yr;case CE:return Br;case vE:return Fr}return t});const un=We;var kE=1,vr="[object Arguments]",kr="[object Array]",yt="[object Object]",wE=Object.prototype,wr=wE.hasOwnProperty;function SE(n,t,o,i,c,a){var s=le(n),l=le(t),A=s?kr:un(n),f=l?kr:un(t);A=A==vr?yt:A,f=f==vr?yt:f;var u=A==yt,E=f==yt,g=A==f;if(g&&sn(n)){if(!sn(t))return!1;s=!0,u=!1}if(g&&!u)return a||(a=new cn),s||_t(n)?rr(n,t,o,i,c,a):Wf(n,t,A,o,i,c,a);if(!(o&kE)){var h=u&&wr.call(n,"__wrapped__"),_=E&&wr.call(t,"__wrapped__");if(h||_){var T=h?n.value():n,C=_?t.value():t;return a||(a=new cn),c(T,C,o,i,a)}}return g?(a||(a=new cn),gE(n,t,o,i,c,a)):!1}const TE=SE;function Sr(n,t,o,i,c){return n===t?!0:n==null||t==null||!ve(n)&&!ve(t)?n!==n&&t!==t:TE(n,t,o,i,Sr,c)}const So=Sr;var xE=1,OE=2;function IE(n,t,o,i){var c=o.length,a=c,s=!i;if(n==null)return!a;for(n=Object(n);c--;){var l=o[c];if(s&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++c<a;){l=o[c];var A=l[0],f=n[A],u=l[1];if(s&&l[2]){if(f===void 0&&!(A in n))return!1}else{var E=new cn;if(i)var g=i(f,u,A,n,t,E);if(!(g===void 0?So(u,f,xE|OE,i,E):g))return!1}}return!0}const RE=IE;function PE(n){return n===n&&!fe(n)}const Tr=PE;function DE(n){for(var t=Nn(n),o=t.length;o--;){var i=t[o],c=n[i];t[o]=[i,c,Tr(c)]}return t}const NE=DE;function ME(n,t){return function(o){return o==null?!1:o[n]===t&&(t!==void 0||n in Object(o))}}const xr=ME;function LE(n){var t=NE(n);return t.length==1&&t[0][2]?xr(t[0][0],t[0][1]):function(o){return o===n||RE(o,n,t)}}const jE=LE;var UE="[object Symbol]";function JE(n){return typeof n=="symbol"||ve(n)&&He(n)==UE}const Bt=JE;var $E=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,qE=/^\w*$/;function HE(n,t){if(le(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||Bt(n)?!0:qE.test(n)||!$E.test(n)||t!=null&&n in Object(t)}const To=HE;var zE="Expected a function";function xo(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new TypeError(zE);var o=function(){var i=arguments,c=t?t.apply(this,i):i[0],a=o.cache;if(a.has(c))return a.get(c);var s=n.apply(this,i);return o.cache=a.set(c,s)||a,s};return o.cache=new(xo.Cache||dt),o}xo.Cache=dt;const GE=xo;var WE=500;function KE(n){var t=GE(n,function(i){return o.size===WE&&o.clear(),i}),o=t.cache;return t}const YE=KE;var VE=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,XE=/\\(\\)?/g,ZE=YE(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(VE,function(o,i,c,a){t.push(c?a.replace(XE,"$1"):i||o)}),t});const QE=ZE;function ed(n,t){for(var o=-1,i=n==null?0:n.length,c=Array(i);++o<i;)c[o]=t(n[o],o,n);return c}const Or=ed;var nd=1/0,Ir=he?he.prototype:void 0,Rr=Ir?Ir.toString:void 0;function Pr(n){if(typeof n=="string")return n;if(le(n))return Or(n,Pr)+"";if(Bt(n))return Rr?Rr.call(n):"";var t=n+"";return t=="0"&&1/n==-nd?"-0":t}const td=Pr;function od(n){return n==null?"":td(n)}const id=od;function rd(n,t){return le(n)?n:To(n,t)?[n]:QE(id(n))}const Oo=rd;var cd=1/0;function ad(n){if(typeof n=="string"||Bt(n))return n;var t=n+"";return t=="0"&&1/n==-cd?"-0":t}const Mn=ad;function sd(n,t){t=Oo(t,n);for(var o=0,i=t.length;n!=null&&o<i;)n=n[Mn(t[o++])];return o&&o==i?n:void 0}const Dr=sd;function ld(n,t,o){var i=n==null?void 0:Dr(n,t);return i===void 0?o:i}const En=ld;function Ad(n,t){return n!=null&&t in Object(n)}const fd=Ad;function ud(n,t,o){t=Oo(t,n);for(var i=-1,c=t.length,a=!1;++i<c;){var s=Mn(t[i]);if(!(a=n!=null&&o(n,s)))break;n=n[s]}return a||++i!=c?a:(c=n==null?0:n.length,!!c&&Bo(c)&&ht(s,c)&&(le(n)||an(n)))}const Nr=ud;function Ed(n,t){return n!=null&&Nr(n,t,fd)}const dd=Ed;var gd=1,pd=2;function hd(n,t){return To(n)&&Tr(t)?xr(Mn(n),t):function(o){var i=En(o,n);return i===void 0&&i===t?dd(o,n):So(t,i,gd|pd)}}const bd=hd;function _d(n){return n}const Io=_d;function md(n){return function(t){return t==null?void 0:t[n]}}const yd=md;function Bd(n){return function(t){return Dr(t,n)}}const Fd=Bd;function Cd(n){return To(n)?yd(Mn(n)):Fd(n)}const vd=Cd;function kd(n){return typeof n=="function"?n:n==null?Io:typeof n=="object"?le(n)?bd(n[0],n[1]):jE(n):vd(n)}const Mr=kd;function wd(n){return function(t,o,i){var c=Object(t);if(!An(t)){var a=Mr(o,3);t=Nn(t),o=function(l){return a(c[l],l,c)}}var s=n(t,o,i);return s>-1?c[a?t[s]:s]:void 0}}const Sd=wd;function Td(n,t,o,i){for(var c=n.length,a=o+(i?1:-1);i?a--:++a<c;)if(t(n[a],a,n))return a;return-1}const Lr=Td;var xd=/\s/;function Od(n){for(var t=n.length;t--&&xd.test(n.charAt(t)););return t}const Id=Od;var Rd=/^\s+/;function Pd(n){return n&&n.slice(0,Id(n)+1).replace(Rd,"")}const Dd=Pd;var jr=NaN,Nd=/^[-+]0x[0-9a-f]+$/i,Md=/^0b[01]+$/i,Ld=/^0o[0-7]+$/i,jd=parseInt;function Ud(n){if(typeof n=="number")return n;if(Bt(n))return jr;if(fe(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=fe(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=Dd(n);var o=Md.test(n);return o||Ld.test(n)?jd(n.slice(2),o?2:8):Nd.test(n)?jr:+n}const Jd=Ud;var Ur=1/0,$d=17976931348623157e292;function qd(n){if(!n)return n===0?n:0;if(n=Jd(n),n===Ur||n===-Ur){var t=n<0?-1:1;return t*$d}return n===n?n:0}const Hd=qd;function zd(n){var t=Hd(n),o=t%1;return t===t?o?t-o:t:0}const Jr=zd;var Gd=Math.max;function Wd(n,t,o){var i=n==null?0:n.length;if(!i)return-1;var c=o==null?0:Jr(o);return c<0&&(c=Gd(i+c,0)),Lr(n,Mr(t,3),c)}var Kd=Sd(Wd);const Yd=Kd;var Vd=(n=>(n.BOX="box",n.DROPBOX="dropbox",n.GDRIVE="gdrive",n.ONEDRIVE="onedrive",n))(Vd||{}),$r=(n=>(n.APP="app",n.AUTH="auth",n.POSTS="posts",n.REPORT_ISSUE="report_issue",n))($r||{}),Xd=(n=>(n.ABOUT_BOX="about-box",n.SETTINGS_EDITOR="settings-editor",n.BASIC_AUTH_VIEW="basic-auth-view",n.NET_LOG_WINDOW="net-log-window",n))(Xd||{});function Ro(n){return Zd(n,$r.APP)}function Cv(n){var t;return(t=Ro(n))==null?void 0:t.id}function vv(n,t,o){var i;return((i=n[t])==null?void 0:i.type)===o}function kv(n){var t;return((t=Ro(n))==null?void 0:t.state)===WebContentsLifeCycle.WEBAPP_LOADED}function Zd(n,t){return Yd(Object.values(n),o=>o.type===t)}var qr=he?he.isConcatSpreadable:void 0;function Qd(n){return le(n)||an(n)||!!(qr&&n&&n[qr])}const eg=Qd;function Hr(n,t,o,i,c){var a=-1,s=n.length;for(o||(o=eg),c||(c=[]);++a<s;){var l=n[a];t>0&&o(l)?t>1?Hr(l,t-1,o,i,c):mo(c,l):i||(c[c.length]=l)}return c}const zr=Hr;function ng(n,t,o){switch(o.length){case 0:return n.call(t);case 1:return n.call(t,o[0]);case 2:return n.call(t,o[0],o[1]);case 3:return n.call(t,o[0],o[1],o[2])}return n.apply(t,o)}const tg=ng;var Gr=Math.max;function og(n,t,o){return t=Gr(t===void 0?n.length-1:t,0),function(){for(var i=arguments,c=-1,a=Gr(i.length-t,0),s=Array(a);++c<a;)s[c]=i[t+c];c=-1;for(var l=Array(t+1);++c<t;)l[c]=i[c];return l[t]=o(s),tg(n,this,l)}}const ig=og;function rg(n){return function(){return n}}const cg=rg;var ag=function(){try{var n=Ge(Object,"defineProperty");return n({},"",{}),n}catch{}}();const Ft=ag;var sg=Ft?function(n,t){return Ft(n,"toString",{configurable:!0,enumerable:!1,value:cg(t),writable:!0})}:Io;const lg=sg;var Ag=800,fg=16,ug=Date.now;function Eg(n){var t=0,o=0;return function(){var i=ug(),c=fg-(i-o);if(o=i,c>0){if(++t>=Ag)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}var dg=Eg(lg);const gg=dg;function pg(n,t){return gg(ig(n,t,Io),n+"")}const Po=pg;function hg(n){return n!==n}const bg=hg;function _g(n,t,o){for(var i=o-1,c=n.length;++i<c;)if(n[i]===t)return i;return-1}const mg=_g;function yg(n,t,o){return t===t?mg(n,t,o):Lr(n,bg,o)}const Bg=yg;function Fg(n,t){var o=n==null?0:n.length;return!!o&&Bg(n,t,0)>-1}const Wr=Fg;function Cg(n,t,o){for(var i=-1,c=n==null?0:n.length;++i<c;)if(o(t,n[i]))return!0;return!1}const Kr=Cg;function vg(){}const Yr=vg;var kg=1/0,wg=fn&&1/bo(new fn([,-0]))[1]==kg?function(n){return new fn(n)}:Yr;const Sg=wg;var Tg=200;function xg(n,t,o){var i=-1,c=Wr,a=n.length,s=!0,l=[],A=l;if(o)s=!1,c=Kr;else if(a>=Tg){var f=t?null:Sg(n);if(f)return bo(f);s=!1,c=ho,A=new po}else A=t?[]:l;e:for(;++i<a;){var u=n[i],E=t?t(u):u;if(u=o||u!==0?u:0,s&&E===E){for(var g=A.length;g--;)if(A[g]===E)continue e;t&&A.push(E),l.push(u)}else c(A,E,o)||(A!==l&&A.push(E),l.push(u))}return l}const Og=xg;function Ig(n){return ve(n)&&An(n)}const Ct=Ig;var Rg=Po(function(n){return Og(zr(n,1,Ct,!0))});const Pg=Rg;function Dg(n,t,o){t=="__proto__"&&Ft?Ft(n,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[t]=o}const Do=Dg;function Ng(n,t,o){(o!==void 0&&!On(n[t],o)||o===void 0&&!(t in n))&&Do(n,t,o)}const No=Ng;function Mg(n){return function(t,o,i){for(var c=-1,a=Object(t),s=i(t),l=s.length;l--;){var A=s[n?l:++c];if(o(a[A],A,a)===!1)break}return t}}var Lg=Mg();const jg=Lg;var Vr=typeof ge=="object"&&ge&&!ge.nodeType&&ge,Xr=Vr&&typeof pe=="object"&&pe&&!pe.nodeType&&pe,Ug=Xr&&Xr.exports===Vr,Zr=Ug?Ce.Buffer:void 0,Qr=Zr?Zr.allocUnsafe:void 0;function Jg(n,t){if(t)return n.slice();var o=n.length,i=Qr?Qr(o):new n.constructor(o);return n.copy(i),i}const ec=Jg;function $g(n){var t=new n.constructor(n.byteLength);return new pt(t).set(new pt(n)),t}const Mo=$g;function qg(n,t){var o=t?Mo(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.length)}const nc=qg;function Hg(n,t){var o=-1,i=n.length;for(t||(t=Array(i));++o<i;)t[o]=n[o];return t}const tc=Hg;var oc=Object.create,zg=function(){function n(){}return function(t){if(!fe(t))return{};if(oc)return oc(t);n.prototype=t;var o=new n;return n.prototype=void 0,o}}();const Gg=zg;var Wg=br(Object.getPrototypeOf,Object);const Lo=Wg;function Kg(n){return typeof n.constructor=="function"&&!mt(n)?Gg(Lo(n)):{}}const ic=Kg;var Yg="[object Object]",Vg=Function.prototype,Xg=Object.prototype,rc=Vg.toString,Zg=Xg.hasOwnProperty,Qg=rc.call(Object);function ep(n){if(!ve(n)||He(n)!=Yg)return!1;var t=Lo(n);if(t===null)return!0;var o=Zg.call(t,"constructor")&&t.constructor;return typeof o=="function"&&o instanceof o&&rc.call(o)==Qg}const cc=ep;function np(n,t){if(!(t==="constructor"&&typeof n[t]=="function")&&t!="__proto__")return n[t]}const jo=np;var tp=Object.prototype,op=tp.hasOwnProperty;function ip(n,t,o){var i=n[t];(!(op.call(n,t)&&On(i,o))||o===void 0&&!(t in n))&&Do(n,t,o)}const Uo=ip;function rp(n,t,o,i){var c=!o;o||(o={});for(var a=-1,s=t.length;++a<s;){var l=t[a],A=i?i(o[l],n[l],l,o,n):void 0;A===void 0&&(A=n[l]),c?Do(o,l,A):Uo(o,l,A)}return o}const Ln=rp;function cp(n){var t=[];if(n!=null)for(var o in Object(n))t.push(o);return t}const ap=cp;var sp=Object.prototype,lp=sp.hasOwnProperty;function Ap(n){if(!fe(n))return ap(n);var t=mt(n),o=[];for(var i in n)i=="constructor"&&(t||!lp.call(n,i))||o.push(i);return o}const fp=Ap;function up(n){return An(n)?hr(n,!0):fp(n)}const jn=up;function Ep(n){return Ln(n,jn(n))}const dp=Ep;function gp(n,t,o,i,c,a,s){var l=jo(n,o),A=jo(t,o),f=s.get(A);if(f){No(n,o,f);return}var u=a?a(l,A,o+"",n,t,s):void 0,E=u===void 0;if(E){var g=le(A),h=!g&&sn(A),_=!g&&!h&&_t(A);u=A,g||h||_?le(l)?u=l:Ct(l)?u=tc(l):h?(E=!1,u=ec(A,!0)):_?(E=!1,u=nc(A,!0)):u=[]:cc(A)||an(A)?(u=l,an(l)?u=dp(l):(!fe(l)||Eo(l))&&(u=ic(A))):E=!1}E&&(s.set(A,u),c(u,A,i,a,s),s.delete(A)),No(n,o,u)}const pp=gp;function ac(n,t,o,i,c){n!==t&&jg(t,function(a,s){if(c||(c=new cn),fe(a))pp(n,t,s,o,ac,i,c);else{var l=i?i(jo(n,s),a,s+"",n,t,c):void 0;l===void 0&&(l=a),No(n,s,l)}},jn)}const hp=ac;function bp(n,t,o){if(!fe(o))return!1;var i=typeof t;return(i=="number"?An(o)&&ht(t,o.length):i=="string"&&t in o)?On(o[t],n):!1}const _p=bp;function mp(n){return Po(function(t,o){var i=-1,c=o.length,a=c>1?o[c-1]:void 0,s=c>2?o[2]:void 0;for(a=n.length>3&&typeof a=="function"?(c--,a):void 0,s&&_p(o[0],o[1],s)&&(a=c<3?void 0:a,c=1),t=Object(t);++i<c;){var l=o[i];l&&n(t,l,i,a)}return t})}var yp=mp(function(n,t,o,i){hp(n,t,o,i)});const Bp=yp;function sc(n){return vp(n)||Cp(n)||Fp()}function Fp(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Cp(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function vp(n){if(Array.isArray(n)){for(var t=0,o=new Array(n.length);t<n.length;t++)o[t]=n[t];return o}}function lc(n,t){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),o.push.apply(o,i)}return o}function Jo(n){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?lc(o,!0).forEach(function(i){kp(n,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(o)):lc(o).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(o,i))})}return n}function kp(n,t,o){return t in n?Object.defineProperty(n,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[t]=o,n}var Ac={registry:[],bootstrapped:!1},wp=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ac,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case REGISTER:return Jo({},t,{registry:[].concat(sc(t.registry),[o.key])});case REHYDRATE:var i=t.registry.indexOf(o.key),c=sc(t.registry);return c.splice(i,1),Jo({},t,{registry:c,bootstrapped:c.length===0});default:return t}};function xv(n,t,o){if(0)var i,c;var a=o||!1,s=createStore(wp,Ac,t&&t.enhancer?t.enhancer:void 0),l=function(E){s.dispatch({type:REGISTER,key:E})},A=function(E,g,h){var _={type:REHYDRATE,payload:g,err:h,key:E};n.dispatch(_),s.dispatch(_),a&&f.getState().bootstrapped&&(a(),a=!1)},f=Jo({},s,{purge:function(){var E=[];return n.dispatch({type:PURGE,result:function(h){E.push(h)}}),Promise.all(E)},flush:function(){var E=[];return n.dispatch({type:FLUSH,result:function(h){E.push(h)}}),Promise.all(E)},pause:function(){n.dispatch({type:PAUSE})},persist:function(){n.dispatch({type:PERSIST,register:l,rehydrate:A})}});return t&&t.manualPersist||f.persist(),f}function Ov(n=getDefaultSettings(),t){var o;switch(t.type){case SETTINGS.UPDATE_SETTINGS:const i=(o=t.meta)==null?void 0:o.layer;return Un(n,t.payload,i);case SETTINGS.ZOOM_IN:return $o(n,n.zoomLevel+1);case SETTINGS.ZOOM_OUT:return $o(n,n.zoomLevel-1);case SETTINGS.RESET_ZOOM:return $o(n,0);case SETTINGS.WHITELIST_PROTOCOL:return Sp(n,t.payload);case SETTINGS.ALLOWLIST_FILE_EXT:return Un(n,{allowedFileExts:[t.payload]});case REHYDRATE:return Tp(n,t.payload);default:return n}}function $o(n,t){return Un(n,{zoomLevel:clamp(t,-3,5)})}function Sp(n,t){return HOSTNAME_SPECIFIC_PROTOCOLS.includes(t.protocol)&&t.hostname?Un(n,{allowedHostnames:{[t.protocol]:[t.hostname]}}):Un(n,{whitelistedUrlSchemes:[t.protocol]})}function Tp(n,t){return t?vt(n,t==null?void 0:t.settings):n}const xp=(n,t)=>Array.isArray(n)&&Array.isArray(t)?Pg(n,t):void 0,vt=(...n)=>Bp({},...n,xp);function Un(n,t,o=SettingsLayer.UserChoices){const i=vt(getDefaultSettings(),n,{[o]:o===SettingsLayer.UserChoices?omit(t,Object.values(SettingsLayer)):t});return vt(i.slackDefaults,i.itDefaults,i.userChoices,i.itPolicy,{slackDefaults:i.slackDefaults,itDefaults:i.itDefaults,userChoices:i.userChoices,itPolicy:i.itPolicy})}var Op=(n,t,o)=>{if(t.length===1&&t[0]===o){let i=!1;try{const c={};n(c)===c&&(i=!0)}catch{}if(i){let c;try{throw new Error}catch(a){({stack:c}=a)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:c})}}},Ip=(n,t,o)=>{const{memoize:i,memoizeOptions:c}=t,{inputSelectorResults:a,inputSelectorResultsCopy:s}=n,l=i(()=>({}),...c);if(!(l.apply(null,a)===l.apply(null,s))){let f;try{throw new Error}catch(u){({stack:f}=u)}console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:o,firstInputs:a,secondInputs:s,stack:f})}},fc={inputStabilityCheck:"once",identityFunctionCheck:"once"},Iv=n=>{Object.assign(fc,n)},kt="NOT_FOUND";function uc(n,t=`expected a function, instead received ${typeof n}`){if(typeof n!="function")throw new TypeError(t)}function Rp(n,t=`expected an object, instead received ${typeof n}`){if(typeof n!="object")throw new TypeError(t)}function Pp(n,t="expected all items to be functions, instead received the following types: "){if(!n.every(o=>typeof o=="function")){const o=n.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${o}]`)}}var Ec=n=>Array.isArray(n)?n:[n];function Dp(n){const t=Array.isArray(n[0])?n[0]:n;return Pp(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Np(n,t){const o=[],{length:i}=n;for(let c=0;c<i;c++)o.push(n[c].apply(null,t));return o}var Rv=(n,t)=>{const{identityFunctionCheck:o,inputStabilityCheck:i}={...fc,...t};return{identityFunctionCheck:{shouldRun:o==="always"||o==="once"&&n,run:Op},inputStabilityCheck:{shouldRun:i==="always"||i==="once"&&n,run:Ip}}},dc=0,Se=null,qo=class{constructor(n,t=Ho){V(this,"revision",dc);V(this,"_value");V(this,"_lastValue");V(this,"_isEqual",Ho);this._value=this._lastValue=n,this._isEqual=t}get value(){return Se==null||Se.add(this),this._value}set value(n){this.value!==n&&(this._value=n,this.revision=++dc)}};function Ho(n,t){return n===t}var Mp=class{constructor(n){V(this,"_cachedValue");V(this,"_cachedRevision",-1);V(this,"_deps",[]);V(this,"hits",0);V(this,"fn");this.fn=n}clear(){this._cachedValue=void 0,this._cachedRevision=-1,this._deps=[],this.hits=0}get value(){if(this.revision>this._cachedRevision){const{fn:n}=this,t=new Set,o=Se;Se=t,this._cachedValue=n(),Se=o,this.hits++,this._deps=Array.from(t),this._cachedRevision=this.revision}return Se==null||Se.add(this),this._cachedValue}get revision(){return Math.max(...this._deps.map(n=>n.revision),0)}};function zo(n){return n instanceof qo||console.warn("Not a valid cell! ",n),n.value}function Lp(n,t){if(!(n instanceof qo))throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");n.value=n._lastValue=t}function jp(n,t=Ho){return new qo(n,t)}function Up(n){return uc(n,"the first parameter to `createCache` must be a function"),new Mp(n)}var Jp=(n,t)=>!1;function wt(){return jp(null,Jp)}function St(n,t){Lp(n,t)}var gc=n=>{let t=n.collectionTag;t===null&&(t=n.collectionTag=wt()),zo(t)},Tt=n=>{const t=n.collectionTag;t!==null&&St(t,null)},Pv=Symbol(),pc=0,$p=Object.getPrototypeOf({}),qp=class{constructor(n){V(this,"proxy",new Proxy(this,Jn));V(this,"tag",wt());V(this,"tags",{});V(this,"children",{});V(this,"collectionTag",null);V(this,"id",pc++);this.value=n,this.value=n,this.tag.value=n}},Jn={get(n,t){function o(){const{value:c}=n,a=Reflect.get(c,t);if(typeof t=="symbol"||t in $p)return a;if(typeof a=="object"&&a!==null){let s=n.children[t];return s===void 0&&(s=n.children[t]=hc(a)),s.tag&&zo(s.tag),s.proxy}else{let s=n.tags[t];return s===void 0&&(s=n.tags[t]=wt(),s.value=a),zo(s),a}}return o()},ownKeys(n){return gc(n),Reflect.ownKeys(n.value)},getOwnPropertyDescriptor(n,t){return Reflect.getOwnPropertyDescriptor(n.value,t)},has(n,t){return Reflect.has(n.value,t)}},Hp=class{constructor(n){V(this,"proxy",new Proxy([this],zp));V(this,"tag",wt());V(this,"tags",{});V(this,"children",{});V(this,"collectionTag",null);V(this,"id",pc++);this.value=n,this.value=n,this.tag.value=n}},zp={get([n],t){return t==="length"&&gc(n),Jn.get(n,t)},ownKeys([n]){return Jn.ownKeys(n)},getOwnPropertyDescriptor([n],t){return Jn.getOwnPropertyDescriptor(n,t)},has([n],t){return Jn.has(n,t)}};function hc(n){return Array.isArray(n)?new Hp(n):new qp(n)}function bc(n,t){const{value:o,tags:i,children:c}=n;if(n.value=t,Array.isArray(o)&&Array.isArray(t)&&o.length!==t.length)Tt(n);else if(o!==t){let a=0,s=0,l=!1;for(const f in o)a++;for(const f in t)if(s++,!(f in o)){l=!0;break}(l||a!==s)&&Tt(n)}for(const a in i){const s=o[a],l=t[a];s!==l&&(Tt(n),St(i[a],l)),typeof l=="object"&&l!==null&&delete i[a]}for(const a in c){const s=c[a],l=t[a];s.value!==l&&(typeof l=="object"&&l!==null?bc(s,l):(_c(s),delete c[a]))}}function _c(n){n.tag&&St(n.tag,null),Tt(n);for(const t in n.tags)St(n.tags[t],null);for(const t in n.children)_c(n.children[t])}function Gp(n){let t;return{get(o){return t&&n(t.key,o)?t.value:kt},put(o,i){t={key:o,value:i}},getEntries(){return t?[t]:[]},clear(){t=void 0}}}function Wp(n,t){let o=[];function i(l){const A=o.findIndex(f=>t(l,f.key));if(A>-1){const f=o[A];return A>0&&(o.splice(A,1),o.unshift(f)),f.value}return kt}function c(l,A){i(l)===kt&&(o.unshift({key:l,value:A}),o.length>n&&o.pop())}function a(){return o}function s(){o=[]}return{get:i,put:c,getEntries:a,clear:s}}var mc=(n,t)=>n===t;function yc(n){return function(o,i){if(o===null||i===null||o.length!==i.length)return!1;const{length:c}=o;for(let a=0;a<c;a++)if(!n(o[a],i[a]))return!1;return!0}}function Dv(n,t){const o=typeof t=="object"?t:{equalityCheck:t},{equalityCheck:i=mc,maxSize:c=1,resultEqualityCheck:a}=o,s=yc(i);let l=0;const A=c===1?Gp(s):Wp(c,s);function f(){let u=A.get(arguments);if(u===kt){if(u=n.apply(null,arguments),l++,a){const g=A.getEntries().find(h=>a(h.value,u));g&&(u=g.value,l!==0&&l--)}A.put(arguments,u)}return u}return f.clearCache=()=>{A.clear(),f.resetResultsCount()},f.resultsCount=()=>l,f.resetResultsCount=()=>{l=0},f}function Nv(n){const t=hc([]);let o=null;const i=yc(mc),c=Up(()=>n.apply(null,t.proxy));function a(){return i(o,arguments)||(bc(t,arguments),o=arguments),c.value}return a.clearCache=()=>c.clear(),a}var Kp=class{constructor(n){this.value=n}deref(){return this.value}},Yp=typeof WeakRef!="undefined"?WeakRef:Kp,Vp=0,Bc=1;function xt(){return{s:Vp,v:void 0,o:null,p:null}}function Fc(n,t={}){let o=xt();const{resultEqualityCheck:i}=t;let c,a=0;function s(){var E,g;let l=o;const{length:A}=arguments;for(let h=0,_=A;h<_;h++){const T=arguments[h];if(typeof T=="function"||typeof T=="object"&&T!==null){let C=l.o;C===null&&(l.o=C=new WeakMap);const O=C.get(T);O===void 0?(l=xt(),C.set(T,l)):l=O}else{let C=l.p;C===null&&(l.p=C=new Map);const O=C.get(T);O===void 0?(l=xt(),C.set(T,l)):l=O}}const f=l;let u;if(l.s===Bc?u=l.v:(u=n.apply(null,arguments),a++),f.s=Bc,i){const h=(g=(E=c==null?void 0:c.deref)==null?void 0:E.call(c))!=null?g:c;h!=null&&i(h,u)&&(u=h,a!==0&&a--),c=typeof u=="object"&&u!==null||typeof u=="function"?new Yp(u):u}return f.v=u,u}return s.clearCache=()=>{o=xt(),s.resetResultsCount()},s.resultsCount=()=>a,s.resetResultsCount=()=>{a=0},s}function Xp(n,...t){const o=typeof n=="function"?{memoize:n,memoizeOptions:t}:n,i=(...c)=>{let a=0,s=0,l,A={},f=c.pop();typeof f=="object"&&(A=f,f=c.pop()),uc(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...o,...A},{memoize:E,memoizeOptions:g=[],argsMemoize:h=Fc,argsMemoizeOptions:_=[],devModeChecks:T={}}=u,C=Ec(g),O=Ec(_),N=Dp(c),G=E(function(){return a++,f.apply(null,arguments)},...C);let Z=!0;const Q=h(function(){s++;const ne=Np(N,arguments);return l=G.apply(null,ne),l},...O);return Object.assign(Q,{resultFunc:f,memoizedResultFunc:G,dependencies:N,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>l,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:E,argsMemoize:h})};return Object.assign(i,{withTypes:()=>i}),i}var Go=Xp(Fc),Zp=Object.assign((n,t=Go)=>{Rp(n,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`);const o=Object.keys(n),i=o.map(a=>n[a]);return t(i,(...a)=>a.reduce((s,l,A)=>(s[o[A]]=l,s),{}))},{withTypes:()=>Zp}),Qp=Object.prototype,eh=Qp.hasOwnProperty;function nh(n,t){return n!=null&&eh.call(n,t)}const th=nh;function oh(n,t){return n!=null&&Nr(n,t,th)}const ih=oh;var rh=(n=>(n.ReactDevTools="react-devtools",n.OPFSExplorer="opfs-explorer",n.EpicTrace="epic-trace",n.WindowChrome="window-chrome",n))(rh||{}),ue=(n=>(n.ITPolicy="itPolicy",n.UserChoices="userChoices",n.ITDefaults="itDefaults",n.SlackDefaults="slackDefaults",n))(ue||{});function ch(n,t){for(const o of Object.values(ue))if(ih(n[o],t))return o;return null}const ah=Go(n=>n,({zoomLevel:n,notificationZoomLevel:t})=>t&&t!==null?t:n),Mv=Go(ah,n=>1+n*.2),Lv=({settings:n})=>n.releaseChannelOverride||ReleaseChannel.PROD,jv=({environment:n,settings:t})=>{const o=process.env.SLACK_DEVELOPER_MENU;if(o==="false")return!1;const{isDevMode:i,devEnv:c,openDevToolsOnStart:a}=n,{devToolsEnabled:s}=t;return i||!!c||a||!!o||s},Uv=({settings:n})=>{const{devToolsEnabled:t}=n;return t},Jv=n=>!0,$v=({app:n,environment:t,settings:o})=>{const{notificationMethod:c}=o,a=isFeatureEnabled(FeatureFlag.FORCE_NATIVE_NOTIFICATIONS,n),s=c==="html",l=c&&c!=="html";return!!s},qv=n=>{const t=n.notificationTimeout;return Number.isSafeInteger(t)&&t===Number.MAX_SAFE_INTEGER};var $n=(n=>(n.GENERAL="desktop_general",n.BROWSER="desktop_browser",n.RENDERER="desktop_renderer",n.MESSAGEBOX="desktop_messagebox",n.MENU="desktop_menu",n.EXTERNAL="desktop_external",n))($n||{});const Cc={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},vc=(n,t)=>(...o)=>{try{const i=o.map(c=>typeof c=="object"?JSON.stringify(c,null,2):c).join(" ");t?console[n](`[${t}]	${i}`):console[n](i)}catch{}},kc=Object.entries(Cc).reduce((n,[t,o])=>(n[t]=vc(o),n),{}),Hv=(n,t)=>Object.entries(Cc).reduce((o,[i,c])=>(o[i]=vc(c,n),o),{});function sh(n,t){for(var o=-1,i=n==null?0:n.length;++o<i&&t(n[o],o,n)!==!1;);return n}const lh=sh;function Ah(n,t){return n&&Ln(t,Nn(t),n)}const fh=Ah;function uh(n,t){return n&&Ln(t,jn(t),n)}const Eh=uh;function dh(n,t){return Ln(n,yo(n),t)}const gh=dh;var ph=Object.getOwnPropertySymbols,hh=ph?function(n){for(var t=[];n;)mo(t,yo(n)),n=Lo(n);return t}:sr;const wc=hh;function bh(n,t){return Ln(n,wc(n),t)}const _h=bh;function mh(n){return ar(n,jn,wc)}const yh=mh;var Bh=Object.prototype,Fh=Bh.hasOwnProperty;function Ch(n){var t=n.length,o=new n.constructor(t);return t&&typeof n[0]=="string"&&Fh.call(n,"index")&&(o.index=n.index,o.input=n.input),o}const vh=Ch;function kh(n,t){var o=t?Mo(n.buffer):n.buffer;return new n.constructor(o,n.byteOffset,n.byteLength)}const wh=kh;var Sh=/\w*$/;function Th(n){var t=new n.constructor(n.source,Sh.exec(n));return t.lastIndex=n.lastIndex,t}const xh=Th;var Sc=he?he.prototype:void 0,Tc=Sc?Sc.valueOf:void 0;function Oh(n){return Tc?Object(Tc.call(n)):{}}const Ih=Oh;var Rh="[object Boolean]",Ph="[object Date]",Dh="[object Map]",Nh="[object Number]",Mh="[object RegExp]",Lh="[object Set]",jh="[object String]",Uh="[object Symbol]",Jh="[object ArrayBuffer]",$h="[object DataView]",qh="[object Float32Array]",Hh="[object Float64Array]",zh="[object Int8Array]",Gh="[object Int16Array]",Wh="[object Int32Array]",Kh="[object Uint8Array]",Yh="[object Uint8ClampedArray]",Vh="[object Uint16Array]",Xh="[object Uint32Array]";function Zh(n,t,o){var i=n.constructor;switch(t){case Jh:return Mo(n);case Rh:case Ph:return new i(+n);case $h:return wh(n,o);case qh:case Hh:case zh:case Gh:case Wh:case Kh:case Yh:case Vh:case Xh:return nc(n,o);case Dh:return new i;case Nh:case jh:return new i(n);case Mh:return xh(n);case Lh:return new i;case Uh:return Ih(n)}}const Qh=Zh;var eb="[object Map]";function nb(n){return ve(n)&&un(n)==eb}const tb=nb;var xc=ln&&ln.isMap,ob=xc?bt(xc):tb;const ib=ob;var rb="[object Set]";function cb(n){return ve(n)&&un(n)==rb}const ab=cb;var Oc=ln&&ln.isSet,sb=Oc?bt(Oc):ab;const lb=sb;var Ab=1,fb=2,ub=4,Ic="[object Arguments]",Eb="[object Array]",db="[object Boolean]",gb="[object Date]",pb="[object Error]",Rc="[object Function]",hb="[object GeneratorFunction]",bb="[object Map]",_b="[object Number]",Pc="[object Object]",mb="[object RegExp]",yb="[object Set]",Bb="[object String]",Fb="[object Symbol]",Cb="[object WeakMap]",vb="[object ArrayBuffer]",kb="[object DataView]",wb="[object Float32Array]",Sb="[object Float64Array]",Tb="[object Int8Array]",xb="[object Int16Array]",Ob="[object Int32Array]",Ib="[object Uint8Array]",Rb="[object Uint8ClampedArray]",Pb="[object Uint16Array]",Db="[object Uint32Array]",$={};$[Ic]=$[Eb]=$[vb]=$[kb]=$[db]=$[gb]=$[wb]=$[Sb]=$[Tb]=$[xb]=$[Ob]=$[bb]=$[_b]=$[Pc]=$[mb]=$[yb]=$[Bb]=$[Fb]=$[Ib]=$[Rb]=$[Pb]=$[Db]=!0,$[pb]=$[Rc]=$[Cb]=!1;function Ot(n,t,o,i,c,a){var s,l=t&Ab,A=t&fb,f=t&ub;if(o&&(s=c?o(n,i,c,a):o(n)),s!==void 0)return s;if(!fe(n))return n;var u=le(n);if(u){if(s=vh(n),!l)return tc(n,s)}else{var E=un(n),g=E==Rc||E==hb;if(sn(n))return ec(n,l);if(E==Pc||E==Ic||g&&!c){if(s=A||g?{}:ic(n),!l)return A?_h(n,Eh(s,n)):gh(n,fh(s,n))}else{if(!$[E])return c?n:{};s=Qh(n,E,l)}}a||(a=new cn);var h=a.get(n);if(h)return h;a.set(n,s),lb(n)?n.forEach(function(C){s.add(Ot(C,t,o,C,n,a))}):ib(n)&&n.forEach(function(C,O){s.set(O,Ot(C,t,o,O,n,a))});var _=f?A?yh:Co:A?jn:Nn,T=u?void 0:_(n);return lh(T||n,function(C,O){T&&(O=C,C=n[O]),Uo(s,O,Ot(C,t,o,O,n,a))}),s}const Nb=Ot;var Mb=1,Lb=4;function jb(n){return Nb(n,Mb|Lb)}const Dc=jb;var Ub=200;function Jb(n,t,o,i){var c=-1,a=Wr,s=!0,l=n.length,A=[],f=t.length;if(!l)return A;o&&(t=Or(t,bt(o))),i?(a=Kr,s=!1):t.length>=Ub&&(a=ho,s=!1,t=new po(t));e:for(;++c<l;){var u=n[c],E=o==null?u:o(u);if(u=i||u!==0?u:0,s&&E===E){for(var g=f;g--;)if(t[g]===E)continue e;A.push(u)}else a(t,E,i)||A.push(u)}return A}const $b=Jb;var qb=Po(function(n,t){return Ct(n)?$b(n,zr(t,1,Ct,!0)):[]});const Wo=qb;function Hb(n,t){return So(n,t)}const Nc=Hb;var zb="[object Map]",Gb="[object Set]",Wb=Object.prototype,Kb=Wb.hasOwnProperty;function Yb(n){if(n==null)return!0;if(An(n)&&(le(n)||typeof n=="string"||typeof n.splice=="function"||sn(n)||_t(n)||an(n)))return!n.length;var t=un(n);if(t==zb||t==Gb)return!n.size;if(mt(n))return!_r(n).length;for(var o in n)if(Kb.call(n,o))return!1;return!0}const Mc=Yb;function Vb(n,t,o,i){if(!fe(n))return n;t=Oo(t,n);for(var c=-1,a=t.length,s=a-1,l=n;l!=null&&++c<a;){var A=Mn(t[c]),f=o;if(A==="__proto__"||A==="constructor"||A==="prototype")return n;if(c!=s){var u=l[A];f=i?i(u,A,l):void 0,f===void 0&&(f=fe(u)?u:ht(t[c+1])?[]:{})}Uo(l,A,f),l=l[A]}return n}const Xb=Vb;function Zb(n,t,o){return n==null?n:Xb(n,t,o)}const Qb=Zb;var Te,U,Ko,Lc,dn=0,jc=[],It=[],Uc=p.options.__b,Jc=p.options.__r,$c=p.options.diffed,qc=p.options.__c,Hc=p.options.unmount;function Ke(n,t){p.options.__h&&p.options.__h(U,n,dn||t),dn=0;var o=U.__H||(U.__H={__:[],__h:[]});return n>=o.__.length&&o.__.push({__V:It}),o.__[n]}function qn(n){return dn=1,Yo(Wc,n)}function Yo(n,t,o){var i=Ke(Te++,2);if(i.t=n,!i.__c&&(i.__=[o?o(t):Wc(void 0,t),function(l){var A=i.__N?i.__N[0]:i.__[0],f=i.t(A,l);A!==f&&(i.__N=[f,i.__[1]],i.__c.setState({}))}],i.__c=U,!U.u)){var c=function(l,A,f){if(!i.__c.__H)return!0;var u=i.__c.__H.__.filter(function(g){return g.__c});if(u.every(function(g){return!g.__N}))return!a||a.call(this,l,A,f);var E=!1;return u.forEach(function(g){if(g.__N){var h=g.__[0];g.__=g.__N,g.__N=void 0,h!==g.__[0]&&(E=!0)}}),!(!E&&i.__c.props===l)&&(!a||a.call(this,l,A,f))};U.u=!0;var a=U.shouldComponentUpdate,s=U.componentWillUpdate;U.componentWillUpdate=function(l,A,f){if(this.__e){var u=a;a=void 0,c(l,A,f),a=u}s&&s.call(this,l,A,f)},U.shouldComponentUpdate=c}return i.__N||i.__}function Vo(n,t){var o=Ke(Te++,3);!p.options.__s&&Qo(o.__H,t)&&(o.__=n,o.i=t,U.__H.__h.push(o))}function Hn(n,t){var o=Ke(Te++,4);!p.options.__s&&Qo(o.__H,t)&&(o.__=n,o.i=t,U.__h.push(o))}function zn(n){return dn=5,gn(function(){return{current:n}},[])}function e_(n,t,o){dn=6,Hn(function(){return typeof n=="function"?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},o==null?o:o.concat(n))}function gn(n,t){var o=Ke(Te++,7);return Qo(o.__H,t)?(o.__V=n(),o.i=t,o.__h=n,o.__V):o.__}function n_(n,t){return dn=8,gn(function(){return n},t)}function Xo(n){var t=U.context[n.__c],o=Ke(Te++,9);return o.c=n,t?(o.__==null&&(o.__=!0,t.sub(U)),t.props.value):n.__}function zc(n,t){p.options.useDebugValue&&p.options.useDebugValue(t?t(n):n)}function zv(n){var t=Ke(Te++,10),o=qn();return t.__=n,U.componentDidCatch||(U.componentDidCatch=function(i,c){t.__&&t.__(i,c),o[1](i)}),[o[0],function(){o[1](void 0)}]}function t_(){var n=Ke(Te++,11);if(!n.__){for(var t=U.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var o=t.__m||(t.__m=[0,0]);n.__="P"+o[0]+"-"+o[1]++}return n.__}function o_(){for(var n;n=jc.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Rt),n.__H.__h.forEach(Zo),n.__H.__h=[]}catch(t){n.__H.__h=[],p.options.__e(t,n.__v)}}p.options.__b=function(n){U=null,Uc&&Uc(n)},p.options.__r=function(n){Jc&&Jc(n),Te=0;var t=(U=n.__c).__H;t&&(Ko===U?(t.__h=[],U.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=It,o.__N=o.i=void 0})):(t.__h.forEach(Rt),t.__h.forEach(Zo),t.__h=[],Te=0)),Ko=U},p.options.diffed=function(n){$c&&$c(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(jc.push(t)!==1&&Lc===p.options.requestAnimationFrame||((Lc=p.options.requestAnimationFrame)||i_)(o_)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==It&&(o.__=o.__V),o.i=void 0,o.__V=It})),Ko=U=null},p.options.__c=function(n,t){t.some(function(o){try{o.__h.forEach(Rt),o.__h=o.__h.filter(function(i){return!i.__||Zo(i)})}catch(i){t.some(function(c){c.__h&&(c.__h=[])}),t=[],p.options.__e(i,o.__v)}}),qc&&qc(n,t)},p.options.unmount=function(n){Hc&&Hc(n);var t,o=n.__c;o&&o.__H&&(o.__H.__.forEach(function(i){try{Rt(i)}catch(c){t=c}}),o.__H=void 0,t&&p.options.__e(t,o.__v))};var Gc=typeof requestAnimationFrame=="function";function i_(n){var t,o=function(){clearTimeout(i),Gc&&cancelAnimationFrame(t),setTimeout(n)},i=setTimeout(o,100);Gc&&(t=requestAnimationFrame(o))}function Rt(n){var t=U,o=n.__c;typeof o=="function"&&(n.__c=void 0,o()),U=t}function Zo(n){var t=U;n.__c=n.__(),U=t}function Qo(n,t){return!n||n.length!==t.length||t.some(function(o,i){return o!==n[i]})}function Wc(n,t){return typeof t=="function"?t(n):t}function Kc(n,t){for(var o in t)n[o]=t[o];return n}function ei(n,t){for(var o in n)if(o!=="__source"&&!(o in t))return!0;for(var i in t)if(i!=="__source"&&n[i]!==t[i])return!0;return!1}function ni(n){this.props=n}function r_(n,t){function o(c){var a=this.props.ref,s=a==c.ref;return!s&&a&&(a.call?a(null):a.current=null),t?!t(this.props,c)||!s:ei(this.props,c)}function i(c){return this.shouldComponentUpdate=o,(0,p.createElement)(n,c)}return i.displayName="Memo("+(n.displayName||n.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(ni.prototype=new p.Component).isPureReactComponent=!0,ni.prototype.shouldComponentUpdate=function(n,t){return ei(this.props,n)||ei(this.state,t)};var Yc=p.options.__b;p.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Yc&&Yc(n)};var c_=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function a_(n){function t(o){var i=Kc({},o);return delete i.ref,n(i,o.ref||null)}return t.$$typeof=c_,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var Vc=function(n,t){return n==null?null:(0,p.toChildArray)((0,p.toChildArray)(n).map(t))},s_={map:Vc,forEach:Vc,count:function(n){return n?(0,p.toChildArray)(n).length:0},only:function(n){var t=(0,p.toChildArray)(n);if(t.length!==1)throw"Children.only";return t[0]},toArray:p.toChildArray},l_=p.options.__e;p.options.__e=function(n,t,o,i){if(n.then){for(var c,a=t;a=a.__;)if((c=a.__c)&&c.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),c.__c(n,t)}l_(n,t,o,i)};var Xc=p.options.unmount;function Zc(n,t,o){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),n.__c.__H=null),(n=Kc({},n)).__c!=null&&(n.__c.__P===o&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(i){return Zc(i,t,o)})),n}function Qc(n,t,o){return n&&o&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(i){return Qc(i,t,o)}),n.__c&&n.__c.__P===t&&(n.__e&&o.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=o)),n}function Pt(){this.__u=0,this.t=null,this.__b=null}function ea(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function A_(n){var t,o,i;function c(a){if(t||(t=n()).then(function(s){o=s.default||s},function(s){i=s}),i)throw i;if(!o)throw t;return(0,p.createElement)(o,a)}return c.displayName="Lazy",c.__f=!0,c}function Gn(){this.u=null,this.o=null}p.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),Xc&&Xc(n)},(Pt.prototype=new p.Component).__c=function(n,t){var o=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(o);var c=ea(i.__v),a=!1,s=function(){a||(a=!0,o.__R=null,c?c(l):l())};o.__R=s;var l=function(){if(!--i.__u){if(i.state.__a){var A=i.state.__a;i.__v.__k[0]=Qc(A,A.__c.__P,A.__c.__O)}var f;for(i.setState({__a:i.__b=null});f=i.t.pop();)f.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),n.then(s,s)},Pt.prototype.componentWillUnmount=function(){this.t=[]},Pt.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Zc(this.__b,o,i.__O=i.__P)}this.__b=null}var c=t.__a&&(0,p.createElement)(p.Fragment,null,n.fallback);return c&&(c.__u&=-33),[(0,p.createElement)(p.Fragment,null,t.__a?null:n.children),c]};var na=function(n,t,o){if(++o[1]===o[0]&&n.o.delete(t),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(o=n.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;n.u=o=o[2]}};function f_(n){return this.getChildContext=function(){return n.context},n.children}function u_(n){var t=this,o=n.i;t.componentWillUnmount=function(){(0,p.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==o&&t.componentWillUnmount(),t.l||(t.i=o,t.l={nodeType:1,parentNode:o,childNodes:[],appendChild:function(i){this.childNodes.push(i),t.i.appendChild(i)},insertBefore:function(i,c){this.childNodes.push(i),t.i.appendChild(i)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),t.i.removeChild(i)}}),(0,p.render)((0,p.createElement)(f_,{context:t.context},n.__v),t.l)}function E_(n,t){var o=(0,p.createElement)(u_,{__v:n,i:t});return o.containerInfo=t,o}(Gn.prototype=new p.Component).__a=function(n){var t=this,o=ea(t.__v),i=t.o.get(n);return i[0]++,function(c){var a=function(){t.props.revealOrder?(i.push(c),na(t,n,i)):c()};o?o(a):a()}},Gn.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,p.toChildArray)(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&t.reverse();for(var o=t.length;o--;)this.o.set(t[o],this.u=[1,0,this.u]);return n.children},Gn.prototype.componentDidUpdate=Gn.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,o){na(n,o,t)})};var ta=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,d_=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,g_=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,p_=/[A-Z0-9]/g,h_=typeof document!="undefined",b_=function(n){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};function __(n,t,o){return t.__k==null&&(t.textContent=""),(0,p.render)(n,t),typeof o=="function"&&o(),n?n.__c:null}function m_(n,t,o){return(0,p.hydrate)(n,t),typeof o=="function"&&o(),n?n.__c:null}p.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(p.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var oa=p.options.event;function y_(){}function B_(){return this.cancelBubble}function F_(){return this.defaultPrevented}p.options.event=function(n){return oa&&(n=oa(n)),n.persist=y_,n.isPropagationStopped=B_,n.isDefaultPrevented=F_,n.nativeEvent=n};var ti,C_={enumerable:!1,configurable:!0,get:function(){return this.class}},ia=p.options.vnode;p.options.vnode=function(n){typeof n.type=="string"&&function(t){var o=t.props,i=t.type,c={};for(var a in o){var s=o[a];if(!(a==="value"&&"defaultValue"in o&&s==null||h_&&a==="children"&&i==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in o&&o.value==null?a="value":a==="download"&&s===!0?s="":l==="ondoubleclick"?a="ondblclick":l!=="onchange"||i!=="input"&&i!=="textarea"||b_(o.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":g_.test(a)?a=l:i.indexOf("-")===-1&&d_.test(a)?a=a.replace(p_,"-$&").toLowerCase():s===null&&(s=void 0):l=a="oninput",l==="oninput"&&c[a=l]&&(a="oninputCapture"),c[a]=s}}i=="select"&&c.multiple&&Array.isArray(c.value)&&(c.value=(0,p.toChildArray)(o.children).forEach(function(A){A.props.selected=c.value.indexOf(A.props.value)!=-1})),i=="select"&&c.defaultValue!=null&&(c.value=(0,p.toChildArray)(o.children).forEach(function(A){A.props.selected=c.multiple?c.defaultValue.indexOf(A.props.value)!=-1:c.defaultValue==A.props.value})),o.class&&!o.className?(c.class=o.class,Object.defineProperty(c,"className",C_)):(o.className&&!o.class||o.class&&o.className)&&(c.class=c.className=o.className),t.props=c}(n),n.$$typeof=ta,ia&&ia(n)};var ra=p.options.__r;p.options.__r=function(n){ra&&ra(n),ti=n.__c};var ca=p.options.diffed;p.options.diffed=function(n){ca&&ca(n);var t=n.props,o=n.__e;o!=null&&n.type==="textarea"&&"value"in t&&t.value!==o.value&&(o.value=t.value==null?"":t.value),ti=null};var v_={ReactCurrentDispatcher:{current:{readContext:function(n){return ti.__n[n.__c].props.value}}}},Gv="17.0.2";function k_(n){return p.createElement.bind(null,n)}function Dt(n){return!!n&&n.$$typeof===ta}function w_(n){return Dt(n)&&n.type===p.Fragment}function S_(n){return Dt(n)?p.cloneElement.apply(null,arguments):n}function aa(n){return!!n.__k&&((0,p.render)(null,n),!0)}function T_(n){return n&&(n.base||n.nodeType===1&&n)||null}var sa=function(n,t){return n(t)},x_=function(n,t){return n(t)},O_=p.Fragment;function la(n){n()}function I_(n){return n}function R_(){return[!1,la]}var P_=Hn,D_=Dt;function N_(n,t){var o=t(),i=qn({h:{__:o,v:t}}),c=i[0].h,a=i[1];return Hn(function(){c.__=o,c.v=t,oi(c)&&a({h:c})},[n,o,t]),Vo(function(){return oi(c)&&a({h:c}),n(function(){oi(c)&&a({h:c})})},[n]),o}function oi(n){var t,o,i=n.v,c=n.__;try{var a=i();return!((t=c)===(o=a)&&(t!==0||1/t==1/o)||t!=t&&o!=o)}catch{return!0}}var Aa={useState:qn,useId:t_,useReducer:Yo,useEffect:Vo,useLayoutEffect:Hn,useInsertionEffect:P_,useTransition:R_,useDeferredValue:I_,useSyncExternalStore:N_,startTransition:la,useRef:zn,useImperativeHandle:e_,useMemo:gn,useCallback:n_,useContext:Xo,useDebugValue:zc,version:"17.0.2",Children:s_,render:__,hydrate:m_,unmountComponentAtNode:aa,createPortal:E_,createElement:p.createElement,createContext:p.createContext,createFactory:k_,cloneElement:S_,createRef:p.createRef,Fragment:p.Fragment,isValidElement:Dt,isElement:D_,isFragment:w_,findDOMNode:T_,Component:p.Component,PureComponent:ni,memo:r_,forwardRef:a_,flushSync:x_,unstable_batchedUpdates:sa,StrictMode:O_,Suspense:Pt,SuspenseList:Gn,lazy:A_,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:v_},Wv=P(8182),Nt=Aa.createContext(null);const Kv=null;function M_(n){n()}var fa=M_,L_=function(t){return fa=t},j_=function(){return fa},ua={notify:function(){}};function U_(){var n=j_(),t=null,o=null;return{clear:function(){t=null,o=null},notify:function(){n(function(){for(var c=t;c;)c.callback(),c=c.next})},get:function(){for(var c=[],a=t;a;)c.push(a),a=a.next;return c},subscribe:function(c){var a=!0,s=o={callback:c,next:null,prev:o};return s.prev?s.prev.next=s:t=s,function(){!a||t===null||(a=!1,s.next?s.next.prev=s.prev:o=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}var Ea=function(){function n(o,i){this.store=o,this.parentSub=i,this.unsubscribe=null,this.listeners=ua,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=n.prototype;return t.addNestedSub=function(i){return this.trySubscribe(),this.listeners.subscribe(i)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return!!this.unsubscribe},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=U_())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=ua)},n}(),ii=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?Hn:Vo;function J_(n){var t=n.store,o=n.context,i=n.children,c=gn(function(){var l=new Ea(t);return l.onStateChange=l.notifyNestedSubs,{store:t,subscription:l}},[t]),a=gn(function(){return t.getState()},[t]);ii(function(){var l=c.subscription;return l.trySubscribe(),a!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[c,a]);var s=o||Nt;return Aa.createElement(s.Provider,{value:c},i)}const $_=J_;var Yv=P(2676),Vv=P(8063),q_=null,H_=null,Xv=function(t){try{return JSON.stringify(t)}catch{return String(t)}};function z_(n,t){var o=n[1];return[t.payload,o+1]}function da(n,t,o){useIsomorphicLayoutEffect(function(){return n.apply(void 0,t)},o)}function G_(n,t,o,i,c,a,s){n.current=i,t.current=c,o.current=!1,a.current&&(a.current=null,s())}function W_(n,t,o,i,c,a,s,l,A,f){if(n){var u=!1,E=null,g=function(){if(!u){var T=t.getState(),C,O;try{C=i(T,c.current)}catch(N){O=N,E=N}O||(E=null),C===a.current?s.current||A():(a.current=C,l.current=C,s.current=!0,f({type:"STORE_UPDATED",payload:{error:O}}))}};o.onStateChange=g,o.trySubscribe(),g();var h=function(){if(u=!0,o.tryUnsubscribe(),o.onStateChange=null,E)throw E};return h}}var K_=function(){return[null,0]};function Zv(n,t){t===void 0&&(t={});var o=t,i=o.getDisplayName,c=i===void 0?function(Ae){return"ConnectAdvanced("+Ae+")"}:i,a=o.methodName,s=a===void 0?"connectAdvanced":a,l=o.renderCountProp,A=l===void 0?void 0:l,f=o.shouldHandleStateChanges,u=f===void 0?!0:f,E=o.storeKey,g=E===void 0?"store":E,h=o.withRef,_=h===void 0?!1:h,T=o.forwardRef,C=T===void 0?!1:T,O=o.context,N=O===void 0?ReactReduxContext:O,G=_objectWithoutPropertiesLoose(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(0)var Z;var Q=N;return function(ne){var _e=ne.displayName||ne.name||"Component",Ne=c(_e),ao=_extends({},G,{getDisplayName:c,methodName:s,renderCountProp:A,shouldHandleStateChanges:u,storeKey:g,displayName:Ne,wrappedComponentName:_e,WrappedComponent:ne}),so=G.pure;function Gi(ae){return n(ae.dispatch,ao)}var Wi=so?useMemo:function(ae){return ae()};function ct(ae){var at=useMemo(function(){var At=ae.reactReduxForwardedRef,Qi=_objectWithoutPropertiesLoose(ae,["reactReduxForwardedRef"]);return[ae.context,At,Qi]},[ae]),en=at[0],Bl=at[1],st=at[2],Ki=useMemo(function(){return en&&en.Consumer&&isContextConsumer(React.createElement(en.Consumer,null))?en:Q},[en,Q]),Je=useContext(Ki),lt=!!ae.store&&!!ae.store.getState&&!!ae.store.dispatch,Kk=!!Je&&!!Je.store,$e=lt?ae.store:Je.store,Yi=useMemo(function(){return Gi($e)},[$e]),Fl=useMemo(function(){if(!u)return H_;var At=new Subscription($e,lt?null:Je.subscription),Qi=At.notifyNestedSubs.bind(At);return[At,Qi]},[$e,lt,Je]),Ao=Fl[0],Cl=Fl[1],vl=useMemo(function(){return lt?Je:_extends({},Je,{subscription:Ao})},[lt,Je,Ao]),kl=useReducer(z_,q_,K_),uv=kl[0],fo=uv[0],Ev=kl[1];if(fo&&fo.error)throw fo.error;var wl=useRef(),Vi=useRef(st),uo=useRef(),Sl=useRef(!1),Xi=Wi(function(){return uo.current&&st===Vi.current?uo.current:Yi($e.getState(),st)},[$e,fo,st]);da(G_,[Vi,wl,Sl,st,Xi,uo,Cl]),da(W_,[u,$e,Ao,Yi,Vi,wl,Sl,uo,Cl,Ev],[$e,Ao,Yi]);var Zi=useMemo(function(){return React.createElement(ne,_extends({},Xi,{ref:Bl}))},[Bl,ne,Xi]),dv=useMemo(function(){return u?React.createElement(Ki.Provider,{value:vl},Zi):Zi},[Ki,Zi,vl]);return dv}var Tn=so?React.memo(ct):ct;if(Tn.WrappedComponent=ne,Tn.displayName=ct.displayName=Ne,C){var lo=React.forwardRef(function(at,en){return React.createElement(Tn,_extends({},at,{reactReduxForwardedRef:en}))});return lo.displayName=Ne,lo.WrappedComponent=ne,hoistStatics(lo,ne)}return hoistStatics(Tn,ne)}}function Y_(n,t){var o={},i=function(s){var l=n[s];typeof l=="function"&&(o[s]=function(){return t(l.apply(void 0,arguments))})};for(var c in n)i(c);return o}function ri(n){return function(o,i){var c=n(o,i);function a(){return c}return a.dependsOnOwnProps=!1,a}}function ga(n){return n.dependsOnOwnProps!==null&&n.dependsOnOwnProps!==void 0?!!n.dependsOnOwnProps:n.length!==1}function pa(n,t){return function(i,c){var a=c.displayName,s=function(A,f){return s.dependsOnOwnProps?s.mapToProps(A,f):s.mapToProps(A)};return s.dependsOnOwnProps=!0,s.mapToProps=function(A,f){s.mapToProps=n,s.dependsOnOwnProps=ga(n);var u=s(A,f);return typeof u=="function"&&(s.mapToProps=u,s.dependsOnOwnProps=ga(u),u=s(A,f)),u},s}}function V_(n){return typeof n=="function"?pa(n,"mapDispatchToProps"):void 0}function X_(n){return n?void 0:ri(function(t){return{dispatch:t}})}function Z_(n){return n&&typeof n=="object"?ri(function(t){return Y_(n,t)}):void 0}const Qv=[V_,X_,Z_];function Q_(n){return typeof n=="function"?pa(n,"mapStateToProps"):void 0}function em(n){return n?void 0:ri(function(){return{}})}const e0=[Q_,em];function ci(){return ci=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},ci.apply(null,arguments)}function nm(n,t,o){return ci({},o,n,t)}function tm(n){return function(o,i){var c=i.displayName,a=i.pure,s=i.areMergedPropsEqual,l=!1,A;return function(u,E,g){var h=n(u,E,g);return l?(!a||!s(h,A))&&(A=h):(l=!0,A=h),A}}}function om(n){return typeof n=="function"?tm(n):void 0}function im(n){return n?void 0:function(){return nm}}const n0=[om,im];function ai(n,t,o){for(var i=t.length-1;i>=0;i--){var c=t[i](n);if(c)return c}return function(a,s){throw new Error("Invalid value of type "+typeof n+" for "+o+" argument when connecting component "+s.wrappedComponentName+".")}}function rm(n,t){return n===t}function t0(n){var t=n===void 0?{}:n,o=t.connectHOC,i=o===void 0?connectAdvanced:o,c=t.mapStateToPropsFactories,a=c===void 0?defaultMapStateToPropsFactories:c,s=t.mapDispatchToPropsFactories,l=s===void 0?defaultMapDispatchToPropsFactories:s,A=t.mergePropsFactories,f=A===void 0?defaultMergePropsFactories:A,u=t.selectorFactory,E=u===void 0?defaultSelectorFactory:u;return function(h,_,T,C){C===void 0&&(C={});var O=C,N=O.pure,G=N===void 0?!0:N,Z=O.areStatesEqual,Q=Z===void 0?rm:Z,Ae=O.areOwnPropsEqual,ne=Ae===void 0?shallowEqual:Ae,_e=O.areStatePropsEqual,Ne=_e===void 0?shallowEqual:_e,ao=O.areMergedPropsEqual,so=ao===void 0?shallowEqual:ao,Gi=_objectWithoutPropertiesLoose(O,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),Wi=ai(h,a,"mapStateToProps"),ct=ai(_,l,"mapDispatchToProps"),Tn=ai(T,f,"mergeProps");return i(E,_extends({methodName:"connect",getDisplayName:function(ae){return"Connect("+ae+")"},shouldHandleStateChanges:!!h,initMapStateToProps:Wi,initMapDispatchToProps:ct,initMergeProps:Tn,pure:G,areStatesEqual:Q,areOwnPropsEqual:ne,areStatePropsEqual:Ne,areMergedPropsEqual:so},Gi))}}const o0=null;function cm(){var n=Xo(Nt);return n}function i0(n){n===void 0&&(n=ReactReduxContext);var t=n===ReactReduxContext?useDefaultReduxContext:function(){return useContext(n)};return function(){var i=t(),c=i.store;return c}}var r0=null;function c0(n){n===void 0&&(n=ReactReduxContext);var t=n===ReactReduxContext?useDefaultStore:createStoreHook(n);return function(){var i=t();return i.dispatch}}var a0=null,am=function(t,o){return t===o};function sm(n,t,o,i){var c=Yo(function(_){return _+1},0),a=c[1],s=gn(function(){return new Ea(o,i)},[o,i]),l=zn(),A=zn(),f=zn(),u=zn(),E=o.getState(),g;try{if(n!==A.current||E!==f.current||l.current){var h=n(E);u.current===void 0||!t(h,u.current)?g=h:g=u.current}else g=u.current}catch(_){throw l.current&&(_.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),_}return ii(function(){A.current=n,f.current=E,u.current=g,l.current=void 0}),ii(function(){function _(){try{var T=o.getState(),C=A.current(T);if(t(C,u.current))return;u.current=C,f.current=T}catch(O){l.current=O}a()}return s.onStateChange=_,s.trySubscribe(),_(),function(){return s.tryUnsubscribe()}},[o,s]),g}function lm(n){n===void 0&&(n=Nt);var t=n===Nt?cm:function(){return Xo(n)};return function(i,c){c===void 0&&(c=am);var a=t(),s=a.store,l=a.subscription,A=sm(i,c,s,l);return zc(A),A}}var Am=lm();L_(sa);var fm="Expected a function";function um(n,t){var o;if(typeof t!="function")throw new TypeError(fm);return n=Jr(n),function(){return--n>0&&(o=t.apply(this,arguments)),n<=1&&(t=void 0),o}}const Em=um;function dm(n){return Em(2,n)}const gm=dm(()=>({...window.desktop.store,dispatch:Yr})),{render:pm}=p,hm=async(n,t="div")=>{const o=gm(),c=o.getState().settings.locale;c&&await window.desktop.intl.applyLocale(c);const a=document.createElement(t);document.body.appendChild(a),window.addEventListener("beforeunload",()=>aa(a)),pm(k($_,{store:o,children:k(n,{})}),a)},{notifyError:l0,setupErrorReporter:bm}=(()=>{let n=null;return{setupErrorReporter:t=>n=t,notifyError:t=>{if(n){n(t);return}kc.warn("notifyError: skipping error reporting, reporter is not initialized.",{error:t})}}})(),ha=Object.prototype.toString;function ba(n){switch(ha.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Ye(n,Error)}}function pn(n,t){return ha.call(n)===`[object ${t}]`}function si(n){return pn(n,"ErrorEvent")}function _a(n){return pn(n,"DOMError")}function _m(n){return pn(n,"DOMException")}function xe(n){return pn(n,"String")}function li(n){return typeof n=="object"&&n!==null&&"__sentry_template_string__"in n&&"__sentry_template_values__"in n}function Ai(n){return n===null||li(n)||typeof n!="object"&&typeof n!="function"}function hn(n){return pn(n,"Object")}function Mt(n){return typeof Event!="undefined"&&Ye(n,Event)}function mm(n){return typeof Element!="undefined"&&Ye(n,Element)}function ym(n){return pn(n,"RegExp")}function Lt(n){return!!(n&&n.then&&typeof n.then=="function")}function Bm(n){return hn(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function Fm(n){return typeof n=="number"&&n!==n}function Ye(n,t){try{return n instanceof t}catch{return!1}}function ma(n){return!!(typeof n=="object"&&n!==null&&(n.__isVue||n._isVue))}function jt(n){return n&&n.Math==Math?n:void 0}const M=typeof globalThis=="object"&&jt(globalThis)||typeof window=="object"&&jt(window)||typeof self=="object"&&jt(self)||typeof global=="object"&&jt(global)||function(){return this}()||{};function fi(){return M}function ya(n,t,o){const i=o||M,c=i.__SENTRY__=i.__SENTRY__||{};return c[n]||(c[n]=t())}const bn=fi(),Cm=80;function Ba(n,t={}){if(!n)return"<unknown>";try{let o=n;const i=5,c=[];let a=0,s=0;const l=" > ",A=l.length;let f;const u=Array.isArray(t)?t:t.keyAttrs,E=!Array.isArray(t)&&t.maxStringLength||Cm;for(;o&&a++<i&&(f=vm(o,u),!(f==="html"||a>1&&s+c.length*A+f.length>=E));)c.push(f),s+=f.length,o=o.parentNode;return c.reverse().join(l)}catch{return"<unknown>"}}function vm(n,t){const o=n,i=[];let c,a,s,l,A;if(!o||!o.tagName)return"";if(bn.HTMLElement&&o instanceof HTMLElement&&o.dataset&&o.dataset.sentryComponent)return o.dataset.sentryComponent;i.push(o.tagName.toLowerCase());const f=t&&t.length?t.filter(E=>o.getAttribute(E)).map(E=>[E,o.getAttribute(E)]):null;if(f&&f.length)f.forEach(E=>{i.push(`[${E[0]}="${E[1]}"]`)});else if(o.id&&i.push(`#${o.id}`),c=o.className,c&&xe(c))for(a=c.split(/\s+/),A=0;A<a.length;A++)i.push(`.${a[A]}`);const u=["aria-label","type","name","title","alt"];for(A=0;A<u.length;A++)s=u[A],l=o.getAttribute(s),l&&i.push(`[${s}="${l}"]`);return i.join("")}function km(){try{return bn.document.location.href}catch{return""}}function A0(n){return bn.document&&bn.document.querySelector?bn.document.querySelector(n):null}function wm(n){if(!bn.HTMLElement)return null;let t=n;const o=5;for(let i=0;i<o;i++){if(!t)return null;if(t instanceof HTMLElement&&t.dataset.sentryComponent)return t.dataset.sentryComponent;t=t.parentNode}return null}const Wn=typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__,Sm="Sentry Logger ",ui=["debug","info","warn","error","log","assert","trace"],Ut={};function Jt(n){if(!("console"in M))return n();const t=M.console,o={},i=Object.keys(Ut);i.forEach(c=>{const a=Ut[c];o[c]=t[c],t[c]=a});try{return n()}finally{i.forEach(c=>{t[c]=o[c]})}}function Tm(){let n=!1;const t={enable:()=>{n=!0},disable:()=>{n=!1},isEnabled:()=>n};return Wn?ui.forEach(o=>{t[o]=(...i)=>{n&&Jt(()=>{M.console[o](`${Sm}[${o}]:`,...i)})}}):ui.forEach(o=>{t[o]=()=>{}}),t}const x=Tm();function _n(n,t=0){return typeof n!="string"||t===0||n.length<=t?n:`${n.slice(0,t)}...`}function f0(n,t){let o=n;const i=o.length;if(i<=150)return o;t>i&&(t=i);let c=Math.max(t-60,0);c<5&&(c=0);let a=Math.min(c+140,i);return a>i-5&&(a=i),a===i&&(c=Math.max(a-140,0)),o=o.slice(c,a),c>0&&(o=`'{snip} ${o}`),a<i&&(o+=" {snip}"),o}function Fa(n,t){if(!Array.isArray(n))return"";const o=[];for(let i=0;i<n.length;i++){const c=n[i];try{ma(c)?o.push("[VueViewModel]"):o.push(String(c))}catch{o.push("[value cannot be serialized]")}}return o.join(t)}function xm(n,t,o=!1){return xe(n)?ym(t)?t.test(n):xe(t)?o?n===t:n.includes(t):!1:!1}function $t(n,t=[],o=!1){return t.some(i=>xm(n,i,o))}function ie(n,t,o){if(!(t in n))return;const i=n[t],c=o(i);typeof c=="function"&&Ca(c,i),n[t]=c}function Kn(n,t,o){try{Object.defineProperty(n,t,{value:o,writable:!0,configurable:!0})}catch{Wn&&x.log(`Failed to add non-enumerable property "${t}" to object`,n)}}function Ca(n,t){try{const o=t.prototype||{};n.prototype=t.prototype=o,Kn(n,"__sentry_original__",t)}catch{}}function Ei(n){return n.__sentry_original__}function Om(n){return Object.keys(n).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(n[t])}`).join("&")}function va(n){if(ba(n))return{message:n.message,name:n.name,stack:n.stack,...wa(n)};if(Mt(n)){const t={type:n.type,target:ka(n.target),currentTarget:ka(n.currentTarget),...wa(n)};return typeof CustomEvent!="undefined"&&Ye(n,CustomEvent)&&(t.detail=n.detail),t}else return n}function ka(n){try{return mm(n)?Ba(n):Object.prototype.toString.call(n)}catch{return"<unknown>"}}function wa(n){if(typeof n=="object"&&n!==null){const t={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}else return{}}function Im(n,t=40){const o=Object.keys(va(n));if(o.sort(),!o.length)return"[object has no keys]";if(o[0].length>=t)return _n(o[0],t);for(let i=o.length;i>0;i--){const c=o.slice(0,i).join(", ");if(!(c.length>t))return i===o.length?c:_n(c,t)}return""}function Be(n){return di(n,new Map)}function di(n,t){if(Rm(n)){const o=t.get(n);if(o!==void 0)return o;const i={};t.set(n,i);for(const c of Object.keys(n))typeof n[c]!="undefined"&&(i[c]=di(n[c],t));return i}if(Array.isArray(n)){const o=t.get(n);if(o!==void 0)return o;const i=[];return t.set(n,i),n.forEach(c=>{i.push(di(c,t))}),i}return n}function Rm(n){if(!hn(n))return!1;try{const t=Object.getPrototypeOf(n).constructor.name;return!t||t==="Object"}catch{return!0}}function u0(n){let t;switch(!0){case n==null:t=new String(n);break;case(typeof n=="symbol"||typeof n=="bigint"):t=Object(n);break;case isPrimitive(n):t=new n.constructor(n);break;default:t=n;break}return t}const qt="production";function Ee(){const n=M,t=n.crypto||n.msCrypto;let o=()=>Math.random()*16;try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(o=()=>{const i=new Uint8Array(1);return t.getRandomValues(i),i[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,i=>(i^(o()&15)>>i/4).toString(16))}function Sa(n){return n.exception&&n.exception.values?n.exception.values[0]:void 0}function Le(n){const{message:t,event_id:o}=n;if(t)return t;const i=Sa(n);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||o||"<unknown>":o||"<unknown>"}function gi(n,t,o){const i=n.exception=n.exception||{},c=i.values=i.values||[],a=c[0]=c[0]||{};a.value||(a.value=t||""),a.type||(a.type=o||"Error")}function Yn(n,t){const o=Sa(n);if(!o)return;const i={type:"generic",handled:!0},c=o.mechanism;if(o.mechanism={...i,...c,...t},t&&"data"in t){const a={...c&&c.data,...t.data};o.mechanism.data=a}}const Pm=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function E0(n){const t=n.match(Pm)||[],o=parseInt(t[1],10),i=parseInt(t[2],10),c=parseInt(t[3],10);return{buildmetadata:t[5],major:isNaN(o)?void 0:o,minor:isNaN(i)?void 0:i,patch:isNaN(c)?void 0:c,prerelease:t[4]}}function d0(n,t,o=5){if(t.lineno===void 0)return;const i=n.length,c=Math.max(Math.min(i-1,t.lineno-1),0);t.pre_context=n.slice(Math.max(0,c-o),c).map(a=>snipLine(a,0)),t.context_line=snipLine(n[Math.min(i-1,c)],t.colno||0),t.post_context=n.slice(Math.min(c+1,i),c+1+o).map(a=>snipLine(a,0))}function Ta(n){if(n&&n.__sentry_captured__)return!0;try{Kn(n,"__sentry_captured__",!0)}catch{}return!1}function xa(n){return Array.isArray(n)?n:[n]}const Oa=1e3;function Vn(){return Date.now()/Oa}function Dm(){const{performance:n}=M;if(!n||!n.now)return Vn;const t=Date.now()-n.now(),o=n.timeOrigin==null?t:n.timeOrigin;return()=>(o+n.now())/Oa}const pi=Dm(),g0=null;let Ht;const p0=(()=>{const{performance:n}=M;if(!n||!n.now){Ht="none";return}const t=3600*1e3,o=n.now(),i=Date.now(),c=n.timeOrigin?Math.abs(n.timeOrigin+o-i):t,a=c<t,s=n.timing&&n.timing.navigationStart,A=typeof s=="number"?Math.abs(s+o-i):t,f=A<t;return a||f?c<=A?(Ht="timeOrigin",n.timeOrigin):(Ht="navigationStart",s):(Ht="dateNow",i)})(),j=typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__;var Oe;(function(n){n[n.PENDING=0]="PENDING";const o=1;n[n.RESOLVED=o]="RESOLVED";const i=2;n[n.REJECTED=i]="REJECTED"})(Oe||(Oe={}));function mn(n){return new de(t=>{t(n)})}function hi(n){return new de((t,o)=>{o(n)})}class de{constructor(t){de.prototype.__init.call(this),de.prototype.__init2.call(this),de.prototype.__init3.call(this),de.prototype.__init4.call(this),this._state=Oe.PENDING,this._handlers=[];try{t(this._resolve,this._reject)}catch(o){this._reject(o)}}then(t,o){return new de((i,c)=>{this._handlers.push([!1,a=>{if(!t)i(a);else try{i(t(a))}catch(s){c(s)}},a=>{if(!o)c(a);else try{i(o(a))}catch(s){c(s)}}]),this._executeHandlers()})}catch(t){return this.then(o=>o,t)}finally(t){return new de((o,i)=>{let c,a;return this.then(s=>{a=!1,c=s,t&&t()},s=>{a=!0,c=s,t&&t()}).then(()=>{if(a){i(c);return}o(c)})})}__init(){this._resolve=t=>{this._setResult(Oe.RESOLVED,t)}}__init2(){this._reject=t=>{this._setResult(Oe.REJECTED,t)}}__init3(){this._setResult=(t,o)=>{if(this._state===Oe.PENDING){if(Lt(o)){o.then(this._resolve,this._reject);return}this._state=t,this._value=o,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===Oe.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach(o=>{o[0]||(this._state===Oe.RESOLVED&&o[1](this._value),this._state===Oe.REJECTED&&o[2](this._value),o[0]=!0)})}}}function bi(){return ya("globalEventProcessors",()=>[])}function Nm(n){bi().push(n)}function zt(n,t,o,i=0){return new de((c,a)=>{const s=n[i];if(t===null||typeof s!="function")c(t);else{const l=s({...t},o);j&&s.id&&l===null&&x.log(`Event processor "${s.id}" dropped event`),Lt(l)?l.then(A=>zt(n,A,o,i+1).then(c)).then(null,a):zt(n,l,o,i+1).then(c).then(null,a)}})}function Ia(n){const t=pi(),o={sid:Ee(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Mm(o)};return n&&Ve(o,n),o}function Ve(n,t={}){if(t.user&&(!n.ipAddress&&t.user.ip_address&&(n.ipAddress=t.user.ip_address),!n.did&&!t.did&&(n.did=t.user.id||t.user.email||t.user.username)),n.timestamp=t.timestamp||pi(),t.abnormal_mechanism&&(n.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(n.ignoreDuration=t.ignoreDuration),t.sid&&(n.sid=t.sid.length===32?t.sid:Ee()),t.init!==void 0&&(n.init=t.init),!n.did&&t.did&&(n.did=`${t.did}`),typeof t.started=="number"&&(n.started=t.started),n.ignoreDuration)n.duration=void 0;else if(typeof t.duration=="number")n.duration=t.duration;else{const o=n.timestamp-n.started;n.duration=o>=0?o:0}t.release&&(n.release=t.release),t.environment&&(n.environment=t.environment),!n.ipAddress&&t.ipAddress&&(n.ipAddress=t.ipAddress),!n.userAgent&&t.userAgent&&(n.userAgent=t.userAgent),typeof t.errors=="number"&&(n.errors=t.errors),t.status&&(n.status=t.status)}function Ra(n,t){let o={};t?o={status:t}:n.status==="ok"&&(o={status:"exited"}),Ve(n,o)}function Mm(n){return Be({sid:`${n.sid}`,init:n.init,started:new Date(n.started*1e3).toISOString(),timestamp:new Date(n.timestamp*1e3).toISOString(),status:n.status,errors:n.errors,did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0,duration:n.duration,abnormal_mechanism:n.abnormal_mechanism,attrs:{release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent}})}function Pa(n){return n.transaction}const h0=0,Lm=1;function jm(n){const{spanId:t,traceId:o}=n.spanContext(),{data:i,op:c,parent_span_id:a,status:s,tags:l,origin:A}=yn(n);return Be({data:i,op:c,parent_span_id:a,span_id:t,status:s,tags:l,trace_id:o,origin:A})}function b0(n){const{traceId:t,spanId:o}=n.spanContext(),i=Na(n);return generateSentryTraceHeader(t,o,i)}function _0(n){return typeof n=="number"?Da(n):Array.isArray(n)?n[0]+n[1]/1e9:n instanceof Date?Da(n.getTime()):timestampInSeconds()}function Da(n){return n>9999999999?n/1e3:n}function yn(n){return Um(n)?n.getSpanJSON():typeof n.toJSON=="function"?n.toJSON():{}}function Um(n){return typeof n.getSpanJSON=="function"}function Na(n){const{traceFlags:t}=n.spanContext();return!!(t&Lm)}function Ma(n,t,o){const i=t.getOptions(),{publicKey:c}=t.getDsn()||{},{segment:a}=o&&o.getUser()||{},s=Be({environment:i.environment||qt,release:i.release,user_segment:a,public_key:c,trace_id:n});return t.emit&&t.emit("createDsc",s),s}function Jm(n){const t=ee();if(!t)return{};const o=Ma(yn(n).trace_id||"",t,Pe()),i=Pa(n);if(!i)return o;const c=i&&i._frozenDynamicSamplingContext;if(c)return c;const{sampleRate:a,source:s}=i.metadata;a!=null&&(o.sample_rate=`${a}`);const l=yn(i);return s&&s!=="url"&&(o.transaction=l.description),o.sampled=String(Na(i)),t.emit&&t.emit("createDsc",o),o}function La(n,t){const{fingerprint:o,span:i,breadcrumbs:c,sdkProcessingMetadata:a}=t;$m(n,t),i&&zm(n,i),Gm(n,o),qm(n,c),Hm(n,a)}function ja(n,t){const{extra:o,tags:i,user:c,contexts:a,level:s,sdkProcessingMetadata:l,breadcrumbs:A,fingerprint:f,eventProcessors:u,attachments:E,propagationContext:g,transactionName:h,span:_}=t;Xn(n,"extra",o),Xn(n,"tags",i),Xn(n,"user",c),Xn(n,"contexts",a),Xn(n,"sdkProcessingMetadata",l),s&&(n.level=s),h&&(n.transactionName=h),_&&(n.span=_),A.length&&(n.breadcrumbs=[...n.breadcrumbs,...A]),f.length&&(n.fingerprint=[...n.fingerprint,...f]),u.length&&(n.eventProcessors=[...n.eventProcessors,...u]),E.length&&(n.attachments=[...n.attachments,...E]),n.propagationContext={...n.propagationContext,...g}}function Xn(n,t,o){if(o&&Object.keys(o).length){n[t]={...n[t]};for(const i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[t][i]=o[i])}}function $m(n,t){const{extra:o,tags:i,user:c,contexts:a,level:s,transactionName:l}=t,A=Be(o);A&&Object.keys(A).length&&(n.extra={...A,...n.extra});const f=Be(i);f&&Object.keys(f).length&&(n.tags={...f,...n.tags});const u=Be(c);u&&Object.keys(u).length&&(n.user={...u,...n.user});const E=Be(a);E&&Object.keys(E).length&&(n.contexts={...E,...n.contexts}),s&&(n.level=s),l&&(n.transaction=l)}function qm(n,t){const o=[...n.breadcrumbs||[],...t];n.breadcrumbs=o.length?o:void 0}function Hm(n,t){n.sdkProcessingMetadata={...n.sdkProcessingMetadata,...t}}function zm(n,t){n.contexts={trace:jm(t),...n.contexts};const o=Pa(t);if(o){n.sdkProcessingMetadata={dynamicSamplingContext:Jm(t),...n.sdkProcessingMetadata};const i=yn(o).description;i&&(n.tags={transaction:i,...n.tags})}}function Gm(n,t){n.fingerprint=n.fingerprint?xa(n.fingerprint):[],t&&(n.fingerprint=n.fingerprint.concat(t)),n.fingerprint&&!n.fingerprint.length&&delete n.fingerprint}const Wm=100;let Gt;class Ie{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=Ua()}static clone(t){return t?t.clone():new Ie}clone(){const t=new Ie;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},t._user=this._user,t._level=this._level,t._span=this._span,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._requestSession=this._requestSession,t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t}setClient(t){this._client=t}getClient(){return this._client}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&Ve(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(t){return this._requestSession=t,this}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,o){return this._tags={...this._tags,[t]:o},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,o){return this._extra={...this._extra,[t]:o},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,o){return o===null?delete this._contexts[t]:this._contexts[t]=o,this._notifyScopeListeners(),this}setSpan(t){return this._span=t,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const t=this._span;return t&&t.transaction}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const o=typeof t=="function"?t(this):t;if(o instanceof Ie){const i=o.getScopeData();this._tags={...this._tags,...i.tags},this._extra={...this._extra,...i.extra},this._contexts={...this._contexts,...i.contexts},i.user&&Object.keys(i.user).length&&(this._user=i.user),i.level&&(this._level=i.level),i.fingerprint.length&&(this._fingerprint=i.fingerprint),o.getRequestSession()&&(this._requestSession=o.getRequestSession()),i.propagationContext&&(this._propagationContext=i.propagationContext)}else if(hn(o)){const i=t;this._tags={...this._tags,...i.tags},this._extra={...this._extra,...i.extra},this._contexts={...this._contexts,...i.contexts},i.user&&(this._user=i.user),i.level&&(this._level=i.level),i.fingerprint&&(this._fingerprint=i.fingerprint),i.requestSession&&(this._requestSession=i.requestSession),i.propagationContext&&(this._propagationContext=i.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=Ua(),this}addBreadcrumb(t,o){const i=typeof o=="number"?o:Wm;if(i<=0)return this;const c={timestamp:Vn(),...t},a=this._breadcrumbs;return a.push(c),this._breadcrumbs=a.length>i?a.slice(-i):a,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:t,_attachments:o,_contexts:i,_tags:c,_extra:a,_user:s,_level:l,_fingerprint:A,_eventProcessors:f,_propagationContext:u,_sdkProcessingMetadata:E,_transactionName:g,_span:h}=this;return{breadcrumbs:t,attachments:o,contexts:i,tags:c,extra:a,user:s,level:l,fingerprint:A||[],eventProcessors:f,propagationContext:u,sdkProcessingMetadata:E,transactionName:g,span:h}}applyToEvent(t,o={},i=[]){La(t,this.getScopeData());const c=[...i,...bi(),...this._eventProcessors];return zt(c,t,o)}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...t},this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,o){const i=o&&o.event_id?o.event_id:Ee();if(!this._client)return x.warn("No client configured on scope - will not capture exception!"),i;const c=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:c,...o,event_id:i},this),i}captureMessage(t,o,i){const c=i&&i.event_id?i.event_id:Ee();if(!this._client)return x.warn("No client configured on scope - will not capture message!"),c;const a=new Error(t);return this._client.captureMessage(t,o,{originalException:t,syntheticException:a,...i,event_id:c},this),c}captureEvent(t,o){const i=o&&o.event_id?o.event_id:Ee();return this._client?(this._client.captureEvent(t,{...o,event_id:i},this),i):(x.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function Km(){return Gt||(Gt=new Ie),Gt}function m0(n){Gt=n}function Ua(){return{traceId:Ee(),spanId:Ee().substring(16)}}const _i="7.112.0",mi=parseFloat(_i),Ym=100;class yi{constructor(t,o,i,c=mi){this._version=c;let a;o?a=o:(a=new Ie,a.setClient(t));let s;i?s=i:(s=new Ie,s.setClient(t)),this._stack=[{scope:a}],t&&this.bindClient(t),this._isolationScope=s}isOlderThan(t){return this._version<t}bindClient(t){const o=this.getStackTop();o.client=t,o.scope.setClient(t),t&&t.setupIntegrations&&t.setupIntegrations()}pushScope(){const t=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:t}),t}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(t){const o=this.pushScope();let i;try{i=t(o)}catch(c){throw this.popScope(),c}return Lt(i)?i.then(c=>(this.popScope(),c),c=>{throw this.popScope(),c}):(this.popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(t,o){const i=this._lastEventId=o&&o.event_id?o.event_id:Ee(),c=new Error("Sentry syntheticException");return this.getScope().captureException(t,{originalException:t,syntheticException:c,...o,event_id:i}),i}captureMessage(t,o,i){const c=this._lastEventId=i&&i.event_id?i.event_id:Ee(),a=new Error(t);return this.getScope().captureMessage(t,o,{originalException:t,syntheticException:a,...i,event_id:c}),c}captureEvent(t,o){const i=o&&o.event_id?o.event_id:Ee();return t.type||(this._lastEventId=i),this.getScope().captureEvent(t,{...o,event_id:i}),i}lastEventId(){return this._lastEventId}addBreadcrumb(t,o){const{scope:i,client:c}=this.getStackTop();if(!c)return;const{beforeBreadcrumb:a=null,maxBreadcrumbs:s=Ym}=c.getOptions&&c.getOptions()||{};if(s<=0)return;const A={timestamp:Vn(),...t},f=a?Jt(()=>a(A,o)):A;f!==null&&(c.emit&&c.emit("beforeAddBreadcrumb",f,o),i.addBreadcrumb(f,s))}setUser(t){this.getScope().setUser(t),this.getIsolationScope().setUser(t)}setTags(t){this.getScope().setTags(t),this.getIsolationScope().setTags(t)}setExtras(t){this.getScope().setExtras(t),this.getIsolationScope().setExtras(t)}setTag(t,o){this.getScope().setTag(t,o),this.getIsolationScope().setTag(t,o)}setExtra(t,o){this.getScope().setExtra(t,o),this.getIsolationScope().setExtra(t,o)}setContext(t,o){this.getScope().setContext(t,o),this.getIsolationScope().setContext(t,o)}configureScope(t){const{scope:o,client:i}=this.getStackTop();i&&t(o)}run(t){const o=Ja(this);try{t(this)}finally{Ja(o)}}getIntegration(t){const o=this.getClient();if(!o)return null;try{return o.getIntegration(t)}catch{return j&&x.warn(`Cannot retrieve integration ${t.id} from the current Hub`),null}}startTransaction(t,o){const i=this._callExtensionMethod("startTransaction",t,o);return j&&!i&&(this.getClient()?x.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):x.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),i}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(t=!1){if(t)return this.endSession();this._sendSessionUpdate()}endSession(){const o=this.getStackTop().scope,i=o.getSession();i&&Ra(i),this._sendSessionUpdate(),o.setSession()}startSession(t){const{scope:o,client:i}=this.getStackTop(),{release:c,environment:a=qt}=i&&i.getOptions()||{},{userAgent:s}=M.navigator||{},l=Ia({release:c,environment:a,user:o.getUser(),...s&&{userAgent:s},...t}),A=o.getSession&&o.getSession();return A&&A.status==="ok"&&Ve(A,{status:"exited"}),this.endSession(),o.setSession(l),l}shouldSendDefaultPii(){const t=this.getClient(),o=t&&t.getOptions();return!!(o&&o.sendDefaultPii)}_sendSessionUpdate(){const{scope:t,client:o}=this.getStackTop(),i=t.getSession();i&&o&&o.captureSession&&o.captureSession(i)}_callExtensionMethod(t,...o){const c=Bn().__SENTRY__;if(c&&c.extensions&&typeof c.extensions[t]=="function")return c.extensions[t].apply(this,o);j&&x.warn(`Extension method ${t} couldn't be found, doing nothing.`)}}function Bn(){return M.__SENTRY__=M.__SENTRY__||{extensions:{},hub:void 0},M}function Ja(n){const t=Bn(),o=Kt(t);return Bi(t,n),o}function Re(){const n=Bn();if(n.__SENTRY__&&n.__SENTRY__.acs){const t=n.__SENTRY__.acs.getCurrentHub();if(t)return t}return $a(n)}function Wt(){return Re().getIsolationScope()}function $a(n=Bn()){return(!qa(n)||Kt(n).isOlderThan(mi))&&Bi(n,new yi),Kt(n)}function y0(n,t=$a()){if(!qa(n)||Kt(n).isOlderThan(mi)){const o=t.getClient(),i=t.getScope(),c=t.getIsolationScope();Bi(n,new yi(o,i.clone(),c.clone()))}}function B0(n){const t=Bn();t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.acs=n}function F0(n,t={}){const o=Bn();return o.__SENTRY__&&o.__SENTRY__.acs?o.__SENTRY__.acs.runWithAsyncContext(n,t):n()}function qa(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function Kt(n){return ya("hub",()=>new yi,n)}function Bi(n,t){if(!n)return!1;const o=n.__SENTRY__=n.__SENTRY__||{};return o.hub=t,!0}function Vm(){const n=typeof WeakSet=="function",t=n?new WeakSet:[];function o(c){if(n)return t.has(c)?!0:(t.add(c),!1);for(let a=0;a<t.length;a++)if(t[a]===c)return!0;return t.push(c),!1}function i(c){if(n)t.delete(c);else for(let a=0;a<t.length;a++)if(t[a]===c){t.splice(a,1);break}}return[o,i]}function Xm(n,t=!1){return!(t||n&&!n.startsWith("/")&&!n.match(/^[A-Z]:/)&&!n.startsWith(".")&&!n.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))&&n!==void 0&&!n.includes("node_modules/")}function Zm(n){const t=/^\s*[-]{4,}$/,o=/at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;return i=>{const c=i.match(o);if(c){let a,s,l,A,f;if(c[1]){l=c[1];let g=l.lastIndexOf(".");if(l[g-1]==="."&&g--,g>0){a=l.slice(0,g),s=l.slice(g+1);const h=a.indexOf(".Module");h>0&&(l=l.slice(h+1),a=a.slice(0,h))}A=void 0}s&&(A=a,f=s),s==="<anonymous>"&&(f=void 0,l=void 0),l===void 0&&(f=f||"<anonymous>",l=A?`${A}.${f}`:f);let u=c[2]&&c[2].startsWith("file://")?c[2].slice(7):c[2];const E=c[5]==="native";return u&&u.match(/\/[A-Z]:/)&&(u=u.slice(1)),!u&&c[5]&&!E&&(u=c[5]),{filename:u,module:n?n(u):void 0,function:l,lineno:parseInt(c[3],10)||void 0,colno:parseInt(c[4],10)||void 0,in_app:Xm(u,E)}}if(i.match(t))return{filename:i}}}const Ha=50,za=/\(error: (.*)\)/,Ga=/captureMessage|captureException/;function Wa(...n){const t=n.sort((o,i)=>o[0]-i[0]).map(o=>o[1]);return(o,i=0)=>{const c=[],a=o.split(`
`);for(let s=i;s<a.length;s++){const l=a[s];if(l.length>1024)continue;const A=za.test(l)?l.replace(za,"$1"):l;if(!A.match(/\S*Error: /)){for(const f of t){const u=f(A);if(u){c.push(u);break}}if(c.length>=Ha)break}}return Ka(c)}}function Qm(n){return Array.isArray(n)?Wa(...n):n}function Ka(n){if(!n.length)return[];const t=Array.from(n);return/sentryWrapped/.test(t[t.length-1].function||"")&&t.pop(),t.reverse(),Ga.test(t[t.length-1].function||"")&&(t.pop(),Ga.test(t[t.length-1].function||"")&&t.pop()),t.slice(0,Ha).map(o=>({...o,filename:o.filename||t[t.length-1].filename,function:o.function||"?"}))}const Fi="<anonymous>";function je(n){try{return!n||typeof n!="function"?Fi:n.name||Fi}catch{return Fi}}function ey(n){return[90,Zm(n)]}function ke(n,t=100,o=1/0){try{return Ci("",n,t,o)}catch(i){return{ERROR:`**non-serializable** (${i})`}}}function Ya(n,t=3,o=100*1024){const i=ke(n,t);return iy(i)>o?Ya(n,t-1,o):i}function Ci(n,t,o=1/0,i=1/0,c=Vm()){const[a,s]=c;if(t==null||["number","boolean","string"].includes(typeof t)&&!Fm(t))return t;const l=ny(n,t);if(!l.startsWith("[object "))return l;if(t.__sentry_skip_normalization__)return t;const A=typeof t.__sentry_override_normalization_depth__=="number"?t.__sentry_override_normalization_depth__:o;if(A===0)return l.replace("object ","");if(a(t))return"[Circular ~]";const f=t;if(f&&typeof f.toJSON=="function")try{const h=f.toJSON();return Ci("",h,A-1,i,c)}catch{}const u=Array.isArray(t)?[]:{};let E=0;const g=va(t);for(const h in g){if(!Object.prototype.hasOwnProperty.call(g,h))continue;if(E>=i){u[h]="[MaxProperties ~]";break}const _=g[h];u[h]=Ci(h,_,A-1,i,c),E++}return s(t),u}function ny(n,t){try{if(n==="domain"&&t&&typeof t=="object"&&t._events)return"[Domain]";if(n==="domainEmitter")return"[DomainEmitter]";if(typeof global!="undefined"&&t===global)return"[Global]";if(typeof window!="undefined"&&t===window)return"[Window]";if(typeof document!="undefined"&&t===document)return"[Document]";if(ma(t))return"[VueViewModel]";if(Bm(t))return"[SyntheticEvent]";if(typeof t=="number"&&t!==t)return"[NaN]";if(typeof t=="function")return`[Function: ${je(t)}]`;if(typeof t=="symbol")return`[${String(t)}]`;if(typeof t=="bigint")return`[BigInt: ${String(t)}]`;const o=ty(t);return/^HTML(\w*)Element$/.test(o)?`[HTMLElement: ${o}]`:`[object ${o}]`}catch(o){return`**non-serializable** (${o})`}}function ty(n){const t=Object.getPrototypeOf(n);return t?t.constructor.name:"null prototype"}function oy(n){return~-encodeURI(n).split(/%..|./).length}function iy(n){return oy(JSON.stringify(n))}function C0(n,t){const o=t.replace(/\\/g,"/").replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let i=n;try{i=decodeURI(n)}catch{}return i.replace(/\\/g,"/").replace(/webpack:\/?/g,"").replace(new RegExp(`(file://)?/*${o}/*`,"ig"),"app:///")}function ry(n,t,o,i,c,a){const{normalizeDepth:s=3,normalizeMaxBreadth:l=1e3}=n,A={...t,event_id:t.event_id||o.event_id||Ee(),timestamp:t.timestamp||Vn()},f=o.integrations||n.integrations.map(C=>C.name);cy(A,n),ly(A,f),t.type===void 0&&ay(A,n.stackParser);const u=fy(i,o.captureContext);o.mechanism&&Yn(A,o.mechanism);const E=c&&c.getEventProcessors?c.getEventProcessors():[],g=Km().getScopeData();if(a){const C=a.getScopeData();ja(g,C)}if(u){const C=u.getScopeData();ja(g,C)}const h=[...o.attachments||[],...g.attachments];h.length&&(o.attachments=h),La(A,g);const _=[...E,...bi(),...g.eventProcessors];return zt(_,A,o).then(C=>(C&&sy(C),typeof s=="number"&&s>0?Ay(C,s,l):C))}function cy(n,t){const{environment:o,release:i,dist:c,maxValueLength:a=250}=t;"environment"in n||(n.environment="environment"in t?o:qt),n.release===void 0&&i!==void 0&&(n.release=i),n.dist===void 0&&c!==void 0&&(n.dist=c),n.message&&(n.message=_n(n.message,a));const s=n.exception&&n.exception.values&&n.exception.values[0];s&&s.value&&(s.value=_n(s.value,a));const l=n.request;l&&l.url&&(l.url=_n(l.url,a))}const Va=new WeakMap;function ay(n,t){const o=M._sentryDebugIds;if(!o)return;let i;const c=Va.get(t);c?i=c:(i=new Map,Va.set(t,i));const a=Object.keys(o).reduce((s,l)=>{let A;const f=i.get(l);f?A=f:(A=t(l),i.set(l,A));for(let u=A.length-1;u>=0;u--){const E=A[u];if(E.filename){s[E.filename]=o[l];break}}return s},{});try{n.exception.values.forEach(s=>{s.stacktrace.frames.forEach(l=>{l.filename&&(l.debug_id=a[l.filename])})})}catch{}}function sy(n){const t={};try{n.exception.values.forEach(i=>{i.stacktrace.frames.forEach(c=>{c.debug_id&&(c.abs_path?t[c.abs_path]=c.debug_id:c.filename&&(t[c.filename]=c.debug_id),delete c.debug_id)})})}catch{}if(Object.keys(t).length===0)return;n.debug_meta=n.debug_meta||{},n.debug_meta.images=n.debug_meta.images||[];const o=n.debug_meta.images;Object.keys(t).forEach(i=>{o.push({type:"sourcemap",code_file:i,debug_id:t[i]})})}function ly(n,t){t.length>0&&(n.sdk=n.sdk||{},n.sdk.integrations=[...n.sdk.integrations||[],...t])}function Ay(n,t,o){if(!n)return null;const i={...n,...n.breadcrumbs&&{breadcrumbs:n.breadcrumbs.map(c=>({...c,...c.data&&{data:ke(c.data,t,o)}}))},...n.user&&{user:ke(n.user,t,o)},...n.contexts&&{contexts:ke(n.contexts,t,o)},...n.extra&&{extra:ke(n.extra,t,o)}};return n.contexts&&n.contexts.trace&&i.contexts&&(i.contexts.trace=n.contexts.trace,n.contexts.trace.data&&(i.contexts.trace.data=ke(n.contexts.trace.data,t,o))),n.spans&&(i.spans=n.spans.map(c=>{const a=yn(c).data;return a&&(c.data=ke(a,t,o)),c})),i}function fy(n,t){if(!t)return n;const o=n?n.clone():new Ie;return o.update(t),o}function uy(n){if(n)return Ey(n)?{captureContext:n}:gy(n)?{captureContext:n}:n}function Ey(n){return n instanceof Ie||typeof n=="function"}const dy=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function gy(n){return Object.keys(n).some(t=>dy.includes(t))}function Xa(n,t){return Re().captureException(n,uy(t))}function v0(n,t){const o=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return getCurrentHub().captureMessage(n,o,i)}function Za(n,t){return Re().captureEvent(n,t)}function k0(n){getCurrentHub().configureScope(n)}function Xe(n,t){Re().addBreadcrumb(n,t)}function w0(n,t){getCurrentHub().setContext(n,t)}function S0(n){getCurrentHub().setExtras(n)}function T0(n,t){getCurrentHub().setExtra(n,t)}function x0(n){getCurrentHub().setTags(n)}function O0(n,t){getCurrentHub().setTag(n,t)}function I0(n){getCurrentHub().setUser(n)}function Qa(...n){const t=Re();if(n.length===2){const[o,i]=n;return o?t.withScope(()=>(t.getStackTop().scope=o,i(o))):t.withScope(i)}return t.withScope(n[0])}function R0(n){return runWithAsyncContext(()=>n(getIsolationScope()))}function P0(n,t){return Qa(o=>(o.setSpan(n),t(o)))}function D0(n,t){return getCurrentHub().startTransaction({...n},t)}function es(n,t){const o=Pe(),i=ee();if(!i)DEBUG_BUILD&&logger.warn("Cannot capture check-in. No client defined.");else if(!i.captureCheckIn)DEBUG_BUILD&&logger.warn("Cannot capture check-in. Client does not support sending check-ins.");else return i.captureCheckIn(n,t,o);return uuid4()}function N0(n,t,o){const i=es({monitorSlug:n,status:"in_progress"},o),c=timestampInSeconds();function a(l){es({monitorSlug:n,status:l,checkInId:i,duration:timestampInSeconds()-c})}let s;try{s=t()}catch(l){throw a("error"),l}return isThenable(s)?Promise.resolve(s).then(()=>{a("ok")},()=>{a("error")}):a("ok"),s}async function M0(n){const t=ee();return t?t.flush(n):(DEBUG_BUILD&&logger.warn("Cannot flush events. No client defined."),Promise.resolve(!1))}async function L0(n){const t=ee();return t?t.close(n):(DEBUG_BUILD&&logger.warn("Cannot flush events and disable SDK. No client defined."),Promise.resolve(!1))}function j0(){return getCurrentHub().lastEventId()}function ee(){return Re().getClient()}function U0(){return!!ee()}function Pe(){return Re().getScope()}function ns(n){const t=ee(),o=Wt(),i=Pe(),{release:c,environment:a=qt}=t&&t.getOptions()||{},{userAgent:s}=M.navigator||{},l=Ia({release:c,environment:a,user:i.getUser()||o.getUser(),...s&&{userAgent:s},...n}),A=o.getSession();return A&&A.status==="ok"&&Ve(A,{status:"exited"}),ts(),o.setSession(l),i.setSession(l),l}function ts(){const n=Wt(),t=Pe(),o=t.getSession()||n.getSession();o&&Ra(o),os(),n.setSession(),t.setSession()}function os(){const n=Wt(),t=Pe(),o=ee(),i=t.getSession()||n.getSession();i&&o&&o.captureSession&&o.captureSession(i)}function is(n=!1){if(n){ts();return}os()}const rs=[];function py(n){const t={};return n.forEach(o=>{const{name:i}=o,c=t[i];c&&!c.isDefaultInstance&&o.isDefaultInstance||(t[i]=o)}),Object.keys(t).map(o=>t[o])}function hy(n){const t=n.defaultIntegrations||[],o=n.integrations;t.forEach(s=>{s.isDefaultInstance=!0});let i;Array.isArray(o)?i=[...t,...o]:typeof o=="function"?i=xa(o(t)):i=t;const c=py(i),a=_y(c,s=>s.name==="Debug");if(a!==-1){const[s]=c.splice(a,1);c.push(s)}return c}function by(n,t){const o={};return t.forEach(i=>{i&&as(n,i,o)}),o}function cs(n,t){for(const o of t)o&&o.afterAllSetup&&o.afterAllSetup(n)}function as(n,t,o){if(o[t.name]){j&&x.log(`Integration skipped because it was already installed: ${t.name}`);return}if(o[t.name]=t,rs.indexOf(t.name)===-1&&(t.setupOnce(Nm,Re),rs.push(t.name)),t.setup&&typeof t.setup=="function"&&t.setup(n),n.on&&typeof t.preprocessEvent=="function"){const i=t.preprocessEvent.bind(t);n.on("preprocessEvent",(c,a)=>i(c,a,n))}if(n.addEventProcessor&&typeof t.processEvent=="function"){const i=t.processEvent.bind(t),c=Object.assign((a,s)=>i(a,s,n),{id:t.name});n.addEventProcessor(c)}j&&x.log(`Integration installed: ${t.name}`)}function J0(n){const t=getClient();if(!t||!t.addIntegration){DEBUG_BUILD&&logger.warn(`Cannot add integration "${n.name}" because no SDK Client is available.`);return}t.addIntegration(n)}function _y(n,t){for(let o=0;o<n.length;o++)if(t(n[o])===!0)return o;return-1}function be(n,t){return Object.assign(function(...i){return t(...i)},{id:n})}function $0(n){return n}let ss;const ls="FunctionToString",As=new WeakMap,fs=()=>({name:ls,setupOnce(){ss=Function.prototype.toString;try{Function.prototype.toString=function(...n){const t=Ei(this),o=As.has(ee())&&t!==void 0?t:this;return ss.apply(o,n)}}catch{}},setup(n){As.set(n,!0)}}),my=be(ls,fs),yy=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/],By=[/^.*\/healthcheck$/,/^.*\/healthy$/,/^.*\/live$/,/^.*\/ready$/,/^.*\/heartbeat$/,/^.*\/health$/,/^.*\/healthz$/],us="InboundFilters",Es=(n={})=>({name:us,setupOnce(){},processEvent(t,o,i){const c=i.getOptions(),a=Cy(n,c);return vy(t,a)?null:t}}),Fy=be(us,Es);function Cy(n={},t={}){return{allowUrls:[...n.allowUrls||[],...t.allowUrls||[]],denyUrls:[...n.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...n.ignoreErrors||[],...t.ignoreErrors||[],...n.disableErrorDefaults?[]:yy],ignoreTransactions:[...n.ignoreTransactions||[],...t.ignoreTransactions||[],...n.disableTransactionDefaults?[]:By],ignoreInternal:n.ignoreInternal!==void 0?n.ignoreInternal:!0}}function vy(n,t){return t.ignoreInternal&&Oy(n)?(j&&x.warn(`Event dropped due to being internal Sentry Error.
Event: ${Le(n)}`),!0):ky(n,t.ignoreErrors)?(j&&x.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Le(n)}`),!0):wy(n,t.ignoreTransactions)?(j&&x.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Le(n)}`),!0):Sy(n,t.denyUrls)?(j&&x.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Le(n)}.
Url: ${Yt(n)}`),!0):Ty(n,t.allowUrls)?!1:(j&&x.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Le(n)}.
Url: ${Yt(n)}`),!0)}function ky(n,t){return n.type||!t||!t.length?!1:xy(n).some(o=>$t(o,t))}function wy(n,t){if(n.type!=="transaction"||!t||!t.length)return!1;const o=n.transaction;return o?$t(o,t):!1}function Sy(n,t){if(!t||!t.length)return!1;const o=Yt(n);return o?$t(o,t):!1}function Ty(n,t){if(!t||!t.length)return!0;const o=Yt(n);return o?$t(o,t):!0}function xy(n){const t=[];n.message&&t.push(n.message);let o;try{o=n.exception.values[n.exception.values.length-1]}catch{}return o&&o.value&&(t.push(o.value),o.type&&t.push(`${o.type}: ${o.value}`)),j&&t.length===0&&x.error(`Could not extract message for event ${Le(n)}`),t}function Oy(n){try{return n.exception.values[0].type==="SentryError"}catch{}return!1}function Iy(n=[]){for(let t=n.length-1;t>=0;t--){const o=n[t];if(o&&o.filename!=="<anonymous>"&&o.filename!=="[native code]")return o.filename||null}return null}function Yt(n){try{let t;try{t=n.exception.values[0].stacktrace.frames}catch{}return t?Iy(t):null}catch{return j&&x.error(`Cannot extract url for event ${Le(n)}`),null}}function ds(n,t,o=250,i,c,a,s){if(!a.exception||!a.exception.values||!s||!Ye(s.originalException,Error))return;const l=a.exception.values.length>0?a.exception.values[a.exception.values.length-1]:void 0;l&&(a.exception.values=Ry(vi(n,t,c,s.originalException,i,a.exception.values,l,0),o))}function vi(n,t,o,i,c,a,s,l){if(a.length>=o+1)return a;let A=[...a];if(Ye(i[c],Error)){gs(s,l);const f=n(t,i[c]),u=A.length;ps(f,c,u,l),A=vi(n,t,o,i[c],c,[f,...A],f,u)}return Array.isArray(i.errors)&&i.errors.forEach((f,u)=>{if(Ye(f,Error)){gs(s,l);const E=n(t,f),g=A.length;ps(E,`errors[${u}]`,g,l),A=vi(n,t,o,f,c,[E,...A],E,g)}}),A}function gs(n,t){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,...n.type==="AggregateError"&&{is_exception_group:!0},exception_id:t}}function ps(n,t,o,i){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,type:"chained",source:t,exception_id:o,parent_id:i}}function Ry(n,t){return n.map(o=>(o.value&&(o.value=_n(o.value,t)),o))}function hs(n,t){return n(t.stack||"",1)}function bs(n,t){const o={type:t.name||t.constructor.name,value:t.message},i=hs(n,t);return i.length&&(o.stacktrace={frames:i}),o}function Py(n){if("name"in n&&typeof n.name=="string"){let t=`'${n.name}' captured as exception`;return"message"in n&&typeof n.message=="string"&&(t+=` with message '${n.message}'`),t}else return"message"in n&&typeof n.message=="string"?n.message:`Object captured as exception with keys: ${extractExceptionKeysForMessage(n)}`}function z0(n,t,o,i){const c=typeof n=="function"?n().getClient():n;let a=o;const l=i&&i.data&&i.data.mechanism||{handled:!0,type:"generic"};let A;if(!isError(o)){if(isPlainObject(o)){const u=c&&c.getOptions().normalizeDepth;A={__serialized__:normalizeToSize(o,u)};const E=Py(o);a=i&&i.syntheticException||new Error(E),a.message=E}else a=i&&i.syntheticException||new Error(o),a.message=o;l.synthetic=!0}const f={exception:{values:[bs(t,a)]}};return A&&(f.extra=A),addExceptionTypeValue(f,void 0,void 0),addExceptionMechanism(f,l),{...f,event_id:i&&i.event_id}}function G0(n,t,o="info",i,c){const a={event_id:i&&i.event_id,level:o};if(c&&i&&i.syntheticException){const s=hs(n,i.syntheticException);s.length&&(a.exception={values:[{value:t,stacktrace:{frames:s}}]})}if(isParameterizedString(t)){const{__sentry_template_string__:s,__sentry_template_values__:l}=t;return a.logentry={message:s,params:l},a}return a.message=t,a}const Dy="cause",Ny=5,_s="LinkedErrors",My=(n={})=>{const t=n.limit||Ny,o=n.key||Dy;return{name:_s,setupOnce(){},preprocessEvent(i,c,a){const s=a.getOptions();ds(bs,s.stackParser,s.maxValueLength,o,t,i,c)}}},Ly=be(_s,My),jy=m,L=M;let ki=0;function ms(){return ki>0}function Uy(){ki++,setTimeout(()=>{ki--})}function Fn(n,t={},o){if(typeof n!="function")return n;try{const c=n.__sentry_wrapped__;if(c)return c;if(Ei(n))return n}catch{return n}const i=function(){const c=Array.prototype.slice.call(arguments);try{o&&typeof o=="function"&&o.apply(this,arguments);const a=c.map(s=>Fn(s,t));return n.apply(this,a)}catch(a){throw Uy(),Qa(s=>{s.addEventProcessor(l=>(t.mechanism&&(gi(l,void 0,void 0),Yn(l,t.mechanism)),l.extra={...l.extra,arguments:c},l)),Xa(a)}),a}};try{for(const c in n)Object.prototype.hasOwnProperty.call(n,c)&&(i[c]=n[c])}catch{}Ca(i,n),Kn(n,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return n.name}})}catch{}return i}const Cn={},ys={};function Ze(n,t){Cn[n]=Cn[n]||[],Cn[n].push(t)}function K0(){Object.keys(Cn).forEach(n=>{Cn[n]=void 0})}function Qe(n,t){ys[n]||(t(),ys[n]=!0)}function Fe(n,t){const o=n&&Cn[n];if(o)for(const i of o)try{i(t)}catch(c){Wn&&x.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${je(i)}
Error:`,c)}}let Vt=null;function Jy(n){const t="error";Ze(t,n),Qe(t,$y)}function $y(){Vt=M.onerror,M.onerror=function(n,t,o,i,c){return Fe("error",{column:i,error:c,line:o,msg:n,url:t}),Vt&&!Vt.__SENTRY_LOADER__?Vt.apply(this,arguments):!1},M.onerror.__SENTRY_INSTRUMENTED__=!0}let Xt=null;function qy(n){const t="unhandledrejection";Ze(t,n),Qe(t,Hy)}function Hy(){Xt=M.onunhandledrejection,M.onunhandledrejection=function(n){return Fe("unhandledrejection",n),Xt&&!Xt.__SENTRY_LOADER__?Xt.apply(this,arguments):!0},M.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const De=typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__;function Bs(n,t){const o=Si(n,t),i={type:t&&t.name,value:Ky(t)};return o.length&&(i.stacktrace={frames:o}),i.type===void 0&&i.value===""&&(i.value="Unrecoverable error caught"),i}function zy(n,t,o,i){const c=ee(),a=c&&c.getOptions().normalizeDepth,s={exception:{values:[{type:Mt(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:Xy(t,{isUnhandledRejection:i})}]},extra:{__serialized__:Ya(t,a)}};if(o){const l=Si(n,o);l.length&&(s.exception.values[0].stacktrace={frames:l})}return s}function wi(n,t){return{exception:{values:[Bs(n,t)]}}}function Si(n,t){const o=t.stacktrace||t.stack||"",i=Wy(t);try{return n(o,i)}catch{}return[]}const Gy=/Minified React error #\d+;/i;function Wy(n){if(n){if(typeof n.framesToPop=="number")return n.framesToPop;if(Gy.test(n.message))return 1}return 0}function Ky(n){const t=n&&n.message;return t?t.error&&typeof t.error.message=="string"?t.error.message:t:"No error message"}function Yy(n,t,o,i){const c=o&&o.syntheticException||void 0,a=Ti(n,t,c,i);return Yn(a),a.level="error",o&&o.event_id&&(a.event_id=o.event_id),mn(a)}function Vy(n,t,o="info",i,c){const a=i&&i.syntheticException||void 0,s=xi(n,t,a,c);return s.level=o,i&&i.event_id&&(s.event_id=i.event_id),mn(s)}function Ti(n,t,o,i,c){let a;if(si(t)&&t.error)return wi(n,t.error);if(_a(t)||_m(t)){const s=t;if("stack"in t)a=wi(n,t);else{const l=s.name||(_a(s)?"DOMError":"DOMException"),A=s.message?`${l}: ${s.message}`:l;a=xi(n,A,o,i),gi(a,A)}return"code"in s&&(a.tags={...a.tags,"DOMException.code":`${s.code}`}),a}return ba(t)?wi(n,t):hn(t)||Mt(t)?(a=zy(n,t,o,c),Yn(a,{synthetic:!0}),a):(a=xi(n,t,o,i),gi(a,`${t}`,void 0),Yn(a,{synthetic:!0}),a)}function xi(n,t,o,i){const c={};if(i&&o){const a=Si(n,o);a.length&&(c.exception={values:[{value:t,stacktrace:{frames:a}}]})}if(li(t)){const{__sentry_template_string__:a,__sentry_template_values__:s}=t;return c.logentry={message:a,params:s},c}return c.message=t,c}function Xy(n,{isUnhandledRejection:t}){const o=Im(n),i=t?"promise rejection":"exception";return si(n)?`Event \`ErrorEvent\` captured as ${i} with message \`${n.message}\``:Mt(n)?`Event \`${Zy(n)}\` (type=${n.type}) captured as ${i}`:`Object captured as ${i} with keys: ${o}`}function Zy(n){try{const t=Object.getPrototypeOf(n);return t?t.constructor.name:void 0}catch{}}const Fs="GlobalHandlers",Cs=(n={})=>{const t={onerror:!0,onunhandledrejection:!0,...n};return{name:Fs,setupOnce(){Error.stackTraceLimit=50},setup(o){t.onerror&&(eB(o),ks("onerror")),t.onunhandledrejection&&(nB(o),ks("onunhandledrejection"))}}},Qy=be(Fs,Cs);function eB(n){Jy(t=>{const{stackParser:o,attachStacktrace:i}=ws();if(ee()!==n||ms())return;const{msg:c,url:a,line:s,column:l,error:A}=t,f=A===void 0&&xe(c)?iB(c,a,s,l):vs(Ti(o,A||c,void 0,i,!1),a,s,l);f.level="error",Za(f,{originalException:A,mechanism:{handled:!1,type:"onerror"}})})}function nB(n){qy(t=>{const{stackParser:o,attachStacktrace:i}=ws();if(ee()!==n||ms())return;const c=tB(t),a=Ai(c)?oB(c):Ti(o,c,void 0,i,!0);a.level="error",Za(a,{originalException:c,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function tB(n){if(Ai(n))return n;const t=n;try{if("reason"in t)return t.reason;if("detail"in t&&"reason"in t.detail)return t.detail.reason}catch{}return n}function oB(n){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}}function iB(n,t,o,i){const c=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let a=si(n)?n.message:n,s="Error";const l=a.match(c);return l&&(s=l[1],a=l[2]),vs({exception:{values:[{type:s,value:a}]}},t,o,i)}function vs(n,t,o,i){const c=n.exception=n.exception||{},a=c.values=c.values||[],s=a[0]=a[0]||{},l=s.stacktrace=s.stacktrace||{},A=l.frames=l.frames||[],f=isNaN(parseInt(i,10))?void 0:i,u=isNaN(parseInt(o,10))?void 0:o,E=xe(t)&&t.length>0?t:km();return A.length===0&&A.push({colno:f,filename:E,function:"?",in_app:!0,lineno:u}),n}function ks(n){De&&x.log(`Global Handler attached: ${n}`)}function ws(){const n=ee();return n&&n.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const rB=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Ss="TryCatch",Ts=(n={})=>{const t={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...n};return{name:Ss,setupOnce(){t.setTimeout&&ie(L,"setTimeout",xs),t.setInterval&&ie(L,"setInterval",xs),t.requestAnimationFrame&&ie(L,"requestAnimationFrame",aB),t.XMLHttpRequest&&"XMLHttpRequest"in L&&ie(XMLHttpRequest.prototype,"send",sB);const o=t.eventTarget;o&&(Array.isArray(o)?o:rB).forEach(lB)}}},cB=be(Ss,Ts);function xs(n){return function(...t){const o=t[0];return t[0]=Fn(o,{mechanism:{data:{function:je(n)},handled:!1,type:"instrument"}}),n.apply(this,t)}}function aB(n){return function(t){return n.apply(this,[Fn(t,{mechanism:{data:{function:"requestAnimationFrame",handler:je(n)},handled:!1,type:"instrument"}})])}}function sB(n){return function(...t){const o=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(c=>{c in o&&typeof o[c]=="function"&&ie(o,c,function(a){const s={mechanism:{data:{function:c,handler:je(a)},handled:!1,type:"instrument"}},l=Ei(a);return l&&(s.mechanism.data.handler=je(l)),Fn(a,s)})}),n.apply(this,t)}}function lB(n){const t=L,o=t[n]&&t[n].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(ie(o,"addEventListener",function(i){return function(c,a,s){try{typeof a.handleEvent=="function"&&(a.handleEvent=Fn(a.handleEvent,{mechanism:{data:{function:"handleEvent",handler:je(a),target:n},handled:!1,type:"instrument"}}))}catch{}return i.apply(this,[c,Fn(a,{mechanism:{data:{function:"addEventListener",handler:je(a),target:n},handled:!1,type:"instrument"}}),s])}}),ie(o,"removeEventListener",function(i){return function(c,a,s){const l=a;try{const A=l&&l.__sentry_wrapped__;A&&i.call(this,c,A,s)}catch{}return i.call(this,c,l,s)}}))}function AB(n){const t="console";Ze(t,n),Qe(t,fB)}function fB(){"console"in M&&ui.forEach(function(n){n in M.console&&ie(M.console,n,function(t){return Ut[n]=t,function(...o){Fe("console",{args:o,level:n});const c=Ut[n];c&&c.apply(M.console,o)}})})}const vn=M,uB=1e3;let Os,Oi,Ii;function EB(n){const t="dom";Ze(t,n),Qe(t,dB)}function dB(){if(!vn.document)return;const n=Fe.bind(null,"dom"),t=Is(n,!0);vn.document.addEventListener("click",t,!1),vn.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(o=>{const i=vn[o]&&vn[o].prototype;!i||!i.hasOwnProperty||!i.hasOwnProperty("addEventListener")||(ie(i,"addEventListener",function(c){return function(a,s,l){if(a==="click"||a=="keypress")try{const A=this,f=A.__sentry_instrumentation_handlers__=A.__sentry_instrumentation_handlers__||{},u=f[a]=f[a]||{refCount:0};if(!u.handler){const E=Is(n);u.handler=E,c.call(this,a,E,l)}u.refCount++}catch{}return c.call(this,a,s,l)}}),ie(i,"removeEventListener",function(c){return function(a,s,l){if(a==="click"||a=="keypress")try{const A=this,f=A.__sentry_instrumentation_handlers__||{},u=f[a];u&&(u.refCount--,u.refCount<=0&&(c.call(this,a,u.handler,l),u.handler=void 0,delete f[a]),Object.keys(f).length===0&&delete A.__sentry_instrumentation_handlers__)}catch{}return c.call(this,a,s,l)}}))})}function gB(n){if(n.type!==Oi)return!1;try{if(!n.target||n.target._sentryId!==Ii)return!1}catch{}return!0}function pB(n,t){return n!=="keypress"?!1:!t||!t.tagName?!0:!(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)}function Is(n,t=!1){return o=>{if(!o||o._sentryCaptured)return;const i=hB(o);if(pB(o.type,i))return;Kn(o,"_sentryCaptured",!0),i&&!i._sentryId&&Kn(i,"_sentryId",Ee());const c=o.type==="keypress"?"input":o.type;gB(o)||(n({event:o,name:c,global:t}),Oi=o.type,Ii=i?i._sentryId:void 0),clearTimeout(Os),Os=vn.setTimeout(()=>{Ii=void 0,Oi=void 0},uB)}}function hB(n){try{return n.target}catch{return null}}const bB=M,Zn="__sentry_xhr_v3__";function _B(n){const t="xhr";Ze(t,n),Qe(t,mB)}function mB(){if(!bB.XMLHttpRequest)return;const n=XMLHttpRequest.prototype;ie(n,"open",function(t){return function(...o){const i=Date.now(),c=xe(o[0])?o[0].toUpperCase():void 0,a=yB(o[1]);if(!c||!a)return t.apply(this,o);this[Zn]={method:c,url:a,request_headers:{}},c==="POST"&&a.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const s=()=>{const l=this[Zn];if(l&&this.readyState===4){try{l.status_code=this.status}catch{}const A={args:[c,a],endTimestamp:Date.now(),startTimestamp:i,xhr:this};Fe("xhr",A)}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?ie(this,"onreadystatechange",function(l){return function(...A){return s(),l.apply(this,A)}}):this.addEventListener("readystatechange",s),ie(this,"setRequestHeader",function(l){return function(...A){const[f,u]=A,E=this[Zn];return E&&xe(f)&&xe(u)&&(E.request_headers[f.toLowerCase()]=u),l.apply(this,A)}}),t.apply(this,o)}}),ie(n,"send",function(t){return function(...o){const i=this[Zn];if(!i)return t.apply(this,o);o[0]!==void 0&&(i.body=o[0]);const c={args:[i.method,i.url],startTimestamp:Date.now(),xhr:this};return Fe("xhr",c),t.apply(this,o)}})}function yB(n){if(xe(n))return n;try{return n.toString()}catch{}}const Zt=fi();function X0(){try{return new ErrorEvent(""),!0}catch{return!1}}function Z0(){try{return new DOMError(""),!0}catch{return!1}}function Q0(){try{return new DOMException(""),!0}catch{return!1}}function Ri(){if(!("fetch"in Zt))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function Pi(n){return n&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function BB(){if(typeof EdgeRuntime=="string")return!0;if(!Ri())return!1;if(Pi(Zt.fetch))return!0;let n=!1;const t=Zt.document;if(t&&typeof t.createElement=="function")try{const o=t.createElement("iframe");o.hidden=!0,t.head.appendChild(o),o.contentWindow&&o.contentWindow.fetch&&(n=Pi(o.contentWindow.fetch)),t.head.removeChild(o)}catch(o){Wn&&x.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",o)}return n}function ek(){return"ReportingObserver"in Zt}function nk(){if(!Ri())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function FB(n){const t="fetch";Ze(t,n),Qe(t,CB)}function CB(){BB()&&ie(M,"fetch",function(n){return function(...t){const{method:o,url:i}=vB(t),c={args:t,fetchData:{method:o,url:i},startTimestamp:Date.now()};return Fe("fetch",{...c}),n.apply(M,t).then(a=>{const s={...c,endTimestamp:Date.now(),response:a};return Fe("fetch",s),a},a=>{const s={...c,endTimestamp:Date.now(),error:a};throw Fe("fetch",s),a})}})}function Di(n,t){return!!n&&typeof n=="object"&&!!n[t]}function Rs(n){return typeof n=="string"?n:n?Di(n,"url")?n.url:n.toString?n.toString():"":""}function vB(n){if(n.length===0)return{method:"GET",url:""};if(n.length===2){const[o,i]=n;return{url:Rs(o),method:Di(i,"method")?String(i.method).toUpperCase():"GET"}}const t=n[0];return{url:Rs(t),method:Di(t,"method")?String(t.method).toUpperCase():"GET"}}const Qt=fi();function kB(){const n=Qt.chrome,t=n&&n.app&&n.app.runtime,o="history"in Qt&&!!Qt.history.pushState&&!!Qt.history.replaceState;return!t&&o}const Qn=M;let eo;function Ps(n){const t="history";Ze(t,n),Qe(t,wB)}function wB(){if(!kB())return;const n=Qn.onpopstate;Qn.onpopstate=function(...o){const i=Qn.location.href,c=eo;if(eo=i,Fe("history",{from:c,to:i}),n)try{return n.apply(this,o)}catch{}};function t(o){return function(...i){const c=i.length>2?i[2]:void 0;if(c){const a=eo,s=String(c);eo=s,Fe("history",{from:a,to:s})}return o.apply(this,i)}}ie(Qn.history,"pushState",t),ie(Qn.history,"replaceState",t)}const SB=["fatal","error","warning","log","info","debug"];function tk(n){return Ds(n)}function Ds(n){return n==="warn"?"warning":SB.includes(n)?n:"log"}function Ni(n){if(!n)return{};const t=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const o=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],search:o,hash:i,relative:t[5]+o+i}}function ok(n){return n.split(/[\?#]/,1)[0]}function ik(n){return n.split(/\\?\//).filter(t=>t.length>0&&t!==",").length}function rk(n){const{protocol:t,host:o,path:i}=n,c=o&&o.replace(/^.*@/,"[filtered]:[filtered]@").replace(/(:80)$/,"").replace(/(:443)$/,"")||"";return`${t?`${t}://`:""}${c}${i}`}const no=1024,Ns="Breadcrumbs",Ms=(n={})=>{const t={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...n};return{name:Ns,setupOnce(){},setup(o){t.console&&AB(IB(o)),t.dom&&EB(OB(o,t.dom)),t.xhr&&_B(RB(o)),t.fetch&&FB(PB(o)),t.history&&Ps(DB(o)),t.sentry&&o.on&&o.on("beforeSendEvent",xB(o))}}},TB=be(Ns,Ms);function xB(n){return function(o){ee()===n&&Xe({category:`sentry.${o.type==="transaction"?"transaction":"event"}`,event_id:o.event_id,level:o.level,message:Le(o)},{event:o})}}function OB(n,t){return function(i){if(ee()!==n)return;let c,a,s=typeof t=="object"?t.serializeAttribute:void 0,l=typeof t=="object"&&typeof t.maxStringLength=="number"?t.maxStringLength:void 0;l&&l>no&&(De&&x.warn(`\`dom.maxStringLength\` cannot exceed ${no}, but a value of ${l} was configured. Sentry will use ${no} instead.`),l=no),typeof s=="string"&&(s=[s]);try{const f=i.event,u=NB(f)?f.target:f;c=Ba(u,{keyAttrs:s,maxStringLength:l}),a=wm(u)}catch{c="<unknown>"}if(c.length===0)return;const A={category:`ui.${i.name}`,message:c};a&&(A.data={"ui.component_name":a}),Xe(A,{event:i.event,name:i.name,global:i.global})}}function IB(n){return function(o){if(ee()!==n)return;const i={category:"console",data:{arguments:o.args,logger:"console"},level:Ds(o.level),message:Fa(o.args," ")};if(o.level==="assert")if(o.args[0]===!1)i.message=`Assertion failed: ${Fa(o.args.slice(1)," ")||"console.assert"}`,i.data.arguments=o.args.slice(1);else return;Xe(i,{input:o.args,level:o.level})}}function RB(n){return function(o){if(ee()!==n)return;const{startTimestamp:i,endTimestamp:c}=o,a=o.xhr[Zn];if(!i||!c||!a)return;const{method:s,url:l,status_code:A,body:f}=a,u={method:s,url:l,status_code:A},E={xhr:o.xhr,input:f,startTimestamp:i,endTimestamp:c};Xe({category:"xhr",data:u,type:"http"},E)}}function PB(n){return function(o){if(ee()!==n)return;const{startTimestamp:i,endTimestamp:c}=o;if(c&&!(o.fetchData.url.match(/sentry_key/)&&o.fetchData.method==="POST"))if(o.error){const a=o.fetchData,s={data:o.error,input:o.args,startTimestamp:i,endTimestamp:c};Xe({category:"fetch",data:a,level:"error",type:"http"},s)}else{const a=o.response,s={...o.fetchData,status_code:a&&a.status},l={input:o.args,response:a,startTimestamp:i,endTimestamp:c};Xe({category:"fetch",data:s,type:"http"},l)}}}function DB(n){return function(o){if(ee()!==n)return;let i=o.from,c=o.to;const a=Ni(L.location.href);let s=i?Ni(i):void 0;const l=Ni(c);(!s||!s.path)&&(s=a),a.protocol===l.protocol&&a.host===l.host&&(c=l.relative),a.protocol===s.protocol&&a.host===s.host&&(i=s.relative),Xe({category:"navigation",data:{from:i,to:c}})}}function NB(n){return!!n&&!!n.target}const MB="cause",LB=5,Ls="LinkedErrors",js=(n={})=>{const t=n.limit||LB,o=n.key||MB;return{name:Ls,setupOnce(){},preprocessEvent(i,c,a){const s=a.getOptions();ds(Bs,s.stackParser,s.maxValueLength,o,t,i,c)}}},jB=be(Ls,js),Us="HttpContext",Js=()=>({name:Us,setupOnce(){},preprocessEvent(n){if(!L.navigator&&!L.location&&!L.document)return;const t=n.request&&n.request.url||L.location&&L.location.href,{referrer:o}=L.document||{},{userAgent:i}=L.navigator||{},c={...n.request&&n.request.headers,...o&&{Referer:o},...i&&{"User-Agent":i}},a={...n.request,...t&&{url:t},headers:c};n.request=a}}),UB=be(Us,Js),$s="Dedupe",qs=()=>{let n;return{name:$s,setupOnce(){},processEvent(t){if(t.type)return t;try{if($B(t,n))return De&&x.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return n=t}}},JB=be($s,qs);function $B(n,t){return t?!!(qB(n,t)||HB(n,t)):!1}function qB(n,t){const o=n.message,i=t.message;return!(!o&&!i||o&&!i||!o&&i||o!==i||!zs(n,t)||!Hs(n,t))}function HB(n,t){const o=Gs(t),i=Gs(n);return!(!o||!i||o.type!==i.type||o.value!==i.value||!zs(n,t)||!Hs(n,t))}function Hs(n,t){let o=Ws(n),i=Ws(t);if(!o&&!i)return!0;if(o&&!i||!o&&i||(o=o,i=i,i.length!==o.length))return!1;for(let c=0;c<i.length;c++){const a=i[c],s=o[c];if(a.filename!==s.filename||a.lineno!==s.lineno||a.colno!==s.colno||a.function!==s.function)return!1}return!0}function zs(n,t){let o=n.fingerprint,i=t.fingerprint;if(!o&&!i)return!0;if(o&&!i||!o&&i)return!1;o=o,i=i;try{return o.join("")===i.join("")}catch{return!1}}function Gs(n){return n.exception&&n.exception.values&&n.exception.values[0]}function Ws(n){const t=n.exception;if(t)try{return t.values[0].stacktrace.frames}catch{return}}let Ks={};L.Sentry&&L.Sentry.Integrations&&(Ks=L.Sentry.Integrations);const zB={...Ks,...jy,...b},GB="sentry-ipc";var Ue;(function(n){n.RENDERER_START="sentry-electron.renderer-start",n.EVENT="sentry-electron.event",n.SCOPE="sentry-electron.scope",n.ENVELOPE="sentry-electron.envelope",n.STATUS="sentry-electron.status",n.ADD_METRIC="sentry-electron.add-metric"})(Ue||(Ue={}));const WB="sentry-electron-renderer-id";function kn(n){return`${GB}://${n}/sentry_key`}function KB(){if(window.__SENTRY_IPC__)return window.__SENTRY_IPC__;{x.log("IPC was not configured in preload script, falling back to custom protocol and fetch");const n=window.__SENTRY_RENDERER_ID__=Ee(),t={[WB]:n};return{sendRendererStart:()=>{fetch(kn(Ue.RENDERER_START),{method:"POST",body:"",headers:t}).catch(()=>{console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`)})},sendScope:o=>{fetch(kn(Ue.SCOPE),{method:"POST",body:o,headers:t}).catch(()=>{})},sendEvent:o=>{fetch(kn(Ue.EVENT),{method:"POST",body:o,headers:t}).catch(()=>{})},sendEnvelope:o=>{fetch(kn(Ue.ENVELOPE),{method:"POST",body:o,headers:t}).catch(()=>{})},sendStatus:o=>{fetch(kn(Ue.STATUS),{method:"POST",body:JSON.stringify({status:o}),headers:t}).catch(()=>{})},sendAddMetric:o=>{fetch(kn(Ue.ADD_METRIC),{method:"POST",body:JSON.stringify(o),headers:t}).catch(()=>{})}}}}let to;function et(){return to||(to=KB(),to.sendRendererStart()),to}const Ys="ScopeToMain",Vs=()=>({name:Ys,setupOnce(){},setup(){const n=Pe();if(n){const t=et();n.addScopeListener(o=>{t.sendScope(JSON.stringify(ke(o.getScopeData(),20,2e3))),n.clearBreadcrumbs(),n.clearAttachments()})}}}),YB=be(Ys,Vs);class oo{constructor(){this.name=oo.id}setupOnce(t){const o=et();t(i=>(i.breadcrumbs=i.breadcrumbs||[],i.environment=void 0,o.sendEvent(JSON.stringify(ke(i,20,2e3))),null))}}oo.id="EventToMain";const Xs="c",Zs="g",Mi="s",Qs="d",VB=5e3,Ak=1e4,fk=1e4;function XB(n,t,o,i){const c=Object.entries(Be(i)).sort((a,s)=>a[0].localeCompare(s[0]));return`${n}${t}${o}${c}`}function ZB(n){let t=0;for(let o=0;o<n.length;o++){const i=n.charCodeAt(o);t=(t<<5)-t+i,t&=t}return t>>>0}function QB(n){let t="";for(const o of n){const i=Object.entries(o.tags),c=i.length>0?`|#${i.map(([a,s])=>`${a}:${s}`).join(",")}`:"";t+=`${o.name}@${o.unit}:${o.metric}|${o.metricType}${c}|T${o.timestamp}
`}return t}function eF(n){return n.replace(/[^\w]+/gi,"_")}function nF(n){return n.replace(/[^\w\-.]+/gi,"_")}function tF(n){return n.replace(/[^\w\-./]+/gi,"")}const oF=[[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\\","\\\\"],["|","\\u{7c}"],[",","\\u{2c}"]];function iF(n){for(const[t,o]of oF)if(n===t)return o;return n}function rF(n){return[...n].reduce((t,o)=>t+iF(o),"")}function cF(n){const t={};for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){const i=tF(o);t[i]=rF(String(n[o]))}return t}class aF{constructor(t){this._value=t}get weight(){return 1}add(t){this._value+=t}toString(){return`${this._value}`}}class sF{constructor(t){this._last=t,this._min=t,this._max=t,this._sum=t,this._count=1}get weight(){return 5}add(t){this._last=t,t<this._min&&(this._min=t),t>this._max&&(this._max=t),this._sum+=t,this._count++}toString(){return`${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`}}class lF{constructor(t){this._value=[t]}get weight(){return this._value.length}add(t){this._value.push(t)}toString(){return this._value.join(":")}}class AF{constructor(t){this.first=t,this._value=new Set([t])}get weight(){return this._value.size}add(t){this._value.add(t)}toString(){return Array.from(this._value).map(t=>typeof t=="string"?ZB(t):t).join(":")}}const fF={[Xs]:aF,[Zs]:sF,[Qs]:lF,[Mi]:AF};function uk(n,t,o=()=>{},i=()=>{}){const c=getCurrentHub(),a=getCurrentScope(),s=a.getSpan(),l=ro(n),A=io(c,{parentSpan:s,spanContext:l,forceTransaction:!1,scope:a});return a.setSpan(A),handleCallbackErrors(()=>t(A),f=>{A&&A.setStatus("internal_error"),o(f,A)},()=>{A&&A.end(),a.setSpan(s),i()})}function Ek(n,t){const o=ro(n);return runWithAsyncContext(()=>withScope(n.scope,i=>{const c=getCurrentHub(),a=i.getSpan(),l=n.onlyIfParent&&!a?void 0:io(c,{parentSpan:a,spanContext:o,forceTransaction:n.forceTransaction,scope:i});return handleCallbackErrors(()=>t(l),()=>{if(l){const{status:A}=spanToJSON(l);(!A||A==="ok")&&l.setStatus("internal_error")}},()=>l&&l.end())}))}const dk=null;function gk(n,t){const o=ro(n);return runWithAsyncContext(()=>withScope(n.scope,i=>{const c=getCurrentHub(),a=i.getSpan(),l=n.onlyIfParent&&!a?void 0:io(c,{parentSpan:a,spanContext:o,forceTransaction:n.forceTransaction,scope:i});function A(){l&&l.end()}return handleCallbackErrors(()=>t(l,A),()=>{if(l&&l.isRecording()){const{status:f}=spanToJSON(l);(!f||f==="ok")&&l.setStatus("internal_error")}})}))}function pk(n){if(!hasTracingEnabled())return;const t=ro(n),o=getCurrentHub(),i=n.scope?n.scope.getSpan():el();if(n.onlyIfParent&&!i)return;const s=(n.scope||getCurrentScope()).clone();return io(o,{parentSpan:i,spanContext:t,forceTransaction:n.forceTransaction,scope:s})}function el(){return Pe().getSpan()}const hk=({sentryTrace:n,baggage:t},o)=>{const i=getCurrentScope(),{traceparentData:c,dynamicSamplingContext:a,propagationContext:s}=tracingContextFromHeaders(n,t);i.setPropagationContext(s),DEBUG_BUILD&&c&&logger.log(`[Tracing] Continuing trace ${c.traceId}.`);const l={...c,metadata:dropUndefinedKeys({dynamicSamplingContext:a})};return o?runWithAsyncContext(()=>o(l)):l};function io(n,{parentSpan:t,spanContext:o,forceTransaction:i,scope:c}){if(!hasTracingEnabled())return;const a=getIsolationScope();let s;if(t&&!i)s=t.startChild(o);else if(t){const l=getDynamicSamplingContextFromSpan(t),{traceId:A,spanId:f}=t.spanContext(),u=spanIsSampled(t);s=n.startTransaction({traceId:A,parentSpanId:f,parentSampled:u,...o,metadata:{dynamicSamplingContext:l,...o.metadata}})}else{const{traceId:l,dsc:A,parentSpanId:f,sampled:u}={...a.getPropagationContext(),...c.getPropagationContext()};s=n.startTransaction({traceId:l,parentSpanId:f,parentSampled:u,...o,metadata:{dynamicSamplingContext:A,...o.metadata}})}return c.setSpan(s),uF(s,c,a),s}function ro(n){if(n.startTime){const t={...n};return t.startTimestamp=spanTimeInputToSeconds(n.startTime),delete t.startTime,t}return n}const nl="_sentryScope",tl="_sentryIsolationScope";function uF(n,t,o){n&&(addNonEnumerableProperty(n,tl,o),addNonEnumerableProperty(n,nl,t))}function bk(n){return{scope:n[nl],isolationScope:n[tl]}}let nt;function ol(n){return nt?nt.get(n):void 0}function _k(n){const t=ol(n);if(!t)return;const o={};for(const[,[i,c]]of t)o[i]||(o[i]=[]),o[i].push(dropUndefinedKeys(c));return o}function EF(n,t,o,i,c,a){const s=el();if(s){const l=ol(s)||new Map,A=`${n}:${t}@${i}`,f=l.get(a);if(f){const[,u]=f;l.set(a,[A,{min:Math.min(u.min,o),max:Math.max(u.max,o),count:u.count+=1,sum:u.sum+=o,tags:u.tags}])}else l.set(a,[A,{min:o,max:o,count:1,sum:o,tags:c}]);nt||(nt=new WeakMap),nt.set(s,l)}}class dF{constructor(t){this._client=t,this._buckets=new Map,this._interval=setInterval(()=>this.flush(),VB)}add(t,o,i,c="none",a={},s=pi()){const l=Math.floor(s),A=nF(o),f=cF(a),u=eF(c),E=XB(t,A,u,f);let g=this._buckets.get(E);const h=g&&t===Mi?g.metric.weight:0;g?(g.metric.add(i),g.timestamp<l&&(g.timestamp=l)):(g={metric:new fF[t](i),timestamp:l,metricType:t,name:A,unit:u,tags:f},this._buckets.set(E,g));const _=typeof i=="string"?g.metric.weight-h:i;EF(t,A,_,u,a,E)}flush(){if(this._buckets.size!==0){if(this._client.captureAggregateMetrics){const t=Array.from(this._buckets).map(([,o])=>o);this._client.captureAggregateMetrics(t)}this._buckets.clear()}}close(){clearInterval(this._interval),this.flush()}}const il="MetricsAggregator",rl=()=>({name:il,setupOnce(){},setup(n){n.metricsAggregator=new dF(n)}}),gF=be(il,rl);function co(n,t,o,i={}){const c=ee(),a=Pe();if(c){if(!c.metricsAggregator){j&&x.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");return}const{unit:s,tags:l,timestamp:A}=i,{release:f,environment:u}=c.getOptions(),E=a.getTransaction(),g={};f&&(g.release=f),u&&(g.environment=u),E&&(g.transaction=yn(E).description||""),j&&x.log(`Adding value of ${o} to ${n} metric ${t}`),c.metricsAggregator.add(n,t,o,s,{...g,...l},A)}}function pF(n,t=1,o){co(Xs,n,t,o)}function hF(n,t,o){co(Qs,n,t,o)}function bF(n,t,o){co(Mi,n,t,o)}function _F(n,t,o){co(Zs,n,t,o)}const mF={increment:pF,distribution:hF,set:bF,gauge:_F,MetricsAggregator:gF,metricsAggregatorIntegration:rl};class yF{constructor(){this._ipc=et()}add(t,o,i,c,a,s){this._ipc.sendAddMetric({metricType:t,name:o,value:i,unit:c,tags:a,timestamp:s})}flush(){}close(){}toString(){return""}}const cl="MetricsAggregator",al=()=>({name:cl,setupOnce(){},setup(n){n.metricsAggregator=new yF}}),BF=be(cl,al);function FF(n,t){t.debug===!0&&(j?x.enable():Jt(()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})),Pe().update(t.initialScope);const i=new n(t);CF(i),vF(i)}function CF(n){const o=Re().getStackTop();o.client=n,o.scope.setClient(n)}function vF(n){n.init?n.init():n.setupIntegrations&&n.setupIntegrations()}const kF=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function wF(n){return n==="http"||n==="https"}function tt(n,t=!1){const{host:o,path:i,pass:c,port:a,projectId:s,protocol:l,publicKey:A}=n;return`${l}://${A}${t&&c?`:${c}`:""}@${o}${a?`:${a}`:""}/${i&&`${i}/`}${s}`}function SF(n){const t=kF.exec(n);if(!t){Jt(()=>{console.error(`Invalid Sentry Dsn: ${n}`)});return}const[o,i,c="",a,s="",l]=t.slice(1);let A="",f=l;const u=f.split("/");if(u.length>1&&(A=u.slice(0,-1).join("/"),f=u.pop()),f){const E=f.match(/^\d+/);E&&(f=E[0])}return sl({host:a,pass:c,path:A,projectId:f,port:s,protocol:o,publicKey:i})}function sl(n){return{protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function TF(n){if(!Wn)return!0;const{port:t,projectId:o,protocol:i}=n;return["protocol","publicKey","host","projectId"].find(s=>n[s]?!1:(x.error(`Invalid Sentry Dsn: ${s} missing`),!0))?!1:o.match(/^\d+$/)?wF(i)?t&&isNaN(parseInt(t,10))?(x.error(`Invalid Sentry Dsn: Invalid port ${t}`),!1):!0:(x.error(`Invalid Sentry Dsn: Invalid protocol ${i}`),!1):(x.error(`Invalid Sentry Dsn: Invalid projectId ${o}`),!1)}function xF(n){const t=typeof n=="string"?SF(n):sl(n);if(!(!t||!TF(t)))return t}function wn(n,t=[]){return[n,t]}function OF(n,t){const[o,i]=n;return[o,[...i,t]]}function Li(n,t){const o=n[1];for(const i of o){const c=i[0].type;if(t(i,c))return!0}return!1}function yk(n,t){return Li(n,(o,i)=>t.includes(i))}function ji(n,t){return(t||new TextEncoder).encode(n)}function IF(n,t){const[o,i]=n;let c=JSON.stringify(o);function a(s){typeof c=="string"?c=typeof s=="string"?c+s:[ji(c,t),s]:c.push(typeof s=="string"?ji(s,t):s)}for(const s of i){const[l,A]=s;if(a(`
${JSON.stringify(l)}
`),typeof A=="string"||A instanceof Uint8Array)a(A);else{let f;try{f=JSON.stringify(A)}catch{f=JSON.stringify(ke(A))}a(f)}}return typeof c=="string"?c:RF(c)}function RF(n){const t=n.reduce((c,a)=>c+a.length,0),o=new Uint8Array(t);let i=0;for(const c of n)o.set(c,i),i+=c.length;return o}function Bk(n,t,o){let i=typeof n=="string"?t.encode(n):n;function c(A){const f=i.subarray(0,A);return i=i.subarray(A+1),f}function a(){let A=i.indexOf(10);return A<0&&(A=i.length),JSON.parse(o.decode(c(A)))}const s=a(),l=[];for(;i.length;){const A=a(),f=typeof A.length=="number"?A.length:void 0;l.push([A,f?c(f):a()])}return[s,l]}function PF(n,t){const o=typeof n.data=="string"?ji(n.data,t):n.data;return[Be({type:"attachment",length:o.length,filename:n.filename,content_type:n.contentType,attachment_type:n.attachmentType}),o]}const DF={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket"};function ll(n){return DF[n]}function Al(n){if(!n||!n.sdk)return;const{name:t,version:o}=n.sdk;return{name:t,version:o}}function NF(n,t,o,i){const c=n.sdkProcessingMetadata&&n.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:n.event_id,sent_at:new Date().toISOString(),...t&&{sdk:t},...!!o&&i&&{dsn:tt(i)},...c&&{trace:Be({...c})}}}class we extends Error{constructor(t,o="warn"){super(t),this.message=t,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=o}}const MF="7";function fl(n){const t=n.protocol?`${n.protocol}:`:"",o=n.port?`:${n.port}`:"";return`${t}//${n.host}${o}${n.path?`/${n.path}`:""}/api/`}function LF(n){return`${fl(n)}${n.projectId}/envelope/`}function jF(n,t){return Om({sentry_key:n.publicKey,sentry_version:MF,...t&&{sentry_client:`${t.name}/${t.version}`}})}function UF(n,t={}){const o=typeof t=="string"?t:t.tunnel,i=typeof t=="string"||!t._metadata?void 0:t._metadata.sdk;return o||`${LF(n)}?${jF(n,i)}`}function Fk(n,t){const o=makeDsn(n);if(!o)return"";const i=`${fl(o)}embed/error-page/`;let c=`dsn=${dsnToString(o)}`;for(const a in t)if(a!=="dsn"&&a!=="onClose")if(a==="user"){const s=t.user;if(!s)continue;s.name&&(c+=`&name=${encodeURIComponent(s.name)}`),s.email&&(c+=`&email=${encodeURIComponent(s.email)}`)}else c+=`&${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`;return`${i}?${c}`}function JF(n,t){return t&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||t.name,n.sdk.version=n.sdk.version||t.version,n.sdk.integrations=[...n.sdk.integrations||[],...t.integrations||[]],n.sdk.packages=[...n.sdk.packages||[],...t.packages||[]]),n}function $F(n,t,o,i){const c=Al(o),a={sent_at:new Date().toISOString(),...c&&{sdk:c},...!!i&&t&&{dsn:tt(t)}},s="aggregates"in n?[{type:"sessions"},n]:[{type:"session"},n.toJSON()];return wn(a,[s])}function qF(n,t,o,i){const c=Al(o),a=n.type&&n.type!=="replay_event"?n.type:"event";JF(n,o&&o.sdk);const s=NF(n,c,i,t);return delete n.sdkProcessingMetadata,wn(s,[[{type:a},n]])}function HF(n,t,o,i){const c={sent_at:new Date().toISOString()};o&&o.sdk&&(c.sdk={name:o.sdk.name,version:o.sdk.version}),i&&t&&(c.dsn=tt(t));const a=zF(n);return wn(c,[a])}function zF(n){const t=QB(n);return[{type:"statsd",length:t.length},t]}const ul="Not capturing exception because it's already been captured.";class GF{constructor(t){if(this._options=t,this._integrations={},this._integrationsInitialized=!1,this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],t.dsn?this._dsn=xF(t.dsn):j&&x.warn("No DSN provided, client will not send events."),this._dsn){const o=UF(this._dsn,t);this._transport=t.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:o})}}captureException(t,o,i){if(Ta(t)){j&&x.log(ul);return}let c=o&&o.event_id;return this._process(this.eventFromException(t,o).then(a=>this._captureEvent(a,o,i)).then(a=>{c=a})),c}captureMessage(t,o,i,c){let a=i&&i.event_id;const s=li(t)?t:String(t),l=Ai(t)?this.eventFromMessage(s,o,i):this.eventFromException(t,i);return this._process(l.then(A=>this._captureEvent(A,i,c)).then(A=>{a=A})),a}captureEvent(t,o,i){if(o&&o.originalException&&Ta(o.originalException)){j&&x.log(ul);return}let c=o&&o.event_id;const s=(t.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(t,o,s||i).then(l=>{c=l})),c}captureSession(t){typeof t.release!="string"?j&&x.warn("Discarded session because of missing or non-string release"):(this.sendSession(t),Ve(t,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){const o=this._transport;return o?(this.metricsAggregator&&this.metricsAggregator.flush(),this._isClientDoneProcessing(t).then(i=>o.flush(t).then(c=>i&&c))):mn(!0)}close(t){return this.flush(t).then(o=>(this.getOptions().enabled=!1,this.metricsAggregator&&this.metricsAggregator.close(),o))}getEventProcessors(){return this._eventProcessors}addEventProcessor(t){this._eventProcessors.push(t)}setupIntegrations(t){(t&&!this._integrationsInitialized||this._isEnabled()&&!this._integrationsInitialized)&&this._setupIntegrations()}init(){this._isEnabled()&&this._setupIntegrations()}getIntegrationById(t){return this.getIntegrationByName(t)}getIntegrationByName(t){return this._integrations[t]}getIntegration(t){try{return this._integrations[t.id]||null}catch{return j&&x.warn(`Cannot retrieve integration ${t.id} from the current Client`),null}}addIntegration(t){const o=this._integrations[t.name];as(this,t,this._integrations),o||cs(this,[t])}sendEvent(t,o={}){this.emit("beforeSendEvent",t,o);let i=qF(t,this._dsn,this._options._metadata,this._options.tunnel);for(const a of o.attachments||[])i=OF(i,PF(a,this._options.transportOptions&&this._options.transportOptions.textEncoder));const c=this._sendEnvelope(i);c&&c.then(a=>this.emit("afterSendEvent",t,a),null)}sendSession(t){const o=$F(t,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(o)}recordDroppedEvent(t,o,i){if(this._options.sendClientReports){const c=`${t}:${o}`;j&&x.log(`Adding outcome: "${c}"`),this._outcomes[c]=this._outcomes[c]+1||1}}captureAggregateMetrics(t){j&&x.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);const o=HF(t,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(o)}on(t,o){this._hooks[t]||(this._hooks[t]=[]),this._hooks[t].push(o)}emit(t,...o){this._hooks[t]&&this._hooks[t].forEach(i=>i(...o))}_setupIntegrations(){const{integrations:t}=this._options;this._integrations=by(this,t),cs(this,t),this._integrationsInitialized=!0}_updateSessionFromEvent(t,o){let i=!1,c=!1;const a=o.exception&&o.exception.values;if(a){c=!0;for(const A of a){const f=A.mechanism;if(f&&f.handled===!1){i=!0;break}}}const s=t.status==="ok";(s&&t.errors===0||s&&i)&&(Ve(t,{...i&&{status:"crashed"},errors:t.errors||Number(c||i)}),this.captureSession(t))}_isClientDoneProcessing(t){return new de(o=>{let i=0;const c=1,a=setInterval(()=>{this._numProcessing==0?(clearInterval(a),o(!0)):(i+=c,t&&i>=t&&(clearInterval(a),o(!1)))},c)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(t,o,i,c=Wt()){const a=this.getOptions(),s=Object.keys(this._integrations);return!o.integrations&&s.length>0&&(o.integrations=s),this.emit("preprocessEvent",t,o),ry(a,t,o,i,this,c).then(l=>{if(l===null)return l;const A={...c.getPropagationContext(),...i?i.getPropagationContext():void 0};if(!(l.contexts&&l.contexts.trace)&&A){const{traceId:u,spanId:E,parentSpanId:g,dsc:h}=A;l.contexts={trace:{trace_id:u,span_id:E,parent_span_id:g},...l.contexts};const _=h||Ma(u,this,i);l.sdkProcessingMetadata={dynamicSamplingContext:_,...l.sdkProcessingMetadata}}return l})}_captureEvent(t,o={},i){return this._processEvent(t,o,i).then(c=>c.event_id,c=>{if(j){const a=c;a.logLevel==="log"?x.log(a.message):x.warn(a)}})}_processEvent(t,o,i){const c=this.getOptions(),{sampleRate:a}=c,s=dl(t),l=El(t),A=t.type||"error",f=`before send for type \`${A}\``;if(l&&typeof a=="number"&&Math.random()>a)return this.recordDroppedEvent("sample_rate","error",t),hi(new we(`Discarding event because it's not included in the random sample (sampling rate = ${a})`,"log"));const u=A==="replay_event"?"replay":A,g=(t.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(t,o,i,g).then(h=>{if(h===null)throw this.recordDroppedEvent("event_processor",u,t),new we("An event processor returned `null`, will not send event.","log");if(o.data&&o.data.__sentry__===!0)return h;const T=KF(c,h,o);return WF(T,f)}).then(h=>{if(h===null)throw this.recordDroppedEvent("before_send",u,t),new we(`${f} returned \`null\`, will not send event.`,"log");const _=i&&i.getSession();!s&&_&&this._updateSessionFromEvent(_,h);const T=h.transaction_info;if(s&&T&&h.transaction!==t.transaction){const C="custom";h.transaction_info={...T,source:C}}return this.sendEvent(h,o),h}).then(null,h=>{throw h instanceof we?h:(this.captureException(h,{data:{__sentry__:!0},originalException:h}),new we(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${h}`))})}_process(t){this._numProcessing++,t.then(o=>(this._numProcessing--,o),o=>(this._numProcessing--,o))}_sendEnvelope(t){if(this.emit("beforeEnvelope",t),this._isEnabled()&&this._transport)return this._transport.send(t).then(null,o=>{j&&x.error("Error while sending event:",o)});j&&x.error("Transport disabled")}_clearOutcomes(){const t=this._outcomes;return this._outcomes={},Object.keys(t).map(o=>{const[i,c]=o.split(":");return{reason:i,category:c,quantity:t[o]}})}}function WF(n,t){const o=`${t} must return \`null\` or a valid event.`;if(Lt(n))return n.then(i=>{if(!hn(i)&&i!==null)throw new we(o);return i},i=>{throw new we(`${t} rejected with ${i}`)});if(!hn(n)&&n!==null)throw new we(o);return n}function KF(n,t,o){const{beforeSend:i,beforeSendTransaction:c}=n;return El(t)&&i?i(t,o):dl(t)&&c?c(t,o):t}function El(n){return n.type===void 0}function dl(n){return n.type==="transaction"}function Ck(n){const t=getClient();!t||!t.addEventProcessor||t.addEventProcessor(n)}function YF(n,t,o=[t],i="npm"){const c=n._metadata||{};c.sdk||(c.sdk={name:`sentry.javascript.${t}`,packages:o.map(a=>({name:`${i}:@sentry/${a}`,version:_i})),version:_i}),n._metadata=c}function vk(){return typeof __SENTRY_BROWSER_BUNDLE__!="undefined"&&!!__SENTRY_BROWSER_BUNDLE__}function VF(){return"npm"}function XF(n,t,o){const i=[{type:"client_report"},{timestamp:o||Vn(),discarded_events:n}];return wn(t?{dsn:t}:{},[i])}function ZF(n,{metadata:t,tunnel:o,dsn:i}){const c={event_id:n.event_id,sent_at:new Date().toISOString(),...t&&t.sdk&&{sdk:{name:t.sdk.name,version:t.sdk.version}},...!!o&&!!i&&{dsn:tt(i)}},a=QF(n);return wn(c,[a])}function QF(n){return[{type:"user_report"},n]}class eC extends GF{constructor(t){const o=L.SENTRY_SDK_SOURCE||VF();YF(t,"browser",["browser"],o),super(t),t.sendClientReports&&L.document&&L.document.addEventListener("visibilitychange",()=>{L.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(t,o){return Yy(this._options.stackParser,t,o,this._options.attachStacktrace)}eventFromMessage(t,o="info",i){return Vy(this._options.stackParser,t,o,i,this._options.attachStacktrace)}captureUserFeedback(t){if(!this._isEnabled()){De&&x.warn("SDK not enabled, will not capture user feedback.");return}const o=ZF(t,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this._sendEnvelope(o)}_prepareEvent(t,o,i){return t.platform=t.platform||"javascript",super._prepareEvent(t,o,i)}_flushOutcomes(){const t=this._clearOutcomes();if(t.length===0){De&&x.log("No outcomes to send");return}if(!this._dsn){De&&x.log("No dsn provided, will not send outcomes");return}De&&x.log("Sending outcomes:",t);const o=XF(t,this._options.tunnel&&tt(this._dsn));this._sendEnvelope(o)}}const Sn="?",nC=10,tC=20,oC=30,iC=40,rC=50;function ot(n,t,o,i){const c={filename:n,function:t,in_app:!0};return o!==void 0&&(c.lineno=o),i!==void 0&&(c.colno=i),c}const cC=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,aC=/\((\S*)(?::(\d+))(?::(\d+))\)/,gl=[oC,n=>{const t=cC.exec(n);if(t){if(t[2]&&t[2].indexOf("eval")===0){const a=aC.exec(t[2]);a&&(t[2]=a[1],t[3]=a[2],t[4]=a[3])}const[i,c]=pl(t[1]||Sn,t[2]);return ot(c,i,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}}],sC=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,lC=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,AC=[rC,n=>{const t=sC.exec(n);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const a=lC.exec(t[3]);a&&(t[1]=t[1]||"eval",t[3]=a[1],t[4]=a[2],t[5]="")}let i=t[3],c=t[1]||Sn;return[c,i]=pl(c,i),ot(i,c,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}],fC=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,uC=[iC,n=>{const t=fC.exec(n);return t?ot(t[2],t[1]||Sn,+t[3],t[4]?+t[4]:void 0):void 0}],EC=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,xk=[nC,n=>{const t=EC.exec(n);return t?ot(t[2],t[3]||Sn,+t[1]):void 0}],dC=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,Ik=[tC,n=>{const t=dC.exec(n);return t?ot(t[5],t[3]||t[4]||Sn,+t[1],+t[2]):void 0}],gC=Wa(...[gl,AC,uC]),pl=(n,t)=>{const o=n.indexOf("safari-extension")!==-1,i=n.indexOf("safari-web-extension")!==-1;return o||i?[n.indexOf("@")!==-1?n.split("@")[0]:Sn,o?`safari-extension:${t}`:`safari-web-extension:${t}`]:[n,t]};function pC(n){const t=[];function o(){return n===void 0||t.length<n}function i(s){return t.splice(t.indexOf(s),1)[0]}function c(s){if(!o())return hi(new we("Not adding Promise because buffer limit was reached."));const l=s();return t.indexOf(l)===-1&&t.push(l),l.then(()=>i(l)).then(null,()=>i(l).then(null,()=>{})),l}function a(s){return new de((l,A)=>{let f=t.length;if(!f)return l(!0);const u=setTimeout(()=>{s&&s>0&&l(!1)},s);t.forEach(E=>{mn(E).then(()=>{--f||(clearTimeout(u),l(!0))},A)})})}return{$:t,add:c,drain:a}}const hC=60*1e3;function bC(n,t=Date.now()){const o=parseInt(`${n}`,10);if(!isNaN(o))return o*1e3;const i=Date.parse(`${n}`);return isNaN(i)?hC:i-t}function _C(n,t){return n[t]||n.all||0}function mC(n,t,o=Date.now()){return _C(n,t)>o}function yC(n,{statusCode:t,headers:o},i=Date.now()){const c={...n},a=o&&o["x-sentry-rate-limits"],s=o&&o["retry-after"];if(a)for(const l of a.trim().split(",")){const[A,f,,,u]=l.split(":",5),E=parseInt(A,10),g=(isNaN(E)?60:E)*1e3;if(!f)c.all=i+g;else for(const h of f.split(";"))h==="metric_bucket"?(!u||u.split(";").includes("custom"))&&(c[h]=i+g):c[h]=i+g}else s?c.all=i+bC(s,i):t===429&&(c.all=i+60*1e3);return c}const BC=30;function Ui(n,t,o=pC(n.bufferSize||BC)){let i={};const c=s=>o.drain(s);function a(s){const l=[];if(Li(s,(E,g)=>{const h=ll(g);if(mC(i,h)){const _=hl(E,g);n.recordDroppedEvent("ratelimit_backoff",h,_)}else l.push(E)}),l.length===0)return mn();const A=wn(s[0],l),f=E=>{Li(A,(g,h)=>{const _=hl(g,h);n.recordDroppedEvent(E,ll(h),_)})},u=()=>t({body:IF(A,n.textEncoder)}).then(E=>(E.statusCode!==void 0&&(E.statusCode<200||E.statusCode>=300)&&j&&x.warn(`Sentry responded with status code ${E.statusCode} to sent event.`),i=yC(i,E),E),E=>{throw f("network_error"),E});return o.add(u).then(E=>E,E=>{if(E instanceof we)return j&&x.error("Skipped sending event because buffer is full."),f("queue_overflow"),mn();throw E})}return a.__sentry__baseTransport__=!0,{send:a,flush:c}}function hl(n,t){if(!(t!=="event"&&t!=="transaction"))return Array.isArray(n)?n[1]:void 0}let it;function FC(){if(it)return it;if(Pi(L.fetch))return it=L.fetch.bind(L);const n=L.document;let t=L.fetch;if(n&&typeof n.createElement=="function")try{const o=n.createElement("iframe");o.hidden=!0,n.head.appendChild(o);const i=o.contentWindow;i&&i.fetch&&(t=i.fetch),n.head.removeChild(o)}catch(o){De&&x.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",o)}return it=t.bind(L)}function CC(){it=void 0}function vC(n,t=FC()){let o=0,i=0;function c(a){const s=a.body.length;o+=s,i++;const l={body:a.body,method:"POST",referrerPolicy:"origin",headers:n.headers,keepalive:o<=6e4&&i<15,...n.fetchOptions};try{return t(n.url,l).then(A=>(o-=s,i--,{statusCode:A.status,headers:{"x-sentry-rate-limits":A.headers.get("X-Sentry-Rate-Limits"),"retry-after":A.headers.get("Retry-After")}}))}catch(A){return CC(),o-=s,i--,hi(A)}}return Ui(n,c)}const kC=4;function wC(n){function t(o){return new de((i,c)=>{const a=new XMLHttpRequest;a.onerror=c,a.onreadystatechange=()=>{a.readyState===kC&&i({statusCode:a.status,headers:{"x-sentry-rate-limits":a.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":a.getResponseHeader("Retry-After")}})},a.open("POST",n.url);for(const s in n.headers)Object.prototype.hasOwnProperty.call(n.headers,s)&&a.setRequestHeader(s,n.headers[s]);a.send(o.body)})}return Ui(n,t)}const bl=[Es(),fs(),Ts(),Ms(),Cs(),js(),qs(),Js()];function SC(n){return[...bl]}function TC(n={}){n.defaultIntegrations===void 0&&(n.defaultIntegrations=SC()),n.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(n.release=__SENTRY_RELEASE__),L.SENTRY_RELEASE&&L.SENTRY_RELEASE.id&&(n.release=L.SENTRY_RELEASE.id)),n.autoSessionTracking===void 0&&(n.autoSessionTracking=!0),n.sendClientReports===void 0&&(n.sendClientReports=!0);const t={...n,stackParser:Qm(n.stackParser||gC),integrations:hy(n),transport:n.transport||(Ri()?vC:wC)};FF(eC,t),n.autoSessionTracking&&xC()}const Pk=(n={},t=getCurrentHub())=>{if(!WINDOW.document){DEBUG_BUILD&&logger.error("Global document not defined in showReportDialog call");return}const{client:o,scope:i}=t.getStackTop(),c=n.dsn||o&&o.getDsn();if(!c){DEBUG_BUILD&&logger.error("DSN not configured for showReportDialog call");return}i&&(n.user={...i.getUser(),...n.user}),n.eventId||(n.eventId=t.lastEventId());const a=WINDOW.document.createElement("script");a.async=!0,a.crossOrigin="anonymous",a.src=getReportDialogEndpoint(c,n),n.onLoad&&(a.onload=n.onLoad);const{onClose:s}=n;if(s){const A=f=>{if(f.data==="__sentry_reportdialog_closed__")try{s()}finally{WINDOW.removeEventListener("message",A)}};WINDOW.addEventListener("message",A)}const l=WINDOW.document.head||WINDOW.document.body;l?l.appendChild(a):DEBUG_BUILD&&logger.error("Not injecting report dialog. No injection point found in HTML")};function Dk(){}function Nk(n){n()}function Mk(n){return wrap$1(n)()}function xC(){if(typeof L.document=="undefined"){De&&x.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}ns({ignoreDuration:!0}),is(),Ps(({from:n,to:t})=>{n!==void 0&&n!==t&&(ns({ignoreDuration:!0}),is())})}function Lk(n){const t=getClient();t&&t.captureUserFeedback(n)}function OC(n){const t=Object.assign({pollInterval:1e3,anrThreshold:5e3,captureStackTrace:!1},n),o=et();document.addEventListener("visibilitychange",()=>{o.sendStatus({status:document.visibilityState,config:t})}),o.sendStatus({status:document.visibilityState,config:t}),setInterval(()=>{o.sendStatus({status:"alive",config:t})},t.pollInterval)}const IC=50,[,RC]=gl,[,PC]=ey(),DC=(n,t=0)=>{const o=[];for(const i of n.split(`
`).slice(t)){const c=RC(i),a=PC(i);if(c&&(a==null?void 0:a.in_app)!==!1?o.push(c):a&&o.push(Be(a)),o.length>=IC)break}return Ka(o)};var Ji=function(n,t){return Ji=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(o[c]=i[c])},Ji(n,t)};function NC(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Ji(n,t);function o(){this.constructor=n}n.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var $i=function(){return $i=Object.assign||function(t){for(var o,i=1,c=arguments.length;i<c;i++){o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},$i.apply(this,arguments)};function MC(n,t){var o={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(n);c<i.length;c++)t.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(n,i[c])&&(o[i[c]]=n[i[c]]);return o}function LC(n,t,o,i){var c=arguments.length,a=c<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,o,i);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(a=(c<3?s(a):c>3?s(t,o,a):s(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a}function jC(n,t){return function(o,i){t(o,i,n)}}function jk(n,t,o,i,c,a){function s(O){if(O!==void 0&&typeof O!="function")throw new TypeError("Function expected");return O}for(var l=i.kind,A=l==="getter"?"get":l==="setter"?"set":"value",f=!t&&n?i.static?n:n.prototype:null,u=t||(f?Object.getOwnPropertyDescriptor(f,i.name):{}),E,g=!1,h=o.length-1;h>=0;h--){var _={};for(var T in i)_[T]=T==="access"?{}:i[T];for(var T in i.access)_.access[T]=i.access[T];_.addInitializer=function(O){if(g)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(O||null))};var C=(0,o[h])(l==="accessor"?{get:u.get,set:u.set}:u[A],_);if(l==="accessor"){if(C===void 0)continue;if(C===null||typeof C!="object")throw new TypeError("Object expected");(E=s(C.get))&&(u.get=E),(E=s(C.set))&&(u.set=E),(E=s(C.init))&&c.unshift(E)}else(E=s(C))&&(l==="field"?c.unshift(E):u[A]=E)}f&&Object.defineProperty(f,i.name,u),g=!0}function Uk(n,t,o){for(var i=arguments.length>2,c=0;c<t.length;c++)o=i?t[c].call(n,o):t[c].call(n);return i?o:void 0}function Jk(n){return typeof n=="symbol"?n:"".concat(n)}function $k(n,t,o){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:o?"".concat(o," ",t):t})}function UC(n,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,t)}function _l(n,t,o,i){function c(a){return a instanceof o?a:new o(function(s){s(a)})}return new(o||(o=Promise))(function(a,s){function l(u){try{f(i.next(u))}catch(E){s(E)}}function A(u){try{f(i.throw(u))}catch(E){s(E)}}function f(u){u.done?a(u.value):c(u.value).then(l,A)}f((i=i.apply(n,t||[])).next())})}function JC(n,t){var o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,c,a,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(f){return function(u){return A([f,u])}}function A(f){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,f[0]&&(o=0)),o;)try{if(i=1,c&&(a=f[0]&2?c.return:f[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,f[1])).done)return a;switch(c=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,c=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){o=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){o.label=f[1];break}if(f[0]===6&&o.label<a[1]){o.label=a[1],a=f;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(f);break}a[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(n,o)}catch(u){f=[6,u],c=0}finally{i=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var qi=Object.create?function(n,t,o,i){i===void 0&&(i=o);var c=Object.getOwnPropertyDescriptor(t,o);(!c||("get"in c?!t.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(n,i,c)}:function(n,t,o,i){i===void 0&&(i=o),n[i]=t[o]};function $C(n,t){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(t,o)&&qi(t,n,o)}function Hi(n){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&n[t],i=0;if(o)return o.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ml(n,t){var o=typeof Symbol=="function"&&n[Symbol.iterator];if(!o)return n;var i=o.call(n),c,a=[],s;try{for(;(t===void 0||t-- >0)&&!(c=i.next()).done;)a.push(c.value)}catch(l){s={error:l}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(s)throw s.error}}return a}function qC(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(ml(arguments[t]));return n}function HC(){for(var n=0,t=0,o=arguments.length;t<o;t++)n+=arguments[t].length;for(var i=Array(n),c=0,t=0;t<o;t++)for(var a=arguments[t],s=0,l=a.length;s<l;s++,c++)i[c]=a[s];return i}function zC(n,t,o){if(o||arguments.length===2)for(var i=0,c=t.length,a;i<c;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return n.concat(a||Array.prototype.slice.call(t))}function rt(n){return this instanceof rt?(this.v=n,this):new rt(n)}function GC(n,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=o.apply(n,t||[]),c,a=[];return c={},s("next"),s("throw"),s("return"),c[Symbol.asyncIterator]=function(){return this},c;function s(g){i[g]&&(c[g]=function(h){return new Promise(function(_,T){a.push([g,h,_,T])>1||l(g,h)})})}function l(g,h){try{A(i[g](h))}catch(_){E(a[0][3],_)}}function A(g){g.value instanceof rt?Promise.resolve(g.value.v).then(f,u):E(a[0][2],g)}function f(g){l("next",g)}function u(g){l("throw",g)}function E(g,h){g(h),a.shift(),a.length&&l(a[0][0],a[0][1])}}function WC(n){var t,o;return t={},i("next"),i("throw",function(c){throw c}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(c,a){t[c]=n[c]?function(s){return(o=!o)?{value:rt(n[c](s)),done:!1}:a?a(s):s}:a}}function KC(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],o;return t?t.call(n):(n=typeof Hi=="function"?Hi(n):n[Symbol.iterator](),o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o);function i(a){o[a]=n[a]&&function(s){return new Promise(function(l,A){s=n[a](s),c(l,A,s.done,s.value)})}}function c(a,s,l,A){Promise.resolve(A).then(function(f){a({value:f,done:l})},s)}}function YC(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}var VC=Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t};function XC(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var o in n)o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)&&qi(t,n,o);return VC(t,n),t}function ZC(n){return n&&n.__esModule?n:{default:n}}function QC(n,t,o,i){if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!i:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?i:o==="a"?i.call(n):i?i.value:t.get(n)}function ev(n,t,o,i,c){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!c)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!c:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?c.call(n,o):c?c.value=o:t.set(n,o),o}function nv(n,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?t===n:n.has(t)}function tv(n,t,o){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var i;if(o){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=t[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=t[Symbol.dispose]}if(typeof i!="function")throw new TypeError("Object not disposable.");n.stack.push({value:t,dispose:i,async:o})}else o&&n.stack.push({async:!0});return t}var ov=typeof SuppressedError=="function"?SuppressedError:function(n,t,o){var i=new Error(o);return i.name="SuppressedError",i.error=n,i.suppressed=t,i};function iv(n){function t(i){n.error=n.hasError?new ov(i,n.error,"An error was suppressed during disposal."):i,n.hasError=!0}function o(){for(;n.stack.length;){var i=n.stack.pop();try{var c=i.dispose&&i.dispose.call(i.value);if(i.async)return Promise.resolve(c).then(o,function(a){return t(a),o()})}catch(a){t(a)}}if(n.hasError)throw n.error}return o()}const qk={__extends:NC,__assign:$i,__rest:MC,__decorate:LC,__param:jC,__metadata:UC,__awaiter:_l,__generator:JC,__createBinding:qi,__exportStar:$C,__values:Hi,__read:ml,__spread:qC,__spreadArrays:HC,__spreadArray:zC,__await:rt,__asyncGenerator:GC,__asyncDelegator:WC,__asyncValues:KC,__makeTemplateObject:YC,__importStar:XC,__importDefault:ZC,__classPrivateFieldGet:QC,__classPrivateFieldSet:ev,__classPrivateFieldIn:nv,__addDisposableResource:tv,__disposeResources:iv};function rv(n){const t=et();return Ui(n,o=>_l(this,void 0,void 0,function*(){return t.sendEnvelope(o.body),{statusCode:200}}))}function cv(n){const t=typeof window!="undefined"?"renderer":"main";if(t!==n)throw new Error(`This code is intended to run in the Electron ${n} process but is currently running in the ${t} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${t}';`)}const av=[...bl,Vs(),al()];function sv(n={},t=TC){if(cv("renderer"),window!=null&&window.__SENTRY__RENDERER_INIT__){x.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);return}window.__SENTRY__RENDERER_INIT__=!0,n.autoSessionTracking===void 0&&(n.autoSessionTracking=!1),n.sendClientReports=!1,n.defaultIntegrations===void 0&&(n.defaultIntegrations=av),n.stackParser===void 0&&(n.stackParser=DC),n.dsn===void 0&&(n.dsn="https://12345@dummy.dsn/12345"),n.transport===void 0&&(n.transport=rv),n.anrDetection&&OC(n.anrDetection===!0?{}:n.anrDetection),delete n.initialScope,t(n)}const Hk=Object.assign(Object.assign({},mF),{MetricsAggregator:BF}),zk=Object.assign(Object.assign({},zB),d);function lv(){var n,t;console.log("Starting Sentry (Renderer)"),sv({...(t=(n=window.desktop)==null?void 0:n.diagnostics)==null?void 0:t.sentryOptions}),bm(Xa)}function Av(n){const t=useRef(n);return!shallowEqual(n,t.current)&&!isEqual(n,t.current)&&(t.current=n),t.current}function Gk(n,t){useEffect(n,[Av(t)])}function fv(n){return Am(n,Nc)}lv();const yl=n=>{var i;const t=(i=Ro(n))==null?void 0:i.history,o=Array.isArray(t)?t[t.length-1]:null;try{return o?Array.from(new URL(o).searchParams.keys()):[]}catch(c){return kc.error("getFlags: unexpected error occurred",{error:c,url:o}),[]}},zi={[ue.ITPolicy]:{},[ue.UserChoices]:{},[ue.ITDefaults]:{},[ue.SlackDefaults]:{}};void hm(()=>{const{intl:n}=window.desktop,{settings:t,webContents:o}=fv(E=>({settings:E.settings,webContents:E.webContents})),[i,c]=qn(Dc(zi)),[a,s]=qn(yl(o)),l=()=>c(Dc(zi)),A=()=>{const E=yl(o),g=Wo(a,E),h=Wo(E,a);if(!Nc(zi,i))for(const _ of Object.values(ue))window.desktop.settingsEditor.updateSettings(i[_],_);if(!Mc(g)||!Mc(h)){const _=[[g,!0],[h,!1]];for(const[T,C]of _)T.forEach(O=>window.desktop.settingsEditor.toggleFeatureFragment({feature:O,enabled:C}))}},f=E=>{const{currentTarget:g}=E,h={...i};let _=g.value;(_==="undefined"||_==="")&&(_=void 0),_==="null"&&(_=null),_==="false"&&(_=!1),_==="true"&&(_=!0);const T=g.id.split("."),[C,...O]=T,N=En(t,["slackDefaults",...O]),G=Array.isArray(N)?_.split(",").map(Z=>Z.trim()):_;Qb(h,T,G),c(h)},u=()=>{const E=vt(t,i[ue.SlackDefaults],i[ue.ITDefaults],i[ue.UserChoices],i[ue.ITPolicy],i),g=(N,G,Z,Q)=>{const Ae=[N,...G],ne=En(E,Ae),_e=Ae.join(".");return Z==="dropdown"?k("td",{class:Q?"highlight":"",children:k("select",{name:_e,id:_e,onChange:f,children:[void 0,null,!1,!0].map(Ne=>k("option",{selected:Ne===ne,value:String(Ne),children:String(Ne)}))})}):k("td",{class:Q?"highlight":"",children:k("input",{class:"layer-value",type:Z,id:_e,value:ne===void 0?"":String(ne),onInput:f})})},h=N=>{const G=En(E,["slackDefaults",...N]),Z=En(E,N);let Q="text";typeof G=="number"&&(Q="number"),typeof G=="boolean"&&(Q="dropdown");const Ae=N.join("."),ne=ch(t,Ae);return k("tr",{class:"settings-row",children:[k("td",{children:k("label",{class:"key",htmlFor:Ae,children:Ae})}),k("td",{children:k("label",{htmlFor:"computed-value",class:"computed-value",children:String(Z)})}),...Object.values(ue).map(_e=>g(_e,N,Q,_e===ne))]})},_=N=>{const G=En(E,N);return cc(G)?Object.keys(G).flatMap(Z=>_(N.concat(Z))):[h(N)]},T=[],C=Wo(Object.keys(E),Object.values(ue));for(const N of C){const G=_([N]);T.push(...G)}const O=N=>{const{currentTarget:G}=N,Z=G.value.split(",").map(Q=>Q.trim());s(Z)};return k("table",{id:"settings",children:[k("thead",{children:k("tr",{children:[k("th",{children:"Preference"}),k("th",{children:"Computed value"}),k("th",{children:"itPolicy"}),k("th",{children:"userChoices"}),k("th",{children:"itDefaults"}),k("th",{children:"slackDefaults"})]})}),k("tbody",{children:[...T,k("tr",{children:[k("td",{children:k("label",{htmlFor:"feature_flag",children:"feature_flag"})}),k("td",{colSpan:5,children:k("input",{type:"string",id:"feature-flags",value:a,onInput:O})})]})]})]})};return k("div",{className:"SettingsEditor",children:[k("header",{children:[k("button",{title:n.t("Save",$n.RENDERER)(),onClick:A,children:n.t("Save",$n.RENDERER)()}),k("button",{title:n.t("Reset",$n.RENDERER)(),onClick:l,children:n.t("Reset",$n.RENDERER)()})]}),u()]})})})(),_v=Tl})()});mv();})();

//# sourceMappingURL=settings-editor.bundle.js.map
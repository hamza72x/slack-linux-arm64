(()=>{var Py=Object.defineProperty;var Uy=(ee,Y,T)=>Y in ee?Py(ee,Y,{enumerable:!0,configurable:!0,writable:!0,value:T}):ee[Y]=T;var jy=(ee,Y)=>()=>(Y||ee((Y={exports:{}}).exports,Y),Y.exports);var W=(ee,Y,T)=>Uy(ee,typeof Y!="symbol"?Y+"":Y,T);var qy=jy((Ie,Oe)=>{(function(){try{var ee=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Y=new Error().stack;Y&&(ee._sentryDebugIds=ee._sentryDebugIds||{},ee._sentryDebugIds[Y]="87f482ce-a54c-4825-b79c-dde246b1f254",ee._sentryDebugIdIdentifier="sentry-dbid-87f482ce-a54c-4825-b79c-dde246b1f254")}catch{}})();var $y=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};$y.SENTRY_RELEASE={id:"Slack@4.47.69"};var Jy;(()=>{var ee={2617:(h,m,E)=>{"use strict";E.d(m,{A:()=>Re});var p=E(264),k=E.n(p),C=E(6520),B=E.n(C),v=E(9571),R=E.n(v),I=new URL(E(5539),E.b),D=new URL(E(4603),E.b),$=new URL(E(4392),E.b),j=new URL(E(9138),E.b),O=new URL(E(5906),E.b),H=new URL(E(9269),E.b),K=new URL(E(5959),E.b),G=new URL(E(7),E.b),X=new URL(E(6723),E.b),ne=B()(k()),le=R()(I),Ae=R()(D),q=R()($),z=R()(j),y=R()(O),_=R()(H),oe=R()(K),Cn=R()(G),je=R()(X);ne.push([h.id,`/*

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
  src: url(${le}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(${Ae}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(${q}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(${z}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(${y}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(${_}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(${oe}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(${Cn}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
@font-face {
  font-family: 'Slack v2';
  src: url(${je}) format('woff2');
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
.AboutBox {
  background: white;
  font-family: Slack-Lato, Lucida Grande, sans-serif;
  padding: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.AboutBox-logo {
  width: 82px;
  height: 82px;
  user-select: none;
}
.AboutBox-versionContainer {
  width: 100%;
  margin-top: 16px;
  text-align: center;
}
.AboutBox-version {
  width: 100%;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0;
  color: #2c2d30;
  text-align: center;
  user-select: none;
  pointer-events: none;
}
.AboutBox-version.long {
  font-size: 16px;
}
.AboutBox-webappVersion {
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0;
  color: #2c2d30;
  text-align: center;
  word-wrap: break-word;
}
.AboutBox-copy {
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
  padding: 0px 0px 0px 5px;
  transition: all 0.1s ease-in-out;
}
.AboutBox-copy:before {
  font-size: 16px;
  line-height: 18px;
}
.AboutBox-copy:hover {
  transform: scale(1.2);
}
.AboutBox-copy:active {
  transform: scale(1.1);
}
.AboutBox-tooltipHolder {
  display: inline-block;
  position: relative;
  z-index: 1;
  font-family: 'Slack-Lato', 'appleLogo', sans-serif !important;
}
.AboutBox-tooltip {
  display: block;
  position: absolute;
  z-index: 1030;
  top: 50%;
  left: 50%;
  border-radius: 6px;
  max-width: 250px;
  padding: 8px 12px;
  transform: translate(-50%, -150%);
  text-align: left;
  opacity: 0;
  color: white;
  background-color: black;
  font-size: 12px;
  font-weight: bold;
  font-style: normal;
  line-height: 1.3;
  pointer-events: none;
  user-select: none;
  transition: opacity 150ms ease-out;
}
.AboutBox-tooltip:after {
  top: 100%;
  left: 50%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(0, 0, 0, 0);
  border-top-color: #000000;
  border-width: 5px;
  margin-left: -5px;
}
.AboutBox .singleLineOfText {
  display: -webkit-box;
  text-overflow: visible;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.AboutBox .fadeIn {
  opacity: 0;
  transform: scaleY(0);
  animation-name: fadeInKeyframes;
  animation-duration: 250ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}
.AboutBox .fadeOut {
  opacity: 0;
  transition: all 250ms ease-in;
}
@keyframes fadeInKeyframes {
  to {
    opacity: 1;
    transform: scaleY(1);
    transform-origin: top;
  }
}
.AboutBox-dependencies {
  opacity: 0;
  transform: scaleY(0);
  position: absolute;
  left: 0px;
  bottom: 42px;
  margin-top: -20px;
  height: 192px;
  box-sizing: border-box;
  border: 1px solid rgba(151, 151, 151, 0.25);
  border-style: solid none;
  -webkit-app-region: no-drag;
}
.AboutBox-dependencies:hover,
.AboutBox-dependencies:focus,
.AboutBox-dependencies:active {
  outline: none;
}
.AboutBox-acknowledgements {
  background: #007a5a;
  color: white !important;
  padding: 8px 14px 9px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.25);
  -webkit-font-smoothing: antialiased;
  line-height: 1.2rem;
  font-weight: 900;
  font-size: 15px;
  font-family: inherit;
  text-decoration: none;
  -webkit-user-select: none;
  border: 0;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  margin-top: 35px;
  display: inline-block;
  cursor: default;
  -webkit-app-region: no-drag;
}
.AboutBox-acknowledgements:hover,
.AboutBox-acknowledgements:focus,
.AboutBox-acknowledgements:active {
  outline: none;
}
.AboutBox-acknowledgements::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.25rem;
}
.AboutBox-acknowledgements:hover::after {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
}
.AboutBox-acknowledgements:active {
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.25);
}
.AboutBox-acknowledgements:active::after {
  box-shadow: none;
}
.AboutBox .Dependency {
  font-family: Slack-Lato, Lucida Grande, sans-serif;
  color: #2c2d30;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
}
.AboutBox .Dependency-name {
  font-weight: 700;
  display: -webkit-box;
  text-overflow: visible;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.AboutBox .Dependency-licenseName {
  display: inline;
}
.AboutBox .Dependency-licenseText {
  display: inline-block;
  margin-top: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 1px solid rgba(151, 151, 151, 0.25);
  border-style: solid none;
}
.AboutBox .Dependency-licenseText-enter {
  opacity: 0;
}
.AboutBox .Dependency-licenseText-enter-active {
  opacity: 1;
  transition: opacity 0.4s ease-out;
}
.AboutBox .Dependency-viewLicense {
  background: white;
  color: #2c2d30;
  padding: 3px 3px 0px 3px;
  margin-left: 6px;
  text-shadow: 0 1px rgba(0, 0, 0, 0.25);
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none;
  border: 0;
  border-radius: 0.25rem;
  -webkit-box-shadow: none;
  display: inline-block;
  cursor: default;
}
.AboutBox .Dependency-viewLicense:focus,
.AboutBox .Dependency-viewLicense:active {
  outline: none;
}
.AboutBox .Dependency-viewLicense:hover {
  outline: none;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
}
.AboutBox .Dependency-viewLicense::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.25rem;
}
.AboutBox .Dependency-viewLicense:hover::after {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
}
.AboutBox .Dependency-viewLicense:active {
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.25);
}
.AboutBox .Dependency-viewLicense:active::after {
  box-shadow: none;
}
.AboutBox .Dependency-viewLicense-leave {
  opacity: 1;
}
.AboutBox .Dependency-viewLicense-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease-out;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/about-box.less","webpack://./src/resources/lato.less","webpack://./src/resources/slack-icons-font.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AElEA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AFmEF;AEvDA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AFyDF;AExDE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AF0EF;AExDA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AF0DF;AEzDE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AF2DJ;AEzDE;EAEE,gBAAA;AF0DJ;AEnDA;EACE,UAAA;AFqDF;AEpDE;EACE,kBAAA;AFsDJ;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEknBA;EAEE,WAAA;AFjnBF;AEsmBE;EACE,gBAAA;EACA,cAAA;AFpmBJ;AEsmBE;EACE,yBAAA;AFpmBJ;AE4mBE;EACE,eAAA;AF1mBJ;AE8mBA;EAEE,WAAA;AF7mBF;AEylBE;EACE,gBAAA;EACA,cAAA;AFvlBJ;AEylBE;EACE,yBAAA;AFvlBJ;AEwmBE;EACE,eAAA;AFtmBJ;AE0mBA;EAEE,WAAA;AFzmBF;AE4kBE;EACE,gBAAA;EACA,cAAA;AF1kBJ;AE4kBE;EACE,yBAAA;AF1kBJ;AEomBE;EACE,eAAA;AFlmBJ;AEkkBE;EACE,gBAAA;EACA,cAAA;AFhkBJ;AEkkBE;EACE,yBAAA;AFhkBJ;AE2jBE;EACE,gBAAA;EACA,cAAA;AFzjBJ;AE2jBE;EACE,yBAAA;AFzjBJ;AEojBE;EACE,gBAAA;EACA,cAAA;AFljBJ;AEojBE;EACE,yBAAA;AFljBJ;AE6iBE;EACE,gBAAA;EACA,cAAA;AF3iBJ;AE6iBE;EACE,yBAAA;AF3iBJ;AEsiBE;EACE,gBAAA;EACA,cAAA;AFpiBJ;AEsiBE;EACE,yBAAA;AFpiBJ;AE+hBE;EACE,gBAAA;EACA,cAAA;AF7hBJ;AE+hBE;EACE,yBAAA;AF7hBJ;AEwhBE;EACE,gBAAA;EACA,cAAA;AFthBJ;AEwhBE;EACE,yBAAA;AFthBJ;AEihBE;EACE,gBAAA;EACA,cAAA;AF/gBJ;AEihBE;EACE,yBAAA;AF/gBJ;AE0gBE;EACE,gBAAA;EACA,cAAA;AFxgBJ;AE0gBE;EACE,yBAAA;AFxgBJ;AEmgBE;EACE,gBAAA;EACA,cAAA;AFjgBJ;AEmgBE;EACE,yBAAA;AFjgBJ;AE4fE;EACE,gBAAA;EACA,cAAA;AF1fJ;AE4fE;EACE,yBAAA;AF1fJ;AEqfE;EACE,gBAAA;EACA,cAAA;AFnfJ;AEqfE;EACE,yBAAA;AFnfJ;AE8eE;EACE,gBAAA;EACA,cAAA;AF5eJ;AE8eE;EACE,yBAAA;AF5eJ;AEueE;EACE,gBAAA;EACA,cAAA;AFreJ;AEueE;EACE,yBAAA;AFreJ;AEgeE;EACE,gBAAA;EACA,cAAA;AF9dJ;AEgeE;EACE,yBAAA;AF9dJ;AEydE;EACE,gBAAA;EACA,cAAA;AFvdJ;AEydE;EACE,yBAAA;AFvdJ;AEkdE;EACE,gBAAA;EACA,cAAA;AFhdJ;AEkdE;EACE,yBAAA;AFhdJ;AE2cE;EACE,gBAAA;EACA,cAAA;AFzcJ;AE2cE;EACE,yBAAA;AFzcJ;AEocE;EACE,gBAAA;EACA,cAAA;AFlcJ;AEocE;EACE,yBAAA;AFlcJ;AE6bE;EACE,gBAAA;EACA,cAAA;AF3bJ;AE6bE;EACE,yBAAA;AF3bJ;AEsbE;EACE,gBAAA;EACA,cAAA;AFpbJ;AEsbE;EACE,yBAAA;AFpbJ;AE+aE;EACE,gBAAA;EACA,cAAA;AF7aJ;AE+aE;EACE,yBAAA;AF7aJ;AEwaE;EACE,gBAAA;EACA,cAAA;AFtaJ;AEwaE;EACE,yBAAA;AFtaJ;AEiaE;EACE,gBAAA;EACA,cAAA;AF/ZJ;AEiaE;EACE,yBAAA;AF/ZJ;AE0ZE;EACE,gBAAA;EACA,cAAA;AFxZJ;AE0ZE;EACE,yBAAA;AFxZJ;AEmZE;EACE,gBAAA;EACA,cAAA;AFjZJ;AEmZE;EACE,yBAAA;AFjZJ;AE4YE;EACE,gBAAA;EACA,cAAA;AF1YJ;AE4YE;EACE,yBAAA;AF1YJ;AEqYE;EACE,gBAAA;EACA,cAAA;AFnYJ;AEqYE;EACE,yBAAA;AFnYJ;AE8XE;EACE,gBAAA;EACA,cAAA;AF5XJ;AE8XE;EACE,yBAAA;AF5XJ;AEuXE;EACE,gBAAA;EACA,cAAA;AFrXJ;AEuXE;EACE,yBAAA;AFrXJ;AEgXE;EACE,gBAAA;EACA,cAAA;AF9WJ;AEgXE;EACE,yBAAA;AF9WJ;AEyWE;EACE,gBAAA;EACA,cAAA;AFvWJ;AEyWE;EACE,yBAAA;AFvWJ;AEkWE;EACE,gBAAA;EACA,cAAA;AFhWJ;AEkWE;EACE,yBAAA;AFhWJ;AE2VE;EACE,gBAAA;EACA,cAAA;AFzVJ;AE2VE;EACE,yBAAA;AFzVJ;AEoVE;EACE,gBAAA;EACA,cAAA;AFlVJ;AEoVE;EACE,yBAAA;AFlVJ;AE6UE;EACE,gBAAA;EACA,cAAA;AF3UJ;AE6UE;EACE,yBAAA;AF3UJ;AEsUE;EACE,gBAAA;EACA,cAAA;AFpUJ;AEsUE;EACE,yBAAA;AFpUJ;AE+TE;EACE,gBAAA;EACA,cAAA;AF7TJ;AE+TE;EACE,yBAAA;AF7TJ;AEwTE;EACE,gBAAA;EACA,cAAA;AFtTJ;AEwTE;EACE,yBAAA;AFtTJ;AEiTE;EACE,gBAAA;EACA,cAAA;AF/SJ;AEiTE;EACE,yBAAA;AF/SJ;AE0SE;EACE,gBAAA;EACA,cAAA;AFxSJ;AE0SE;EACE,yBAAA;AFxSJ;AEmSE;EACE,gBAAA;EACA,cAAA;AFjSJ;AEmSE;EACE,yBAAA;AFjSJ;AE4RE;EACE,gBAAA;EACA,cAAA;AF1RJ;AE4RE;EACE,yBAAA;AF1RJ;AEqRE;EACE,gBAAA;EACA,cAAA;AFnRJ;AEqRE;EACE,yBAAA;AFnRJ;AE8QE;EACE,gBAAA;EACA,cAAA;AF5QJ;AE8QE;EACE,yBAAA;AF5QJ;AEuQE;EACE,gBAAA;EACA,cAAA;AFrQJ;AEuQE;EACE,yBAAA;AFrQJ;AEgQE;EACE,gBAAA;EACA,cAAA;AF9PJ;AEgQE;EACE,yBAAA;AF9PJ;AEyPE;EACE,gBAAA;EACA,cAAA;AFvPJ;AEyPE;EACE,yBAAA;AFvPJ;AEkPE;EACE,gBAAA;EACA,cAAA;AFhPJ;AEkPE;EACE,yBAAA;AFhPJ;AE2OE;EACE,gBAAA;EACA,cAAA;AFzOJ;AE2OE;EACE,yBAAA;AFzOJ;AEoOE;EACE,gBAAA;EACA,cAAA;AFlOJ;AEoOE;EACE,yBAAA;AFlOJ;AE6NE;EACE,gBAAA;EACA,cAAA;AF3NJ;AE6NE;EACE,yBAAA;AF3NJ;AEsNE;EACE,gBAAA;EACA,cAAA;AFpNJ;AEsNE;EACE,yBAAA;AFpNJ;AE+ME;EACE,gBAAA;EACA,cAAA;AF7MJ;AE+ME;EACE,yBAAA;AF7MJ;AEwME;EACE,gBAAA;EACA,cAAA;AFtMJ;AEwME;EACE,yBAAA;AFtMJ;AEiME;EACE,gBAAA;EACA,cAAA;AF/LJ;AEiME;EACE,yBAAA;AF/LJ;AE0LE;EACE,gBAAA;EACA,cAAA;AFxLJ;AE0LE;EACE,yBAAA;AFxLJ;AEmLE;EACE,gBAAA;EACA,cAAA;AFjLJ;AEmLE;EACE,yBAAA;AFjLJ;AE4KE;EACE,gBAAA;EACA,cAAA;AF1KJ;AE4KE;EACE,yBAAA;AF1KJ;AEqKE;EACE,gBAAA;EACA,cAAA;AFnKJ;AEqKE;EACE,yBAAA;AFnKJ;AE8JE;EACE,gBAAA;EACA,cAAA;AF5JJ;AE8JE;EACE,yBAAA;AF5JJ;AEuJE;EACE,gBAAA;EACA,cAAA;AFrJJ;AEuJE;EACE,yBAAA;AFrJJ;AEgJE;EACE,gBAAA;EACA,cAAA;AF9IJ;AEgJE;EACE,yBAAA;AF9IJ;AEyIE;EACE,gBAAA;EACA,cAAA;AFvIJ;AEyIE;EACE,yBAAA;AFvIJ;AEkIE;EACE,gBAAA;EACA,cAAA;AFhIJ;AEkIE;EACE,yBAAA;AFhIJ;AE2HE;EACE,gBAAA;EACA,cAAA;AFzHJ;AE2HE;EACE,yBAAA;AFzHJ;AEoHE;EACE,gBAAA;EACA,cAAA;AFlHJ;AEoHE;EACE,yBAAA;AFlHJ;AE6GE;EACE,gBAAA;EACA,cAAA;AF3GJ;AE6GE;EACE,yBAAA;AF3GJ;AEsGE;EACE,gBAAA;EACA,cAAA;AFpGJ;AEsGE;EACE,yBAAA;AFpGJ;AE+FE;EACE,gBAAA;EACA,cAAA;AF7FJ;AE+FE;EACE,yBAAA;AF7FJ;AEwFE;EACE,gBAAA;EACA,cAAA;AFtFJ;AEwFE;EACE,yBAAA;AFtFJ;AEiFE;EACE,gBAAA;EACA,cAAA;AF/EJ;AEiFE;EACE,yBAAA;AF/EJ;AE0EE;EACE,gBAAA;EACA,cAAA;AFxEJ;AE0EE;EACE,yBAAA;AFxEJ;AEmEE;EACE,gBAAA;EACA,cAAA;AFjEJ;AEmEE;EACE,yBAAA;AFjEJ;AE4DE;EACE,gBAAA;EACA,cAAA;AF1DJ;AE4DE;EACE,yBAAA;AF1DJ;AEqDE;EACE,gBAAA;EACA,cAAA;AFnDJ;AEqDE;EACE,yBAAA;AFnDJ;AE8CE;EACE,gBAAA;EACA,cAAA;AF5CJ;AE8CE;EACE,yBAAA;AF5CJ;AEuCE;EACE,gBAAA;EACA,cAAA;AFrCJ;AEuCE;EACE,yBAAA;AFrCJ;AEgCE;EACE,gBAAA;EACA,cAAA;AF9BJ;AEgCE;EACE,yBAAA;AF9BJ;AEyBE;EACE,gBAAA;EACA,cAAA;AFvBJ;AEyBE;EACE,yBAAA;AFvBJ;AEkBE;EACE,gBAAA;EACA,cAAA;AFhBJ;AEkBE;EACE,yBAAA;AFhBJ;AEWE;EACE,gBAAA;EACA,cAAA;AFTJ;AEWE;EACE,yBAAA;AFTJ;AEIE;EACE,gBAAA;EACA,cAAA;AFFJ;AEIE;EACE,yBAAA;AFFJ;AEHE;EACE,gBAAA;EACA,cAAA;AFKJ;AEHE;EACE,yBAAA;AFKJ;AEVE;EACE,gBAAA;EACA,cAAA;AFYJ;AEVE;EACE,yBAAA;AFYJ;AEjBE;EACE,gBAAA;EACA,cAAA;AFmBJ;AEjBE;EACE,yBAAA;AFmBJ;AExBE;EACE,gBAAA;EACA,cAAA;AF0BJ;AExBE;EACE,yBAAA;AF0BJ;AE/BE;EACE,gBAAA;EACA,cAAA;AFiCJ;AE/BE;EACE,yBAAA;AFiCJ;AEtCE;EACE,gBAAA;EACA,cAAA;AFwCJ;AEtCE;EACE,yBAAA;AFwCJ;AE7CE;EACE,gBAAA;EACA,cAAA;AF+CJ;AE7CE;EACE,yBAAA;AF+CJ;AEpDE;EACE,gBAAA;EACA,cAAA;AFsDJ;AEpDE;EACE,yBAAA;AFsDJ;AE3DE;EACE,gBAAA;EACA,cAAA;AF6DJ;AE3DE;EACE,yBAAA;AF6DJ;AElEE;EACE,gBAAA;EACA,cAAA;AFoEJ;AElEE;EACE,yBAAA;AFoEJ;AEzEE;EACE,gBAAA;EACA,cAAA;AF2EJ;AEzEE;EACE,yBAAA;AF2EJ;AEhFE;EACE,gBAAA;EACA,cAAA;AFkFJ;AEhFE;EACE,yBAAA;AFkFJ;AEvFE;EACE,gBAAA;EACA,cAAA;AFyFJ;AEvFE;EACE,yBAAA;AFyFJ;AE9FE;EACE,gBAAA;EACA,cAAA;AFgGJ;AE9FE;EACE,yBAAA;AFgGJ;AErGE;EACE,gBAAA;EACA,cAAA;AFuGJ;AErGE;EACE,yBAAA;AFuGJ;AE5GE;EACE,gBAAA;EACA,cAAA;AF8GJ;AE5GE;EACE,yBAAA;AF8GJ;AEnHE;EACE,gBAAA;EACA,cAAA;AFqHJ;AEnHE;EACE,yBAAA;AFqHJ;AE1HE;EACE,gBAAA;EACA,cAAA;AF4HJ;AE1HE;EACE,yBAAA;AF4HJ;AEjIE;EACE,gBAAA;EACA,cAAA;AFmIJ;AEjIE;EACE,yBAAA;AFmIJ;AExIE;EACE,gBAAA;EACA,cAAA;AF0IJ;AExIE;EACE,yBAAA;AF0IJ;AE/IE;EACE,gBAAA;EACA,cAAA;AFiJJ;AE/IE;EACE,yBAAA;AFiJJ;AEtJE;EACE,gBAAA;EACA,cAAA;AFwJJ;AEtJE;EACE,yBAAA;AFwJJ;AE7JE;EACE,gBAAA;EACA,cAAA;AF+JJ;AE7JE;EACE,yBAAA;AF+JJ;AEpKE;EACE,gBAAA;EACA,cAAA;AFsKJ;AEpKE;EACE,yBAAA;AFsKJ;AE3KE;EACE,gBAAA;EACA,cAAA;AF6KJ;AE3KE;EACE,yBAAA;AF6KJ;AElLE;EACE,gBAAA;EACA,cAAA;AFoLJ;AElLE;EACE,yBAAA;AFoLJ;AEzLE;EACE,gBAAA;EACA,cAAA;AF2LJ;AEzLE;EACE,yBAAA;AF2LJ;AEhME;EACE,gBAAA;EACA,cAAA;AFkMJ;AEhME;EACE,yBAAA;AFkMJ;AEvME;EACE,gBAAA;EACA,cAAA;AFyMJ;AEvME;EACE,yBAAA;AFyMJ;AE9ME;EACE,gBAAA;EACA,cAAA;AFgNJ;AE9ME;EACE,yBAAA;AFgNJ;AErNE;EACE,gBAAA;EACA,cAAA;AFuNJ;AErNE;EACE,yBAAA;AFuNJ;AE5NE;EACE,gBAAA;EACA,cAAA;AF8NJ;AE5NE;EACE,yBAAA;AF8NJ;AEnOE;EACE,gBAAA;EACA,cAAA;AFqOJ;AEnOE;EACE,yBAAA;AFqOJ;AE1OE;EACE,gBAAA;EACA,cAAA;AF4OJ;AE1OE;EACE,yBAAA;AF4OJ;AEjPE;EACE,gBAAA;EACA,cAAA;AFmPJ;AEjPE;EACE,yBAAA;AFmPJ;AExPE;EACE,gBAAA;EACA,cAAA;AF0PJ;AExPE;EACE,yBAAA;AF0PJ;AE/PE;EACE,gBAAA;EACA,cAAA;AFiQJ;AE/PE;EACE,yBAAA;AFiQJ;AEtQE;EACE,gBAAA;EACA,cAAA;AFwQJ;AEtQE;EACE,yBAAA;AFwQJ;AE7QE;EACE,gBAAA;EACA,cAAA;AF+QJ;AE7QE;EACE,yBAAA;AF+QJ;AEpRE;EACE,gBAAA;EACA,cAAA;AFsRJ;AEpRE;EACE,yBAAA;AFsRJ;AE3RE;EACE,gBAAA;EACA,cAAA;AF6RJ;AE3RE;EACE,yBAAA;AF6RJ;AACA;;;;EAIE;AG7xFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AH+xFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;;;;;;;;;;;EAaE;AACF;;;CAGC;AACD;;;CAGC;AIxuFD;EACE,iBAAA;AJ0uFF;AIxuFA;EACE,iBAAA;AJ0uFF;AAh0FA;EACE,iBAAA;EACA,kDAAA;EACA,aAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AAi0FF;AA/zFE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AAi0FJ;AA9zFE;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;AAg0FJ;AA7zFE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;AA+zFJ;AA9zFI;EACE,eAAA;AAg0FN;AA5zFE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;AA8zFJ;AA3zFE;EACE,6BAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;EACA,gCAAA;AA6zFJ;AA5zFI;EACE,eAAA;EACA,iBAAA;AA8zFN;AA5zFI;EACE,qBAAA;AA8zFN;AA5zFI;EACE,qBAAA;AA8zFN;AA1zFE;EACE,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,6DAAA;AA4zFJ;AAzzFE;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iCAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,kCAAA;AA2zFJ;AAzzFI;EACE,SAAA;EACA,SAAA;EACA,yBAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,oBAAA;EACA,8BAAA;EACA,yBAAA;EACA,iBAAA;EACA,iBAAA;AA2zFN;AAv6FA;EAiHI,oBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,4BAAA;AAyzFJ;AA96FA;EAyHI,UAAA;EACA,oBAAA;EACA,+BAAA;EACA,yBAAA;EACA,kCAAA;EACA,6BAAA;AAwzFJ;AAt7FA;EAkII,UAAA;EACA,6BAAA;AAuzFJ;AApzFE;EACE;IACE,UAAA;IACA,oBAAA;IACA,qBAAA;EAszFJ;AACF;AAnzFE;EACE,UAAA;EACA,oBAAA;EAEA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,2CAAA;EACA,wBAAA;EACA,2BAAA;AAozFJ;AAlzFI;;;EAGE,aAAA;AAozFN;AAhzFE;EACE,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,sCAAA;EACA,mCAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,qBAAA;EACA,yBAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,2BAAA;AAkzFJ;AAhzFI;;;EAGE,aAAA;AAkzFN;AA/yFI;EACE,kBAAA;EACA,WAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,sBAAA;AAizFN;AA9yFI;EACE,4CAAA;AAgzFN;AA7yFI;EACE,+CAAA;AA+yFN;AA7yFM;EACE,gBAAA;AA+yFR;AA9/FA;EAqNI,kDAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EAEA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;AA2yFJ;AAzyFI;EACE,gBAAA;EAhHF,oBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,4BAAA;AA45FJ;AA5yFI;EACE,eAAA;AA8yFN;AA3yFI;EACE,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,2CAAA;EACA,wBAAA;AA6yFN;AA3yFM;EACE,UAAA;AA6yFR;AA3yFQ;EACE,UAAA;EACA,iCAAA;AA6yFV;AAxyFI;EACE,iBAAA;EACA,cAAA;EACA,wBAAA;EACA,gBAAA;EACA,sCAAA;EACA,mCAAA;EACA,yBAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,qBAAA;EACA,eAAA;AA0yFN;AAxyFM;;EAEE,aAAA;AA0yFR;AAvyFM;EACE,aAAA;EACA,2CAAA;AAyyFR;AAtyFM;EACE,kBAAA;EACA,WAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,sBAAA;AAwyFR;AAryFM;EACE,4CAAA;AAuyFR;AApyFM;EACE,+CAAA;AAsyFR;AApyFQ;EACE,gBAAA;AAsyFV;AAlyFM;EACE,UAAA;AAoyFR;AAlyFQ;EACE,UAAA;EACA,iCAAA;AAoyFV",sourcesContent:[`@import '../../resources/lato.less';
@import '../../resources/slack-icons-font.less';
@import '../../resources/plastic/plastic_typography.less';
@import '../../resources/plastic/plastic_utilities.less';
@import '../../resources/slack_kit/slack_kit_colors.less';

@about-width: 320px;
@about-padding: 42px;
@about-text-color: #2c2d30;
@about-border-color: rgba(151, 151, 151, 0.25);
@about-font-family: Slack-Lato, Lucida Grande, sans-serif;
@shadow-color: rgba(0, 0, 0, 0.25);

.AboutBox {
  background: white;
  font-family: @about-font-family;
  padding: @about-padding;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-logo {
    width: 82px;
    height: 82px;
    user-select: none;
  }

  &-versionContainer {
    width: 100%;
    margin-top: 16px;
    text-align: center;
  }

  &-version {
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0;
    color: @about-text-color;
    text-align: center;
    user-select: none;
    pointer-events: none;
    &.long {
      font-size: 16px;
    }
  }

  &-webappVersion {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0;
    color: @about-text-color;
    text-align: center;
    word-wrap: break-word;
  }

  &-copy {
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;
    outline: none;
    padding: 0px 0px 0px 5px;
    transition: all 0.1s ease-in-out;
    &:before {
      font-size: 16px;
      line-height: 18px;
    }
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(1.1);
    }
  }

  &-tooltipHolder {
    display: inline-block;
    position: relative;
    z-index: 1;
    font-family: @lato !important;
  }

  &-tooltip {
    display: block;
    position: absolute;
    z-index: 1030;
    top: 50%;
    left: 50%;
    border-radius: 6px;
    max-width: 250px;
    padding: 8px 12px;
    transform: translate(-50%, -150%);
    text-align: left;
    opacity: 0;
    color: white;
    background-color: black;
    font-size: 12px;
    font-weight: bold;
    font-style: normal;
    line-height: 1.3;
    pointer-events: none;
    user-select: none;
    transition: opacity 150ms ease-out;

    &:after {
      top: 100%;
      left: 50%;
      border: solid transparent;
      content: ' ';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-color: rgba(0, 0, 0, 0);
      border-top-color: #000000;
      border-width: 5px;
      margin-left: -5px;
    }
  }

  .singleLineOfText {
    display: -webkit-box;
    text-overflow: visible;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .fadeIn {
    opacity: 0;
    transform: scaleY(0);
    animation-name: fadeInKeyframes;
    animation-duration: 250ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }

  .fadeOut {
    opacity: 0;
    transition: all 250ms ease-in;
  }

  @keyframes fadeInKeyframes {
    to {
      opacity: 1;
      transform: scaleY(1);
      transform-origin: top;
    }
  }

  &-dependencies {
    opacity: 0;
    transform: scaleY(0);

    position: absolute;
    left: 0px;
    bottom: 42px;
    margin-top: -20px;
    height: 192px;
    box-sizing: border-box;
    border: 1px solid @about-border-color;
    border-style: solid none;
    -webkit-app-region: no-drag;

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }
  }

  &-acknowledgements {
    background: @sk_green;
    color: white !important;
    padding: 8px 14px 9px;
    text-shadow: 0 1px @shadow-color;
    -webkit-font-smoothing: antialiased;
    line-height: 1.2rem;
    font-weight: 900;
    font-size: 15px;
    font-family: inherit;
    text-decoration: none;
    -webkit-user-select: none;
    border: 0;
    border-radius: 0.25rem;
    -webkit-box-shadow: none;
    margin-top: 35px;
    display: inline-block;
    cursor: default;
    -webkit-app-region: no-drag;

    &:hover,
    &:focus,
    &:active {
      outline: none;
    }

    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-radius: 0.25rem;
    }

    &:hover::after {
      box-shadow: inset 0 -2px @shadow-color;
    }

    &:active {
      box-shadow: inset 0 2px 1px @shadow-color;

      &::after {
        box-shadow: none;
      }
    }
  }

  .Dependency {
    font-family: @about-font-family;
    color: @about-text-color;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0;

    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 24px;
    padding-right: 24px;

    &-name {
      font-weight: 700;
      .singleLineOfText;
    }

    &-licenseName {
      display: inline;
    }

    &-licenseText {
      display: inline-block;
      margin-top: 12px;
      padding-top: 12px;
      padding-bottom: 12px;
      border: 1px solid @about-border-color;
      border-style: solid none;

      &-enter {
        opacity: 0;

        &-active {
          opacity: 1;
          transition: opacity 0.4s ease-out;
        }
      }
    }

    &-viewLicense {
      background: white;
      color: @about-text-color;
      padding: 3px 3px 0px 3px;
      margin-left: 6px;
      text-shadow: 0 1px @shadow-color;
      -webkit-font-smoothing: antialiased;
      -webkit-user-select: none;
      border: 0;
      border-radius: 0.25rem;
      -webkit-box-shadow: none;
      display: inline-block;
      cursor: default;

      &:focus,
      &:active {
        outline: none;
      }

      &:hover {
        outline: none;
        box-shadow: inset 0 1px @shadow-color;
      }

      &::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 0.25rem;
      }

      &:hover::after {
        box-shadow: inset 0 -2px @shadow-color;
      }

      &:active {
        box-shadow: inset 0 2px 1px @shadow-color;

        &::after {
          box-shadow: none;
        }
      }

      &-leave {
        opacity: 1;

        &-active {
          opacity: 0;
          transition: opacity 0.2s ease-out;
        }
      }
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
`],sourceRoot:""}]);const Re=ne},6520:h=>{"use strict";h.exports=function(m){var E=[];return E.toString=function(){return this.map(function(k){var C="",B=typeof k[5]!="undefined";return k[4]&&(C+="@supports (".concat(k[4],") {")),k[2]&&(C+="@media ".concat(k[2]," {")),B&&(C+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),C+=m(k),B&&(C+="}"),k[2]&&(C+="}"),k[4]&&(C+="}"),C}).join("")},E.i=function(k,C,B,v,R){typeof k=="string"&&(k=[[null,k,void 0]]);var I={};if(B)for(var D=0;D<this.length;D++){var $=this[D][0];$!=null&&(I[$]=!0)}for(var j=0;j<k.length;j++){var O=[].concat(k[j]);B&&I[O[0]]||(typeof R!="undefined"&&(typeof O[5]=="undefined"||(O[1]="@layer".concat(O[5].length>0?" ".concat(O[5]):""," {").concat(O[1],"}")),O[5]=R),C&&(O[2]&&(O[1]="@media ".concat(O[2]," {").concat(O[1],"}")),O[2]=C),v&&(O[4]?(O[1]="@supports (".concat(O[4],") {").concat(O[1],"}"),O[4]=v):O[4]="".concat(v)),E.push(O))}},E}},9571:h=>{"use strict";h.exports=function(m,E){return E||(E={}),m&&(m=String(m.__esModule?m.default:m),/^['"].*['"]$/.test(m)&&(m=m.slice(1,-1)),E.hash&&(m+=E.hash),/["'() \t\n]|(%20)/.test(m)||E.needQuotes?'"'.concat(m.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):m)}},264:h=>{"use strict";h.exports=function(m){var E=m[1],p=m[3];if(!p)return E;if(typeof btoa=="function"){var k=btoa(unescape(encodeURIComponent(JSON.stringify(p)))),C="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(k),B="/*# ".concat(C," */");return[E].concat([B]).join(`
`)}return[E].join(`
`)}},2676:(h,m,E)=>{"use strict";var p=E(4038),k={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},C={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},v={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R={};R[p.ForwardRef]=B,R[p.Memo]=v;function I(X){return p.isMemo(X)?v:R[X.$$typeof]||k}var D=Object.defineProperty,$=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,O=Object.getOwnPropertyDescriptor,H=Object.getPrototypeOf,K=Object.prototype;function G(X,ne,le){if(typeof ne!="string"){if(K){var Ae=H(ne);Ae&&Ae!==K&&G(X,Ae,le)}var q=$(ne);j&&(q=q.concat(j(ne)));for(var z=I(X),y=I(ne),_=0;_<q.length;++_){var oe=q[_];if(!C[oe]&&!(le&&le[oe])&&!(y&&y[oe])&&!(z&&z[oe])){var Cn=O(ne,oe);try{D(X,oe,Cn)}catch{}}}}return X}h.exports=G},4874:(h,m)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=typeof Symbol=="function"&&Symbol.for,p=E?Symbol.for("react.element"):60103,k=E?Symbol.for("react.portal"):60106,C=E?Symbol.for("react.fragment"):60107,B=E?Symbol.for("react.strict_mode"):60108,v=E?Symbol.for("react.profiler"):60114,R=E?Symbol.for("react.provider"):60109,I=E?Symbol.for("react.context"):60110,D=E?Symbol.for("react.async_mode"):60111,$=E?Symbol.for("react.concurrent_mode"):60111,j=E?Symbol.for("react.forward_ref"):60112,O=E?Symbol.for("react.suspense"):60113,H=E?Symbol.for("react.suspense_list"):60120,K=E?Symbol.for("react.memo"):60115,G=E?Symbol.for("react.lazy"):60116,X=E?Symbol.for("react.block"):60121,ne=E?Symbol.for("react.fundamental"):60117,le=E?Symbol.for("react.responder"):60118,Ae=E?Symbol.for("react.scope"):60119;function q(y){if(typeof y=="object"&&y!==null){var _=y.$$typeof;switch(_){case p:switch(y=y.type,y){case D:case $:case C:case v:case B:case O:return y;default:switch(y=y&&y.$$typeof,y){case I:case j:case G:case K:case R:return y;default:return _}}case k:return _}}}function z(y){return q(y)===$}m.AsyncMode=D,m.ConcurrentMode=$,m.ContextConsumer=I,m.ContextProvider=R,m.Element=p,m.ForwardRef=j,m.Fragment=C,m.Lazy=G,m.Memo=K,m.Portal=k,m.Profiler=v,m.StrictMode=B,m.Suspense=O,m.isAsyncMode=function(y){return z(y)||q(y)===D},m.isConcurrentMode=z,m.isContextConsumer=function(y){return q(y)===I},m.isContextProvider=function(y){return q(y)===R},m.isElement=function(y){return typeof y=="object"&&y!==null&&y.$$typeof===p},m.isForwardRef=function(y){return q(y)===j},m.isFragment=function(y){return q(y)===C},m.isLazy=function(y){return q(y)===G},m.isMemo=function(y){return q(y)===K},m.isPortal=function(y){return q(y)===k},m.isProfiler=function(y){return q(y)===v},m.isStrictMode=function(y){return q(y)===B},m.isSuspense=function(y){return q(y)===O},m.isValidElementType=function(y){return typeof y=="string"||typeof y=="function"||y===C||y===$||y===v||y===B||y===O||y===H||typeof y=="object"&&y!==null&&(y.$$typeof===G||y.$$typeof===K||y.$$typeof===R||y.$$typeof===I||y.$$typeof===j||y.$$typeof===ne||y.$$typeof===le||y.$$typeof===Ae||y.$$typeof===X)},m.typeOf=q},4038:(h,m,E)=>{"use strict";h.exports=E(4874)},7760:(h,m,E)=>{"use strict";var p=E(6471);function k(){}function C(){}C.resetWarningCache=k,h.exports=function(){function B(I,D,$,j,O,H){if(H!==p){var K=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw K.name="Invariant Violation",K}}B.isRequired=B;function v(){return B}var R={array:B,bool:B,func:B,number:B,object:B,string:B,symbol:B,any:B,arrayOf:v,element:B,elementType:B,instanceOf:v,node:B,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:C,resetWarningCache:k};return R.PropTypes=R,R}},8182:(h,m,E)=>{if(0)var p,k;else h.exports=E(7760)()},6471:h=>{"use strict";var m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";h.exports=m},5323:(h,m)=>{"use strict";var E;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=typeof Symbol=="function"&&Symbol.for,k=p?Symbol.for("react.element"):60103,C=p?Symbol.for("react.portal"):60106,B=p?Symbol.for("react.fragment"):60107,v=p?Symbol.for("react.strict_mode"):60108,R=p?Symbol.for("react.profiler"):60114,I=p?Symbol.for("react.provider"):60109,D=p?Symbol.for("react.context"):60110,$=p?Symbol.for("react.async_mode"):60111,j=p?Symbol.for("react.concurrent_mode"):60111,O=p?Symbol.for("react.forward_ref"):60112,H=p?Symbol.for("react.suspense"):60113,K=p?Symbol.for("react.suspense_list"):60120,G=p?Symbol.for("react.memo"):60115,X=p?Symbol.for("react.lazy"):60116,ne=p?Symbol.for("react.block"):60121,le=p?Symbol.for("react.fundamental"):60117,Ae=p?Symbol.for("react.responder"):60118,q=p?Symbol.for("react.scope"):60119;function z(_){if(typeof _=="object"&&_!==null){var oe=_.$$typeof;switch(oe){case k:switch(_=_.type,_){case $:case j:case B:case R:case v:case H:return _;default:switch(_=_&&_.$$typeof,_){case D:case O:case X:case G:case I:return _;default:return oe}}case C:return oe}}}function y(_){return z(_)===j}E=$,E=j,E=D,E=I,E=k,E=O,E=B,E=X,E=G,E=C,E=R,E=v,E=H,E=function(_){return y(_)||z(_)===$},E=y,E=function(_){return z(_)===D},E=function(_){return z(_)===I},E=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===k},E=function(_){return z(_)===O},E=function(_){return z(_)===B},E=function(_){return z(_)===X},E=function(_){return z(_)===G},E=function(_){return z(_)===C},E=function(_){return z(_)===R},E=function(_){return z(_)===v},E=function(_){return z(_)===H},E=function(_){return typeof _=="string"||typeof _=="function"||_===B||_===j||_===R||_===v||_===H||_===K||typeof _=="object"&&_!==null&&(_.$$typeof===X||_.$$typeof===G||_.$$typeof===I||_.$$typeof===D||_.$$typeof===O||_.$$typeof===le||_.$$typeof===Ae||_.$$typeof===q||_.$$typeof===ne)},E=z},8063:(h,m,E)=>{"use strict";E(5323)},382:h=>{"use strict";var m=[];function E(C){for(var B=-1,v=0;v<m.length;v++)if(m[v].identifier===C){B=v;break}return B}function p(C,B){for(var v={},R=[],I=0;I<C.length;I++){var D=C[I],$=B.base?D[0]+B.base:D[0],j=v[$]||0,O="".concat($," ").concat(j);v[$]=j+1;var H=E(O),K={css:D[1],media:D[2],sourceMap:D[3],supports:D[4],layer:D[5]};if(H!==-1)m[H].references++,m[H].updater(K);else{var G=k(K,B);B.byIndex=I,m.splice(I,0,{identifier:O,updater:G,references:1})}R.push(O)}return R}function k(C,B){var v=B.domAPI(B);v.update(C);var R=function(D){if(D){if(D.css===C.css&&D.media===C.media&&D.sourceMap===C.sourceMap&&D.supports===C.supports&&D.layer===C.layer)return;v.update(C=D)}else v.remove()};return R}h.exports=function(C,B){B=B||{},C=C||[];var v=p(C,B);return function(I){I=I||[];for(var D=0;D<v.length;D++){var $=v[D],j=E($);m[j].references--}for(var O=p(I,B),H=0;H<v.length;H++){var K=v[H],G=E(K);m[G].references===0&&(m[G].updater(),m.splice(G,1))}v=O}}},6349:h=>{"use strict";var m={};function E(k){if(typeof m[k]=="undefined"){var C=document.querySelector(k);if(window.HTMLIFrameElement&&C instanceof window.HTMLIFrameElement)try{C=C.contentDocument.head}catch{C=null}m[k]=C}return m[k]}function p(k,C){var B=E(k);if(!B)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");B.appendChild(C)}h.exports=p},8170:h=>{"use strict";function m(E){var p=document.createElement("style");return E.setAttributes(p,E.attributes),E.insert(p,E.options),p}h.exports=m},8990:(h,m,E)=>{"use strict";function p(k){var C=E.nc;C&&k.setAttribute("nonce",C)}h.exports=p},727:h=>{"use strict";function m(k,C,B){var v="";B.supports&&(v+="@supports (".concat(B.supports,") {")),B.media&&(v+="@media ".concat(B.media," {"));var R=typeof B.layer!="undefined";R&&(v+="@layer".concat(B.layer.length>0?" ".concat(B.layer):""," {")),v+=B.css,R&&(v+="}"),B.media&&(v+="}"),B.supports&&(v+="}");var I=B.sourceMap;I&&typeof btoa!="undefined"&&(v+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(I))))," */")),C.styleTagTransform(v,k,C.options)}function E(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function p(k){var C=k.insertStyleElement(k);return{update:function(v){m(C,k,v)},remove:function(){E(C)}}}h.exports=p},1487:h=>{"use strict";function m(E,p){if(p.styleSheet)p.styleSheet.cssText=E;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(E))}}h.exports=m},6723:(h,m,E)=>{"use strict";h.exports=E.p+"slack-icons-v25aaab12924ee17421031.woff2"},9138:(h,m,E)=>{"use strict";h.exports=E.p+"lato-blackd3e44e6115ad32c37176.woff2"},4392:(h,m,E)=>{"use strict";h.exports=E.p+"lato-bold31816c24a18fbc659282.woff2"},7:(h,m,E)=>{"use strict";h.exports=E.p+"lato-italic-black62bc5da14d9c6ff41e5f.woff2"},5959:(h,m,E)=>{"use strict";h.exports=E.p+"lato-italic-bold365ea5a303e2259ca5ab.woff2"},5906:(h,m,E)=>{"use strict";h.exports=E.p+"lato-italic-light074c7fc38126bb94664d.woff2"},9269:(h,m,E)=>{"use strict";h.exports=E.p+"lato-italic4484c4211566a05bd71b.woff2"},5539:(h,m,E)=>{"use strict";h.exports=E.p+"lato-light2815bd9ba07f2cbe781a.woff2"},4603:(h,m,E)=>{"use strict";h.exports=E.p+"lato-regularf1aa7a0753149183efa2.woff2"},5083:(h,m,E)=>{h.exports=E(4496)(172)},4496:h=>{"use strict";h.exports=self.rendererVendor}},Y={};function T(h){var m=Y[h];if(m!==void 0)return m.exports;var E=Y[h]={id:h,exports:{}};return ee[h](E,E.exports,T),E.exports}T.m=ee,T.n=h=>{var m=h&&h.__esModule?()=>h.default:()=>h;return T.d(m,{a:m}),m},T.d=(h,m)=>{for(var E in m)T.o(m,E)&&!T.o(h,E)&&Object.defineProperty(h,E,{enumerable:!0,get:m[E]})},T.o=(h,m)=>Object.prototype.hasOwnProperty.call(h,m),T.r=h=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(h,"__esModule",{value:!0})},T.p="./",(()=>{T.b=document.baseURI||self.location.href;var h={290:0}})(),T.nc=void 0;var Qt={};(()=>{"use strict";T.r(Qt),T.d(Qt,{AboutBox:()=>zs});var h={};T.r(h),T.d(h,{FunctionToString:()=>Pm,InboundFilters:()=>$m,LinkedErrors:()=>th});var m={};T.r(m),T.d(m,{Breadcrumbs:()=>Wh,Dedupe:()=>r_,GlobalHandlers:()=>bh,HttpContext:()=>i_,LinkedErrors:()=>o_,TryCatch:()=>Fh});var E={};T.r(E),T.d(E,{EventToMain:()=>Jt,ScopeToMain:()=>E_});var p=T(5083),k=/["&<]/;function C(n){if(n.length===0||k.test(n)===!1)return n;for(var t=0,o=0,i="",c="";o<n.length;o++){switch(n.charCodeAt(o)){case 34:c="&quot;";break;case 38:c="&amp;";break;case 60:c="&lt;";break;default:continue}o!==t&&(i+=n.slice(t,o)),i+=c,t=o+1}return o!==t&&(i+=n.slice(t,o)),i}var B=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,v=0,R=Array.isArray;function I(n,t,o,i,c,a){var s,l,A={};for(l in t)l=="ref"?s=t[l]:A[l]=t[l];var f={type:n,props:A,key:o,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--v,__i:-1,__u:0,__source:c,__self:a};if(typeof n=="function"&&(s=n.defaultProps))for(l in s)A[l]===void 0&&(A[l]=s[l]);return p.options.vnode&&p.options.vnode(f),f}function D(n){var t=I(e,{tpl:n,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var $={},j=/[A-Z]/g;function O(n,t){if(r.attr){var o=r.attr(n,t);if(typeof o=="string")return o}if(n==="ref"||n==="key")return"";if(n==="style"&&typeof t=="object"){var i="";for(var c in t){var a=t[c];if(a!=null&&a!==""){var s=c[0]=="-"?c:$[c]||($[c]=c.replace(j,"-$&").toLowerCase()),l=";";typeof a!="number"||s.startsWith("--")||B.test(s)||(l="px;"),i=i+s+":"+a+l}}return n+'="'+i+'"'}return t==null||t===!1||typeof t=="function"||typeof t=="object"?"":t===!0?n:n+'="'+C(t)+'"'}function H(n){if(n==null||typeof n=="boolean"||typeof n=="function")return null;if(typeof n=="object"){if(n.constructor===void 0)return n;if(R(n)){for(var t=0;t<n.length;t++)n[t]=H(n[t]);return n}}return C(""+n)}var K=T(382),G=T.n(K),X=T(727),ne=T.n(X),le=T(6349),Ae=T.n(le),q=T(8990),z=T.n(q),y=T(8170),_=T.n(y),oe=T(1487),Cn=T.n(oe),je=T(2617),Re={};Re.styleTagTransform=Cn(),Re.setAttributes=z(),Re.insert=Ae().bind(null,"head"),Re.domAPI=ne(),Re.insertStyleElement=_();var zy=G()(je.A,Re);const Hy=je.A&&je.A.locals?je.A.locals:void 0;var Qs=(n,t,o)=>{if(t.length===1&&t[0]===o){let i=!1;try{const c={};n(c)===c&&(i=!0)}catch{}if(i){let c;try{throw new Error}catch(a){({stack:c}=a)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:c})}}},Zs=(n,t,o)=>{const{memoize:i,memoizeOptions:c}=t,{inputSelectorResults:a,inputSelectorResultsCopy:s}=n,l=i(()=>({}),...c);if(!(l.apply(null,a)===l.apply(null,s))){let f;try{throw new Error}catch(u){({stack:f}=u)}console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:o,firstInputs:a,secondInputs:s,stack:f})}},Di={inputStabilityCheck:"once",identityFunctionCheck:"once"},Gy=n=>{Object.assign(Di,n)},Zn="NOT_FOUND";function Ni(n,t=`expected a function, instead received ${typeof n}`){if(typeof n!="function")throw new TypeError(t)}function el(n,t=`expected an object, instead received ${typeof n}`){if(typeof n!="object")throw new TypeError(t)}function nl(n,t="expected all items to be functions, instead received the following types: "){if(!n.every(o=>typeof o=="function")){const o=n.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${o}]`)}}var Li=n=>Array.isArray(n)?n:[n];function tl(n){const t=Array.isArray(n[0])?n[0]:n;return nl(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function ol(n,t){const o=[],{length:i}=n;for(let c=0;c<i;c++)o.push(n[c].apply(null,t));return o}var Wy=(n,t)=>{const{identityFunctionCheck:o,inputStabilityCheck:i}={...Di,...t};return{identityFunctionCheck:{shouldRun:o==="always"||o==="once"&&n,run:Qs},inputStabilityCheck:{shouldRun:i==="always"||i==="once"&&n,run:Zs}}},Mi=0,Be=null,Zt=class{constructor(n,t=eo){W(this,"revision",Mi);W(this,"_value");W(this,"_lastValue");W(this,"_isEqual",eo);this._value=this._lastValue=n,this._isEqual=t}get value(){return Be==null||Be.add(this),this._value}set value(n){this.value!==n&&(this._value=n,this.revision=++Mi)}};function eo(n,t){return n===t}var il=class{constructor(n){W(this,"_cachedValue");W(this,"_cachedRevision",-1);W(this,"_deps",[]);W(this,"hits",0);W(this,"fn");this.fn=n}clear(){this._cachedValue=void 0,this._cachedRevision=-1,this._deps=[],this.hits=0}get value(){if(this.revision>this._cachedRevision){const{fn:n}=this,t=new Set,o=Be;Be=t,this._cachedValue=n(),Be=o,this.hits++,this._deps=Array.from(t),this._cachedRevision=this.revision}return Be==null||Be.add(this),this._cachedValue}get revision(){return Math.max(...this._deps.map(n=>n.revision),0)}};function no(n){return n instanceof Zt||console.warn("Not a valid cell! ",n),n.value}function rl(n,t){if(!(n instanceof Zt))throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");n.value=n._lastValue=t}function cl(n,t=eo){return new Zt(n,t)}function al(n){return Ni(n,"the first parameter to `createCache` must be a function"),new il(n)}var sl=(n,t)=>!1;function et(){return cl(null,sl)}function nt(n,t){rl(n,t)}var Pi=n=>{let t=n.collectionTag;t===null&&(t=n.collectionTag=et()),no(t)},tt=n=>{const t=n.collectionTag;t!==null&&nt(t,null)},Ky=Symbol(),Ui=0,ll=Object.getPrototypeOf({}),Al=class{constructor(n){W(this,"proxy",new Proxy(this,Fn));W(this,"tag",et());W(this,"tags",{});W(this,"children",{});W(this,"collectionTag",null);W(this,"id",Ui++);this.value=n,this.value=n,this.tag.value=n}},Fn={get(n,t){function o(){const{value:c}=n,a=Reflect.get(c,t);if(typeof t=="symbol"||t in ll)return a;if(typeof a=="object"&&a!==null){let s=n.children[t];return s===void 0&&(s=n.children[t]=ji(a)),s.tag&&no(s.tag),s.proxy}else{let s=n.tags[t];return s===void 0&&(s=n.tags[t]=et(),s.value=a),no(s),a}}return o()},ownKeys(n){return Pi(n),Reflect.ownKeys(n.value)},getOwnPropertyDescriptor(n,t){return Reflect.getOwnPropertyDescriptor(n.value,t)},has(n,t){return Reflect.has(n.value,t)}},fl=class{constructor(n){W(this,"proxy",new Proxy([this],ul));W(this,"tag",et());W(this,"tags",{});W(this,"children",{});W(this,"collectionTag",null);W(this,"id",Ui++);this.value=n,this.value=n,this.tag.value=n}},ul={get([n],t){return t==="length"&&Pi(n),Fn.get(n,t)},ownKeys([n]){return Fn.ownKeys(n)},getOwnPropertyDescriptor([n],t){return Fn.getOwnPropertyDescriptor(n,t)},has([n],t){return Fn.has(n,t)}};function ji(n){return Array.isArray(n)?new fl(n):new Al(n)}function $i(n,t){const{value:o,tags:i,children:c}=n;if(n.value=t,Array.isArray(o)&&Array.isArray(t)&&o.length!==t.length)tt(n);else if(o!==t){let a=0,s=0,l=!1;for(const f in o)a++;for(const f in t)if(s++,!(f in o)){l=!0;break}(l||a!==s)&&tt(n)}for(const a in i){const s=o[a],l=t[a];s!==l&&(tt(n),nt(i[a],l)),typeof l=="object"&&l!==null&&delete i[a]}for(const a in c){const s=c[a],l=t[a];s.value!==l&&(typeof l=="object"&&l!==null?$i(s,l):(Ji(s),delete c[a]))}}function Ji(n){n.tag&&nt(n.tag,null),tt(n);for(const t in n.tags)nt(n.tags[t],null);for(const t in n.children)Ji(n.children[t])}function El(n){let t;return{get(o){return t&&n(t.key,o)?t.value:Zn},put(o,i){t={key:o,value:i}},getEntries(){return t?[t]:[]},clear(){t=void 0}}}function dl(n,t){let o=[];function i(l){const A=o.findIndex(f=>t(l,f.key));if(A>-1){const f=o[A];return A>0&&(o.splice(A,1),o.unshift(f)),f.value}return Zn}function c(l,A){i(l)===Zn&&(o.unshift({key:l,value:A}),o.length>n&&o.pop())}function a(){return o}function s(){o=[]}return{get:i,put:c,getEntries:a,clear:s}}var qi=(n,t)=>n===t;function zi(n){return function(o,i){if(o===null||i===null||o.length!==i.length)return!1;const{length:c}=o;for(let a=0;a<c;a++)if(!n(o[a],i[a]))return!1;return!0}}function Vy(n,t){const o=typeof t=="object"?t:{equalityCheck:t},{equalityCheck:i=qi,maxSize:c=1,resultEqualityCheck:a}=o,s=zi(i);let l=0;const A=c===1?El(s):dl(c,s);function f(){let u=A.get(arguments);if(u===Zn){if(u=n.apply(null,arguments),l++,a){const g=A.getEntries().find(b=>a(b.value,u));g&&(u=g.value,l!==0&&l--)}A.put(arguments,u)}return u}return f.clearCache=()=>{A.clear(),f.resetResultsCount()},f.resultsCount=()=>l,f.resetResultsCount=()=>{l=0},f}function Yy(n){const t=ji([]);let o=null;const i=zi(qi),c=al(()=>n.apply(null,t.proxy));function a(){return i(o,arguments)||($i(t,arguments),o=arguments),c.value}return a.clearCache=()=>c.clear(),a}var gl=class{constructor(n){this.value=n}deref(){return this.value}},pl=typeof WeakRef!="undefined"?WeakRef:gl,bl=0,Hi=1;function ot(){return{s:bl,v:void 0,o:null,p:null}}function Gi(n,t={}){let o=ot();const{resultEqualityCheck:i}=t;let c,a=0;function s(){var d,g;let l=o;const{length:A}=arguments;for(let b=0,F=A;b<F;b++){const x=arguments[b];if(typeof x=="function"||typeof x=="object"&&x!==null){let w=l.o;w===null&&(l.o=w=new WeakMap);const N=w.get(x);N===void 0?(l=ot(),w.set(x,l)):l=N}else{let w=l.p;w===null&&(l.p=w=new Map);const N=w.get(x);N===void 0?(l=ot(),w.set(x,l)):l=N}}const f=l;let u;if(l.s===Hi?u=l.v:(u=n.apply(null,arguments),a++),f.s=Hi,i){const b=(g=(d=c==null?void 0:c.deref)==null?void 0:d.call(c))!=null?g:c;b!=null&&i(b,u)&&(u=b,a!==0&&a--),c=typeof u=="object"&&u!==null||typeof u=="function"?new pl(u):u}return f.v=u,u}return s.clearCache=()=>{o=ot(),s.resetResultsCount()},s.resultsCount=()=>a,s.resetResultsCount=()=>{a=0},s}function ml(n,...t){const o=typeof n=="function"?{memoize:n,memoizeOptions:t}:n,i=(...c)=>{let a=0,s=0,l,A={},f=c.pop();typeof f=="object"&&(A=f,f=c.pop()),Ni(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...o,...A},{memoize:d,memoizeOptions:g=[],argsMemoize:b=Gi,argsMemoizeOptions:F=[],devModeChecks:x={}}=u,w=Li(g),N=Li(F),Q=tl(c),_e=d(function(){return a++,f.apply(null,arguments)},...w);let Te=!0;const de=b(function(){s++;const ae=ol(Q,arguments);return l=_e.apply(null,ae),l},...N);return Object.assign(de,{resultFunc:f,memoizedResultFunc:_e,dependencies:Q,dependencyRecomputations:()=>s,resetDependencyRecomputations:()=>{s=0},lastResult:()=>l,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:d,argsMemoize:b})};return Object.assign(i,{withTypes:()=>i}),i}var ie=ml(Gi),hl=Object.assign((n,t=ie)=>{el(n,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`);const o=Object.keys(n),i=o.map(a=>n[a]);return t(i,(...a)=>a.reduce((s,l,A)=>(s[o[A]]=l,s),{}))},{withTypes:()=>hl}),vn=(n=>(n.DOGFOOD="dogfood",n.BETA="beta",n.PROD="prod",n))(vn||{}),_l=(n=>(n.BETA="beta",n.PROD="prod",n))(_l||{});const Xy=n=>n!=="prod";function Qy(n,t){for(const o of Object.values(SettingsLayer))if(has(n[o],t))return o;return null}const Bl=ie(n=>n,({zoomLevel:n,notificationZoomLevel:t})=>t&&t!==null?t:n),Zy=ie(Bl,n=>1+n*.2),yl=({settings:n})=>n.releaseChannelOverride||vn.PROD,eC=({environment:n,settings:t})=>{const o=process.env.SLACK_DEVELOPER_MENU;if(o==="false")return!1;const{isDevMode:i,devEnv:c,openDevToolsOnStart:a}=n,{devToolsEnabled:s}=t;return i||!!c||a||!!o||s},nC=({settings:n})=>{const{devToolsEnabled:t}=n;return t},tC=n=>!0,oC=({app:n,environment:t,settings:o})=>{const{notificationMethod:c}=o,a=isFeatureEnabled(FeatureFlag.FORCE_NATIVE_NOTIFICATIONS,n),s=c==="html",l=c&&c!=="html";return!!s},iC=n=>{const t=n.notificationTimeout;return Number.isSafeInteger(t)&&t===Number.MAX_SAFE_INTEGER};var De=(n=>(n.GENERAL="desktop_general",n.BROWSER="desktop_browser",n.RENDERER="desktop_renderer",n.MESSAGEBOX="desktop_messagebox",n.MENU="desktop_menu",n.EXTERNAL="desktop_external",n))(De||{});function Cl(n,t,o,i){return o?{[vn.BETA]:i.t("Beta",De.RENDERER)(),[vn.PROD]:i.t("Production",De.GENERAL)(),[vn.DOGFOOD]:"Dogfood"}[t]||"":kl(n,i)}function Fl(n){const t="72d60eb",o="HEAD";let i=n||"";return i.endsWith(".65535")&&t&&o&&(i=`${i} ${o}/${t}`),i}function vl(n){switch(n){case"x64":return" 64-bit";case"arm64":return" 64-bit (ARM)";default:return""}}function rC(n){const t=n.lastIndexOf("72d60eb");return t>-1?n.slice(0,t):n}function kl(n,t){switch(n){case"WinStore":return t.t("Windows Store",De.RENDERER)();case"MAS":return t.t("App Store",De.RENDERER)();case"Snap":case"Flatpak":case"MSI":case"LMSI":case"MSQ":return n;default:return""}}var ge=(n=>(n[n.NORMAL=1e3]="NORMAL",n[n.RESTRICTED=1001]="RESTRICTED",n[n.MILITARY=1002]="MILITARY",n))(ge||{}),wl=Array.isArray;const pe=wl;var Sl=typeof global=="object"&&global&&global.Object===Object&&global;const Wi=Sl;var xl=typeof self=="object"&&self&&self.Object===Object&&self,Tl=Wi||xl||Function("return this")();const ye=Tl;var Il=ye.Symbol;const be=Il;var Ki=Object.prototype,Ol=Ki.hasOwnProperty,Rl=Ki.toString,kn=be?be.toStringTag:void 0;function Dl(n){var t=Ol.call(n,kn),o=n[kn];try{n[kn]=void 0;var i=!0}catch{}var c=Rl.call(n);return i&&(t?n[kn]=o:delete n[kn]),c}const Nl=Dl;var Ll=Object.prototype,Ml=Ll.toString;function Pl(n){return Ml.call(n)}const Ul=Pl;var jl="[object Null]",$l="[object Undefined]",Vi=be?be.toStringTag:void 0;function Jl(n){return n==null?n===void 0?$l:jl:Vi&&Vi in Object(n)?Nl(n):Ul(n)}const en=Jl;function ql(n){return n!=null&&typeof n=="object"}const $e=ql;var zl="[object Symbol]";function Hl(n){return typeof n=="symbol"||$e(n)&&en(n)==zl}const it=Hl;var Gl=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Wl=/^\w*$/;function Kl(n,t){if(pe(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||it(n)?!0:Wl.test(n)||!Gl.test(n)||t!=null&&n in Object(t)}const to=Kl;function Vl(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}const Je=Vl;var Yl="[object AsyncFunction]",Xl="[object Function]",Ql="[object GeneratorFunction]",Zl="[object Proxy]";function eA(n){if(!Je(n))return!1;var t=en(n);return t==Xl||t==Ql||t==Yl||t==Zl}const Yi=eA;var nA=ye["__core-js_shared__"];const oo=nA;var Xi=function(){var n=/[^.]+$/.exec(oo&&oo.keys&&oo.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function tA(n){return!!Xi&&Xi in n}const oA=tA;var iA=Function.prototype,rA=iA.toString;function cA(n){if(n!=null){try{return rA.call(n)}catch{}try{return n+""}catch{}}return""}const qe=cA;var aA=/[\\^$.*+?()[\]{}|]/g,sA=/^\[object .+?Constructor\]$/,lA=Function.prototype,AA=Object.prototype,fA=lA.toString,uA=AA.hasOwnProperty,EA=RegExp("^"+fA.call(uA).replace(aA,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function dA(n){if(!Je(n)||oA(n))return!1;var t=Yi(n)?EA:sA;return t.test(qe(n))}const gA=dA;function pA(n,t){return n==null?void 0:n[t]}const bA=pA;function mA(n,t){var o=bA(n,t);return gA(o)?o:void 0}const ze=mA;var hA=ze(Object,"create");const wn=hA;function _A(){this.__data__=wn?wn(null):{},this.size=0}const BA=_A;function yA(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}const CA=yA;var FA="__lodash_hash_undefined__",vA=Object.prototype,kA=vA.hasOwnProperty;function wA(n){var t=this.__data__;if(wn){var o=t[n];return o===FA?void 0:o}return kA.call(t,n)?t[n]:void 0}const SA=wA;var xA=Object.prototype,TA=xA.hasOwnProperty;function IA(n){var t=this.__data__;return wn?t[n]!==void 0:TA.call(t,n)}const OA=IA;var RA="__lodash_hash_undefined__";function DA(n,t){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=wn&&t===void 0?RA:t,this}const NA=DA;function nn(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}nn.prototype.clear=BA,nn.prototype.delete=CA,nn.prototype.get=SA,nn.prototype.has=OA,nn.prototype.set=NA;const Qi=nn;function LA(){this.__data__=[],this.size=0}const MA=LA;function PA(n,t){return n===t||n!==n&&t!==t}const io=PA;function UA(n,t){for(var o=n.length;o--;)if(io(n[o][0],t))return o;return-1}const rt=UA;var jA=Array.prototype,$A=jA.splice;function JA(n){var t=this.__data__,o=rt(t,n);if(o<0)return!1;var i=t.length-1;return o==i?t.pop():$A.call(t,o,1),--this.size,!0}const qA=JA;function zA(n){var t=this.__data__,o=rt(t,n);return o<0?void 0:t[o][1]}const HA=zA;function GA(n){return rt(this.__data__,n)>-1}const WA=GA;function KA(n,t){var o=this.__data__,i=rt(o,n);return i<0?(++this.size,o.push([n,t])):o[i][1]=t,this}const VA=KA;function tn(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}tn.prototype.clear=MA,tn.prototype.delete=qA,tn.prototype.get=HA,tn.prototype.has=WA,tn.prototype.set=VA;const ct=tn;var YA=ze(ye,"Map");const Sn=YA;function XA(){this.size=0,this.__data__={hash:new Qi,map:new(Sn||ct),string:new Qi}}const QA=XA;function ZA(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}const ef=ZA;function nf(n,t){var o=n.__data__;return ef(t)?o[typeof t=="string"?"string":"hash"]:o.map}const at=nf;function tf(n){var t=at(this,n).delete(n);return this.size-=t?1:0,t}const of=tf;function rf(n){return at(this,n).get(n)}const cf=rf;function af(n){return at(this,n).has(n)}const sf=af;function lf(n,t){var o=at(this,n),i=o.size;return o.set(n,t),this.size+=o.size==i?0:1,this}const Af=lf;function on(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}on.prototype.clear=QA,on.prototype.delete=of,on.prototype.get=cf,on.prototype.has=sf,on.prototype.set=Af;const st=on;var ff="Expected a function";function ro(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new TypeError(ff);var o=function(){var i=arguments,c=t?t.apply(this,i):i[0],a=o.cache;if(a.has(c))return a.get(c);var s=n.apply(this,i);return o.cache=a.set(c,s)||a,s};return o.cache=new(ro.Cache||st),o}ro.Cache=st;const co=ro;var uf=500;function Ef(n){var t=co(n,function(i){return o.size===uf&&o.clear(),i}),o=t.cache;return t}const df=Ef;var gf=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,pf=/\\(\\)?/g,bf=df(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(gf,function(o,i,c,a){t.push(c?a.replace(pf,"$1"):i||o)}),t});const mf=bf;function hf(n,t){for(var o=-1,i=n==null?0:n.length,c=Array(i);++o<i;)c[o]=t(n[o],o,n);return c}const ao=hf;var _f=1/0,Zi=be?be.prototype:void 0,er=Zi?Zi.toString:void 0;function nr(n){if(typeof n=="string")return n;if(pe(n))return ao(n,nr)+"";if(it(n))return er?er.call(n):"";var t=n+"";return t=="0"&&1/n==-_f?"-0":t}const Bf=nr;function yf(n){return n==null?"":Bf(n)}const Cf=yf;function Ff(n,t){return pe(n)?n:to(n,t)?[n]:mf(Cf(n))}const lt=Ff;var vf=1/0;function kf(n){if(typeof n=="string"||it(n))return n;var t=n+"";return t=="0"&&1/n==-vf?"-0":t}const xn=kf;function wf(n,t){t=lt(t,n);for(var o=0,i=t.length;n!=null&&o<i;)n=n[xn(t[o++])];return o&&o==i?n:void 0}const so=wf;var Sf=function(){try{var n=ze(Object,"defineProperty");return n({},"",{}),n}catch{}}();const At=Sf;function xf(n,t,o){t=="__proto__"&&At?At(n,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[t]=o}const Tf=xf;var If=Object.prototype,Of=If.hasOwnProperty;function Rf(n,t,o){var i=n[t];(!(Of.call(n,t)&&io(i,o))||o===void 0&&!(t in n))&&Tf(n,t,o)}const Df=Rf;var Nf=9007199254740991,Lf=/^(?:0|[1-9]\d*)$/;function Mf(n,t){var o=typeof n;return t=t==null?Nf:t,!!t&&(o=="number"||o!="symbol"&&Lf.test(n))&&n>-1&&n%1==0&&n<t}const lo=Mf;function Pf(n,t,o,i){if(!Je(n))return n;t=lt(t,n);for(var c=-1,a=t.length,s=a-1,l=n;l!=null&&++c<a;){var A=xn(t[c]),f=o;if(A==="__proto__"||A==="constructor"||A==="prototype")return n;if(c!=s){var u=l[A];f=i?i(u,A,l):void 0,f===void 0&&(f=Je(u)?u:lo(t[c+1])?[]:{})}Df(l,A,f),l=l[A]}return n}const Uf=Pf;function jf(n,t,o){for(var i=-1,c=t.length,a={};++i<c;){var s=t[i],l=so(n,s);o(l,s)&&Uf(a,lt(s,n),l)}return a}const $f=jf;function Jf(n,t){return n!=null&&t in Object(n)}const qf=Jf;var zf="[object Arguments]";function Hf(n){return $e(n)&&en(n)==zf}const tr=Hf;var or=Object.prototype,Gf=or.hasOwnProperty,Wf=or.propertyIsEnumerable,Kf=tr(function(){return arguments}())?tr:function(n){return $e(n)&&Gf.call(n,"callee")&&!Wf.call(n,"callee")};const Ao=Kf;var Vf=9007199254740991;function Yf(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Vf}const fo=Yf;function Xf(n,t,o){t=lt(t,n);for(var i=-1,c=t.length,a=!1;++i<c;){var s=xn(t[i]);if(!(a=n!=null&&o(n,s)))break;n=n[s]}return a||++i!=c?a:(c=n==null?0:n.length,!!c&&fo(c)&&lo(s,c)&&(pe(n)||Ao(n)))}const Qf=Xf;function Zf(n,t){return n!=null&&Qf(n,t,qf)}const ir=Zf;function eu(n,t){return $f(n,t,function(o,i){return ir(n,i)})}const nu=eu;function tu(n,t){for(var o=-1,i=t.length,c=n.length;++o<i;)n[c+o]=t[o];return n}const rr=tu;var cr=be?be.isConcatSpreadable:void 0;function ou(n){return pe(n)||Ao(n)||!!(cr&&n&&n[cr])}const iu=ou;function ar(n,t,o,i,c){var a=-1,s=n.length;for(o||(o=iu),c||(c=[]);++a<s;){var l=n[a];t>0&&o(l)?t>1?ar(l,t-1,o,i,c):rr(c,l):i||(c[c.length]=l)}return c}const ru=ar;function cu(n){var t=n==null?0:n.length;return t?ru(n,1):[]}const au=cu;function su(n,t,o){switch(o.length){case 0:return n.call(t);case 1:return n.call(t,o[0]);case 2:return n.call(t,o[0],o[1]);case 3:return n.call(t,o[0],o[1],o[2])}return n.apply(t,o)}const lu=su;var sr=Math.max;function Au(n,t,o){return t=sr(t===void 0?n.length-1:t,0),function(){for(var i=arguments,c=-1,a=sr(i.length-t,0),s=Array(a);++c<a;)s[c]=i[t+c];c=-1;for(var l=Array(t+1);++c<t;)l[c]=i[c];return l[t]=o(s),lu(n,this,l)}}const lr=Au;function fu(n){return function(){return n}}const uu=fu;function Eu(n){return n}const uo=Eu;var du=At?function(n,t){return At(n,"toString",{configurable:!0,enumerable:!1,value:uu(t),writable:!0})}:uo;const gu=du;var pu=800,bu=16,mu=Date.now;function hu(n){var t=0,o=0;return function(){var i=mu(),c=bu-(i-o);if(o=i,c>0){if(++t>=pu)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}var _u=hu(gu);const Ar=_u;function Bu(n){return Ar(lr(n,void 0,au),n+"")}var yu=Bu(function(n,t){return n==null?{}:nu(n,t)});const Cu=yu;var Fu="__lodash_hash_undefined__";function vu(n){return this.__data__.set(n,Fu),this}const ku=vu;function wu(n){return this.__data__.has(n)}const Su=wu;function ft(n){var t=-1,o=n==null?0:n.length;for(this.__data__=new st;++t<o;)this.add(n[t])}ft.prototype.add=ft.prototype.push=ku,ft.prototype.has=Su;const fr=ft;function xu(n,t,o,i){for(var c=n.length,a=o+(i?1:-1);i?a--:++a<c;)if(t(n[a],a,n))return a;return-1}const Tu=xu;function Iu(n){return n!==n}const Ou=Iu;function Ru(n,t,o){for(var i=o-1,c=n.length;++i<c;)if(n[i]===t)return i;return-1}const Du=Ru;function Nu(n,t,o){return t===t?Du(n,t,o):Tu(n,Ou,o)}const Lu=Nu;function Mu(n,t){var o=n==null?0:n.length;return!!o&&Lu(n,t,0)>-1}const Pu=Mu;function Uu(n,t,o){for(var i=-1,c=n==null?0:n.length;++i<c;)if(o(t,n[i]))return!0;return!1}const ju=Uu;function $u(n){return function(t){return n(t)}}const ur=$u;function Ju(n,t){return n.has(t)}const Eo=Ju;var qu=Math.min;function zu(n,t,o){for(var i=o?ju:Pu,c=n[0].length,a=n.length,s=a,l=Array(a),A=1/0,f=[];s--;){var u=n[s];s&&t&&(u=ao(u,ur(t))),A=qu(u.length,A),l[s]=!o&&(t||c>=120&&u.length>=120)?new fr(s&&u):void 0}u=n[0];var d=-1,g=l[0];e:for(;++d<c&&f.length<A;){var b=u[d],F=t?t(b):b;if(b=o||b!==0?b:0,!(g?Eo(g,F):i(f,F,o))){for(s=a;--s;){var x=l[s];if(!(x?Eo(x,F):i(n[s],F,o)))continue e}g&&g.push(F),f.push(b)}}return f}const Hu=zu;function Gu(n,t){return Ar(lr(n,t,uo),n+"")}const Wu=Gu;function Ku(n){return n!=null&&fo(n.length)&&!Yi(n)}const Er=Ku;function Vu(n){return $e(n)&&Er(n)}const Yu=Vu;function Xu(n){return Yu(n)?n:[]}const Qu=Xu;var Zu=Wu(function(n){var t=ao(n,Qu);return t.length&&t[0]===n[0]?Hu(t):[]});const eE=Zu;function nE(){this.__data__=new ct,this.size=0}const tE=nE;function oE(n){var t=this.__data__,o=t.delete(n);return this.size=t.size,o}const iE=oE;function rE(n){return this.__data__.get(n)}const cE=rE;function aE(n){return this.__data__.has(n)}const sE=aE;var lE=200;function AE(n,t){var o=this.__data__;if(o instanceof ct){var i=o.__data__;if(!Sn||i.length<lE-1)return i.push([n,t]),this.size=++o.size,this;o=this.__data__=new st(i)}return o.set(n,t),this.size=o.size,this}const fE=AE;function rn(n){var t=this.__data__=new ct(n);this.size=t.size}rn.prototype.clear=tE,rn.prototype.delete=iE,rn.prototype.get=cE,rn.prototype.has=sE,rn.prototype.set=fE;const ut=rn;function uE(n,t){for(var o=-1,i=n==null?0:n.length;++o<i;)if(t(n[o],o,n))return!0;return!1}const EE=uE;var dE=1,gE=2;function pE(n,t,o,i,c,a){var s=o&dE,l=n.length,A=t.length;if(l!=A&&!(s&&A>l))return!1;var f=a.get(n),u=a.get(t);if(f&&u)return f==t&&u==n;var d=-1,g=!0,b=o&gE?new fr:void 0;for(a.set(n,t),a.set(t,n);++d<l;){var F=n[d],x=t[d];if(i)var w=s?i(x,F,d,t,n,a):i(F,x,d,n,t,a);if(w!==void 0){if(w)continue;g=!1;break}if(b){if(!EE(t,function(N,Q){if(!Eo(b,Q)&&(F===N||c(F,N,o,i,a)))return b.push(Q)})){g=!1;break}}else if(!(F===x||c(F,x,o,i,a))){g=!1;break}}return a.delete(n),a.delete(t),g}const dr=pE;var bE=ye.Uint8Array;const gr=bE;function mE(n){var t=-1,o=Array(n.size);return n.forEach(function(i,c){o[++t]=[c,i]}),o}const hE=mE;function _E(n){var t=-1,o=Array(n.size);return n.forEach(function(i){o[++t]=i}),o}const BE=_E;var yE=1,CE=2,FE="[object Boolean]",vE="[object Date]",kE="[object Error]",wE="[object Map]",SE="[object Number]",xE="[object RegExp]",TE="[object Set]",IE="[object String]",OE="[object Symbol]",RE="[object ArrayBuffer]",DE="[object DataView]",pr=be?be.prototype:void 0,go=pr?pr.valueOf:void 0;function NE(n,t,o,i,c,a,s){switch(o){case DE:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case RE:return!(n.byteLength!=t.byteLength||!a(new gr(n),new gr(t)));case FE:case vE:case SE:return io(+n,+t);case kE:return n.name==t.name&&n.message==t.message;case xE:case IE:return n==t+"";case wE:var l=hE;case TE:var A=i&yE;if(l||(l=BE),n.size!=t.size&&!A)return!1;var f=s.get(n);if(f)return f==t;i|=CE,s.set(n,t);var u=dr(l(n),l(t),i,c,a,s);return s.delete(n),u;case OE:if(go)return go.call(n)==go.call(t)}return!1}const LE=NE;function ME(n,t,o){var i=t(n);return pe(n)?i:rr(i,o(n))}const PE=ME;function UE(n,t){for(var o=-1,i=n==null?0:n.length,c=0,a=[];++o<i;){var s=n[o];t(s,o,n)&&(a[c++]=s)}return a}const jE=UE;function $E(){return[]}const JE=$E;var qE=Object.prototype,zE=qE.propertyIsEnumerable,br=Object.getOwnPropertySymbols,HE=br?function(n){return n==null?[]:(n=Object(n),jE(br(n),function(t){return zE.call(n,t)}))}:JE;const GE=HE;function WE(n,t){for(var o=-1,i=Array(n);++o<n;)i[o]=t(o);return i}const KE=WE;function VE(){return!1}const YE=VE;var mr=typeof Ie=="object"&&Ie&&!Ie.nodeType&&Ie,hr=mr&&typeof Oe=="object"&&Oe&&!Oe.nodeType&&Oe,XE=hr&&hr.exports===mr,_r=XE?ye.Buffer:void 0,QE=_r?_r.isBuffer:void 0,ZE=QE||YE;const po=ZE;var ed="[object Arguments]",nd="[object Array]",td="[object Boolean]",od="[object Date]",id="[object Error]",rd="[object Function]",cd="[object Map]",ad="[object Number]",sd="[object Object]",ld="[object RegExp]",Ad="[object Set]",fd="[object String]",ud="[object WeakMap]",Ed="[object ArrayBuffer]",dd="[object DataView]",gd="[object Float32Array]",pd="[object Float64Array]",bd="[object Int8Array]",md="[object Int16Array]",hd="[object Int32Array]",_d="[object Uint8Array]",Bd="[object Uint8ClampedArray]",yd="[object Uint16Array]",Cd="[object Uint32Array]",J={};J[gd]=J[pd]=J[bd]=J[md]=J[hd]=J[_d]=J[Bd]=J[yd]=J[Cd]=!0,J[ed]=J[nd]=J[Ed]=J[td]=J[dd]=J[od]=J[id]=J[rd]=J[cd]=J[ad]=J[sd]=J[ld]=J[Ad]=J[fd]=J[ud]=!1;function Fd(n){return $e(n)&&fo(n.length)&&!!J[en(n)]}const vd=Fd;var Br=typeof Ie=="object"&&Ie&&!Ie.nodeType&&Ie,Tn=Br&&typeof Oe=="object"&&Oe&&!Oe.nodeType&&Oe,kd=Tn&&Tn.exports===Br,bo=kd&&Wi.process,wd=function(){try{var n=Tn&&Tn.require&&Tn.require("util").types;return n||bo&&bo.binding&&bo.binding("util")}catch{}}();const yr=wd;var Cr=yr&&yr.isTypedArray,Sd=Cr?ur(Cr):vd;const Fr=Sd;var xd=Object.prototype,Td=xd.hasOwnProperty;function Id(n,t){var o=pe(n),i=!o&&Ao(n),c=!o&&!i&&po(n),a=!o&&!i&&!c&&Fr(n),s=o||i||c||a,l=s?KE(n.length,String):[],A=l.length;for(var f in n)(t||Td.call(n,f))&&!(s&&(f=="length"||c&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||lo(f,A)))&&l.push(f);return l}const Od=Id;var Rd=Object.prototype;function Dd(n){var t=n&&n.constructor,o=typeof t=="function"&&t.prototype||Rd;return n===o}const Nd=Dd;function Ld(n,t){return function(o){return n(t(o))}}var Md=Ld(Object.keys,Object);const Pd=Md;var Ud=Object.prototype,jd=Ud.hasOwnProperty;function $d(n){if(!Nd(n))return Pd(n);var t=[];for(var o in Object(n))jd.call(n,o)&&o!="constructor"&&t.push(o);return t}const Jd=$d;function qd(n){return Er(n)?Od(n):Jd(n)}const vr=qd;function zd(n){return PE(n,vr,GE)}const kr=zd;var Hd=1,Gd=Object.prototype,Wd=Gd.hasOwnProperty;function Kd(n,t,o,i,c,a){var s=o&Hd,l=kr(n),A=l.length,f=kr(t),u=f.length;if(A!=u&&!s)return!1;for(var d=A;d--;){var g=l[d];if(!(s?g in t:Wd.call(t,g)))return!1}var b=a.get(n),F=a.get(t);if(b&&F)return b==t&&F==n;var x=!0;a.set(n,t),a.set(t,n);for(var w=s;++d<A;){g=l[d];var N=n[g],Q=t[g];if(i)var _e=s?i(Q,N,g,t,n,a):i(N,Q,g,n,t,a);if(!(_e===void 0?N===Q||c(N,Q,o,i,a):_e)){x=!1;break}w||(w=g=="constructor")}if(x&&!w){var Te=n.constructor,de=t.constructor;Te!=de&&"constructor"in n&&"constructor"in t&&!(typeof Te=="function"&&Te instanceof Te&&typeof de=="function"&&de instanceof de)&&(x=!1)}return a.delete(n),a.delete(t),x}const Vd=Kd;var Yd=ze(ye,"DataView");const mo=Yd;var Xd=ze(ye,"Promise");const ho=Xd;var Qd=ze(ye,"Set");const _o=Qd;var Zd=ze(ye,"WeakMap");const Bo=Zd;var wr="[object Map]",eg="[object Object]",Sr="[object Promise]",xr="[object Set]",Tr="[object WeakMap]",Ir="[object DataView]",ng=qe(mo),tg=qe(Sn),og=qe(ho),ig=qe(_o),rg=qe(Bo),He=en;(mo&&He(new mo(new ArrayBuffer(1)))!=Ir||Sn&&He(new Sn)!=wr||ho&&He(ho.resolve())!=Sr||_o&&He(new _o)!=xr||Bo&&He(new Bo)!=Tr)&&(He=function(n){var t=en(n),o=t==eg?n.constructor:void 0,i=o?qe(o):"";if(i)switch(i){case ng:return Ir;case tg:return wr;case og:return Sr;case ig:return xr;case rg:return Tr}return t});const Or=He;var cg=1,Rr="[object Arguments]",Dr="[object Array]",Et="[object Object]",ag=Object.prototype,Nr=ag.hasOwnProperty;function sg(n,t,o,i,c,a){var s=pe(n),l=pe(t),A=s?Dr:Or(n),f=l?Dr:Or(t);A=A==Rr?Et:A,f=f==Rr?Et:f;var u=A==Et,d=f==Et,g=A==f;if(g&&po(n)){if(!po(t))return!1;s=!0,u=!1}if(g&&!u)return a||(a=new ut),s||Fr(n)?dr(n,t,o,i,c,a):LE(n,t,A,o,i,c,a);if(!(o&cg)){var b=u&&Nr.call(n,"__wrapped__"),F=d&&Nr.call(t,"__wrapped__");if(b||F){var x=b?n.value():n,w=F?t.value():t;return a||(a=new ut),c(x,w,o,i,a)}}return g?(a||(a=new ut),Vd(n,t,o,i,c,a)):!1}const lg=sg;function Lr(n,t,o,i,c){return n===t?!0:n==null||t==null||!$e(n)&&!$e(t)?n!==n&&t!==t:lg(n,t,o,i,Lr,c)}const yo=Lr;var Ag=1,fg=2;function ug(n,t,o,i){var c=o.length,a=c,s=!i;if(n==null)return!a;for(n=Object(n);c--;){var l=o[c];if(s&&l[2]?l[1]!==n[l[0]]:!(l[0]in n))return!1}for(;++c<a;){l=o[c];var A=l[0],f=n[A],u=l[1];if(s&&l[2]){if(f===void 0&&!(A in n))return!1}else{var d=new ut;if(i)var g=i(f,u,A,n,t,d);if(!(g===void 0?yo(u,f,Ag|fg,i,d):g))return!1}}return!0}const Eg=ug;function dg(n){return n===n&&!Je(n)}const Mr=dg;function gg(n){for(var t=vr(n),o=t.length;o--;){var i=t[o],c=n[i];t[o]=[i,c,Mr(c)]}return t}const pg=gg;function bg(n,t){return function(o){return o==null?!1:o[n]===t&&(t!==void 0||n in Object(o))}}const Pr=bg;function mg(n){var t=pg(n);return t.length==1&&t[0][2]?Pr(t[0][0],t[0][1]):function(o){return o===n||Eg(o,n,t)}}const hg=mg;function _g(n,t,o){var i=n==null?void 0:so(n,t);return i===void 0?o:i}const Bg=_g;var yg=1,Cg=2;function Fg(n,t){return to(n)&&Mr(t)?Pr(xn(n),t):function(o){var i=Bg(o,n);return i===void 0&&i===t?ir(o,n):yo(t,i,yg|Cg)}}const vg=Fg;function kg(n){return function(t){return t==null?void 0:t[n]}}const wg=kg;function Sg(n){return function(t){return so(t,n)}}const xg=Sg;function Tg(n){return to(n)?wg(xn(n)):xg(n)}const Ig=Tg;function Og(n){return typeof n=="function"?n:n==null?uo:typeof n=="object"?pe(n)?vg(n[0],n[1]):hg(n):Ig(n)}const Rg=Og;function Dg(n,t){for(var o,i=-1,c=n.length;++i<c;){var a=t(n[i]);a!==void 0&&(o=o===void 0?a:o+a)}return o}const Ng=Dg;function Lg(n,t){return n&&n.length?Ng(n,Rg(t,2)):0}const Ur=Lg;function lC(n,t){return n.teams[t]}const Mg=n=>n.length===2,jr=n=>{const t=n.split("@");return Mg(t)?t:void 0},Co=ie(n=>{var t;return(t=n==null?void 0:n.teams)!=null?t:{}},n=>{const t=Object.values(n).find(o=>o&&o.version);return t?t.version:void 0}),AC=ie([Co],n=>{if(!n)return;const t=jr(n);return t?t[0]:void 0}),fC=ie([Co],n=>{if(!n)return;const t=jr(n);if(!t)return;const o=Number.parseInt(t[1],10);return Number.isNaN(o)?void 0:o}),uC=ie(n=>{var t;return(t=n==null?void 0:n.teams)!=null?t:{}},n=>{const t=Object.values(n).find(o=>o&&o.frontendBuildType);return t?t.frontendBuildType:void 0}),Pg=ie(n=>n,n=>Object.entries(n).reduce((t,[o,i])=>(t[o]={...i.unreads,teamId:o},t),{})),Fo="*",EC=ie(n=>{var t;return(t=n==null?void 0:n.teams)!=null?t:{}},n=>Object.values(n).map(t=>{var o;return((o=t==null?void 0:t.connectivityPrefs)==null?void 0:o.ntlmCredentialDomains)||Fo}).find(t=>t!==Fo)||Fo),dC=ie([n=>{var t,o;return(o=(t=n.webapp)==null?void 0:t.teams)!=null?o:{}},n=>n.workspaces],(n,t)=>Cu(n,eE(...[n,t].map(Object.keys)))),Ug=ie([n=>n.webapp?n.webapp.teams:{},n=>n.workspacesMeta.selectedWorkspaceId],(n,t)=>t?n==null?void 0:n[t]:null),gC=ie([Ug,n=>n.settings.locale],(n,t)=>n?n.locale:t),pC=ie([Pg],n=>{const t=Object.values(n),o=Object.keys(n).some(i=>{const{showBullet:c,unreads:a}=n[i];return c&&a>0});return{unreads:Ur(t,({unreads:i})=>i||0),unreadHighlights:Ur(t,({unreadHighlights:i})=>i||0),showBullet:o}}),bC="slack:",$r={domain:"slack.com",matchSubDomains:!0},Jr={domain:"slack.mil",matchSubDomains:!0},qr={domain:"slack-mil-dev.com",matchSubDomains:!0},zr={domain:"slack-gov.com",matchSubDomains:!0},Hr={domain:"slack-gov-dev.com",matchSubDomains:!0},mC=[{domain:"slack.eu",matchSubDomains:!0},$r],hC=[zr,Hr],_C=[Jr,qr],BC=[{domain:"files.slack.eu",matchSubDomains:!1},{domain:"files.slack.com",matchSubDomains:!1}],yC=[{domain:"files.slack-gov.com",matchSubDomains:!1},{domain:"files.slack-gov-dev.com",matchSubDomains:!1}],CC=[{domain:"files.slack.mil",matchSubDomains:!1},{domain:"files.slack-mil-dev.com",matchSubDomains:!1}],FC=[{domain:"slack.eu",matchSubDomains:!0},{domain:"slack.com",matchSubDomains:!0},{domain:"slack-files.eu",matchSubDomains:!0},{domain:"slack-files.com",matchSubDomains:!0}],vC=[{domain:"slack-gov.com",matchSubDomains:!0},{domain:"slack-gov-dev.com",matchSubDomains:!0},{domain:"slack-files-gov.com",matchSubDomains:!0},{domain:"slack-files-gov-dev.com",matchSubDomains:!0}],kC=[{domain:"slack.mil",matchSubDomains:!0},{domain:"slack-mil-dev.com",matchSubDomains:!0},{domain:"slack-files.mil",matchSubDomains:!0},{domain:"slack-files-mil-dev.com",matchSubDomains:!0}],wC=[{domain:"slack-edge.com",matchSubDomains:!0},{domain:"slack-imgs.com",matchSubDomains:!0},{domain:"slack-edge.mil",matchSubDomains:!0},{domain:"slack-imgs.mil",matchSubDomains:!0},{domain:"slack-imgs-mil-dev.com",matchSubDomains:!0},{domain:"slack-edge-mil-dev.com",matchSubDomains:!0},{domain:"slack-imgs-gov.com",matchSubDomains:!0},{domain:"slack-imgs-gov-dev.com",matchSubDomains:!0},{domain:"slack-edge-gov.com",matchSubDomains:!0}],SC=[{domain:"slackb.com",matchSubDomains:!0},{domain:"dev.slackb.com",matchSubDomains:!0},{domain:"slackb-gov.com",matchSubDomains:!0},{domain:"slackb-gov-dev.com",matchSubDomains:!0},{domain:"slackb.mil",matchSubDomains:!0},{domain:"slackb-mil-dev.com",matchSubDomains:!0}],xC="BlockCommercialCookiesGovOrigin",TC=/magic-login/,IC="chrome-error://chromewebdata",OC="app://error",RC="https://app.slack.com/ssb/first",DC=n=>n&&n.protocol==="about:"&&n.pathname==="blank"&&n.hash!=="#blocked",NC=n=>n&&n.protocol==="about:"&&n.pathname==="blank"&&n.hash==="#blocked",LC="https://spellcheck.slack-edge.com/dictionaries_v2/",MC="https://spellcheck.slack-edge-gov.com/dictionaries_v2/",PC="https://spellcheck.slack-edge.mil/dictionaries_v2/",UC="https://fd30fe469dbf4aec9db40548e5acf91e@slack.com/apps/sentryproxy/5277886",jC="https://fd30fe469dbf4aec9db40548e5acf91e@slack-gov.com/apps/sentryproxy/5277886",$C=null,JC="/ssb/first",qC=null,zC=/devEnv=(dev\d*|staging|qa\d*)/,HC=null,dt=["slack.com","slack-msgs.com","slackb.com"],GC=[...dt,"slack-gov.com"],WC=[...dt,"slack-gov-dev.com"],KC=[...dt,"slack.mil","slackb.mil"],VC=[...dt,"slack-mil-dev.com","slackb-mil-dev.com"],YC=null,vo=/[()<>@,;:\\<>\/\[\]?={}\t\n\r]/g;function XC(n){var a;let{os:t,release:o,desktopEnvironment:i}=(a=n.linux)!=null?a:{};if(!t)return"";t=t.replace(vo,""),o=(o||"unversioned").replace(vo,"");let c=`; ${t} ${o}`;return i&&(i=i.replace(vo,""),c+=`; ${i}`),c}function QC(n){var t;return!!((t=n==null?void 0:n.win32)!=null&&t.isWin10)}function Gr(n,t){return!!(n&&n.platformVersion&&n.platformVersion.major>=10&&n.platformVersion.build>=t)}function jg(n){return Gr(n,22e3)}function ZC(n,t){return jg(n)&&Gr(n,t)}function eF(n){return!1}function nF(n,t="."){const{major:o,minor:i,build:c}=n&&n.platformVersion||{major:0,minor:0,build:0};return[o,i,c].join(t)}function tF(n){return n&&n.darwin&&n.darwin.macOSVersion||""}function Wr(n){return[ge.RESTRICTED,ge.MILITARY].includes(n)}const oF=ie([n=>n.environment],n=>{const{clientEnvironment:t,bootClient:o}=n;return Wr(t)&&!!o});var $g=(n=>(n.QUIT_APP="QUIT_APP",n.RESET_WINDOW="RESET_WINDOW",n.REVEAL_LOGS="REVEAL_LOGS",n.CLEAR_CACHE_AND_RESTART="CLEAR_CACHE_AND_RESTART",n))($g||{});const Jg={darwin:"mac",linux:"linux",win32:"windows"},ko=co((n,t)=>{let{clientEnvironment:o}=n;const i=n.devEnv?Kg(n.devEnv):void 0;switch(Wr(o)&&(t==="commercial"?o=ge.NORMAL:t==="gov"&&(o=ge.RESTRICTED)),o){case ge.NORMAL:return`${i?`${i}.`:""}${$r.domain}`;case ge.RESTRICTED:return i?`${i!=="dev"?`${i}.`:""}${Hr.domain}`:zr.domain;case ge.MILITARY:return i?`${i!=="dev"?`${i}.`:""}${qr.domain}`:Jr.domain;default:throw new Error("Unexpected mode specified")}}),Kr=co(n=>`https://${ko(n)}`);function iF({releaseChannel:n,clientEnvironment:t,locale:o}){let i=`https://www.${ko({clientEnvironment:t})}`;o!==DEFAULT_LOCALE&&(i+=`/intl/${o.toLowerCase()}`),i+="/release-notes";const c=Jg.linux||"windows";return i+=`/${c}`,i+=n===ReleaseChannel.BETA?n:"",i}function rF(n,t){let o=Kr({clientEnvironment:n});return t!==DEFAULT_LOCALE&&(o+=`/intl/${t.toLowerCase()}`),o+="/help",o}function cF(n,t){var a;const o=(a=getSelectedWorkspace(n))==null?void 0:a.url,i=o!=null?o:Kr({...n.environment}),c=new URL(i);return c.pathname="/help/requests/new",`${c}${t?"?crash_report=1":""}`}function aF(n){return`${Yr(n)}/api/`}function sF(n,t){return`${Vr(n,t)}/api/`}function Vr(n,t){return Yr(ko(n,t))}function Yr(n){return`https://app.${n}`}function qg(n,t){return n.protocol==="https:"&&So(n,t)&&n.hostname.startsWith("app.")}function zg(n){return fe(n,SLACK_MIL_DOMAINS)&&!fe(n,SLACK_URL_MIL_BLOCKED_DOMAINS)}function Xr(n){return fe(n,SLACK_GOV_DOMAINS)&&!fe(n,SLACK_URL_GOV_BLOCKED_DOMAINS)}function wo(n){return fe(n,SLACK_COMMERICAL_DOMAINS)&&!fe(n,SLACK_URL_COMMERICAL_BLOCKED_DOMAINS)}function So(n,t){if(!n)return!1;switch(t){case ClientEnvironment.NORMAL:return wo(n);case ClientEnvironment.RESTRICTED:return wo(n)||Xr(n);case ClientEnvironment.MILITARY:return wo(n)||Xr(n)||zg(n);default:return logger.warn("isSlackURL: Invalid client environment",t),!1}}function lF(n){return n?fe(n,SLACKB_DOMAINS):!1}function Qr(n,t){if(So(n,t)){for(const o of[...SLACK_COMMERICAL_DOMAINS,...SLACK_GOV_DOMAINS,...SLACK_MIL_DOMAINS])if(o.matchSubDomains&&n.host.endsWith(`.${o.domain}`))return n.host.split(`.${o.domain}`).shift()}}function AF(n){return findMap(Object.values(ClientEnvironment).filter(xo),t=>Qr(n,t))}function fe(n,...t){for(const o of t)for(const i of o)if(n.host===i.domain||i.matchSubDomains&&n.host.endsWith(`.${i.domain}`))return!0;return!1}function Hg(n){return`.${n.domain}`}function fF(n,t){if(n.domain===void 0)return!1;for(const o of t)if(n.domain.endsWith(Hg(o)))return!0;return!1}function Gg(n){try{return new URL(n)}catch{return null}}function uF(n,t){if(!n)return!1;switch(t){case ClientEnvironment.NORMAL:return fe(n,SLACK_COMMERCIAL_DOWNLOAD_DOMAINS);case ClientEnvironment.RESTRICTED:return fe(n,SLACK_COMMERCIAL_DOWNLOAD_DOMAINS,SLACK_GOV_DOWNLOAD_DOMAINS);case ClientEnvironment.MILITARY:return fe(n,SLACK_COMMERCIAL_DOWNLOAD_DOMAINS,SLACK_GOV_DOWNLOAD_DOMAINS,SLACK_MIL_DOWNLOAD_DOMAINS);default:return!1}}function xo(n){return!isString(n)}function Wg(n){return Object.values(ClientEnvironment).filter(xo).some(t=>So(n,t))}function EF(n){var A;const t=typeof n=="string"?new URL(n):null,o=t?Object.fromEntries(t.searchParams.entries()):null;let i=(A=o==null?void 0:o.update)!=null?A:"{}";i=i.replace(/\s*:\s*/g,":"),i&&!(i.startsWith("{")&&i.endsWith("}"))&&(i=`{${i}}`),i=replaceSmartQuotes(i),i=i.replace(/(?<=\{)(['"])?([a-zA-Z0-9_-]{1,200})(['"])?:/g,'"$2": ');const c=i.match(/[a-zA-Z_-]*?: (['"])?([a-zA-Z_-]*)(['"])?/),a=c&&c[2]&&(c[2]==="true"||c[2]==="false"),s=c&&c[2]&&/[\w]|[\w-]*/.test(c[2])&&!a,l=c&&c[1]==='"'&&c[3]==='"';return s&&!l&&(i=(i||"{}").replace(/([a-zA-Z_-]*?): (['"])?([a-zA-Z0-9_-]{1,200})(['"])?(?=.*\})/g,'$1: "$3"')),i}function dF(n){const t=typeof n=="string"?new URL(n):null,o=t?Object.fromEntries(t.searchParams.entries()):null;if((t==null?void 0:t.host)==="app"&&(o!=null&&o.action))switch(o.action.toLowerCase()){case"quit":return"QUIT_APP";case"reset-window":return"RESET_WINDOW";case"reveal-logs":return"REVEAL_LOGS";case"clear-cache-and-restart":return"CLEAR_CACHE_AND_RESTART";default:return null}else return null}function Kg(n){const t=n.match(/([A-Za-z0-9])*/i);if(t&&n===t[0])return n}function gF(n,{failOnRedirParam:t=!1}={}){try{const o=new URL(n),{protocol:i,searchParams:c}=o;return fe(o,SLACK_COMMERICAL_DOMAINS,SLACK_GOV_DOMAINS,SLACK_MIL_DOMAINS)?i!=="https:"?(logger.warn(`sanitizeTeamURL: ${n} did not meet protocol requirements`),null):c.has("redir")&&(logger.warn(`sanitizeTeamURL: ${n} contained redir parameter, which will be deleted`),c.delete("redir"),t)?null:o.toString():(logger.warn(`sanitizeTeamURL: ${n} did not meet host requirements`),null)}catch(o){return logger.error("sanitizeTeamURL: could not validate url",{input:n,error:o}),null}}function Vg(n="",t){const o=Gg(n);if(!o)return o;if(qg(o,t))return o.toString();if(Wg(o)){const i=Qr(o,t),c=i?o.host.split(i).join(REDACTED_STRING):o.host;return o.toString().split(o.host).join(c)}return n}function pF(n){return Object.values(ClientEnvironment).filter(xo).reduce((t,o)=>Vg(t!=null?t:void 0,o),n)}function Yg(){}const Zr=Yg;var Ce,U,To,ec,cn=0,nc=[],gt=[],tc=p.options.__b,oc=p.options.__r,ic=p.options.diffed,rc=p.options.__c,cc=p.options.unmount;function Ge(n,t){p.options.__h&&p.options.__h(U,n,cn||t),cn=0;var o=U.__H||(U.__H={__:[],__h:[]});return n>=o.__.length&&o.__.push({__V:gt}),o.__[n]}function pt(n){return cn=1,Io(lc,n)}function Io(n,t,o){var i=Ge(Ce++,2);if(i.t=n,!i.__c&&(i.__=[o?o(t):lc(void 0,t),function(l){var A=i.__N?i.__N[0]:i.__[0],f=i.t(A,l);A!==f&&(i.__N=[f,i.__[1]],i.__c.setState({}))}],i.__c=U,!U.u)){var c=function(l,A,f){if(!i.__c.__H)return!0;var u=i.__c.__H.__.filter(function(g){return g.__c});if(u.every(function(g){return!g.__N}))return!a||a.call(this,l,A,f);var d=!1;return u.forEach(function(g){if(g.__N){var b=g.__[0];g.__=g.__N,g.__N=void 0,b!==g.__[0]&&(d=!0)}}),!(!d&&i.__c.props===l)&&(!a||a.call(this,l,A,f))};U.u=!0;var a=U.shouldComponentUpdate,s=U.componentWillUpdate;U.componentWillUpdate=function(l,A,f){if(this.__e){var u=a;a=void 0,c(l,A,f),a=u}s&&s.call(this,l,A,f)},U.shouldComponentUpdate=c}return i.__N||i.__}function bt(n,t){var o=Ge(Ce++,3);!p.options.__s&&Do(o.__H,t)&&(o.__=n,o.i=t,U.__H.__h.push(o))}function In(n,t){var o=Ge(Ce++,4);!p.options.__s&&Do(o.__H,t)&&(o.__=n,o.i=t,U.__h.push(o))}function an(n){return cn=5,sn(function(){return{current:n}},[])}function Xg(n,t,o){cn=6,In(function(){return typeof n=="function"?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},o==null?o:o.concat(n))}function sn(n,t){var o=Ge(Ce++,7);return Do(o.__H,t)?(o.__V=n(),o.i=t,o.__h=n,o.__V):o.__}function Qg(n,t){return cn=8,sn(function(){return n},t)}function Oo(n){var t=U.context[n.__c],o=Ge(Ce++,9);return o.c=n,t?(o.__==null&&(o.__=!0,t.sub(U)),t.props.value):n.__}function ac(n,t){p.options.useDebugValue&&p.options.useDebugValue(t?t(n):n)}function bF(n){var t=Ge(Ce++,10),o=pt();return t.__=n,U.componentDidCatch||(U.componentDidCatch=function(i,c){t.__&&t.__(i,c),o[1](i)}),[o[0],function(){o[1](void 0)}]}function Zg(){var n=Ge(Ce++,11);if(!n.__){for(var t=U.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var o=t.__m||(t.__m=[0,0]);n.__="P"+o[0]+"-"+o[1]++}return n.__}function ep(){for(var n;n=nc.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(mt),n.__H.__h.forEach(Ro),n.__H.__h=[]}catch(t){n.__H.__h=[],p.options.__e(t,n.__v)}}p.options.__b=function(n){U=null,tc&&tc(n)},p.options.__r=function(n){oc&&oc(n),Ce=0;var t=(U=n.__c).__H;t&&(To===U?(t.__h=[],U.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=gt,o.__N=o.i=void 0})):(t.__h.forEach(mt),t.__h.forEach(Ro),t.__h=[],Ce=0)),To=U},p.options.diffed=function(n){ic&&ic(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(nc.push(t)!==1&&ec===p.options.requestAnimationFrame||((ec=p.options.requestAnimationFrame)||np)(ep)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==gt&&(o.__=o.__V),o.i=void 0,o.__V=gt})),To=U=null},p.options.__c=function(n,t){t.some(function(o){try{o.__h.forEach(mt),o.__h=o.__h.filter(function(i){return!i.__||Ro(i)})}catch(i){t.some(function(c){c.__h&&(c.__h=[])}),t=[],p.options.__e(i,o.__v)}}),rc&&rc(n,t)},p.options.unmount=function(n){cc&&cc(n);var t,o=n.__c;o&&o.__H&&(o.__H.__.forEach(function(i){try{mt(i)}catch(c){t=c}}),o.__H=void 0,t&&p.options.__e(t,o.__v))};var sc=typeof requestAnimationFrame=="function";function np(n){var t,o=function(){clearTimeout(i),sc&&cancelAnimationFrame(t),setTimeout(n)},i=setTimeout(o,100);sc&&(t=requestAnimationFrame(o))}function mt(n){var t=U,o=n.__c;typeof o=="function"&&(n.__c=void 0,o()),U=t}function Ro(n){var t=U;n.__c=n.__(),U=t}function Do(n,t){return!n||n.length!==t.length||t.some(function(o,i){return o!==n[i]})}function lc(n,t){return typeof t=="function"?t(n):t}const tp=T.p+"Hash@1xfe567312dbef084f073c.png",op=T.p+"Hash@2x4e633ab90387d1fb949e.png",ip=T.p+"Hash@3x7eaed0e0a8f28b67fc00.png";function Ac(n,t){for(var o in t)n[o]=t[o];return n}function No(n,t){for(var o in n)if(o!=="__source"&&!(o in t))return!0;for(var i in t)if(i!=="__source"&&n[i]!==t[i])return!0;return!1}function Lo(n){this.props=n}function rp(n,t){function o(c){var a=this.props.ref,s=a==c.ref;return!s&&a&&(a.call?a(null):a.current=null),t?!t(this.props,c)||!s:No(this.props,c)}function i(c){return this.shouldComponentUpdate=o,(0,p.createElement)(n,c)}return i.displayName="Memo("+(n.displayName||n.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(Lo.prototype=new p.Component).isPureReactComponent=!0,Lo.prototype.shouldComponentUpdate=function(n,t){return No(this.props,n)||No(this.state,t)};var fc=p.options.__b;p.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),fc&&fc(n)};var cp=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ap(n){function t(o){var i=Ac({},o);return delete i.ref,n(i,o.ref||null)}return t.$$typeof=cp,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var uc=function(n,t){return n==null?null:(0,p.toChildArray)((0,p.toChildArray)(n).map(t))},sp={map:uc,forEach:uc,count:function(n){return n?(0,p.toChildArray)(n).length:0},only:function(n){var t=(0,p.toChildArray)(n);if(t.length!==1)throw"Children.only";return t[0]},toArray:p.toChildArray},lp=p.options.__e;p.options.__e=function(n,t,o,i){if(n.then){for(var c,a=t;a=a.__;)if((c=a.__c)&&c.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),c.__c(n,t)}lp(n,t,o,i)};var Ec=p.options.unmount;function dc(n,t,o){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),n.__c.__H=null),(n=Ac({},n)).__c!=null&&(n.__c.__P===o&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(i){return dc(i,t,o)})),n}function gc(n,t,o){return n&&o&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(i){return gc(i,t,o)}),n.__c&&n.__c.__P===t&&(n.__e&&o.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=o)),n}function ht(){this.__u=0,this.t=null,this.__b=null}function pc(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function Ap(n){var t,o,i;function c(a){if(t||(t=n()).then(function(s){o=s.default||s},function(s){i=s}),i)throw i;if(!o)throw t;return(0,p.createElement)(o,a)}return c.displayName="Lazy",c.__f=!0,c}function On(){this.u=null,this.o=null}p.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),Ec&&Ec(n)},(ht.prototype=new p.Component).__c=function(n,t){var o=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(o);var c=pc(i.__v),a=!1,s=function(){a||(a=!0,o.__R=null,c?c(l):l())};o.__R=s;var l=function(){if(!--i.__u){if(i.state.__a){var A=i.state.__a;i.__v.__k[0]=gc(A,A.__c.__P,A.__c.__O)}var f;for(i.setState({__a:i.__b=null});f=i.t.pop();)f.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),n.then(s,s)},ht.prototype.componentWillUnmount=function(){this.t=[]},ht.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=dc(this.__b,o,i.__O=i.__P)}this.__b=null}var c=t.__a&&(0,p.createElement)(p.Fragment,null,n.fallback);return c&&(c.__u&=-33),[(0,p.createElement)(p.Fragment,null,t.__a?null:n.children),c]};var bc=function(n,t,o){if(++o[1]===o[0]&&n.o.delete(t),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(o=n.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;n.u=o=o[2]}};function fp(n){return this.getChildContext=function(){return n.context},n.children}function up(n){var t=this,o=n.i;t.componentWillUnmount=function(){(0,p.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==o&&t.componentWillUnmount(),t.l||(t.i=o,t.l={nodeType:1,parentNode:o,childNodes:[],appendChild:function(i){this.childNodes.push(i),t.i.appendChild(i)},insertBefore:function(i,c){this.childNodes.push(i),t.i.appendChild(i)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),t.i.removeChild(i)}}),(0,p.render)((0,p.createElement)(fp,{context:t.context},n.__v),t.l)}function Ep(n,t){var o=(0,p.createElement)(up,{__v:n,i:t});return o.containerInfo=t,o}(On.prototype=new p.Component).__a=function(n){var t=this,o=pc(t.__v),i=t.o.get(n);return i[0]++,function(c){var a=function(){t.props.revealOrder?(i.push(c),bc(t,n,i)):c()};o?o(a):a()}},On.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,p.toChildArray)(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&t.reverse();for(var o=t.length;o--;)this.o.set(t[o],this.u=[1,0,this.u]);return n.children},On.prototype.componentDidUpdate=On.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,o){bc(n,o,t)})};var mc=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,dp=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,gp=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,pp=/[A-Z0-9]/g,bp=typeof document!="undefined",mp=function(n){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};function hp(n,t,o){return t.__k==null&&(t.textContent=""),(0,p.render)(n,t),typeof o=="function"&&o(),n?n.__c:null}function _p(n,t,o){return(0,p.hydrate)(n,t),typeof o=="function"&&o(),n?n.__c:null}p.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(p.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var hc=p.options.event;function Bp(){}function yp(){return this.cancelBubble}function Cp(){return this.defaultPrevented}p.options.event=function(n){return hc&&(n=hc(n)),n.persist=Bp,n.isPropagationStopped=yp,n.isDefaultPrevented=Cp,n.nativeEvent=n};var Mo,Fp={enumerable:!1,configurable:!0,get:function(){return this.class}},_c=p.options.vnode;p.options.vnode=function(n){typeof n.type=="string"&&function(t){var o=t.props,i=t.type,c={};for(var a in o){var s=o[a];if(!(a==="value"&&"defaultValue"in o&&s==null||bp&&a==="children"&&i==="noscript"||a==="class"||a==="className")){var l=a.toLowerCase();a==="defaultValue"&&"value"in o&&o.value==null?a="value":a==="download"&&s===!0?s="":l==="ondoubleclick"?a="ondblclick":l!=="onchange"||i!=="input"&&i!=="textarea"||mp(o.type)?l==="onfocus"?a="onfocusin":l==="onblur"?a="onfocusout":gp.test(a)?a=l:i.indexOf("-")===-1&&dp.test(a)?a=a.replace(pp,"-$&").toLowerCase():s===null&&(s=void 0):l=a="oninput",l==="oninput"&&c[a=l]&&(a="oninputCapture"),c[a]=s}}i=="select"&&c.multiple&&Array.isArray(c.value)&&(c.value=(0,p.toChildArray)(o.children).forEach(function(A){A.props.selected=c.value.indexOf(A.props.value)!=-1})),i=="select"&&c.defaultValue!=null&&(c.value=(0,p.toChildArray)(o.children).forEach(function(A){A.props.selected=c.multiple?c.defaultValue.indexOf(A.props.value)!=-1:c.defaultValue==A.props.value})),o.class&&!o.className?(c.class=o.class,Object.defineProperty(c,"className",Fp)):(o.className&&!o.class||o.class&&o.className)&&(c.class=c.className=o.className),t.props=c}(n),n.$$typeof=mc,_c&&_c(n)};var Bc=p.options.__r;p.options.__r=function(n){Bc&&Bc(n),Mo=n.__c};var yc=p.options.diffed;p.options.diffed=function(n){yc&&yc(n);var t=n.props,o=n.__e;o!=null&&n.type==="textarea"&&"value"in t&&t.value!==o.value&&(o.value=t.value==null?"":t.value),Mo=null};var vp={ReactCurrentDispatcher:{current:{readContext:function(n){return Mo.__n[n.__c].props.value}}}},mF="17.0.2";function kp(n){return p.createElement.bind(null,n)}function _t(n){return!!n&&n.$$typeof===mc}function wp(n){return _t(n)&&n.type===p.Fragment}function Sp(n){return _t(n)?p.cloneElement.apply(null,arguments):n}function Cc(n){return!!n.__k&&((0,p.render)(null,n),!0)}function xp(n){return n&&(n.base||n.nodeType===1&&n)||null}var Fc=function(n,t){return n(t)},Tp=function(n,t){return n(t)},Ip=p.Fragment;function vc(n){n()}function Op(n){return n}function Rp(){return[!1,vc]}var Dp=In,Np=_t;function Lp(n,t){var o=t(),i=pt({h:{__:o,v:t}}),c=i[0].h,a=i[1];return In(function(){c.__=o,c.v=t,Po(c)&&a({h:c})},[n,o,t]),bt(function(){return Po(c)&&a({h:c}),n(function(){Po(c)&&a({h:c})})},[n]),o}function Po(n){var t,o,i=n.v,c=n.__;try{var a=i();return!((t=c)===(o=a)&&(t!==0||1/t==1/o)||t!=t&&o!=o)}catch{return!0}}var kc={useState:pt,useId:Zg,useReducer:Io,useEffect:bt,useLayoutEffect:In,useInsertionEffect:Dp,useTransition:Rp,useDeferredValue:Op,useSyncExternalStore:Lp,startTransition:vc,useRef:an,useImperativeHandle:Xg,useMemo:sn,useCallback:Qg,useContext:Oo,useDebugValue:ac,version:"17.0.2",Children:sp,render:hp,hydrate:_p,unmountComponentAtNode:Cc,createPortal:Ep,createElement:p.createElement,createContext:p.createContext,createFactory:kp,cloneElement:Sp,createRef:p.createRef,Fragment:p.Fragment,isValidElement:_t,isElement:Np,isFragment:wp,findDOMNode:xp,Component:p.Component,PureComponent:Lo,memo:rp,forwardRef:ap,flushSync:Tp,unstable_batchedUpdates:Fc,StrictMode:Ip,Suspense:ht,SuspenseList:On,lazy:Ap,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:vp},hF=T(8182),Bt=kc.createContext(null);const _F=null;function Mp(n){n()}var wc=Mp,Pp=function(t){return wc=t},Up=function(){return wc},Sc={notify:function(){}};function jp(){var n=Up(),t=null,o=null;return{clear:function(){t=null,o=null},notify:function(){n(function(){for(var c=t;c;)c.callback(),c=c.next})},get:function(){for(var c=[],a=t;a;)c.push(a),a=a.next;return c},subscribe:function(c){var a=!0,s=o={callback:c,next:null,prev:o};return s.prev?s.prev.next=s:t=s,function(){!a||t===null||(a=!1,s.next?s.next.prev=s.prev:o=s.prev,s.prev?s.prev.next=s.next:t=s.next)}}}}var xc=function(){function n(o,i){this.store=o,this.parentSub=i,this.unsubscribe=null,this.listeners=Sc,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=n.prototype;return t.addNestedSub=function(i){return this.trySubscribe(),this.listeners.subscribe(i)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return!!this.unsubscribe},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=jp())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=Sc)},n}(),Uo=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?In:bt;function $p(n){var t=n.store,o=n.context,i=n.children,c=sn(function(){var l=new xc(t);return l.onStateChange=l.notifyNestedSubs,{store:t,subscription:l}},[t]),a=sn(function(){return t.getState()},[t]);Uo(function(){var l=c.subscription;return l.trySubscribe(),a!==t.getState()&&l.notifyNestedSubs(),function(){l.tryUnsubscribe(),l.onStateChange=null}},[c,a]);var s=o||Bt;return kc.createElement(s.Provider,{value:c},i)}const Jp=$p;var BF=T(2676),yF=T(8063),qp=null,zp=null,CF=function(t){try{return JSON.stringify(t)}catch{return String(t)}};function Hp(n,t){var o=n[1];return[t.payload,o+1]}function Tc(n,t,o){useIsomorphicLayoutEffect(function(){return n.apply(void 0,t)},o)}function Gp(n,t,o,i,c,a,s){n.current=i,t.current=c,o.current=!1,a.current&&(a.current=null,s())}function Wp(n,t,o,i,c,a,s,l,A,f){if(n){var u=!1,d=null,g=function(){if(!u){var x=t.getState(),w,N;try{w=i(x,c.current)}catch(Q){N=Q,d=Q}N||(d=null),w===a.current?s.current||A():(a.current=w,l.current=w,s.current=!0,f({type:"STORE_UPDATED",payload:{error:N}}))}};o.onStateChange=g,o.trySubscribe(),g();var b=function(){if(u=!0,o.tryUnsubscribe(),o.onStateChange=null,d)throw d};return b}}var Kp=function(){return[null,0]};function FF(n,t){t===void 0&&(t={});var o=t,i=o.getDisplayName,c=i===void 0?function(Qe){return"ConnectAdvanced("+Qe+")"}:i,a=o.methodName,s=a===void 0?"connectAdvanced":a,l=o.renderCountProp,A=l===void 0?void 0:l,f=o.shouldHandleStateChanges,u=f===void 0?!0:f,d=o.storeKey,g=d===void 0?"store":d,b=o.withRef,F=b===void 0?!1:b,x=o.forwardRef,w=x===void 0?!1:x,N=o.context,Q=N===void 0?ReactReduxContext:N,_e=_objectWithoutPropertiesLoose(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(0)var Te;var de=Q;return function(ae){var Gn=ae.displayName||ae.name||"Component",Wn=c(Gn),Gt=_extends({},_e,{getDisplayName:c,methodName:s,renderCountProp:A,shouldHandleStateChanges:u,storeKey:g,displayName:Wn,wrappedComponentName:Gn,WrappedComponent:ae}),Wt=_e.pure;function ki(te){return n(te.dispatch,Gt)}var wi=Wt?useMemo:function(te){return te()};function Kn(te){var Vn=useMemo(function(){var Qn=te.reactReduxForwardedRef,Ri=_objectWithoutPropertiesLoose(te,["reactReduxForwardedRef"]);return[te.context,Qn,Ri]},[te]),Ze=Vn[0],Hs=Vn[1],Yn=Vn[2],Si=useMemo(function(){return Ze&&Ze.Consumer&&isContextConsumer(React.createElement(Ze.Consumer,null))?Ze:de},[Ze,de]),Pe=useContext(Si),Xn=!!te.store&&!!te.store.getState&&!!te.store.dispatch,h0=!!Pe&&!!Pe.store,Ue=Xn?te.store:Pe.store,xi=useMemo(function(){return ki(Ue)},[Ue]),Gs=useMemo(function(){if(!u)return zp;var Qn=new Subscription(Ue,Xn?null:Pe.subscription),Ri=Qn.notifyNestedSubs.bind(Qn);return[Qn,Ri]},[Ue,Xn,Pe]),Vt=Gs[0],Ws=Gs[1],Ks=useMemo(function(){return Xn?Pe:_extends({},Pe,{subscription:Vt})},[Xn,Pe,Vt]),Vs=useReducer(Hp,qp,Kp),Ny=Vs[0],Yt=Ny[0],Ly=Vs[1];if(Yt&&Yt.error)throw Yt.error;var Ys=useRef(),Ti=useRef(Yn),Xt=useRef(),Xs=useRef(!1),Ii=wi(function(){return Xt.current&&Yn===Ti.current?Xt.current:xi(Ue.getState(),Yn)},[Ue,Yt,Yn]);Tc(Gp,[Ti,Ys,Xs,Yn,Ii,Xt,Ws]),Tc(Wp,[u,Ue,Vt,xi,Ti,Ys,Xs,Xt,Ws,Ly],[Ue,Vt,xi]);var Oi=useMemo(function(){return React.createElement(ae,_extends({},Ii,{ref:Hs}))},[Hs,ae,Ii]),My=useMemo(function(){return u?React.createElement(Si.Provider,{value:Ks},Oi):Oi},[Si,Oi,Ks]);return My}var yn=Wt?React.memo(Kn):Kn;if(yn.WrappedComponent=ae,yn.displayName=Kn.displayName=Wn,w){var Kt=React.forwardRef(function(Vn,Ze){return React.createElement(yn,_extends({},Vn,{reactReduxForwardedRef:Ze}))});return Kt.displayName=Wn,Kt.WrappedComponent=ae,hoistStatics(Kt,ae)}return hoistStatics(yn,ae)}}function Vp(n,t){var o={},i=function(s){var l=n[s];typeof l=="function"&&(o[s]=function(){return t(l.apply(void 0,arguments))})};for(var c in n)i(c);return o}function jo(n){return function(o,i){var c=n(o,i);function a(){return c}return a.dependsOnOwnProps=!1,a}}function Ic(n){return n.dependsOnOwnProps!==null&&n.dependsOnOwnProps!==void 0?!!n.dependsOnOwnProps:n.length!==1}function Oc(n,t){return function(i,c){var a=c.displayName,s=function(A,f){return s.dependsOnOwnProps?s.mapToProps(A,f):s.mapToProps(A)};return s.dependsOnOwnProps=!0,s.mapToProps=function(A,f){s.mapToProps=n,s.dependsOnOwnProps=Ic(n);var u=s(A,f);return typeof u=="function"&&(s.mapToProps=u,s.dependsOnOwnProps=Ic(u),u=s(A,f)),u},s}}function Yp(n){return typeof n=="function"?Oc(n,"mapDispatchToProps"):void 0}function Xp(n){return n?void 0:jo(function(t){return{dispatch:t}})}function Qp(n){return n&&typeof n=="object"?jo(function(t){return Vp(n,t)}):void 0}const vF=[Yp,Xp,Qp];function Zp(n){return typeof n=="function"?Oc(n,"mapStateToProps"):void 0}function eb(n){return n?void 0:jo(function(){return{}})}const kF=[Zp,eb];function $o(){return $o=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},$o.apply(null,arguments)}function nb(n,t,o){return $o({},o,n,t)}function tb(n){return function(o,i){var c=i.displayName,a=i.pure,s=i.areMergedPropsEqual,l=!1,A;return function(u,d,g){var b=n(u,d,g);return l?(!a||!s(b,A))&&(A=b):(l=!0,A=b),A}}}function ob(n){return typeof n=="function"?tb(n):void 0}function ib(n){return n?void 0:function(){return nb}}const wF=[ob,ib];function Jo(n,t,o){for(var i=t.length-1;i>=0;i--){var c=t[i](n);if(c)return c}return function(a,s){throw new Error("Invalid value of type "+typeof n+" for "+o+" argument when connecting component "+s.wrappedComponentName+".")}}function rb(n,t){return n===t}function SF(n){var t=n===void 0?{}:n,o=t.connectHOC,i=o===void 0?connectAdvanced:o,c=t.mapStateToPropsFactories,a=c===void 0?defaultMapStateToPropsFactories:c,s=t.mapDispatchToPropsFactories,l=s===void 0?defaultMapDispatchToPropsFactories:s,A=t.mergePropsFactories,f=A===void 0?defaultMergePropsFactories:A,u=t.selectorFactory,d=u===void 0?defaultSelectorFactory:u;return function(b,F,x,w){w===void 0&&(w={});var N=w,Q=N.pure,_e=Q===void 0?!0:Q,Te=N.areStatesEqual,de=Te===void 0?rb:Te,Qe=N.areOwnPropsEqual,ae=Qe===void 0?shallowEqual:Qe,Gn=N.areStatePropsEqual,Wn=Gn===void 0?shallowEqual:Gn,Gt=N.areMergedPropsEqual,Wt=Gt===void 0?shallowEqual:Gt,ki=_objectWithoutPropertiesLoose(N,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),wi=Jo(b,a,"mapStateToProps"),Kn=Jo(F,l,"mapDispatchToProps"),yn=Jo(x,f,"mergeProps");return i(d,_extends({methodName:"connect",getDisplayName:function(te){return"Connect("+te+")"},shouldHandleStateChanges:!!b,initMapStateToProps:wi,initMapDispatchToProps:Kn,initMergeProps:yn,pure:_e,areStatesEqual:de,areOwnPropsEqual:ae,areStatePropsEqual:Wn,areMergedPropsEqual:Wt},ki))}}const xF=null;function cb(){var n=Oo(Bt);return n}function TF(n){n===void 0&&(n=ReactReduxContext);var t=n===ReactReduxContext?useDefaultReduxContext:function(){return useContext(n)};return function(){var i=t(),c=i.store;return c}}var IF=null;function OF(n){n===void 0&&(n=ReactReduxContext);var t=n===ReactReduxContext?useDefaultStore:createStoreHook(n);return function(){var i=t();return i.dispatch}}var RF=null,ab=function(t,o){return t===o};function sb(n,t,o,i){var c=Io(function(F){return F+1},0),a=c[1],s=sn(function(){return new xc(o,i)},[o,i]),l=an(),A=an(),f=an(),u=an(),d=o.getState(),g;try{if(n!==A.current||d!==f.current||l.current){var b=n(d);u.current===void 0||!t(b,u.current)?g=b:g=u.current}else g=u.current}catch(F){throw l.current&&(F.message+=`
The error may be correlated with this previous error:
`+l.current.stack+`

`),F}return Uo(function(){A.current=n,f.current=d,u.current=g,l.current=void 0}),Uo(function(){function F(){try{var x=o.getState(),w=A.current(x);if(t(w,u.current))return;u.current=w,f.current=x}catch(N){l.current=N}a()}return s.onStateChange=F,s.trySubscribe(),F(),function(){return s.tryUnsubscribe()}},[o,s]),g}function lb(n){n===void 0&&(n=Bt);var t=n===Bt?cb:function(){return Oo(n)};return function(i,c){c===void 0&&(c=ab);var a=t(),s=a.store,l=a.subscription,A=sb(i,c,s,l);return ac(A),A}}var Ab=lb();Pp(Fc);var fb=/\s/;function ub(n){for(var t=n.length;t--&&fb.test(n.charAt(t)););return t}const Eb=ub;var db=/^\s+/;function gb(n){return n&&n.slice(0,Eb(n)+1).replace(db,"")}const pb=gb;var Rc=NaN,bb=/^[-+]0x[0-9a-f]+$/i,mb=/^0b[01]+$/i,hb=/^0o[0-7]+$/i,_b=parseInt;function Bb(n){if(typeof n=="number")return n;if(it(n))return Rc;if(Je(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=Je(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=pb(n);var o=mb.test(n);return o||hb.test(n)?_b(n.slice(2),o?2:8):bb.test(n)?Rc:+n}const yb=Bb;var Dc=1/0,Cb=17976931348623157e292;function Fb(n){if(!n)return n===0?n:0;if(n=yb(n),n===Dc||n===-Dc){var t=n<0?-1:1;return t*Cb}return n===n?n:0}const vb=Fb;function kb(n){var t=vb(n),o=t%1;return t===t?o?t-o:t:0}const wb=kb;var Sb="Expected a function";function xb(n,t){var o;if(typeof t!="function")throw new TypeError(Sb);return n=wb(n),function(){return--n>0&&(o=t.apply(this,arguments)),n<=1&&(t=void 0),o}}const Tb=xb;function Ib(n){return Tb(2,n)}const Ob=Ib(()=>({...window.desktop.store,dispatch:Zr})),{render:Rb}=p,Db=async(n,t="div")=>{const o=Ob(),c=o.getState().settings.locale;c&&await window.desktop.intl.applyLocale(c);const a=document.createElement(t);document.body.appendChild(a),window.addEventListener("beforeunload",()=>Cc(a)),Rb(I(Jp,{store:o,children:I(n,{})}),a)},Nc={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},Lc=(n,t)=>(...o)=>{try{const i=o.map(c=>typeof c=="object"?JSON.stringify(c,null,2):c).join(" ");t?console[n](`[${t}]	${i}`):console[n](i)}catch{}},Nb=Object.entries(Nc).reduce((n,[t,o])=>(n[t]=Lc(o),n),{}),NF=(n,t)=>Object.entries(Nc).reduce((o,[i,c])=>(o[i]=Lc(c,n),o),{}),{notifyError:LF,setupErrorReporter:Lb}=(()=>{let n=null;return{setupErrorReporter:t=>n=t,notifyError:t=>{if(n){n(t);return}Nb.warn("notifyError: skipping error reporting, reporter is not initialized.",{error:t})}}})(),Mc=Object.prototype.toString;function Pc(n){switch(Mc.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return We(n,Error)}}function ln(n,t){return Mc.call(n)===`[object ${t}]`}function qo(n){return ln(n,"ErrorEvent")}function Uc(n){return ln(n,"DOMError")}function Mb(n){return ln(n,"DOMException")}function Fe(n){return ln(n,"String")}function zo(n){return typeof n=="object"&&n!==null&&"__sentry_template_string__"in n&&"__sentry_template_values__"in n}function Ho(n){return n===null||zo(n)||typeof n!="object"&&typeof n!="function"}function An(n){return ln(n,"Object")}function yt(n){return typeof Event!="undefined"&&We(n,Event)}function Pb(n){return typeof Element!="undefined"&&We(n,Element)}function Ub(n){return ln(n,"RegExp")}function Ct(n){return!!(n&&n.then&&typeof n.then=="function")}function jb(n){return An(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function $b(n){return typeof n=="number"&&n!==n}function We(n,t){try{return n instanceof t}catch{return!1}}function jc(n){return!!(typeof n=="object"&&n!==null&&(n.__isVue||n._isVue))}function Ft(n){return n&&n.Math==Math?n:void 0}const L=typeof globalThis=="object"&&Ft(globalThis)||typeof window=="object"&&Ft(window)||typeof self=="object"&&Ft(self)||typeof global=="object"&&Ft(global)||function(){return this}()||{};function Go(){return L}function $c(n,t,o){const i=o||L,c=i.__SENTRY__=i.__SENTRY__||{};return c[n]||(c[n]=t())}const fn=Go(),Jb=80;function Jc(n,t={}){if(!n)return"<unknown>";try{let o=n;const i=5,c=[];let a=0,s=0;const l=" > ",A=l.length;let f;const u=Array.isArray(t)?t:t.keyAttrs,d=!Array.isArray(t)&&t.maxStringLength||Jb;for(;o&&a++<i&&(f=qb(o,u),!(f==="html"||a>1&&s+c.length*A+f.length>=d));)c.push(f),s+=f.length,o=o.parentNode;return c.reverse().join(l)}catch{return"<unknown>"}}function qb(n,t){const o=n,i=[];let c,a,s,l,A;if(!o||!o.tagName)return"";if(fn.HTMLElement&&o instanceof HTMLElement&&o.dataset&&o.dataset.sentryComponent)return o.dataset.sentryComponent;i.push(o.tagName.toLowerCase());const f=t&&t.length?t.filter(d=>o.getAttribute(d)).map(d=>[d,o.getAttribute(d)]):null;if(f&&f.length)f.forEach(d=>{i.push(`[${d[0]}="${d[1]}"]`)});else if(o.id&&i.push(`#${o.id}`),c=o.className,c&&Fe(c))for(a=c.split(/\s+/),A=0;A<a.length;A++)i.push(`.${a[A]}`);const u=["aria-label","type","name","title","alt"];for(A=0;A<u.length;A++)s=u[A],l=o.getAttribute(s),l&&i.push(`[${s}="${l}"]`);return i.join("")}function zb(){try{return fn.document.location.href}catch{return""}}function MF(n){return fn.document&&fn.document.querySelector?fn.document.querySelector(n):null}function Hb(n){if(!fn.HTMLElement)return null;let t=n;const o=5;for(let i=0;i<o;i++){if(!t)return null;if(t instanceof HTMLElement&&t.dataset.sentryComponent)return t.dataset.sentryComponent;t=t.parentNode}return null}const Rn=typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__,Gb="Sentry Logger ",Wo=["debug","info","warn","error","log","assert","trace"],vt={};function kt(n){if(!("console"in L))return n();const t=L.console,o={},i=Object.keys(vt);i.forEach(c=>{const a=vt[c];o[c]=t[c],t[c]=a});try{return n()}finally{i.forEach(c=>{t[c]=o[c]})}}function Wb(){let n=!1;const t={enable:()=>{n=!0},disable:()=>{n=!1},isEnabled:()=>n};return Rn?Wo.forEach(o=>{t[o]=(...i)=>{n&&kt(()=>{L.console[o](`${Gb}[${o}]:`,...i)})}}):Wo.forEach(o=>{t[o]=()=>{}}),t}const S=Wb();function un(n,t=0){return typeof n!="string"||t===0||n.length<=t?n:`${n.slice(0,t)}...`}function PF(n,t){let o=n;const i=o.length;if(i<=150)return o;t>i&&(t=i);let c=Math.max(t-60,0);c<5&&(c=0);let a=Math.min(c+140,i);return a>i-5&&(a=i),a===i&&(c=Math.max(a-140,0)),o=o.slice(c,a),c>0&&(o=`'{snip} ${o}`),a<i&&(o+=" {snip}"),o}function qc(n,t){if(!Array.isArray(n))return"";const o=[];for(let i=0;i<n.length;i++){const c=n[i];try{jc(c)?o.push("[VueViewModel]"):o.push(String(c))}catch{o.push("[value cannot be serialized]")}}return o.join(t)}function Kb(n,t,o=!1){return Fe(n)?Ub(t)?t.test(n):Fe(t)?o?n===t:n.includes(t):!1:!1}function wt(n,t=[],o=!1){return t.some(i=>Kb(n,i,o))}function Z(n,t,o){if(!(t in n))return;const i=n[t],c=o(i);typeof c=="function"&&zc(c,i),n[t]=c}function Dn(n,t,o){try{Object.defineProperty(n,t,{value:o,writable:!0,configurable:!0})}catch{Rn&&S.log(`Failed to add non-enumerable property "${t}" to object`,n)}}function zc(n,t){try{const o=t.prototype||{};n.prototype=t.prototype=o,Dn(n,"__sentry_original__",t)}catch{}}function Ko(n){return n.__sentry_original__}function Vb(n){return Object.keys(n).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(n[t])}`).join("&")}function Hc(n){if(Pc(n))return{message:n.message,name:n.name,stack:n.stack,...Wc(n)};if(yt(n)){const t={type:n.type,target:Gc(n.target),currentTarget:Gc(n.currentTarget),...Wc(n)};return typeof CustomEvent!="undefined"&&We(n,CustomEvent)&&(t.detail=n.detail),t}else return n}function Gc(n){try{return Pb(n)?Jc(n):Object.prototype.toString.call(n)}catch{return"<unknown>"}}function Wc(n){if(typeof n=="object"&&n!==null){const t={};for(const o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}else return{}}function Yb(n,t=40){const o=Object.keys(Hc(n));if(o.sort(),!o.length)return"[object has no keys]";if(o[0].length>=t)return un(o[0],t);for(let i=o.length;i>0;i--){const c=o.slice(0,i).join(", ");if(!(c.length>t))return i===o.length?c:un(c,t)}return""}function ue(n){return Vo(n,new Map)}function Vo(n,t){if(Xb(n)){const o=t.get(n);if(o!==void 0)return o;const i={};t.set(n,i);for(const c of Object.keys(n))typeof n[c]!="undefined"&&(i[c]=Vo(n[c],t));return i}if(Array.isArray(n)){const o=t.get(n);if(o!==void 0)return o;const i=[];return t.set(n,i),n.forEach(c=>{i.push(Vo(c,t))}),i}return n}function Xb(n){if(!An(n))return!1;try{const t=Object.getPrototypeOf(n).constructor.name;return!t||t==="Object"}catch{return!0}}function UF(n){let t;switch(!0){case n==null:t=new String(n);break;case(typeof n=="symbol"||typeof n=="bigint"):t=Object(n);break;case isPrimitive(n):t=new n.constructor(n);break;default:t=n;break}return t}const St="production";function re(){const n=L,t=n.crypto||n.msCrypto;let o=()=>Math.random()*16;try{if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");t&&t.getRandomValues&&(o=()=>{const i=new Uint8Array(1);return t.getRandomValues(i),i[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,i=>(i^(o()&15)>>i/4).toString(16))}function Kc(n){return n.exception&&n.exception.values?n.exception.values[0]:void 0}function Ne(n){const{message:t,event_id:o}=n;if(t)return t;const i=Kc(n);return i?i.type&&i.value?`${i.type}: ${i.value}`:i.type||i.value||o||"<unknown>":o||"<unknown>"}function Yo(n,t,o){const i=n.exception=n.exception||{},c=i.values=i.values||[],a=c[0]=c[0]||{};a.value||(a.value=t||""),a.type||(a.type=o||"Error")}function Nn(n,t){const o=Kc(n);if(!o)return;const i={type:"generic",handled:!0},c=o.mechanism;if(o.mechanism={...i,...c,...t},t&&"data"in t){const a={...c&&c.data,...t.data};o.mechanism.data=a}}const Qb=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function jF(n){const t=n.match(Qb)||[],o=parseInt(t[1],10),i=parseInt(t[2],10),c=parseInt(t[3],10);return{buildmetadata:t[5],major:isNaN(o)?void 0:o,minor:isNaN(i)?void 0:i,patch:isNaN(c)?void 0:c,prerelease:t[4]}}function $F(n,t,o=5){if(t.lineno===void 0)return;const i=n.length,c=Math.max(Math.min(i-1,t.lineno-1),0);t.pre_context=n.slice(Math.max(0,c-o),c).map(a=>snipLine(a,0)),t.context_line=snipLine(n[Math.min(i-1,c)],t.colno||0),t.post_context=n.slice(Math.min(c+1,i),c+1+o).map(a=>snipLine(a,0))}function Vc(n){if(n&&n.__sentry_captured__)return!0;try{Dn(n,"__sentry_captured__",!0)}catch{}return!1}function Yc(n){return Array.isArray(n)?n:[n]}const Xc=1e3;function Ln(){return Date.now()/Xc}function Zb(){const{performance:n}=L;if(!n||!n.now)return Ln;const t=Date.now()-n.now(),o=n.timeOrigin==null?t:n.timeOrigin;return()=>(o+n.now())/Xc}const Xo=Zb(),JF=null;let xt;const qF=(()=>{const{performance:n}=L;if(!n||!n.now){xt="none";return}const t=3600*1e3,o=n.now(),i=Date.now(),c=n.timeOrigin?Math.abs(n.timeOrigin+o-i):t,a=c<t,s=n.timing&&n.timing.navigationStart,A=typeof s=="number"?Math.abs(s+o-i):t,f=A<t;return a||f?c<=A?(xt="timeOrigin",n.timeOrigin):(xt="navigationStart",s):(xt="dateNow",i)})(),P=typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__;var ve;(function(n){n[n.PENDING=0]="PENDING";const o=1;n[n.RESOLVED=o]="RESOLVED";const i=2;n[n.REJECTED=i]="REJECTED"})(ve||(ve={}));function En(n){return new ce(t=>{t(n)})}function Qo(n){return new ce((t,o)=>{o(n)})}class ce{constructor(t){ce.prototype.__init.call(this),ce.prototype.__init2.call(this),ce.prototype.__init3.call(this),ce.prototype.__init4.call(this),this._state=ve.PENDING,this._handlers=[];try{t(this._resolve,this._reject)}catch(o){this._reject(o)}}then(t,o){return new ce((i,c)=>{this._handlers.push([!1,a=>{if(!t)i(a);else try{i(t(a))}catch(s){c(s)}},a=>{if(!o)c(a);else try{i(o(a))}catch(s){c(s)}}]),this._executeHandlers()})}catch(t){return this.then(o=>o,t)}finally(t){return new ce((o,i)=>{let c,a;return this.then(s=>{a=!1,c=s,t&&t()},s=>{a=!0,c=s,t&&t()}).then(()=>{if(a){i(c);return}o(c)})})}__init(){this._resolve=t=>{this._setResult(ve.RESOLVED,t)}}__init2(){this._reject=t=>{this._setResult(ve.REJECTED,t)}}__init3(){this._setResult=(t,o)=>{if(this._state===ve.PENDING){if(Ct(o)){o.then(this._resolve,this._reject);return}this._state=t,this._value=o,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===ve.PENDING)return;const t=this._handlers.slice();this._handlers=[],t.forEach(o=>{o[0]||(this._state===ve.RESOLVED&&o[1](this._value),this._state===ve.REJECTED&&o[2](this._value),o[0]=!0)})}}}function Zo(){return $c("globalEventProcessors",()=>[])}function em(n){Zo().push(n)}function Tt(n,t,o,i=0){return new ce((c,a)=>{const s=n[i];if(t===null||typeof s!="function")c(t);else{const l=s({...t},o);P&&s.id&&l===null&&S.log(`Event processor "${s.id}" dropped event`),Ct(l)?l.then(A=>Tt(n,A,o,i+1).then(c)).then(null,a):Tt(n,l,o,i+1).then(c).then(null,a)}})}function Qc(n){const t=Xo(),o={sid:re(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>nm(o)};return n&&Ke(o,n),o}function Ke(n,t={}){if(t.user&&(!n.ipAddress&&t.user.ip_address&&(n.ipAddress=t.user.ip_address),!n.did&&!t.did&&(n.did=t.user.id||t.user.email||t.user.username)),n.timestamp=t.timestamp||Xo(),t.abnormal_mechanism&&(n.abnormal_mechanism=t.abnormal_mechanism),t.ignoreDuration&&(n.ignoreDuration=t.ignoreDuration),t.sid&&(n.sid=t.sid.length===32?t.sid:re()),t.init!==void 0&&(n.init=t.init),!n.did&&t.did&&(n.did=`${t.did}`),typeof t.started=="number"&&(n.started=t.started),n.ignoreDuration)n.duration=void 0;else if(typeof t.duration=="number")n.duration=t.duration;else{const o=n.timestamp-n.started;n.duration=o>=0?o:0}t.release&&(n.release=t.release),t.environment&&(n.environment=t.environment),!n.ipAddress&&t.ipAddress&&(n.ipAddress=t.ipAddress),!n.userAgent&&t.userAgent&&(n.userAgent=t.userAgent),typeof t.errors=="number"&&(n.errors=t.errors),t.status&&(n.status=t.status)}function Zc(n,t){let o={};t?o={status:t}:n.status==="ok"&&(o={status:"exited"}),Ke(n,o)}function nm(n){return ue({sid:`${n.sid}`,init:n.init,started:new Date(n.started*1e3).toISOString(),timestamp:new Date(n.timestamp*1e3).toISOString(),status:n.status,errors:n.errors,did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0,duration:n.duration,abnormal_mechanism:n.abnormal_mechanism,attrs:{release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent}})}function ea(n){return n.transaction}const zF=0,tm=1;function om(n){const{spanId:t,traceId:o}=n.spanContext(),{data:i,op:c,parent_span_id:a,status:s,tags:l,origin:A}=dn(n);return ue({data:i,op:c,parent_span_id:a,span_id:t,status:s,tags:l,trace_id:o,origin:A})}function HF(n){const{traceId:t,spanId:o}=n.spanContext(),i=ta(n);return generateSentryTraceHeader(t,o,i)}function GF(n){return typeof n=="number"?na(n):Array.isArray(n)?n[0]+n[1]/1e9:n instanceof Date?na(n.getTime()):timestampInSeconds()}function na(n){return n>9999999999?n/1e3:n}function dn(n){return im(n)?n.getSpanJSON():typeof n.toJSON=="function"?n.toJSON():{}}function im(n){return typeof n.getSpanJSON=="function"}function ta(n){const{traceFlags:t}=n.spanContext();return!!(t&tm)}function oa(n,t,o){const i=t.getOptions(),{publicKey:c}=t.getDsn()||{},{segment:a}=o&&o.getUser()||{},s=ue({environment:i.environment||St,release:i.release,user_segment:a,public_key:c,trace_id:n});return t.emit&&t.emit("createDsc",s),s}function rm(n){const t=V();if(!t)return{};const o=oa(dn(n).trace_id||"",t,Se()),i=ea(n);if(!i)return o;const c=i&&i._frozenDynamicSamplingContext;if(c)return c;const{sampleRate:a,source:s}=i.metadata;a!=null&&(o.sample_rate=`${a}`);const l=dn(i);return s&&s!=="url"&&(o.transaction=l.description),o.sampled=String(ta(i)),t.emit&&t.emit("createDsc",o),o}function ia(n,t){const{fingerprint:o,span:i,breadcrumbs:c,sdkProcessingMetadata:a}=t;cm(n,t),i&&lm(n,i),Am(n,o),am(n,c),sm(n,a)}function ra(n,t){const{extra:o,tags:i,user:c,contexts:a,level:s,sdkProcessingMetadata:l,breadcrumbs:A,fingerprint:f,eventProcessors:u,attachments:d,propagationContext:g,transactionName:b,span:F}=t;Mn(n,"extra",o),Mn(n,"tags",i),Mn(n,"user",c),Mn(n,"contexts",a),Mn(n,"sdkProcessingMetadata",l),s&&(n.level=s),b&&(n.transactionName=b),F&&(n.span=F),A.length&&(n.breadcrumbs=[...n.breadcrumbs,...A]),f.length&&(n.fingerprint=[...n.fingerprint,...f]),u.length&&(n.eventProcessors=[...n.eventProcessors,...u]),d.length&&(n.attachments=[...n.attachments,...d]),n.propagationContext={...n.propagationContext,...g}}function Mn(n,t,o){if(o&&Object.keys(o).length){n[t]={...n[t]};for(const i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[t][i]=o[i])}}function cm(n,t){const{extra:o,tags:i,user:c,contexts:a,level:s,transactionName:l}=t,A=ue(o);A&&Object.keys(A).length&&(n.extra={...A,...n.extra});const f=ue(i);f&&Object.keys(f).length&&(n.tags={...f,...n.tags});const u=ue(c);u&&Object.keys(u).length&&(n.user={...u,...n.user});const d=ue(a);d&&Object.keys(d).length&&(n.contexts={...d,...n.contexts}),s&&(n.level=s),l&&(n.transaction=l)}function am(n,t){const o=[...n.breadcrumbs||[],...t];n.breadcrumbs=o.length?o:void 0}function sm(n,t){n.sdkProcessingMetadata={...n.sdkProcessingMetadata,...t}}function lm(n,t){n.contexts={trace:om(t),...n.contexts};const o=ea(t);if(o){n.sdkProcessingMetadata={dynamicSamplingContext:rm(t),...n.sdkProcessingMetadata};const i=dn(o).description;i&&(n.tags={transaction:i,...n.tags})}}function Am(n,t){n.fingerprint=n.fingerprint?Yc(n.fingerprint):[],t&&(n.fingerprint=n.fingerprint.concat(t)),n.fingerprint&&!n.fingerprint.length&&delete n.fingerprint}const fm=100;let It;class ke{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=ca()}static clone(t){return t?t.clone():new ke}clone(){const t=new ke;return t._breadcrumbs=[...this._breadcrumbs],t._tags={...this._tags},t._extra={...this._extra},t._contexts={...this._contexts},t._user=this._user,t._level=this._level,t._span=this._span,t._session=this._session,t._transactionName=this._transactionName,t._fingerprint=this._fingerprint,t._eventProcessors=[...this._eventProcessors],t._requestSession=this._requestSession,t._attachments=[...this._attachments],t._sdkProcessingMetadata={...this._sdkProcessingMetadata},t._propagationContext={...this._propagationContext},t._client=this._client,t}setClient(t){this._client=t}getClient(){return this._client}addScopeListener(t){this._scopeListeners.push(t)}addEventProcessor(t){return this._eventProcessors.push(t),this}setUser(t){return this._user=t||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&Ke(this._session,{user:t}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(t){return this._requestSession=t,this}setTags(t){return this._tags={...this._tags,...t},this._notifyScopeListeners(),this}setTag(t,o){return this._tags={...this._tags,[t]:o},this._notifyScopeListeners(),this}setExtras(t){return this._extra={...this._extra,...t},this._notifyScopeListeners(),this}setExtra(t,o){return this._extra={...this._extra,[t]:o},this._notifyScopeListeners(),this}setFingerprint(t){return this._fingerprint=t,this._notifyScopeListeners(),this}setLevel(t){return this._level=t,this._notifyScopeListeners(),this}setTransactionName(t){return this._transactionName=t,this._notifyScopeListeners(),this}setContext(t,o){return o===null?delete this._contexts[t]:this._contexts[t]=o,this._notifyScopeListeners(),this}setSpan(t){return this._span=t,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const t=this._span;return t&&t.transaction}setSession(t){return t?this._session=t:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(t){if(!t)return this;const o=typeof t=="function"?t(this):t;if(o instanceof ke){const i=o.getScopeData();this._tags={...this._tags,...i.tags},this._extra={...this._extra,...i.extra},this._contexts={...this._contexts,...i.contexts},i.user&&Object.keys(i.user).length&&(this._user=i.user),i.level&&(this._level=i.level),i.fingerprint.length&&(this._fingerprint=i.fingerprint),o.getRequestSession()&&(this._requestSession=o.getRequestSession()),i.propagationContext&&(this._propagationContext=i.propagationContext)}else if(An(o)){const i=t;this._tags={...this._tags,...i.tags},this._extra={...this._extra,...i.extra},this._contexts={...this._contexts,...i.contexts},i.user&&(this._user=i.user),i.level&&(this._level=i.level),i.fingerprint&&(this._fingerprint=i.fingerprint),i.requestSession&&(this._requestSession=i.requestSession),i.propagationContext&&(this._propagationContext=i.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=ca(),this}addBreadcrumb(t,o){const i=typeof o=="number"?o:fm;if(i<=0)return this;const c={timestamp:Ln(),...t},a=this._breadcrumbs;return a.push(c),this._breadcrumbs=a.length>i?a.slice(-i):a,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(t){return this._attachments.push(t),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:t,_attachments:o,_contexts:i,_tags:c,_extra:a,_user:s,_level:l,_fingerprint:A,_eventProcessors:f,_propagationContext:u,_sdkProcessingMetadata:d,_transactionName:g,_span:b}=this;return{breadcrumbs:t,attachments:o,contexts:i,tags:c,extra:a,user:s,level:l,fingerprint:A||[],eventProcessors:f,propagationContext:u,sdkProcessingMetadata:d,transactionName:g,span:b}}applyToEvent(t,o={},i=[]){ia(t,this.getScopeData());const c=[...i,...Zo(),...this._eventProcessors];return Tt(c,t,o)}setSDKProcessingMetadata(t){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...t},this}setPropagationContext(t){return this._propagationContext=t,this}getPropagationContext(){return this._propagationContext}captureException(t,o){const i=o&&o.event_id?o.event_id:re();if(!this._client)return S.warn("No client configured on scope - will not capture exception!"),i;const c=new Error("Sentry syntheticException");return this._client.captureException(t,{originalException:t,syntheticException:c,...o,event_id:i},this),i}captureMessage(t,o,i){const c=i&&i.event_id?i.event_id:re();if(!this._client)return S.warn("No client configured on scope - will not capture message!"),c;const a=new Error(t);return this._client.captureMessage(t,o,{originalException:t,syntheticException:a,...i,event_id:c},this),c}captureEvent(t,o){const i=o&&o.event_id?o.event_id:re();return this._client?(this._client.captureEvent(t,{...o,event_id:i},this),i):(S.warn("No client configured on scope - will not capture event!"),i)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(t=>{t(this)}),this._notifyingListeners=!1)}}function um(){return It||(It=new ke),It}function WF(n){It=n}function ca(){return{traceId:re(),spanId:re().substring(16)}}const ei="7.112.0",ni=parseFloat(ei),Em=100;class ti{constructor(t,o,i,c=ni){this._version=c;let a;o?a=o:(a=new ke,a.setClient(t));let s;i?s=i:(s=new ke,s.setClient(t)),this._stack=[{scope:a}],t&&this.bindClient(t),this._isolationScope=s}isOlderThan(t){return this._version<t}bindClient(t){const o=this.getStackTop();o.client=t,o.scope.setClient(t),t&&t.setupIntegrations&&t.setupIntegrations()}pushScope(){const t=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:t}),t}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(t){const o=this.pushScope();let i;try{i=t(o)}catch(c){throw this.popScope(),c}return Ct(i)?i.then(c=>(this.popScope(),c),c=>{throw this.popScope(),c}):(this.popScope(),i)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(t,o){const i=this._lastEventId=o&&o.event_id?o.event_id:re(),c=new Error("Sentry syntheticException");return this.getScope().captureException(t,{originalException:t,syntheticException:c,...o,event_id:i}),i}captureMessage(t,o,i){const c=this._lastEventId=i&&i.event_id?i.event_id:re(),a=new Error(t);return this.getScope().captureMessage(t,o,{originalException:t,syntheticException:a,...i,event_id:c}),c}captureEvent(t,o){const i=o&&o.event_id?o.event_id:re();return t.type||(this._lastEventId=i),this.getScope().captureEvent(t,{...o,event_id:i}),i}lastEventId(){return this._lastEventId}addBreadcrumb(t,o){const{scope:i,client:c}=this.getStackTop();if(!c)return;const{beforeBreadcrumb:a=null,maxBreadcrumbs:s=Em}=c.getOptions&&c.getOptions()||{};if(s<=0)return;const A={timestamp:Ln(),...t},f=a?kt(()=>a(A,o)):A;f!==null&&(c.emit&&c.emit("beforeAddBreadcrumb",f,o),i.addBreadcrumb(f,s))}setUser(t){this.getScope().setUser(t),this.getIsolationScope().setUser(t)}setTags(t){this.getScope().setTags(t),this.getIsolationScope().setTags(t)}setExtras(t){this.getScope().setExtras(t),this.getIsolationScope().setExtras(t)}setTag(t,o){this.getScope().setTag(t,o),this.getIsolationScope().setTag(t,o)}setExtra(t,o){this.getScope().setExtra(t,o),this.getIsolationScope().setExtra(t,o)}setContext(t,o){this.getScope().setContext(t,o),this.getIsolationScope().setContext(t,o)}configureScope(t){const{scope:o,client:i}=this.getStackTop();i&&t(o)}run(t){const o=aa(this);try{t(this)}finally{aa(o)}}getIntegration(t){const o=this.getClient();if(!o)return null;try{return o.getIntegration(t)}catch{return P&&S.warn(`Cannot retrieve integration ${t.id} from the current Hub`),null}}startTransaction(t,o){const i=this._callExtensionMethod("startTransaction",t,o);return P&&!i&&(this.getClient()?S.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):S.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),i}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(t=!1){if(t)return this.endSession();this._sendSessionUpdate()}endSession(){const o=this.getStackTop().scope,i=o.getSession();i&&Zc(i),this._sendSessionUpdate(),o.setSession()}startSession(t){const{scope:o,client:i}=this.getStackTop(),{release:c,environment:a=St}=i&&i.getOptions()||{},{userAgent:s}=L.navigator||{},l=Qc({release:c,environment:a,user:o.getUser(),...s&&{userAgent:s},...t}),A=o.getSession&&o.getSession();return A&&A.status==="ok"&&Ke(A,{status:"exited"}),this.endSession(),o.setSession(l),l}shouldSendDefaultPii(){const t=this.getClient(),o=t&&t.getOptions();return!!(o&&o.sendDefaultPii)}_sendSessionUpdate(){const{scope:t,client:o}=this.getStackTop(),i=t.getSession();i&&o&&o.captureSession&&o.captureSession(i)}_callExtensionMethod(t,...o){const c=gn().__SENTRY__;if(c&&c.extensions&&typeof c.extensions[t]=="function")return c.extensions[t].apply(this,o);P&&S.warn(`Extension method ${t} couldn't be found, doing nothing.`)}}function gn(){return L.__SENTRY__=L.__SENTRY__||{extensions:{},hub:void 0},L}function aa(n){const t=gn(),o=Rt(t);return oi(t,n),o}function we(){const n=gn();if(n.__SENTRY__&&n.__SENTRY__.acs){const t=n.__SENTRY__.acs.getCurrentHub();if(t)return t}return sa(n)}function Ot(){return we().getIsolationScope()}function sa(n=gn()){return(!la(n)||Rt(n).isOlderThan(ni))&&oi(n,new ti),Rt(n)}function KF(n,t=sa()){if(!la(n)||Rt(n).isOlderThan(ni)){const o=t.getClient(),i=t.getScope(),c=t.getIsolationScope();oi(n,new ti(o,i.clone(),c.clone()))}}function VF(n){const t=gn();t.__SENTRY__=t.__SENTRY__||{},t.__SENTRY__.acs=n}function YF(n,t={}){const o=gn();return o.__SENTRY__&&o.__SENTRY__.acs?o.__SENTRY__.acs.runWithAsyncContext(n,t):n()}function la(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function Rt(n){return $c("hub",()=>new ti,n)}function oi(n,t){if(!n)return!1;const o=n.__SENTRY__=n.__SENTRY__||{};return o.hub=t,!0}function dm(){const n=typeof WeakSet=="function",t=n?new WeakSet:[];function o(c){if(n)return t.has(c)?!0:(t.add(c),!1);for(let a=0;a<t.length;a++)if(t[a]===c)return!0;return t.push(c),!1}function i(c){if(n)t.delete(c);else for(let a=0;a<t.length;a++)if(t[a]===c){t.splice(a,1);break}}return[o,i]}function gm(n,t=!1){return!(t||n&&!n.startsWith("/")&&!n.match(/^[A-Z]:/)&&!n.startsWith(".")&&!n.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))&&n!==void 0&&!n.includes("node_modules/")}function pm(n){const t=/^\s*[-]{4,}$/,o=/at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;return i=>{const c=i.match(o);if(c){let a,s,l,A,f;if(c[1]){l=c[1];let g=l.lastIndexOf(".");if(l[g-1]==="."&&g--,g>0){a=l.slice(0,g),s=l.slice(g+1);const b=a.indexOf(".Module");b>0&&(l=l.slice(b+1),a=a.slice(0,b))}A=void 0}s&&(A=a,f=s),s==="<anonymous>"&&(f=void 0,l=void 0),l===void 0&&(f=f||"<anonymous>",l=A?`${A}.${f}`:f);let u=c[2]&&c[2].startsWith("file://")?c[2].slice(7):c[2];const d=c[5]==="native";return u&&u.match(/\/[A-Z]:/)&&(u=u.slice(1)),!u&&c[5]&&!d&&(u=c[5]),{filename:u,module:n?n(u):void 0,function:l,lineno:parseInt(c[3],10)||void 0,colno:parseInt(c[4],10)||void 0,in_app:gm(u,d)}}if(i.match(t))return{filename:i}}}const Aa=50,fa=/\(error: (.*)\)/,ua=/captureMessage|captureException/;function Ea(...n){const t=n.sort((o,i)=>o[0]-i[0]).map(o=>o[1]);return(o,i=0)=>{const c=[],a=o.split(`
`);for(let s=i;s<a.length;s++){const l=a[s];if(l.length>1024)continue;const A=fa.test(l)?l.replace(fa,"$1"):l;if(!A.match(/\S*Error: /)){for(const f of t){const u=f(A);if(u){c.push(u);break}}if(c.length>=Aa)break}}return da(c)}}function bm(n){return Array.isArray(n)?Ea(...n):n}function da(n){if(!n.length)return[];const t=Array.from(n);return/sentryWrapped/.test(t[t.length-1].function||"")&&t.pop(),t.reverse(),ua.test(t[t.length-1].function||"")&&(t.pop(),ua.test(t[t.length-1].function||"")&&t.pop()),t.slice(0,Aa).map(o=>({...o,filename:o.filename||t[t.length-1].filename,function:o.function||"?"}))}const ii="<anonymous>";function Le(n){try{return!n||typeof n!="function"?ii:n.name||ii}catch{return ii}}function mm(n){return[90,pm(n)]}function me(n,t=100,o=1/0){try{return ri("",n,t,o)}catch(i){return{ERROR:`**non-serializable** (${i})`}}}function ga(n,t=3,o=100*1024){const i=me(n,t);return ym(i)>o?ga(n,t-1,o):i}function ri(n,t,o=1/0,i=1/0,c=dm()){const[a,s]=c;if(t==null||["number","boolean","string"].includes(typeof t)&&!$b(t))return t;const l=hm(n,t);if(!l.startsWith("[object "))return l;if(t.__sentry_skip_normalization__)return t;const A=typeof t.__sentry_override_normalization_depth__=="number"?t.__sentry_override_normalization_depth__:o;if(A===0)return l.replace("object ","");if(a(t))return"[Circular ~]";const f=t;if(f&&typeof f.toJSON=="function")try{const b=f.toJSON();return ri("",b,A-1,i,c)}catch{}const u=Array.isArray(t)?[]:{};let d=0;const g=Hc(t);for(const b in g){if(!Object.prototype.hasOwnProperty.call(g,b))continue;if(d>=i){u[b]="[MaxProperties ~]";break}const F=g[b];u[b]=ri(b,F,A-1,i,c),d++}return s(t),u}function hm(n,t){try{if(n==="domain"&&t&&typeof t=="object"&&t._events)return"[Domain]";if(n==="domainEmitter")return"[DomainEmitter]";if(typeof global!="undefined"&&t===global)return"[Global]";if(typeof window!="undefined"&&t===window)return"[Window]";if(typeof document!="undefined"&&t===document)return"[Document]";if(jc(t))return"[VueViewModel]";if(jb(t))return"[SyntheticEvent]";if(typeof t=="number"&&t!==t)return"[NaN]";if(typeof t=="function")return`[Function: ${Le(t)}]`;if(typeof t=="symbol")return`[${String(t)}]`;if(typeof t=="bigint")return`[BigInt: ${String(t)}]`;const o=_m(t);return/^HTML(\w*)Element$/.test(o)?`[HTMLElement: ${o}]`:`[object ${o}]`}catch(o){return`**non-serializable** (${o})`}}function _m(n){const t=Object.getPrototypeOf(n);return t?t.constructor.name:"null prototype"}function Bm(n){return~-encodeURI(n).split(/%..|./).length}function ym(n){return Bm(JSON.stringify(n))}function XF(n,t){const o=t.replace(/\\/g,"/").replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let i=n;try{i=decodeURI(n)}catch{}return i.replace(/\\/g,"/").replace(/webpack:\/?/g,"").replace(new RegExp(`(file://)?/*${o}/*`,"ig"),"app:///")}function Cm(n,t,o,i,c,a){const{normalizeDepth:s=3,normalizeMaxBreadth:l=1e3}=n,A={...t,event_id:t.event_id||o.event_id||re(),timestamp:t.timestamp||Ln()},f=o.integrations||n.integrations.map(w=>w.name);Fm(A,n),wm(A,f),t.type===void 0&&vm(A,n.stackParser);const u=xm(i,o.captureContext);o.mechanism&&Nn(A,o.mechanism);const d=c&&c.getEventProcessors?c.getEventProcessors():[],g=um().getScopeData();if(a){const w=a.getScopeData();ra(g,w)}if(u){const w=u.getScopeData();ra(g,w)}const b=[...o.attachments||[],...g.attachments];b.length&&(o.attachments=b),ia(A,g);const F=[...d,...Zo(),...g.eventProcessors];return Tt(F,A,o).then(w=>(w&&km(w),typeof s=="number"&&s>0?Sm(w,s,l):w))}function Fm(n,t){const{environment:o,release:i,dist:c,maxValueLength:a=250}=t;"environment"in n||(n.environment="environment"in t?o:St),n.release===void 0&&i!==void 0&&(n.release=i),n.dist===void 0&&c!==void 0&&(n.dist=c),n.message&&(n.message=un(n.message,a));const s=n.exception&&n.exception.values&&n.exception.values[0];s&&s.value&&(s.value=un(s.value,a));const l=n.request;l&&l.url&&(l.url=un(l.url,a))}const pa=new WeakMap;function vm(n,t){const o=L._sentryDebugIds;if(!o)return;let i;const c=pa.get(t);c?i=c:(i=new Map,pa.set(t,i));const a=Object.keys(o).reduce((s,l)=>{let A;const f=i.get(l);f?A=f:(A=t(l),i.set(l,A));for(let u=A.length-1;u>=0;u--){const d=A[u];if(d.filename){s[d.filename]=o[l];break}}return s},{});try{n.exception.values.forEach(s=>{s.stacktrace.frames.forEach(l=>{l.filename&&(l.debug_id=a[l.filename])})})}catch{}}function km(n){const t={};try{n.exception.values.forEach(i=>{i.stacktrace.frames.forEach(c=>{c.debug_id&&(c.abs_path?t[c.abs_path]=c.debug_id:c.filename&&(t[c.filename]=c.debug_id),delete c.debug_id)})})}catch{}if(Object.keys(t).length===0)return;n.debug_meta=n.debug_meta||{},n.debug_meta.images=n.debug_meta.images||[];const o=n.debug_meta.images;Object.keys(t).forEach(i=>{o.push({type:"sourcemap",code_file:i,debug_id:t[i]})})}function wm(n,t){t.length>0&&(n.sdk=n.sdk||{},n.sdk.integrations=[...n.sdk.integrations||[],...t])}function Sm(n,t,o){if(!n)return null;const i={...n,...n.breadcrumbs&&{breadcrumbs:n.breadcrumbs.map(c=>({...c,...c.data&&{data:me(c.data,t,o)}}))},...n.user&&{user:me(n.user,t,o)},...n.contexts&&{contexts:me(n.contexts,t,o)},...n.extra&&{extra:me(n.extra,t,o)}};return n.contexts&&n.contexts.trace&&i.contexts&&(i.contexts.trace=n.contexts.trace,n.contexts.trace.data&&(i.contexts.trace.data=me(n.contexts.trace.data,t,o))),n.spans&&(i.spans=n.spans.map(c=>{const a=dn(c).data;return a&&(c.data=me(a,t,o)),c})),i}function xm(n,t){if(!t)return n;const o=n?n.clone():new ke;return o.update(t),o}function Tm(n){if(n)return Im(n)?{captureContext:n}:Rm(n)?{captureContext:n}:n}function Im(n){return n instanceof ke||typeof n=="function"}const Om=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function Rm(n){return Object.keys(n).some(t=>Om.includes(t))}function ba(n,t){return we().captureException(n,Tm(t))}function QF(n,t){const o=typeof t=="string"?t:void 0,i=typeof t!="string"?{captureContext:t}:void 0;return getCurrentHub().captureMessage(n,o,i)}function ma(n,t){return we().captureEvent(n,t)}function ZF(n){getCurrentHub().configureScope(n)}function Ve(n,t){we().addBreadcrumb(n,t)}function ev(n,t){getCurrentHub().setContext(n,t)}function nv(n){getCurrentHub().setExtras(n)}function tv(n,t){getCurrentHub().setExtra(n,t)}function ov(n){getCurrentHub().setTags(n)}function iv(n,t){getCurrentHub().setTag(n,t)}function rv(n){getCurrentHub().setUser(n)}function ha(...n){const t=we();if(n.length===2){const[o,i]=n;return o?t.withScope(()=>(t.getStackTop().scope=o,i(o))):t.withScope(i)}return t.withScope(n[0])}function cv(n){return runWithAsyncContext(()=>n(getIsolationScope()))}function av(n,t){return ha(o=>(o.setSpan(n),t(o)))}function sv(n,t){return getCurrentHub().startTransaction({...n},t)}function _a(n,t){const o=Se(),i=V();if(!i)DEBUG_BUILD&&logger.warn("Cannot capture check-in. No client defined.");else if(!i.captureCheckIn)DEBUG_BUILD&&logger.warn("Cannot capture check-in. Client does not support sending check-ins.");else return i.captureCheckIn(n,t,o);return uuid4()}function lv(n,t,o){const i=_a({monitorSlug:n,status:"in_progress"},o),c=timestampInSeconds();function a(l){_a({monitorSlug:n,status:l,checkInId:i,duration:timestampInSeconds()-c})}let s;try{s=t()}catch(l){throw a("error"),l}return isThenable(s)?Promise.resolve(s).then(()=>{a("ok")},()=>{a("error")}):a("ok"),s}async function Av(n){const t=V();return t?t.flush(n):(DEBUG_BUILD&&logger.warn("Cannot flush events. No client defined."),Promise.resolve(!1))}async function fv(n){const t=V();return t?t.close(n):(DEBUG_BUILD&&logger.warn("Cannot flush events and disable SDK. No client defined."),Promise.resolve(!1))}function uv(){return getCurrentHub().lastEventId()}function V(){return we().getClient()}function Ev(){return!!V()}function Se(){return we().getScope()}function Ba(n){const t=V(),o=Ot(),i=Se(),{release:c,environment:a=St}=t&&t.getOptions()||{},{userAgent:s}=L.navigator||{},l=Qc({release:c,environment:a,user:i.getUser()||o.getUser(),...s&&{userAgent:s},...n}),A=o.getSession();return A&&A.status==="ok"&&Ke(A,{status:"exited"}),ya(),o.setSession(l),i.setSession(l),l}function ya(){const n=Ot(),t=Se(),o=t.getSession()||n.getSession();o&&Zc(o),Ca(),n.setSession(),t.setSession()}function Ca(){const n=Ot(),t=Se(),o=V(),i=t.getSession()||n.getSession();i&&o&&o.captureSession&&o.captureSession(i)}function Fa(n=!1){if(n){ya();return}Ca()}const va=[];function Dm(n){const t={};return n.forEach(o=>{const{name:i}=o,c=t[i];c&&!c.isDefaultInstance&&o.isDefaultInstance||(t[i]=o)}),Object.keys(t).map(o=>t[o])}function Nm(n){const t=n.defaultIntegrations||[],o=n.integrations;t.forEach(s=>{s.isDefaultInstance=!0});let i;Array.isArray(o)?i=[...t,...o]:typeof o=="function"?i=Yc(o(t)):i=t;const c=Dm(i),a=Mm(c,s=>s.name==="Debug");if(a!==-1){const[s]=c.splice(a,1);c.push(s)}return c}function Lm(n,t){const o={};return t.forEach(i=>{i&&wa(n,i,o)}),o}function ka(n,t){for(const o of t)o&&o.afterAllSetup&&o.afterAllSetup(n)}function wa(n,t,o){if(o[t.name]){P&&S.log(`Integration skipped because it was already installed: ${t.name}`);return}if(o[t.name]=t,va.indexOf(t.name)===-1&&(t.setupOnce(em,we),va.push(t.name)),t.setup&&typeof t.setup=="function"&&t.setup(n),n.on&&typeof t.preprocessEvent=="function"){const i=t.preprocessEvent.bind(t);n.on("preprocessEvent",(c,a)=>i(c,a,n))}if(n.addEventProcessor&&typeof t.processEvent=="function"){const i=t.processEvent.bind(t),c=Object.assign((a,s)=>i(a,s,n),{id:t.name});n.addEventProcessor(c)}P&&S.log(`Integration installed: ${t.name}`)}function dv(n){const t=getClient();if(!t||!t.addIntegration){DEBUG_BUILD&&logger.warn(`Cannot add integration "${n.name}" because no SDK Client is available.`);return}t.addIntegration(n)}function Mm(n,t){for(let o=0;o<n.length;o++)if(t(n[o])===!0)return o;return-1}function se(n,t){return Object.assign(function(...i){return t(...i)},{id:n})}function gv(n){return n}let Sa;const xa="FunctionToString",Ta=new WeakMap,Ia=()=>({name:xa,setupOnce(){Sa=Function.prototype.toString;try{Function.prototype.toString=function(...n){const t=Ko(this),o=Ta.has(V())&&t!==void 0?t:this;return Sa.apply(o,n)}}catch{}},setup(n){Ta.set(n,!0)}}),Pm=se(xa,Ia),Um=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/],jm=[/^.*\/healthcheck$/,/^.*\/healthy$/,/^.*\/live$/,/^.*\/ready$/,/^.*\/heartbeat$/,/^.*\/health$/,/^.*\/healthz$/],Oa="InboundFilters",Ra=(n={})=>({name:Oa,setupOnce(){},processEvent(t,o,i){const c=i.getOptions(),a=Jm(n,c);return qm(t,a)?null:t}}),$m=se(Oa,Ra);function Jm(n={},t={}){return{allowUrls:[...n.allowUrls||[],...t.allowUrls||[]],denyUrls:[...n.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...n.ignoreErrors||[],...t.ignoreErrors||[],...n.disableErrorDefaults?[]:Um],ignoreTransactions:[...n.ignoreTransactions||[],...t.ignoreTransactions||[],...n.disableTransactionDefaults?[]:jm],ignoreInternal:n.ignoreInternal!==void 0?n.ignoreInternal:!0}}function qm(n,t){return t.ignoreInternal&&Vm(n)?(P&&S.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ne(n)}`),!0):zm(n,t.ignoreErrors)?(P&&S.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ne(n)}`),!0):Hm(n,t.ignoreTransactions)?(P&&S.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ne(n)}`),!0):Gm(n,t.denyUrls)?(P&&S.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ne(n)}.
Url: ${Dt(n)}`),!0):Wm(n,t.allowUrls)?!1:(P&&S.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ne(n)}.
Url: ${Dt(n)}`),!0)}function zm(n,t){return n.type||!t||!t.length?!1:Km(n).some(o=>wt(o,t))}function Hm(n,t){if(n.type!=="transaction"||!t||!t.length)return!1;const o=n.transaction;return o?wt(o,t):!1}function Gm(n,t){if(!t||!t.length)return!1;const o=Dt(n);return o?wt(o,t):!1}function Wm(n,t){if(!t||!t.length)return!0;const o=Dt(n);return o?wt(o,t):!0}function Km(n){const t=[];n.message&&t.push(n.message);let o;try{o=n.exception.values[n.exception.values.length-1]}catch{}return o&&o.value&&(t.push(o.value),o.type&&t.push(`${o.type}: ${o.value}`)),P&&t.length===0&&S.error(`Could not extract message for event ${Ne(n)}`),t}function Vm(n){try{return n.exception.values[0].type==="SentryError"}catch{}return!1}function Ym(n=[]){for(let t=n.length-1;t>=0;t--){const o=n[t];if(o&&o.filename!=="<anonymous>"&&o.filename!=="[native code]")return o.filename||null}return null}function Dt(n){try{let t;try{t=n.exception.values[0].stacktrace.frames}catch{}return t?Ym(t):null}catch{return P&&S.error(`Cannot extract url for event ${Ne(n)}`),null}}function Da(n,t,o=250,i,c,a,s){if(!a.exception||!a.exception.values||!s||!We(s.originalException,Error))return;const l=a.exception.values.length>0?a.exception.values[a.exception.values.length-1]:void 0;l&&(a.exception.values=Xm(ci(n,t,c,s.originalException,i,a.exception.values,l,0),o))}function ci(n,t,o,i,c,a,s,l){if(a.length>=o+1)return a;let A=[...a];if(We(i[c],Error)){Na(s,l);const f=n(t,i[c]),u=A.length;La(f,c,u,l),A=ci(n,t,o,i[c],c,[f,...A],f,u)}return Array.isArray(i.errors)&&i.errors.forEach((f,u)=>{if(We(f,Error)){Na(s,l);const d=n(t,f),g=A.length;La(d,`errors[${u}]`,g,l),A=ci(n,t,o,f,c,[d,...A],d,g)}}),A}function Na(n,t){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,...n.type==="AggregateError"&&{is_exception_group:!0},exception_id:t}}function La(n,t,o,i){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,type:"chained",source:t,exception_id:o,parent_id:i}}function Xm(n,t){return n.map(o=>(o.value&&(o.value=un(o.value,t)),o))}function Ma(n,t){return n(t.stack||"",1)}function Pa(n,t){const o={type:t.name||t.constructor.name,value:t.message},i=Ma(n,t);return i.length&&(o.stacktrace={frames:i}),o}function Qm(n){if("name"in n&&typeof n.name=="string"){let t=`'${n.name}' captured as exception`;return"message"in n&&typeof n.message=="string"&&(t+=` with message '${n.message}'`),t}else return"message"in n&&typeof n.message=="string"?n.message:`Object captured as exception with keys: ${extractExceptionKeysForMessage(n)}`}function mv(n,t,o,i){const c=typeof n=="function"?n().getClient():n;let a=o;const l=i&&i.data&&i.data.mechanism||{handled:!0,type:"generic"};let A;if(!isError(o)){if(isPlainObject(o)){const u=c&&c.getOptions().normalizeDepth;A={__serialized__:normalizeToSize(o,u)};const d=Qm(o);a=i&&i.syntheticException||new Error(d),a.message=d}else a=i&&i.syntheticException||new Error(o),a.message=o;l.synthetic=!0}const f={exception:{values:[Pa(t,a)]}};return A&&(f.extra=A),addExceptionTypeValue(f,void 0,void 0),addExceptionMechanism(f,l),{...f,event_id:i&&i.event_id}}function hv(n,t,o="info",i,c){const a={event_id:i&&i.event_id,level:o};if(c&&i&&i.syntheticException){const s=Ma(n,i.syntheticException);s.length&&(a.exception={values:[{value:t,stacktrace:{frames:s}}]})}if(isParameterizedString(t)){const{__sentry_template_string__:s,__sentry_template_values__:l}=t;return a.logentry={message:s,params:l},a}return a.message=t,a}const Zm="cause",eh=5,Ua="LinkedErrors",nh=(n={})=>{const t=n.limit||eh,o=n.key||Zm;return{name:Ua,setupOnce(){},preprocessEvent(i,c,a){const s=a.getOptions();Da(Pa,s.stackParser,s.maxValueLength,o,t,i,c)}}},th=se(Ua,nh),oh=h,M=L;let ai=0;function ja(){return ai>0}function ih(){ai++,setTimeout(()=>{ai--})}function pn(n,t={},o){if(typeof n!="function")return n;try{const c=n.__sentry_wrapped__;if(c)return c;if(Ko(n))return n}catch{return n}const i=function(){const c=Array.prototype.slice.call(arguments);try{o&&typeof o=="function"&&o.apply(this,arguments);const a=c.map(s=>pn(s,t));return n.apply(this,a)}catch(a){throw ih(),ha(s=>{s.addEventProcessor(l=>(t.mechanism&&(Yo(l,void 0,void 0),Nn(l,t.mechanism)),l.extra={...l.extra,arguments:c},l)),ba(a)}),a}};try{for(const c in n)Object.prototype.hasOwnProperty.call(n,c)&&(i[c]=n[c])}catch{}zc(i,n),Dn(n,"__sentry_wrapped__",i);try{Object.getOwnPropertyDescriptor(i,"name").configurable&&Object.defineProperty(i,"name",{get(){return n.name}})}catch{}return i}const bn={},$a={};function Ye(n,t){bn[n]=bn[n]||[],bn[n].push(t)}function Bv(){Object.keys(bn).forEach(n=>{bn[n]=void 0})}function Xe(n,t){$a[n]||(t(),$a[n]=!0)}function Ee(n,t){const o=n&&bn[n];if(o)for(const i of o)try{i(t)}catch(c){Rn&&S.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Le(i)}
Error:`,c)}}let Nt=null;function rh(n){const t="error";Ye(t,n),Xe(t,ch)}function ch(){Nt=L.onerror,L.onerror=function(n,t,o,i,c){return Ee("error",{column:i,error:c,line:o,msg:n,url:t}),Nt&&!Nt.__SENTRY_LOADER__?Nt.apply(this,arguments):!1},L.onerror.__SENTRY_INSTRUMENTED__=!0}let Lt=null;function ah(n){const t="unhandledrejection";Ye(t,n),Xe(t,sh)}function sh(){Lt=L.onunhandledrejection,L.onunhandledrejection=function(n){return Ee("unhandledrejection",n),Lt&&!Lt.__SENTRY_LOADER__?Lt.apply(this,arguments):!0},L.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const xe=typeof __SENTRY_DEBUG__=="undefined"||__SENTRY_DEBUG__;function Ja(n,t){const o=li(n,t),i={type:t&&t.name,value:uh(t)};return o.length&&(i.stacktrace={frames:o}),i.type===void 0&&i.value===""&&(i.value="Unrecoverable error caught"),i}function lh(n,t,o,i){const c=V(),a=c&&c.getOptions().normalizeDepth,s={exception:{values:[{type:yt(t)?t.constructor.name:i?"UnhandledRejection":"Error",value:gh(t,{isUnhandledRejection:i})}]},extra:{__serialized__:ga(t,a)}};if(o){const l=li(n,o);l.length&&(s.exception.values[0].stacktrace={frames:l})}return s}function si(n,t){return{exception:{values:[Ja(n,t)]}}}function li(n,t){const o=t.stacktrace||t.stack||"",i=fh(t);try{return n(o,i)}catch{}return[]}const Ah=/Minified React error #\d+;/i;function fh(n){if(n){if(typeof n.framesToPop=="number")return n.framesToPop;if(Ah.test(n.message))return 1}return 0}function uh(n){const t=n&&n.message;return t?t.error&&typeof t.error.message=="string"?t.error.message:t:"No error message"}function Eh(n,t,o,i){const c=o&&o.syntheticException||void 0,a=Ai(n,t,c,i);return Nn(a),a.level="error",o&&o.event_id&&(a.event_id=o.event_id),En(a)}function dh(n,t,o="info",i,c){const a=i&&i.syntheticException||void 0,s=fi(n,t,a,c);return s.level=o,i&&i.event_id&&(s.event_id=i.event_id),En(s)}function Ai(n,t,o,i,c){let a;if(qo(t)&&t.error)return si(n,t.error);if(Uc(t)||Mb(t)){const s=t;if("stack"in t)a=si(n,t);else{const l=s.name||(Uc(s)?"DOMError":"DOMException"),A=s.message?`${l}: ${s.message}`:l;a=fi(n,A,o,i),Yo(a,A)}return"code"in s&&(a.tags={...a.tags,"DOMException.code":`${s.code}`}),a}return Pc(t)?si(n,t):An(t)||yt(t)?(a=lh(n,t,o,c),Nn(a,{synthetic:!0}),a):(a=fi(n,t,o,i),Yo(a,`${t}`,void 0),Nn(a,{synthetic:!0}),a)}function fi(n,t,o,i){const c={};if(i&&o){const a=li(n,o);a.length&&(c.exception={values:[{value:t,stacktrace:{frames:a}}]})}if(zo(t)){const{__sentry_template_string__:a,__sentry_template_values__:s}=t;return c.logentry={message:a,params:s},c}return c.message=t,c}function gh(n,{isUnhandledRejection:t}){const o=Yb(n),i=t?"promise rejection":"exception";return qo(n)?`Event \`ErrorEvent\` captured as ${i} with message \`${n.message}\``:yt(n)?`Event \`${ph(n)}\` (type=${n.type}) captured as ${i}`:`Object captured as ${i} with keys: ${o}`}function ph(n){try{const t=Object.getPrototypeOf(n);return t?t.constructor.name:void 0}catch{}}const qa="GlobalHandlers",za=(n={})=>{const t={onerror:!0,onunhandledrejection:!0,...n};return{name:qa,setupOnce(){Error.stackTraceLimit=50},setup(o){t.onerror&&(mh(o),Ga("onerror")),t.onunhandledrejection&&(hh(o),Ga("onunhandledrejection"))}}},bh=se(qa,za);function mh(n){rh(t=>{const{stackParser:o,attachStacktrace:i}=Wa();if(V()!==n||ja())return;const{msg:c,url:a,line:s,column:l,error:A}=t,f=A===void 0&&Fe(c)?yh(c,a,s,l):Ha(Ai(o,A||c,void 0,i,!1),a,s,l);f.level="error",ma(f,{originalException:A,mechanism:{handled:!1,type:"onerror"}})})}function hh(n){ah(t=>{const{stackParser:o,attachStacktrace:i}=Wa();if(V()!==n||ja())return;const c=_h(t),a=Ho(c)?Bh(c):Ai(o,c,void 0,i,!0);a.level="error",ma(a,{originalException:c,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function _h(n){if(Ho(n))return n;const t=n;try{if("reason"in t)return t.reason;if("detail"in t&&"reason"in t.detail)return t.detail.reason}catch{}return n}function Bh(n){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}}function yh(n,t,o,i){const c=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let a=qo(n)?n.message:n,s="Error";const l=a.match(c);return l&&(s=l[1],a=l[2]),Ha({exception:{values:[{type:s,value:a}]}},t,o,i)}function Ha(n,t,o,i){const c=n.exception=n.exception||{},a=c.values=c.values||[],s=a[0]=a[0]||{},l=s.stacktrace=s.stacktrace||{},A=l.frames=l.frames||[],f=isNaN(parseInt(i,10))?void 0:i,u=isNaN(parseInt(o,10))?void 0:o,d=Fe(t)&&t.length>0?t:zb();return A.length===0&&A.push({colno:f,filename:d,function:"?",in_app:!0,lineno:u}),n}function Ga(n){xe&&S.log(`Global Handler attached: ${n}`)}function Wa(){const n=V();return n&&n.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const Ch=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Ka="TryCatch",Va=(n={})=>{const t={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...n};return{name:Ka,setupOnce(){t.setTimeout&&Z(M,"setTimeout",Ya),t.setInterval&&Z(M,"setInterval",Ya),t.requestAnimationFrame&&Z(M,"requestAnimationFrame",vh),t.XMLHttpRequest&&"XMLHttpRequest"in M&&Z(XMLHttpRequest.prototype,"send",kh);const o=t.eventTarget;o&&(Array.isArray(o)?o:Ch).forEach(wh)}}},Fh=se(Ka,Va);function Ya(n){return function(...t){const o=t[0];return t[0]=pn(o,{mechanism:{data:{function:Le(n)},handled:!1,type:"instrument"}}),n.apply(this,t)}}function vh(n){return function(t){return n.apply(this,[pn(t,{mechanism:{data:{function:"requestAnimationFrame",handler:Le(n)},handled:!1,type:"instrument"}})])}}function kh(n){return function(...t){const o=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(c=>{c in o&&typeof o[c]=="function"&&Z(o,c,function(a){const s={mechanism:{data:{function:c,handler:Le(a)},handled:!1,type:"instrument"}},l=Ko(a);return l&&(s.mechanism.data.handler=Le(l)),pn(a,s)})}),n.apply(this,t)}}function wh(n){const t=M,o=t[n]&&t[n].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(Z(o,"addEventListener",function(i){return function(c,a,s){try{typeof a.handleEvent=="function"&&(a.handleEvent=pn(a.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Le(a),target:n},handled:!1,type:"instrument"}}))}catch{}return i.apply(this,[c,pn(a,{mechanism:{data:{function:"addEventListener",handler:Le(a),target:n},handled:!1,type:"instrument"}}),s])}}),Z(o,"removeEventListener",function(i){return function(c,a,s){const l=a;try{const A=l&&l.__sentry_wrapped__;A&&i.call(this,c,A,s)}catch{}return i.call(this,c,l,s)}}))}function Sh(n){const t="console";Ye(t,n),Xe(t,xh)}function xh(){"console"in L&&Wo.forEach(function(n){n in L.console&&Z(L.console,n,function(t){return vt[n]=t,function(...o){Ee("console",{args:o,level:n});const c=vt[n];c&&c.apply(L.console,o)}})})}const mn=L,Th=1e3;let Xa,ui,Ei;function Ih(n){const t="dom";Ye(t,n),Xe(t,Oh)}function Oh(){if(!mn.document)return;const n=Ee.bind(null,"dom"),t=Qa(n,!0);mn.document.addEventListener("click",t,!1),mn.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(o=>{const i=mn[o]&&mn[o].prototype;!i||!i.hasOwnProperty||!i.hasOwnProperty("addEventListener")||(Z(i,"addEventListener",function(c){return function(a,s,l){if(a==="click"||a=="keypress")try{const A=this,f=A.__sentry_instrumentation_handlers__=A.__sentry_instrumentation_handlers__||{},u=f[a]=f[a]||{refCount:0};if(!u.handler){const d=Qa(n);u.handler=d,c.call(this,a,d,l)}u.refCount++}catch{}return c.call(this,a,s,l)}}),Z(i,"removeEventListener",function(c){return function(a,s,l){if(a==="click"||a=="keypress")try{const A=this,f=A.__sentry_instrumentation_handlers__||{},u=f[a];u&&(u.refCount--,u.refCount<=0&&(c.call(this,a,u.handler,l),u.handler=void 0,delete f[a]),Object.keys(f).length===0&&delete A.__sentry_instrumentation_handlers__)}catch{}return c.call(this,a,s,l)}}))})}function Rh(n){if(n.type!==ui)return!1;try{if(!n.target||n.target._sentryId!==Ei)return!1}catch{}return!0}function Dh(n,t){return n!=="keypress"?!1:!t||!t.tagName?!0:!(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)}function Qa(n,t=!1){return o=>{if(!o||o._sentryCaptured)return;const i=Nh(o);if(Dh(o.type,i))return;Dn(o,"_sentryCaptured",!0),i&&!i._sentryId&&Dn(i,"_sentryId",re());const c=o.type==="keypress"?"input":o.type;Rh(o)||(n({event:o,name:c,global:t}),ui=o.type,Ei=i?i._sentryId:void 0),clearTimeout(Xa),Xa=mn.setTimeout(()=>{Ei=void 0,ui=void 0},Th)}}function Nh(n){try{return n.target}catch{return null}}const Lh=L,Pn="__sentry_xhr_v3__";function Mh(n){const t="xhr";Ye(t,n),Xe(t,Ph)}function Ph(){if(!Lh.XMLHttpRequest)return;const n=XMLHttpRequest.prototype;Z(n,"open",function(t){return function(...o){const i=Date.now(),c=Fe(o[0])?o[0].toUpperCase():void 0,a=Uh(o[1]);if(!c||!a)return t.apply(this,o);this[Pn]={method:c,url:a,request_headers:{}},c==="POST"&&a.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const s=()=>{const l=this[Pn];if(l&&this.readyState===4){try{l.status_code=this.status}catch{}const A={args:[c,a],endTimestamp:Date.now(),startTimestamp:i,xhr:this};Ee("xhr",A)}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?Z(this,"onreadystatechange",function(l){return function(...A){return s(),l.apply(this,A)}}):this.addEventListener("readystatechange",s),Z(this,"setRequestHeader",function(l){return function(...A){const[f,u]=A,d=this[Pn];return d&&Fe(f)&&Fe(u)&&(d.request_headers[f.toLowerCase()]=u),l.apply(this,A)}}),t.apply(this,o)}}),Z(n,"send",function(t){return function(...o){const i=this[Pn];if(!i)return t.apply(this,o);o[0]!==void 0&&(i.body=o[0]);const c={args:[i.method,i.url],startTimestamp:Date.now(),xhr:this};return Ee("xhr",c),t.apply(this,o)}})}function Uh(n){if(Fe(n))return n;try{return n.toString()}catch{}}const Mt=Go();function Fv(){try{return new ErrorEvent(""),!0}catch{return!1}}function vv(){try{return new DOMError(""),!0}catch{return!1}}function kv(){try{return new DOMException(""),!0}catch{return!1}}function di(){if(!("fetch"in Mt))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function gi(n){return n&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function jh(){if(typeof EdgeRuntime=="string")return!0;if(!di())return!1;if(gi(Mt.fetch))return!0;let n=!1;const t=Mt.document;if(t&&typeof t.createElement=="function")try{const o=t.createElement("iframe");o.hidden=!0,t.head.appendChild(o),o.contentWindow&&o.contentWindow.fetch&&(n=gi(o.contentWindow.fetch)),t.head.removeChild(o)}catch(o){Rn&&S.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",o)}return n}function wv(){return"ReportingObserver"in Mt}function Sv(){if(!di())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function $h(n){const t="fetch";Ye(t,n),Xe(t,Jh)}function Jh(){jh()&&Z(L,"fetch",function(n){return function(...t){const{method:o,url:i}=qh(t),c={args:t,fetchData:{method:o,url:i},startTimestamp:Date.now()};return Ee("fetch",{...c}),n.apply(L,t).then(a=>{const s={...c,endTimestamp:Date.now(),response:a};return Ee("fetch",s),a},a=>{const s={...c,endTimestamp:Date.now(),error:a};throw Ee("fetch",s),a})}})}function pi(n,t){return!!n&&typeof n=="object"&&!!n[t]}function Za(n){return typeof n=="string"?n:n?pi(n,"url")?n.url:n.toString?n.toString():"":""}function qh(n){if(n.length===0)return{method:"GET",url:""};if(n.length===2){const[o,i]=n;return{url:Za(o),method:pi(i,"method")?String(i.method).toUpperCase():"GET"}}const t=n[0];return{url:Za(t),method:pi(t,"method")?String(t.method).toUpperCase():"GET"}}const Pt=Go();function zh(){const n=Pt.chrome,t=n&&n.app&&n.app.runtime,o="history"in Pt&&!!Pt.history.pushState&&!!Pt.history.replaceState;return!t&&o}const Un=L;let Ut;function es(n){const t="history";Ye(t,n),Xe(t,Hh)}function Hh(){if(!zh())return;const n=Un.onpopstate;Un.onpopstate=function(...o){const i=Un.location.href,c=Ut;if(Ut=i,Ee("history",{from:c,to:i}),n)try{return n.apply(this,o)}catch{}};function t(o){return function(...i){const c=i.length>2?i[2]:void 0;if(c){const a=Ut,s=String(c);Ut=s,Ee("history",{from:a,to:s})}return o.apply(this,i)}}Z(Un.history,"pushState",t),Z(Un.history,"replaceState",t)}const Gh=["fatal","error","warning","log","info","debug"];function xv(n){return ns(n)}function ns(n){return n==="warn"?"warning":Gh.includes(n)?n:"log"}function bi(n){if(!n)return{};const t=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};const o=t[6]||"",i=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],search:o,hash:i,relative:t[5]+o+i}}function Tv(n){return n.split(/[\?#]/,1)[0]}function Iv(n){return n.split(/\\?\//).filter(t=>t.length>0&&t!==",").length}function Ov(n){const{protocol:t,host:o,path:i}=n,c=o&&o.replace(/^.*@/,"[filtered]:[filtered]@").replace(/(:80)$/,"").replace(/(:443)$/,"")||"";return`${t?`${t}://`:""}${c}${i}`}const jt=1024,ts="Breadcrumbs",os=(n={})=>{const t={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...n};return{name:ts,setupOnce(){},setup(o){t.console&&Sh(Yh(o)),t.dom&&Ih(Vh(o,t.dom)),t.xhr&&Mh(Xh(o)),t.fetch&&$h(Qh(o)),t.history&&es(Zh(o)),t.sentry&&o.on&&o.on("beforeSendEvent",Kh(o))}}},Wh=se(ts,os);function Kh(n){return function(o){V()===n&&Ve({category:`sentry.${o.type==="transaction"?"transaction":"event"}`,event_id:o.event_id,level:o.level,message:Ne(o)},{event:o})}}function Vh(n,t){return function(i){if(V()!==n)return;let c,a,s=typeof t=="object"?t.serializeAttribute:void 0,l=typeof t=="object"&&typeof t.maxStringLength=="number"?t.maxStringLength:void 0;l&&l>jt&&(xe&&S.warn(`\`dom.maxStringLength\` cannot exceed ${jt}, but a value of ${l} was configured. Sentry will use ${jt} instead.`),l=jt),typeof s=="string"&&(s=[s]);try{const f=i.event,u=e_(f)?f.target:f;c=Jc(u,{keyAttrs:s,maxStringLength:l}),a=Hb(u)}catch{c="<unknown>"}if(c.length===0)return;const A={category:`ui.${i.name}`,message:c};a&&(A.data={"ui.component_name":a}),Ve(A,{event:i.event,name:i.name,global:i.global})}}function Yh(n){return function(o){if(V()!==n)return;const i={category:"console",data:{arguments:o.args,logger:"console"},level:ns(o.level),message:qc(o.args," ")};if(o.level==="assert")if(o.args[0]===!1)i.message=`Assertion failed: ${qc(o.args.slice(1)," ")||"console.assert"}`,i.data.arguments=o.args.slice(1);else return;Ve(i,{input:o.args,level:o.level})}}function Xh(n){return function(o){if(V()!==n)return;const{startTimestamp:i,endTimestamp:c}=o,a=o.xhr[Pn];if(!i||!c||!a)return;const{method:s,url:l,status_code:A,body:f}=a,u={method:s,url:l,status_code:A},d={xhr:o.xhr,input:f,startTimestamp:i,endTimestamp:c};Ve({category:"xhr",data:u,type:"http"},d)}}function Qh(n){return function(o){if(V()!==n)return;const{startTimestamp:i,endTimestamp:c}=o;if(c&&!(o.fetchData.url.match(/sentry_key/)&&o.fetchData.method==="POST"))if(o.error){const a=o.fetchData,s={data:o.error,input:o.args,startTimestamp:i,endTimestamp:c};Ve({category:"fetch",data:a,level:"error",type:"http"},s)}else{const a=o.response,s={...o.fetchData,status_code:a&&a.status},l={input:o.args,response:a,startTimestamp:i,endTimestamp:c};Ve({category:"fetch",data:s,type:"http"},l)}}}function Zh(n){return function(o){if(V()!==n)return;let i=o.from,c=o.to;const a=bi(M.location.href);let s=i?bi(i):void 0;const l=bi(c);(!s||!s.path)&&(s=a),a.protocol===l.protocol&&a.host===l.host&&(c=l.relative),a.protocol===s.protocol&&a.host===s.host&&(i=s.relative),Ve({category:"navigation",data:{from:i,to:c}})}}function e_(n){return!!n&&!!n.target}const n_="cause",t_=5,is="LinkedErrors",rs=(n={})=>{const t=n.limit||t_,o=n.key||n_;return{name:is,setupOnce(){},preprocessEvent(i,c,a){const s=a.getOptions();Da(Ja,s.stackParser,s.maxValueLength,o,t,i,c)}}},o_=se(is,rs),cs="HttpContext",as=()=>({name:cs,setupOnce(){},preprocessEvent(n){if(!M.navigator&&!M.location&&!M.document)return;const t=n.request&&n.request.url||M.location&&M.location.href,{referrer:o}=M.document||{},{userAgent:i}=M.navigator||{},c={...n.request&&n.request.headers,...o&&{Referer:o},...i&&{"User-Agent":i}},a={...n.request,...t&&{url:t},headers:c};n.request=a}}),i_=se(cs,as),ss="Dedupe",ls=()=>{let n;return{name:ss,setupOnce(){},processEvent(t){if(t.type)return t;try{if(c_(t,n))return xe&&S.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return n=t}}},r_=se(ss,ls);function c_(n,t){return t?!!(a_(n,t)||s_(n,t)):!1}function a_(n,t){const o=n.message,i=t.message;return!(!o&&!i||o&&!i||!o&&i||o!==i||!fs(n,t)||!As(n,t))}function s_(n,t){const o=us(t),i=us(n);return!(!o||!i||o.type!==i.type||o.value!==i.value||!fs(n,t)||!As(n,t))}function As(n,t){let o=Es(n),i=Es(t);if(!o&&!i)return!0;if(o&&!i||!o&&i||(o=o,i=i,i.length!==o.length))return!1;for(let c=0;c<i.length;c++){const a=i[c],s=o[c];if(a.filename!==s.filename||a.lineno!==s.lineno||a.colno!==s.colno||a.function!==s.function)return!1}return!0}function fs(n,t){let o=n.fingerprint,i=t.fingerprint;if(!o&&!i)return!0;if(o&&!i||!o&&i)return!1;o=o,i=i;try{return o.join("")===i.join("")}catch{return!1}}function us(n){return n.exception&&n.exception.values&&n.exception.values[0]}function Es(n){const t=n.exception;if(t)try{return t.values[0].stacktrace.frames}catch{return}}let ds={};M.Sentry&&M.Sentry.Integrations&&(ds=M.Sentry.Integrations);const l_={...ds,...oh,...m},A_="sentry-ipc";var Me;(function(n){n.RENDERER_START="sentry-electron.renderer-start",n.EVENT="sentry-electron.event",n.SCOPE="sentry-electron.scope",n.ENVELOPE="sentry-electron.envelope",n.STATUS="sentry-electron.status",n.ADD_METRIC="sentry-electron.add-metric"})(Me||(Me={}));const f_="sentry-electron-renderer-id";function hn(n){return`${A_}://${n}/sentry_key`}function u_(){if(window.__SENTRY_IPC__)return window.__SENTRY_IPC__;{S.log("IPC was not configured in preload script, falling back to custom protocol and fetch");const n=window.__SENTRY_RENDERER_ID__=re(),t={[f_]:n};return{sendRendererStart:()=>{fetch(hn(Me.RENDERER_START),{method:"POST",body:"",headers:t}).catch(()=>{console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`)})},sendScope:o=>{fetch(hn(Me.SCOPE),{method:"POST",body:o,headers:t}).catch(()=>{})},sendEvent:o=>{fetch(hn(Me.EVENT),{method:"POST",body:o,headers:t}).catch(()=>{})},sendEnvelope:o=>{fetch(hn(Me.ENVELOPE),{method:"POST",body:o,headers:t}).catch(()=>{})},sendStatus:o=>{fetch(hn(Me.STATUS),{method:"POST",body:JSON.stringify({status:o}),headers:t}).catch(()=>{})},sendAddMetric:o=>{fetch(hn(Me.ADD_METRIC),{method:"POST",body:JSON.stringify(o),headers:t}).catch(()=>{})}}}}let $t;function jn(){return $t||($t=u_(),$t.sendRendererStart()),$t}const gs="ScopeToMain",ps=()=>({name:gs,setupOnce(){},setup(){const n=Se();if(n){const t=jn();n.addScopeListener(o=>{t.sendScope(JSON.stringify(me(o.getScopeData(),20,2e3))),n.clearBreadcrumbs(),n.clearAttachments()})}}}),E_=se(gs,ps);class Jt{constructor(){this.name=Jt.id}setupOnce(t){const o=jn();t(i=>(i.breadcrumbs=i.breadcrumbs||[],i.environment=void 0,o.sendEvent(JSON.stringify(me(i,20,2e3))),null))}}Jt.id="EventToMain";const bs="c",ms="g",mi="s",hs="d",d_=5e3,Mv=1e4,Pv=1e4;function g_(n,t,o,i){const c=Object.entries(ue(i)).sort((a,s)=>a[0].localeCompare(s[0]));return`${n}${t}${o}${c}`}function p_(n){let t=0;for(let o=0;o<n.length;o++){const i=n.charCodeAt(o);t=(t<<5)-t+i,t&=t}return t>>>0}function b_(n){let t="";for(const o of n){const i=Object.entries(o.tags),c=i.length>0?`|#${i.map(([a,s])=>`${a}:${s}`).join(",")}`:"";t+=`${o.name}@${o.unit}:${o.metric}|${o.metricType}${c}|T${o.timestamp}
`}return t}function m_(n){return n.replace(/[^\w]+/gi,"_")}function h_(n){return n.replace(/[^\w\-.]+/gi,"_")}function __(n){return n.replace(/[^\w\-./]+/gi,"")}const B_=[[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\\","\\\\"],["|","\\u{7c}"],[",","\\u{2c}"]];function y_(n){for(const[t,o]of B_)if(n===t)return o;return n}function C_(n){return[...n].reduce((t,o)=>t+y_(o),"")}function F_(n){const t={};for(const o in n)if(Object.prototype.hasOwnProperty.call(n,o)){const i=__(o);t[i]=C_(String(n[o]))}return t}class v_{constructor(t){this._value=t}get weight(){return 1}add(t){this._value+=t}toString(){return`${this._value}`}}class k_{constructor(t){this._last=t,this._min=t,this._max=t,this._sum=t,this._count=1}get weight(){return 5}add(t){this._last=t,t<this._min&&(this._min=t),t>this._max&&(this._max=t),this._sum+=t,this._count++}toString(){return`${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`}}class w_{constructor(t){this._value=[t]}get weight(){return this._value.length}add(t){this._value.push(t)}toString(){return this._value.join(":")}}class S_{constructor(t){this.first=t,this._value=new Set([t])}get weight(){return this._value.size}add(t){this._value.add(t)}toString(){return Array.from(this._value).map(t=>typeof t=="string"?p_(t):t).join(":")}}const x_={[bs]:v_,[ms]:k_,[hs]:w_,[mi]:S_};function Uv(n,t,o=()=>{},i=()=>{}){const c=getCurrentHub(),a=getCurrentScope(),s=a.getSpan(),l=zt(n),A=qt(c,{parentSpan:s,spanContext:l,forceTransaction:!1,scope:a});return a.setSpan(A),handleCallbackErrors(()=>t(A),f=>{A&&A.setStatus("internal_error"),o(f,A)},()=>{A&&A.end(),a.setSpan(s),i()})}function jv(n,t){const o=zt(n);return runWithAsyncContext(()=>withScope(n.scope,i=>{const c=getCurrentHub(),a=i.getSpan(),l=n.onlyIfParent&&!a?void 0:qt(c,{parentSpan:a,spanContext:o,forceTransaction:n.forceTransaction,scope:i});return handleCallbackErrors(()=>t(l),()=>{if(l){const{status:A}=spanToJSON(l);(!A||A==="ok")&&l.setStatus("internal_error")}},()=>l&&l.end())}))}const $v=null;function Jv(n,t){const o=zt(n);return runWithAsyncContext(()=>withScope(n.scope,i=>{const c=getCurrentHub(),a=i.getSpan(),l=n.onlyIfParent&&!a?void 0:qt(c,{parentSpan:a,spanContext:o,forceTransaction:n.forceTransaction,scope:i});function A(){l&&l.end()}return handleCallbackErrors(()=>t(l,A),()=>{if(l&&l.isRecording()){const{status:f}=spanToJSON(l);(!f||f==="ok")&&l.setStatus("internal_error")}})}))}function qv(n){if(!hasTracingEnabled())return;const t=zt(n),o=getCurrentHub(),i=n.scope?n.scope.getSpan():_s();if(n.onlyIfParent&&!i)return;const s=(n.scope||getCurrentScope()).clone();return qt(o,{parentSpan:i,spanContext:t,forceTransaction:n.forceTransaction,scope:s})}function _s(){return Se().getSpan()}const zv=({sentryTrace:n,baggage:t},o)=>{const i=getCurrentScope(),{traceparentData:c,dynamicSamplingContext:a,propagationContext:s}=tracingContextFromHeaders(n,t);i.setPropagationContext(s),DEBUG_BUILD&&c&&logger.log(`[Tracing] Continuing trace ${c.traceId}.`);const l={...c,metadata:dropUndefinedKeys({dynamicSamplingContext:a})};return o?runWithAsyncContext(()=>o(l)):l};function qt(n,{parentSpan:t,spanContext:o,forceTransaction:i,scope:c}){if(!hasTracingEnabled())return;const a=getIsolationScope();let s;if(t&&!i)s=t.startChild(o);else if(t){const l=getDynamicSamplingContextFromSpan(t),{traceId:A,spanId:f}=t.spanContext(),u=spanIsSampled(t);s=n.startTransaction({traceId:A,parentSpanId:f,parentSampled:u,...o,metadata:{dynamicSamplingContext:l,...o.metadata}})}else{const{traceId:l,dsc:A,parentSpanId:f,sampled:u}={...a.getPropagationContext(),...c.getPropagationContext()};s=n.startTransaction({traceId:l,parentSpanId:f,parentSampled:u,...o,metadata:{dynamicSamplingContext:A,...o.metadata}})}return c.setSpan(s),T_(s,c,a),s}function zt(n){if(n.startTime){const t={...n};return t.startTimestamp=spanTimeInputToSeconds(n.startTime),delete t.startTime,t}return n}const Bs="_sentryScope",ys="_sentryIsolationScope";function T_(n,t,o){n&&(addNonEnumerableProperty(n,ys,o),addNonEnumerableProperty(n,Bs,t))}function Hv(n){return{scope:n[Bs],isolationScope:n[ys]}}let $n;function Cs(n){return $n?$n.get(n):void 0}function Gv(n){const t=Cs(n);if(!t)return;const o={};for(const[,[i,c]]of t)o[i]||(o[i]=[]),o[i].push(dropUndefinedKeys(c));return o}function I_(n,t,o,i,c,a){const s=_s();if(s){const l=Cs(s)||new Map,A=`${n}:${t}@${i}`,f=l.get(a);if(f){const[,u]=f;l.set(a,[A,{min:Math.min(u.min,o),max:Math.max(u.max,o),count:u.count+=1,sum:u.sum+=o,tags:u.tags}])}else l.set(a,[A,{min:o,max:o,count:1,sum:o,tags:c}]);$n||($n=new WeakMap),$n.set(s,l)}}class O_{constructor(t){this._client=t,this._buckets=new Map,this._interval=setInterval(()=>this.flush(),d_)}add(t,o,i,c="none",a={},s=Xo()){const l=Math.floor(s),A=h_(o),f=F_(a),u=m_(c),d=g_(t,A,u,f);let g=this._buckets.get(d);const b=g&&t===mi?g.metric.weight:0;g?(g.metric.add(i),g.timestamp<l&&(g.timestamp=l)):(g={metric:new x_[t](i),timestamp:l,metricType:t,name:A,unit:u,tags:f},this._buckets.set(d,g));const F=typeof i=="string"?g.metric.weight-b:i;I_(t,A,F,u,a,d)}flush(){if(this._buckets.size!==0){if(this._client.captureAggregateMetrics){const t=Array.from(this._buckets).map(([,o])=>o);this._client.captureAggregateMetrics(t)}this._buckets.clear()}}close(){clearInterval(this._interval),this.flush()}}const Fs="MetricsAggregator",vs=()=>({name:Fs,setupOnce(){},setup(n){n.metricsAggregator=new O_(n)}}),R_=se(Fs,vs);function Ht(n,t,o,i={}){const c=V(),a=Se();if(c){if(!c.metricsAggregator){P&&S.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");return}const{unit:s,tags:l,timestamp:A}=i,{release:f,environment:u}=c.getOptions(),d=a.getTransaction(),g={};f&&(g.release=f),u&&(g.environment=u),d&&(g.transaction=dn(d).description||""),P&&S.log(`Adding value of ${o} to ${n} metric ${t}`),c.metricsAggregator.add(n,t,o,s,{...g,...l},A)}}function D_(n,t=1,o){Ht(bs,n,t,o)}function N_(n,t,o){Ht(hs,n,t,o)}function L_(n,t,o){Ht(mi,n,t,o)}function M_(n,t,o){Ht(ms,n,t,o)}const P_={increment:D_,distribution:N_,set:L_,gauge:M_,MetricsAggregator:R_,metricsAggregatorIntegration:vs};class U_{constructor(){this._ipc=jn()}add(t,o,i,c,a,s){this._ipc.sendAddMetric({metricType:t,name:o,value:i,unit:c,tags:a,timestamp:s})}flush(){}close(){}toString(){return""}}const ks="MetricsAggregator",ws=()=>({name:ks,setupOnce(){},setup(n){n.metricsAggregator=new U_}}),j_=se(ks,ws);function $_(n,t){t.debug===!0&&(P?S.enable():kt(()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})),Se().update(t.initialScope);const i=new n(t);J_(i),q_(i)}function J_(n){const o=we().getStackTop();o.client=n,o.scope.setClient(n)}function q_(n){n.init?n.init():n.setupIntegrations&&n.setupIntegrations()}const z_=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function H_(n){return n==="http"||n==="https"}function Jn(n,t=!1){const{host:o,path:i,pass:c,port:a,projectId:s,protocol:l,publicKey:A}=n;return`${l}://${A}${t&&c?`:${c}`:""}@${o}${a?`:${a}`:""}/${i&&`${i}/`}${s}`}function G_(n){const t=z_.exec(n);if(!t){kt(()=>{console.error(`Invalid Sentry Dsn: ${n}`)});return}const[o,i,c="",a,s="",l]=t.slice(1);let A="",f=l;const u=f.split("/");if(u.length>1&&(A=u.slice(0,-1).join("/"),f=u.pop()),f){const d=f.match(/^\d+/);d&&(f=d[0])}return Ss({host:a,pass:c,path:A,projectId:f,port:s,protocol:o,publicKey:i})}function Ss(n){return{protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function W_(n){if(!Rn)return!0;const{port:t,projectId:o,protocol:i}=n;return["protocol","publicKey","host","projectId"].find(s=>n[s]?!1:(S.error(`Invalid Sentry Dsn: ${s} missing`),!0))?!1:o.match(/^\d+$/)?H_(i)?t&&isNaN(parseInt(t,10))?(S.error(`Invalid Sentry Dsn: Invalid port ${t}`),!1):!0:(S.error(`Invalid Sentry Dsn: Invalid protocol ${i}`),!1):(S.error(`Invalid Sentry Dsn: Invalid projectId ${o}`),!1)}function K_(n){const t=typeof n=="string"?G_(n):Ss(n);if(!(!t||!W_(t)))return t}function _n(n,t=[]){return[n,t]}function V_(n,t){const[o,i]=n;return[o,[...i,t]]}function hi(n,t){const o=n[1];for(const i of o){const c=i[0].type;if(t(i,c))return!0}return!1}function Kv(n,t){return hi(n,(o,i)=>t.includes(i))}function _i(n,t){return(t||new TextEncoder).encode(n)}function Y_(n,t){const[o,i]=n;let c=JSON.stringify(o);function a(s){typeof c=="string"?c=typeof s=="string"?c+s:[_i(c,t),s]:c.push(typeof s=="string"?_i(s,t):s)}for(const s of i){const[l,A]=s;if(a(`
${JSON.stringify(l)}
`),typeof A=="string"||A instanceof Uint8Array)a(A);else{let f;try{f=JSON.stringify(A)}catch{f=JSON.stringify(me(A))}a(f)}}return typeof c=="string"?c:X_(c)}function X_(n){const t=n.reduce((c,a)=>c+a.length,0),o=new Uint8Array(t);let i=0;for(const c of n)o.set(c,i),i+=c.length;return o}function Vv(n,t,o){let i=typeof n=="string"?t.encode(n):n;function c(A){const f=i.subarray(0,A);return i=i.subarray(A+1),f}function a(){let A=i.indexOf(10);return A<0&&(A=i.length),JSON.parse(o.decode(c(A)))}const s=a(),l=[];for(;i.length;){const A=a(),f=typeof A.length=="number"?A.length:void 0;l.push([A,f?c(f):a()])}return[s,l]}function Q_(n,t){const o=typeof n.data=="string"?_i(n.data,t):n.data;return[ue({type:"attachment",length:o.length,filename:n.filename,content_type:n.contentType,attachment_type:n.attachmentType}),o]}const Z_={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket"};function xs(n){return Z_[n]}function Ts(n){if(!n||!n.sdk)return;const{name:t,version:o}=n.sdk;return{name:t,version:o}}function eB(n,t,o,i){const c=n.sdkProcessingMetadata&&n.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:n.event_id,sent_at:new Date().toISOString(),...t&&{sdk:t},...!!o&&i&&{dsn:Jn(i)},...c&&{trace:ue({...c})}}}class he extends Error{constructor(t,o="warn"){super(t),this.message=t,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=o}}const nB="7";function Is(n){const t=n.protocol?`${n.protocol}:`:"",o=n.port?`:${n.port}`:"";return`${t}//${n.host}${o}${n.path?`/${n.path}`:""}/api/`}function tB(n){return`${Is(n)}${n.projectId}/envelope/`}function oB(n,t){return Vb({sentry_key:n.publicKey,sentry_version:nB,...t&&{sentry_client:`${t.name}/${t.version}`}})}function iB(n,t={}){const o=typeof t=="string"?t:t.tunnel,i=typeof t=="string"||!t._metadata?void 0:t._metadata.sdk;return o||`${tB(n)}?${oB(n,i)}`}function Yv(n,t){const o=makeDsn(n);if(!o)return"";const i=`${Is(o)}embed/error-page/`;let c=`dsn=${dsnToString(o)}`;for(const a in t)if(a!=="dsn"&&a!=="onClose")if(a==="user"){const s=t.user;if(!s)continue;s.name&&(c+=`&name=${encodeURIComponent(s.name)}`),s.email&&(c+=`&email=${encodeURIComponent(s.email)}`)}else c+=`&${encodeURIComponent(a)}=${encodeURIComponent(t[a])}`;return`${i}?${c}`}function rB(n,t){return t&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||t.name,n.sdk.version=n.sdk.version||t.version,n.sdk.integrations=[...n.sdk.integrations||[],...t.integrations||[]],n.sdk.packages=[...n.sdk.packages||[],...t.packages||[]]),n}function cB(n,t,o,i){const c=Ts(o),a={sent_at:new Date().toISOString(),...c&&{sdk:c},...!!i&&t&&{dsn:Jn(t)}},s="aggregates"in n?[{type:"sessions"},n]:[{type:"session"},n.toJSON()];return _n(a,[s])}function aB(n,t,o,i){const c=Ts(o),a=n.type&&n.type!=="replay_event"?n.type:"event";rB(n,o&&o.sdk);const s=eB(n,c,i,t);return delete n.sdkProcessingMetadata,_n(s,[[{type:a},n]])}function sB(n,t,o,i){const c={sent_at:new Date().toISOString()};o&&o.sdk&&(c.sdk={name:o.sdk.name,version:o.sdk.version}),i&&t&&(c.dsn=Jn(t));const a=lB(n);return _n(c,[a])}function lB(n){const t=b_(n);return[{type:"statsd",length:t.length},t]}const Os="Not capturing exception because it's already been captured.";class AB{constructor(t){if(this._options=t,this._integrations={},this._integrationsInitialized=!1,this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],t.dsn?this._dsn=K_(t.dsn):P&&S.warn("No DSN provided, client will not send events."),this._dsn){const o=iB(this._dsn,t);this._transport=t.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...t.transportOptions,url:o})}}captureException(t,o,i){if(Vc(t)){P&&S.log(Os);return}let c=o&&o.event_id;return this._process(this.eventFromException(t,o).then(a=>this._captureEvent(a,o,i)).then(a=>{c=a})),c}captureMessage(t,o,i,c){let a=i&&i.event_id;const s=zo(t)?t:String(t),l=Ho(t)?this.eventFromMessage(s,o,i):this.eventFromException(t,i);return this._process(l.then(A=>this._captureEvent(A,i,c)).then(A=>{a=A})),a}captureEvent(t,o,i){if(o&&o.originalException&&Vc(o.originalException)){P&&S.log(Os);return}let c=o&&o.event_id;const s=(t.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(t,o,s||i).then(l=>{c=l})),c}captureSession(t){typeof t.release!="string"?P&&S.warn("Discarded session because of missing or non-string release"):(this.sendSession(t),Ke(t,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(t){const o=this._transport;return o?(this.metricsAggregator&&this.metricsAggregator.flush(),this._isClientDoneProcessing(t).then(i=>o.flush(t).then(c=>i&&c))):En(!0)}close(t){return this.flush(t).then(o=>(this.getOptions().enabled=!1,this.metricsAggregator&&this.metricsAggregator.close(),o))}getEventProcessors(){return this._eventProcessors}addEventProcessor(t){this._eventProcessors.push(t)}setupIntegrations(t){(t&&!this._integrationsInitialized||this._isEnabled()&&!this._integrationsInitialized)&&this._setupIntegrations()}init(){this._isEnabled()&&this._setupIntegrations()}getIntegrationById(t){return this.getIntegrationByName(t)}getIntegrationByName(t){return this._integrations[t]}getIntegration(t){try{return this._integrations[t.id]||null}catch{return P&&S.warn(`Cannot retrieve integration ${t.id} from the current Client`),null}}addIntegration(t){const o=this._integrations[t.name];wa(this,t,this._integrations),o||ka(this,[t])}sendEvent(t,o={}){this.emit("beforeSendEvent",t,o);let i=aB(t,this._dsn,this._options._metadata,this._options.tunnel);for(const a of o.attachments||[])i=V_(i,Q_(a,this._options.transportOptions&&this._options.transportOptions.textEncoder));const c=this._sendEnvelope(i);c&&c.then(a=>this.emit("afterSendEvent",t,a),null)}sendSession(t){const o=cB(t,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(o)}recordDroppedEvent(t,o,i){if(this._options.sendClientReports){const c=`${t}:${o}`;P&&S.log(`Adding outcome: "${c}"`),this._outcomes[c]=this._outcomes[c]+1||1}}captureAggregateMetrics(t){P&&S.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);const o=sB(t,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(o)}on(t,o){this._hooks[t]||(this._hooks[t]=[]),this._hooks[t].push(o)}emit(t,...o){this._hooks[t]&&this._hooks[t].forEach(i=>i(...o))}_setupIntegrations(){const{integrations:t}=this._options;this._integrations=Lm(this,t),ka(this,t),this._integrationsInitialized=!0}_updateSessionFromEvent(t,o){let i=!1,c=!1;const a=o.exception&&o.exception.values;if(a){c=!0;for(const A of a){const f=A.mechanism;if(f&&f.handled===!1){i=!0;break}}}const s=t.status==="ok";(s&&t.errors===0||s&&i)&&(Ke(t,{...i&&{status:"crashed"},errors:t.errors||Number(c||i)}),this.captureSession(t))}_isClientDoneProcessing(t){return new ce(o=>{let i=0;const c=1,a=setInterval(()=>{this._numProcessing==0?(clearInterval(a),o(!0)):(i+=c,t&&i>=t&&(clearInterval(a),o(!1)))},c)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(t,o,i,c=Ot()){const a=this.getOptions(),s=Object.keys(this._integrations);return!o.integrations&&s.length>0&&(o.integrations=s),this.emit("preprocessEvent",t,o),Cm(a,t,o,i,this,c).then(l=>{if(l===null)return l;const A={...c.getPropagationContext(),...i?i.getPropagationContext():void 0};if(!(l.contexts&&l.contexts.trace)&&A){const{traceId:u,spanId:d,parentSpanId:g,dsc:b}=A;l.contexts={trace:{trace_id:u,span_id:d,parent_span_id:g},...l.contexts};const F=b||oa(u,this,i);l.sdkProcessingMetadata={dynamicSamplingContext:F,...l.sdkProcessingMetadata}}return l})}_captureEvent(t,o={},i){return this._processEvent(t,o,i).then(c=>c.event_id,c=>{if(P){const a=c;a.logLevel==="log"?S.log(a.message):S.warn(a)}})}_processEvent(t,o,i){const c=this.getOptions(),{sampleRate:a}=c,s=Ds(t),l=Rs(t),A=t.type||"error",f=`before send for type \`${A}\``;if(l&&typeof a=="number"&&Math.random()>a)return this.recordDroppedEvent("sample_rate","error",t),Qo(new he(`Discarding event because it's not included in the random sample (sampling rate = ${a})`,"log"));const u=A==="replay_event"?"replay":A,g=(t.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(t,o,i,g).then(b=>{if(b===null)throw this.recordDroppedEvent("event_processor",u,t),new he("An event processor returned `null`, will not send event.","log");if(o.data&&o.data.__sentry__===!0)return b;const x=uB(c,b,o);return fB(x,f)}).then(b=>{if(b===null)throw this.recordDroppedEvent("before_send",u,t),new he(`${f} returned \`null\`, will not send event.`,"log");const F=i&&i.getSession();!s&&F&&this._updateSessionFromEvent(F,b);const x=b.transaction_info;if(s&&x&&b.transaction!==t.transaction){const w="custom";b.transaction_info={...x,source:w}}return this.sendEvent(b,o),b}).then(null,b=>{throw b instanceof he?b:(this.captureException(b,{data:{__sentry__:!0},originalException:b}),new he(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${b}`))})}_process(t){this._numProcessing++,t.then(o=>(this._numProcessing--,o),o=>(this._numProcessing--,o))}_sendEnvelope(t){if(this.emit("beforeEnvelope",t),this._isEnabled()&&this._transport)return this._transport.send(t).then(null,o=>{P&&S.error("Error while sending event:",o)});P&&S.error("Transport disabled")}_clearOutcomes(){const t=this._outcomes;return this._outcomes={},Object.keys(t).map(o=>{const[i,c]=o.split(":");return{reason:i,category:c,quantity:t[o]}})}}function fB(n,t){const o=`${t} must return \`null\` or a valid event.`;if(Ct(n))return n.then(i=>{if(!An(i)&&i!==null)throw new he(o);return i},i=>{throw new he(`${t} rejected with ${i}`)});if(!An(n)&&n!==null)throw new he(o);return n}function uB(n,t,o){const{beforeSend:i,beforeSendTransaction:c}=n;return Rs(t)&&i?i(t,o):Ds(t)&&c?c(t,o):t}function Rs(n){return n.type===void 0}function Ds(n){return n.type==="transaction"}function Xv(n){const t=getClient();!t||!t.addEventProcessor||t.addEventProcessor(n)}function EB(n,t,o=[t],i="npm"){const c=n._metadata||{};c.sdk||(c.sdk={name:`sentry.javascript.${t}`,packages:o.map(a=>({name:`${i}:@sentry/${a}`,version:ei})),version:ei}),n._metadata=c}function Qv(){return typeof __SENTRY_BROWSER_BUNDLE__!="undefined"&&!!__SENTRY_BROWSER_BUNDLE__}function dB(){return"npm"}function gB(n,t,o){const i=[{type:"client_report"},{timestamp:o||Ln(),discarded_events:n}];return _n(t?{dsn:t}:{},[i])}function pB(n,{metadata:t,tunnel:o,dsn:i}){const c={event_id:n.event_id,sent_at:new Date().toISOString(),...t&&t.sdk&&{sdk:{name:t.sdk.name,version:t.sdk.version}},...!!o&&!!i&&{dsn:Jn(i)}},a=bB(n);return _n(c,[a])}function bB(n){return[{type:"user_report"},n]}class mB extends AB{constructor(t){const o=M.SENTRY_SDK_SOURCE||dB();EB(t,"browser",["browser"],o),super(t),t.sendClientReports&&M.document&&M.document.addEventListener("visibilitychange",()=>{M.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(t,o){return Eh(this._options.stackParser,t,o,this._options.attachStacktrace)}eventFromMessage(t,o="info",i){return dh(this._options.stackParser,t,o,i,this._options.attachStacktrace)}captureUserFeedback(t){if(!this._isEnabled()){xe&&S.warn("SDK not enabled, will not capture user feedback.");return}const o=pB(t,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this._sendEnvelope(o)}_prepareEvent(t,o,i){return t.platform=t.platform||"javascript",super._prepareEvent(t,o,i)}_flushOutcomes(){const t=this._clearOutcomes();if(t.length===0){xe&&S.log("No outcomes to send");return}if(!this._dsn){xe&&S.log("No dsn provided, will not send outcomes");return}xe&&S.log("Sending outcomes:",t);const o=gB(t,this._options.tunnel&&Jn(this._dsn));this._sendEnvelope(o)}}const Bn="?",hB=10,_B=20,BB=30,yB=40,CB=50;function qn(n,t,o,i){const c={filename:n,function:t,in_app:!0};return o!==void 0&&(c.lineno=o),i!==void 0&&(c.colno=i),c}const FB=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,vB=/\((\S*)(?::(\d+))(?::(\d+))\)/,Ns=[BB,n=>{const t=FB.exec(n);if(t){if(t[2]&&t[2].indexOf("eval")===0){const a=vB.exec(t[2]);a&&(t[2]=a[1],t[3]=a[2],t[4]=a[3])}const[i,c]=Ls(t[1]||Bn,t[2]);return qn(c,i,t[3]?+t[3]:void 0,t[4]?+t[4]:void 0)}}],kB=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,wB=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,SB=[CB,n=>{const t=kB.exec(n);if(t){if(t[3]&&t[3].indexOf(" > eval")>-1){const a=wB.exec(t[3]);a&&(t[1]=t[1]||"eval",t[3]=a[1],t[4]=a[2],t[5]="")}let i=t[3],c=t[1]||Bn;return[c,i]=Ls(c,i),qn(i,c,t[4]?+t[4]:void 0,t[5]?+t[5]:void 0)}}],xB=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,TB=[yB,n=>{const t=xB.exec(n);return t?qn(t[2],t[1]||Bn,+t[3],t[4]?+t[4]:void 0):void 0}],IB=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,o0=[hB,n=>{const t=IB.exec(n);return t?qn(t[2],t[3]||Bn,+t[1]):void 0}],OB=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,r0=[_B,n=>{const t=OB.exec(n);return t?qn(t[5],t[3]||t[4]||Bn,+t[1],+t[2]):void 0}],RB=Ea(...[Ns,SB,TB]),Ls=(n,t)=>{const o=n.indexOf("safari-extension")!==-1,i=n.indexOf("safari-web-extension")!==-1;return o||i?[n.indexOf("@")!==-1?n.split("@")[0]:Bn,o?`safari-extension:${t}`:`safari-web-extension:${t}`]:[n,t]};function DB(n){const t=[];function o(){return n===void 0||t.length<n}function i(s){return t.splice(t.indexOf(s),1)[0]}function c(s){if(!o())return Qo(new he("Not adding Promise because buffer limit was reached."));const l=s();return t.indexOf(l)===-1&&t.push(l),l.then(()=>i(l)).then(null,()=>i(l).then(null,()=>{})),l}function a(s){return new ce((l,A)=>{let f=t.length;if(!f)return l(!0);const u=setTimeout(()=>{s&&s>0&&l(!1)},s);t.forEach(d=>{En(d).then(()=>{--f||(clearTimeout(u),l(!0))},A)})})}return{$:t,add:c,drain:a}}const NB=60*1e3;function LB(n,t=Date.now()){const o=parseInt(`${n}`,10);if(!isNaN(o))return o*1e3;const i=Date.parse(`${n}`);return isNaN(i)?NB:i-t}function MB(n,t){return n[t]||n.all||0}function PB(n,t,o=Date.now()){return MB(n,t)>o}function UB(n,{statusCode:t,headers:o},i=Date.now()){const c={...n},a=o&&o["x-sentry-rate-limits"],s=o&&o["retry-after"];if(a)for(const l of a.trim().split(",")){const[A,f,,,u]=l.split(":",5),d=parseInt(A,10),g=(isNaN(d)?60:d)*1e3;if(!f)c.all=i+g;else for(const b of f.split(";"))b==="metric_bucket"?(!u||u.split(";").includes("custom"))&&(c[b]=i+g):c[b]=i+g}else s?c.all=i+LB(s,i):t===429&&(c.all=i+60*1e3);return c}const jB=30;function Bi(n,t,o=DB(n.bufferSize||jB)){let i={};const c=s=>o.drain(s);function a(s){const l=[];if(hi(s,(d,g)=>{const b=xs(g);if(PB(i,b)){const F=Ms(d,g);n.recordDroppedEvent("ratelimit_backoff",b,F)}else l.push(d)}),l.length===0)return En();const A=_n(s[0],l),f=d=>{hi(A,(g,b)=>{const F=Ms(g,b);n.recordDroppedEvent(d,xs(b),F)})},u=()=>t({body:Y_(A,n.textEncoder)}).then(d=>(d.statusCode!==void 0&&(d.statusCode<200||d.statusCode>=300)&&P&&S.warn(`Sentry responded with status code ${d.statusCode} to sent event.`),i=UB(i,d),d),d=>{throw f("network_error"),d});return o.add(u).then(d=>d,d=>{if(d instanceof he)return P&&S.error("Skipped sending event because buffer is full."),f("queue_overflow"),En();throw d})}return a.__sentry__baseTransport__=!0,{send:a,flush:c}}function Ms(n,t){if(!(t!=="event"&&t!=="transaction"))return Array.isArray(n)?n[1]:void 0}let zn;function $B(){if(zn)return zn;if(gi(M.fetch))return zn=M.fetch.bind(M);const n=M.document;let t=M.fetch;if(n&&typeof n.createElement=="function")try{const o=n.createElement("iframe");o.hidden=!0,n.head.appendChild(o);const i=o.contentWindow;i&&i.fetch&&(t=i.fetch),n.head.removeChild(o)}catch(o){xe&&S.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",o)}return zn=t.bind(M)}function JB(){zn=void 0}function qB(n,t=$B()){let o=0,i=0;function c(a){const s=a.body.length;o+=s,i++;const l={body:a.body,method:"POST",referrerPolicy:"origin",headers:n.headers,keepalive:o<=6e4&&i<15,...n.fetchOptions};try{return t(n.url,l).then(A=>(o-=s,i--,{statusCode:A.status,headers:{"x-sentry-rate-limits":A.headers.get("X-Sentry-Rate-Limits"),"retry-after":A.headers.get("Retry-After")}}))}catch(A){return JB(),o-=s,i--,Qo(A)}}return Bi(n,c)}const zB=4;function HB(n){function t(o){return new ce((i,c)=>{const a=new XMLHttpRequest;a.onerror=c,a.onreadystatechange=()=>{a.readyState===zB&&i({statusCode:a.status,headers:{"x-sentry-rate-limits":a.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":a.getResponseHeader("Retry-After")}})},a.open("POST",n.url);for(const s in n.headers)Object.prototype.hasOwnProperty.call(n.headers,s)&&a.setRequestHeader(s,n.headers[s]);a.send(o.body)})}return Bi(n,t)}const Ps=[Ra(),Ia(),Va(),os(),za(),rs(),ls(),as()];function GB(n){return[...Ps]}function WB(n={}){n.defaultIntegrations===void 0&&(n.defaultIntegrations=GB()),n.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(n.release=__SENTRY_RELEASE__),M.SENTRY_RELEASE&&M.SENTRY_RELEASE.id&&(n.release=M.SENTRY_RELEASE.id)),n.autoSessionTracking===void 0&&(n.autoSessionTracking=!0),n.sendClientReports===void 0&&(n.sendClientReports=!0);const t={...n,stackParser:bm(n.stackParser||RB),integrations:Nm(n),transport:n.transport||(di()?qB:HB)};$_(mB,t),n.autoSessionTracking&&KB()}const a0=(n={},t=getCurrentHub())=>{if(!WINDOW.document){DEBUG_BUILD&&logger.error("Global document not defined in showReportDialog call");return}const{client:o,scope:i}=t.getStackTop(),c=n.dsn||o&&o.getDsn();if(!c){DEBUG_BUILD&&logger.error("DSN not configured for showReportDialog call");return}i&&(n.user={...i.getUser(),...n.user}),n.eventId||(n.eventId=t.lastEventId());const a=WINDOW.document.createElement("script");a.async=!0,a.crossOrigin="anonymous",a.src=getReportDialogEndpoint(c,n),n.onLoad&&(a.onload=n.onLoad);const{onClose:s}=n;if(s){const A=f=>{if(f.data==="__sentry_reportdialog_closed__")try{s()}finally{WINDOW.removeEventListener("message",A)}};WINDOW.addEventListener("message",A)}const l=WINDOW.document.head||WINDOW.document.body;l?l.appendChild(a):DEBUG_BUILD&&logger.error("Not injecting report dialog. No injection point found in HTML")};function s0(){}function l0(n){n()}function A0(n){return wrap$1(n)()}function KB(){if(typeof M.document=="undefined"){xe&&S.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}Ba({ignoreDuration:!0}),Fa(),es(({from:n,to:t})=>{n!==void 0&&n!==t&&(Ba({ignoreDuration:!0}),Fa())})}function f0(n){const t=getClient();t&&t.captureUserFeedback(n)}function VB(n){const t=Object.assign({pollInterval:1e3,anrThreshold:5e3,captureStackTrace:!1},n),o=jn();document.addEventListener("visibilitychange",()=>{o.sendStatus({status:document.visibilityState,config:t})}),o.sendStatus({status:document.visibilityState,config:t}),setInterval(()=>{o.sendStatus({status:"alive",config:t})},t.pollInterval)}const YB=50,[,XB]=Ns,[,QB]=mm(),ZB=(n,t=0)=>{const o=[];for(const i of n.split(`
`).slice(t)){const c=XB(i),a=QB(i);if(c&&(a==null?void 0:a.in_app)!==!1?o.push(c):a&&o.push(ue(a)),o.length>=YB)break}return da(o)};var yi=function(n,t){return yi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(o[c]=i[c])},yi(n,t)};function ey(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");yi(n,t);function o(){this.constructor=n}n.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var Ci=function(){return Ci=Object.assign||function(t){for(var o,i=1,c=arguments.length;i<c;i++){o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Ci.apply(this,arguments)};function ny(n,t){var o={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(n);c<i.length;c++)t.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(n,i[c])&&(o[i[c]]=n[i[c]]);return o}function ty(n,t,o,i){var c=arguments.length,a=c<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,o,i);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(a=(c<3?s(a):c>3?s(t,o,a):s(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a}function oy(n,t){return function(o,i){t(o,i,n)}}function u0(n,t,o,i,c,a){function s(N){if(N!==void 0&&typeof N!="function")throw new TypeError("Function expected");return N}for(var l=i.kind,A=l==="getter"?"get":l==="setter"?"set":"value",f=!t&&n?i.static?n:n.prototype:null,u=t||(f?Object.getOwnPropertyDescriptor(f,i.name):{}),d,g=!1,b=o.length-1;b>=0;b--){var F={};for(var x in i)F[x]=x==="access"?{}:i[x];for(var x in i.access)F.access[x]=i.access[x];F.addInitializer=function(N){if(g)throw new TypeError("Cannot add initializers after decoration has completed");a.push(s(N||null))};var w=(0,o[b])(l==="accessor"?{get:u.get,set:u.set}:u[A],F);if(l==="accessor"){if(w===void 0)continue;if(w===null||typeof w!="object")throw new TypeError("Object expected");(d=s(w.get))&&(u.get=d),(d=s(w.set))&&(u.set=d),(d=s(w.init))&&c.unshift(d)}else(d=s(w))&&(l==="field"?c.unshift(d):u[A]=d)}f&&Object.defineProperty(f,i.name,u),g=!0}function E0(n,t,o){for(var i=arguments.length>2,c=0;c<t.length;c++)o=i?t[c].call(n,o):t[c].call(n);return i?o:void 0}function d0(n){return typeof n=="symbol"?n:"".concat(n)}function g0(n,t,o){return typeof t=="symbol"&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:o?"".concat(o," ",t):t})}function iy(n,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,t)}function Us(n,t,o,i){function c(a){return a instanceof o?a:new o(function(s){s(a)})}return new(o||(o=Promise))(function(a,s){function l(u){try{f(i.next(u))}catch(d){s(d)}}function A(u){try{f(i.throw(u))}catch(d){s(d)}}function f(u){u.done?a(u.value):c(u.value).then(l,A)}f((i=i.apply(n,t||[])).next())})}function ry(n,t){var o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,c,a,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(f){return function(u){return A([f,u])}}function A(f){if(i)throw new TypeError("Generator is already executing.");for(;s&&(s=0,f[0]&&(o=0)),o;)try{if(i=1,c&&(a=f[0]&2?c.return:f[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,f[1])).done)return a;switch(c=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,c=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){o=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){o.label=f[1];break}if(f[0]===6&&o.label<a[1]){o.label=a[1],a=f;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(f);break}a[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(n,o)}catch(u){f=[6,u],c=0}finally{i=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var Fi=Object.create?function(n,t,o,i){i===void 0&&(i=o);var c=Object.getOwnPropertyDescriptor(t,o);(!c||("get"in c?!t.__esModule:c.writable||c.configurable))&&(c={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(n,i,c)}:function(n,t,o,i){i===void 0&&(i=o),n[i]=t[o]};function cy(n,t){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(t,o)&&Fi(t,n,o)}function vi(n){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&n[t],i=0;if(o)return o.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function js(n,t){var o=typeof Symbol=="function"&&n[Symbol.iterator];if(!o)return n;var i=o.call(n),c,a=[],s;try{for(;(t===void 0||t-- >0)&&!(c=i.next()).done;)a.push(c.value)}catch(l){s={error:l}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(s)throw s.error}}return a}function ay(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(js(arguments[t]));return n}function sy(){for(var n=0,t=0,o=arguments.length;t<o;t++)n+=arguments[t].length;for(var i=Array(n),c=0,t=0;t<o;t++)for(var a=arguments[t],s=0,l=a.length;s<l;s++,c++)i[c]=a[s];return i}function ly(n,t,o){if(o||arguments.length===2)for(var i=0,c=t.length,a;i<c;i++)(a||!(i in t))&&(a||(a=Array.prototype.slice.call(t,0,i)),a[i]=t[i]);return n.concat(a||Array.prototype.slice.call(t))}function Hn(n){return this instanceof Hn?(this.v=n,this):new Hn(n)}function Ay(n,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=o.apply(n,t||[]),c,a=[];return c={},s("next"),s("throw"),s("return"),c[Symbol.asyncIterator]=function(){return this},c;function s(g){i[g]&&(c[g]=function(b){return new Promise(function(F,x){a.push([g,b,F,x])>1||l(g,b)})})}function l(g,b){try{A(i[g](b))}catch(F){d(a[0][3],F)}}function A(g){g.value instanceof Hn?Promise.resolve(g.value.v).then(f,u):d(a[0][2],g)}function f(g){l("next",g)}function u(g){l("throw",g)}function d(g,b){g(b),a.shift(),a.length&&l(a[0][0],a[0][1])}}function fy(n){var t,o;return t={},i("next"),i("throw",function(c){throw c}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(c,a){t[c]=n[c]?function(s){return(o=!o)?{value:Hn(n[c](s)),done:!1}:a?a(s):s}:a}}function uy(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],o;return t?t.call(n):(n=typeof vi=="function"?vi(n):n[Symbol.iterator](),o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o);function i(a){o[a]=n[a]&&function(s){return new Promise(function(l,A){s=n[a](s),c(l,A,s.done,s.value)})}}function c(a,s,l,A){Promise.resolve(A).then(function(f){a({value:f,done:l})},s)}}function Ey(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}var dy=Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t};function gy(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var o in n)o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)&&Fi(t,n,o);return dy(t,n),t}function py(n){return n&&n.__esModule?n:{default:n}}function by(n,t,o,i){if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?n!==t||!i:!t.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return o==="m"?i:o==="a"?i.call(n):i?i.value:t.get(n)}function my(n,t,o,i,c){if(i==="m")throw new TypeError("Private method is not writable");if(i==="a"&&!c)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?n!==t||!c:!t.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return i==="a"?c.call(n,o):c?c.value=o:t.set(n,o),o}function hy(n,t){if(t===null||typeof t!="object"&&typeof t!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?t===n:n.has(t)}function _y(n,t,o){if(t!=null){if(typeof t!="object"&&typeof t!="function")throw new TypeError("Object expected.");var i;if(o){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");i=t[Symbol.asyncDispose]}if(i===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");i=t[Symbol.dispose]}if(typeof i!="function")throw new TypeError("Object not disposable.");n.stack.push({value:t,dispose:i,async:o})}else o&&n.stack.push({async:!0});return t}var By=typeof SuppressedError=="function"?SuppressedError:function(n,t,o){var i=new Error(o);return i.name="SuppressedError",i.error=n,i.suppressed=t,i};function yy(n){function t(i){n.error=n.hasError?new By(i,n.error,"An error was suppressed during disposal."):i,n.hasError=!0}function o(){for(;n.stack.length;){var i=n.stack.pop();try{var c=i.dispose&&i.dispose.call(i.value);if(i.async)return Promise.resolve(c).then(o,function(a){return t(a),o()})}catch(a){t(a)}}if(n.hasError)throw n.error}return o()}const p0={__extends:ey,__assign:Ci,__rest:ny,__decorate:ty,__param:oy,__metadata:iy,__awaiter:Us,__generator:ry,__createBinding:Fi,__exportStar:cy,__values:vi,__read:js,__spread:ay,__spreadArrays:sy,__spreadArray:ly,__await:Hn,__asyncGenerator:Ay,__asyncDelegator:fy,__asyncValues:uy,__makeTemplateObject:Ey,__importStar:gy,__importDefault:py,__classPrivateFieldGet:by,__classPrivateFieldSet:my,__classPrivateFieldIn:hy,__addDisposableResource:_y,__disposeResources:yy};function Cy(n){const t=jn();return Bi(n,o=>Us(this,void 0,void 0,function*(){return t.sendEnvelope(o.body),{statusCode:200}}))}function Fy(n){const t=typeof window!="undefined"?"renderer":"main";if(t!==n)throw new Error(`This code is intended to run in the Electron ${n} process but is currently running in the ${t} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${t}';`)}const vy=[...Ps,ps(),ws()];function ky(n={},t=WB){if(Fy("renderer"),window!=null&&window.__SENTRY__RENDERER_INIT__){S.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);return}window.__SENTRY__RENDERER_INIT__=!0,n.autoSessionTracking===void 0&&(n.autoSessionTracking=!1),n.sendClientReports=!1,n.defaultIntegrations===void 0&&(n.defaultIntegrations=vy),n.stackParser===void 0&&(n.stackParser=ZB),n.dsn===void 0&&(n.dsn="https://12345@dummy.dsn/12345"),n.transport===void 0&&(n.transport=Cy),n.anrDetection&&VB(n.anrDetection===!0?{}:n.anrDetection),delete n.initialScope,t(n)}const b0=Object.assign(Object.assign({},P_),{MetricsAggregator:j_}),m0=Object.assign(Object.assign({},l_),E);function wy(){var n,t;console.log("Starting Sentry (Renderer)"),ky({...(t=(n=window.desktop)==null?void 0:n.diagnostics)==null?void 0:t.sentryOptions}),Lb(ba)}const Sy=Object.prototype.hasOwnProperty;function xy(n,t){if(Object.is(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;const o=Object.keys(n),i=Object.keys(t);if(o.length!==i.length)return!1;for(let c=0;c<o.length;c++)if(!Sy.call(t,o[c])||!Object.is(n[o[c]],t[o[c]]))return!1;return!0}function Ty(n,t){return yo(n,t)}const $s=Ty;function Iy(n){const t=an(n);return!xy(n,t.current)&&!$s(n,t.current)&&(t.current=n),t.current}function Js(n,t){bt(n,[Iy(t)])}function qs(n){return Ab(n,$s)}const Oy=()=>{const n=qs(t=>t.settings.locale);Js(()=>{async function t(){n&&await window.desktop.intl.applyLocale(n)}t()},[n])},Ry=`${tp} 1x,${op} 2x,${ip} 3x`;wy();function Dy(n){const{intl:t}=window.desktop,{app:o,environment:i}=n,c=yl(n),a=Cl(i.distribution,c,o.isUpdateSupported,t),s=Fl(i.appVersion),l=vl(process.arch),A=i.clientEnvironment===ge.RESTRICTED?" (GovSlack)":"",f=i.clientEnvironment===ge.MILITARY?" (MilSlack)":"";return`${a} ${s}${l}${A||f}`}const zs=()=>{const{intl:n}=window.desktop,{appVersion:t,webappVersion:o,versionString:i,clientEnvironment:c,devEnv:a}=qs(g=>({appVersion:g.environment.appVersion,webappVersion:Co(g.webapp),versionString:Dy(g),clientEnvironment:g.environment.clientEnvironment,devEnv:g.environment.devEnv})),[s,l]=pt(!1);Oy(),Js(()=>{if(s){const g=setTimeout(()=>l(!1),3e3);return()=>clearTimeout(g)}return Zr},[s,l]);const A=`AboutBox-version${t!==void 0&&t.length>10?" long":""}`,f=n.t("Copied!",De.RENDERER)(),u=()=>{navigator.clipboard.writeText(i).catch(g=>console.log("Failed to copy version string",g)),l(!0)},d=()=>window.open(`${Vr({clientEnvironment:c,devEnv:a})}/libs/desktop`);return I("div",{className:"AboutBox",children:[I("img",{className:"AboutBox-logo",draggable:!1,srcSet:Ry}),I("span",{className:"AboutBox-tooltipContainer",children:I("span",{className:"AboutBox-tooltip",style:{opacity:s?1:0},children:f})}),I("span",{className:"AboutBox-versionContainer",children:[I("span",{className:A,"data-qa":"about_box_version",draggable:!1,children:i},"version"),I("span",{children:I("button",{className:"AboutBox-copy c-icon c-icon--all-files",title:n.t("Copy",De.RENDERER)(),onClick:u},"copy")})]}),I("span",{"data-testid":"webapp-version",className:"AboutBox-webappVersion",draggable:!1,children:o}),I("input",{type:"button",className:"AboutBox-acknowledgements","data-qa":"about_box_acknowledgements",value:n.t("Notices and Acknowledgements",De.RENDERER)(),onClick:d},"acknowledgements")]})};void Db(zs)})(),Jy=Qt})()});qy();})();

//# sourceMappingURL=about-box.bundle.js.map
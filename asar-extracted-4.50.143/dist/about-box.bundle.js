(()=>{var _C=(Fe,de)=>()=>(de||Fe((de={exports:{}}).exports,de),de.exports);var bC=_C((Ne,Pe)=>{(function(){try{var Fe=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},de=new Error().stack;de&&(Fe._sentryDebugIds=Fe._sentryDebugIds||{},Fe._sentryDebugIds[de]="db6cca22-7ca8-450f-95c5-1516da56cebe",Fe._sentryDebugIdIdentifier="sentry-dbid-db6cca22-7ca8-450f-95c5-1516da56cebe")}catch{}})();var hC=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};hC.SENTRY_RELEASE={id:"Slack@4.50.143"};var mC;(()=>{var Fe={5550(b,g,E){"use strict";E.d(g,{A:()=>ct});var v=E(2845),F=E.n(v),p=E(8843),y=E.n(p),C=E(5858),x=E.n(C),D=new URL(E(5539),E.b),O=new URL(E(4603),E.b),$=new URL(E(4392),E.b),U=new URL(E(9138),E.b),T=new URL(E(5906),E.b),G=new URL(E(9269),E.b),W=new URL(E(5959),E.b),q=new URL(E(7),E.b),J=new URL(E(6723),E.b),ne=y()(F()),K=x()(D),te=x()(O),z=x()($),N=x()(U),h=x()(T),m=x()(G),oe=x()(W),ze=x()(q),He=x()(J);ne.push([b.id,`/*

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
  src: url(${K}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(${te}) format('woff2');
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
  src: url(${m}) format('woff2');
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
  src: url(${ze}) format('woff2');
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
.AboutBox-installerType {
  width: 100%;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0;
  color: #2c2d30;
  text-align: center;
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
`,"",{version:3,sources:["webpack://./src/renderer/styles/about-box.less","webpack://./src/resources/lato.less","webpack://./src/resources/slack-icons-font.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AElEA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AFmEF;AEvDA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AFyDF;AExDE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AF0EF;AExDA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AF0DF;AEzDE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AF2DJ;AEzDE;EAEE,gBAAA;AF0DJ;AEnDA;EACE,UAAA;AFqDF;AEpDE;EACE,kBAAA;AFsDJ;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEknBA;EAEE,WAAA;AFjnBF;AEsmBE;EACE,gBAAA;EACA,cAAA;AFpmBJ;AEsmBE;EACE,yBAAA;AFpmBJ;AE4mBE;EACE,eAAA;AF1mBJ;AE8mBA;EAEE,WAAA;AF7mBF;AEylBE;EACE,gBAAA;EACA,cAAA;AFvlBJ;AEylBE;EACE,yBAAA;AFvlBJ;AEwmBE;EACE,eAAA;AFtmBJ;AE0mBA;EAEE,WAAA;AFzmBF;AE4kBE;EACE,gBAAA;EACA,cAAA;AF1kBJ;AE4kBE;EACE,yBAAA;AF1kBJ;AEomBE;EACE,eAAA;AFlmBJ;AEkkBE;EACE,gBAAA;EACA,cAAA;AFhkBJ;AEkkBE;EACE,yBAAA;AFhkBJ;AE2jBE;EACE,gBAAA;EACA,cAAA;AFzjBJ;AE2jBE;EACE,yBAAA;AFzjBJ;AEojBE;EACE,gBAAA;EACA,cAAA;AFljBJ;AEojBE;EACE,yBAAA;AFljBJ;AE6iBE;EACE,gBAAA;EACA,cAAA;AF3iBJ;AE6iBE;EACE,yBAAA;AF3iBJ;AEsiBE;EACE,gBAAA;EACA,cAAA;AFpiBJ;AEsiBE;EACE,yBAAA;AFpiBJ;AE+hBE;EACE,gBAAA;EACA,cAAA;AF7hBJ;AE+hBE;EACE,yBAAA;AF7hBJ;AEwhBE;EACE,gBAAA;EACA,cAAA;AFthBJ;AEwhBE;EACE,yBAAA;AFthBJ;AEihBE;EACE,gBAAA;EACA,cAAA;AF/gBJ;AEihBE;EACE,yBAAA;AF/gBJ;AE0gBE;EACE,gBAAA;EACA,cAAA;AFxgBJ;AE0gBE;EACE,yBAAA;AFxgBJ;AEmgBE;EACE,gBAAA;EACA,cAAA;AFjgBJ;AEmgBE;EACE,yBAAA;AFjgBJ;AE4fE;EACE,gBAAA;EACA,cAAA;AF1fJ;AE4fE;EACE,yBAAA;AF1fJ;AEqfE;EACE,gBAAA;EACA,cAAA;AFnfJ;AEqfE;EACE,yBAAA;AFnfJ;AE8eE;EACE,gBAAA;EACA,cAAA;AF5eJ;AE8eE;EACE,yBAAA;AF5eJ;AEueE;EACE,gBAAA;EACA,cAAA;AFreJ;AEueE;EACE,yBAAA;AFreJ;AEgeE;EACE,gBAAA;EACA,cAAA;AF9dJ;AEgeE;EACE,yBAAA;AF9dJ;AEydE;EACE,gBAAA;EACA,cAAA;AFvdJ;AEydE;EACE,yBAAA;AFvdJ;AEkdE;EACE,gBAAA;EACA,cAAA;AFhdJ;AEkdE;EACE,yBAAA;AFhdJ;AE2cE;EACE,gBAAA;EACA,cAAA;AFzcJ;AE2cE;EACE,yBAAA;AFzcJ;AEocE;EACE,gBAAA;EACA,cAAA;AFlcJ;AEocE;EACE,yBAAA;AFlcJ;AE6bE;EACE,gBAAA;EACA,cAAA;AF3bJ;AE6bE;EACE,yBAAA;AF3bJ;AEsbE;EACE,gBAAA;EACA,cAAA;AFpbJ;AEsbE;EACE,yBAAA;AFpbJ;AE+aE;EACE,gBAAA;EACA,cAAA;AF7aJ;AE+aE;EACE,yBAAA;AF7aJ;AEwaE;EACE,gBAAA;EACA,cAAA;AFtaJ;AEwaE;EACE,yBAAA;AFtaJ;AEiaE;EACE,gBAAA;EACA,cAAA;AF/ZJ;AEiaE;EACE,yBAAA;AF/ZJ;AE0ZE;EACE,gBAAA;EACA,cAAA;AFxZJ;AE0ZE;EACE,yBAAA;AFxZJ;AEmZE;EACE,gBAAA;EACA,cAAA;AFjZJ;AEmZE;EACE,yBAAA;AFjZJ;AE4YE;EACE,gBAAA;EACA,cAAA;AF1YJ;AE4YE;EACE,yBAAA;AF1YJ;AEqYE;EACE,gBAAA;EACA,cAAA;AFnYJ;AEqYE;EACE,yBAAA;AFnYJ;AE8XE;EACE,gBAAA;EACA,cAAA;AF5XJ;AE8XE;EACE,yBAAA;AF5XJ;AEuXE;EACE,gBAAA;EACA,cAAA;AFrXJ;AEuXE;EACE,yBAAA;AFrXJ;AEgXE;EACE,gBAAA;EACA,cAAA;AF9WJ;AEgXE;EACE,yBAAA;AF9WJ;AEyWE;EACE,gBAAA;EACA,cAAA;AFvWJ;AEyWE;EACE,yBAAA;AFvWJ;AEkWE;EACE,gBAAA;EACA,cAAA;AFhWJ;AEkWE;EACE,yBAAA;AFhWJ;AE2VE;EACE,gBAAA;EACA,cAAA;AFzVJ;AE2VE;EACE,yBAAA;AFzVJ;AEoVE;EACE,gBAAA;EACA,cAAA;AFlVJ;AEoVE;EACE,yBAAA;AFlVJ;AE6UE;EACE,gBAAA;EACA,cAAA;AF3UJ;AE6UE;EACE,yBAAA;AF3UJ;AEsUE;EACE,gBAAA;EACA,cAAA;AFpUJ;AEsUE;EACE,yBAAA;AFpUJ;AE+TE;EACE,gBAAA;EACA,cAAA;AF7TJ;AE+TE;EACE,yBAAA;AF7TJ;AEwTE;EACE,gBAAA;EACA,cAAA;AFtTJ;AEwTE;EACE,yBAAA;AFtTJ;AEiTE;EACE,gBAAA;EACA,cAAA;AF/SJ;AEiTE;EACE,yBAAA;AF/SJ;AE0SE;EACE,gBAAA;EACA,cAAA;AFxSJ;AE0SE;EACE,yBAAA;AFxSJ;AEmSE;EACE,gBAAA;EACA,cAAA;AFjSJ;AEmSE;EACE,yBAAA;AFjSJ;AE4RE;EACE,gBAAA;EACA,cAAA;AF1RJ;AE4RE;EACE,yBAAA;AF1RJ;AEqRE;EACE,gBAAA;EACA,cAAA;AFnRJ;AEqRE;EACE,yBAAA;AFnRJ;AE8QE;EACE,gBAAA;EACA,cAAA;AF5QJ;AE8QE;EACE,yBAAA;AF5QJ;AEuQE;EACE,gBAAA;EACA,cAAA;AFrQJ;AEuQE;EACE,yBAAA;AFrQJ;AEgQE;EACE,gBAAA;EACA,cAAA;AF9PJ;AEgQE;EACE,yBAAA;AF9PJ;AEyPE;EACE,gBAAA;EACA,cAAA;AFvPJ;AEyPE;EACE,yBAAA;AFvPJ;AEkPE;EACE,gBAAA;EACA,cAAA;AFhPJ;AEkPE;EACE,yBAAA;AFhPJ;AE2OE;EACE,gBAAA;EACA,cAAA;AFzOJ;AE2OE;EACE,yBAAA;AFzOJ;AEoOE;EACE,gBAAA;EACA,cAAA;AFlOJ;AEoOE;EACE,yBAAA;AFlOJ;AE6NE;EACE,gBAAA;EACA,cAAA;AF3NJ;AE6NE;EACE,yBAAA;AF3NJ;AEsNE;EACE,gBAAA;EACA,cAAA;AFpNJ;AEsNE;EACE,yBAAA;AFpNJ;AE+ME;EACE,gBAAA;EACA,cAAA;AF7MJ;AE+ME;EACE,yBAAA;AF7MJ;AEwME;EACE,gBAAA;EACA,cAAA;AFtMJ;AEwME;EACE,yBAAA;AFtMJ;AEiME;EACE,gBAAA;EACA,cAAA;AF/LJ;AEiME;EACE,yBAAA;AF/LJ;AE0LE;EACE,gBAAA;EACA,cAAA;AFxLJ;AE0LE;EACE,yBAAA;AFxLJ;AEmLE;EACE,gBAAA;EACA,cAAA;AFjLJ;AEmLE;EACE,yBAAA;AFjLJ;AE4KE;EACE,gBAAA;EACA,cAAA;AF1KJ;AE4KE;EACE,yBAAA;AF1KJ;AEqKE;EACE,gBAAA;EACA,cAAA;AFnKJ;AEqKE;EACE,yBAAA;AFnKJ;AE8JE;EACE,gBAAA;EACA,cAAA;AF5JJ;AE8JE;EACE,yBAAA;AF5JJ;AEuJE;EACE,gBAAA;EACA,cAAA;AFrJJ;AEuJE;EACE,yBAAA;AFrJJ;AEgJE;EACE,gBAAA;EACA,cAAA;AF9IJ;AEgJE;EACE,yBAAA;AF9IJ;AEyIE;EACE,gBAAA;EACA,cAAA;AFvIJ;AEyIE;EACE,yBAAA;AFvIJ;AEkIE;EACE,gBAAA;EACA,cAAA;AFhIJ;AEkIE;EACE,yBAAA;AFhIJ;AE2HE;EACE,gBAAA;EACA,cAAA;AFzHJ;AE2HE;EACE,yBAAA;AFzHJ;AEoHE;EACE,gBAAA;EACA,cAAA;AFlHJ;AEoHE;EACE,yBAAA;AFlHJ;AE6GE;EACE,gBAAA;EACA,cAAA;AF3GJ;AE6GE;EACE,yBAAA;AF3GJ;AEsGE;EACE,gBAAA;EACA,cAAA;AFpGJ;AEsGE;EACE,yBAAA;AFpGJ;AE+FE;EACE,gBAAA;EACA,cAAA;AF7FJ;AE+FE;EACE,yBAAA;AF7FJ;AEwFE;EACE,gBAAA;EACA,cAAA;AFtFJ;AEwFE;EACE,yBAAA;AFtFJ;AEiFE;EACE,gBAAA;EACA,cAAA;AF/EJ;AEiFE;EACE,yBAAA;AF/EJ;AE0EE;EACE,gBAAA;EACA,cAAA;AFxEJ;AE0EE;EACE,yBAAA;AFxEJ;AEmEE;EACE,gBAAA;EACA,cAAA;AFjEJ;AEmEE;EACE,yBAAA;AFjEJ;AE4DE;EACE,gBAAA;EACA,cAAA;AF1DJ;AE4DE;EACE,yBAAA;AF1DJ;AEqDE;EACE,gBAAA;EACA,cAAA;AFnDJ;AEqDE;EACE,yBAAA;AFnDJ;AE8CE;EACE,gBAAA;EACA,cAAA;AF5CJ;AE8CE;EACE,yBAAA;AF5CJ;AEuCE;EACE,gBAAA;EACA,cAAA;AFrCJ;AEuCE;EACE,yBAAA;AFrCJ;AEgCE;EACE,gBAAA;EACA,cAAA;AF9BJ;AEgCE;EACE,yBAAA;AF9BJ;AEyBE;EACE,gBAAA;EACA,cAAA;AFvBJ;AEyBE;EACE,yBAAA;AFvBJ;AEkBE;EACE,gBAAA;EACA,cAAA;AFhBJ;AEkBE;EACE,yBAAA;AFhBJ;AEWE;EACE,gBAAA;EACA,cAAA;AFTJ;AEWE;EACE,yBAAA;AFTJ;AEIE;EACE,gBAAA;EACA,cAAA;AFFJ;AEIE;EACE,yBAAA;AFFJ;AEHE;EACE,gBAAA;EACA,cAAA;AFKJ;AEHE;EACE,yBAAA;AFKJ;AEVE;EACE,gBAAA;EACA,cAAA;AFYJ;AEVE;EACE,yBAAA;AFYJ;AEjBE;EACE,gBAAA;EACA,cAAA;AFmBJ;AEjBE;EACE,yBAAA;AFmBJ;AExBE;EACE,gBAAA;EACA,cAAA;AF0BJ;AExBE;EACE,yBAAA;AF0BJ;AE/BE;EACE,gBAAA;EACA,cAAA;AFiCJ;AE/BE;EACE,yBAAA;AFiCJ;AEtCE;EACE,gBAAA;EACA,cAAA;AFwCJ;AEtCE;EACE,yBAAA;AFwCJ;AE7CE;EACE,gBAAA;EACA,cAAA;AF+CJ;AE7CE;EACE,yBAAA;AF+CJ;AEpDE;EACE,gBAAA;EACA,cAAA;AFsDJ;AEpDE;EACE,yBAAA;AFsDJ;AE3DE;EACE,gBAAA;EACA,cAAA;AF6DJ;AE3DE;EACE,yBAAA;AF6DJ;AElEE;EACE,gBAAA;EACA,cAAA;AFoEJ;AElEE;EACE,yBAAA;AFoEJ;AEzEE;EACE,gBAAA;EACA,cAAA;AF2EJ;AEzEE;EACE,yBAAA;AF2EJ;AEhFE;EACE,gBAAA;EACA,cAAA;AFkFJ;AEhFE;EACE,yBAAA;AFkFJ;AEvFE;EACE,gBAAA;EACA,cAAA;AFyFJ;AEvFE;EACE,yBAAA;AFyFJ;AE9FE;EACE,gBAAA;EACA,cAAA;AFgGJ;AE9FE;EACE,yBAAA;AFgGJ;AErGE;EACE,gBAAA;EACA,cAAA;AFuGJ;AErGE;EACE,yBAAA;AFuGJ;AE5GE;EACE,gBAAA;EACA,cAAA;AF8GJ;AE5GE;EACE,yBAAA;AF8GJ;AEnHE;EACE,gBAAA;EACA,cAAA;AFqHJ;AEnHE;EACE,yBAAA;AFqHJ;AE1HE;EACE,gBAAA;EACA,cAAA;AF4HJ;AE1HE;EACE,yBAAA;AF4HJ;AEjIE;EACE,gBAAA;EACA,cAAA;AFmIJ;AEjIE;EACE,yBAAA;AFmIJ;AExIE;EACE,gBAAA;EACA,cAAA;AF0IJ;AExIE;EACE,yBAAA;AF0IJ;AE/IE;EACE,gBAAA;EACA,cAAA;AFiJJ;AE/IE;EACE,yBAAA;AFiJJ;AEtJE;EACE,gBAAA;EACA,cAAA;AFwJJ;AEtJE;EACE,yBAAA;AFwJJ;AE7JE;EACE,gBAAA;EACA,cAAA;AF+JJ;AE7JE;EACE,yBAAA;AF+JJ;AEpKE;EACE,gBAAA;EACA,cAAA;AFsKJ;AEpKE;EACE,yBAAA;AFsKJ;AE3KE;EACE,gBAAA;EACA,cAAA;AF6KJ;AE3KE;EACE,yBAAA;AF6KJ;AElLE;EACE,gBAAA;EACA,cAAA;AFoLJ;AElLE;EACE,yBAAA;AFoLJ;AEzLE;EACE,gBAAA;EACA,cAAA;AF2LJ;AEzLE;EACE,yBAAA;AF2LJ;AEhME;EACE,gBAAA;EACA,cAAA;AFkMJ;AEhME;EACE,yBAAA;AFkMJ;AEvME;EACE,gBAAA;EACA,cAAA;AFyMJ;AEvME;EACE,yBAAA;AFyMJ;AE9ME;EACE,gBAAA;EACA,cAAA;AFgNJ;AE9ME;EACE,yBAAA;AFgNJ;AErNE;EACE,gBAAA;EACA,cAAA;AFuNJ;AErNE;EACE,yBAAA;AFuNJ;AE5NE;EACE,gBAAA;EACA,cAAA;AF8NJ;AE5NE;EACE,yBAAA;AF8NJ;AEnOE;EACE,gBAAA;EACA,cAAA;AFqOJ;AEnOE;EACE,yBAAA;AFqOJ;AE1OE;EACE,gBAAA;EACA,cAAA;AF4OJ;AE1OE;EACE,yBAAA;AF4OJ;AEjPE;EACE,gBAAA;EACA,cAAA;AFmPJ;AEjPE;EACE,yBAAA;AFmPJ;AExPE;EACE,gBAAA;EACA,cAAA;AF0PJ;AExPE;EACE,yBAAA;AF0PJ;AE/PE;EACE,gBAAA;EACA,cAAA;AFiQJ;AE/PE;EACE,yBAAA;AFiQJ;AEtQE;EACE,gBAAA;EACA,cAAA;AFwQJ;AEtQE;EACE,yBAAA;AFwQJ;AE7QE;EACE,gBAAA;EACA,cAAA;AF+QJ;AE7QE;EACE,yBAAA;AF+QJ;AEpRE;EACE,gBAAA;EACA,cAAA;AFsRJ;AEpRE;EACE,yBAAA;AFsRJ;AE3RE;EACE,gBAAA;EACA,cAAA;AF6RJ;AE3RE;EACE,yBAAA;AF6RJ;AACA;;;;EAIE;AG7xFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AH+xFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;;;;;;;;;;;EAaE;AACF;;;CAGC;AACD;;;CAGC;AIxuFD;EACE,iBAAA;AJ0uFF;AIxuFA;EACE,iBAAA;AJ0uFF;AA7zFA;EACE,iBAAA;EACA,kDAAA;EACA,aAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;AA8zFF;AA5zFE;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AA8zFJ;AA3zFE;EACE,WAAA;EACA,gBAAA;EACA,kBAAA;AA6zFJ;AA1zFE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;AA4zFJ;AA3zFI;EACE,eAAA;AA6zFN;AAzzFE;EACE,WAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,qBAAA;AA2zFJ;AAxzFE;EACE,WAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,iBAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;AA0zFJ;AAvzFE;EACE,6BAAA;EACA,4BAAA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;EACA,gCAAA;AAyzFJ;AAxzFI;EACE,eAAA;EACA,iBAAA;AA0zFN;AAxzFI;EACE,qBAAA;AA0zFN;AAxzFI;EACE,qBAAA;AA0zFN;AAtzFE;EACE,qBAAA;EACA,kBAAA;EACA,UAAA;EACA,6DAAA;AAwzFJ;AArzFE;EACE,cAAA;EACA,kBAAA;EACA,aAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,gBAAA;EACA,iBAAA;EACA,iCAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;EACA,oBAAA;EACA,iBAAA;EACA,kCAAA;AAuzFJ;AArzFI;EACE,SAAA;EACA,SAAA;EACA,yBAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,oBAAA;EACA,8BAAA;EACA,yBAAA;EACA,iBAAA;EACA,iBAAA;AAuzFN;AA96FA;EA4HI,oBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,4BAAA;AAqzFJ;AAr7FA;EAoII,UAAA;EACA,oBAAA;EACA,+BAAA;EACA,yBAAA;EACA,kCAAA;EACA,6BAAA;AAozFJ;AA77FA;EA6II,UAAA;EACA,6BAAA;AAmzFJ;AAhzFE;EACE;IACE,UAAA;IACA,oBAAA;IACA,qBAAA;EAkzFJ;AACF;AA/yFE;EACE,UAAA;EACA,oBAAA;EAEA,kBAAA;EACA,SAAA;EACA,YAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,2CAAA;EACA,wBAAA;EACA,2BAAA;AAgzFJ;AA9yFI;;;EAGE,aAAA;AAgzFN;AA5yFE;EACE,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,sCAAA;EACA,mCAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,oBAAA;EACA,qBAAA;EACA,yBAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,gBAAA;EACA,qBAAA;EACA,eAAA;EACA,2BAAA;AA8yFJ;AA5yFI;;;EAGE,aAAA;AA8yFN;AA3yFI;EACE,kBAAA;EACA,WAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,sBAAA;AA6yFN;AA1yFI;EACE,4CAAA;AA4yFN;AAzyFI;EACE,+CAAA;AA2yFN;AAzyFM;EACE,gBAAA;AA2yFR;AArgGA;EAgOI,kDAAA;EACA,cAAA;EACA,eAAA;EACA,iBAAA;EACA,iBAAA;EAEA,iBAAA;EACA,oBAAA;EACA,kBAAA;EACA,mBAAA;AAuyFJ;AAryFI;EACE,gBAAA;EAhHF,oBAAA;EACA,sBAAA;EACA,gBAAA;EACA,qBAAA;EACA,4BAAA;AAw5FJ;AAxyFI;EACE,eAAA;AA0yFN;AAvyFI;EACE,qBAAA;EACA,gBAAA;EACA,iBAAA;EACA,oBAAA;EACA,2CAAA;EACA,wBAAA;AAyyFN;AAvyFM;EACE,UAAA;AAyyFR;AAvyFQ;EACE,UAAA;EACA,iCAAA;AAyyFV;AApyFI;EACE,iBAAA;EACA,cAAA;EACA,wBAAA;EACA,gBAAA;EACA,sCAAA;EACA,mCAAA;EACA,yBAAA;EACA,SAAA;EACA,sBAAA;EACA,wBAAA;EACA,qBAAA;EACA,eAAA;AAsyFN;AApyFM;;EAEE,aAAA;AAsyFR;AAnyFM;EACE,aAAA;EACA,2CAAA;AAqyFR;AAlyFM;EACE,kBAAA;EACA,WAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EACA,sBAAA;AAoyFR;AAjyFM;EACE,4CAAA;AAmyFR;AAhyFM;EACE,+CAAA;AAkyFR;AAhyFQ;EACE,gBAAA;AAkyFV;AA9xFM;EACE,UAAA;AAgyFR;AA9xFQ;EACE,UAAA;EACA,iCAAA;AAgyFV",sourcesContent:[`@import '../../resources/lato.less';
@import '../../resources/slack-icons-font.less';
@import '../../resources/plastic/plastic_typography.less';
@import '../../resources/plastic/plastic_utilities.less';
@import '../../resources/slack_kit/slack_kit_colors.less';

@about-width: 320px;
@about-padding: 42px;
@about-text-color: #2c2d30;
@about-border-color: rgba(151, 151, 151, 0.25);
@about-font-family:
  Slack-Lato,
  Lucida Grande,
  sans-serif;
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

  &-installerType {
    width: 100%;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0;
    color: @about-text-color;
    text-align: center;
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
`],sourceRoot:""}]);const ct=ne},8843(b){"use strict";b.exports=function(g){var E=[];return E.toString=function(){return this.map(function(F){var p="",y=typeof F[5]<"u";return F[4]&&(p+="@supports (".concat(F[4],") {")),F[2]&&(p+="@media ".concat(F[2]," {")),y&&(p+="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {")),p+=g(F),y&&(p+="}"),F[2]&&(p+="}"),F[4]&&(p+="}"),p}).join("")},E.i=function(F,p,y,C,x){typeof F=="string"&&(F=[[null,F,void 0]]);var D={};if(y)for(var O=0;O<this.length;O++){var $=this[O][0];$!=null&&(D[$]=!0)}for(var U=0;U<F.length;U++){var T=[].concat(F[U]);y&&D[T[0]]||(typeof x<"u"&&(typeof T[5]>"u"||(T[1]="@layer".concat(T[5].length>0?" ".concat(T[5]):""," {").concat(T[1],"}")),T[5]=x),p&&(T[2]&&(T[1]="@media ".concat(T[2]," {").concat(T[1],"}")),T[2]=p),C&&(T[4]?(T[1]="@supports (".concat(T[4],") {").concat(T[1],"}"),T[4]=C):T[4]="".concat(C)),E.push(T))}},E}},5858(b){"use strict";b.exports=function(g,E){return E||(E={}),g&&(g=String(g.__esModule?g.default:g),/^['"].*['"]$/.test(g)&&(g=g.slice(1,-1)),E.hash&&(g+=E.hash),/["'() \t\n]|(%20)/.test(g)||E.needQuotes?'"'.concat(g.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):g)}},2845(b){"use strict";b.exports=function(g){var E=g[1],v=g[3];if(!v)return E;if(typeof btoa=="function"){var F=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),p="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(F),y="/*# ".concat(p," */");return[E].concat([y]).join(`
`)}return[E].join(`
`)}},3869(b,g,E){"use strict";var v=E(4717),F={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},y={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x={};x[v.ForwardRef]=y,x[v.Memo]=C;function D(J){return v.isMemo(J)?C:x[J.$$typeof]||F}var O=Object.defineProperty,$=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,T=Object.getOwnPropertyDescriptor,G=Object.getPrototypeOf,W=Object.prototype;function q(J,ne,K){if(typeof ne!="string"){if(W){var te=G(ne);te&&te!==W&&q(J,te,K)}var z=$(ne);U&&(z=z.concat(U(ne)));for(var N=D(J),h=D(ne),m=0;m<z.length;++m){var oe=z[m];if(!p[oe]&&!(K&&K[oe])&&!(h&&h[oe])&&!(N&&N[oe])){var ze=T(ne,oe);try{O(J,oe,ze)}catch{}}}}return J}b.exports=q},5889(b,g){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=typeof Symbol=="function"&&Symbol.for,v=E?Symbol.for("react.element"):60103,F=E?Symbol.for("react.portal"):60106,p=E?Symbol.for("react.fragment"):60107,y=E?Symbol.for("react.strict_mode"):60108,C=E?Symbol.for("react.profiler"):60114,x=E?Symbol.for("react.provider"):60109,D=E?Symbol.for("react.context"):60110,O=E?Symbol.for("react.async_mode"):60111,$=E?Symbol.for("react.concurrent_mode"):60111,U=E?Symbol.for("react.forward_ref"):60112,T=E?Symbol.for("react.suspense"):60113,G=E?Symbol.for("react.suspense_list"):60120,W=E?Symbol.for("react.memo"):60115,q=E?Symbol.for("react.lazy"):60116,J=E?Symbol.for("react.block"):60121,ne=E?Symbol.for("react.fundamental"):60117,K=E?Symbol.for("react.responder"):60118,te=E?Symbol.for("react.scope"):60119;function z(h){if(typeof h=="object"&&h!==null){var m=h.$$typeof;switch(m){case v:switch(h=h.type,h){case O:case $:case p:case C:case y:case T:return h;default:switch(h=h&&h.$$typeof,h){case D:case U:case q:case W:case x:return h;default:return m}}case F:return m}}}function N(h){return z(h)===$}g.AsyncMode=O,g.ConcurrentMode=$,g.ContextConsumer=D,g.ContextProvider=x,g.Element=v,g.ForwardRef=U,g.Fragment=p,g.Lazy=q,g.Memo=W,g.Portal=F,g.Profiler=C,g.StrictMode=y,g.Suspense=T,g.isAsyncMode=function(h){return N(h)||z(h)===O},g.isConcurrentMode=N,g.isContextConsumer=function(h){return z(h)===D},g.isContextProvider=function(h){return z(h)===x},g.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===v},g.isForwardRef=function(h){return z(h)===U},g.isFragment=function(h){return z(h)===p},g.isLazy=function(h){return z(h)===q},g.isMemo=function(h){return z(h)===W},g.isPortal=function(h){return z(h)===F},g.isProfiler=function(h){return z(h)===C},g.isStrictMode=function(h){return z(h)===y},g.isSuspense=function(h){return z(h)===T},g.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===p||h===$||h===C||h===y||h===T||h===G||typeof h=="object"&&h!==null&&(h.$$typeof===q||h.$$typeof===W||h.$$typeof===x||h.$$typeof===D||h.$$typeof===U||h.$$typeof===ne||h.$$typeof===K||h.$$typeof===te||h.$$typeof===J)},g.typeOf=z},4717(b,g,E){"use strict";b.exports=E(5889)},3475(b,g,E){"use strict";var v=E(9572);function F(){}function p(){}p.resetWarningCache=F,b.exports=function(){function y(D,O,$,U,T,G){if(G!==v){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}y.isRequired=y;function C(){return y}var x={array:y,bool:y,func:y,number:y,object:y,string:y,symbol:y,any:y,arrayOf:C,element:y,elementType:y,instanceOf:C,node:y,objectOf:C,oneOf:C,oneOfType:C,shape:C,exact:C,checkPropTypes:p,resetWarningCache:F};return x.PropTypes=x,x}},4031(b,g,E){if(0)var v,F;else b.exports=E(3475)()},9572(b){"use strict";var g="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";b.exports=g},6988(b,g){"use strict";var E;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=typeof Symbol=="function"&&Symbol.for,F=v?Symbol.for("react.element"):60103,p=v?Symbol.for("react.portal"):60106,y=v?Symbol.for("react.fragment"):60107,C=v?Symbol.for("react.strict_mode"):60108,x=v?Symbol.for("react.profiler"):60114,D=v?Symbol.for("react.provider"):60109,O=v?Symbol.for("react.context"):60110,$=v?Symbol.for("react.async_mode"):60111,U=v?Symbol.for("react.concurrent_mode"):60111,T=v?Symbol.for("react.forward_ref"):60112,G=v?Symbol.for("react.suspense"):60113,W=v?Symbol.for("react.suspense_list"):60120,q=v?Symbol.for("react.memo"):60115,J=v?Symbol.for("react.lazy"):60116,ne=v?Symbol.for("react.block"):60121,K=v?Symbol.for("react.fundamental"):60117,te=v?Symbol.for("react.responder"):60118,z=v?Symbol.for("react.scope"):60119;function N(m){if(typeof m=="object"&&m!==null){var oe=m.$$typeof;switch(oe){case F:switch(m=m.type,m){case $:case U:case y:case x:case C:case G:return m;default:switch(m=m&&m.$$typeof,m){case O:case T:case J:case q:case D:return m;default:return oe}}case p:return oe}}}function h(m){return N(m)===U}E=$,E=U,E=O,E=D,E=F,E=T,E=y,E=J,E=q,E=p,E=x,E=C,E=G,E=function(m){return h(m)||N(m)===$},E=h,E=function(m){return N(m)===O},E=function(m){return N(m)===D},E=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===F},E=function(m){return N(m)===T},E=function(m){return N(m)===y},E=function(m){return N(m)===J},E=function(m){return N(m)===q},E=function(m){return N(m)===p},E=function(m){return N(m)===x},E=function(m){return N(m)===C},E=function(m){return N(m)===G},E=function(m){return typeof m=="string"||typeof m=="function"||m===y||m===U||m===x||m===C||m===G||m===W||typeof m=="object"&&m!==null&&(m.$$typeof===J||m.$$typeof===q||m.$$typeof===D||m.$$typeof===O||m.$$typeof===T||m.$$typeof===K||m.$$typeof===te||m.$$typeof===z||m.$$typeof===ne)},E=N},5376(b,g,E){"use strict";E(6988)},403(b){"use strict";var g=[];function E(p){for(var y=-1,C=0;C<g.length;C++)if(g[C].identifier===p){y=C;break}return y}function v(p,y){for(var C={},x=[],D=0;D<p.length;D++){var O=p[D],$=y.base?O[0]+y.base:O[0],U=C[$]||0,T="".concat($," ").concat(U);C[$]=U+1;var G=E(T),W={css:O[1],media:O[2],sourceMap:O[3],supports:O[4],layer:O[5]};if(G!==-1)g[G].references++,g[G].updater(W);else{var q=F(W,y);y.byIndex=D,g.splice(D,0,{identifier:T,updater:q,references:1})}x.push(T)}return x}function F(p,y){var C=y.domAPI(y);C.update(p);var x=function(O){if(O){if(O.css===p.css&&O.media===p.media&&O.sourceMap===p.sourceMap&&O.supports===p.supports&&O.layer===p.layer)return;C.update(p=O)}else C.remove()};return x}b.exports=function(p,y){y=y||{},p=p||[];var C=v(p,y);return function(D){D=D||[];for(var O=0;O<C.length;O++){var $=C[O],U=E($);g[U].references--}for(var T=v(D,y),G=0;G<C.length;G++){var W=C[G],q=E(W);g[q].references===0&&(g[q].updater(),g.splice(q,1))}C=T}}},7380(b){"use strict";var g={};function E(F){if(typeof g[F]>"u"){var p=document.querySelector(F);if(window.HTMLIFrameElement&&p instanceof window.HTMLIFrameElement)try{p=p.contentDocument.head}catch{p=null}g[F]=p}return g[F]}function v(F,p){var y=E(F);if(!y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");y.appendChild(p)}b.exports=v},7031(b){"use strict";function g(E){var v=document.createElement("style");return E.setAttributes(v,E.attributes),E.insert(v,E.options),v}b.exports=g},211(b,g,E){"use strict";function v(F){var p=E.nc;p&&F.setAttribute("nonce",p)}b.exports=v},2792(b){"use strict";function g(F,p,y){var C="";y.supports&&(C+="@supports (".concat(y.supports,") {")),y.media&&(C+="@media ".concat(y.media," {"));var x=typeof y.layer<"u";x&&(C+="@layer".concat(y.layer.length>0?" ".concat(y.layer):""," {")),C+=y.css,x&&(C+="}"),y.media&&(C+="}"),y.supports&&(C+="}");var D=y.sourceMap;D&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(D))))," */")),p.styleTagTransform(C,F,p.options)}function E(F){if(F.parentNode===null)return!1;F.parentNode.removeChild(F)}function v(F){var p=F.insertStyleElement(F);return{update:function(C){g(p,F,C)},remove:function(){E(p)}}}b.exports=v},1684(b){"use strict";function g(E,v){if(v.styleSheet)v.styleSheet.cssText=E;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(E))}}b.exports=g},6723(b,g,E){"use strict";b.exports=E.p+"slack-icons-v25aaab12924ee17421031.woff2"},9138(b,g,E){"use strict";b.exports=E.p+"lato-blackd3e44e6115ad32c37176.woff2"},4392(b,g,E){"use strict";b.exports=E.p+"lato-bold31816c24a18fbc659282.woff2"},7(b,g,E){"use strict";b.exports=E.p+"lato-italic-black62bc5da14d9c6ff41e5f.woff2"},5959(b,g,E){"use strict";b.exports=E.p+"lato-italic-bold365ea5a303e2259ca5ab.woff2"},5906(b,g,E){"use strict";b.exports=E.p+"lato-italic-light074c7fc38126bb94664d.woff2"},9269(b,g,E){"use strict";b.exports=E.p+"lato-italic4484c4211566a05bd71b.woff2"},5539(b,g,E){"use strict";b.exports=E.p+"lato-light2815bd9ba07f2cbe781a.woff2"},4603(b,g,E){"use strict";b.exports=E.p+"lato-regularf1aa7a0753149183efa2.woff2"}},de={};function I(b){var g=de[b];if(g!==void 0)return g.exports;var E=de[b]={id:b,exports:{}};return Fe[b](E,E.exports,I),E.exports}I.m=Fe,I.n=b=>{var g=b&&b.__esModule?()=>b.default:()=>b;return I.d(g,{a:g}),g},I.d=(b,g)=>{for(var E in g)I.o(g,E)&&!I.o(b,E)&&Object.defineProperty(b,E,{enumerable:!0,get:g[E]})},I.o=(b,g)=>Object.prototype.hasOwnProperty.call(b,g),I.r=b=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(b,"__esModule",{value:!0})},I.p="./",(()=>{I.b=typeof document<"u"&&document.baseURI||self.location.href;var b={290:0}})(),I.nc=void 0;var uo={};(()=>{"use strict";I.r(uo),I.d(uo,{AboutBox:()=>$l});var b={};I.r(b),I.d(b,{uA:()=>h,FK:()=>N,Ob:()=>dr,q6:()=>pr,n:()=>K,_3:()=>z,Qv:()=>_o,fF:()=>p,XX:()=>rn,v2:()=>pe});var g={};I.r(g),I.d(g,{FunctionToString:()=>Wb,InboundFilters:()=>Yb,LinkedErrors:()=>hy});var E={};I.r(E),I.d(E,{Breadcrumbs:()=>lB,Dedupe:()=>yB,GlobalHandlers:()=>Ry,HttpContext:()=>bB,LinkedErrors:()=>mB,TryCatch:()=>jy});var v={};I.r(v),I.d(v,{EventToMain:()=>to,ScopeToMain:()=>xB});var F,p,y,C,x,D,O,$,U,T={},G=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,q=Array.isArray;function J(e,n){for(var t in n)e[t]=n[t];return e}function ne(e){var n=e.parentNode;n&&n.removeChild(e)}function K(e,n,t){var o,i,r,c={};for(r in n)r=="key"?o=n[r]:r=="ref"?i=n[r]:c[r]=n[r];if(arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return te(e,c,o,i,null)}function te(e,n,t,o,i){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++y,__i:-1,__u:0};return i==null&&p.vnode!=null&&p.vnode(r),r}function z(){return{current:null}}function N(e){return e.children}function h(e,n){this.props=e,this.context=n}function m(e,n){if(n==null)return e.__?m(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?m(e):null}function oe(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return oe(e)}}function ze(e){(!e.__d&&(e.__d=!0)&&x.push(e)&&!He.__r++||D!==p.debounceRendering)&&((D=p.debounceRendering)||O)(He)}function He(){var e,n,t,o,i,r,c,a,s;for(x.sort($);e=x.shift();)e.__d&&(n=x.length,o=void 0,r=(i=(t=e).__v).__e,a=[],s=[],(c=t.__P)&&((o=J({},i)).__v=i.__v+1,p.vnode&&p.vnode(o),Eo(c,o,i,t.__n,c.ownerSVGElement!==void 0,32&i.__u?[r]:null,a,r??m(i),!!(32&i.__u),s),o.__.__k[o.__i]=o,Er(a,o,s),o.__e!=r&&oe(o)),x.length>n&&x.sort($));He.__r=0}function ct(e,n,t,o,i,r,c,a,s,l,f){var A,d,u,_,k,B=o&&o.__k||G,w=n.length;for(t.__d=s,Vl(t,n,B),s=t.__d,A=0;A<w;A++)(u=t.__k[A])!=null&&typeof u!="boolean"&&typeof u!="function"&&(d=u.__i===-1?T:B[u.__i]||T,u.__i=A,Eo(e,u,d,i,r,c,a,s,l,f),_=u.__e,u.ref&&d.ref!=u.ref&&(d.ref&&po(d.ref,null,u),f.push(u.ref,u.__c||_,u)),k==null&&_!=null&&(k=_),65536&u.__u||d.__k===u.__k?s=lr(u,s,e):typeof u.type=="function"&&u.__d!==void 0?s=u.__d:_&&(s=_.nextSibling),u.__d=void 0,u.__u&=-196609);t.__d=s,t.__e=k}function Vl(e,n,t){var o,i,r,c,a,s=n.length,l=t.length,f=l,A=0;for(e.__k=[],o=0;o<s;o++)(i=e.__k[o]=(i=n[o])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?te(null,i,null,null,i):q(i)?te(N,{children:i},null,null,null):i.__b>0?te(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,a=Yl(i,t,c=o+A,f),i.__i=a,r=null,a!==-1&&(f--,(r=t[a])&&(r.__u|=131072)),r==null||r.__v===null?(a==-1&&A--,typeof i.type!="function"&&(i.__u|=65536)):a!==c&&(a===c+1?A++:a>c?f>s-c?A+=a-c:A--:A=a<c&&a==c-1?a-c:0,a!==o+A&&(i.__u|=65536))):(r=t[o])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=m(r)),go(r,r,!1),t[o]=null,f--);if(f)for(o=0;o<l;o++)(r=t[o])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=m(r)),go(r,r))}function lr(e,n,t){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,n=lr(o[i],n,t));return n}return e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e),n&&n.nextSibling}function pe(e,n){return n=n||[],e==null||typeof e=="boolean"||(q(e)?e.some(function(t){pe(t,n)}):n.push(e)),n}function Yl(e,n,t,o){var i=e.key,r=e.type,c=t-1,a=t+1,s=n[t];if(s===null||s&&i==s.key&&r===s.type)return t;if(o>(s!=null&&!(131072&s.__u)?1:0))for(;c>=0||a<n.length;){if(c>=0){if((s=n[c])&&!(131072&s.__u)&&i==s.key&&r===s.type)return c;c--}if(a<n.length){if((s=n[a])&&!(131072&s.__u)&&i==s.key&&r===s.type)return a;a++}}return-1}function Ar(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||W.test(n)?t:t+"px"}function at(e,n,t,o,i){var r;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||Ar(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||Ar(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")r=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o?t.u=o.u:(t.u=Date.now(),e.addEventListener(n,r?ur:fr,r)):e.removeEventListener(n,r?ur:fr,r);else{if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="width"&&n!=="height"&&n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n!=="rowSpan"&&n!=="colSpan"&&n!=="role"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function fr(e){var n=this.l[e.type+!1];if(e.t){if(e.t<=n.u)return}else e.t=Date.now();return n(p.event?p.event(e):e)}function ur(e){return this.l[e.type+!0](p.event?p.event(e):e)}function Eo(e,n,t,o,i,r,c,a,s,l){var f,A,d,u,_,k,B,w,R,Y,ae,ee,Be,X,Re,Q=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(s=!!(32&t.__u),r=[a=n.__e=t.__e]),(f=p.__b)&&f(n);e:if(typeof Q=="function")try{if(w=n.props,R=(f=Q.contextType)&&o[f.__c],Y=f?R?R.props.value:f.__:o,t.__c?B=(A=n.__c=t.__c).__=A.__E:("prototype"in Q&&Q.prototype.render?n.__c=A=new Q(w,Y):(n.__c=A=new h(w,Y),A.constructor=Q,A.render=Ql),R&&R.sub(A),A.props=w,A.state||(A.state={}),A.context=Y,A.__n=o,d=A.__d=!0,A.__h=[],A._sb=[]),A.__s==null&&(A.__s=A.state),Q.getDerivedStateFromProps!=null&&(A.__s==A.state&&(A.__s=J({},A.__s)),J(A.__s,Q.getDerivedStateFromProps(w,A.__s))),u=A.props,_=A.state,A.__v=n,d)Q.getDerivedStateFromProps==null&&A.componentWillMount!=null&&A.componentWillMount(),A.componentDidMount!=null&&A.__h.push(A.componentDidMount);else{if(Q.getDerivedStateFromProps==null&&w!==u&&A.componentWillReceiveProps!=null&&A.componentWillReceiveProps(w,Y),!A.__e&&(A.shouldComponentUpdate!=null&&A.shouldComponentUpdate(w,A.__s,Y)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(A.props=w,A.state=A.__s,A.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(De){De&&(De.__=n)}),ae=0;ae<A._sb.length;ae++)A.__h.push(A._sb[ae]);A._sb=[],A.__h.length&&c.push(A);break e}A.componentWillUpdate!=null&&A.componentWillUpdate(w,A.__s,Y),A.componentDidUpdate!=null&&A.__h.push(function(){A.componentDidUpdate(u,_,k)})}if(A.context=Y,A.props=w,A.__P=e,A.__e=!1,ee=p.__r,Be=0,"prototype"in Q&&Q.prototype.render){for(A.state=A.__s,A.__d=!1,ee&&ee(n),f=A.render(A.props,A.state,A.context),X=0;X<A._sb.length;X++)A.__h.push(A._sb[X]);A._sb=[]}else do A.__d=!1,ee&&ee(n),f=A.render(A.props,A.state,A.context),A.state=A.__s;while(A.__d&&++Be<25);A.state=A.__s,A.getChildContext!=null&&(o=J(J({},o),A.getChildContext())),d||A.getSnapshotBeforeUpdate==null||(k=A.getSnapshotBeforeUpdate(u,_)),ct(e,q(Re=f!=null&&f.type===N&&f.key==null?f.props.children:f)?Re:[Re],n,t,o,i,r,c,a,s,l),A.base=n.__e,n.__u&=-161,A.__h.length&&c.push(A),B&&(A.__E=A.__=null)}catch(De){n.__v=null,s||r!=null?(n.__e=a,n.__u|=s?160:32,r[r.indexOf(a)]=null):(n.__e=t.__e,n.__k=t.__k),p.__e(De,n,t)}else r==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=Xl(t.__e,n,t,o,i,r,c,s,l);(f=p.diffed)&&f(n)}function Er(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)po(t[o],t[++o],t[++o]);p.__c&&p.__c(n,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){p.__e(r,i.__v)}})}function Xl(e,n,t,o,i,r,c,a,s){var l,f,A,d,u,_,k,B=t.props,w=n.props,R=n.type;if(R==="svg"&&(i=!0),r!=null){for(l=0;l<r.length;l++)if((u=r[l])&&"setAttribute"in u==!!R&&(R?u.localName===R:u.nodeType===3)){e=u,r[l]=null;break}}if(e==null){if(R===null)return document.createTextNode(w);e=i?document.createElementNS("http://www.w3.org/2000/svg",R):document.createElement(R,w.is&&w),r=null,a=!1}if(R===null)B===w||a&&e.data===w||(e.data=w);else{if(r=r&&F.call(e.childNodes),B=t.props||T,!a&&r!=null)for(B={},l=0;l<e.attributes.length;l++)B[(u=e.attributes[l]).name]=u.value;for(l in B)u=B[l],l=="children"||(l=="dangerouslySetInnerHTML"?A=u:l==="key"||l in w||at(e,l,null,u,i));for(l in w)u=w[l],l=="children"?d=u:l=="dangerouslySetInnerHTML"?f=u:l=="value"?_=u:l=="checked"?k=u:l==="key"||a&&typeof u!="function"||B[l]===u||at(e,l,u,B[l],i);if(f)a||A&&(f.__html===A.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),n.__k=[];else if(A&&(e.innerHTML=""),ct(e,q(d)?d:[d],n,t,o,i&&R!=="foreignObject",r,c,r?r[0]:t.__k&&m(t,0),a,s),r!=null)for(l=r.length;l--;)r[l]!=null&&ne(r[l]);a||(l="value",_!==void 0&&(_!==e[l]||R==="progress"&&!_||R==="option"&&_!==B[l])&&at(e,l,_,B[l],!1),l="checked",k!==void 0&&k!==e[l]&&at(e,l,k,B[l],!1))}return e}function po(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(o){p.__e(o,t)}}function go(e,n,t){var o,i;if(p.unmount&&p.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||po(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){p.__e(r,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&go(o[i],n,t||typeof e.type!="function");t||e.__e==null||ne(e.__e),e.__=e.__e=e.__d=void 0}function Ql(e,n,t){return this.constructor(e,t)}function rn(e,n,t){var o,i,r,c;p.__&&p.__(e,n),i=(o=typeof t=="function")?null:t&&t.__k||n.__k,r=[],c=[],Eo(n,e=(!o&&t||n).__k=K(N,null,[e]),i||T,T,n.ownerSVGElement!==void 0,!o&&t?[t]:i?null:n.firstChild?F.call(n.childNodes):null,r,!o&&t?t:i?i.__e:n.firstChild,o,c),Er(r,e,c)}function _o(e,n){rn(e,n,_o)}function dr(e,n,t){var o,i,r,c,a=J({},e.props);for(r in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),n)r=="key"?o=n[r]:r=="ref"?i=n[r]:a[r]=n[r]===void 0&&c!==void 0?c[r]:n[r];return arguments.length>2&&(a.children=arguments.length>3?F.call(arguments,2):t),te(e.type,a,o||e.key,i||e.ref,null)}function pr(e,n){var t={__c:n="__cC"+U++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&i.some(function(a){a.__e=!0,ze(a)})},this.sub=function(c){i.push(c);var a=c.componentWillUnmount;c.componentWillUnmount=function(){i.splice(i.indexOf(c),1),a&&a.call(c)}}),o.children}};return t.Provider.__=t.Consumer.contextType=t}F=G.slice,p={__e:function(e,n,t,o){for(var i,r,c;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),c=i.__d),c)return i.__E=i}catch(a){e=a}throw e}},y=0,C=function(e){return e!=null&&e.constructor==null},h.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=J({},this.state),typeof e=="function"&&(e=e(J({},t),this.props)),e&&J(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),ze(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ze(this))},h.prototype.render=N,x=[],O=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$=function(e,n){return e.__v.__b-n.__v.__b},He.__r=0,U=0;var Zl,gr,eA=/["&<]/;function _r(e){if(e.length===0||eA.test(e)===!1)return e;for(var n=0,t=0,o="",i="";t<e.length;t++){switch(e.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}t!==n&&(o+=e.slice(n,t)),o+=i,n=t+1}return t!==n&&(o+=e.slice(n,t)),o}var nA=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,tA=0,oA=Array.isArray;function re(e,n,t,o,i,r){var c,a,s={};for(a in n)a=="ref"?c=n[a]:s[a]=n[a];var l={type:e,props:s,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--tA,__i:-1,__u:0,__source:i,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(a in c)s[a]===void 0&&(s[a]=c[a]);return p.vnode&&p.vnode(l),l}function yC(e){var n=re(Zl,{tpl:e,exprs:[].slice.call(arguments,1)});return n.key=n.__v,n}var hr={},iA=/[A-Z]/g;function BC(e,n){if(gr.attr){var t=gr.attr(e,n);if(typeof t=="string")return t}if(e==="ref"||e==="key")return"";if(e==="style"&&typeof n=="object"){var o="";for(var i in n){var r=n[i];if(r!=null&&r!==""){var c=i[0]=="-"?i:hr[i]||(hr[i]=i.replace(iA,"-$&").toLowerCase()),a=";";typeof r!="number"||c.startsWith("--")||nA.test(c)||(a="px;"),o=o+c+":"+r+a}}return e+'="'+o+'"'}return n==null||n===!1||typeof n=="function"||typeof n=="object"?"":n===!0?e:e+'="'+_r(n)+'"'}function rA(e){if(e==null||typeof e=="boolean"||typeof e=="function")return null;if(typeof e=="object"){if(e.constructor===void 0)return e;if(oA(e)){for(var n=0;n<e.length;n++)e[n]=rA(e[n]);return e}}return _r(""+e)}var cA=I(403),aA=I.n(cA),sA=I(2792),lA=I.n(sA),AA=I(7380),fA=I.n(AA),uA=I(211),EA=I.n(uA),dA=I(7031),pA=I.n(dA),gA=I(1684),_A=I.n(gA),st=I(5550),cn={};cn.styleTagTransform=_A(),cn.setAttributes=EA(),cn.insert=fA().bind(null,"head"),cn.domAPI=lA(),cn.insertStyleElement=pA();var FC=aA()(st.A,cn);const vC=st.A&&st.A.locals?st.A.locals:void 0;var hA=(e,n,t)=>{if(n.length===1&&n[0]===t){let o=!1;try{const i={};e(i)===i&&(o=!0)}catch{}if(o){let i;try{throw new Error}catch(r){({stack:i}=r)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:i})}}},mA=(e,n,t)=>{const{memoize:o,memoizeOptions:i}=n,{inputSelectorResults:r,inputSelectorResultsCopy:c}=e,a=o(()=>({}),...i);if(!(a.apply(null,r)===a.apply(null,c))){let l;try{throw new Error}catch(f){({stack:l}=f)}console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:t,firstInputs:r,secondInputs:c,stack:l})}},mr={inputStabilityCheck:"once",identityFunctionCheck:"once"},CC=e=>{Object.assign(mr,e)},lt=null;function br(e,n=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(n)}function bA(e,n=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(n)}function yA(e,n="expected all items to be functions, instead received the following types: "){if(!e.every(t=>typeof t=="function")){const t=e.map(o=>typeof o=="function"?`function ${o.name||"unnamed"}()`:typeof o).join(", ");throw new TypeError(`${n}[${t}]`)}}var yr=e=>Array.isArray(e)?e:[e];function BA(e){const n=Array.isArray(e[0])?e[0]:e;return yA(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}function FA(e,n){const t=[],{length:o}=e;for(let i=0;i<o;i++)t.push(e[i].apply(null,n));return t}var kC=(e,n)=>{const{identityFunctionCheck:t,inputStabilityCheck:o}={...mr,...n};return{identityFunctionCheck:{shouldRun:t==="always"||t==="once"&&e,run:hA},inputStabilityCheck:{shouldRun:o==="always"||o==="once"&&e,run:mA}}},Br=0,In=null,ho=class{revision=Br;_value;_lastValue;_isEqual=mo;constructor(e,n=mo){this._value=this._lastValue=e,this._isEqual=n}get value(){return In?.add(this),this._value}set value(e){this.value!==e&&(this._value=e,this.revision=++Br)}};function mo(e,n){return e===n}var vA=class{_cachedValue;_cachedRevision=-1;_deps=[];hits=0;fn;constructor(e){this.fn=e}clear(){this._cachedValue=void 0,this._cachedRevision=-1,this._deps=[],this.hits=0}get value(){if(this.revision>this._cachedRevision){const{fn:e}=this,n=new Set,t=In;In=n,this._cachedValue=e(),In=t,this.hits++,this._deps=Array.from(n),this._cachedRevision=this.revision}return In?.add(this),this._cachedValue}get revision(){return Math.max(...this._deps.map(e=>e.revision),0)}};function bo(e){return e instanceof ho||console.warn("Not a valid cell! ",e),e.value}function CA(e,n){if(!(e instanceof ho))throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");e.value=e._lastValue=n}function kA(e,n=mo){return new ho(e,n)}function wA(e){return br(e,"the first parameter to `createCache` must be a function"),new vA(e)}var SA=(e,n)=>!1;function At(){return kA(null,SA)}function ft(e,n){CA(e,n)}var Fr=e=>{let n=e.collectionTag;n===null&&(n=e.collectionTag=At()),bo(n)},ut=e=>{const n=e.collectionTag;n!==null&&ft(n,null)},wC=Symbol(),vr=0,xA=Object.getPrototypeOf({}),TA=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy(this,On);tag=At();tags={};children={};collectionTag=null;id=vr++},On={get(e,n){function t(){const{value:i}=e,r=Reflect.get(i,n);if(typeof n=="symbol"||n in xA)return r;if(typeof r=="object"&&r!==null){let c=e.children[n];return c===void 0&&(c=e.children[n]=Cr(r)),c.tag&&bo(c.tag),c.proxy}else{let c=e.tags[n];return c===void 0&&(c=e.tags[n]=At(),c.value=r),bo(c),r}}return t()},ownKeys(e){return Fr(e),Reflect.ownKeys(e.value)},getOwnPropertyDescriptor(e,n){return Reflect.getOwnPropertyDescriptor(e.value,n)},has(e,n){return Reflect.has(e.value,n)}},IA=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy([this],OA);tag=At();tags={};children={};collectionTag=null;id=vr++},OA={get([e],n){return n==="length"&&Fr(e),On.get(e,n)},ownKeys([e]){return On.ownKeys(e)},getOwnPropertyDescriptor([e],n){return On.getOwnPropertyDescriptor(e,n)},has([e],n){return On.has(e,n)}};function Cr(e){return Array.isArray(e)?new IA(e):new TA(e)}function kr(e,n){const{value:t,tags:o,children:i}=e;if(e.value=n,Array.isArray(t)&&Array.isArray(n)&&t.length!==n.length)ut(e);else if(t!==n){let r=0,c=0,a=!1;for(const l in t)r++;for(const l in n)if(c++,!(l in t)){a=!0;break}(a||r!==c)&&ut(e)}for(const r in o){const c=t[r],a=n[r];c!==a&&(ut(e),ft(o[r],a)),typeof a=="object"&&a!==null&&delete o[r]}for(const r in i){const c=i[r],a=n[r];c.value!==a&&(typeof a=="object"&&a!==null?kr(c,a):(wr(c),delete i[r]))}}function wr(e){e.tag&&ft(e.tag,null),ut(e);for(const n in e.tags)ft(e.tags[n],null);for(const n in e.children)wr(e.children[n])}function RA(e){let n;return{get(t){return n&&e(n.key,t)?n.value:lt},put(t,o){n={key:t,value:o}},getEntries(){return n?[n]:[]},clear(){n=void 0}}}function DA(e,n){let t=[];function o(a){const s=t.findIndex(l=>n(a,l.key));if(s>-1){const l=t[s];return s>0&&(t.splice(s,1),t.unshift(l)),l.value}return lt}function i(a,s){o(a)===lt&&(t.unshift({key:a,value:s}),t.length>e&&t.pop())}function r(){return t}function c(){t=[]}return{get:o,put:i,getEntries:r,clear:c}}var Sr=(e,n)=>e===n;function xr(e){return function(t,o){if(t===null||o===null||t.length!==o.length)return!1;const{length:i}=t;for(let r=0;r<i;r++)if(!e(t[r],o[r]))return!1;return!0}}function SC(e,n){const t=typeof n=="object"?n:{equalityCheck:n},{equalityCheck:o=Sr,maxSize:i=1,resultEqualityCheck:r}=t,c=xr(o);let a=0;const s=i<=1?RA(c):DA(i,c);function l(){let f=s.get(arguments);if(f===lt){if(f=e.apply(null,arguments),a++,r){const d=s.getEntries().find(u=>r(u.value,f));d&&(f=d.value,a!==0&&a--)}s.put(arguments,f)}return f}return l.clearCache=()=>{s.clear(),l.resetResultsCount()},l.resultsCount=()=>a,l.resetResultsCount=()=>{a=0},l}function xC(e){const n=Cr([]);let t=null;const o=xr(Sr),i=wA(()=>e.apply(null,n.proxy));function r(){return o(t,arguments)||(kr(n,arguments),t=arguments),i.value}return r.clearCache=()=>i.clear(),r}var NA=class{constructor(e){this.value=e}deref(){return this.value}},PA=typeof WeakRef<"u"?WeakRef:NA,MA=0,Tr=1;function Et(){return{s:MA,v:void 0,o:null,p:null}}function Ir(e,n={}){let t=Et();const{resultEqualityCheck:o}=n;let i,r=0;function c(){let a=t;const{length:s}=arguments;for(let A=0,d=s;A<d;A++){const u=arguments[A];if(typeof u=="function"||typeof u=="object"&&u!==null){let _=a.o;_===null&&(a.o=_=new WeakMap);const k=_.get(u);k===void 0?(a=Et(),_.set(u,a)):a=k}else{let _=a.p;_===null&&(a.p=_=new Map);const k=_.get(u);k===void 0?(a=Et(),_.set(u,a)):a=k}}const l=a;let f;if(a.s===Tr)f=a.v;else if(f=e.apply(null,arguments),r++,o){const A=i?.deref?.()??i;A!=null&&o(A,f)&&(f=A,r!==0&&r--),i=typeof f=="object"&&f!==null||typeof f=="function"?new PA(f):f}return l.s=Tr,l.v=f,f}return c.clearCache=()=>{t=Et(),c.resetResultsCount()},c.resultsCount=()=>r,c.resetResultsCount=()=>{r=0},c}function LA(e,...n){const t=typeof e=="function"?{memoize:e,memoizeOptions:n}:e,o=(...i)=>{let r=0,c=0,a,s={},l=i.pop();typeof l=="object"&&(s=l,l=i.pop()),br(l,`createSelector expects an output function after the inputs, but received: [${typeof l}]`);const f={...t,...s},{memoize:A,memoizeOptions:d=[],argsMemoize:u=Ir,argsMemoizeOptions:_=[],devModeChecks:k={}}=f,B=yr(d),w=yr(_),R=BA(i),Y=A(function(){return r++,l.apply(null,arguments)},...B);let ae=!0;const ee=u(function(){c++;const X=FA(R,arguments);return a=Y.apply(null,X),a},...w);return Object.assign(ee,{resultFunc:l,memoizedResultFunc:Y,dependencies:R,dependencyRecomputations:()=>c,resetDependencyRecomputations:()=>{c=0},lastResult:()=>a,recomputations:()=>r,resetRecomputations:()=>{r=0},memoize:A,argsMemoize:u})};return Object.assign(o,{withTypes:()=>o}),o}var ce=LA(Ir),UA=Object.assign((e,n=ce)=>{bA(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const t=Object.keys(e),o=t.map(r=>e[r]);return n(o,(...r)=>r.reduce((c,a,s)=>(c[t[s]]=a,c),{}))},{withTypes:()=>UA}),Rn=(e=>(e.DOGFOOD="dogfood",e.BETA="beta",e.PROD="prod",e))(Rn||{}),jA=(e=>(e.BETA="beta",e.PROD="prod",e))(jA||{});const TC=e=>e!=="prod";var Or,$A,JA,qA,zA;function IC(e,n){for(const t of Object.values(qA))if($A(e[t],n))return t;return null}const HA=ce(e=>e,({zoomLevel:e,notificationZoomLevel:n})=>n&&n!==null?n:e),OC=ce(HA,e=>1+e*.2),GA=({settings:e})=>e.releaseChannelOverride||Rn.PROD,RC=({environment:e,settings:n})=>{const t=process.env.SLACK_DEVELOPER_MENU;if(t==="false")return!1;const{isDevMode:o,devEnv:i,openDevToolsOnStart:r}=e,{devToolsEnabled:c}=n;return o||!!i||r||!!t||c},DC=({settings:e})=>{const{devToolsEnabled:n}=e;return n},WA=e=>!0,NC=({app:e,environment:n,settings:t})=>{const{notificationMethod:o}=t,i=zA(JA.FORCE_NATIVE_NOTIFICATIONS,e),r=o==="html",c=WA(n);return Or.debug("isShowingHtmlNotifications",{notificationMethod:o,enforceNativeNotifications:i,isPreferred:r,canShow:c}),i?(Or.info("isShowingHtmlNotifications: notification method is HTML but we force native notification via experiment."),!1):!!(r&&c)},PC=e=>{const n=e.notificationTimeout;return Number.isSafeInteger(n)&&n===Number.MAX_SAFE_INTEGER};var Me=(e=>(e.GENERAL="desktop_general",e.BROWSER="desktop_browser",e.RENDERER="desktop_renderer",e.MESSAGEBOX="desktop_messagebox",e.MENU="desktop_menu",e.EXTERNAL="desktop_external",e))(Me||{});function KA(e,n,t,o){return t?{[Rn.BETA]:o.t("Beta",Me.RENDERER)(),[Rn.PROD]:o.t("Production",Me.GENERAL)(),[Rn.DOGFOOD]:"Dogfood"}[n]||"":XA(e,o)}function VA(e){const n="791195a",t="HEAD";let o=e||"";return o.endsWith(".65535")&&n&&t&&(o=`${o} ${t}/${n}`),o}function YA(e){switch(e){case"x64":return" 64-bit";case"arm64":return" 64-bit (ARM)";default:return""}}function MC(e){const n=e.lastIndexOf("791195a");return n>-1?e.slice(0,n):e}function XA(e,n){switch(e){case"WinStore":return n.t("Windows Store",Me.RENDERER)();case"MAS":return n.t("App Store",Me.RENDERER)();case"Snap":case"Flatpak":case"MSI":case"LMSI":case"MSQ":return e;default:return""}}var ge=(e=>(e[e.NORMAL=1e3]="NORMAL",e[e.RESTRICTED=1001]="RESTRICTED",e[e.MILITARY=1002]="MILITARY",e))(ge||{}),QA=Array.isArray;const _e=QA;var ZA=typeof global=="object"&&global&&global.Object===Object&&global;const Rr=ZA;var ef=typeof self=="object"&&self&&self.Object===Object&&self,nf=Rr||ef||Function("return this")();const ve=nf;var tf=ve.Symbol;const he=tf;var Dr=Object.prototype,of=Dr.hasOwnProperty,rf=Dr.toString,Dn=he?he.toStringTag:void 0;function cf(e){var n=of.call(e,Dn),t=e[Dn];try{e[Dn]=void 0;var o=!0}catch{}var i=rf.call(e);return o&&(n?e[Dn]=t:delete e[Dn]),i}const af=cf;var sf=Object.prototype,lf=sf.toString;function Af(e){return lf.call(e)}const ff=Af;var uf="[object Null]",Ef="[object Undefined]",Nr=he?he.toStringTag:void 0;function df(e){return e==null?e===void 0?Ef:uf:Nr&&Nr in Object(e)?af(e):ff(e)}const an=df;function pf(e){return e!=null&&typeof e=="object"}const Ge=pf;var gf="[object Symbol]";function _f(e){return typeof e=="symbol"||Ge(e)&&an(e)==gf}const dt=_f;var hf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,mf=/^\w*$/;function bf(e,n){if(_e(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||dt(e)?!0:mf.test(e)||!hf.test(e)||n!=null&&e in Object(n)}const yo=bf;function yf(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}const We=yf;var Bf="[object AsyncFunction]",Ff="[object Function]",vf="[object GeneratorFunction]",Cf="[object Proxy]";function kf(e){if(!We(e))return!1;var n=an(e);return n==Ff||n==vf||n==Bf||n==Cf}const Pr=kf;var wf=ve["__core-js_shared__"];const Bo=wf;var Mr=function(){var e=/[^.]+$/.exec(Bo&&Bo.keys&&Bo.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Sf(e){return!!Mr&&Mr in e}const xf=Sf;var Tf=Function.prototype,If=Tf.toString;function Of(e){if(e!=null){try{return If.call(e)}catch{}try{return e+""}catch{}}return""}const Ke=Of;var Rf=/[\\^$.*+?()[\]{}|]/g,Df=/^\[object .+?Constructor\]$/,Nf=Function.prototype,Pf=Object.prototype,Mf=Nf.toString,Lf=Pf.hasOwnProperty,Uf=RegExp("^"+Mf.call(Lf).replace(Rf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function jf(e){if(!We(e)||xf(e))return!1;var n=Pr(e)?Uf:Df;return n.test(Ke(e))}const $f=jf;function Jf(e,n){return e?.[n]}const qf=Jf;function zf(e,n){var t=qf(e,n);return $f(t)?t:void 0}const Ve=zf;var Hf=Ve(Object,"create");const Nn=Hf;function Gf(){this.__data__=Nn?Nn(null):{},this.size=0}const Wf=Gf;function Kf(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}const Vf=Kf;var Yf="__lodash_hash_undefined__",Xf=Object.prototype,Qf=Xf.hasOwnProperty;function Zf(e){var n=this.__data__;if(Nn){var t=n[e];return t===Yf?void 0:t}return Qf.call(n,e)?n[e]:void 0}const eu=Zf;var nu=Object.prototype,tu=nu.hasOwnProperty;function ou(e){var n=this.__data__;return Nn?n[e]!==void 0:tu.call(n,e)}const iu=ou;var ru="__lodash_hash_undefined__";function cu(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Nn&&n===void 0?ru:n,this}const au=cu;function sn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}sn.prototype.clear=Wf,sn.prototype.delete=Vf,sn.prototype.get=eu,sn.prototype.has=iu,sn.prototype.set=au;const Lr=sn;function su(){this.__data__=[],this.size=0}const lu=su;function Au(e,n){return e===n||e!==e&&n!==n}const Fo=Au;function fu(e,n){for(var t=e.length;t--;)if(Fo(e[t][0],n))return t;return-1}const pt=fu;var uu=Array.prototype,Eu=uu.splice;function du(e){var n=this.__data__,t=pt(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():Eu.call(n,t,1),--this.size,!0}const pu=du;function gu(e){var n=this.__data__,t=pt(n,e);return t<0?void 0:n[t][1]}const _u=gu;function hu(e){return pt(this.__data__,e)>-1}const mu=hu;function bu(e,n){var t=this.__data__,o=pt(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}const yu=bu;function ln(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}ln.prototype.clear=lu,ln.prototype.delete=pu,ln.prototype.get=_u,ln.prototype.has=mu,ln.prototype.set=yu;const gt=ln;var Bu=Ve(ve,"Map");const Pn=Bu;function Fu(){this.size=0,this.__data__={hash:new Lr,map:new(Pn||gt),string:new Lr}}const vu=Fu;function Cu(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}const ku=Cu;function wu(e,n){var t=e.__data__;return ku(n)?t[typeof n=="string"?"string":"hash"]:t.map}const _t=wu;function Su(e){var n=_t(this,e).delete(e);return this.size-=n?1:0,n}const xu=Su;function Tu(e){return _t(this,e).get(e)}const Iu=Tu;function Ou(e){return _t(this,e).has(e)}const Ru=Ou;function Du(e,n){var t=_t(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}const Nu=Du;function An(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}An.prototype.clear=vu,An.prototype.delete=xu,An.prototype.get=Iu,An.prototype.has=Ru,An.prototype.set=Nu;const ht=An;var Pu="Expected a function";function vo(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(Pu);var t=function(){var o=arguments,i=n?n.apply(this,o):o[0],r=t.cache;if(r.has(i))return r.get(i);var c=e.apply(this,o);return t.cache=r.set(i,c)||r,c};return t.cache=new(vo.Cache||ht),t}vo.Cache=ht;const Co=vo;var Mu=500;function Lu(e){var n=Co(e,function(o){return t.size===Mu&&t.clear(),o}),t=n.cache;return n}const Uu=Lu;var ju=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$u=/\\(\\)?/g,Ju=Uu(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(ju,function(t,o,i,r){n.push(i?r.replace($u,"$1"):o||t)}),n});const qu=Ju;function zu(e,n){for(var t=-1,o=e==null?0:e.length,i=Array(o);++t<o;)i[t]=n(e[t],t,e);return i}const ko=zu;var Hu=1/0,Ur=he?he.prototype:void 0,jr=Ur?Ur.toString:void 0;function $r(e){if(typeof e=="string")return e;if(_e(e))return ko(e,$r)+"";if(dt(e))return jr?jr.call(e):"";var n=e+"";return n=="0"&&1/e==-Hu?"-0":n}const Gu=$r;function Wu(e){return e==null?"":Gu(e)}const Ku=Wu;function Vu(e,n){return _e(e)?e:yo(e,n)?[e]:qu(Ku(e))}const mt=Vu;var Yu=1/0;function Xu(e){if(typeof e=="string"||dt(e))return e;var n=e+"";return n=="0"&&1/e==-Yu?"-0":n}const Mn=Xu;function Qu(e,n){n=mt(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[Mn(n[t++])];return t&&t==o?e:void 0}const wo=Qu;var Zu=function(){try{var e=Ve(Object,"defineProperty");return e({},"",{}),e}catch{}}();const bt=Zu;function eE(e,n,t){n=="__proto__"&&bt?bt(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}const nE=eE;var tE=Object.prototype,oE=tE.hasOwnProperty;function iE(e,n,t){var o=e[n];(!(oE.call(e,n)&&Fo(o,t))||t===void 0&&!(n in e))&&nE(e,n,t)}const rE=iE;var cE=9007199254740991,aE=/^(?:0|[1-9]\d*)$/;function sE(e,n){var t=typeof e;return n=n??cE,!!n&&(t=="number"||t!="symbol"&&aE.test(e))&&e>-1&&e%1==0&&e<n}const So=sE;function lE(e,n,t,o){if(!We(e))return e;n=mt(n,e);for(var i=-1,r=n.length,c=r-1,a=e;a!=null&&++i<r;){var s=Mn(n[i]),l=t;if(s==="__proto__"||s==="constructor"||s==="prototype")return e;if(i!=c){var f=a[s];l=o?o(f,s,a):void 0,l===void 0&&(l=We(f)?f:So(n[i+1])?[]:{})}rE(a,s,l),a=a[s]}return e}const AE=lE;function fE(e,n,t){for(var o=-1,i=n.length,r={};++o<i;){var c=n[o],a=wo(e,c);t(a,c)&&AE(r,mt(c,e),a)}return r}const uE=fE;function EE(e,n){return e!=null&&n in Object(e)}const dE=EE;var pE="[object Arguments]";function gE(e){return Ge(e)&&an(e)==pE}const Jr=gE;var qr=Object.prototype,_E=qr.hasOwnProperty,hE=qr.propertyIsEnumerable,mE=Jr(function(){return arguments}())?Jr:function(e){return Ge(e)&&_E.call(e,"callee")&&!hE.call(e,"callee")};const xo=mE;var bE=9007199254740991;function yE(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=bE}const To=yE;function BE(e,n,t){n=mt(n,e);for(var o=-1,i=n.length,r=!1;++o<i;){var c=Mn(n[o]);if(!(r=e!=null&&t(e,c)))break;e=e[c]}return r||++o!=i?r:(i=e==null?0:e.length,!!i&&To(i)&&So(c,i)&&(_e(e)||xo(e)))}const FE=BE;function vE(e,n){return e!=null&&FE(e,n,dE)}const zr=vE;function CE(e,n){return uE(e,n,function(t,o){return zr(e,o)})}const kE=CE;function wE(e,n){for(var t=-1,o=n.length,i=e.length;++t<o;)e[i+t]=n[t];return e}const Hr=wE;var Gr=he?he.isConcatSpreadable:void 0;function SE(e){return _e(e)||xo(e)||!!(Gr&&e&&e[Gr])}const xE=SE;function Wr(e,n,t,o,i){var r=-1,c=e.length;for(t||(t=xE),i||(i=[]);++r<c;){var a=e[r];n>0&&t(a)?n>1?Wr(a,n-1,t,o,i):Hr(i,a):o||(i[i.length]=a)}return i}const TE=Wr;function IE(e){var n=e==null?0:e.length;return n?TE(e,1):[]}const OE=IE;function RE(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}const DE=RE;var Kr=Math.max;function NE(e,n,t){return n=Kr(n===void 0?e.length-1:n,0),function(){for(var o=arguments,i=-1,r=Kr(o.length-n,0),c=Array(r);++i<r;)c[i]=o[n+i];i=-1;for(var a=Array(n+1);++i<n;)a[i]=o[i];return a[n]=t(c),DE(e,this,a)}}const Vr=NE;function PE(e){return function(){return e}}const ME=PE;function LE(e){return e}const Io=LE;var UE=bt?function(e,n){return bt(e,"toString",{configurable:!0,enumerable:!1,value:ME(n),writable:!0})}:Io;const jE=UE;var $E=800,JE=16,qE=Date.now;function zE(e){var n=0,t=0;return function(){var o=qE(),i=JE-(o-t);if(t=o,i>0){if(++n>=$E)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}var HE=zE(jE);const Yr=HE;function GE(e){return Yr(Vr(e,void 0,OE),e+"")}var WE=GE(function(e,n){return e==null?{}:kE(e,n)});const KE=WE;var VE="__lodash_hash_undefined__";function YE(e){return this.__data__.set(e,VE),this}const XE=YE;function QE(e){return this.__data__.has(e)}const ZE=QE;function yt(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new ht;++n<t;)this.add(e[n])}yt.prototype.add=yt.prototype.push=XE,yt.prototype.has=ZE;const Xr=yt;function ed(e,n,t,o){for(var i=e.length,r=t+(o?1:-1);o?r--:++r<i;)if(n(e[r],r,e))return r;return-1}const nd=ed;function td(e){return e!==e}const od=td;function id(e,n,t){for(var o=t-1,i=e.length;++o<i;)if(e[o]===n)return o;return-1}const rd=id;function cd(e,n,t){return n===n?rd(e,n,t):nd(e,od,t)}const ad=cd;function sd(e,n){var t=e==null?0:e.length;return!!t&&ad(e,n,0)>-1}const ld=sd;function Ad(e,n,t){for(var o=-1,i=e==null?0:e.length;++o<i;)if(t(n,e[o]))return!0;return!1}const fd=Ad;function ud(e){return function(n){return e(n)}}const Qr=ud;function Ed(e,n){return e.has(n)}const Oo=Ed;var dd=Math.min;function pd(e,n,t){for(var o=t?fd:ld,i=e[0].length,r=e.length,c=r,a=Array(r),s=1/0,l=[];c--;){var f=e[c];c&&n&&(f=ko(f,Qr(n))),s=dd(f.length,s),a[c]=!t&&(n||i>=120&&f.length>=120)?new Xr(c&&f):void 0}f=e[0];var A=-1,d=a[0];e:for(;++A<i&&l.length<s;){var u=f[A],_=n?n(u):u;if(u=t||u!==0?u:0,!(d?Oo(d,_):o(l,_,t))){for(c=r;--c;){var k=a[c];if(!(k?Oo(k,_):o(e[c],_,t)))continue e}d&&d.push(_),l.push(u)}}return l}const gd=pd;function _d(e,n){return Yr(Vr(e,n,Io),e+"")}const hd=_d;function md(e){return e!=null&&To(e.length)&&!Pr(e)}const Zr=md;function bd(e){return Ge(e)&&Zr(e)}const yd=bd;function Bd(e){return yd(e)?e:[]}const Fd=Bd;var vd=hd(function(e){var n=ko(e,Fd);return n.length&&n[0]===e[0]?gd(n):[]});const Cd=vd;function kd(){this.__data__=new gt,this.size=0}const wd=kd;function Sd(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}const xd=Sd;function Td(e){return this.__data__.get(e)}const Id=Td;function Od(e){return this.__data__.has(e)}const Rd=Od;var Dd=200;function Nd(e,n){var t=this.__data__;if(t instanceof gt){var o=t.__data__;if(!Pn||o.length<Dd-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new ht(o)}return t.set(e,n),this.size=t.size,this}const Pd=Nd;function fn(e){var n=this.__data__=new gt(e);this.size=n.size}fn.prototype.clear=wd,fn.prototype.delete=xd,fn.prototype.get=Id,fn.prototype.has=Rd,fn.prototype.set=Pd;const Bt=fn;function Md(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}const Ld=Md;var Ud=1,jd=2;function $d(e,n,t,o,i,r){var c=t&Ud,a=e.length,s=n.length;if(a!=s&&!(c&&s>a))return!1;var l=r.get(e),f=r.get(n);if(l&&f)return l==n&&f==e;var A=-1,d=!0,u=t&jd?new Xr:void 0;for(r.set(e,n),r.set(n,e);++A<a;){var _=e[A],k=n[A];if(o)var B=c?o(k,_,A,n,e,r):o(_,k,A,e,n,r);if(B!==void 0){if(B)continue;d=!1;break}if(u){if(!Ld(n,function(w,R){if(!Oo(u,R)&&(_===w||i(_,w,t,o,r)))return u.push(R)})){d=!1;break}}else if(!(_===k||i(_,k,t,o,r))){d=!1;break}}return r.delete(e),r.delete(n),d}const ec=$d;var Jd=ve.Uint8Array;const nc=Jd;function qd(e){var n=-1,t=Array(e.size);return e.forEach(function(o,i){t[++n]=[i,o]}),t}const zd=qd;function Hd(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}const Gd=Hd;var Wd=1,Kd=2,Vd="[object Boolean]",Yd="[object Date]",Xd="[object Error]",Qd="[object Map]",Zd="[object Number]",ep="[object RegExp]",np="[object Set]",tp="[object String]",op="[object Symbol]",ip="[object ArrayBuffer]",rp="[object DataView]",tc=he?he.prototype:void 0,Ro=tc?tc.valueOf:void 0;function cp(e,n,t,o,i,r,c){switch(t){case rp:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case ip:return!(e.byteLength!=n.byteLength||!r(new nc(e),new nc(n)));case Vd:case Yd:case Zd:return Fo(+e,+n);case Xd:return e.name==n.name&&e.message==n.message;case ep:case tp:return e==n+"";case Qd:var a=zd;case np:var s=o&Wd;if(a||(a=Gd),e.size!=n.size&&!s)return!1;var l=c.get(e);if(l)return l==n;o|=Kd,c.set(e,n);var f=ec(a(e),a(n),o,i,r,c);return c.delete(e),f;case op:if(Ro)return Ro.call(e)==Ro.call(n)}return!1}const ap=cp;function sp(e,n,t){var o=n(e);return _e(e)?o:Hr(o,t(e))}const lp=sp;function Ap(e,n){for(var t=-1,o=e==null?0:e.length,i=0,r=[];++t<o;){var c=e[t];n(c,t,e)&&(r[i++]=c)}return r}const fp=Ap;function up(){return[]}const Ep=up;var dp=Object.prototype,pp=dp.propertyIsEnumerable,oc=Object.getOwnPropertySymbols,gp=oc?function(e){return e==null?[]:(e=Object(e),fp(oc(e),function(n){return pp.call(e,n)}))}:Ep;const _p=gp;function hp(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}const mp=hp;function bp(){return!1}const yp=bp;var ic=typeof Ne=="object"&&Ne&&!Ne.nodeType&&Ne,rc=ic&&typeof Pe=="object"&&Pe&&!Pe.nodeType&&Pe,Bp=rc&&rc.exports===ic,cc=Bp?ve.Buffer:void 0,Fp=cc?cc.isBuffer:void 0,vp=Fp||yp;const Do=vp;var Cp="[object Arguments]",kp="[object Array]",wp="[object Boolean]",Sp="[object Date]",xp="[object Error]",Tp="[object Function]",Ip="[object Map]",Op="[object Number]",Rp="[object Object]",Dp="[object RegExp]",Np="[object Set]",Pp="[object String]",Mp="[object WeakMap]",Lp="[object ArrayBuffer]",Up="[object DataView]",jp="[object Float32Array]",$p="[object Float64Array]",Jp="[object Int8Array]",qp="[object Int16Array]",zp="[object Int32Array]",Hp="[object Uint8Array]",Gp="[object Uint8ClampedArray]",Wp="[object Uint16Array]",Kp="[object Uint32Array]",H={};H[jp]=H[$p]=H[Jp]=H[qp]=H[zp]=H[Hp]=H[Gp]=H[Wp]=H[Kp]=!0,H[Cp]=H[kp]=H[Lp]=H[wp]=H[Up]=H[Sp]=H[xp]=H[Tp]=H[Ip]=H[Op]=H[Rp]=H[Dp]=H[Np]=H[Pp]=H[Mp]=!1;function Vp(e){return Ge(e)&&To(e.length)&&!!H[an(e)]}const Yp=Vp;var ac=typeof Ne=="object"&&Ne&&!Ne.nodeType&&Ne,Ln=ac&&typeof Pe=="object"&&Pe&&!Pe.nodeType&&Pe,Xp=Ln&&Ln.exports===ac,No=Xp&&Rr.process,Qp=function(){try{var e=Ln&&Ln.require&&Ln.require("util").types;return e||No&&No.binding&&No.binding("util")}catch{}}();const sc=Qp;var lc=sc&&sc.isTypedArray,Zp=lc?Qr(lc):Yp;const Ac=Zp;var eg=Object.prototype,ng=eg.hasOwnProperty;function tg(e,n){var t=_e(e),o=!t&&xo(e),i=!t&&!o&&Do(e),r=!t&&!o&&!i&&Ac(e),c=t||o||i||r,a=c?mp(e.length,String):[],s=a.length;for(var l in e)(n||ng.call(e,l))&&!(c&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||So(l,s)))&&a.push(l);return a}const og=tg;var ig=Object.prototype;function rg(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||ig;return e===t}const cg=rg;function ag(e,n){return function(t){return e(n(t))}}var sg=ag(Object.keys,Object);const lg=sg;var Ag=Object.prototype,fg=Ag.hasOwnProperty;function ug(e){if(!cg(e))return lg(e);var n=[];for(var t in Object(e))fg.call(e,t)&&t!="constructor"&&n.push(t);return n}const Eg=ug;function dg(e){return Zr(e)?og(e):Eg(e)}const fc=dg;function pg(e){return lp(e,fc,_p)}const uc=pg;var gg=1,_g=Object.prototype,hg=_g.hasOwnProperty;function mg(e,n,t,o,i,r){var c=t&gg,a=uc(e),s=a.length,l=uc(n),f=l.length;if(s!=f&&!c)return!1;for(var A=s;A--;){var d=a[A];if(!(c?d in n:hg.call(n,d)))return!1}var u=r.get(e),_=r.get(n);if(u&&_)return u==n&&_==e;var k=!0;r.set(e,n),r.set(n,e);for(var B=c;++A<s;){d=a[A];var w=e[d],R=n[d];if(o)var Y=c?o(R,w,d,n,e,r):o(w,R,d,e,n,r);if(!(Y===void 0?w===R||i(w,R,t,o,r):Y)){k=!1;break}B||(B=d=="constructor")}if(k&&!B){var ae=e.constructor,ee=n.constructor;ae!=ee&&"constructor"in e&&"constructor"in n&&!(typeof ae=="function"&&ae instanceof ae&&typeof ee=="function"&&ee instanceof ee)&&(k=!1)}return r.delete(e),r.delete(n),k}const bg=mg;var yg=Ve(ve,"DataView");const Po=yg;var Bg=Ve(ve,"Promise");const Mo=Bg;var Fg=Ve(ve,"Set");const Lo=Fg;var vg=Ve(ve,"WeakMap");const Uo=vg;var Ec="[object Map]",Cg="[object Object]",dc="[object Promise]",pc="[object Set]",gc="[object WeakMap]",_c="[object DataView]",kg=Ke(Po),wg=Ke(Pn),Sg=Ke(Mo),xg=Ke(Lo),Tg=Ke(Uo),Ye=an;(Po&&Ye(new Po(new ArrayBuffer(1)))!=_c||Pn&&Ye(new Pn)!=Ec||Mo&&Ye(Mo.resolve())!=dc||Lo&&Ye(new Lo)!=pc||Uo&&Ye(new Uo)!=gc)&&(Ye=function(e){var n=an(e),t=n==Cg?e.constructor:void 0,o=t?Ke(t):"";if(o)switch(o){case kg:return _c;case wg:return Ec;case Sg:return dc;case xg:return pc;case Tg:return gc}return n});const hc=Ye;var Ig=1,mc="[object Arguments]",bc="[object Array]",Ft="[object Object]",Og=Object.prototype,yc=Og.hasOwnProperty;function Rg(e,n,t,o,i,r){var c=_e(e),a=_e(n),s=c?bc:hc(e),l=a?bc:hc(n);s=s==mc?Ft:s,l=l==mc?Ft:l;var f=s==Ft,A=l==Ft,d=s==l;if(d&&Do(e)){if(!Do(n))return!1;c=!0,f=!1}if(d&&!f)return r||(r=new Bt),c||Ac(e)?ec(e,n,t,o,i,r):ap(e,n,s,t,o,i,r);if(!(t&Ig)){var u=f&&yc.call(e,"__wrapped__"),_=A&&yc.call(n,"__wrapped__");if(u||_){var k=u?e.value():e,B=_?n.value():n;return r||(r=new Bt),i(k,B,t,o,r)}}return d?(r||(r=new Bt),bg(e,n,t,o,i,r)):!1}const Dg=Rg;function Bc(e,n,t,o,i){return e===n?!0:e==null||n==null||!Ge(e)&&!Ge(n)?e!==e&&n!==n:Dg(e,n,t,o,Bc,i)}const jo=Bc;var Ng=1,Pg=2;function Mg(e,n,t,o){var i=t.length,r=i,c=!o;if(e==null)return!r;for(e=Object(e);i--;){var a=t[i];if(c&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++i<r;){a=t[i];var s=a[0],l=e[s],f=a[1];if(c&&a[2]){if(l===void 0&&!(s in e))return!1}else{var A=new Bt;if(o)var d=o(l,f,s,e,n,A);if(!(d===void 0?jo(f,l,Ng|Pg,o,A):d))return!1}}return!0}const Lg=Mg;function Ug(e){return e===e&&!We(e)}const Fc=Ug;function jg(e){for(var n=fc(e),t=n.length;t--;){var o=n[t],i=e[o];n[t]=[o,i,Fc(i)]}return n}const $g=jg;function Jg(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}const vc=Jg;function qg(e){var n=$g(e);return n.length==1&&n[0][2]?vc(n[0][0],n[0][1]):function(t){return t===e||Lg(t,e,n)}}const zg=qg;function Hg(e,n,t){var o=e==null?void 0:wo(e,n);return o===void 0?t:o}const Gg=Hg;var Wg=1,Kg=2;function Vg(e,n){return yo(e)&&Fc(n)?vc(Mn(e),n):function(t){var o=Gg(t,e);return o===void 0&&o===n?zr(t,e):jo(n,o,Wg|Kg)}}const Yg=Vg;function Xg(e){return function(n){return n?.[e]}}const Qg=Xg;function Zg(e){return function(n){return wo(n,e)}}const e_=Zg;function n_(e){return yo(e)?Qg(Mn(e)):e_(e)}const t_=n_;function o_(e){return typeof e=="function"?e:e==null?Io:typeof e=="object"?_e(e)?Yg(e[0],e[1]):zg(e):t_(e)}const i_=o_;function r_(e,n){for(var t,o=-1,i=e.length;++o<i;){var r=n(e[o]);r!==void 0&&(t=t===void 0?r:t+r)}return t}const c_=r_;function a_(e,n){return e&&e.length?c_(e,i_(n,2)):0}const Cc=a_;function $C(e,n){return e.teams[n]}const s_=e=>e.length===2,kc=e=>{const n=e.split("@");return s_(n)?n:void 0},$o=ce(e=>e?.teams??{},e=>{const n=Object.values(e).find(t=>t&&t.version);return n?n.version:void 0}),JC=ce([$o],e=>{if(!e)return;const n=kc(e);return n?n[0]:void 0}),qC=ce([$o],e=>{if(!e)return;const n=kc(e);if(!n)return;const t=Number.parseInt(n[1],10);return Number.isNaN(t)?void 0:t}),zC=ce(e=>e?.teams??{},e=>{const n=Object.values(e).find(t=>t&&t.frontendBuildType);return n?n.frontendBuildType:void 0}),l_=ce(e=>e,e=>Object.entries(e).reduce((n,[t,o])=>(n[t]={...o.unreads,teamId:t},n),{})),Jo="*",HC=ce(e=>e?.teams??{},e=>Object.values(e).map(n=>n?.connectivityPrefs?.ntlmCredentialDomains||Jo).find(n=>n!==Jo)||Jo),GC=ce([e=>e.webapp?.teams??{},e=>e.workspaces],(e,n)=>KE(e,Cd(...[e,n].map(Object.keys)))),A_=ce([e=>e.webapp?e.webapp.teams:{},e=>e.workspacesMeta.selectedWorkspaceId],(e,n)=>n?e?.[n]:null),WC=ce([A_,e=>e.settings.locale],(e,n)=>e?e.locale:n),KC=ce([l_],e=>{const n=Object.values(e),t=Object.keys(e).some(o=>{const{showBullet:i,unreads:r}=e[o];return i&&r>0});return{unreads:Cc(n,({unreads:o})=>o||0),unreadHighlights:Cc(n,({unreadHighlights:o})=>o||0),showBullet:t}}),VC="slack:",wc={domain:"slack.com",matchSubDomains:!0},Sc={domain:"slack.mil",matchSubDomains:!0},xc={domain:"slack-mil-dev.com",matchSubDomains:!0},Tc={domain:"slack-gov.com",matchSubDomains:!0},Ic={domain:"slack-gov-dev.com",matchSubDomains:!0},YC=[{domain:"slack.eu",matchSubDomains:!0},wc],XC=[Tc,Ic],QC=[Sc,xc],ZC=[{domain:"files.slack.eu",matchSubDomains:!1},{domain:"files.slack.com",matchSubDomains:!1}],e0=[{domain:"files.slack-gov.com",matchSubDomains:!1},{domain:"files.slack-gov-dev.com",matchSubDomains:!1}],n0=[{domain:"files.slack.mil",matchSubDomains:!1},{domain:"files.slack-mil-dev.com",matchSubDomains:!1}],t0=[{domain:"slack.eu",matchSubDomains:!0},{domain:"slack.com",matchSubDomains:!0},{domain:"slack-files.eu",matchSubDomains:!0},{domain:"slack-files.com",matchSubDomains:!0}],o0=[{domain:"slack-gov.com",matchSubDomains:!0},{domain:"slack-gov-dev.com",matchSubDomains:!0},{domain:"slack-files-gov.com",matchSubDomains:!0},{domain:"slack-files-gov-dev.com",matchSubDomains:!0}],i0=[{domain:"slack.mil",matchSubDomains:!0},{domain:"slack-mil-dev.com",matchSubDomains:!0},{domain:"slack-files.mil",matchSubDomains:!0},{domain:"slack-files-mil-dev.com",matchSubDomains:!0}],r0=[{domain:"slack-edge.com",matchSubDomains:!0},{domain:"slack-imgs.com",matchSubDomains:!0},{domain:"slack-edge.mil",matchSubDomains:!0},{domain:"slack-imgs.mil",matchSubDomains:!0},{domain:"slack-imgs-mil-dev.com",matchSubDomains:!0},{domain:"slack-edge-mil-dev.com",matchSubDomains:!0},{domain:"slack-imgs-gov.com",matchSubDomains:!0},{domain:"slack-imgs-gov-dev.com",matchSubDomains:!0},{domain:"slack-edge-gov.com",matchSubDomains:!0}],c0=[{domain:"slackb.com",matchSubDomains:!0},{domain:"dev.slackb.com",matchSubDomains:!0},{domain:"slackb-gov.com",matchSubDomains:!0},{domain:"slackb-gov-dev.com",matchSubDomains:!0},{domain:"slackb.mil",matchSubDomains:!0},{domain:"slackb-mil-dev.com",matchSubDomains:!0}],a0="BlockCommercialCookiesGovOrigin",s0=/magic-login/,l0="chrome-error://chromewebdata",A0="app://error",f0="https://app.slack.com/ssb/first",u0=e=>e&&e.protocol==="about:"&&e.pathname==="blank"&&e.hash!=="#blocked",E0=e=>e&&e.protocol==="about:"&&e.pathname==="blank"&&e.hash==="#blocked",d0="https://spellcheck.slack-edge.com/dictionaries_v2/",p0="https://spellcheck.slack-edge-gov.com/dictionaries_v2/",g0="https://spellcheck.slack-edge.mil/dictionaries_v2/",_0="https://fd30fe469dbf4aec9db40548e5acf91e@slack.com/apps/sentryproxy/5277886",h0="https://fd30fe469dbf4aec9db40548e5acf91e@slack-gov.com/apps/sentryproxy/5277886",m0=null,b0="/ssb/first",y0=null,B0=/devEnv=(dev\d*|staging(?:-master)?|qa\d*)/,F0=null,vt=["slack.com","slack-msgs.com","slackb.com"],v0=[...vt,"slack-gov.com"],C0=[...vt,"slack-gov-dev.com"],k0=[...vt,"slack.mil","slackb.mil"],w0=[...vt,"slack-mil-dev.com","slackb-mil-dev.com"],S0=null,qo=/[()<>@,;:\\<>\/\[\]?={}\t\n\r]/g;function x0(e){let{os:n,release:t,desktopEnvironment:o}=e.linux??{};if(!n)return"";n=n.replace(qo,""),t=(t||"unversioned").replace(qo,"");let i=`; ${n} ${t}`;return o&&(o=o.replace(qo,""),i+=`; ${o}`),i}function T0(e){return!!e?.win32?.isWin10}function Oc(e,n){return!!(e&&e.platformVersion&&e.platformVersion.major>=10&&e.platformVersion.build>=n)}function f_(e){return Oc(e,22e3)}function I0(e,n){return f_(e)&&Oc(e,n)}function O0(e){return!1}function R0(e,n="."){const{major:t,minor:o,build:i}=e&&e.platformVersion||{major:0,minor:0,build:0};return[t,o,i].join(n)}function D0(e){return e&&e.darwin&&e.darwin.macOSVersion||""}function Rc(e){return[ge.RESTRICTED,ge.MILITARY].includes(e)}const N0=ce([e=>e.environment],e=>{const{clientEnvironment:n,bootClient:t}=e;return Rc(n)&&!!t});var Un,u_,Ce,Dc,E_,d_,zo,p_,Ho,g_,Go,__,h_,Wo,Nc,m_,b_,y_,B_,F_=(e=>(e.QUIT_APP="QUIT_APP",e.RESET_WINDOW="RESET_WINDOW",e.REVEAL_LOGS="REVEAL_LOGS",e.CLEAR_CACHE_AND_RESTART="CLEAR_CACHE_AND_RESTART",e))(F_||{});const v_={darwin:"mac",linux:"linux",win32:"windows"},Ko=Co((e,n)=>{let{clientEnvironment:t}=e;const o=e.devEnv?T_(e.devEnv):void 0;switch(Rc(t)&&(n==="commercial"?t=ge.NORMAL:n==="gov"&&(t=ge.RESTRICTED)),t){case ge.NORMAL:return`${o?`${o}.`:""}${wc.domain}`;case ge.RESTRICTED:return o?`${o!=="dev"?`${o}.`:""}${Ic.domain}`:Tc.domain;case ge.MILITARY:return o?`${o!=="dev"?`${o}.`:""}${xc.domain}`:Sc.domain;default:throw new Error("Unexpected mode specified")}}),Pc=Co(e=>`https://${Ko(e)}`);function P0({releaseChannel:e,clientEnvironment:n,locale:t}){let o=`https://www.${Ko({clientEnvironment:n})}`;t!==Dc&&(o+=`/intl/${t.toLowerCase()}`),o+="/release-notes";const i=v_.linux||"windows";return o+=`/${i}`,o+=e===d_.BETA?e:"",o}function M0(e,n){let t=Pc({clientEnvironment:e});return n!==Dc&&(t+=`/intl/${n.toLowerCase()}`),t+="/help",t}function L0(e,n){const o=b_(e)?.url??Pc({...e.environment}),i=new URL(o);return i.pathname="/help/requests/new",`${i}${n?"?crash_report=1":""}`}function U0(e){return`${Lc(e)}/api/`}function j0(e,n){return`${Mc(e,n)}/api/`}function Mc(e,n){return Lc(Ko(e,n))}function Lc(e){return`https://app.${e}`}function C_(e,n){return e.protocol==="https:"&&Yo(e,n)&&e.hostname.startsWith("app.")}function k_(e){return fe(e,zo)&&!fe(e,p_)}function Uc(e){return fe(e,Ho)&&!fe(e,g_)}function Vo(e){return fe(e,Go)&&!fe(e,__)}function Yo(e,n){if(!e)return!1;switch(n){case Ce.NORMAL:return Vo(e);case Ce.RESTRICTED:return Vo(e)||Uc(e);case Ce.MILITARY:return Vo(e)||Uc(e)||k_(e);default:return Un.warn("isSlackURL: Invalid client environment",n),!1}}function $0(e){return e?fe(e,h_):!1}function jc(e,n){if(Yo(e,n)){for(const t of[...Go,...Ho,...zo])if(t.matchSubDomains&&e.host.endsWith(`.${t.domain}`))return e.host.split(`.${t.domain}`).shift()}}function J0(e){return y_(Object.values(Ce).filter(Xo),n=>jc(e,n))}function fe(e,...n){for(const t of n)for(const o of t)if(e.host===o.domain||o.matchSubDomains&&e.host.endsWith(`.${o.domain}`))return!0;return!1}function w_(e){return`.${e.domain}`}function q0(e,n){if(e.domain===void 0)return!1;for(const t of n)if(e.domain.endsWith(w_(t)))return!0;return!1}function S_(e){try{return new URL(e)}catch{return null}}function z0(e,n){if(!e)return!1;switch(n){case Ce.NORMAL:return fe(e,Wo);case Ce.RESTRICTED:return fe(e,Wo,Nc);case Ce.MILITARY:return fe(e,Wo,Nc,m_);default:return!1}}function Xo(e){return!u_(e)}function x_(e){return Object.values(Ce).filter(Xo).some(n=>Yo(e,n))}function H0(e){const n=typeof e=="string"?new URL(e):null;let o=(n?Object.fromEntries(n.searchParams.entries()):null)?.update??"{}";o=o.replace(/\s*:\s*/g,":"),o&&!(o.startsWith("{")&&o.endsWith("}"))&&(o=`{${o}}`),o=B_(o),o=o.replace(/(?<=\{)(['"])?([a-zA-Z0-9_-]{1,200})(['"])?:/g,'"$2": ');const i=o.match(/[a-zA-Z_-]*?: (['"])?([a-zA-Z_-]*)(['"])?/),r=i&&i[2]&&(i[2]==="true"||i[2]==="false"),c=i&&i[2]&&/[\w]|[\w-]*/.test(i[2])&&!r,a=i&&i[1]==='"'&&i[3]==='"';return c&&!a&&(o=(o||"{}").replace(/([a-zA-Z_-]*?): (['"])?([a-zA-Z0-9_-]{1,200})(['"])?(?=.*\})/g,'$1: "$3"')),o}function G0(e){const n=typeof e=="string"?new URL(e):null,t=n?Object.fromEntries(n.searchParams.entries()):null;if(n?.host==="app"&&t?.action)switch(t.action.toLowerCase()){case"quit":return"QUIT_APP";case"reset-window":return"RESET_WINDOW";case"reveal-logs":return"REVEAL_LOGS";case"clear-cache-and-restart":return"CLEAR_CACHE_AND_RESTART";default:return null}else return null}function T_(e){const n=e.match(/([A-Za-z0-9-])*/i);if(n&&e===n[0])return e}function W0(e,{failOnRedirParam:n=!1}={}){try{const t=new URL(e),{protocol:o,searchParams:i}=t;return fe(t,Go,Ho,zo)?o!=="https:"?(Un.warn(`sanitizeTeamURL: ${e} did not meet protocol requirements`),null):i.has("redir")&&(Un.warn(`sanitizeTeamURL: ${e} contained redir parameter, which will be deleted`),i.delete("redir"),n)?null:t.toString():(Un.warn(`sanitizeTeamURL: ${e} did not meet host requirements`),null)}catch(t){return Un.error("sanitizeTeamURL: could not validate url",{input:e,error:t}),null}}function I_(e="",n){const t=S_(e);if(!t)return t;if(C_(t,n))return t.toString();if(x_(t)){const o=jc(t,n),i=o?t.host.split(o).join(E_):t.host;return t.toString().split(t.host).join(i)}return e}function K0(e){return Object.values(Ce).filter(Xo).reduce((n,t)=>I_(n??void 0,t),e)}function O_(){}const $c=O_;var ke,j,Qo,Jc,un=0,qc=[],Ct=[],zc=p.__b,Hc=p.__r,Gc=p.diffed,Wc=p.__c,Kc=p.unmount;function Xe(e,n){p.__h&&p.__h(j,e,un||n),un=0;var t=j.__H||(j.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Ct}),t.__[e]}function kt(e){return un=1,Zo(Xc,e)}function Zo(e,n,t){var o=Xe(ke++,2);if(o.t=e,!o.__c&&(o.__=[t?t(n):Xc(void 0,n),function(a){var s=o.__N?o.__N[0]:o.__[0],l=o.t(s,a);s!==l&&(o.__N=[l,o.__[1]],o.__c.setState({}))}],o.__c=j,!j.u)){var i=function(a,s,l){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(d){return d.__c});if(f.every(function(d){return!d.__N}))return!r||r.call(this,a,s,l);var A=!1;return f.forEach(function(d){if(d.__N){var u=d.__[0];d.__=d.__N,d.__N=void 0,u!==d.__[0]&&(A=!0)}}),!(!A&&o.__c.props===a)&&(!r||r.call(this,a,s,l))};j.u=!0;var r=j.shouldComponentUpdate,c=j.componentWillUpdate;j.componentWillUpdate=function(a,s,l){if(this.__e){var f=r;r=void 0,i(a,s,l),r=f}c&&c.call(this,a,s,l)},j.shouldComponentUpdate=i}return o.__N||o.__}function wt(e,n){var t=Xe(ke++,3);!p.__s&&ti(t.__H,n)&&(t.__=e,t.i=n,j.__H.__h.push(t))}function jn(e,n){var t=Xe(ke++,4);!p.__s&&ti(t.__H,n)&&(t.__=e,t.i=n,j.__h.push(t))}function En(e){return un=5,dn(function(){return{current:e}},[])}function R_(e,n,t){un=6,jn(function(){return typeof e=="function"?(e(n()),function(){return e(null)}):e?(e.current=n(),function(){return e.current=null}):void 0},t==null?t:t.concat(e))}function dn(e,n){var t=Xe(ke++,7);return ti(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function D_(e,n){return un=8,dn(function(){return e},n)}function ei(e){var n=j.context[e.__c],t=Xe(ke++,9);return t.c=e,n?(t.__==null&&(t.__=!0,n.sub(j)),n.props.value):e.__}function Vc(e,n){p.useDebugValue&&p.useDebugValue(n?n(e):e)}function V0(e){var n=Xe(ke++,10),t=kt();return n.__=e,j.componentDidCatch||(j.componentDidCatch=function(o,i){n.__&&n.__(o,i),t[1](o)}),[t[0],function(){t[1](void 0)}]}function N_(){var e=Xe(ke++,11);if(!e.__){for(var n=j.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;var t=n.__m||(n.__m=[0,0]);e.__="P"+t[0]+"-"+t[1]++}return e.__}function P_(){for(var e;e=qc.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(St),e.__H.__h.forEach(ni),e.__H.__h=[]}catch(n){e.__H.__h=[],p.__e(n,e.__v)}}p.__b=function(e){j=null,zc&&zc(e)},p.__r=function(e){Hc&&Hc(e),ke=0;var n=(j=e.__c).__H;n&&(Qo===j?(n.__h=[],j.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Ct,t.__N=t.i=void 0})):(n.__h.forEach(St),n.__h.forEach(ni),n.__h=[],ke=0)),Qo=j},p.diffed=function(e){Gc&&Gc(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(qc.push(n)!==1&&Jc===p.requestAnimationFrame||((Jc=p.requestAnimationFrame)||M_)(P_)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Ct&&(t.__=t.__V),t.i=void 0,t.__V=Ct})),Qo=j=null},p.__c=function(e,n){n.some(function(t){try{t.__h.forEach(St),t.__h=t.__h.filter(function(o){return!o.__||ni(o)})}catch(o){n.some(function(i){i.__h&&(i.__h=[])}),n=[],p.__e(o,t.__v)}}),Wc&&Wc(e,n)},p.unmount=function(e){Kc&&Kc(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{St(o)}catch(i){n=i}}),t.__H=void 0,n&&p.__e(n,t.__v))};var Yc=typeof requestAnimationFrame=="function";function M_(e){var n,t=function(){clearTimeout(o),Yc&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);Yc&&(n=requestAnimationFrame(t))}function St(e){var n=j,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),j=n}function ni(e){var n=j;e.__c=e.__(),j=n}function ti(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function Xc(e,n){return typeof n=="function"?n(e):n}const L_=I.p+"Hash@1xfe567312dbef084f073c.png",U_=I.p+"Hash@2x4e633ab90387d1fb949e.png",j_=I.p+"Hash@3x7eaed0e0a8f28b67fc00.png";function Qc(e,n){for(var t in n)e[t]=n[t];return e}function oi(e,n){for(var t in e)if(t!=="__source"&&!(t in n))return!0;for(var o in n)if(o!=="__source"&&e[o]!==n[o])return!0;return!1}function ii(e){this.props=e}function $_(e,n){function t(i){var r=this.props.ref,c=r==i.ref;return!c&&r&&(r.call?r(null):r.current=null),n?!n(this.props,i)||!c:oi(this.props,i)}function o(i){return this.shouldComponentUpdate=t,K(e,i)}return o.displayName="Memo("+(e.displayName||e.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(ii.prototype=new h).isPureReactComponent=!0,ii.prototype.shouldComponentUpdate=function(e,n){return oi(this.props,e)||oi(this.state,n)};var Zc=p.__b;p.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Zc&&Zc(e)};var J_=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function q_(e){function n(t){var o=Qc({},t);return delete o.ref,e(o,t.ref||null)}return n.$$typeof=J_,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var ea=function(e,n){return e==null?null:pe(pe(e).map(n))},z_={map:ea,forEach:ea,count:function(e){return e?pe(e).length:0},only:function(e){var n=pe(e);if(n.length!==1)throw"Children.only";return n[0]},toArray:pe},H_=p.__e;p.__e=function(e,n,t,o){if(e.then){for(var i,r=n;r=r.__;)if((i=r.__c)&&i.__c)return n.__e==null&&(n.__e=t.__e,n.__k=t.__k),i.__c(e,n)}H_(e,n,t,o)};var na=p.unmount;function ta(e,n,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=Qc({},e)).__c!=null&&(e.__c.__P===t&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return ta(o,n,t)})),e}function oa(e,n,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return oa(o,n,t)}),e.__c&&e.__c.__P===n&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function xt(){this.__u=0,this.t=null,this.__b=null}function ia(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function G_(e){var n,t,o;function i(r){if(n||(n=e()).then(function(c){t=c.default||c},function(c){o=c}),o)throw o;if(!t)throw n;return K(t,r)}return i.displayName="Lazy",i.__f=!0,i}function $n(){this.u=null,this.o=null}p.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&32&e.__u&&(e.type=null),na&&na(e)},(xt.prototype=new h).__c=function(e,n){var t=n.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var i=ia(o.__v),r=!1,c=function(){r||(r=!0,t.__R=null,i?i(a):a())};t.__R=c;var a=function(){if(!--o.__u){if(o.state.__a){var s=o.state.__a;o.__v.__k[0]=oa(s,s.__c.__P,s.__c.__O)}var l;for(o.setState({__a:o.__b=null});l=o.t.pop();)l.forceUpdate()}};o.__u++||32&n.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(c,c)},xt.prototype.componentWillUnmount=function(){this.t=[]},xt.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=ta(this.__b,t,o.__O=o.__P)}this.__b=null}var i=n.__a&&K(N,null,e.fallback);return i&&(i.__u&=-33),[K(N,null,n.__a?null:e.children),i]};var ra=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function W_(e){return this.getChildContext=function(){return e.context},e.children}function K_(e){var n=this,t=e.i;n.componentWillUnmount=function(){rn(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(o){this.childNodes.push(o),n.i.appendChild(o)},insertBefore:function(o,i){this.childNodes.push(o),n.i.appendChild(o)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),n.i.removeChild(o)}}),rn(K(W_,{context:n.context},e.__v),n.l)}function V_(e,n){var t=K(K_,{__v:e,i:n});return t.containerInfo=n,t}($n.prototype=new h).__a=function(e){var n=this,t=ia(n.__v),o=n.o.get(e);return o[0]++,function(i){var r=function(){n.props.revealOrder?(o.push(i),ra(n,e,o)):i()};t?t(r):r()}},$n.prototype.render=function(e){this.u=null,this.o=new Map;var n=pe(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},$n.prototype.componentDidUpdate=$n.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(n,t){ra(e,t,n)})};var ca=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Y_=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,X_=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Q_=/[A-Z0-9]/g,Z_=typeof document<"u",eh=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function nh(e,n,t){return n.__k==null&&(n.textContent=""),rn(e,n),typeof t=="function"&&t(),e?e.__c:null}function th(e,n,t){return _o(e,n),typeof t=="function"&&t(),e?e.__c:null}h.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(h.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var aa=p.event;function oh(){}function ih(){return this.cancelBubble}function rh(){return this.defaultPrevented}p.event=function(e){return aa&&(e=aa(e)),e.persist=oh,e.isPropagationStopped=ih,e.isDefaultPrevented=rh,e.nativeEvent=e};var ri,ch={enumerable:!1,configurable:!0,get:function(){return this.class}},sa=p.vnode;p.vnode=function(e){typeof e.type=="string"&&function(n){var t=n.props,o=n.type,i={};for(var r in t){var c=t[r];if(!(r==="value"&&"defaultValue"in t&&c==null||Z_&&r==="children"&&o==="noscript"||r==="class"||r==="className")){var a=r.toLowerCase();r==="defaultValue"&&"value"in t&&t.value==null?r="value":r==="download"&&c===!0?c="":a==="ondoubleclick"?r="ondblclick":a!=="onchange"||o!=="input"&&o!=="textarea"||eh(t.type)?a==="onfocus"?r="onfocusin":a==="onblur"?r="onfocusout":X_.test(r)?r=a:o.indexOf("-")===-1&&Y_.test(r)?r=r.replace(Q_,"-$&").toLowerCase():c===null&&(c=void 0):a=r="oninput",a==="oninput"&&i[r=a]&&(r="oninputCapture"),i[r]=c}}o=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=pe(t.children).forEach(function(s){s.props.selected=i.value.indexOf(s.props.value)!=-1})),o=="select"&&i.defaultValue!=null&&(i.value=pe(t.children).forEach(function(s){s.props.selected=i.multiple?i.defaultValue.indexOf(s.props.value)!=-1:i.defaultValue==s.props.value})),t.class&&!t.className?(i.class=t.class,Object.defineProperty(i,"className",ch)):(t.className&&!t.class||t.class&&t.className)&&(i.class=i.className=t.className),n.props=i}(e),e.$$typeof=ca,sa&&sa(e)};var la=p.__r;p.__r=function(e){la&&la(e),ri=e.__c};var Aa=p.diffed;p.diffed=function(e){Aa&&Aa(e);var n=e.props,t=e.__e;t!=null&&e.type==="textarea"&&"value"in n&&n.value!==t.value&&(t.value=n.value==null?"":n.value),ri=null};var ah={ReactCurrentDispatcher:{current:{readContext:function(e){return ri.__n[e.__c].props.value}}}},Y0="17.0.2";function sh(e){return K.bind(null,e)}function Tt(e){return!!e&&e.$$typeof===ca}function lh(e){return Tt(e)&&e.type===N}function Ah(e){return Tt(e)?dr.apply(null,arguments):e}function fa(e){return!!e.__k&&(rn(null,e),!0)}function fh(e){return e&&(e.base||e.nodeType===1&&e)||null}var ua=function(e,n){return e(n)},uh=function(e,n){return e(n)},Eh=N;function Ea(e){e()}function dh(e){return e}function ph(){return[!1,Ea]}var gh=jn,_h=Tt;function hh(e,n){var t=n(),o=kt({h:{__:t,v:n}}),i=o[0].h,r=o[1];return jn(function(){i.__=t,i.v=n,ci(i)&&r({h:i})},[e,t,n]),wt(function(){return ci(i)&&r({h:i}),e(function(){ci(i)&&r({h:i})})},[e]),t}function ci(e){var n,t,o=e.v,i=e.__;try{var r=o();return!((n=i)===(t=r)&&(n!==0||1/n==1/t)||n!=n&&t!=t)}catch{return!0}}var da={useState:kt,useId:N_,useReducer:Zo,useEffect:wt,useLayoutEffect:jn,useInsertionEffect:gh,useTransition:ph,useDeferredValue:dh,useSyncExternalStore:hh,startTransition:Ea,useRef:En,useImperativeHandle:R_,useMemo:dn,useCallback:D_,useContext:ei,useDebugValue:Vc,version:"17.0.2",Children:z_,render:nh,hydrate:th,unmountComponentAtNode:fa,createPortal:V_,createElement:K,createContext:pr,createFactory:sh,cloneElement:Ah,createRef:z,Fragment:N,isValidElement:Tt,isElement:_h,isFragment:lh,findDOMNode:fh,Component:h,PureComponent:ii,memo:$_,forwardRef:q_,flushSync:uh,unstable_batchedUpdates:ua,StrictMode:Eh,Suspense:xt,SuspenseList:$n,lazy:G_,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ah},X0=I(4031),It=da.createContext(null);const Q0=null;function mh(e){e()}var pa=mh,bh=function(n){return pa=n},yh=function(){return pa},ga={notify:function(){}};function Bh(){var e=yh(),n=null,t=null;return{clear:function(){n=null,t=null},notify:function(){e(function(){for(var i=n;i;)i.callback(),i=i.next})},get:function(){for(var i=[],r=n;r;)i.push(r),r=r.next;return i},subscribe:function(i){var r=!0,c=t={callback:i,next:null,prev:t};return c.prev?c.prev.next=c:n=c,function(){!r||n===null||(r=!1,c.next?c.next.prev=c.prev:t=c.prev,c.prev?c.prev.next=c.next:n=c.next)}}}}var _a=function(){function e(t,o){this.store=t,this.parentSub=o,this.unsubscribe=null,this.listeners=ga,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(o){return this.trySubscribe(),this.listeners.subscribe(o)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return!!this.unsubscribe},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=Bh())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=ga)},e}(),ai=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?jn:wt;function Fh(e){var n=e.store,t=e.context,o=e.children,i=dn(function(){var a=new _a(n);return a.onStateChange=a.notifyNestedSubs,{store:n,subscription:a}},[n]),r=dn(function(){return n.getState()},[n]);ai(function(){var a=i.subscription;return a.trySubscribe(),r!==n.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,r]);var c=t||It;return da.createElement(c.Provider,{value:i},o)}const vh=Fh;var Z0=I(3869),ek=I(5376),Ot,ha,ma,Le,pn,Ch,kh,Rt,wh,Sh,xh,Th,Ih=null,Oh=null,nk=function(n){try{return JSON.stringify(n)}catch{return String(n)}};function Rh(e,n){var t=e[1];return[n.payload,t+1]}function ba(e,n,t){xh(function(){return e.apply(void 0,n)},t)}function Dh(e,n,t,o,i,r,c){e.current=o,n.current=i,t.current=!1,r.current&&(r.current=null,c())}function Nh(e,n,t,o,i,r,c,a,s,l){if(e){var f=!1,A=null,d=function(){if(!f){var k=n.getState(),B,w;try{B=o(k,i.current)}catch(R){w=R,A=R}w||(A=null),B===r.current?c.current||s():(r.current=B,a.current=B,c.current=!0,l({type:"STORE_UPDATED",payload:{error:w}}))}};t.onStateChange=d,t.trySubscribe(),d();var u=function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,A)throw A};return u}}var Ph=function(){return[null,0]};function tk(e,n){n===void 0&&(n={});var t=n,o=t.getDisplayName,i=o===void 0?function(Be){return"ConnectAdvanced("+Be+")"}:o,r=t.methodName,c=r===void 0?"connectAdvanced":r,a=t.renderCountProp,s=a===void 0?void 0:a,l=t.shouldHandleStateChanges,f=l===void 0?!0:l,A=t.storeKey,d=A===void 0?"store":A,u=t.withRef,_=u===void 0?!1:u,k=t.forwardRef,B=k===void 0?!1:k,w=t.context,R=w===void 0?Th:w,Y=ha(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(0)var ae;var ee=R;return function(X){var Re=X.displayName||X.name||"Component",Q=i(Re),De=Ot({},Y,{getDisplayName:i,methodName:c,renderCountProp:s,shouldHandleStateChanges:f,storeKey:d,displayName:Q,wrappedComponentName:Re,WrappedComponent:X}),ao=Y.pure;function nr(ie){return e(ie.dispatch,De)}var tr=ao?Le:function(ie){return ie()};function nt(ie){var tt=Le(function(){var rt=ie.reactReduxForwardedRef,sr=ha(ie,["reactReduxForwardedRef"]);return[ie.context,rt,sr]},[ie]),on=tt[0],Jl=tt[1],ot=tt[2],or=Le(function(){return on&&on.Consumer&&wh(pn.createElement(on.Consumer,null))?on:ee},[on,ee]),Je=Ch(or),it=!!ie.store&&!!ie.store.getState&&!!ie.store.dispatch,Xw=!!Je&&!!Je.store,qe=it?ie.store:Je.store,ir=Le(function(){return nr(qe)},[qe]),ql=Le(function(){if(!f)return Oh;var rt=new Sh(qe,it?null:Je.subscription),sr=rt.notifyNestedSubs.bind(rt);return[rt,sr]},[qe,it,Je]),lo=ql[0],zl=ql[1],Hl=Le(function(){return it?Je:Ot({},Je,{subscription:lo})},[it,Je,lo]),Gl=kh(Rh,Ih,Ph),dC=Gl[0],Ao=dC[0],pC=Gl[1];if(Ao&&Ao.error)throw Ao.error;var Wl=Rt(),rr=Rt(ot),fo=Rt(),Kl=Rt(!1),cr=tr(function(){return fo.current&&ot===rr.current?fo.current:ir(qe.getState(),ot)},[qe,Ao,ot]);ba(Dh,[rr,Wl,Kl,ot,cr,fo,zl]),ba(Nh,[f,qe,lo,ir,rr,Wl,Kl,fo,zl,pC],[qe,lo,ir]);var ar=Le(function(){return pn.createElement(X,Ot({},cr,{ref:Jl}))},[Jl,X,cr]),gC=Le(function(){return f?pn.createElement(or.Provider,{value:Hl},ar):ar},[or,ar,Hl]);return gC}var Tn=ao?pn.memo(nt):nt;if(Tn.WrappedComponent=X,Tn.displayName=nt.displayName=Q,B){var so=pn.forwardRef(function(tt,on){return pn.createElement(Tn,Ot({},tt,{reactReduxForwardedRef:on}))});return so.displayName=Q,so.WrappedComponent=X,ma(so,X)}return ma(Tn,X)}}function Mh(e,n){var t={},o=function(c){var a=e[c];typeof a=="function"&&(t[c]=function(){return n(a.apply(void 0,arguments))})};for(var i in e)o(i);return t}function si(e){return function(t,o){var i=e(t,o);function r(){return i}return r.dependsOnOwnProps=!1,r}}function ya(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function Ba(e,n){return function(o,i){var r=i.displayName,c=function(s,l){return c.dependsOnOwnProps?c.mapToProps(s,l):c.mapToProps(s)};return c.dependsOnOwnProps=!0,c.mapToProps=function(s,l){c.mapToProps=e,c.dependsOnOwnProps=ya(e);var f=c(s,l);return typeof f=="function"&&(c.mapToProps=f,c.dependsOnOwnProps=ya(f),f=c(s,l)),f},c}}function Lh(e){return typeof e=="function"?Ba(e,"mapDispatchToProps"):void 0}function Uh(e){return e?void 0:si(function(n){return{dispatch:n}})}function jh(e){return e&&typeof e=="object"?si(function(n){return Mh(e,n)}):void 0}const ok=[Lh,Uh,jh];function $h(e){return typeof e=="function"?Ba(e,"mapStateToProps"):void 0}function Jh(e){return e?void 0:si(function(){return{}})}const ik=[$h,Jh];function li(){return li=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},li.apply(null,arguments)}function qh(e,n,t){return li({},t,e,n)}function zh(e){return function(t,o){var i=o.displayName,r=o.pure,c=o.areMergedPropsEqual,a=!1,s;return function(f,A,d){var u=e(f,A,d);return a?(!r||!c(u,s))&&(s=u):(a=!0,s=u),s}}}function Hh(e){return typeof e=="function"?zh(e):void 0}function Gh(e){return e?void 0:function(){return qh}}const rk=[Hh,Gh];var Wh,Kh,Vh,Ai,Yh,Xh,Qh,Zh;function fi(e,n,t){for(var o=n.length-1;o>=0;o--){var i=n[o](e);if(i)return i}return function(r,c){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+c.wrappedComponentName+".")}}function em(e,n){return e===n}function ck(e){var n=e===void 0?{}:e,t=n.connectHOC,o=t===void 0?Vh:t,i=n.mapStateToPropsFactories,r=i===void 0?Xh:i,c=n.mapDispatchToPropsFactories,a=c===void 0?Yh:c,s=n.mergePropsFactories,l=s===void 0?Qh:s,f=n.selectorFactory,A=f===void 0?Zh:f;return function(u,_,k,B){B===void 0&&(B={});var w=B,R=w.pure,Y=R===void 0?!0:R,ae=w.areStatesEqual,ee=ae===void 0?em:ae,Be=w.areOwnPropsEqual,X=Be===void 0?Ai:Be,Re=w.areStatePropsEqual,Q=Re===void 0?Ai:Re,De=w.areMergedPropsEqual,ao=De===void 0?Ai:De,nr=Kh(w,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),tr=fi(u,r,"mapStateToProps"),nt=fi(_,a,"mapDispatchToProps"),Tn=fi(k,l,"mergeProps");return o(A,Wh({methodName:"connect",getDisplayName:function(ie){return"Connect("+ie+")"},shouldHandleStateChanges:!!u,initMapStateToProps:tr,initMapDispatchToProps:nt,initMergeProps:Tn,pure:Y,areStatesEqual:ee,areOwnPropsEqual:X,areStatePropsEqual:Q,areMergedPropsEqual:ao},nr))}}const ak=null;function nm(){var e=ei(It);return e}var tm,Fa,om;function sk(e){e===void 0&&(e=Fa);var n=e===Fa?om:function(){return tm(e)};return function(){var o=n(),i=o.store;return i}}var lk=null,va,im,rm;function Ak(e){e===void 0&&(e=va);var n=e===va?im:rm(e);return function(){var o=n();return o.dispatch}}var fk=null,cm=function(n,t){return n===t};function am(e,n,t,o){var i=Zo(function(_){return _+1},0),r=i[1],c=dn(function(){return new _a(t,o)},[t,o]),a=En(),s=En(),l=En(),f=En(),A=t.getState(),d;try{if(e!==s.current||A!==l.current||a.current){var u=e(A);f.current===void 0||!n(u,f.current)?d=u:d=f.current}else d=f.current}catch(_){throw a.current&&(_.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),_}return ai(function(){s.current=e,l.current=A,f.current=d,a.current=void 0}),ai(function(){function _(){try{var k=t.getState(),B=s.current(k);if(n(B,f.current))return;f.current=B,l.current=k}catch(w){a.current=w}r()}return c.onStateChange=_,c.trySubscribe(),_(),function(){return c.tryUnsubscribe()}},[t,c]),d}function sm(e){e===void 0&&(e=It);var n=e===It?nm:function(){return ei(e)};return function(o,i){i===void 0&&(i=cm);var r=n(),c=r.store,a=r.subscription,s=am(o,i,c,a);return Vc(s),s}}var lm=sm();bh(ua);var Am=/\s/;function fm(e){for(var n=e.length;n--&&Am.test(e.charAt(n)););return n}const um=fm;var Em=/^\s+/;function dm(e){return e&&e.slice(0,um(e)+1).replace(Em,"")}const pm=dm;var Ca=NaN,gm=/^[-+]0x[0-9a-f]+$/i,_m=/^0b[01]+$/i,hm=/^0o[0-7]+$/i,mm=parseInt;function bm(e){if(typeof e=="number")return e;if(dt(e))return Ca;if(We(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=We(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=pm(e);var t=_m.test(e);return t||hm.test(e)?mm(e.slice(2),t?2:8):gm.test(e)?Ca:+e}const ym=bm;var ka=1/0,Bm=17976931348623157e292;function Fm(e){if(!e)return e===0?e:0;if(e=ym(e),e===ka||e===-ka){var n=e<0?-1:1;return n*Bm}return e===e?e:0}const vm=Fm;function Cm(e){var n=vm(e),t=n%1;return n===n?t?n-t:n:0}const km=Cm;var wm="Expected a function";function Sm(e,n){var t;if(typeof n!="function")throw new TypeError(wm);return e=km(e),function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=void 0),t}}const xm=Sm;function Tm(e){return xm(2,e)}const Im=Tm(()=>({...window.desktop.store,dispatch:$c})),{XX:Om}=b,Rm=async(e,n="div")=>{const t=Im(),i=t.getState().settings.locale;i&&await window.desktop.intl.applyLocale(i);const r=document.createElement(n);document.body.appendChild(r),window.addEventListener("beforeunload",()=>fa(r)),Om(re(vh,{store:t,children:re(e,{})}),r)},wa={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},Sa=(e,n)=>(...t)=>{try{const o=t.map(i=>typeof i=="object"?JSON.stringify(i,null,2):i).join(" ");n?console[e](`[${n}]	${o}`):console[e](o)}catch{}},Dm=Object.entries(wa).reduce((e,[n,t])=>(e[n]=Sa(t),e),{}),Ek=(e,n)=>Object.entries(wa).reduce((t,[o,i])=>(t[o]=Sa(i,e),t),{}),{notifyError:dk,setupErrorReporter:Nm}=(()=>{let e=null;return{setupErrorReporter:n=>e=n,notifyError:n=>{if(e){e(n);return}Dm.warn("notifyError: skipping error reporting, reporter is not initialized.",{error:n})}}})(),xa=Object.prototype.toString;function Ta(e){switch(xa.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Qe(e,Error)}}function gn(e,n){return xa.call(e)===`[object ${n}]`}function ui(e){return gn(e,"ErrorEvent")}function Ia(e){return gn(e,"DOMError")}function Pm(e){return gn(e,"DOMException")}function we(e){return gn(e,"String")}function Ei(e){return typeof e=="object"&&e!==null&&"__sentry_template_string__"in e&&"__sentry_template_values__"in e}function di(e){return e===null||Ei(e)||typeof e!="object"&&typeof e!="function"}function _n(e){return gn(e,"Object")}function Dt(e){return typeof Event<"u"&&Qe(e,Event)}function Mm(e){return typeof Element<"u"&&Qe(e,Element)}function Lm(e){return gn(e,"RegExp")}function Nt(e){return!!(e&&e.then&&typeof e.then=="function")}function Um(e){return _n(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}function jm(e){return typeof e=="number"&&e!==e}function Qe(e,n){try{return e instanceof n}catch{return!1}}function Oa(e){return!!(typeof e=="object"&&e!==null&&(e.__isVue||e._isVue))}function Pt(e){return e&&e.Math==Math?e:void 0}const P=typeof globalThis=="object"&&Pt(globalThis)||typeof window=="object"&&Pt(window)||typeof self=="object"&&Pt(self)||typeof global=="object"&&Pt(global)||function(){return this}()||{};function pi(){return P}function Ra(e,n,t){const o=t||P,i=o.__SENTRY__=o.__SENTRY__||{};return i[e]||(i[e]=n())}const hn=pi(),$m=80;function Da(e,n={}){if(!e)return"<unknown>";try{let t=e;const o=5,i=[];let r=0,c=0;const a=" > ",s=a.length;let l;const f=Array.isArray(n)?n:n.keyAttrs,A=!Array.isArray(n)&&n.maxStringLength||$m;for(;t&&r++<o&&(l=Jm(t,f),!(l==="html"||r>1&&c+i.length*s+l.length>=A));)i.push(l),c+=l.length,t=t.parentNode;return i.reverse().join(a)}catch{return"<unknown>"}}function Jm(e,n){const t=e,o=[];let i,r,c,a,s;if(!t||!t.tagName)return"";if(hn.HTMLElement&&t instanceof HTMLElement&&t.dataset&&t.dataset.sentryComponent)return t.dataset.sentryComponent;o.push(t.tagName.toLowerCase());const l=n&&n.length?n.filter(A=>t.getAttribute(A)).map(A=>[A,t.getAttribute(A)]):null;if(l&&l.length)l.forEach(A=>{o.push(`[${A[0]}="${A[1]}"]`)});else if(t.id&&o.push(`#${t.id}`),i=t.className,i&&we(i))for(r=i.split(/\s+/),s=0;s<r.length;s++)o.push(`.${r[s]}`);const f=["aria-label","type","name","title","alt"];for(s=0;s<f.length;s++)c=f[s],a=t.getAttribute(c),a&&o.push(`[${c}="${a}"]`);return o.join("")}function qm(){try{return hn.document.location.href}catch{return""}}function pk(e){return hn.document&&hn.document.querySelector?hn.document.querySelector(e):null}function zm(e){if(!hn.HTMLElement)return null;let n=e;const t=5;for(let o=0;o<t;o++){if(!n)return null;if(n instanceof HTMLElement&&n.dataset.sentryComponent)return n.dataset.sentryComponent;n=n.parentNode}return null}const Jn=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,Hm="Sentry Logger ",gi=["debug","info","warn","error","log","assert","trace"],Mt={};function Lt(e){if(!("console"in P))return e();const n=P.console,t={},o=Object.keys(Mt);o.forEach(i=>{const r=Mt[i];t[i]=n[i],n[i]=r});try{return e()}finally{o.forEach(i=>{n[i]=t[i]})}}function Gm(){let e=!1;const n={enable:()=>{e=!0},disable:()=>{e=!1},isEnabled:()=>e};return Jn?gi.forEach(t=>{n[t]=(...o)=>{e&&Lt(()=>{P.console[t](`${Hm}[${t}]:`,...o)})}}):gi.forEach(t=>{n[t]=()=>{}}),n}const S=Gm();function mn(e,n=0){return typeof e!="string"||n===0||e.length<=n?e:`${e.slice(0,n)}...`}function gk(e,n){let t=e;const o=t.length;if(o<=150)return t;n>o&&(n=o);let i=Math.max(n-60,0);i<5&&(i=0);let r=Math.min(i+140,o);return r>o-5&&(r=o),r===o&&(i=Math.max(r-140,0)),t=t.slice(i,r),i>0&&(t=`'{snip} ${t}`),r<o&&(t+=" {snip}"),t}function Na(e,n){if(!Array.isArray(e))return"";const t=[];for(let o=0;o<e.length;o++){const i=e[o];try{Oa(i)?t.push("[VueViewModel]"):t.push(String(i))}catch{t.push("[value cannot be serialized]")}}return t.join(n)}function Wm(e,n,t=!1){return we(e)?Lm(n)?n.test(e):we(n)?t?e===n:e.includes(n):!1:!1}function Ut(e,n=[],t=!1){return n.some(o=>Wm(e,o,t))}var Km;function Z(e,n,t){if(!(n in e))return;const o=e[n],i=t(o);typeof i=="function"&&Pa(i,o),e[n]=i}function qn(e,n,t){try{Object.defineProperty(e,n,{value:t,writable:!0,configurable:!0})}catch{Jn&&S.log(`Failed to add non-enumerable property "${n}" to object`,e)}}function Pa(e,n){try{const t=n.prototype||{};e.prototype=n.prototype=t,qn(e,"__sentry_original__",n)}catch{}}function _i(e){return e.__sentry_original__}function Vm(e){return Object.keys(e).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&")}function Ma(e){if(Ta(e))return{message:e.message,name:e.name,stack:e.stack,...Ua(e)};if(Dt(e)){const n={type:e.type,target:La(e.target),currentTarget:La(e.currentTarget),...Ua(e)};return typeof CustomEvent<"u"&&Qe(e,CustomEvent)&&(n.detail=e.detail),n}else return e}function La(e){try{return Mm(e)?Da(e):Object.prototype.toString.call(e)}catch{return"<unknown>"}}function Ua(e){if(typeof e=="object"&&e!==null){const n={};for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n}else return{}}function Ym(e,n=40){const t=Object.keys(Ma(e));if(t.sort(),!t.length)return"[object has no keys]";if(t[0].length>=n)return mn(t[0],n);for(let o=t.length;o>0;o--){const i=t.slice(0,o).join(", ");if(!(i.length>n))return o===t.length?i:mn(i,n)}return""}function ue(e){return hi(e,new Map)}function hi(e,n){if(Xm(e)){const t=n.get(e);if(t!==void 0)return t;const o={};n.set(e,o);for(const i of Object.keys(e))typeof e[i]<"u"&&(o[i]=hi(e[i],n));return o}if(Array.isArray(e)){const t=n.get(e);if(t!==void 0)return t;const o=[];return n.set(e,o),e.forEach(i=>{o.push(hi(i,n))}),o}return e}function Xm(e){if(!_n(e))return!1;try{const n=Object.getPrototypeOf(e).constructor.name;return!n||n==="Object"}catch{return!0}}function _k(e){let n;switch(!0){case e==null:n=new String(e);break;case(typeof e=="symbol"||typeof e=="bigint"):n=Object(e);break;case Km(e):n=new e.constructor(e);break;default:n=e;break}return n}const jt="production";var mi;function se(){const e=P,n=e.crypto||e.msCrypto;let t=()=>Math.random()*16;try{if(n&&n.randomUUID)return n.randomUUID().replace(/-/g,"");n&&n.getRandomValues&&(t=()=>{const o=new Uint8Array(1);return n.getRandomValues(o),o[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,o=>(o^(t()&15)>>o/4).toString(16))}function ja(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}function Ue(e){const{message:n,event_id:t}=e;if(n)return n;const o=ja(e);return o?o.type&&o.value?`${o.type}: ${o.value}`:o.type||o.value||t||"<unknown>":t||"<unknown>"}function bi(e,n,t){const o=e.exception=e.exception||{},i=o.values=o.values||[],r=i[0]=i[0]||{};r.value||(r.value=n||""),r.type||(r.type=t||"Error")}function zn(e,n){const t=ja(e);if(!t)return;const o={type:"generic",handled:!0},i=t.mechanism;if(t.mechanism={...o,...i,...n},n&&"data"in n){const r={...i&&i.data,...n.data};t.mechanism.data=r}}const Qm=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function hk(e){const n=e.match(Qm)||[],t=parseInt(n[1],10),o=parseInt(n[2],10),i=parseInt(n[3],10);return{buildmetadata:n[5],major:isNaN(t)?void 0:t,minor:isNaN(o)?void 0:o,patch:isNaN(i)?void 0:i,prerelease:n[4]}}function mk(e,n,t=5){if(n.lineno===void 0)return;const o=e.length,i=Math.max(Math.min(o-1,n.lineno-1),0);n.pre_context=e.slice(Math.max(0,i-t),i).map(r=>mi(r,0)),n.context_line=mi(e[Math.min(o-1,i)],n.colno||0),n.post_context=e.slice(Math.min(i+1,o),i+1+t).map(r=>mi(r,0))}function $a(e){if(e&&e.__sentry_captured__)return!0;try{qn(e,"__sentry_captured__",!0)}catch{}return!1}function Ja(e){return Array.isArray(e)?e:[e]}const qa=1e3;function Hn(){return Date.now()/qa}function Zm(){const{performance:e}=P;if(!e||!e.now)return Hn;const n=Date.now()-e.now(),t=e.timeOrigin==null?n:e.timeOrigin;return()=>(t+e.now())/qa}const yi=Zm(),bk=null;let $t;const yk=(()=>{const{performance:e}=P;if(!e||!e.now){$t="none";return}const n=3600*1e3,t=e.now(),o=Date.now(),i=e.timeOrigin?Math.abs(e.timeOrigin+t-o):n,r=i<n,c=e.timing&&e.timing.navigationStart,s=typeof c=="number"?Math.abs(c+t-o):n,l=s<n;return r||l?i<=s?($t="timeOrigin",e.timeOrigin):($t="navigationStart",c):($t="dateNow",o)})(),L=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;var Se;(function(e){e[e.PENDING=0]="PENDING";const t=1;e[e.RESOLVED=t]="RESOLVED";const o=2;e[e.REJECTED=o]="REJECTED"})(Se||(Se={}));function bn(e){return new le(n=>{n(e)})}function Bi(e){return new le((n,t)=>{t(e)})}class le{constructor(n){le.prototype.__init.call(this),le.prototype.__init2.call(this),le.prototype.__init3.call(this),le.prototype.__init4.call(this),this._state=Se.PENDING,this._handlers=[];try{n(this._resolve,this._reject)}catch(t){this._reject(t)}}then(n,t){return new le((o,i)=>{this._handlers.push([!1,r=>{if(!n)o(r);else try{o(n(r))}catch(c){i(c)}},r=>{if(!t)i(r);else try{o(t(r))}catch(c){i(c)}}]),this._executeHandlers()})}catch(n){return this.then(t=>t,n)}finally(n){return new le((t,o)=>{let i,r;return this.then(c=>{r=!1,i=c,n&&n()},c=>{r=!0,i=c,n&&n()}).then(()=>{if(r){o(i);return}t(i)})})}__init(){this._resolve=n=>{this._setResult(Se.RESOLVED,n)}}__init2(){this._reject=n=>{this._setResult(Se.REJECTED,n)}}__init3(){this._setResult=(n,t)=>{if(this._state===Se.PENDING){if(Nt(t)){t.then(this._resolve,this._reject);return}this._state=n,this._value=t,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===Se.PENDING)return;const n=this._handlers.slice();this._handlers=[],n.forEach(t=>{t[0]||(this._state===Se.RESOLVED&&t[1](this._value),this._state===Se.REJECTED&&t[2](this._value),t[0]=!0)})}}}function Fi(){return Ra("globalEventProcessors",()=>[])}function eb(e){Fi().push(e)}function Jt(e,n,t,o=0){return new le((i,r)=>{const c=e[o];if(n===null||typeof c!="function")i(n);else{const a=c({...n},t);L&&c.id&&a===null&&S.log(`Event processor "${c.id}" dropped event`),Nt(a)?a.then(s=>Jt(e,s,t,o+1).then(i)).then(null,r):Jt(e,a,t,o+1).then(i).then(null,r)}})}function za(e){const n=yi(),t={sid:se(),init:!0,timestamp:n,started:n,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>nb(t)};return e&&Ze(t,e),t}function Ze(e,n={}){if(n.user&&(!e.ipAddress&&n.user.ip_address&&(e.ipAddress=n.user.ip_address),!e.did&&!n.did&&(e.did=n.user.id||n.user.email||n.user.username)),e.timestamp=n.timestamp||yi(),n.abnormal_mechanism&&(e.abnormal_mechanism=n.abnormal_mechanism),n.ignoreDuration&&(e.ignoreDuration=n.ignoreDuration),n.sid&&(e.sid=n.sid.length===32?n.sid:se()),n.init!==void 0&&(e.init=n.init),!e.did&&n.did&&(e.did=`${n.did}`),typeof n.started=="number"&&(e.started=n.started),e.ignoreDuration)e.duration=void 0;else if(typeof n.duration=="number")e.duration=n.duration;else{const t=e.timestamp-e.started;e.duration=t>=0?t:0}n.release&&(e.release=n.release),n.environment&&(e.environment=n.environment),!e.ipAddress&&n.ipAddress&&(e.ipAddress=n.ipAddress),!e.userAgent&&n.userAgent&&(e.userAgent=n.userAgent),typeof n.errors=="number"&&(e.errors=n.errors),n.status&&(e.status=n.status)}function Ha(e,n){let t={};n?t={status:n}:e.status==="ok"&&(t={status:"exited"}),Ze(e,t)}function nb(e){return ue({sid:`${e.sid}`,init:e.init,started:new Date(e.started*1e3).toISOString(),timestamp:new Date(e.timestamp*1e3).toISOString(),status:e.status,errors:e.errors,did:typeof e.did=="number"||typeof e.did=="string"?`${e.did}`:void 0,duration:e.duration,abnormal_mechanism:e.abnormal_mechanism,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})}function Ga(e){return e.transaction}var tb,ob;const Bk=0,ib=1;function rb(e){const{spanId:n,traceId:t}=e.spanContext(),{data:o,op:i,parent_span_id:r,status:c,tags:a,origin:s}=yn(e);return ue({data:o,op:i,parent_span_id:r,span_id:n,status:c,tags:a,trace_id:t,origin:s})}function Fk(e){const{traceId:n,spanId:t}=e.spanContext(),o=Ka(e);return ob(n,t,o)}function vk(e){return typeof e=="number"?Wa(e):Array.isArray(e)?e[0]+e[1]/1e9:e instanceof Date?Wa(e.getTime()):tb()}function Wa(e){return e>9999999999?e/1e3:e}function yn(e){return cb(e)?e.getSpanJSON():typeof e.toJSON=="function"?e.toJSON():{}}function cb(e){return typeof e.getSpanJSON=="function"}function Ka(e){const{traceFlags:n}=e.spanContext();return!!(n&ib)}function Va(e,n,t){const o=n.getOptions(),{publicKey:i}=n.getDsn()||{},{segment:r}=t&&t.getUser()||{},c=ue({environment:o.environment||jt,release:o.release,user_segment:r,public_key:i,trace_id:e});return n.emit&&n.emit("createDsc",c),c}function ab(e){const n=V();if(!n)return{};const t=Va(yn(e).trace_id||"",n,Ie()),o=Ga(e);if(!o)return t;const i=o&&o._frozenDynamicSamplingContext;if(i)return i;const{sampleRate:r,source:c}=o.metadata;r!=null&&(t.sample_rate=`${r}`);const a=yn(o);return c&&c!=="url"&&(t.transaction=a.description),t.sampled=String(Ka(o)),n.emit&&n.emit("createDsc",t),t}function Ya(e,n){const{fingerprint:t,span:o,breadcrumbs:i,sdkProcessingMetadata:r}=n;sb(e,n),o&&fb(e,o),ub(e,t),lb(e,i),Ab(e,r)}function Xa(e,n){const{extra:t,tags:o,user:i,contexts:r,level:c,sdkProcessingMetadata:a,breadcrumbs:s,fingerprint:l,eventProcessors:f,attachments:A,propagationContext:d,transactionName:u,span:_}=n;Gn(e,"extra",t),Gn(e,"tags",o),Gn(e,"user",i),Gn(e,"contexts",r),Gn(e,"sdkProcessingMetadata",a),c&&(e.level=c),u&&(e.transactionName=u),_&&(e.span=_),s.length&&(e.breadcrumbs=[...e.breadcrumbs,...s]),l.length&&(e.fingerprint=[...e.fingerprint,...l]),f.length&&(e.eventProcessors=[...e.eventProcessors,...f]),A.length&&(e.attachments=[...e.attachments,...A]),e.propagationContext={...e.propagationContext,...d}}function Gn(e,n,t){if(t&&Object.keys(t).length){e[n]={...e[n]};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[n][o]=t[o])}}function sb(e,n){const{extra:t,tags:o,user:i,contexts:r,level:c,transactionName:a}=n,s=ue(t);s&&Object.keys(s).length&&(e.extra={...s,...e.extra});const l=ue(o);l&&Object.keys(l).length&&(e.tags={...l,...e.tags});const f=ue(i);f&&Object.keys(f).length&&(e.user={...f,...e.user});const A=ue(r);A&&Object.keys(A).length&&(e.contexts={...A,...e.contexts}),c&&(e.level=c),a&&(e.transaction=a)}function lb(e,n){const t=[...e.breadcrumbs||[],...n];e.breadcrumbs=t.length?t:void 0}function Ab(e,n){e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...n}}function fb(e,n){e.contexts={trace:rb(n),...e.contexts};const t=Ga(n);if(t){e.sdkProcessingMetadata={dynamicSamplingContext:ab(n),...e.sdkProcessingMetadata};const o=yn(t).description;o&&(e.tags={transaction:o,...e.tags})}}function ub(e,n){e.fingerprint=e.fingerprint?Ja(e.fingerprint):[],n&&(e.fingerprint=e.fingerprint.concat(n)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}const Eb=100;let qt;class xe{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=Qa()}static clone(n){return n?n.clone():new xe}clone(){const n=new xe;return n._breadcrumbs=[...this._breadcrumbs],n._tags={...this._tags},n._extra={...this._extra},n._contexts={...this._contexts},n._user=this._user,n._level=this._level,n._span=this._span,n._session=this._session,n._transactionName=this._transactionName,n._fingerprint=this._fingerprint,n._eventProcessors=[...this._eventProcessors],n._requestSession=this._requestSession,n._attachments=[...this._attachments],n._sdkProcessingMetadata={...this._sdkProcessingMetadata},n._propagationContext={...this._propagationContext},n._client=this._client,n}setClient(n){this._client=n}getClient(){return this._client}addScopeListener(n){this._scopeListeners.push(n)}addEventProcessor(n){return this._eventProcessors.push(n),this}setUser(n){return this._user=n||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&Ze(this._session,{user:n}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(n){return this._requestSession=n,this}setTags(n){return this._tags={...this._tags,...n},this._notifyScopeListeners(),this}setTag(n,t){return this._tags={...this._tags,[n]:t},this._notifyScopeListeners(),this}setExtras(n){return this._extra={...this._extra,...n},this._notifyScopeListeners(),this}setExtra(n,t){return this._extra={...this._extra,[n]:t},this._notifyScopeListeners(),this}setFingerprint(n){return this._fingerprint=n,this._notifyScopeListeners(),this}setLevel(n){return this._level=n,this._notifyScopeListeners(),this}setTransactionName(n){return this._transactionName=n,this._notifyScopeListeners(),this}setContext(n,t){return t===null?delete this._contexts[n]:this._contexts[n]=t,this._notifyScopeListeners(),this}setSpan(n){return this._span=n,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const n=this._span;return n&&n.transaction}setSession(n){return n?this._session=n:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(n){if(!n)return this;const t=typeof n=="function"?n(this):n;if(t instanceof xe){const o=t.getScopeData();this._tags={...this._tags,...o.tags},this._extra={...this._extra,...o.extra},this._contexts={...this._contexts,...o.contexts},o.user&&Object.keys(o.user).length&&(this._user=o.user),o.level&&(this._level=o.level),o.fingerprint.length&&(this._fingerprint=o.fingerprint),t.getRequestSession()&&(this._requestSession=t.getRequestSession()),o.propagationContext&&(this._propagationContext=o.propagationContext)}else if(_n(t)){const o=n;this._tags={...this._tags,...o.tags},this._extra={...this._extra,...o.extra},this._contexts={...this._contexts,...o.contexts},o.user&&(this._user=o.user),o.level&&(this._level=o.level),o.fingerprint&&(this._fingerprint=o.fingerprint),o.requestSession&&(this._requestSession=o.requestSession),o.propagationContext&&(this._propagationContext=o.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=Qa(),this}addBreadcrumb(n,t){const o=typeof t=="number"?t:Eb;if(o<=0)return this;const i={timestamp:Hn(),...n},r=this._breadcrumbs;return r.push(i),this._breadcrumbs=r.length>o?r.slice(-o):r,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(n){return this._attachments.push(n),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:n,_attachments:t,_contexts:o,_tags:i,_extra:r,_user:c,_level:a,_fingerprint:s,_eventProcessors:l,_propagationContext:f,_sdkProcessingMetadata:A,_transactionName:d,_span:u}=this;return{breadcrumbs:n,attachments:t,contexts:o,tags:i,extra:r,user:c,level:a,fingerprint:s||[],eventProcessors:l,propagationContext:f,sdkProcessingMetadata:A,transactionName:d,span:u}}applyToEvent(n,t={},o=[]){Ya(n,this.getScopeData());const i=[...o,...Fi(),...this._eventProcessors];return Jt(i,n,t)}setSDKProcessingMetadata(n){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...n},this}setPropagationContext(n){return this._propagationContext=n,this}getPropagationContext(){return this._propagationContext}captureException(n,t){const o=t&&t.event_id?t.event_id:se();if(!this._client)return S.warn("No client configured on scope - will not capture exception!"),o;const i=new Error("Sentry syntheticException");return this._client.captureException(n,{originalException:n,syntheticException:i,...t,event_id:o},this),o}captureMessage(n,t,o){const i=o&&o.event_id?o.event_id:se();if(!this._client)return S.warn("No client configured on scope - will not capture message!"),i;const r=new Error(n);return this._client.captureMessage(n,t,{originalException:n,syntheticException:r,...o,event_id:i},this),i}captureEvent(n,t){const o=t&&t.event_id?t.event_id:se();return this._client?(this._client.captureEvent(n,{...t,event_id:o},this),o):(S.warn("No client configured on scope - will not capture event!"),o)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(n=>{n(this)}),this._notifyingListeners=!1)}}function db(){return qt||(qt=new xe),qt}function Ck(e){qt=e}function Qa(){return{traceId:se(),spanId:se().substring(16)}}const vi="7.112.0",Ci=parseFloat(vi),pb=100;class ki{constructor(n,t,o,i=Ci){this._version=i;let r;t?r=t:(r=new xe,r.setClient(n));let c;o?c=o:(c=new xe,c.setClient(n)),this._stack=[{scope:r}],n&&this.bindClient(n),this._isolationScope=c}isOlderThan(n){return this._version<n}bindClient(n){const t=this.getStackTop();t.client=n,t.scope.setClient(n),n&&n.setupIntegrations&&n.setupIntegrations()}pushScope(){const n=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:n}),n}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(n){const t=this.pushScope();let o;try{o=n(t)}catch(i){throw this.popScope(),i}return Nt(o)?o.then(i=>(this.popScope(),i),i=>{throw this.popScope(),i}):(this.popScope(),o)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(n,t){const o=this._lastEventId=t&&t.event_id?t.event_id:se(),i=new Error("Sentry syntheticException");return this.getScope().captureException(n,{originalException:n,syntheticException:i,...t,event_id:o}),o}captureMessage(n,t,o){const i=this._lastEventId=o&&o.event_id?o.event_id:se(),r=new Error(n);return this.getScope().captureMessage(n,t,{originalException:n,syntheticException:r,...o,event_id:i}),i}captureEvent(n,t){const o=t&&t.event_id?t.event_id:se();return n.type||(this._lastEventId=o),this.getScope().captureEvent(n,{...t,event_id:o}),o}lastEventId(){return this._lastEventId}addBreadcrumb(n,t){const{scope:o,client:i}=this.getStackTop();if(!i)return;const{beforeBreadcrumb:r=null,maxBreadcrumbs:c=pb}=i.getOptions&&i.getOptions()||{};if(c<=0)return;const s={timestamp:Hn(),...n},l=r?Lt(()=>r(s,t)):s;l!==null&&(i.emit&&i.emit("beforeAddBreadcrumb",l,t),o.addBreadcrumb(l,c))}setUser(n){this.getScope().setUser(n),this.getIsolationScope().setUser(n)}setTags(n){this.getScope().setTags(n),this.getIsolationScope().setTags(n)}setExtras(n){this.getScope().setExtras(n),this.getIsolationScope().setExtras(n)}setTag(n,t){this.getScope().setTag(n,t),this.getIsolationScope().setTag(n,t)}setExtra(n,t){this.getScope().setExtra(n,t),this.getIsolationScope().setExtra(n,t)}setContext(n,t){this.getScope().setContext(n,t),this.getIsolationScope().setContext(n,t)}configureScope(n){const{scope:t,client:o}=this.getStackTop();o&&n(t)}run(n){const t=Za(this);try{n(this)}finally{Za(t)}}getIntegration(n){const t=this.getClient();if(!t)return null;try{return t.getIntegration(n)}catch{return L&&S.warn(`Cannot retrieve integration ${n.id} from the current Hub`),null}}startTransaction(n,t){const o=this._callExtensionMethod("startTransaction",n,t);return L&&!o&&(this.getClient()?S.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):S.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),o}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(n=!1){if(n)return this.endSession();this._sendSessionUpdate()}endSession(){const t=this.getStackTop().scope,o=t.getSession();o&&Ha(o),this._sendSessionUpdate(),t.setSession()}startSession(n){const{scope:t,client:o}=this.getStackTop(),{release:i,environment:r=jt}=o&&o.getOptions()||{},{userAgent:c}=P.navigator||{},a=za({release:i,environment:r,user:t.getUser(),...c&&{userAgent:c},...n}),s=t.getSession&&t.getSession();return s&&s.status==="ok"&&Ze(s,{status:"exited"}),this.endSession(),t.setSession(a),a}shouldSendDefaultPii(){const n=this.getClient(),t=n&&n.getOptions();return!!(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:n,client:t}=this.getStackTop(),o=n.getSession();o&&t&&t.captureSession&&t.captureSession(o)}_callExtensionMethod(n,...t){const i=Bn().__SENTRY__;if(i&&i.extensions&&typeof i.extensions[n]=="function")return i.extensions[n].apply(this,t);L&&S.warn(`Extension method ${n} couldn't be found, doing nothing.`)}}function Bn(){return P.__SENTRY__=P.__SENTRY__||{extensions:{},hub:void 0},P}function Za(e){const n=Bn(),t=Ht(n);return wi(n,e),t}function Te(){const e=Bn();if(e.__SENTRY__&&e.__SENTRY__.acs){const n=e.__SENTRY__.acs.getCurrentHub();if(n)return n}return es(e)}function zt(){return Te().getIsolationScope()}function es(e=Bn()){return(!ns(e)||Ht(e).isOlderThan(Ci))&&wi(e,new ki),Ht(e)}function kk(e,n=es()){if(!ns(e)||Ht(e).isOlderThan(Ci)){const t=n.getClient(),o=n.getScope(),i=n.getIsolationScope();wi(e,new ki(t,o.clone(),i.clone()))}}function wk(e){const n=Bn();n.__SENTRY__=n.__SENTRY__||{},n.__SENTRY__.acs=e}function Sk(e,n={}){const t=Bn();return t.__SENTRY__&&t.__SENTRY__.acs?t.__SENTRY__.acs.runWithAsyncContext(e,n):e()}function ns(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function Ht(e){return Ra("hub",()=>new ki,e)}function wi(e,n){if(!e)return!1;const t=e.__SENTRY__=e.__SENTRY__||{};return t.hub=n,!0}function gb(){const e=typeof WeakSet=="function",n=e?new WeakSet:[];function t(i){if(e)return n.has(i)?!0:(n.add(i),!1);for(let r=0;r<n.length;r++)if(n[r]===i)return!0;return n.push(i),!1}function o(i){if(e)n.delete(i);else for(let r=0;r<n.length;r++)if(n[r]===i){n.splice(r,1);break}}return[t,o]}function _b(e,n=!1){return!(n||e&&!e.startsWith("/")&&!e.match(/^[A-Z]:/)&&!e.startsWith(".")&&!e.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))&&e!==void 0&&!e.includes("node_modules/")}function hb(e){const n=/^\s*[-]{4,}$/,t=/at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;return o=>{const i=o.match(t);if(i){let r,c,a,s,l;if(i[1]){a=i[1];let d=a.lastIndexOf(".");if(a[d-1]==="."&&d--,d>0){r=a.slice(0,d),c=a.slice(d+1);const u=r.indexOf(".Module");u>0&&(a=a.slice(u+1),r=r.slice(0,u))}s=void 0}c&&(s=r,l=c),c==="<anonymous>"&&(l=void 0,a=void 0),a===void 0&&(l=l||"<anonymous>",a=s?`${s}.${l}`:l);let f=i[2]&&i[2].startsWith("file://")?i[2].slice(7):i[2];const A=i[5]==="native";return f&&f.match(/\/[A-Z]:/)&&(f=f.slice(1)),!f&&i[5]&&!A&&(f=i[5]),{filename:f,module:e?e(f):void 0,function:a,lineno:parseInt(i[3],10)||void 0,colno:parseInt(i[4],10)||void 0,in_app:_b(f,A)}}if(o.match(n))return{filename:o}}}const ts=50,os=/\(error: (.*)\)/,is=/captureMessage|captureException/;function rs(...e){const n=e.sort((t,o)=>t[0]-o[0]).map(t=>t[1]);return(t,o=0)=>{const i=[],r=t.split(`
`);for(let c=o;c<r.length;c++){const a=r[c];if(a.length>1024)continue;const s=os.test(a)?a.replace(os,"$1"):a;if(!s.match(/\S*Error: /)){for(const l of n){const f=l(s);if(f){i.push(f);break}}if(i.length>=ts)break}}return cs(i)}}function mb(e){return Array.isArray(e)?rs(...e):e}function cs(e){if(!e.length)return[];const n=Array.from(e);return/sentryWrapped/.test(n[n.length-1].function||"")&&n.pop(),n.reverse(),is.test(n[n.length-1].function||"")&&(n.pop(),is.test(n[n.length-1].function||"")&&n.pop()),n.slice(0,ts).map(t=>({...t,filename:t.filename||n[n.length-1].filename,function:t.function||"?"}))}const Si="<anonymous>";function je(e){try{return!e||typeof e!="function"?Si:e.name||Si}catch{return Si}}function bb(e){return[90,hb(e)]}function me(e,n=100,t=1/0){try{return xi("",e,n,t)}catch(o){return{ERROR:`**non-serializable** (${o})`}}}function as(e,n=3,t=100*1024){const o=me(e,n);return vb(o)>t?as(e,n-1,t):o}function xi(e,n,t=1/0,o=1/0,i=gb()){const[r,c]=i;if(n==null||["number","boolean","string"].includes(typeof n)&&!jm(n))return n;const a=yb(e,n);if(!a.startsWith("[object "))return a;if(n.__sentry_skip_normalization__)return n;const s=typeof n.__sentry_override_normalization_depth__=="number"?n.__sentry_override_normalization_depth__:t;if(s===0)return a.replace("object ","");if(r(n))return"[Circular ~]";const l=n;if(l&&typeof l.toJSON=="function")try{const u=l.toJSON();return xi("",u,s-1,o,i)}catch{}const f=Array.isArray(n)?[]:{};let A=0;const d=Ma(n);for(const u in d){if(!Object.prototype.hasOwnProperty.call(d,u))continue;if(A>=o){f[u]="[MaxProperties ~]";break}const _=d[u];f[u]=xi(u,_,s-1,o,i),A++}return c(n),f}function yb(e,n){try{if(e==="domain"&&n&&typeof n=="object"&&n._events)return"[Domain]";if(e==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&n===global)return"[Global]";if(typeof window<"u"&&n===window)return"[Window]";if(typeof document<"u"&&n===document)return"[Document]";if(Oa(n))return"[VueViewModel]";if(Um(n))return"[SyntheticEvent]";if(typeof n=="number"&&n!==n)return"[NaN]";if(typeof n=="function")return`[Function: ${je(n)}]`;if(typeof n=="symbol")return`[${String(n)}]`;if(typeof n=="bigint")return`[BigInt: ${String(n)}]`;const t=Bb(n);return/^HTML(\w*)Element$/.test(t)?`[HTMLElement: ${t}]`:`[object ${t}]`}catch(t){return`**non-serializable** (${t})`}}function Bb(e){const n=Object.getPrototypeOf(e);return n?n.constructor.name:"null prototype"}function Fb(e){return~-encodeURI(e).split(/%..|./).length}function vb(e){return Fb(JSON.stringify(e))}function xk(e,n){const t=n.replace(/\\/g,"/").replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let o=e;try{o=decodeURI(e)}catch{}return o.replace(/\\/g,"/").replace(/webpack:\/?/g,"").replace(new RegExp(`(file://)?/*${t}/*`,"ig"),"app:///")}function Cb(e,n,t,o,i,r){const{normalizeDepth:c=3,normalizeMaxBreadth:a=1e3}=e,s={...n,event_id:n.event_id||t.event_id||se(),timestamp:n.timestamp||Hn()},l=t.integrations||e.integrations.map(B=>B.name);kb(s,e),xb(s,l),n.type===void 0&&wb(s,e.stackParser);const f=Ib(o,t.captureContext);t.mechanism&&zn(s,t.mechanism);const A=i&&i.getEventProcessors?i.getEventProcessors():[],d=db().getScopeData();if(r){const B=r.getScopeData();Xa(d,B)}if(f){const B=f.getScopeData();Xa(d,B)}const u=[...t.attachments||[],...d.attachments];u.length&&(t.attachments=u),Ya(s,d);const _=[...A,...Fi(),...d.eventProcessors];return Jt(_,s,t).then(B=>(B&&Sb(B),typeof c=="number"&&c>0?Tb(B,c,a):B))}function kb(e,n){const{environment:t,release:o,dist:i,maxValueLength:r=250}=n;"environment"in e||(e.environment="environment"in n?t:jt),e.release===void 0&&o!==void 0&&(e.release=o),e.dist===void 0&&i!==void 0&&(e.dist=i),e.message&&(e.message=mn(e.message,r));const c=e.exception&&e.exception.values&&e.exception.values[0];c&&c.value&&(c.value=mn(c.value,r));const a=e.request;a&&a.url&&(a.url=mn(a.url,r))}const ss=new WeakMap;function wb(e,n){const t=P._sentryDebugIds;if(!t)return;let o;const i=ss.get(n);i?o=i:(o=new Map,ss.set(n,o));const r=Object.keys(t).reduce((c,a)=>{let s;const l=o.get(a);l?s=l:(s=n(a),o.set(a,s));for(let f=s.length-1;f>=0;f--){const A=s[f];if(A.filename){c[A.filename]=t[a];break}}return c},{});try{e.exception.values.forEach(c=>{c.stacktrace.frames.forEach(a=>{a.filename&&(a.debug_id=r[a.filename])})})}catch{}}function Sb(e){const n={};try{e.exception.values.forEach(o=>{o.stacktrace.frames.forEach(i=>{i.debug_id&&(i.abs_path?n[i.abs_path]=i.debug_id:i.filename&&(n[i.filename]=i.debug_id),delete i.debug_id)})})}catch{}if(Object.keys(n).length===0)return;e.debug_meta=e.debug_meta||{},e.debug_meta.images=e.debug_meta.images||[];const t=e.debug_meta.images;Object.keys(n).forEach(o=>{t.push({type:"sourcemap",code_file:o,debug_id:n[o]})})}function xb(e,n){n.length>0&&(e.sdk=e.sdk||{},e.sdk.integrations=[...e.sdk.integrations||[],...n])}function Tb(e,n,t){if(!e)return null;const o={...e,...e.breadcrumbs&&{breadcrumbs:e.breadcrumbs.map(i=>({...i,...i.data&&{data:me(i.data,n,t)}}))},...e.user&&{user:me(e.user,n,t)},...e.contexts&&{contexts:me(e.contexts,n,t)},...e.extra&&{extra:me(e.extra,n,t)}};return e.contexts&&e.contexts.trace&&o.contexts&&(o.contexts.trace=e.contexts.trace,e.contexts.trace.data&&(o.contexts.trace.data=me(e.contexts.trace.data,n,t))),e.spans&&(o.spans=e.spans.map(i=>{const r=yn(i).data;return r&&(i.data=me(r,n,t)),i})),o}function Ib(e,n){if(!n)return e;const t=e?e.clone():new xe;return t.update(n),t}function Ob(e){if(e)return Rb(e)?{captureContext:e}:Nb(e)?{captureContext:e}:e}function Rb(e){return e instanceof xe||typeof e=="function"}const Db=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function Nb(e){return Object.keys(e).some(n=>Db.includes(n))}var Pb,Gt,Mb,ls,Wt,be,Lb,Ub;function As(e,n){return Te().captureException(e,Ob(n))}function Tk(e,n){const t=typeof n=="string"?n:void 0,o=typeof n!="string"?{captureContext:n}:void 0;return be().captureMessage(e,t,o)}function fs(e,n){return Te().captureEvent(e,n)}function Ik(e){be().configureScope(e)}function en(e,n){Te().addBreadcrumb(e,n)}function Ok(e,n){be().setContext(e,n)}function Rk(e){be().setExtras(e)}function Dk(e,n){be().setExtra(e,n)}function Nk(e){be().setTags(e)}function Pk(e,n){be().setTag(e,n)}function Mk(e){be().setUser(e)}function us(...e){const n=Te();if(e.length===2){const[t,o]=e;return t?n.withScope(()=>(n.getStackTop().scope=t,o(t))):n.withScope(o)}return n.withScope(e[0])}function Lk(e){return Lb(()=>e(Ub()))}function Uk(e,n){return us(t=>(t.setSpan(e),n(t)))}function jk(e,n){return be().startTransaction({...e},n)}function Es(e,n){const t=Ie(),o=V();if(!o)Wt&&Gt.warn("Cannot capture check-in. No client defined.");else if(!o.captureCheckIn)Wt&&Gt.warn("Cannot capture check-in. Client does not support sending check-ins.");else return o.captureCheckIn(e,n,t);return Mb()}function $k(e,n,t){const o=Es({monitorSlug:e,status:"in_progress"},t),i=ls();function r(a){Es({monitorSlug:e,status:a,checkInId:o,duration:ls()-i})}let c;try{c=n()}catch(a){throw r("error"),a}return Pb(c)?Promise.resolve(c).then(()=>{r("ok")},()=>{r("error")}):r("ok"),c}async function Jk(e){const n=V();return n?n.flush(e):(Wt&&Gt.warn("Cannot flush events. No client defined."),Promise.resolve(!1))}async function qk(e){const n=V();return n?n.close(e):(Wt&&Gt.warn("Cannot flush events and disable SDK. No client defined."),Promise.resolve(!1))}function zk(){return be().lastEventId()}function V(){return Te().getClient()}function Hk(){return!!V()}function Ie(){return Te().getScope()}function ds(e){const n=V(),t=zt(),o=Ie(),{release:i,environment:r=jt}=n&&n.getOptions()||{},{userAgent:c}=P.navigator||{},a=za({release:i,environment:r,user:o.getUser()||t.getUser(),...c&&{userAgent:c},...e}),s=t.getSession();return s&&s.status==="ok"&&Ze(s,{status:"exited"}),ps(),t.setSession(a),o.setSession(a),a}function ps(){const e=zt(),n=Ie(),t=n.getSession()||e.getSession();t&&Ha(t),gs(),e.setSession(),n.setSession()}function gs(){const e=zt(),n=Ie(),t=V(),o=n.getSession()||e.getSession();o&&t&&t.captureSession&&t.captureSession(o)}function _s(e=!1){if(e){ps();return}gs()}var jb,$b,Jb;const hs=[];function qb(e){const n={};return e.forEach(t=>{const{name:o}=t,i=n[o];i&&!i.isDefaultInstance&&t.isDefaultInstance||(n[o]=t)}),Object.keys(n).map(t=>n[t])}function zb(e){const n=e.defaultIntegrations||[],t=e.integrations;n.forEach(c=>{c.isDefaultInstance=!0});let o;Array.isArray(t)?o=[...n,...t]:typeof t=="function"?o=Ja(t(n)):o=n;const i=qb(o),r=Gb(i,c=>c.name==="Debug");if(r!==-1){const[c]=i.splice(r,1);i.push(c)}return i}function Hb(e,n){const t={};return n.forEach(o=>{o&&bs(e,o,t)}),t}function ms(e,n){for(const t of n)t&&t.afterAllSetup&&t.afterAllSetup(e)}function bs(e,n,t){if(t[n.name]){L&&S.log(`Integration skipped because it was already installed: ${n.name}`);return}if(t[n.name]=n,hs.indexOf(n.name)===-1&&(n.setupOnce(eb,Te),hs.push(n.name)),n.setup&&typeof n.setup=="function"&&n.setup(e),e.on&&typeof n.preprocessEvent=="function"){const o=n.preprocessEvent.bind(n);e.on("preprocessEvent",(i,r)=>o(i,r,e))}if(e.addEventProcessor&&typeof n.processEvent=="function"){const o=n.processEvent.bind(n),i=Object.assign((r,c)=>o(r,c,e),{id:n.name});e.addEventProcessor(i)}L&&S.log(`Integration installed: ${n.name}`)}function Gk(e){const n=Jb();if(!n||!n.addIntegration){$b&&jb.warn(`Cannot add integration "${e.name}" because no SDK Client is available.`);return}n.addIntegration(e)}function Gb(e,n){for(let t=0;t<e.length;t++)if(n(e[t])===!0)return t;return-1}function Ae(e,n){return Object.assign(function(...o){return n(...o)},{id:e})}function Wk(e){return e}let ys;const Bs="FunctionToString",Fs=new WeakMap,vs=()=>({name:Bs,setupOnce(){ys=Function.prototype.toString;try{Function.prototype.toString=function(...e){const n=_i(this),t=Fs.has(V())&&n!==void 0?n:this;return ys.apply(t,e)}}catch{}},setup(e){Fs.set(e,!0)}}),Wb=Ae(Bs,vs),Kb=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/],Vb=[/^.*\/healthcheck$/,/^.*\/healthy$/,/^.*\/live$/,/^.*\/ready$/,/^.*\/heartbeat$/,/^.*\/health$/,/^.*\/healthz$/],Cs="InboundFilters",ks=(e={})=>({name:Cs,setupOnce(){},processEvent(n,t,o){const i=o.getOptions(),r=Xb(e,i);return Qb(n,r)?null:n}}),Yb=Ae(Cs,ks);function Xb(e={},n={}){return{allowUrls:[...e.allowUrls||[],...n.allowUrls||[]],denyUrls:[...e.denyUrls||[],...n.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...n.ignoreErrors||[],...e.disableErrorDefaults?[]:Kb],ignoreTransactions:[...e.ignoreTransactions||[],...n.ignoreTransactions||[],...e.disableTransactionDefaults?[]:Vb],ignoreInternal:e.ignoreInternal!==void 0?e.ignoreInternal:!0}}function Qb(e,n){return n.ignoreInternal&&iy(e)?(L&&S.warn(`Event dropped due to being internal Sentry Error.
Event: ${Ue(e)}`),!0):Zb(e,n.ignoreErrors)?(L&&S.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${Ue(e)}`),!0):ey(e,n.ignoreTransactions)?(L&&S.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${Ue(e)}`),!0):ny(e,n.denyUrls)?(L&&S.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${Ue(e)}.
Url: ${Kt(e)}`),!0):ty(e,n.allowUrls)?!1:(L&&S.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${Ue(e)}.
Url: ${Kt(e)}`),!0)}function Zb(e,n){return e.type||!n||!n.length?!1:oy(e).some(t=>Ut(t,n))}function ey(e,n){if(e.type!=="transaction"||!n||!n.length)return!1;const t=e.transaction;return t?Ut(t,n):!1}function ny(e,n){if(!n||!n.length)return!1;const t=Kt(e);return t?Ut(t,n):!1}function ty(e,n){if(!n||!n.length)return!0;const t=Kt(e);return t?Ut(t,n):!0}function oy(e){const n=[];e.message&&n.push(e.message);let t;try{t=e.exception.values[e.exception.values.length-1]}catch{}return t&&t.value&&(n.push(t.value),t.type&&n.push(`${t.type}: ${t.value}`)),L&&n.length===0&&S.error(`Could not extract message for event ${Ue(e)}`),n}function iy(e){try{return e.exception.values[0].type==="SentryError"}catch{}return!1}function ry(e=[]){for(let n=e.length-1;n>=0;n--){const t=e[n];if(t&&t.filename!=="<anonymous>"&&t.filename!=="[native code]")return t.filename||null}return null}function Kt(e){try{let n;try{n=e.exception.values[0].stacktrace.frames}catch{}return n?ry(n):null}catch{return L&&S.error(`Cannot extract url for event ${Ue(e)}`),null}}function ws(e,n,t=250,o,i,r,c){if(!r.exception||!r.exception.values||!c||!Qe(c.originalException,Error))return;const a=r.exception.values.length>0?r.exception.values[r.exception.values.length-1]:void 0;a&&(r.exception.values=cy(Ti(e,n,i,c.originalException,o,r.exception.values,a,0),t))}function Ti(e,n,t,o,i,r,c,a){if(r.length>=t+1)return r;let s=[...r];if(Qe(o[i],Error)){Ss(c,a);const l=e(n,o[i]),f=s.length;xs(l,i,f,a),s=Ti(e,n,t,o[i],i,[l,...s],l,f)}return Array.isArray(o.errors)&&o.errors.forEach((l,f)=>{if(Qe(l,Error)){Ss(c,a);const A=e(n,l),d=s.length;xs(A,`errors[${f}]`,d,a),s=Ti(e,n,t,l,i,[A,...s],A,d)}}),s}function Ss(e,n){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,...e.type==="AggregateError"&&{is_exception_group:!0},exception_id:n}}function xs(e,n,t,o){e.mechanism=e.mechanism||{type:"generic",handled:!0},e.mechanism={...e.mechanism,type:"chained",source:n,exception_id:t,parent_id:o}}function cy(e,n){return e.map(t=>(t.value&&(t.value=mn(t.value,n)),t))}var ay,sy,ly,Ay,fy,uy,Ey;function Ts(e,n){return e(n.stack||"",1)}function Is(e,n){const t={type:n.name||n.constructor.name,value:n.message},o=Ts(e,n);return o.length&&(t.stacktrace={frames:o}),t}function dy(e){if("name"in e&&typeof e.name=="string"){let n=`'${e.name}' captured as exception`;return"message"in e&&typeof e.message=="string"&&(n+=` with message '${e.message}'`),n}else return"message"in e&&typeof e.message=="string"?e.message:`Object captured as exception with keys: ${Ey(e)}`}function Yk(e,n,t,o){const i=typeof e=="function"?e().getClient():e;let r=t;const a=o&&o.data&&o.data.mechanism||{handled:!0,type:"generic"};let s;if(!ay(t)){if(sy(t)){const f=i&&i.getOptions().normalizeDepth;s={__serialized__:uy(t,f)};const A=dy(t);r=o&&o.syntheticException||new Error(A),r.message=A}else r=o&&o.syntheticException||new Error(t),r.message=t;a.synthetic=!0}const l={exception:{values:[Is(n,r)]}};return s&&(l.extra=s),Ay(l,void 0,void 0),fy(l,a),{...l,event_id:o&&o.event_id}}function Xk(e,n,t="info",o,i){const r={event_id:o&&o.event_id,level:t};if(i&&o&&o.syntheticException){const c=Ts(e,o.syntheticException);c.length&&(r.exception={values:[{value:n,stacktrace:{frames:c}}]})}if(ly(n)){const{__sentry_template_string__:c,__sentry_template_values__:a}=n;return r.logentry={message:c,params:a},r}return r.message=n,r}const py="cause",gy=5,Os="LinkedErrors",_y=(e={})=>{const n=e.limit||gy,t=e.key||py;return{name:Os,setupOnce(){},preprocessEvent(o,i,r){const c=r.getOptions();ws(Is,c.stackParser,c.maxValueLength,t,n,o,i)}}},hy=Ae(Os,_y),my=g,M=P;let Ii=0;function Rs(){return Ii>0}function by(){Ii++,setTimeout(()=>{Ii--})}function Fn(e,n={},t){if(typeof e!="function")return e;try{const i=e.__sentry_wrapped__;if(i)return i;if(_i(e))return e}catch{return e}const o=function(){const i=Array.prototype.slice.call(arguments);try{t&&typeof t=="function"&&t.apply(this,arguments);const r=i.map(c=>Fn(c,n));return e.apply(this,r)}catch(r){throw by(),us(c=>{c.addEventProcessor(a=>(n.mechanism&&(bi(a,void 0,void 0),zn(a,n.mechanism)),a.extra={...a.extra,arguments:i},a)),As(r)}),r}};try{for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}catch{}Pa(o,e),qn(e,"__sentry_wrapped__",o);try{Object.getOwnPropertyDescriptor(o,"name").configurable&&Object.defineProperty(o,"name",{get(){return e.name}})}catch{}return o}const vn={},Ds={};function nn(e,n){vn[e]=vn[e]||[],vn[e].push(n)}function Zk(){Object.keys(vn).forEach(e=>{vn[e]=void 0})}function tn(e,n){Ds[e]||(n(),Ds[e]=!0)}function Ee(e,n){const t=e&&vn[e];if(t)for(const o of t)try{o(n)}catch(i){Jn&&S.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${je(o)}
Error:`,i)}}let Vt=null;function yy(e){const n="error";nn(n,e),tn(n,By)}function By(){Vt=P.onerror,P.onerror=function(e,n,t,o,i){return Ee("error",{column:o,error:i,line:t,msg:e,url:n}),Vt&&!Vt.__SENTRY_LOADER__?Vt.apply(this,arguments):!1},P.onerror.__SENTRY_INSTRUMENTED__=!0}let Yt=null;function Fy(e){const n="unhandledrejection";nn(n,e),tn(n,vy)}function vy(){Yt=P.onunhandledrejection,P.onunhandledrejection=function(e){return Ee("unhandledrejection",e),Yt&&!Yt.__SENTRY_LOADER__?Yt.apply(this,arguments):!0},P.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const Oe=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;function Ns(e,n){const t=Ri(e,n),o={type:n&&n.name,value:Sy(n)};return t.length&&(o.stacktrace={frames:t}),o.type===void 0&&o.value===""&&(o.value="Unrecoverable error caught"),o}function Cy(e,n,t,o){const i=V(),r=i&&i.getOptions().normalizeDepth,c={exception:{values:[{type:Dt(n)?n.constructor.name:o?"UnhandledRejection":"Error",value:Iy(n,{isUnhandledRejection:o})}]},extra:{__serialized__:as(n,r)}};if(t){const a=Ri(e,t);a.length&&(c.exception.values[0].stacktrace={frames:a})}return c}function Oi(e,n){return{exception:{values:[Ns(e,n)]}}}function Ri(e,n){const t=n.stacktrace||n.stack||"",o=wy(n);try{return e(t,o)}catch{}return[]}const ky=/Minified React error #\d+;/i;function wy(e){if(e){if(typeof e.framesToPop=="number")return e.framesToPop;if(ky.test(e.message))return 1}return 0}function Sy(e){const n=e&&e.message;return n?n.error&&typeof n.error.message=="string"?n.error.message:n:"No error message"}function xy(e,n,t,o){const i=t&&t.syntheticException||void 0,r=Di(e,n,i,o);return zn(r),r.level="error",t&&t.event_id&&(r.event_id=t.event_id),bn(r)}function Ty(e,n,t="info",o,i){const r=o&&o.syntheticException||void 0,c=Ni(e,n,r,i);return c.level=t,o&&o.event_id&&(c.event_id=o.event_id),bn(c)}function Di(e,n,t,o,i){let r;if(ui(n)&&n.error)return Oi(e,n.error);if(Ia(n)||Pm(n)){const c=n;if("stack"in n)r=Oi(e,n);else{const a=c.name||(Ia(c)?"DOMError":"DOMException"),s=c.message?`${a}: ${c.message}`:a;r=Ni(e,s,t,o),bi(r,s)}return"code"in c&&(r.tags={...r.tags,"DOMException.code":`${c.code}`}),r}return Ta(n)?Oi(e,n):_n(n)||Dt(n)?(r=Cy(e,n,t,i),zn(r,{synthetic:!0}),r):(r=Ni(e,n,t,o),bi(r,`${n}`,void 0),zn(r,{synthetic:!0}),r)}function Ni(e,n,t,o){const i={};if(o&&t){const r=Ri(e,t);r.length&&(i.exception={values:[{value:n,stacktrace:{frames:r}}]})}if(Ei(n)){const{__sentry_template_string__:r,__sentry_template_values__:c}=n;return i.logentry={message:r,params:c},i}return i.message=n,i}function Iy(e,{isUnhandledRejection:n}){const t=Ym(e),o=n?"promise rejection":"exception";return ui(e)?`Event \`ErrorEvent\` captured as ${o} with message \`${e.message}\``:Dt(e)?`Event \`${Oy(e)}\` (type=${e.type}) captured as ${o}`:`Object captured as ${o} with keys: ${t}`}function Oy(e){try{const n=Object.getPrototypeOf(e);return n?n.constructor.name:void 0}catch{}}const Ps="GlobalHandlers",Ms=(e={})=>{const n={onerror:!0,onunhandledrejection:!0,...e};return{name:Ps,setupOnce(){Error.stackTraceLimit=50},setup(t){n.onerror&&(Dy(t),Us("onerror")),n.onunhandledrejection&&(Ny(t),Us("onunhandledrejection"))}}},Ry=Ae(Ps,Ms);function Dy(e){yy(n=>{const{stackParser:t,attachStacktrace:o}=js();if(V()!==e||Rs())return;const{msg:i,url:r,line:c,column:a,error:s}=n,l=s===void 0&&we(i)?Ly(i,r,c,a):Ls(Di(t,s||i,void 0,o,!1),r,c,a);l.level="error",fs(l,{originalException:s,mechanism:{handled:!1,type:"onerror"}})})}function Ny(e){Fy(n=>{const{stackParser:t,attachStacktrace:o}=js();if(V()!==e||Rs())return;const i=Py(n),r=di(i)?My(i):Di(t,i,void 0,o,!0);r.level="error",fs(r,{originalException:i,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function Py(e){if(di(e))return e;const n=e;try{if("reason"in n)return n.reason;if("detail"in n&&"reason"in n.detail)return n.detail.reason}catch{}return e}function My(e){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(e)}`}]}}}function Ly(e,n,t,o){const i=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let r=ui(e)?e.message:e,c="Error";const a=r.match(i);return a&&(c=a[1],r=a[2]),Ls({exception:{values:[{type:c,value:r}]}},n,t,o)}function Ls(e,n,t,o){const i=e.exception=e.exception||{},r=i.values=i.values||[],c=r[0]=r[0]||{},a=c.stacktrace=c.stacktrace||{},s=a.frames=a.frames||[],l=isNaN(parseInt(o,10))?void 0:o,f=isNaN(parseInt(t,10))?void 0:t,A=we(n)&&n.length>0?n:qm();return s.length===0&&s.push({colno:l,filename:A,function:"?",in_app:!0,lineno:f}),e}function Us(e){Oe&&S.log(`Global Handler attached: ${e}`)}function js(){const e=V();return e&&e.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const Uy=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],$s="TryCatch",Js=(e={})=>{const n={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e};return{name:$s,setupOnce(){n.setTimeout&&Z(M,"setTimeout",qs),n.setInterval&&Z(M,"setInterval",qs),n.requestAnimationFrame&&Z(M,"requestAnimationFrame",$y),n.XMLHttpRequest&&"XMLHttpRequest"in M&&Z(XMLHttpRequest.prototype,"send",Jy);const t=n.eventTarget;t&&(Array.isArray(t)?t:Uy).forEach(qy)}}},jy=Ae($s,Js);function qs(e){return function(...n){const t=n[0];return n[0]=Fn(t,{mechanism:{data:{function:je(e)},handled:!1,type:"instrument"}}),e.apply(this,n)}}function $y(e){return function(n){return e.apply(this,[Fn(n,{mechanism:{data:{function:"requestAnimationFrame",handler:je(e)},handled:!1,type:"instrument"}})])}}function Jy(e){return function(...n){const t=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(i=>{i in t&&typeof t[i]=="function"&&Z(t,i,function(r){const c={mechanism:{data:{function:i,handler:je(r)},handled:!1,type:"instrument"}},a=_i(r);return a&&(c.mechanism.data.handler=je(a)),Fn(r,c)})}),e.apply(this,n)}}function qy(e){const n=M,t=n[e]&&n[e].prototype;!t||!t.hasOwnProperty||!t.hasOwnProperty("addEventListener")||(Z(t,"addEventListener",function(o){return function(i,r,c){try{typeof r.handleEvent=="function"&&(r.handleEvent=Fn(r.handleEvent,{mechanism:{data:{function:"handleEvent",handler:je(r),target:e},handled:!1,type:"instrument"}}))}catch{}return o.apply(this,[i,Fn(r,{mechanism:{data:{function:"addEventListener",handler:je(r),target:e},handled:!1,type:"instrument"}}),c])}}),Z(t,"removeEventListener",function(o){return function(i,r,c){const a=r;try{const s=a&&a.__sentry_wrapped__;s&&o.call(this,i,s,c)}catch{}return o.call(this,i,a,c)}}))}function zy(e){const n="console";nn(n,e),tn(n,Hy)}function Hy(){"console"in P&&gi.forEach(function(e){e in P.console&&Z(P.console,e,function(n){return Mt[e]=n,function(...t){Ee("console",{args:t,level:e});const i=Mt[e];i&&i.apply(P.console,t)}})})}const Cn=P,Gy=1e3;let zs,Pi,Mi;function Wy(e){const n="dom";nn(n,e),tn(n,Ky)}function Ky(){if(!Cn.document)return;const e=Ee.bind(null,"dom"),n=Hs(e,!0);Cn.document.addEventListener("click",n,!1),Cn.document.addEventListener("keypress",n,!1),["EventTarget","Node"].forEach(t=>{const o=Cn[t]&&Cn[t].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(Z(o,"addEventListener",function(i){return function(r,c,a){if(r==="click"||r=="keypress")try{const s=this,l=s.__sentry_instrumentation_handlers__=s.__sentry_instrumentation_handlers__||{},f=l[r]=l[r]||{refCount:0};if(!f.handler){const A=Hs(e);f.handler=A,i.call(this,r,A,a)}f.refCount++}catch{}return i.call(this,r,c,a)}}),Z(o,"removeEventListener",function(i){return function(r,c,a){if(r==="click"||r=="keypress")try{const s=this,l=s.__sentry_instrumentation_handlers__||{},f=l[r];f&&(f.refCount--,f.refCount<=0&&(i.call(this,r,f.handler,a),f.handler=void 0,delete l[r]),Object.keys(l).length===0&&delete s.__sentry_instrumentation_handlers__)}catch{}return i.call(this,r,c,a)}}))})}function Vy(e){if(e.type!==Pi)return!1;try{if(!e.target||e.target._sentryId!==Mi)return!1}catch{}return!0}function Yy(e,n){return e!=="keypress"?!1:!n||!n.tagName?!0:!(n.tagName==="INPUT"||n.tagName==="TEXTAREA"||n.isContentEditable)}function Hs(e,n=!1){return t=>{if(!t||t._sentryCaptured)return;const o=Xy(t);if(Yy(t.type,o))return;qn(t,"_sentryCaptured",!0),o&&!o._sentryId&&qn(o,"_sentryId",se());const i=t.type==="keypress"?"input":t.type;Vy(t)||(e({event:t,name:i,global:n}),Pi=t.type,Mi=o?o._sentryId:void 0),clearTimeout(zs),zs=Cn.setTimeout(()=>{Mi=void 0,Pi=void 0},Gy)}}function Xy(e){try{return e.target}catch{return null}}const Qy=P,Wn="__sentry_xhr_v3__";function Zy(e){const n="xhr";nn(n,e),tn(n,eB)}function eB(){if(!Qy.XMLHttpRequest)return;const e=XMLHttpRequest.prototype;Z(e,"open",function(n){return function(...t){const o=Date.now(),i=we(t[0])?t[0].toUpperCase():void 0,r=nB(t[1]);if(!i||!r)return n.apply(this,t);this[Wn]={method:i,url:r,request_headers:{}},i==="POST"&&r.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const c=()=>{const a=this[Wn];if(a&&this.readyState===4){try{a.status_code=this.status}catch{}const s={args:[i,r],endTimestamp:Date.now(),startTimestamp:o,xhr:this};Ee("xhr",s)}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?Z(this,"onreadystatechange",function(a){return function(...s){return c(),a.apply(this,s)}}):this.addEventListener("readystatechange",c),Z(this,"setRequestHeader",function(a){return function(...s){const[l,f]=s,A=this[Wn];return A&&we(l)&&we(f)&&(A.request_headers[l.toLowerCase()]=f),a.apply(this,s)}}),n.apply(this,t)}}),Z(e,"send",function(n){return function(...t){const o=this[Wn];if(!o)return n.apply(this,t);t[0]!==void 0&&(o.body=t[0]);const i={args:[o.method,o.url],startTimestamp:Date.now(),xhr:this};return Ee("xhr",i),n.apply(this,t)}})}function nB(e){if(we(e))return e;try{return e.toString()}catch{}}const Xt=pi();function tw(){try{return new ErrorEvent(""),!0}catch{return!1}}function ow(){try{return new DOMError(""),!0}catch{return!1}}function iw(){try{return new DOMException(""),!0}catch{return!1}}function Li(){if(!("fetch"in Xt))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function Ui(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function tB(){if(typeof EdgeRuntime=="string")return!0;if(!Li())return!1;if(Ui(Xt.fetch))return!0;let e=!1;const n=Xt.document;if(n&&typeof n.createElement=="function")try{const t=n.createElement("iframe");t.hidden=!0,n.head.appendChild(t),t.contentWindow&&t.contentWindow.fetch&&(e=Ui(t.contentWindow.fetch)),n.head.removeChild(t)}catch(t){Jn&&S.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return e}function rw(){return"ReportingObserver"in Xt}function cw(){if(!Li())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function oB(e){const n="fetch";nn(n,e),tn(n,iB)}function iB(){tB()&&Z(P,"fetch",function(e){return function(...n){const{method:t,url:o}=rB(n),i={args:n,fetchData:{method:t,url:o},startTimestamp:Date.now()};return Ee("fetch",{...i}),e.apply(P,n).then(r=>{const c={...i,endTimestamp:Date.now(),response:r};return Ee("fetch",c),r},r=>{const c={...i,endTimestamp:Date.now(),error:r};throw Ee("fetch",c),r})}})}function ji(e,n){return!!e&&typeof e=="object"&&!!e[n]}function Gs(e){return typeof e=="string"?e:e?ji(e,"url")?e.url:e.toString?e.toString():"":""}function rB(e){if(e.length===0)return{method:"GET",url:""};if(e.length===2){const[t,o]=e;return{url:Gs(t),method:ji(o,"method")?String(o.method).toUpperCase():"GET"}}const n=e[0];return{url:Gs(n),method:ji(n,"method")?String(n.method).toUpperCase():"GET"}}const Qt=pi();function cB(){const e=Qt.chrome,n=e&&e.app&&e.app.runtime,t="history"in Qt&&!!Qt.history.pushState&&!!Qt.history.replaceState;return!n&&t}const Kn=P;let Zt;function Ws(e){const n="history";nn(n,e),tn(n,aB)}function aB(){if(!cB())return;const e=Kn.onpopstate;Kn.onpopstate=function(...t){const o=Kn.location.href,i=Zt;if(Zt=o,Ee("history",{from:i,to:o}),e)try{return e.apply(this,t)}catch{}};function n(t){return function(...o){const i=o.length>2?o[2]:void 0;if(i){const r=Zt,c=String(i);Zt=c,Ee("history",{from:r,to:c})}return t.apply(this,o)}}Z(Kn.history,"pushState",n),Z(Kn.history,"replaceState",n)}const sB=["fatal","error","warning","log","info","debug"];function aw(e){return Ks(e)}function Ks(e){return e==="warn"?"warning":sB.includes(e)?e:"log"}function $i(e){if(!e)return{};const n=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!n)return{};const t=n[6]||"",o=n[8]||"";return{host:n[4],path:n[5],protocol:n[2],search:t,hash:o,relative:n[5]+t+o}}function sw(e){return e.split(/[\?#]/,1)[0]}function lw(e){return e.split(/\\?\//).filter(n=>n.length>0&&n!==",").length}function Aw(e){const{protocol:n,host:t,path:o}=e,i=t&&t.replace(/^.*@/,"[filtered]:[filtered]@").replace(/(:80)$/,"").replace(/(:443)$/,"")||"";return`${n?`${n}://`:""}${i}${o}`}const eo=1024,Vs="Breadcrumbs",Ys=(e={})=>{const n={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e};return{name:Vs,setupOnce(){},setup(t){n.console&&zy(uB(t)),n.dom&&Wy(fB(t,n.dom)),n.xhr&&Zy(EB(t)),n.fetch&&oB(dB(t)),n.history&&Ws(pB(t)),n.sentry&&t.on&&t.on("beforeSendEvent",AB(t))}}},lB=Ae(Vs,Ys);function AB(e){return function(t){V()===e&&en({category:`sentry.${t.type==="transaction"?"transaction":"event"}`,event_id:t.event_id,level:t.level,message:Ue(t)},{event:t})}}function fB(e,n){return function(o){if(V()!==e)return;let i,r,c=typeof n=="object"?n.serializeAttribute:void 0,a=typeof n=="object"&&typeof n.maxStringLength=="number"?n.maxStringLength:void 0;a&&a>eo&&(Oe&&S.warn(`\`dom.maxStringLength\` cannot exceed ${eo}, but a value of ${a} was configured. Sentry will use ${eo} instead.`),a=eo),typeof c=="string"&&(c=[c]);try{const l=o.event,f=gB(l)?l.target:l;i=Da(f,{keyAttrs:c,maxStringLength:a}),r=zm(f)}catch{i="<unknown>"}if(i.length===0)return;const s={category:`ui.${o.name}`,message:i};r&&(s.data={"ui.component_name":r}),en(s,{event:o.event,name:o.name,global:o.global})}}function uB(e){return function(t){if(V()!==e)return;const o={category:"console",data:{arguments:t.args,logger:"console"},level:Ks(t.level),message:Na(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)o.message=`Assertion failed: ${Na(t.args.slice(1)," ")||"console.assert"}`,o.data.arguments=t.args.slice(1);else return;en(o,{input:t.args,level:t.level})}}function EB(e){return function(t){if(V()!==e)return;const{startTimestamp:o,endTimestamp:i}=t,r=t.xhr[Wn];if(!o||!i||!r)return;const{method:c,url:a,status_code:s,body:l}=r,f={method:c,url:a,status_code:s},A={xhr:t.xhr,input:l,startTimestamp:o,endTimestamp:i};en({category:"xhr",data:f,type:"http"},A)}}function dB(e){return function(t){if(V()!==e)return;const{startTimestamp:o,endTimestamp:i}=t;if(i&&!(t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"))if(t.error){const r=t.fetchData,c={data:t.error,input:t.args,startTimestamp:o,endTimestamp:i};en({category:"fetch",data:r,level:"error",type:"http"},c)}else{const r=t.response,c={...t.fetchData,status_code:r&&r.status},a={input:t.args,response:r,startTimestamp:o,endTimestamp:i};en({category:"fetch",data:c,type:"http"},a)}}}function pB(e){return function(t){if(V()!==e)return;let o=t.from,i=t.to;const r=$i(M.location.href);let c=o?$i(o):void 0;const a=$i(i);(!c||!c.path)&&(c=r),r.protocol===a.protocol&&r.host===a.host&&(i=a.relative),r.protocol===c.protocol&&r.host===c.host&&(o=c.relative),en({category:"navigation",data:{from:o,to:i}})}}function gB(e){return!!e&&!!e.target}const _B="cause",hB=5,Xs="LinkedErrors",Qs=(e={})=>{const n=e.limit||hB,t=e.key||_B;return{name:Xs,setupOnce(){},preprocessEvent(o,i,r){const c=r.getOptions();ws(Ns,c.stackParser,c.maxValueLength,t,n,o,i)}}},mB=Ae(Xs,Qs),Zs="HttpContext",el=()=>({name:Zs,setupOnce(){},preprocessEvent(e){if(!M.navigator&&!M.location&&!M.document)return;const n=e.request&&e.request.url||M.location&&M.location.href,{referrer:t}=M.document||{},{userAgent:o}=M.navigator||{},i={...e.request&&e.request.headers,...t&&{Referer:t},...o&&{"User-Agent":o}},r={...e.request,...n&&{url:n},headers:i};e.request=r}}),bB=Ae(Zs,el),nl="Dedupe",tl=()=>{let e;return{name:nl,setupOnce(){},processEvent(n){if(n.type)return n;try{if(BB(n,e))return Oe&&S.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return e=n}}},yB=Ae(nl,tl);function BB(e,n){return n?!!(FB(e,n)||vB(e,n)):!1}function FB(e,n){const t=e.message,o=n.message;return!(!t&&!o||t&&!o||!t&&o||t!==o||!il(e,n)||!ol(e,n))}function vB(e,n){const t=rl(n),o=rl(e);return!(!t||!o||t.type!==o.type||t.value!==o.value||!il(e,n)||!ol(e,n))}function ol(e,n){let t=cl(e),o=cl(n);if(!t&&!o)return!0;if(t&&!o||!t&&o||(t=t,o=o,o.length!==t.length))return!1;for(let i=0;i<o.length;i++){const r=o[i],c=t[i];if(r.filename!==c.filename||r.lineno!==c.lineno||r.colno!==c.colno||r.function!==c.function)return!1}return!0}function il(e,n){let t=e.fingerprint,o=n.fingerprint;if(!t&&!o)return!0;if(t&&!o||!t&&o)return!1;t=t,o=o;try{return t.join("")===o.join("")}catch{return!1}}function rl(e){return e.exception&&e.exception.values&&e.exception.values[0]}function cl(e){const n=e.exception;if(n)try{return n.values[0].stacktrace.frames}catch{return}}let al={};M.Sentry&&M.Sentry.Integrations&&(al=M.Sentry.Integrations);const CB={...al,...my,...E},kB="sentry-ipc";var $e;(function(e){e.RENDERER_START="sentry-electron.renderer-start",e.EVENT="sentry-electron.event",e.SCOPE="sentry-electron.scope",e.ENVELOPE="sentry-electron.envelope",e.STATUS="sentry-electron.status",e.ADD_METRIC="sentry-electron.add-metric"})($e||($e={}));const wB="sentry-electron-renderer-id";function kn(e){return`${kB}://${e}/sentry_key`}function SB(){if(window.__SENTRY_IPC__)return window.__SENTRY_IPC__;{S.log("IPC was not configured in preload script, falling back to custom protocol and fetch");const e=window.__SENTRY_RENDERER_ID__=se(),n={[wB]:e};return{sendRendererStart:()=>{fetch(kn($e.RENDERER_START),{method:"POST",body:"",headers:n}).catch(()=>{console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`)})},sendScope:t=>{fetch(kn($e.SCOPE),{method:"POST",body:t,headers:n}).catch(()=>{})},sendEvent:t=>{fetch(kn($e.EVENT),{method:"POST",body:t,headers:n}).catch(()=>{})},sendEnvelope:t=>{fetch(kn($e.ENVELOPE),{method:"POST",body:t,headers:n}).catch(()=>{})},sendStatus:t=>{fetch(kn($e.STATUS),{method:"POST",body:JSON.stringify({status:t}),headers:n}).catch(()=>{})},sendAddMetric:t=>{fetch(kn($e.ADD_METRIC),{method:"POST",body:JSON.stringify(t),headers:n}).catch(()=>{})}}}}let no;function Vn(){return no||(no=SB(),no.sendRendererStart()),no}const sl="ScopeToMain",ll=()=>({name:sl,setupOnce(){},setup(){const e=Ie();if(e){const n=Vn();e.addScopeListener(t=>{n.sendScope(JSON.stringify(me(t.getScopeData(),20,2e3))),e.clearBreadcrumbs(),e.clearAttachments()})}}}),xB=Ae(sl,ll);class to{constructor(){this.name=to.id}setupOnce(n){const t=Vn();n(o=>(o.breadcrumbs=o.breadcrumbs||[],o.environment=void 0,t.sendEvent(JSON.stringify(me(o,20,2e3))),null))}}to.id="EventToMain";const Al="c",fl="g",Ji="s",ul="d",TB=5e3,pw=1e4,gw=1e4;function IB(e,n,t,o){const i=Object.entries(ue(o)).sort((r,c)=>r[0].localeCompare(c[0]));return`${e}${n}${t}${i}`}function OB(e){let n=0;for(let t=0;t<e.length;t++){const o=e.charCodeAt(t);n=(n<<5)-n+o,n&=n}return n>>>0}function RB(e){let n="";for(const t of e){const o=Object.entries(t.tags),i=o.length>0?`|#${o.map(([r,c])=>`${r}:${c}`).join(",")}`:"";n+=`${t.name}@${t.unit}:${t.metric}|${t.metricType}${i}|T${t.timestamp}
`}return n}function DB(e){return e.replace(/[^\w]+/gi,"_")}function NB(e){return e.replace(/[^\w\-.]+/gi,"_")}function PB(e){return e.replace(/[^\w\-./]+/gi,"")}const MB=[[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\\","\\\\"],["|","\\u{7c}"],[",","\\u{2c}"]];function LB(e){for(const[n,t]of MB)if(e===n)return t;return e}function UB(e){return[...e].reduce((n,t)=>n+LB(t),"")}function jB(e){const n={};for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)){const o=PB(t);n[o]=UB(String(e[t]))}return n}class $B{constructor(n){this._value=n}get weight(){return 1}add(n){this._value+=n}toString(){return`${this._value}`}}class JB{constructor(n){this._last=n,this._min=n,this._max=n,this._sum=n,this._count=1}get weight(){return 5}add(n){this._last=n,n<this._min&&(this._min=n),n>this._max&&(this._max=n),this._sum+=n,this._count++}toString(){return`${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`}}class qB{constructor(n){this._value=[n]}get weight(){return this._value.length}add(n){this._value.push(n)}toString(){return this._value.join(":")}}class zB{constructor(n){this.first=n,this._value=new Set([n])}get weight(){return this._value.size}add(n){this._value.add(n)}toString(){return Array.from(this._value).map(n=>typeof n=="string"?OB(n):n).join(":")}}const HB={[Al]:$B,[fl]:JB,[ul]:qB,[Ji]:zB};var GB,WB,El,KB,VB,oo,qi,YB,dl,XB,QB,ZB,zi,pl,Hi,gl;function _w(e,n,t=()=>{},o=()=>{}){const i=oo(),r=zi(),c=r.getSpan(),a=ro(e),s=io(i,{parentSpan:c,spanContext:a,forceTransaction:!1,scope:r});return r.setSpan(s),Hi(()=>n(s),l=>{s&&s.setStatus("internal_error"),t(l,s)},()=>{s&&s.end(),r.setSpan(c),o()})}function hw(e,n){const t=ro(e);return qi(()=>pl(e.scope,o=>{const i=oo(),r=o.getSpan(),a=e.onlyIfParent&&!r?void 0:io(i,{parentSpan:r,spanContext:t,forceTransaction:e.forceTransaction,scope:o});return Hi(()=>n(a),()=>{if(a){const{status:s}=dl(a);(!s||s==="ok")&&a.setStatus("internal_error")}},()=>a&&a.end())}))}const mw=null;function bw(e,n){const t=ro(e);return qi(()=>pl(e.scope,o=>{const i=oo(),r=o.getSpan(),a=e.onlyIfParent&&!r?void 0:io(i,{parentSpan:r,spanContext:t,forceTransaction:e.forceTransaction,scope:o});function s(){a&&a.end()}return Hi(()=>n(a,s),()=>{if(a&&a.isRecording()){const{status:l}=dl(a);(!l||l==="ok")&&a.setStatus("internal_error")}})}))}function yw(e){if(!gl())return;const n=ro(e),t=oo(),o=e.scope?e.scope.getSpan():_l();if(e.onlyIfParent&&!o)return;const c=(e.scope||zi()).clone();return io(t,{parentSpan:o,spanContext:n,forceTransaction:e.forceTransaction,scope:c})}function _l(){return Ie().getSpan()}const Bw=({sentryTrace:e,baggage:n},t)=>{const o=zi(),{traceparentData:i,dynamicSamplingContext:r,propagationContext:c}=KB(e,n);o.setPropagationContext(c),VB&&i&&GB.log(`[Tracing] Continuing trace ${i.traceId}.`);const a={...i,metadata:WB({dynamicSamplingContext:r})};return t?qi(()=>t(a)):a};function io(e,{parentSpan:n,spanContext:t,forceTransaction:o,scope:i}){if(!gl())return;const r=YB();let c;if(n&&!o)c=n.startChild(t);else if(n){const a=ZB(n),{traceId:s,spanId:l}=n.spanContext(),f=XB(n);c=e.startTransaction({traceId:s,parentSpanId:l,parentSampled:f,...t,metadata:{dynamicSamplingContext:a,...t.metadata}})}else{const{traceId:a,dsc:s,parentSpanId:l,sampled:f}={...r.getPropagationContext(),...i.getPropagationContext()};c=e.startTransaction({traceId:a,parentSpanId:l,parentSampled:f,...t,metadata:{dynamicSamplingContext:s,...t.metadata}})}return i.setSpan(c),eF(c,i,r),c}function ro(e){if(e.startTime){const n={...e};return n.startTimestamp=QB(e.startTime),delete n.startTime,n}return e}const hl="_sentryScope",ml="_sentryIsolationScope";function eF(e,n,t){e&&(El(e,ml,t),El(e,hl,n))}function Fw(e){return{scope:e[hl],isolationScope:e[ml]}}var nF;let Yn;function bl(e){return Yn?Yn.get(e):void 0}function vw(e){const n=bl(e);if(!n)return;const t={};for(const[,[o,i]]of n)t[o]||(t[o]=[]),t[o].push(nF(i));return t}function tF(e,n,t,o,i,r){const c=_l();if(c){const a=bl(c)||new Map,s=`${e}:${n}@${o}`,l=a.get(r);if(l){const[,f]=l;a.set(r,[s,{min:Math.min(f.min,t),max:Math.max(f.max,t),count:f.count+=1,sum:f.sum+=t,tags:f.tags}])}else a.set(r,[s,{min:t,max:t,count:1,sum:t,tags:i}]);Yn||(Yn=new WeakMap),Yn.set(c,a)}}class oF{constructor(n){this._client=n,this._buckets=new Map,this._interval=setInterval(()=>this.flush(),TB)}add(n,t,o,i="none",r={},c=yi()){const a=Math.floor(c),s=NB(t),l=jB(r),f=DB(i),A=IB(n,s,f,l);let d=this._buckets.get(A);const u=d&&n===Ji?d.metric.weight:0;d?(d.metric.add(o),d.timestamp<a&&(d.timestamp=a)):(d={metric:new HB[n](o),timestamp:a,metricType:n,name:s,unit:f,tags:l},this._buckets.set(A,d));const _=typeof o=="string"?d.metric.weight-u:o;tF(n,s,_,f,r,A)}flush(){if(this._buckets.size!==0){if(this._client.captureAggregateMetrics){const n=Array.from(this._buckets).map(([,t])=>t);this._client.captureAggregateMetrics(n)}this._buckets.clear()}}close(){clearInterval(this._interval),this.flush()}}const yl="MetricsAggregator",Bl=()=>({name:yl,setupOnce(){},setup(e){e.metricsAggregator=new oF(e)}}),iF=Ae(yl,Bl);function co(e,n,t,o={}){const i=V(),r=Ie();if(i){if(!i.metricsAggregator){L&&S.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");return}const{unit:c,tags:a,timestamp:s}=o,{release:l,environment:f}=i.getOptions(),A=r.getTransaction(),d={};l&&(d.release=l),f&&(d.environment=f),A&&(d.transaction=yn(A).description||""),L&&S.log(`Adding value of ${t} to ${e} metric ${n}`),i.metricsAggregator.add(e,n,t,c,{...d,...a},s)}}function rF(e,n=1,t){co(Al,e,n,t)}function cF(e,n,t){co(ul,e,n,t)}function aF(e,n,t){co(Ji,e,n,t)}function sF(e,n,t){co(fl,e,n,t)}const lF={increment:rF,distribution:cF,set:aF,gauge:sF,MetricsAggregator:iF,metricsAggregatorIntegration:Bl};class AF{constructor(){this._ipc=Vn()}add(n,t,o,i,r,c){this._ipc.sendAddMetric({metricType:n,name:t,value:o,unit:i,tags:r,timestamp:c})}flush(){}close(){}toString(){return""}}const Fl="MetricsAggregator",vl=()=>({name:Fl,setupOnce(){},setup(e){e.metricsAggregator=new AF}}),fF=Ae(Fl,vl);function uF(e,n){n.debug===!0&&(L?S.enable():Lt(()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})),Ie().update(n.initialScope);const o=new e(n);EF(o),dF(o)}function EF(e){const t=Te().getStackTop();t.client=e,t.scope.setClient(e)}function dF(e){e.init?e.init():e.setupIntegrations&&e.setupIntegrations()}const pF=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function gF(e){return e==="http"||e==="https"}function Xn(e,n=!1){const{host:t,path:o,pass:i,port:r,projectId:c,protocol:a,publicKey:s}=e;return`${a}://${s}${n&&i?`:${i}`:""}@${t}${r?`:${r}`:""}/${o&&`${o}/`}${c}`}function _F(e){const n=pF.exec(e);if(!n){Lt(()=>{console.error(`Invalid Sentry Dsn: ${e}`)});return}const[t,o,i="",r,c="",a]=n.slice(1);let s="",l=a;const f=l.split("/");if(f.length>1&&(s=f.slice(0,-1).join("/"),l=f.pop()),l){const A=l.match(/^\d+/);A&&(l=A[0])}return Cl({host:r,pass:i,path:s,projectId:l,port:c,protocol:t,publicKey:o})}function Cl(e){return{protocol:e.protocol,publicKey:e.publicKey||"",pass:e.pass||"",host:e.host,port:e.port||"",path:e.path||"",projectId:e.projectId}}function hF(e){if(!Jn)return!0;const{port:n,projectId:t,protocol:o}=e;return["protocol","publicKey","host","projectId"].find(c=>e[c]?!1:(S.error(`Invalid Sentry Dsn: ${c} missing`),!0))?!1:t.match(/^\d+$/)?gF(o)?n&&isNaN(parseInt(n,10))?(S.error(`Invalid Sentry Dsn: Invalid port ${n}`),!1):!0:(S.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),!1):(S.error(`Invalid Sentry Dsn: Invalid projectId ${t}`),!1)}function mF(e){const n=typeof e=="string"?_F(e):Cl(e);if(!(!n||!hF(n)))return n}function wn(e,n=[]){return[e,n]}function bF(e,n){const[t,o]=e;return[t,[...o,n]]}function Gi(e,n){const t=e[1];for(const o of t){const i=o[0].type;if(n(o,i))return!0}return!1}function kw(e,n){return Gi(e,(t,o)=>n.includes(o))}function Wi(e,n){return(n||new TextEncoder).encode(e)}function yF(e,n){const[t,o]=e;let i=JSON.stringify(t);function r(c){typeof i=="string"?i=typeof c=="string"?i+c:[Wi(i,n),c]:i.push(typeof c=="string"?Wi(c,n):c)}for(const c of o){const[a,s]=c;if(r(`
${JSON.stringify(a)}
`),typeof s=="string"||s instanceof Uint8Array)r(s);else{let l;try{l=JSON.stringify(s)}catch{l=JSON.stringify(me(s))}r(l)}}return typeof i=="string"?i:BF(i)}function BF(e){const n=e.reduce((i,r)=>i+r.length,0),t=new Uint8Array(n);let o=0;for(const i of e)t.set(i,o),o+=i.length;return t}function ww(e,n,t){let o=typeof e=="string"?n.encode(e):e;function i(s){const l=o.subarray(0,s);return o=o.subarray(s+1),l}function r(){let s=o.indexOf(10);return s<0&&(s=o.length),JSON.parse(t.decode(i(s)))}const c=r(),a=[];for(;o.length;){const s=r(),l=typeof s.length=="number"?s.length:void 0;a.push([s,l?i(l):r()])}return[c,a]}function FF(e,n){const t=typeof e.data=="string"?Wi(e.data,n):e.data;return[ue({type:"attachment",length:t.length,filename:e.filename,content_type:e.contentType,attachment_type:e.attachmentType}),t]}const vF={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket"};function kl(e){return vF[e]}function wl(e){if(!e||!e.sdk)return;const{name:n,version:t}=e.sdk;return{name:n,version:t}}function CF(e,n,t,o){const i=e.sdkProcessingMetadata&&e.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:e.event_id,sent_at:new Date().toISOString(),...n&&{sdk:n},...!!t&&o&&{dsn:Xn(o)},...i&&{trace:ue({...i})}}}class ye extends Error{constructor(n,t="warn"){super(n),this.message=n,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}var kF,wF;const SF="7";function Sl(e){const n=e.protocol?`${e.protocol}:`:"",t=e.port?`:${e.port}`:"";return`${n}//${e.host}${t}${e.path?`/${e.path}`:""}/api/`}function xF(e){return`${Sl(e)}${e.projectId}/envelope/`}function TF(e,n){return Vm({sentry_key:e.publicKey,sentry_version:SF,...n&&{sentry_client:`${n.name}/${n.version}`}})}function IF(e,n={}){const t=typeof n=="string"?n:n.tunnel,o=typeof n=="string"||!n._metadata?void 0:n._metadata.sdk;return t||`${xF(e)}?${TF(e,o)}`}function Sw(e,n){const t=kF(e);if(!t)return"";const o=`${Sl(t)}embed/error-page/`;let i=`dsn=${wF(t)}`;for(const r in n)if(r!=="dsn"&&r!=="onClose")if(r==="user"){const c=n.user;if(!c)continue;c.name&&(i+=`&name=${encodeURIComponent(c.name)}`),c.email&&(i+=`&email=${encodeURIComponent(c.email)}`)}else i+=`&${encodeURIComponent(r)}=${encodeURIComponent(n[r])}`;return`${o}?${i}`}function OF(e,n){return n&&(e.sdk=e.sdk||{},e.sdk.name=e.sdk.name||n.name,e.sdk.version=e.sdk.version||n.version,e.sdk.integrations=[...e.sdk.integrations||[],...n.integrations||[]],e.sdk.packages=[...e.sdk.packages||[],...n.packages||[]]),e}function RF(e,n,t,o){const i=wl(t),r={sent_at:new Date().toISOString(),...i&&{sdk:i},...!!o&&n&&{dsn:Xn(n)}},c="aggregates"in e?[{type:"sessions"},e]:[{type:"session"},e.toJSON()];return wn(r,[c])}function DF(e,n,t,o){const i=wl(t),r=e.type&&e.type!=="replay_event"?e.type:"event";OF(e,t&&t.sdk);const c=CF(e,i,o,n);return delete e.sdkProcessingMetadata,wn(c,[[{type:r},e]])}function NF(e,n,t,o){const i={sent_at:new Date().toISOString()};t&&t.sdk&&(i.sdk={name:t.sdk.name,version:t.sdk.version}),o&&n&&(i.dsn=Xn(n));const r=PF(e);return wn(i,[r])}function PF(e){const n=RB(e);return[{type:"statsd",length:n.length},n]}var MF;const xl="Not capturing exception because it's already been captured.";class LF{constructor(n){if(this._options=n,this._integrations={},this._integrationsInitialized=!1,this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],n.dsn?this._dsn=mF(n.dsn):L&&S.warn("No DSN provided, client will not send events."),this._dsn){const t=IF(this._dsn,n);this._transport=n.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...n.transportOptions,url:t})}}captureException(n,t,o){if($a(n)){L&&S.log(xl);return}let i=t&&t.event_id;return this._process(this.eventFromException(n,t).then(r=>this._captureEvent(r,t,o)).then(r=>{i=r})),i}captureMessage(n,t,o,i){let r=o&&o.event_id;const c=Ei(n)?n:String(n),a=di(n)?this.eventFromMessage(c,t,o):this.eventFromException(n,o);return this._process(a.then(s=>this._captureEvent(s,o,i)).then(s=>{r=s})),r}captureEvent(n,t,o){if(t&&t.originalException&&$a(t.originalException)){L&&S.log(xl);return}let i=t&&t.event_id;const c=(n.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(n,t,c||o).then(a=>{i=a})),i}captureSession(n){typeof n.release!="string"?L&&S.warn("Discarded session because of missing or non-string release"):(this.sendSession(n),Ze(n,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(n){const t=this._transport;return t?(this.metricsAggregator&&this.metricsAggregator.flush(),this._isClientDoneProcessing(n).then(o=>t.flush(n).then(i=>o&&i))):bn(!0)}close(n){return this.flush(n).then(t=>(this.getOptions().enabled=!1,this.metricsAggregator&&this.metricsAggregator.close(),t))}getEventProcessors(){return this._eventProcessors}addEventProcessor(n){this._eventProcessors.push(n)}setupIntegrations(n){(n&&!this._integrationsInitialized||this._isEnabled()&&!this._integrationsInitialized)&&this._setupIntegrations()}init(){this._isEnabled()&&this._setupIntegrations()}getIntegrationById(n){return this.getIntegrationByName(n)}getIntegrationByName(n){return this._integrations[n]}getIntegration(n){try{return this._integrations[n.id]||null}catch{return L&&S.warn(`Cannot retrieve integration ${n.id} from the current Client`),null}}addIntegration(n){const t=this._integrations[n.name];bs(this,n,this._integrations),t||ms(this,[n])}sendEvent(n,t={}){this.emit("beforeSendEvent",n,t);let o=DF(n,this._dsn,this._options._metadata,this._options.tunnel);for(const r of t.attachments||[])o=bF(o,FF(r,this._options.transportOptions&&this._options.transportOptions.textEncoder));const i=this._sendEnvelope(o);i&&i.then(r=>this.emit("afterSendEvent",n,r),null)}sendSession(n){const t=RF(n,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}recordDroppedEvent(n,t,o){if(this._options.sendClientReports){const i=`${n}:${t}`;L&&S.log(`Adding outcome: "${i}"`),this._outcomes[i]=this._outcomes[i]+1||1}}captureAggregateMetrics(n){L&&S.log(`Flushing aggregated metrics, number of metrics: ${n.length}`);const t=NF(n,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}on(n,t){this._hooks[n]||(this._hooks[n]=[]),this._hooks[n].push(t)}emit(n,...t){this._hooks[n]&&this._hooks[n].forEach(o=>o(...t))}_setupIntegrations(){const{integrations:n}=this._options;this._integrations=Hb(this,n),ms(this,n),this._integrationsInitialized=!0}_updateSessionFromEvent(n,t){let o=!1,i=!1;const r=t.exception&&t.exception.values;if(r){i=!0;for(const s of r){const l=s.mechanism;if(l&&l.handled===!1){o=!0;break}}}const c=n.status==="ok";(c&&n.errors===0||c&&o)&&(Ze(n,{...o&&{status:"crashed"},errors:n.errors||Number(i||o)}),this.captureSession(n))}_isClientDoneProcessing(n){return new le(t=>{let o=0;const i=1,r=setInterval(()=>{this._numProcessing==0?(clearInterval(r),t(!0)):(o+=i,n&&o>=n&&(clearInterval(r),t(!1)))},i)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(n,t,o,i=zt()){const r=this.getOptions(),c=Object.keys(this._integrations);return!t.integrations&&c.length>0&&(t.integrations=c),this.emit("preprocessEvent",n,t),Cb(r,n,t,o,this,i).then(a=>{if(a===null)return a;const s={...i.getPropagationContext(),...o?o.getPropagationContext():void 0};if(!(a.contexts&&a.contexts.trace)&&s){const{traceId:f,spanId:A,parentSpanId:d,dsc:u}=s;a.contexts={trace:{trace_id:f,span_id:A,parent_span_id:d},...a.contexts};const _=u||Va(f,this,o);a.sdkProcessingMetadata={dynamicSamplingContext:_,...a.sdkProcessingMetadata}}return a})}_captureEvent(n,t={},o){return this._processEvent(n,t,o).then(i=>i.event_id,i=>{if(L){const r=i;r.logLevel==="log"?S.log(r.message):S.warn(r)}})}_processEvent(n,t,o){const i=this.getOptions(),{sampleRate:r}=i,c=Il(n),a=Tl(n),s=n.type||"error",l=`before send for type \`${s}\``;if(a&&typeof r=="number"&&Math.random()>r)return this.recordDroppedEvent("sample_rate","error",n),Bi(new ye(`Discarding event because it's not included in the random sample (sampling rate = ${r})`,"log"));const f=s==="replay_event"?"replay":s,d=(n.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(n,t,o,d).then(u=>{if(u===null)throw this.recordDroppedEvent("event_processor",f,n),new ye("An event processor returned `null`, will not send event.","log");if(t.data&&t.data.__sentry__===!0)return u;const k=jF(i,u,t);return UF(k,l)}).then(u=>{if(u===null)throw this.recordDroppedEvent("before_send",f,n),new ye(`${l} returned \`null\`, will not send event.`,"log");const _=o&&o.getSession();!c&&_&&this._updateSessionFromEvent(_,u);const k=u.transaction_info;if(c&&k&&u.transaction!==n.transaction){const B="custom";u.transaction_info={...k,source:B}}return this.sendEvent(u,t),u}).then(null,u=>{throw u instanceof ye?u:(this.captureException(u,{data:{__sentry__:!0},originalException:u}),new ye(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${u}`))})}_process(n){this._numProcessing++,n.then(t=>(this._numProcessing--,t),t=>(this._numProcessing--,t))}_sendEnvelope(n){if(this.emit("beforeEnvelope",n),this._isEnabled()&&this._transport)return this._transport.send(n).then(null,t=>{L&&S.error("Error while sending event:",t)});L&&S.error("Transport disabled")}_clearOutcomes(){const n=this._outcomes;return this._outcomes={},Object.keys(n).map(t=>{const[o,i]=t.split(":");return{reason:o,category:i,quantity:n[t]}})}}function UF(e,n){const t=`${n} must return \`null\` or a valid event.`;if(Nt(e))return e.then(o=>{if(!_n(o)&&o!==null)throw new ye(t);return o},o=>{throw new ye(`${n} rejected with ${o}`)});if(!_n(e)&&e!==null)throw new ye(t);return e}function jF(e,n,t){const{beforeSend:o,beforeSendTransaction:i}=e;return Tl(n)&&o?o(n,t):Il(n)&&i?i(n,t):n}function Tl(e){return e.type===void 0}function Il(e){return e.type==="transaction"}function xw(e){const n=MF();!n||!n.addEventProcessor||n.addEventProcessor(e)}function $F(e,n,t=[n],o="npm"){const i=e._metadata||{};i.sdk||(i.sdk={name:`sentry.javascript.${n}`,packages:t.map(r=>({name:`${o}:@sentry/${r}`,version:vi})),version:vi}),e._metadata=i}function Tw(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function JF(){return"npm"}function qF(e,n,t){const o=[{type:"client_report"},{timestamp:t||Hn(),discarded_events:e}];return wn(n?{dsn:n}:{},[o])}function zF(e,{metadata:n,tunnel:t,dsn:o}){const i={event_id:e.event_id,sent_at:new Date().toISOString(),...n&&n.sdk&&{sdk:{name:n.sdk.name,version:n.sdk.version}},...!!t&&!!o&&{dsn:Xn(o)}},r=HF(e);return wn(i,[r])}function HF(e){return[{type:"user_report"},e]}class GF extends LF{constructor(n){const t=M.SENTRY_SDK_SOURCE||JF();$F(n,"browser",["browser"],t),super(n),n.sendClientReports&&M.document&&M.document.addEventListener("visibilitychange",()=>{M.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(n,t){return xy(this._options.stackParser,n,t,this._options.attachStacktrace)}eventFromMessage(n,t="info",o){return Ty(this._options.stackParser,n,t,o,this._options.attachStacktrace)}captureUserFeedback(n){if(!this._isEnabled()){Oe&&S.warn("SDK not enabled, will not capture user feedback.");return}const t=zF(n,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this._sendEnvelope(t)}_prepareEvent(n,t,o){return n.platform=n.platform||"javascript",super._prepareEvent(n,t,o)}_flushOutcomes(){const n=this._clearOutcomes();if(n.length===0){Oe&&S.log("No outcomes to send");return}if(!this._dsn){Oe&&S.log("No dsn provided, will not send outcomes");return}Oe&&S.log("Sending outcomes:",n);const t=qF(n,this._options.tunnel&&Xn(this._dsn));this._sendEnvelope(t)}}const Sn="?",WF=10,KF=20,VF=30,YF=40,XF=50;function Qn(e,n,t,o){const i={filename:e,function:n,in_app:!0};return t!==void 0&&(i.lineno=t),o!==void 0&&(i.colno=o),i}const QF=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,ZF=/\((\S*)(?::(\d+))(?::(\d+))\)/,Ol=[VF,e=>{const n=QF.exec(e);if(n){if(n[2]&&n[2].indexOf("eval")===0){const r=ZF.exec(n[2]);r&&(n[2]=r[1],n[3]=r[2],n[4]=r[3])}const[o,i]=Rl(n[1]||Sn,n[2]);return Qn(i,o,n[3]?+n[3]:void 0,n[4]?+n[4]:void 0)}}],ev=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,nv=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,tv=[XF,e=>{const n=ev.exec(e);if(n){if(n[3]&&n[3].indexOf(" > eval")>-1){const r=nv.exec(n[3]);r&&(n[1]=n[1]||"eval",n[3]=r[1],n[4]=r[2],n[5]="")}let o=n[3],i=n[1]||Sn;return[i,o]=Rl(i,o),Qn(o,i,n[4]?+n[4]:void 0,n[5]?+n[5]:void 0)}}],ov=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,iv=[YF,e=>{const n=ov.exec(e);return n?Qn(n[2],n[1]||Sn,+n[3],n[4]?+n[4]:void 0):void 0}],rv=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,Nw=[WF,e=>{const n=rv.exec(e);return n?Qn(n[2],n[3]||Sn,+n[1]):void 0}],cv=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,Mw=[KF,e=>{const n=cv.exec(e);return n?Qn(n[5],n[3]||n[4]||Sn,+n[1],+n[2]):void 0}],av=rs(...[Ol,tv,iv]),Rl=(e,n)=>{const t=e.indexOf("safari-extension")!==-1,o=e.indexOf("safari-web-extension")!==-1;return t||o?[e.indexOf("@")!==-1?e.split("@")[0]:Sn,t?`safari-extension:${n}`:`safari-web-extension:${n}`]:[e,n]};function sv(e){const n=[];function t(){return e===void 0||n.length<e}function o(c){return n.splice(n.indexOf(c),1)[0]}function i(c){if(!t())return Bi(new ye("Not adding Promise because buffer limit was reached."));const a=c();return n.indexOf(a)===-1&&n.push(a),a.then(()=>o(a)).then(null,()=>o(a).then(null,()=>{})),a}function r(c){return new le((a,s)=>{let l=n.length;if(!l)return a(!0);const f=setTimeout(()=>{c&&c>0&&a(!1)},c);n.forEach(A=>{bn(A).then(()=>{--l||(clearTimeout(f),a(!0))},s)})})}return{$:n,add:i,drain:r}}const lv=60*1e3;function Av(e,n=Date.now()){const t=parseInt(`${e}`,10);if(!isNaN(t))return t*1e3;const o=Date.parse(`${e}`);return isNaN(o)?lv:o-n}function fv(e,n){return e[n]||e.all||0}function uv(e,n,t=Date.now()){return fv(e,n)>t}function Ev(e,{statusCode:n,headers:t},o=Date.now()){const i={...e},r=t&&t["x-sentry-rate-limits"],c=t&&t["retry-after"];if(r)for(const a of r.trim().split(",")){const[s,l,,,f]=a.split(":",5),A=parseInt(s,10),d=(isNaN(A)?60:A)*1e3;if(!l)i.all=o+d;else for(const u of l.split(";"))u==="metric_bucket"?(!f||f.split(";").includes("custom"))&&(i[u]=o+d):i[u]=o+d}else c?i.all=o+Av(c,o):n===429&&(i.all=o+60*1e3);return i}const dv=30;function Ki(e,n,t=sv(e.bufferSize||dv)){let o={};const i=c=>t.drain(c);function r(c){const a=[];if(Gi(c,(A,d)=>{const u=kl(d);if(uv(o,u)){const _=Dl(A,d);e.recordDroppedEvent("ratelimit_backoff",u,_)}else a.push(A)}),a.length===0)return bn();const s=wn(c[0],a),l=A=>{Gi(s,(d,u)=>{const _=Dl(d,u);e.recordDroppedEvent(A,kl(u),_)})},f=()=>n({body:yF(s,e.textEncoder)}).then(A=>(A.statusCode!==void 0&&(A.statusCode<200||A.statusCode>=300)&&L&&S.warn(`Sentry responded with status code ${A.statusCode} to sent event.`),o=Ev(o,A),A),A=>{throw l("network_error"),A});return t.add(f).then(A=>A,A=>{if(A instanceof ye)return L&&S.error("Skipped sending event because buffer is full."),l("queue_overflow"),bn();throw A})}return r.__sentry__baseTransport__=!0,{send:r,flush:i}}function Dl(e,n){if(!(n!=="event"&&n!=="transaction"))return Array.isArray(e)?e[1]:void 0}let Zn;function pv(){if(Zn)return Zn;if(Ui(M.fetch))return Zn=M.fetch.bind(M);const e=M.document;let n=M.fetch;if(e&&typeof e.createElement=="function")try{const t=e.createElement("iframe");t.hidden=!0,e.head.appendChild(t);const o=t.contentWindow;o&&o.fetch&&(n=o.fetch),e.head.removeChild(t)}catch(t){Oe&&S.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return Zn=n.bind(M)}function gv(){Zn=void 0}function _v(e,n=pv()){let t=0,o=0;function i(r){const c=r.body.length;t+=c,o++;const a={body:r.body,method:"POST",referrerPolicy:"origin",headers:e.headers,keepalive:t<=6e4&&o<15,...e.fetchOptions};try{return n(e.url,a).then(s=>(t-=c,o--,{statusCode:s.status,headers:{"x-sentry-rate-limits":s.headers.get("X-Sentry-Rate-Limits"),"retry-after":s.headers.get("Retry-After")}}))}catch(s){return gv(),t-=c,o--,Bi(s)}}return Ki(e,i)}const hv=4;function mv(e){function n(t){return new le((o,i)=>{const r=new XMLHttpRequest;r.onerror=i,r.onreadystatechange=()=>{r.readyState===hv&&o({statusCode:r.status,headers:{"x-sentry-rate-limits":r.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":r.getResponseHeader("Retry-After")}})},r.open("POST",e.url);for(const c in e.headers)Object.prototype.hasOwnProperty.call(e.headers,c)&&r.setRequestHeader(c,e.headers[c]);r.send(t.body)})}return Ki(e,n)}var bv,yv,Bv,Vi,Yi,xn,Fv;const Nl=[ks(),vs(),Js(),Ys(),Ms(),Qs(),tl(),el()];function vv(e){return[...Nl]}function Cv(e={}){e.defaultIntegrations===void 0&&(e.defaultIntegrations=vv()),e.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(e.release=__SENTRY_RELEASE__),M.SENTRY_RELEASE&&M.SENTRY_RELEASE.id&&(e.release=M.SENTRY_RELEASE.id)),e.autoSessionTracking===void 0&&(e.autoSessionTracking=!0),e.sendClientReports===void 0&&(e.sendClientReports=!0);const n={...e,stackParser:mb(e.stackParser||av),integrations:zb(e),transport:e.transport||(Li()?_v:mv)};uF(GF,n),e.autoSessionTracking&&kv()}const Uw=(e={},n=yv())=>{if(!xn.document){Yi&&Vi.error("Global document not defined in showReportDialog call");return}const{client:t,scope:o}=n.getStackTop(),i=e.dsn||t&&t.getDsn();if(!i){Yi&&Vi.error("DSN not configured for showReportDialog call");return}o&&(e.user={...o.getUser(),...e.user}),e.eventId||(e.eventId=n.lastEventId());const r=xn.document.createElement("script");r.async=!0,r.crossOrigin="anonymous",r.src=Bv(i,e),e.onLoad&&(r.onload=e.onLoad);const{onClose:c}=e;if(c){const s=l=>{if(l.data==="__sentry_reportdialog_closed__")try{c()}finally{xn.removeEventListener("message",s)}};xn.addEventListener("message",s)}const a=xn.document.head||xn.document.body;a?a.appendChild(r):Yi&&Vi.error("Not injecting report dialog. No injection point found in HTML")};function jw(){}function $w(e){e()}function Jw(e){return Fv(e)()}function kv(){if(typeof M.document>"u"){Oe&&S.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}ds({ignoreDuration:!0}),_s(),Ws(({from:e,to:n})=>{e!==void 0&&e!==n&&(ds({ignoreDuration:!0}),_s())})}function qw(e){const n=bv();n&&n.captureUserFeedback(e)}function wv(e){const n=Object.assign({pollInterval:1e3,anrThreshold:5e3,captureStackTrace:!1},e),t=Vn();document.addEventListener("visibilitychange",()=>{t.sendStatus({status:document.visibilityState,config:n})}),t.sendStatus({status:document.visibilityState,config:n}),setInterval(()=>{t.sendStatus({status:"alive",config:n})},n.pollInterval)}const Sv=50,[,xv]=Ol,[,Tv]=bb(),Iv=(e,n=0)=>{const t=[];for(const o of e.split(`
`).slice(n)){const i=xv(o),r=Tv(o);if(i&&r?.in_app!==!1?t.push(i):r&&t.push(ue(r)),t.length>=Sv)break}return cs(t)};var Xi=function(e,n){return Xi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])},Xi(e,n)};function Ov(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Xi(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var Qi=function(){return Qi=Object.assign||function(n){for(var t,o=1,i=arguments.length;o<i;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Qi.apply(this,arguments)};function Rv(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t}function Dv(e,n,t,o){var i=arguments.length,r=i<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(n,t,r):c(n,t))||r);return i>3&&r&&Object.defineProperty(n,t,r),r}function Nv(e,n){return function(t,o){n(t,o,e)}}function zw(e,n,t,o,i,r){function c(w){if(w!==void 0&&typeof w!="function")throw new TypeError("Function expected");return w}for(var a=o.kind,s=a==="getter"?"get":a==="setter"?"set":"value",l=!n&&e?o.static?e:e.prototype:null,f=n||(l?Object.getOwnPropertyDescriptor(l,o.name):{}),A,d=!1,u=t.length-1;u>=0;u--){var _={};for(var k in o)_[k]=k==="access"?{}:o[k];for(var k in o.access)_.access[k]=o.access[k];_.addInitializer=function(w){if(d)throw new TypeError("Cannot add initializers after decoration has completed");r.push(c(w||null))};var B=(0,t[u])(a==="accessor"?{get:f.get,set:f.set}:f[s],_);if(a==="accessor"){if(B===void 0)continue;if(B===null||typeof B!="object")throw new TypeError("Object expected");(A=c(B.get))&&(f.get=A),(A=c(B.set))&&(f.set=A),(A=c(B.init))&&i.unshift(A)}else(A=c(B))&&(a==="field"?i.unshift(A):f[s]=A)}l&&Object.defineProperty(l,o.name,f),d=!0}function Hw(e,n,t){for(var o=arguments.length>2,i=0;i<n.length;i++)t=o?n[i].call(e,t):n[i].call(e);return o?t:void 0}function Gw(e){return typeof e=="symbol"?e:"".concat(e)}function Ww(e,n,t){return typeof n=="symbol"&&(n=n.description?"[".concat(n.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:t?"".concat(t," ",n):n})}function Pv(e,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,n)}function Pl(e,n,t,o){function i(r){return r instanceof t?r:new t(function(c){c(r)})}return new(t||(t=Promise))(function(r,c){function a(f){try{l(o.next(f))}catch(A){c(A)}}function s(f){try{l(o.throw(f))}catch(A){c(A)}}function l(f){f.done?r(f.value):i(f.value).then(a,s)}l((o=o.apply(e,n||[])).next())})}function Mv(e,n){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(l){return function(f){return s([l,f])}}function s(l){if(o)throw new TypeError("Generator is already executing.");for(;c&&(c=0,l[0]&&(t=0)),t;)try{if(o=1,i&&(r=l[0]&2?i.return:l[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,l[1])).done)return r;switch(i=0,r&&(l=[l[0]&2,r.value]),l[0]){case 0:case 1:r=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,i=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){t.label=l[1];break}if(l[0]===6&&t.label<r[1]){t.label=r[1],r=l;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(l);break}r[2]&&t.ops.pop(),t.trys.pop();continue}l=n.call(e,t)}catch(f){l=[6,f],i=0}finally{o=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var Zi=Object.create?function(e,n,t,o){o===void 0&&(o=t);var i=Object.getOwnPropertyDescriptor(n,t);(!i||("get"in i?!n.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,o,i)}:function(e,n,t,o){o===void 0&&(o=t),e[o]=n[t]};function Lv(e,n){for(var t in e)t!=="default"&&!Object.prototype.hasOwnProperty.call(n,t)&&Zi(n,e,t)}function er(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ml(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),i,r=[],c;try{for(;(n===void 0||n-- >0)&&!(i=o.next()).done;)r.push(i.value)}catch(a){c={error:a}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return r}function Uv(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(Ml(arguments[n]));return e}function jv(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var o=Array(e),i=0,n=0;n<t;n++)for(var r=arguments[n],c=0,a=r.length;c<a;c++,i++)o[i]=r[c];return o}function $v(e,n,t){if(t||arguments.length===2)for(var o=0,i=n.length,r;o<i;o++)(r||!(o in n))&&(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function et(e){return this instanceof et?(this.v=e,this):new et(e)}function Jv(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),i,r=[];return i={},c("next"),c("throw"),c("return"),i[Symbol.asyncIterator]=function(){return this},i;function c(d){o[d]&&(i[d]=function(u){return new Promise(function(_,k){r.push([d,u,_,k])>1||a(d,u)})})}function a(d,u){try{s(o[d](u))}catch(_){A(r[0][3],_)}}function s(d){d.value instanceof et?Promise.resolve(d.value.v).then(l,f):A(r[0][2],d)}function l(d){a("next",d)}function f(d){a("throw",d)}function A(d,u){d(u),r.shift(),r.length&&a(r[0][0],r[0][1])}}function qv(e){var n,t;return n={},o("next"),o("throw",function(i){throw i}),o("return"),n[Symbol.iterator]=function(){return this},n;function o(i,r){n[i]=e[i]?function(c){return(t=!t)?{value:et(e[i](c)),done:!1}:r?r(c):c}:r}}function zv(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof er=="function"?er(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(r){t[r]=e[r]&&function(c){return new Promise(function(a,s){c=e[r](c),i(a,s,c.done,c.value)})}}function i(r,c,a,s){Promise.resolve(s).then(function(l){r({value:l,done:a})},c)}}function Hv(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var Gv=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function Wv(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&Zi(n,e,t);return Gv(n,e),n}function Kv(e){return e&&e.__esModule?e:{default:e}}function Vv(e,n,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof n=="function"?e!==n||!o:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(e):o?o.value:n.get(e)}function Yv(e,n,t,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof n=="function"?e!==n||!i:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(e,t):i?i.value=t:n.set(e,t),t}function Xv(e,n){if(n===null||typeof n!="object"&&typeof n!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof e=="function"?n===e:e.has(n)}function Qv(e,n,t){if(n!=null){if(typeof n!="object"&&typeof n!="function")throw new TypeError("Object expected.");var o;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=n[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=n[Symbol.dispose]}if(typeof o!="function")throw new TypeError("Object not disposable.");e.stack.push({value:n,dispose:o,async:t})}else t&&e.stack.push({async:!0});return n}var Zv=typeof SuppressedError=="function"?SuppressedError:function(e,n,t){var o=new Error(t);return o.name="SuppressedError",o.error=e,o.suppressed=n,o};function eC(e){function n(o){e.error=e.hasError?new Zv(o,e.error,"An error was suppressed during disposal."):o,e.hasError=!0}function t(){for(;e.stack.length;){var o=e.stack.pop();try{var i=o.dispose&&o.dispose.call(o.value);if(o.async)return Promise.resolve(i).then(t,function(r){return n(r),t()})}catch(r){n(r)}}if(e.hasError)throw e.error}return t()}const Kw={__extends:Ov,__assign:Qi,__rest:Rv,__decorate:Dv,__param:Nv,__metadata:Pv,__awaiter:Pl,__generator:Mv,__createBinding:Zi,__exportStar:Lv,__values:er,__read:Ml,__spread:Uv,__spreadArrays:jv,__spreadArray:$v,__await:et,__asyncGenerator:Jv,__asyncDelegator:qv,__asyncValues:zv,__makeTemplateObject:Hv,__importStar:Wv,__importDefault:Kv,__classPrivateFieldGet:Vv,__classPrivateFieldSet:Yv,__classPrivateFieldIn:Xv,__addDisposableResource:Qv,__disposeResources:eC};function nC(e){const n=Vn();return Ki(e,t=>Pl(this,void 0,void 0,function*(){return n.sendEnvelope(t.body),{statusCode:200}}))}function tC(e){const n=typeof window<"u"?"renderer":"main";if(n!==e)throw new Error(`This code is intended to run in the Electron ${e} process but is currently running in the ${n} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${n}';`)}const oC=[...Nl,ll(),vl()];function iC(e={},n=Cv){if(tC("renderer"),window?.__SENTRY__RENDERER_INIT__){S.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);return}window.__SENTRY__RENDERER_INIT__=!0,e.autoSessionTracking===void 0&&(e.autoSessionTracking=!1),e.sendClientReports=!1,e.defaultIntegrations===void 0&&(e.defaultIntegrations=oC),e.stackParser===void 0&&(e.stackParser=Iv),e.dsn===void 0&&(e.dsn="https://12345@dummy.dsn/12345"),e.transport===void 0&&(e.transport=nC),e.anrDetection&&wv(e.anrDetection===!0?{}:e.anrDetection),delete e.initialScope,n(e)}const Vw=Object.assign(Object.assign({},lF),{MetricsAggregator:fF}),Yw=Object.assign(Object.assign({},CB),v);function rC(){console.log("Starting Sentry (Renderer)"),iC({...window.desktop?.diagnostics?.sentryOptions}),Nm(As)}const cC=Object.prototype.hasOwnProperty;function aC(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;const t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(let i=0;i<t.length;i++)if(!cC.call(n,t[i])||!Object.is(e[t[i]],n[t[i]]))return!1;return!0}function sC(e,n){return jo(e,n)}const Ll=sC;function lC(e){const n=En(e);return!aC(e,n.current)&&!Ll(e,n.current)&&(n.current=e),n.current}function Ul(e,n){wt(e,[lC(n)])}function jl(e){return lm(e,Ll)}const AC=()=>{const e=jl(n=>n.settings.locale);Ul(()=>{async function n(){e&&await window.desktop.intl.applyLocale(e)}n()},[e])},fC=`${L_} 1x,${U_} 2x,${j_} 3x`;rC();function uC(e){switch(e){case"MSIX":return"MSIX";case"WinStore":return"Microsoft Store (MSIX)";case"DDL":return"Squirrel (exe)";case"MSI":return"MSI";case"LMSI":return"Per-User MSI";case"MSQ":return"MSQ";case"dev":return"Development";default:return}}function EC(e){const{intl:n}=window.desktop,{app:t,environment:o}=e,i=GA(e),r=KA(o.distribution,i,t.isUpdateSupported,n),c=VA(o.appVersion),a=YA(process.arch),s=o.clientEnvironment===ge.RESTRICTED?" (GovSlack)":"",l=o.clientEnvironment===ge.MILITARY?" (MilSlack)":"";return`${r} ${c}${a}${s||l}`}const $l=()=>{const{intl:e}=window.desktop,{appVersion:n,webappVersion:t,versionString:o,clientEnvironment:i,devEnv:r,installerType:c}=jl(u=>({appVersion:u.environment.appVersion,webappVersion:$o(u.webapp),versionString:EC(u),clientEnvironment:u.environment.clientEnvironment,devEnv:u.environment.devEnv,installerType:u.environment.platform==="win32"?uC(u.environment.distribution):void 0})),[a,s]=kt(!1);AC(),Ul(()=>{if(a){const u=setTimeout(()=>s(!1),3e3);return()=>clearTimeout(u)}return $c},[a,s]);const l=`AboutBox-version${n!==void 0&&n.length>10?" long":""}`,f=e.t("Copied!",Me.RENDERER)(),A=()=>{navigator.clipboard.writeText(o).catch(u=>console.log("Failed to copy version string",u)),s(!0)},d=()=>window.open(`${Mc({clientEnvironment:i,devEnv:r})}/libs/desktop`);return re("div",{className:"AboutBox",children:[re("img",{className:"AboutBox-logo",draggable:!1,srcSet:fC}),re("span",{className:"AboutBox-tooltipContainer",children:re("span",{className:"AboutBox-tooltip",style:{opacity:a?1:0},children:f})}),re("span",{className:"AboutBox-versionContainer",children:[re("span",{className:l,"data-qa":"about_box_version",draggable:!1,children:o},"version"),re("span",{children:re("button",{className:"AboutBox-copy c-icon c-icon--all-files",title:e.t("Copy",Me.RENDERER)(),onClick:A},"copy")})]}),re("span",{"data-testid":"webapp-version",className:"AboutBox-webappVersion",draggable:!1,children:t}),c&&re("span",{"data-testid":"installer-type",className:"AboutBox-installerType",draggable:!1,children:["(",c,")"]}),re("input",{type:"button",className:"AboutBox-acknowledgements","data-qa":"about_box_acknowledgements",value:e.t("Notices and Acknowledgements",Me.RENDERER)(),onClick:d},"acknowledgements")]})};void Rm($l)})(),mC=uo})()});bC();})();

//# sourceMappingURL=about-box.bundle.js.map
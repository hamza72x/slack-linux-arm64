(()=>{var Hm=(_n,un)=>()=>(un||_n((un={exports:{}}).exports,un),un.exports);var Km=Hm((xn,Tn)=>{(function(){try{var _n=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},un=new Error().stack;un&&(_n._sentryDebugIds=_n._sentryDebugIds||{},_n._sentryDebugIds[un]="0f510df4-0820-4c98-a7a5-ae5698a55e71",_n._sentryDebugIdIdentifier="sentry-dbid-0f510df4-0820-4c98-a7a5-ae5698a55e71")}catch{}})();var Gm=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};Gm.SENTRY_RELEASE={id:"Slack@4.50.143"};var Wm;(()=>{var _n={3384(m,p,u){"use strict";u.d(p,{A:()=>Ye});var v=u(2845),F=u.n(v),g=u(8843),B=u.n(g),C=u(5858),x=u.n(C),P=new URL(u(5539),u.b),O=new URL(u(4603),u.b),U=new URL(u(4392),u.b),j=new URL(u(9138),u.b),T=new URL(u(5906),u.b),G=new URL(u(9269),u.b),W=new URL(u(5959),u.b),z=new URL(u(7),u.b),$=new URL(u(6723),u.b),Q=B()(F()),K=x()(P),en=x()(O),q=x()(U),D=x()(j),b=x()(T),_=x()(G),tn=x()(W),Mn=x()(z),jn=x()($);Q.push([m.id,`/*

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
  src: url(${en}) format('woff2');
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
  src: url(${D}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(${b}) format('woff2');
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
  src: url(${tn}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(${Mn}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
@font-face {
  font-family: 'Slack v2';
  src: url(${jn}) format('woff2');
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
.btn {
  background: #007a5a;
  color: #fff;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 900;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
  cursor: pointer;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  white-space: nowrap;
  margin: 0;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.btn:after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 0.25rem;
}
a.btn {
  color: #fff;
}
.no_touch .btn:hover,
.no_touch .btn.hover,
.no_touch .btn:focus {
  outline: none;
  text-decoration: none;
}
.btn:hover,
.btn.hover,
.btn:focus {
  background: #007a5a;
  color: #fff;
}
.btn:hover:after,
.btn.hover:after,
.btn:focus:after {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.25);
}
.btn:active,
.btn.active {
  color: #fff;
}
.btn:active:after,
.btn.active:after {
  box-shadow: inset 0 2px 1px rgba(0, 0, 0, 0.2);
}
.btn_outline {
  background: #f9f9f9;
  color: #1d1c1d !important;
  font-weight: 700;
  text-shadow: none;
}
.btn_outline:after {
  border: 1px solid #ddd;
}
.btn_outline.btn_transparent {
  background-color: transparent !important;
  color: rgba(255, 255, 255, 0.9) !important;
}
.btn_outline.btn_transparent:after {
  border: 1px solid rgba(255, 255, 255, 0.5);
}
.btn_outline.btn_transparent:hover,
.btn_outline.btn_transparent.hover,
.btn_outline.btn_transparent:focus,
.btn_outline.btn_transparent:active,
.btn_outline.btn_transparent.active {
  color: #1264a3 !important;
  background: rgba(255, 255, 255, 0.9) !important;
}
.btn_outline.btn_transparent:hover:after,
.btn_outline.btn_transparent.hover:after,
.btn_outline.btn_transparent:focus:after,
.btn_outline.btn_transparent:active:after,
.btn_outline.btn_transparent.active:after {
  box-shadow: none;
  border-color: transparent;
}
.btn_outline.btn_transparent:active,
.btn_outline.btn_transparent.active {
  background-color: rgba(255, 255, 255, 0.8) !important;
}
.btn_outline:hover,
.btn_outline.hover,
.btn_outline:focus {
  background: #fff;
  color: #1264a3 !important;
}
.btn_outline:hover:after,
.btn_outline.hover:after,
.btn_outline:focus:after {
  box-shadow: none;
}
.btn_outline:active {
  color: #1264a3;
}
.btn_outline:active:after {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.2);
}
.btn_outline.active {
  color: #666 !important;
  margin-top: 0;
  font-weight: 900;
}
.btn.btn_outline.btn_warning,
.btn.btn_outline.btn_danger {
  background: #f9f9f9 !important;
}
.btn.btn_outline.btn_warning:hover,
.btn.btn_outline.btn_danger:hover,
.btn.btn_outline.btn_warning:focus,
.btn.btn_outline.btn_danger:focus {
  background: #fff !important;
}
.btn.btn_outline.btn_warning:hover,
.btn.btn_outline.btn_warning:focus {
  color: #de4e2b !important;
}
.btn.btn_outline.btn_warning:hover:after,
.btn.btn_outline.btn_warning:focus:after {
  border-color: #de4e2b;
}
.btn.btn_outline.btn_danger:hover,
.btn.btn_outline.btn_danger:focus {
  color: #e01e5a !important;
}
.btn.btn_outline.btn_danger:hover:after,
.btn.btn_outline.btn_danger:focus:after {
  border-color: #e01e5a;
}
.btn.btn_outline.disabled,
.btn.btn_outline.disabled:hover {
  color: #616061 !important;
  background: #fff !important;
}
.btn_unstyle {
  background: none;
  border: none;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  outline: 0;
}
.btn_basic {
  background: none;
  border: none;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  outline: 0;
  color: inherit;
}
.btn_basic:hover,
.btn_basic:focus {
  color: #0b4c8c;
}
.btn_link {
  background: none;
  border: none;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  outline: 0;
  color: #1264a3;
  vertical-align: baseline;
  cursor: pointer;
}
.btn_link:hover,
.btn_link:focus {
  color: #0b4c8c;
  text-decoration: underline;
}
.btn.btn_border {
  background: transparent;
  border: 2px solid #fff;
}
.btn.btn_border:after {
  box-shadow: none;
}
.btn.disabled,
.btn.disabled:hover,
.btn.disabled:active,
.btn:disabled,
.btn:disabled:hover,
.btn:disabled:active {
  background-color: #ddd !important;
  color: rgba(29, 28, 29, 0.75);
  text-shadow: none;
  box-shadow: none !important;
  pointer-events: none;
}
.btn {
  padding: 8px 14px 9px;
  font-size: 15px;
}
.btn_small {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
}
.btn_small i:before {
  font-size: 15px;
}
.NetLogWindow {
  background: white;
  font-family: Slack-Lato, Lucida Grande, sans-serif;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
}
.NetLogWindow-illustration {
  flex: 1 1;
  min-height: 0;
  margin-bottom: 15px;
  text-align: center;
}
.NetLogWindow-illustration img {
  max-width: 100%;
  max-height: 100%;
}
.NetLogWindow-text {
  text-align: center;
  font-size: 15px;
  line-height: 1.2;
  margin-bottom: 0.8em;
}
.NetLogWindow .btn {
  font-family: inherit;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/net-log-window.less","webpack://./src/resources/lato.less","webpack://./src/resources/slack-icons-font.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less","webpack://./src/resources/plastic/plastic_buttons.less","webpack://./src/resources/plastic/plastic_elements.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AElEA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AFmEF;AEvDA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AFyDF;AExDE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AF0EF;AExDA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AF0DF;AEzDE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AF2DJ;AEzDE;EAEE,gBAAA;AF0DJ;AEnDA;EACE,UAAA;AFqDF;AEpDE;EACE,kBAAA;AFsDJ;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEglBA;EACE,gBAAA;AF9kBF;AEknBA;EAEE,WAAA;AFjnBF;AEsmBE;EACE,gBAAA;EACA,cAAA;AFpmBJ;AEsmBE;EACE,yBAAA;AFpmBJ;AE4mBE;EACE,eAAA;AF1mBJ;AE8mBA;EAEE,WAAA;AF7mBF;AEylBE;EACE,gBAAA;EACA,cAAA;AFvlBJ;AEylBE;EACE,yBAAA;AFvlBJ;AEwmBE;EACE,eAAA;AFtmBJ;AE0mBA;EAEE,WAAA;AFzmBF;AE4kBE;EACE,gBAAA;EACA,cAAA;AF1kBJ;AE4kBE;EACE,yBAAA;AF1kBJ;AEomBE;EACE,eAAA;AFlmBJ;AEkkBE;EACE,gBAAA;EACA,cAAA;AFhkBJ;AEkkBE;EACE,yBAAA;AFhkBJ;AE2jBE;EACE,gBAAA;EACA,cAAA;AFzjBJ;AE2jBE;EACE,yBAAA;AFzjBJ;AEojBE;EACE,gBAAA;EACA,cAAA;AFljBJ;AEojBE;EACE,yBAAA;AFljBJ;AE6iBE;EACE,gBAAA;EACA,cAAA;AF3iBJ;AE6iBE;EACE,yBAAA;AF3iBJ;AEsiBE;EACE,gBAAA;EACA,cAAA;AFpiBJ;AEsiBE;EACE,yBAAA;AFpiBJ;AE+hBE;EACE,gBAAA;EACA,cAAA;AF7hBJ;AE+hBE;EACE,yBAAA;AF7hBJ;AEwhBE;EACE,gBAAA;EACA,cAAA;AFthBJ;AEwhBE;EACE,yBAAA;AFthBJ;AEihBE;EACE,gBAAA;EACA,cAAA;AF/gBJ;AEihBE;EACE,yBAAA;AF/gBJ;AE0gBE;EACE,gBAAA;EACA,cAAA;AFxgBJ;AE0gBE;EACE,yBAAA;AFxgBJ;AEmgBE;EACE,gBAAA;EACA,cAAA;AFjgBJ;AEmgBE;EACE,yBAAA;AFjgBJ;AE4fE;EACE,gBAAA;EACA,cAAA;AF1fJ;AE4fE;EACE,yBAAA;AF1fJ;AEqfE;EACE,gBAAA;EACA,cAAA;AFnfJ;AEqfE;EACE,yBAAA;AFnfJ;AE8eE;EACE,gBAAA;EACA,cAAA;AF5eJ;AE8eE;EACE,yBAAA;AF5eJ;AEueE;EACE,gBAAA;EACA,cAAA;AFreJ;AEueE;EACE,yBAAA;AFreJ;AEgeE;EACE,gBAAA;EACA,cAAA;AF9dJ;AEgeE;EACE,yBAAA;AF9dJ;AEydE;EACE,gBAAA;EACA,cAAA;AFvdJ;AEydE;EACE,yBAAA;AFvdJ;AEkdE;EACE,gBAAA;EACA,cAAA;AFhdJ;AEkdE;EACE,yBAAA;AFhdJ;AE2cE;EACE,gBAAA;EACA,cAAA;AFzcJ;AE2cE;EACE,yBAAA;AFzcJ;AEocE;EACE,gBAAA;EACA,cAAA;AFlcJ;AEocE;EACE,yBAAA;AFlcJ;AE6bE;EACE,gBAAA;EACA,cAAA;AF3bJ;AE6bE;EACE,yBAAA;AF3bJ;AEsbE;EACE,gBAAA;EACA,cAAA;AFpbJ;AEsbE;EACE,yBAAA;AFpbJ;AE+aE;EACE,gBAAA;EACA,cAAA;AF7aJ;AE+aE;EACE,yBAAA;AF7aJ;AEwaE;EACE,gBAAA;EACA,cAAA;AFtaJ;AEwaE;EACE,yBAAA;AFtaJ;AEiaE;EACE,gBAAA;EACA,cAAA;AF/ZJ;AEiaE;EACE,yBAAA;AF/ZJ;AE0ZE;EACE,gBAAA;EACA,cAAA;AFxZJ;AE0ZE;EACE,yBAAA;AFxZJ;AEmZE;EACE,gBAAA;EACA,cAAA;AFjZJ;AEmZE;EACE,yBAAA;AFjZJ;AE4YE;EACE,gBAAA;EACA,cAAA;AF1YJ;AE4YE;EACE,yBAAA;AF1YJ;AEqYE;EACE,gBAAA;EACA,cAAA;AFnYJ;AEqYE;EACE,yBAAA;AFnYJ;AE8XE;EACE,gBAAA;EACA,cAAA;AF5XJ;AE8XE;EACE,yBAAA;AF5XJ;AEuXE;EACE,gBAAA;EACA,cAAA;AFrXJ;AEuXE;EACE,yBAAA;AFrXJ;AEgXE;EACE,gBAAA;EACA,cAAA;AF9WJ;AEgXE;EACE,yBAAA;AF9WJ;AEyWE;EACE,gBAAA;EACA,cAAA;AFvWJ;AEyWE;EACE,yBAAA;AFvWJ;AEkWE;EACE,gBAAA;EACA,cAAA;AFhWJ;AEkWE;EACE,yBAAA;AFhWJ;AE2VE;EACE,gBAAA;EACA,cAAA;AFzVJ;AE2VE;EACE,yBAAA;AFzVJ;AEoVE;EACE,gBAAA;EACA,cAAA;AFlVJ;AEoVE;EACE,yBAAA;AFlVJ;AE6UE;EACE,gBAAA;EACA,cAAA;AF3UJ;AE6UE;EACE,yBAAA;AF3UJ;AEsUE;EACE,gBAAA;EACA,cAAA;AFpUJ;AEsUE;EACE,yBAAA;AFpUJ;AE+TE;EACE,gBAAA;EACA,cAAA;AF7TJ;AE+TE;EACE,yBAAA;AF7TJ;AEwTE;EACE,gBAAA;EACA,cAAA;AFtTJ;AEwTE;EACE,yBAAA;AFtTJ;AEiTE;EACE,gBAAA;EACA,cAAA;AF/SJ;AEiTE;EACE,yBAAA;AF/SJ;AE0SE;EACE,gBAAA;EACA,cAAA;AFxSJ;AE0SE;EACE,yBAAA;AFxSJ;AEmSE;EACE,gBAAA;EACA,cAAA;AFjSJ;AEmSE;EACE,yBAAA;AFjSJ;AE4RE;EACE,gBAAA;EACA,cAAA;AF1RJ;AE4RE;EACE,yBAAA;AF1RJ;AEqRE;EACE,gBAAA;EACA,cAAA;AFnRJ;AEqRE;EACE,yBAAA;AFnRJ;AE8QE;EACE,gBAAA;EACA,cAAA;AF5QJ;AE8QE;EACE,yBAAA;AF5QJ;AEuQE;EACE,gBAAA;EACA,cAAA;AFrQJ;AEuQE;EACE,yBAAA;AFrQJ;AEgQE;EACE,gBAAA;EACA,cAAA;AF9PJ;AEgQE;EACE,yBAAA;AF9PJ;AEyPE;EACE,gBAAA;EACA,cAAA;AFvPJ;AEyPE;EACE,yBAAA;AFvPJ;AEkPE;EACE,gBAAA;EACA,cAAA;AFhPJ;AEkPE;EACE,yBAAA;AFhPJ;AE2OE;EACE,gBAAA;EACA,cAAA;AFzOJ;AE2OE;EACE,yBAAA;AFzOJ;AEoOE;EACE,gBAAA;EACA,cAAA;AFlOJ;AEoOE;EACE,yBAAA;AFlOJ;AE6NE;EACE,gBAAA;EACA,cAAA;AF3NJ;AE6NE;EACE,yBAAA;AF3NJ;AEsNE;EACE,gBAAA;EACA,cAAA;AFpNJ;AEsNE;EACE,yBAAA;AFpNJ;AE+ME;EACE,gBAAA;EACA,cAAA;AF7MJ;AE+ME;EACE,yBAAA;AF7MJ;AEwME;EACE,gBAAA;EACA,cAAA;AFtMJ;AEwME;EACE,yBAAA;AFtMJ;AEiME;EACE,gBAAA;EACA,cAAA;AF/LJ;AEiME;EACE,yBAAA;AF/LJ;AE0LE;EACE,gBAAA;EACA,cAAA;AFxLJ;AE0LE;EACE,yBAAA;AFxLJ;AEmLE;EACE,gBAAA;EACA,cAAA;AFjLJ;AEmLE;EACE,yBAAA;AFjLJ;AE4KE;EACE,gBAAA;EACA,cAAA;AF1KJ;AE4KE;EACE,yBAAA;AF1KJ;AEqKE;EACE,gBAAA;EACA,cAAA;AFnKJ;AEqKE;EACE,yBAAA;AFnKJ;AE8JE;EACE,gBAAA;EACA,cAAA;AF5JJ;AE8JE;EACE,yBAAA;AF5JJ;AEuJE;EACE,gBAAA;EACA,cAAA;AFrJJ;AEuJE;EACE,yBAAA;AFrJJ;AEgJE;EACE,gBAAA;EACA,cAAA;AF9IJ;AEgJE;EACE,yBAAA;AF9IJ;AEyIE;EACE,gBAAA;EACA,cAAA;AFvIJ;AEyIE;EACE,yBAAA;AFvIJ;AEkIE;EACE,gBAAA;EACA,cAAA;AFhIJ;AEkIE;EACE,yBAAA;AFhIJ;AE2HE;EACE,gBAAA;EACA,cAAA;AFzHJ;AE2HE;EACE,yBAAA;AFzHJ;AEoHE;EACE,gBAAA;EACA,cAAA;AFlHJ;AEoHE;EACE,yBAAA;AFlHJ;AE6GE;EACE,gBAAA;EACA,cAAA;AF3GJ;AE6GE;EACE,yBAAA;AF3GJ;AEsGE;EACE,gBAAA;EACA,cAAA;AFpGJ;AEsGE;EACE,yBAAA;AFpGJ;AE+FE;EACE,gBAAA;EACA,cAAA;AF7FJ;AE+FE;EACE,yBAAA;AF7FJ;AEwFE;EACE,gBAAA;EACA,cAAA;AFtFJ;AEwFE;EACE,yBAAA;AFtFJ;AEiFE;EACE,gBAAA;EACA,cAAA;AF/EJ;AEiFE;EACE,yBAAA;AF/EJ;AE0EE;EACE,gBAAA;EACA,cAAA;AFxEJ;AE0EE;EACE,yBAAA;AFxEJ;AEmEE;EACE,gBAAA;EACA,cAAA;AFjEJ;AEmEE;EACE,yBAAA;AFjEJ;AE4DE;EACE,gBAAA;EACA,cAAA;AF1DJ;AE4DE;EACE,yBAAA;AF1DJ;AEqDE;EACE,gBAAA;EACA,cAAA;AFnDJ;AEqDE;EACE,yBAAA;AFnDJ;AE8CE;EACE,gBAAA;EACA,cAAA;AF5CJ;AE8CE;EACE,yBAAA;AF5CJ;AEuCE;EACE,gBAAA;EACA,cAAA;AFrCJ;AEuCE;EACE,yBAAA;AFrCJ;AEgCE;EACE,gBAAA;EACA,cAAA;AF9BJ;AEgCE;EACE,yBAAA;AF9BJ;AEyBE;EACE,gBAAA;EACA,cAAA;AFvBJ;AEyBE;EACE,yBAAA;AFvBJ;AEkBE;EACE,gBAAA;EACA,cAAA;AFhBJ;AEkBE;EACE,yBAAA;AFhBJ;AEWE;EACE,gBAAA;EACA,cAAA;AFTJ;AEWE;EACE,yBAAA;AFTJ;AEIE;EACE,gBAAA;EACA,cAAA;AFFJ;AEIE;EACE,yBAAA;AFFJ;AEHE;EACE,gBAAA;EACA,cAAA;AFKJ;AEHE;EACE,yBAAA;AFKJ;AEVE;EACE,gBAAA;EACA,cAAA;AFYJ;AEVE;EACE,yBAAA;AFYJ;AEjBE;EACE,gBAAA;EACA,cAAA;AFmBJ;AEjBE;EACE,yBAAA;AFmBJ;AExBE;EACE,gBAAA;EACA,cAAA;AF0BJ;AExBE;EACE,yBAAA;AF0BJ;AE/BE;EACE,gBAAA;EACA,cAAA;AFiCJ;AE/BE;EACE,yBAAA;AFiCJ;AEtCE;EACE,gBAAA;EACA,cAAA;AFwCJ;AEtCE;EACE,yBAAA;AFwCJ;AE7CE;EACE,gBAAA;EACA,cAAA;AF+CJ;AE7CE;EACE,yBAAA;AF+CJ;AEpDE;EACE,gBAAA;EACA,cAAA;AFsDJ;AEpDE;EACE,yBAAA;AFsDJ;AE3DE;EACE,gBAAA;EACA,cAAA;AF6DJ;AE3DE;EACE,yBAAA;AF6DJ;AElEE;EACE,gBAAA;EACA,cAAA;AFoEJ;AElEE;EACE,yBAAA;AFoEJ;AEzEE;EACE,gBAAA;EACA,cAAA;AF2EJ;AEzEE;EACE,yBAAA;AF2EJ;AEhFE;EACE,gBAAA;EACA,cAAA;AFkFJ;AEhFE;EACE,yBAAA;AFkFJ;AEvFE;EACE,gBAAA;EACA,cAAA;AFyFJ;AEvFE;EACE,yBAAA;AFyFJ;AE9FE;EACE,gBAAA;EACA,cAAA;AFgGJ;AE9FE;EACE,yBAAA;AFgGJ;AErGE;EACE,gBAAA;EACA,cAAA;AFuGJ;AErGE;EACE,yBAAA;AFuGJ;AE5GE;EACE,gBAAA;EACA,cAAA;AF8GJ;AE5GE;EACE,yBAAA;AF8GJ;AEnHE;EACE,gBAAA;EACA,cAAA;AFqHJ;AEnHE;EACE,yBAAA;AFqHJ;AE1HE;EACE,gBAAA;EACA,cAAA;AF4HJ;AE1HE;EACE,yBAAA;AF4HJ;AEjIE;EACE,gBAAA;EACA,cAAA;AFmIJ;AEjIE;EACE,yBAAA;AFmIJ;AExIE;EACE,gBAAA;EACA,cAAA;AF0IJ;AExIE;EACE,yBAAA;AF0IJ;AE/IE;EACE,gBAAA;EACA,cAAA;AFiJJ;AE/IE;EACE,yBAAA;AFiJJ;AEtJE;EACE,gBAAA;EACA,cAAA;AFwJJ;AEtJE;EACE,yBAAA;AFwJJ;AE7JE;EACE,gBAAA;EACA,cAAA;AF+JJ;AE7JE;EACE,yBAAA;AF+JJ;AEpKE;EACE,gBAAA;EACA,cAAA;AFsKJ;AEpKE;EACE,yBAAA;AFsKJ;AE3KE;EACE,gBAAA;EACA,cAAA;AF6KJ;AE3KE;EACE,yBAAA;AF6KJ;AElLE;EACE,gBAAA;EACA,cAAA;AFoLJ;AElLE;EACE,yBAAA;AFoLJ;AEzLE;EACE,gBAAA;EACA,cAAA;AF2LJ;AEzLE;EACE,yBAAA;AF2LJ;AEhME;EACE,gBAAA;EACA,cAAA;AFkMJ;AEhME;EACE,yBAAA;AFkMJ;AEvME;EACE,gBAAA;EACA,cAAA;AFyMJ;AEvME;EACE,yBAAA;AFyMJ;AE9ME;EACE,gBAAA;EACA,cAAA;AFgNJ;AE9ME;EACE,yBAAA;AFgNJ;AErNE;EACE,gBAAA;EACA,cAAA;AFuNJ;AErNE;EACE,yBAAA;AFuNJ;AE5NE;EACE,gBAAA;EACA,cAAA;AF8NJ;AE5NE;EACE,yBAAA;AF8NJ;AEnOE;EACE,gBAAA;EACA,cAAA;AFqOJ;AEnOE;EACE,yBAAA;AFqOJ;AE1OE;EACE,gBAAA;EACA,cAAA;AF4OJ;AE1OE;EACE,yBAAA;AF4OJ;AEjPE;EACE,gBAAA;EACA,cAAA;AFmPJ;AEjPE;EACE,yBAAA;AFmPJ;AExPE;EACE,gBAAA;EACA,cAAA;AF0PJ;AExPE;EACE,yBAAA;AF0PJ;AE/PE;EACE,gBAAA;EACA,cAAA;AFiQJ;AE/PE;EACE,yBAAA;AFiQJ;AEtQE;EACE,gBAAA;EACA,cAAA;AFwQJ;AEtQE;EACE,yBAAA;AFwQJ;AE7QE;EACE,gBAAA;EACA,cAAA;AF+QJ;AE7QE;EACE,yBAAA;AF+QJ;AEpRE;EACE,gBAAA;EACA,cAAA;AFsRJ;AEpRE;EACE,yBAAA;AFsRJ;AE3RE;EACE,gBAAA;EACA,cAAA;AF6RJ;AE3RE;EACE,yBAAA;AF6RJ;AACA;;;;EAIE;AG7xFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AH+xFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;;;;;;;;;;;EAaE;AACF;;;CAGC;AACD;;;CAGC;AIxuFD;EACE,iBAAA;AJ0uFF;AIxuFA;EACE,iBAAA;AJ0uFF;AK/zFA;EAEE,mBAAA;EACA,WAAA;EAGA,eAAA;EACA,mBAAA;EACA,gBAAA;EC6EA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACA,iBAAA;ED9EA,qBAAA;EACA,eAAA;EACA,yCAAA;EAGA,YAAA;ECRA,sBAAA;EAqEA,gBAAA;EDxDA,kBAAA;EACA,qBAAA;EACA,sBAAA;EACA,kBAAA;EACA,mBAAA;EACA,SAAA;EAEA,wBAAA;EACA,wCAAA;AL4zFF;AK1zFE;EACE,kBAAA;EACA,WAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,OAAA;EC7BF,sBAAA;AN01FF;AKxzFA;EACE,WAAA;AL0zFF;AKtzFA;;;EAII,aAAA;EACA,qBAAA;ALuzFJ;AKpzFA;;;EAGE,mBAAA;EACA,WAAA;ALszFF;AKpzFE;;;EACE,4CAAA;ALwzFJ;AKrzFA;;EAEE,WAAA;ALuzFF;AKrzFE;;EACE,8CAAA;ALwzFJ;AKnzFA;EACE,mBAAA;EACA,yBAAA;EACA,gBAAA;EACA,iBAAA;ALqzFF;AKnzFE;EACE,sBAAA;ALqzFJ;AKlzFE;EACE,wCAAA;EACA,0CAAA;ALozFJ;AKlzFI;EACE,0CAAA;ALozFN;AKjzFI;;;;;EAKE,yBAAA;EACA,+CAAA;ALmzFN;AKjzFM;;;;;EACE,gBAAA;EACA,yBAAA;ALuzFR;AKnzFI;;EAEE,qDAAA;ALqzFN;AKjzFA;;;EAGE,gBAAA;EACA,yBAAA;ALmzFF;AKjzFE;;;EACE,gBAAA;ALqzFJ;AKlzFA;EACE,cAAA;ALozFF;AKlzFE;EACE,8CAAA;ALozFJ;AKjzFA;EACE,sBAAA;EACA,aAAA;EACA,gBAAA;ALmzFF;AKjzFA;;EAEE,8BAAA;ALmzFF;AK/yFE;;;;EAEE,2BAAA;ALmzFJ;AK/yFE;;EAEE,yBAAA;ALizFJ;AK/yFI;;EACE,qBAAA;ALkzFN;AK7yFE;;EAEE,yBAAA;AL+yFJ;AK7yFI;;EACE,qBAAA;ALgzFN;AK3yFA;;EAEE,yBAAA;EACA,2BAAA;AL6yFF;AK1yFA;EACE,gBAAA;EACA,YAAA;EACA,UAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EACA,UAAA;AL4yFF;AKxyFA;EAbE,gBAAA;EACA,YAAA;EACA,UAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EAOA,UAAA;EACA,cAAA;ALkzFF;AKhzFE;;EAEE,cAAA;ALkzFJ;AK7yFA;EAzBE,gBAAA;EACA,YAAA;EACA,UAAA;EACA,wBAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EAmBA,UAAA;EACA,cAAA;EACA,wBAAA;EACA,eAAA;ALuzFF;AKrzFE;;EAEE,cAAA;EACA,0BAAA;ALuzFJ;AKlzFA;EACE,uBAAA;EACA,sBAAA;ALozFF;AKlzFE;EACE,gBAAA;ALozFJ;AK/yFA;;;;;;EAME,iCAAA;EACA,6BAAA;EACA,iBAAA;EC3JA,2BAAA;ED6JA,oBAAA;ALizFF;AK7yFA;EACE,qBAAA;EACA,eAAA;AL+yFF;AK7yFA;EACE,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,mBAAA;EACA,eAAA;AL+yFF;AKpzFA;EAQI,eAAA;AL+yFJ;AAziGA;EACE,iBAAA;EACA,kDAAA;EACA,sBAAA;EACA,aAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,aAAA;AA2iGF;AAziGE;EACE,SAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AA2iGJ;AAziGI;EACE,eAAA;EACA,gBAAA;AA2iGN;AAviGE;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;AAyiGJ;AAnkGA;EA8BI,oBAAA;AAwiGJ",sourcesContent:[`@import '../../resources/lato.less';
@import '../../resources/slack-icons-font.less';
@import '../../resources/plastic/plastic_typography.less';
@import '../../resources/plastic/plastic_utilities.less';
@import '../../resources/plastic/plastic_buttons.less';

@settings-font-family:
  Slack-Lato,
  Lucida Grande,
  sans-serif;
@sk_off_white_hex: rgb(249, 249, 249);
@sk_seafoam_green: #007a5a;

.NetLogWindow {
  background: white;
  font-family: @settings-font-family;
  box-sizing: border-box;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;

  &-illustration {
    flex: 1 1;
    min-height: 0;
    margin-bottom: 15px;
    text-align: center;

    & img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &-text {
    text-align: center;
    font-size: 15px;
    line-height: 1.2;
    margin-bottom: 0.8em;
  }

  .btn {
    font-family: inherit;
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
`,`//
// PLASTIC
// Buttons
// Site-wide button styles
//

@import 'plastic_typography.less';
@import 'plastic_elements.less';
@import 'plastic_colors.less';
@import '../slack_kit/slack_kit_colors.less';

@transparent_outline_text_color: fade(@white, 90%);

// Buttons
.btn {
  // Color
  background: @seafoam_green;
  color: @white;

  // Text
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 900;
  .user-select(none);
  text-decoration: none;
  cursor: pointer;
  text-shadow: 0 1px 1px fade(@black, 10%);

  // Border
  border: none;
  .rounded(0.25rem);
  .box-shadow(none);

  // Alignment
  position: relative;
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
  white-space: nowrap;
  margin: 0;

  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    .rounded(0.25rem);
  }
}
// this is to override the default link color of <a> buttons
a.btn {
  color: @white;
}

// States
.no_touch {
  .btn:hover,
  .btn.hover,
  .btn:focus {
    outline: none;
    text-decoration: none;
  }
}
.btn:hover,
.btn.hover,
.btn:focus {
  background: @seafoam_green;
  color: @white;

  &:after {
    box-shadow: inset 0 -2px fade(@black, 25%);
  }
}
.btn:active,
.btn.active {
  color: @white;

  &:after {
    box-shadow: inset 0 2px 1px fade(@black, 20%);
  }
}

// Secondary / Outlined
.btn_outline {
  background: @neutral_grey;
  color: @indifferent_grey !important;
  font-weight: 700;
  text-shadow: none;

  &:after {
    border: 1px solid @sk_soft_gray_hex;
  }

  &.btn_transparent {
    background-color: transparent !important;
    color: @transparent_outline_text_color !important;

    &:after {
      border: 1px solid fade(@white, 50%);
    }

    &:hover,
    &.hover,
    &:focus,
    &:active,
    &.active {
      color: @blue_link !important;
      background: fade(@white, 90%) !important;

      &:after {
        box-shadow: none;
        border-color: transparent;
      }
    }

    &:active,
    &.active {
      background-color: fade(@white, 80%) !important;
    }
  }
}
.btn_outline:hover,
.btn_outline.hover,
.btn_outline:focus {
  background: @white;
  color: @blue_link !important;

  &:after {
    box-shadow: none;
  }
}
.btn_outline:active {
  color: @blue_link;

  &:after {
    box-shadow: inset 0 1px 1px fade(@black, 20%);
  }
}
.btn_outline.active {
  color: #666 !important;
  margin-top: 0;
  font-weight: 900;
}
.btn.btn_outline.btn_warning,
.btn.btn_outline.btn_danger {
  background: @neutral_grey !important;
}
.btn.btn_outline.btn_warning,
.btn.btn_outline.btn_danger {
  &:hover,
  &:focus {
    background: @white !important;
  }
}
.btn.btn_outline.btn_warning {
  &:hover,
  &:focus {
    color: @mustard_yellow !important;

    &:after {
      border-color: @mustard_yellow;
    }
  }
}
.btn.btn_outline.btn_danger {
  &:hover,
  &:focus {
    color: @candy_red !important;

    &:after {
      border-color: @candy_red;
    }
  }
}

.btn.btn_outline.disabled,
.btn.btn_outline.disabled:hover {
  color: @sk_dark_gray_hex !important;
  background: @white !important;
}

.btn_unstyle {
  background: none;
  border: none;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  outline: 0; // TODO: Temporarily remove the focus outline until design for focus styles are complete (A11Y-381)
}

// Basic button to be based on \`btn_unstyle\` with hover and focus states
.btn_basic {
  .btn_unstyle;
  outline: 0;
  color: inherit;

  &:hover,
  &:focus {
    color: @blue_hover;
  }
}

// Button to look like a link while maintaining button behaviors
.btn_link {
  .btn_unstyle;
  outline: 0;
  color: @blue_link;
  vertical-align: baseline;
  cursor: pointer;

  &:hover,
  &:focus {
    color: @blue_hover;
    text-decoration: underline;
  }
}

// Border Buttons
.btn.btn_border {
  background: transparent;
  border: 2px solid @white;

  &:after {
    box-shadow: none;
  }
}

// Disabled
.btn.disabled,
.btn.disabled:hover,
.btn.disabled:active,
.btn:disabled,
.btn:disabled:hover,
.btn:disabled:active {
  background-color: @sk_soft_gray_hex !important;
  color: fade(@sk_black, 75%);
  text-shadow: none;
  .box-shadow(none) !important;
  pointer-events: none;
}

// Sizes
.btn {
  padding: 8px 14px 9px;
  font-size: 15px;
}
.btn_small {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;

  i:before {
    font-size: 15px;
  }
}
`,`//
// PLASTIC
// Elements
// A set of useful LESS mixins
//
// LESS Elements 0.9 \u2014 more info at: http://lesselements.com
//

.passthrough() {
  -ms-pointer-events: none;
  -webkit-pointer-events: none;
  pointer-events: none;
}

.captureall() {
  -ms-pointer-events: all;
  -webkit-pointer-events: all;
  pointer-events: all;
}

.rounded(@radius: 2px) {
  border-radius: @radius;
}
.border-radius(@topleft: 0, @topright: 0, @bottomright: 0, @bottomleft: 0) {
  border-top-right-radius: @topright;
  border-bottom-right-radius: @bottomright;
  border-bottom-left-radius: @bottomleft;
  border-top-left-radius: @topleft;
  .background-clip(padding-box);
}
.column-count(@count: 2) {
  -moz-column-count: @count;
  -webkit-column-count: @count;
  column-count: @count;
}
.opacity(@opacity: 0.5) {
  opacity: @opacity;
  -moz-opacity: @opacity;
  -khtml-opacity: @opacity;
}
.blur(@radius) {
  -webkit-filter: blur(@radius);
  -moz-filter: blur(@radius);
  -o-filter: blur(@radius);
  -ms-filter: blur(@radius);
  filter: blur(@radius);
}
.transform(...) {
  -webkit-transform: @arguments;
  -moz-transform: @arguments;
  -ms-transform: @arguments;
  transform: @arguments;
}
.rotate(@deg) {
  .transform(rotate(@deg));
}
.transform-origin(...) {
  -webkit-transform-origin: @arguments;
  transform-origin: @arguments;
}
// Delay default is to workaround a bug in our LESS compiler / YUI compressor. See https://tinyspeck.slack.com/archives/dhtml/p1430338710000886
.transition(@property:all, @duration:0.2s, @ease:ease-out, @delay:0.0000001ms) {
  -webkit-transition: @property @duration @ease @delay;
  -moz-transition: @property @duration @ease @delay;
  transition: @property @duration @ease @delay;
}
.transition(@arguments) {
  -webkit-transition: @arguments;
  -moz-transition: @arguments;
  transition: @arguments;
}
.transition-transform(@duration:0.2s, @ease:ease-out) {
  -webkit-transition: -webkit-transform @duration @ease;
  -moz-transition: -moz-transform @duration @ease;
  transition: transform @duration @ease;
}
.transition-delay(@arguments) {
  -webkit-transition-delay: @arguments;
  -moz-transition-delay: @arguments;
  transition-delay: @arguments;
}
.transition-duration(@arguments) {
  -webkit-transition-duration: @arguments;
  -moz-transition-duration: @arguments;
  transition-duration: @arguments;
}
.inner-shadow(@horizontal:0, @vertical:1px, @blur:2px, @alpha: 0.4) {
  box-shadow: inset @horizontal @vertical @blur rgba(0, 0, 0, @alpha);
}
.box-shadow(@arguments) {
  box-shadow: @arguments;
}
.box-sizing(@sizing: border-box) {
  -ms-box-sizing: @sizing;
  -moz-box-sizing: @sizing;
  -webkit-box-sizing: @sizing;
  box-sizing: @sizing;
}
.user-select(@argument: none) {
  -webkit-user-select: @argument;
  -moz-user-select: @argument;
  -ms-user-select: @argument;
  user-select: @argument;
}
.background-clip(@argument: padding-box) {
  background-clip: @argument;
}
.filter(@arguments) {
  -webkit-filter: @arguments;
  -ms-filter: @arguments;
  filter: @arguments;
}

.placeholder(@color) {
  &::-webkit-input-placeholder {
    color: @color;
  }
  &::-moz-placeholder {
    color: @color;
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: @color;
  }
  &:-moz-placeholder {
    color: @color;
    opacity: 1;
  }
}

// Apply text-overflow: ellipsis; behaviour to multiple lines. Not supported in IE/FF.
.multiline_ellipsis(@num_lines) {
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-line-clamp: @num_lines !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
}

.responsive_bg_image(@url, @pos: center center, @repeat: no-repeat, @size: cover, @ret: '@2x') {
  background-position: @pos;
  background-repeat: @repeat;
  background-size: @size;

  background-image: url(@url);
  @media @retina {
    // add '@2x' or whatever the page default is
    @ret_1x: replace(@url, '_1x', '');
    @ret_png: replace(@ret_1x, '.png', ~'@{ret}.png');
    @ret_png_or_jpg: replace(@ret_png, '.jpg', ~'@{ret}.jpg');
    background-image: url(@ret_png_or_jpg);
  }
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// DEPRECATED FLEXBOX MIXINS -- Don't use
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.display-flex() {
  display: flex;
}
.display-inline-flex() {
  display: inline-flex;
}
.flex-direction(@direction) {
  flex-direction: @direction;
}
.flex-basis(@prop) {
  flex-basis: @prop;
}
.align-items(flex-start) {
  align-items: flex-start;
}
.align-items(flex-end) {
  align-items: flex-end;
}
.align-items(center) {
  align-items: center;
}
.align-items(baseline) {
  align-items: baseline;
}
.align-items(stretch) {
  align-items: stretch;
}
.align-items(@arg) {
  align-items: @arg;
}
.align-self(@arg) {
  align-self: @arg;
}
.justify-content(flex-start) {
  -ms-flex-pack: start;
  -webkit-box-pack: start;
}
.justify-content(flex-end) {
  -ms-flex-pack: end;
  -webkit-box-pack: end;
}
.justify-content(center) {
  -ms-flex-pack: center;
  -webkit-box-pack: center;
}
.justify-content(space-between) {
  -ms-flex-pack: justify;
  -webkit-box-pack: justify;
}
.justify-content(space-around) {
  -ms-flex-pack: distribute;
  -webkit-box-pack: distribute;
}
.justify-content(@arg) {
  -webkit-justify-content: @arg;
  -moz-justify-content: @arg;
  justify-content: @arg;
}
.flex(@arg) {
  flex: @arg;
}
.flex-wrap(@arg) {
  flex-wrap: @arg;
}
.flex-flow(@arg) {
  flex-flow: @arg;
}
.flex-order(@arg) {
  order: @arg;
}
.flex-grow(@arg) {
  flex-grow: @arg;
}
.flex-shrink(@arg) {
  flex-shrink: @arg;
}
.cursor-grab() {
  cursor: -webkit-grab;
  cursor: -mox-grab;
  cursor: grab;
}
.cursor-grabbing() {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: grabbing;
}
`],sourceRoot:""}]);const Ye=Q},8843(m){"use strict";m.exports=function(p){var u=[];return u.toString=function(){return this.map(function(F){var g="",B=typeof F[5]<"u";return F[4]&&(g+="@supports (".concat(F[4],") {")),F[2]&&(g+="@media ".concat(F[2]," {")),B&&(g+="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {")),g+=p(F),B&&(g+="}"),F[2]&&(g+="}"),F[4]&&(g+="}"),g}).join("")},u.i=function(F,g,B,C,x){typeof F=="string"&&(F=[[null,F,void 0]]);var P={};if(B)for(var O=0;O<this.length;O++){var U=this[O][0];U!=null&&(P[U]=!0)}for(var j=0;j<F.length;j++){var T=[].concat(F[j]);B&&P[T[0]]||(typeof x<"u"&&(typeof T[5]>"u"||(T[1]="@layer".concat(T[5].length>0?" ".concat(T[5]):""," {").concat(T[1],"}")),T[5]=x),g&&(T[2]&&(T[1]="@media ".concat(T[2]," {").concat(T[1],"}")),T[2]=g),C&&(T[4]?(T[1]="@supports (".concat(T[4],") {").concat(T[1],"}"),T[4]=C):T[4]="".concat(C)),u.push(T))}},u}},5858(m){"use strict";m.exports=function(p,u){return u||(u={}),p&&(p=String(p.__esModule?p.default:p),/^['"].*['"]$/.test(p)&&(p=p.slice(1,-1)),u.hash&&(p+=u.hash),/["'() \t\n]|(%20)/.test(p)||u.needQuotes?'"'.concat(p.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):p)}},2845(m){"use strict";m.exports=function(p){var u=p[1],v=p[3];if(!v)return u;if(typeof btoa=="function"){var F=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),g="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(F),B="/*# ".concat(g," */");return[u].concat([B]).join(`
`)}return[u].join(`
`)}},3869(m,p,u){"use strict";var v=u(4717),F={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},g={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},B={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},C={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},x={};x[v.ForwardRef]=B,x[v.Memo]=C;function P($){return v.isMemo($)?C:x[$.$$typeof]||F}var O=Object.defineProperty,U=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,T=Object.getOwnPropertyDescriptor,G=Object.getPrototypeOf,W=Object.prototype;function z($,Q,K){if(typeof Q!="string"){if(W){var en=G(Q);en&&en!==W&&z($,en,K)}var q=U(Q);j&&(q=q.concat(j(Q)));for(var D=P($),b=P(Q),_=0;_<q.length;++_){var tn=q[_];if(!g[tn]&&!(K&&K[tn])&&!(b&&b[tn])&&!(D&&D[tn])){var Mn=T(Q,tn);try{O($,tn,Mn)}catch{}}}}return $}m.exports=z},5889(m,p){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=typeof Symbol=="function"&&Symbol.for,v=u?Symbol.for("react.element"):60103,F=u?Symbol.for("react.portal"):60106,g=u?Symbol.for("react.fragment"):60107,B=u?Symbol.for("react.strict_mode"):60108,C=u?Symbol.for("react.profiler"):60114,x=u?Symbol.for("react.provider"):60109,P=u?Symbol.for("react.context"):60110,O=u?Symbol.for("react.async_mode"):60111,U=u?Symbol.for("react.concurrent_mode"):60111,j=u?Symbol.for("react.forward_ref"):60112,T=u?Symbol.for("react.suspense"):60113,G=u?Symbol.for("react.suspense_list"):60120,W=u?Symbol.for("react.memo"):60115,z=u?Symbol.for("react.lazy"):60116,$=u?Symbol.for("react.block"):60121,Q=u?Symbol.for("react.fundamental"):60117,K=u?Symbol.for("react.responder"):60118,en=u?Symbol.for("react.scope"):60119;function q(b){if(typeof b=="object"&&b!==null){var _=b.$$typeof;switch(_){case v:switch(b=b.type,b){case O:case U:case g:case C:case B:case T:return b;default:switch(b=b&&b.$$typeof,b){case P:case j:case z:case W:case x:return b;default:return _}}case F:return _}}}function D(b){return q(b)===U}p.AsyncMode=O,p.ConcurrentMode=U,p.ContextConsumer=P,p.ContextProvider=x,p.Element=v,p.ForwardRef=j,p.Fragment=g,p.Lazy=z,p.Memo=W,p.Portal=F,p.Profiler=C,p.StrictMode=B,p.Suspense=T,p.isAsyncMode=function(b){return D(b)||q(b)===O},p.isConcurrentMode=D,p.isContextConsumer=function(b){return q(b)===P},p.isContextProvider=function(b){return q(b)===x},p.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===v},p.isForwardRef=function(b){return q(b)===j},p.isFragment=function(b){return q(b)===g},p.isLazy=function(b){return q(b)===z},p.isMemo=function(b){return q(b)===W},p.isPortal=function(b){return q(b)===F},p.isProfiler=function(b){return q(b)===C},p.isStrictMode=function(b){return q(b)===B},p.isSuspense=function(b){return q(b)===T},p.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===g||b===U||b===C||b===B||b===T||b===G||typeof b=="object"&&b!==null&&(b.$$typeof===z||b.$$typeof===W||b.$$typeof===x||b.$$typeof===P||b.$$typeof===j||b.$$typeof===Q||b.$$typeof===K||b.$$typeof===en||b.$$typeof===$)},p.typeOf=q},4717(m,p,u){"use strict";m.exports=u(5889)},3475(m,p,u){"use strict";var v=u(9572);function F(){}function g(){}g.resetWarningCache=F,m.exports=function(){function B(P,O,U,j,T,G){if(G!==v){var W=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw W.name="Invariant Violation",W}}B.isRequired=B;function C(){return B}var x={array:B,bool:B,func:B,number:B,object:B,string:B,symbol:B,any:B,arrayOf:C,element:B,elementType:B,instanceOf:C,node:B,objectOf:C,oneOf:C,oneOfType:C,shape:C,exact:C,checkPropTypes:g,resetWarningCache:F};return x.PropTypes=x,x}},4031(m,p,u){if(0)var v,F;else m.exports=u(3475)()},9572(m){"use strict";var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";m.exports=p},6988(m,p){"use strict";var u;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=typeof Symbol=="function"&&Symbol.for,F=v?Symbol.for("react.element"):60103,g=v?Symbol.for("react.portal"):60106,B=v?Symbol.for("react.fragment"):60107,C=v?Symbol.for("react.strict_mode"):60108,x=v?Symbol.for("react.profiler"):60114,P=v?Symbol.for("react.provider"):60109,O=v?Symbol.for("react.context"):60110,U=v?Symbol.for("react.async_mode"):60111,j=v?Symbol.for("react.concurrent_mode"):60111,T=v?Symbol.for("react.forward_ref"):60112,G=v?Symbol.for("react.suspense"):60113,W=v?Symbol.for("react.suspense_list"):60120,z=v?Symbol.for("react.memo"):60115,$=v?Symbol.for("react.lazy"):60116,Q=v?Symbol.for("react.block"):60121,K=v?Symbol.for("react.fundamental"):60117,en=v?Symbol.for("react.responder"):60118,q=v?Symbol.for("react.scope"):60119;function D(_){if(typeof _=="object"&&_!==null){var tn=_.$$typeof;switch(tn){case F:switch(_=_.type,_){case U:case j:case B:case x:case C:case G:return _;default:switch(_=_&&_.$$typeof,_){case O:case T:case $:case z:case P:return _;default:return tn}}case g:return tn}}}function b(_){return D(_)===j}u=U,u=j,u=O,u=P,u=F,u=T,u=B,u=$,u=z,u=g,u=x,u=C,u=G,u=function(_){return b(_)||D(_)===U},u=b,u=function(_){return D(_)===O},u=function(_){return D(_)===P},u=function(_){return typeof _=="object"&&_!==null&&_.$$typeof===F},u=function(_){return D(_)===T},u=function(_){return D(_)===B},u=function(_){return D(_)===$},u=function(_){return D(_)===z},u=function(_){return D(_)===g},u=function(_){return D(_)===x},u=function(_){return D(_)===C},u=function(_){return D(_)===G},u=function(_){return typeof _=="string"||typeof _=="function"||_===B||_===j||_===x||_===C||_===G||_===W||typeof _=="object"&&_!==null&&(_.$$typeof===$||_.$$typeof===z||_.$$typeof===P||_.$$typeof===O||_.$$typeof===T||_.$$typeof===K||_.$$typeof===en||_.$$typeof===q||_.$$typeof===Q)},u=D},5376(m,p,u){"use strict";u(6988)},403(m){"use strict";var p=[];function u(g){for(var B=-1,C=0;C<p.length;C++)if(p[C].identifier===g){B=C;break}return B}function v(g,B){for(var C={},x=[],P=0;P<g.length;P++){var O=g[P],U=B.base?O[0]+B.base:O[0],j=C[U]||0,T="".concat(U," ").concat(j);C[U]=j+1;var G=u(T),W={css:O[1],media:O[2],sourceMap:O[3],supports:O[4],layer:O[5]};if(G!==-1)p[G].references++,p[G].updater(W);else{var z=F(W,B);B.byIndex=P,p.splice(P,0,{identifier:T,updater:z,references:1})}x.push(T)}return x}function F(g,B){var C=B.domAPI(B);C.update(g);var x=function(O){if(O){if(O.css===g.css&&O.media===g.media&&O.sourceMap===g.sourceMap&&O.supports===g.supports&&O.layer===g.layer)return;C.update(g=O)}else C.remove()};return x}m.exports=function(g,B){B=B||{},g=g||[];var C=v(g,B);return function(P){P=P||[];for(var O=0;O<C.length;O++){var U=C[O],j=u(U);p[j].references--}for(var T=v(P,B),G=0;G<C.length;G++){var W=C[G],z=u(W);p[z].references===0&&(p[z].updater(),p.splice(z,1))}C=T}}},7380(m){"use strict";var p={};function u(F){if(typeof p[F]>"u"){var g=document.querySelector(F);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch{g=null}p[F]=g}return p[F]}function v(F,g){var B=u(F);if(!B)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");B.appendChild(g)}m.exports=v},7031(m){"use strict";function p(u){var v=document.createElement("style");return u.setAttributes(v,u.attributes),u.insert(v,u.options),v}m.exports=p},211(m,p,u){"use strict";function v(F){var g=u.nc;g&&F.setAttribute("nonce",g)}m.exports=v},2792(m){"use strict";function p(F,g,B){var C="";B.supports&&(C+="@supports (".concat(B.supports,") {")),B.media&&(C+="@media ".concat(B.media," {"));var x=typeof B.layer<"u";x&&(C+="@layer".concat(B.layer.length>0?" ".concat(B.layer):""," {")),C+=B.css,x&&(C+="}"),B.media&&(C+="}"),B.supports&&(C+="}");var P=B.sourceMap;P&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(P))))," */")),g.styleTagTransform(C,F,g.options)}function u(F){if(F.parentNode===null)return!1;F.parentNode.removeChild(F)}function v(F){var g=F.insertStyleElement(F);return{update:function(C){p(g,F,C)},remove:function(){u(g)}}}m.exports=v},1684(m){"use strict";function p(u,v){if(v.styleSheet)v.styleSheet.cssText=u;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(u))}}m.exports=p},6723(m,p,u){"use strict";m.exports=u.p+"slack-icons-v25aaab12924ee17421031.woff2"},9138(m,p,u){"use strict";m.exports=u.p+"lato-blackd3e44e6115ad32c37176.woff2"},4392(m,p,u){"use strict";m.exports=u.p+"lato-bold31816c24a18fbc659282.woff2"},7(m,p,u){"use strict";m.exports=u.p+"lato-italic-black62bc5da14d9c6ff41e5f.woff2"},5959(m,p,u){"use strict";m.exports=u.p+"lato-italic-bold365ea5a303e2259ca5ab.woff2"},5906(m,p,u){"use strict";m.exports=u.p+"lato-italic-light074c7fc38126bb94664d.woff2"},9269(m,p,u){"use strict";m.exports=u.p+"lato-italic4484c4211566a05bd71b.woff2"},5539(m,p,u){"use strict";m.exports=u.p+"lato-light2815bd9ba07f2cbe781a.woff2"},4603(m,p,u){"use strict";m.exports=u.p+"lato-regularf1aa7a0753149183efa2.woff2"}},un={};function I(m){var p=un[m];if(p!==void 0)return p.exports;var u=un[m]={id:m,exports:{}};return _n[m](u,u.exports,I),u.exports}I.m=_n,I.n=m=>{var p=m&&m.__esModule?()=>m.default:()=>m;return I.d(p,{a:p}),p},I.d=(m,p)=>{for(var u in p)I.o(p,u)&&!I.o(m,u)&&Object.defineProperty(m,u,{enumerable:!0,get:p[u]})},I.o=(m,p)=>Object.prototype.hasOwnProperty.call(m,p),I.r=m=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(m,"__esModule",{value:!0})},I.p="./",(()=>{I.b=typeof document<"u"&&document.baseURI||self.location.href;var m={102:0}})(),I.nc=void 0;var Ht={};(()=>{"use strict";I.r(Ht),I.d(Ht,{NetLogWindow:()=>cl});var m={};I.r(m),I.d(m,{uA:()=>b,FK:()=>D,Ob:()=>Fi,q6:()=>vi,n:()=>K,_3:()=>q,Qv:()=>Yt,fF:()=>g,XX:()=>Yn,v2:()=>En});var p={};I.r(p),I.d(p,{FunctionToString:()=>vu,InboundFilters:()=>wu,LinkedErrors:()=>Yu});var u={};I.r(u),I.d(u,{Breadcrumbs:()=>JE,Dedupe:()=>ZE,GlobalHandlers:()=>AE,HttpContext:()=>XE,LinkedErrors:()=>VE,TryCatch:()=>bE});var v={};I.r(v),I.d(v,{EventToMain:()=>xt,ScopeToMain:()=>cd});var F,g,B,C,x,P,O,U,j,T={},G=[],W=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,z=Array.isArray;function $(n,e){for(var t in e)n[t]=e[t];return n}function Q(n){var e=n.parentNode;e&&e.removeChild(n)}function K(n,e,t){var o,i,r,c={};for(r in e)r=="key"?o=e[r]:r=="ref"?i=e[r]:c[r]=e[r];if(arguments.length>2&&(c.children=arguments.length>3?F.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(r in n.defaultProps)c[r]===void 0&&(c[r]=n.defaultProps[r]);return en(n,c,o,i,null)}function en(n,e,t,o,i){var r={type:n,props:e,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++B,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(r),r}function q(){return{current:null}}function D(n){return n.children}function b(n,e){this.props=n,this.context=e}function _(n,e){if(e==null)return n.__?_(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?_(n):null}function tn(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return tn(n)}}function Mn(n){(!n.__d&&(n.__d=!0)&&x.push(n)&&!jn.__r++||P!==g.debounceRendering)&&((P=g.debounceRendering)||O)(jn)}function jn(){var n,e,t,o,i,r,c,a,l;for(x.sort(U);n=x.shift();)n.__d&&(e=x.length,o=void 0,r=(i=(t=n).__v).__e,a=[],l=[],(c=t.__P)&&((o=$({},i)).__v=i.__v+1,g.vnode&&g.vnode(o),Gt(c,o,i,t.__n,c.ownerSVGElement!==void 0,32&i.__u?[r]:null,a,r??_(i),!!(32&i.__u),l),o.__.__k[o.__i]=o,yi(a,o,l),o.__e!=r&&tn(o)),x.length>e&&x.sort(U));jn.__r=0}function Ye(n,e,t,o,i,r,c,a,l,s,f){var A,d,E,h,S,y=o&&o.__k||G,k=e.length;for(t.__d=l,dl(t,e,y),l=t.__d,A=0;A<k;A++)(E=t.__k[A])!=null&&typeof E!="boolean"&&typeof E!="function"&&(d=E.__i===-1?T:y[E.__i]||T,E.__i=A,Gt(n,E,d,i,r,c,a,l,s,f),h=E.__e,E.ref&&d.ref!=E.ref&&(d.ref&&Wt(d.ref,null,E),f.push(E.ref,E.__c||h,E)),S==null&&h!=null&&(S=h),65536&E.__u||d.__k===E.__k?l=_i(E,l,n):typeof E.type=="function"&&E.__d!==void 0?l=E.__d:h&&(l=h.nextSibling),E.__d=void 0,E.__u&=-196609);t.__d=l,t.__e=S}function dl(n,e,t){var o,i,r,c,a,l=e.length,s=t.length,f=s,A=0;for(n.__k=[],o=0;o<l;o++)(i=n.__k[o]=(i=e[o])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?en(null,i,null,null,i):z(i)?en(D,{children:i},null,null,null):i.__b>0?en(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=n,i.__b=n.__b+1,a=gl(i,t,c=o+A,f),i.__i=a,r=null,a!==-1&&(f--,(r=t[a])&&(r.__u|=131072)),r==null||r.__v===null?(a==-1&&A--,typeof i.type!="function"&&(i.__u|=65536)):a!==c&&(a===c+1?A++:a>c?f>l-c?A+=a-c:A--:A=a<c&&a==c-1?a-c:0,a!==o+A&&(i.__u|=65536))):(r=t[o])&&r.key==null&&r.__e&&(r.__e==n.__d&&(n.__d=_(r)),Kt(r,r,!1),t[o]=null,f--);if(f)for(o=0;o<s;o++)(r=t[o])!=null&&!(131072&r.__u)&&(r.__e==n.__d&&(n.__d=_(r)),Kt(r,r))}function _i(n,e,t){var o,i;if(typeof n.type=="function"){for(o=n.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=n,e=_i(o[i],e,t));return e}return n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e),e&&e.nextSibling}function En(n,e){return e=e||[],n==null||typeof n=="boolean"||(z(n)?n.some(function(t){En(t,e)}):e.push(n)),e}function gl(n,e,t,o){var i=n.key,r=n.type,c=t-1,a=t+1,l=e[t];if(l===null||l&&i==l.key&&r===l.type)return t;if(o>(l!=null&&!(131072&l.__u)?1:0))for(;c>=0||a<e.length;){if(c>=0){if((l=e[c])&&!(131072&l.__u)&&i==l.key&&r===l.type)return c;c--}if(a<e.length){if((l=e[a])&&!(131072&l.__u)&&i==l.key&&r===l.type)return a;a++}}return-1}function hi(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||W.test(e)?t:t+"px"}function Ve(n,e,t,o,i){var r;n:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof o=="string"&&(n.style.cssText=o=""),o)for(e in o)t&&e in t||hi(n.style,e,"");if(t)for(e in t)o&&t[e]===o[e]||hi(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")r=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+r]=t,t?o?t.u=o.u:(t.u=Date.now(),n.addEventListener(e,r?Bi:mi,r)):n.removeEventListener(e,r?Bi:mi,r);else{if(i)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in n)try{n[e]=t??"";break n}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,t))}}function mi(n){var e=this.l[n.type+!1];if(n.t){if(n.t<=e.u)return}else n.t=Date.now();return e(g.event?g.event(n):n)}function Bi(n){return this.l[n.type+!0](g.event?g.event(n):n)}function Gt(n,e,t,o,i,r,c,a,l,s){var f,A,d,E,h,S,y,k,R,V,ln,on,Dn,nn,wn,X=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[a=e.__e=t.__e]),(f=g.__b)&&f(e);n:if(typeof X=="function")try{if(k=e.props,R=(f=X.contextType)&&o[f.__c],V=f?R?R.props.value:f.__:o,t.__c?y=(A=e.__c=t.__c).__=A.__E:("prototype"in X&&X.prototype.render?e.__c=A=new X(k,V):(e.__c=A=new b(k,V),A.constructor=X,A.render=bl),R&&R.sub(A),A.props=k,A.state||(A.state={}),A.context=V,A.__n=o,d=A.__d=!0,A.__h=[],A._sb=[]),A.__s==null&&(A.__s=A.state),X.getDerivedStateFromProps!=null&&(A.__s==A.state&&(A.__s=$({},A.__s)),$(A.__s,X.getDerivedStateFromProps(k,A.__s))),E=A.props,h=A.state,A.__v=e,d)X.getDerivedStateFromProps==null&&A.componentWillMount!=null&&A.componentWillMount(),A.componentDidMount!=null&&A.__h.push(A.componentDidMount);else{if(X.getDerivedStateFromProps==null&&k!==E&&A.componentWillReceiveProps!=null&&A.componentWillReceiveProps(k,V),!A.__e&&(A.shouldComponentUpdate!=null&&A.shouldComponentUpdate(k,A.__s,V)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(A.props=k,A.state=A.__s,A.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(Sn){Sn&&(Sn.__=e)}),ln=0;ln<A._sb.length;ln++)A.__h.push(A._sb[ln]);A._sb=[],A.__h.length&&c.push(A);break n}A.componentWillUpdate!=null&&A.componentWillUpdate(k,A.__s,V),A.componentDidUpdate!=null&&A.__h.push(function(){A.componentDidUpdate(E,h,S)})}if(A.context=V,A.props=k,A.__P=n,A.__e=!1,on=g.__r,Dn=0,"prototype"in X&&X.prototype.render){for(A.state=A.__s,A.__d=!1,on&&on(e),f=A.render(A.props,A.state,A.context),nn=0;nn<A._sb.length;nn++)A.__h.push(A._sb[nn]);A._sb=[]}else do A.__d=!1,on&&on(e),f=A.render(A.props,A.state,A.context),A.state=A.__s;while(A.__d&&++Dn<25);A.state=A.__s,A.getChildContext!=null&&(o=$($({},o),A.getChildContext())),d||A.getSnapshotBeforeUpdate==null||(S=A.getSnapshotBeforeUpdate(E,h)),Ye(n,z(wn=f!=null&&f.type===D&&f.key==null?f.props.children:f)?wn:[wn],e,t,o,i,r,c,a,l,s),A.base=e.__e,e.__u&=-161,A.__h.length&&c.push(A),y&&(A.__E=A.__=null)}catch(Sn){e.__v=null,l||r!=null?(e.__e=a,e.__u|=l?160:32,r[r.indexOf(a)]=null):(e.__e=t.__e,e.__k=t.__k),g.__e(Sn,e,t)}else r==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=pl(t.__e,e,t,o,i,r,c,l,s);(f=g.diffed)&&f(e)}function yi(n,e,t){e.__d=void 0;for(var o=0;o<t.length;o++)Wt(t[o],t[++o],t[++o]);g.__c&&g.__c(e,n),n.some(function(i){try{n=i.__h,i.__h=[],n.some(function(r){r.call(i)})}catch(r){g.__e(r,i.__v)}})}function pl(n,e,t,o,i,r,c,a,l){var s,f,A,d,E,h,S,y=t.props,k=e.props,R=e.type;if(R==="svg"&&(i=!0),r!=null){for(s=0;s<r.length;s++)if((E=r[s])&&"setAttribute"in E==!!R&&(R?E.localName===R:E.nodeType===3)){n=E,r[s]=null;break}}if(n==null){if(R===null)return document.createTextNode(k);n=i?document.createElementNS("http://www.w3.org/2000/svg",R):document.createElement(R,k.is&&k),r=null,a=!1}if(R===null)y===k||a&&n.data===k||(n.data=k);else{if(r=r&&F.call(n.childNodes),y=t.props||T,!a&&r!=null)for(y={},s=0;s<n.attributes.length;s++)y[(E=n.attributes[s]).name]=E.value;for(s in y)E=y[s],s=="children"||(s=="dangerouslySetInnerHTML"?A=E:s==="key"||s in k||Ve(n,s,null,E,i));for(s in k)E=k[s],s=="children"?d=E:s=="dangerouslySetInnerHTML"?f=E:s=="value"?h=E:s=="checked"?S=E:s==="key"||a&&typeof E!="function"||y[s]===E||Ve(n,s,E,y[s],i);if(f)a||A&&(f.__html===A.__html||f.__html===n.innerHTML)||(n.innerHTML=f.__html),e.__k=[];else if(A&&(n.innerHTML=""),Ye(n,z(d)?d:[d],e,t,o,i&&R!=="foreignObject",r,c,r?r[0]:t.__k&&_(t,0),a,l),r!=null)for(s=r.length;s--;)r[s]!=null&&Q(r[s]);a||(s="value",h!==void 0&&(h!==n[s]||R==="progress"&&!h||R==="option"&&h!==y[s])&&Ve(n,s,h,y[s],!1),s="checked",S!==void 0&&S!==n[s]&&Ve(n,s,S,y[s],!1))}return n}function Wt(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(o){g.__e(o,t)}}function Kt(n,e,t){var o,i;if(g.unmount&&g.unmount(n),(o=n.ref)&&(o.current&&o.current!==n.__e||Wt(o,null,e)),(o=n.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){g.__e(r,e)}o.base=o.__P=null,n.__c=void 0}if(o=n.__k)for(i=0;i<o.length;i++)o[i]&&Kt(o[i],e,t||typeof n.type!="function");t||n.__e==null||Q(n.__e),n.__=n.__e=n.__d=void 0}function bl(n,e,t){return this.constructor(n,t)}function Yn(n,e,t){var o,i,r,c;g.__&&g.__(n,e),i=(o=typeof t=="function")?null:t&&t.__k||e.__k,r=[],c=[],Gt(e,n=(!o&&t||e).__k=K(D,null,[n]),i||T,T,e.ownerSVGElement!==void 0,!o&&t?[t]:i?null:e.firstChild?F.call(e.childNodes):null,r,!o&&t?t:i?i.__e:e.firstChild,o,c),yi(r,n,c)}function Yt(n,e){Yn(n,e,Yt)}function Fi(n,e,t){var o,i,r,c,a=$({},n.props);for(r in n.type&&n.type.defaultProps&&(c=n.type.defaultProps),e)r=="key"?o=e[r]:r=="ref"?i=e[r]:a[r]=e[r]===void 0&&c!==void 0?c[r]:e[r];return arguments.length>2&&(a.children=arguments.length>3?F.call(arguments,2):t),en(n.type,a,o||n.key,i||n.ref,null)}function vi(n,e){var t={__c:e="__cC"+j++,__:n,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&i.some(function(a){a.__e=!0,Mn(a)})},this.sub=function(c){i.push(c);var a=c.componentWillUnmount;c.componentWillUnmount=function(){i.splice(i.indexOf(c),1),a&&a.call(c)}}),o.children}};return t.Provider.__=t.Consumer.contextType=t}F=G.slice,g={__e:function(n,e,t,o){for(var i,r,c;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(n)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(n,o||{}),c=i.__d),c)return i.__E=i}catch(a){n=a}throw n}},B=0,C=function(n){return n!=null&&n.constructor==null},b.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=$({},this.state),typeof n=="function"&&(n=n($({},t),this.props)),n&&$(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Mn(this))},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Mn(this))},b.prototype.render=D,x=[],O=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,U=function(n,e){return n.__v.__b-e.__v.__b},jn.__r=0,j=0;var _l,Ci,hl=/["&<]/;function ki(n){if(n.length===0||hl.test(n)===!1)return n;for(var e=0,t=0,o="",i="";t<n.length;t++){switch(n.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}t!==e&&(o+=n.slice(e,t)),o+=i,e=t+1}return t!==e&&(o+=n.slice(e,t)),o}var ml=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Bl=0,yl=Array.isArray;function dn(n,e,t,o,i,r){var c,a,l={};for(a in e)a=="ref"?c=e[a]:l[a]=e[a];var s={type:n,props:l,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Bl,__i:-1,__u:0,__source:i,__self:r};if(typeof n=="function"&&(c=n.defaultProps))for(a in c)l[a]===void 0&&(l[a]=c[a]);return g.vnode&&g.vnode(s),s}function Ym(n){var e=dn(_l,{tpl:n,exprs:[].slice.call(arguments,1)});return e.key=e.__v,e}var wi={},Fl=/[A-Z]/g;function Vm(n,e){if(Ci.attr){var t=Ci.attr(n,e);if(typeof t=="string")return t}if(n==="ref"||n==="key")return"";if(n==="style"&&typeof e=="object"){var o="";for(var i in e){var r=e[i];if(r!=null&&r!==""){var c=i[0]=="-"?i:wi[i]||(wi[i]=i.replace(Fl,"-$&").toLowerCase()),a=";";typeof r!="number"||c.startsWith("--")||ml.test(c)||(a="px;"),o=o+c+":"+r+a}}return n+'="'+o+'"'}return e==null||e===!1||typeof e=="function"||typeof e=="object"?"":e===!0?n:n+'="'+ki(e)+'"'}function vl(n){if(n==null||typeof n=="boolean"||typeof n=="function")return null;if(typeof n=="object"){if(n.constructor===void 0)return n;if(yl(n)){for(var e=0;e<n.length;e++)n[e]=vl(n[e]);return n}}return ki(""+n)}var Cl=I(403),kl=I.n(Cl),wl=I(2792),Sl=I.n(wl),xl=I(7380),Tl=I.n(xl),Il=I(211),Ol=I.n(Il),Rl=I(7031),Pl=I.n(Rl),Dl=I(1684),Nl=I.n(Dl),Xe=I(3384),Vn={};Vn.styleTagTransform=Nl(),Vn.setAttributes=Ol(),Vn.insert=Tl().bind(null,"head"),Vn.domAPI=Sl(),Vn.insertStyleElement=Pl();var Xm=kl()(Xe.A,Vn);const Zm=Xe.A&&Xe.A.locals?Xe.A.locals:void 0;var ve=(n=>(n.GENERAL="desktop_general",n.BROWSER="desktop_browser",n.RENDERER="desktop_renderer",n.MESSAGEBOX="desktop_messagebox",n.MENU="desktop_menu",n.EXTERNAL="desktop_external",n))(ve||{});function Si(n,...e){return(e??[]).flat().reduce((t,o)=>(delete t[o],t),{...n??{}})}const Ll=n=>n,Ml=n=>n%2===0,jl=(n,e,t,o)=>n.split(e).reduce(function(r,c,a){let l;return Ml(a)?(l=o(c,a),[...r,...l]):[...r,t(c,a)]},[]),Jl=n=>function e(t,o=n,i="0"){const r=Object.keys(o),c=function(a){return[i,"-",a].join("")};if(r.length===0)return[t];{const a=r[0],l=o[a],s=Si(o,a),f=function(d,E){const h=c(E);return e(d,s,h)},A=function(d,E){const S=(l.textFn||Ll)(d),y=l.ignore||[],k=Si(s,y),R=c(E),V=e(S,k,R);return l.matcherFn(S,V,R)};return jl(t,l.pattern,A,f)}},Ul=I.p+"net_logging_enabled@2x07ea8e03dadfe5b53700.png",$l=I.p+"net_logging_stopped@2x7f8caad240765aa90192.png";var hn,J,Vt,xi,Xn=0,Ti=[],Ze=[],Ii=g.__b,Oi=g.__r,Ri=g.diffed,Pi=g.__c,Di=g.unmount;function Jn(n,e){g.__h&&g.__h(J,n,Xn||e),Xn=0;var t=J.__H||(J.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:Ze}),t.__[n]}function Xt(n){return Xn=1,Zt(Mi,n)}function Zt(n,e,t){var o=Jn(hn++,2);if(o.t=n,!o.__c&&(o.__=[t?t(e):Mi(void 0,e),function(a){var l=o.__N?o.__N[0]:o.__[0],s=o.t(l,a);l!==s&&(o.__N=[s,o.__[1]],o.__c.setState({}))}],o.__c=J,!J.u)){var i=function(a,l,s){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(d){return d.__c});if(f.every(function(d){return!d.__N}))return!r||r.call(this,a,l,s);var A=!1;return f.forEach(function(d){if(d.__N){var E=d.__[0];d.__=d.__N,d.__N=void 0,E!==d.__[0]&&(A=!0)}}),!(!A&&o.__c.props===a)&&(!r||r.call(this,a,l,s))};J.u=!0;var r=J.shouldComponentUpdate,c=J.componentWillUpdate;J.componentWillUpdate=function(a,l,s){if(this.__e){var f=r;r=void 0,i(a,l,s),r=f}c&&c.call(this,a,l,s)},J.shouldComponentUpdate=i}return o.__N||o.__}function Qe(n,e){var t=Jn(hn++,3);!g.__s&&eo(t.__H,e)&&(t.__=n,t.i=e,J.__H.__h.push(t))}function Ce(n,e){var t=Jn(hn++,4);!g.__s&&eo(t.__H,e)&&(t.__=n,t.i=e,J.__h.push(t))}function Zn(n){return Xn=5,Qn(function(){return{current:n}},[])}function zl(n,e,t){Xn=6,Ce(function(){return typeof n=="function"?(n(e()),function(){return n(null)}):n?(n.current=e(),function(){return n.current=null}):void 0},t==null?t:t.concat(n))}function Qn(n,e){var t=Jn(hn++,7);return eo(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function ql(n,e){return Xn=8,Qn(function(){return n},e)}function Qt(n){var e=J.context[n.__c],t=Jn(hn++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(J)),e.props.value):n.__}function Ni(n,e){g.useDebugValue&&g.useDebugValue(e?e(n):n)}function Qm(n){var e=Jn(hn++,10),t=Xt();return e.__=n,J.componentDidCatch||(J.componentDidCatch=function(o,i){e.__&&e.__(o,i),t[1](o)}),[t[0],function(){t[1](void 0)}]}function Hl(){var n=Jn(hn++,11);if(!n.__){for(var e=J.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);n.__="P"+t[0]+"-"+t[1]++}return n.__}function Gl(){for(var n;n=Ti.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(nt),n.__H.__h.forEach(no),n.__H.__h=[]}catch(e){n.__H.__h=[],g.__e(e,n.__v)}}g.__b=function(n){J=null,Ii&&Ii(n)},g.__r=function(n){Oi&&Oi(n),hn=0;var e=(J=n.__c).__H;e&&(Vt===J?(e.__h=[],J.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Ze,t.__N=t.i=void 0})):(e.__h.forEach(nt),e.__h.forEach(no),e.__h=[],hn=0)),Vt=J},g.diffed=function(n){Ri&&Ri(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Ti.push(e)!==1&&xi===g.requestAnimationFrame||((xi=g.requestAnimationFrame)||Wl)(Gl)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Ze&&(t.__=t.__V),t.i=void 0,t.__V=Ze})),Vt=J=null},g.__c=function(n,e){e.some(function(t){try{t.__h.forEach(nt),t.__h=t.__h.filter(function(o){return!o.__||no(o)})}catch(o){e.some(function(i){i.__h&&(i.__h=[])}),e=[],g.__e(o,t.__v)}}),Pi&&Pi(n,e)},g.unmount=function(n){Di&&Di(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{nt(o)}catch(i){e=i}}),t.__H=void 0,e&&g.__e(e,t.__v))};var Li=typeof requestAnimationFrame=="function";function Wl(n){var e,t=function(){clearTimeout(o),Li&&cancelAnimationFrame(e),setTimeout(n)},o=setTimeout(t,100);Li&&(e=requestAnimationFrame(t))}function nt(n){var e=J,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),J=e}function no(n){var e=J;n.__c=n.__(),J=e}function eo(n,e){return!n||n.length!==e.length||e.some(function(t,o){return t!==n[o]})}function Mi(n,e){return typeof e=="function"?e(n):e}function ji(n,e){for(var t in e)n[t]=e[t];return n}function to(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var o in e)if(o!=="__source"&&n[o]!==e[o])return!0;return!1}function oo(n){this.props=n}function Kl(n,e){function t(i){var r=this.props.ref,c=r==i.ref;return!c&&r&&(r.call?r(null):r.current=null),e?!e(this.props,i)||!c:to(this.props,i)}function o(i){return this.shouldComponentUpdate=t,K(n,i)}return o.displayName="Memo("+(n.displayName||n.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(oo.prototype=new b).isPureReactComponent=!0,oo.prototype.shouldComponentUpdate=function(n,e){return to(this.props,n)||to(this.state,e)};var Ji=g.__b;g.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Ji&&Ji(n)};var Yl=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Vl(n){function e(t){var o=ji({},t);return delete o.ref,n(o,t.ref||null)}return e.$$typeof=Yl,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var Ui=function(n,e){return n==null?null:En(En(n).map(e))},Xl={map:Ui,forEach:Ui,count:function(n){return n?En(n).length:0},only:function(n){var e=En(n);if(e.length!==1)throw"Children.only";return e[0]},toArray:En},Zl=g.__e;g.__e=function(n,e,t,o){if(n.then){for(var i,r=e;r=r.__;)if((i=r.__c)&&i.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),i.__c(n,e)}Zl(n,e,t,o)};var $i=g.unmount;function zi(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),n.__c.__H=null),(n=ji({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map(function(o){return zi(o,e,t)})),n}function qi(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(o){return qi(o,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function et(){this.__u=0,this.t=null,this.__b=null}function Hi(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function Ql(n){var e,t,o;function i(r){if(e||(e=n()).then(function(c){t=c.default||c},function(c){o=c}),o)throw o;if(!t)throw e;return K(t,r)}return i.displayName="Lazy",i.__f=!0,i}function ke(){this.u=null,this.o=null}g.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),$i&&$i(n)},(et.prototype=new b).__c=function(n,e){var t=e.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var i=Hi(o.__v),r=!1,c=function(){r||(r=!0,t.__R=null,i?i(a):a())};t.__R=c;var a=function(){if(!--o.__u){if(o.state.__a){var l=o.state.__a;o.__v.__k[0]=qi(l,l.__c.__P,l.__c.__O)}var s;for(o.setState({__a:o.__b=null});s=o.t.pop();)s.forceUpdate()}};o.__u++||32&e.__u||o.setState({__a:o.__b=o.__v.__k[0]}),n.then(c,c)},et.prototype.componentWillUnmount=function(){this.t=[]},et.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=zi(this.__b,t,o.__O=o.__P)}this.__b=null}var i=e.__a&&K(D,null,n.fallback);return i&&(i.__u&=-33),[K(D,null,e.__a?null:n.children),i]};var Gi=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};function ns(n){return this.getChildContext=function(){return n.context},n.children}function es(n){var e=this,t=n.i;e.componentWillUnmount=function(){Yn(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(o){this.childNodes.push(o),e.i.appendChild(o)},insertBefore:function(o,i){this.childNodes.push(o),e.i.appendChild(o)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),e.i.removeChild(o)}}),Yn(K(ns,{context:e.context},n.__v),e.l)}function ts(n,e){var t=K(es,{__v:n,i:e});return t.containerInfo=e,t}(ke.prototype=new b).__a=function(n){var e=this,t=Hi(e.__v),o=e.o.get(n);return o[0]++,function(i){var r=function(){e.props.revealOrder?(o.push(i),Gi(e,n,o)):i()};t?t(r):r()}},ke.prototype.render=function(n){this.u=null,this.o=new Map;var e=En(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},ke.prototype.componentDidUpdate=ke.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){Gi(n,t,e)})};var Wi=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,os=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,is=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,rs=/[A-Z0-9]/g,cs=typeof document<"u",as=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};function ls(n,e,t){return e.__k==null&&(e.textContent=""),Yn(n,e),typeof t=="function"&&t(),n?n.__c:null}function ss(n,e,t){return Yt(n,e),typeof t=="function"&&t(),n?n.__c:null}b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(b.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var Ki=g.event;function As(){}function fs(){return this.cancelBubble}function us(){return this.defaultPrevented}g.event=function(n){return Ki&&(n=Ki(n)),n.persist=As,n.isPropagationStopped=fs,n.isDefaultPrevented=us,n.nativeEvent=n};var io,Es={enumerable:!1,configurable:!0,get:function(){return this.class}},Yi=g.vnode;g.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,o=e.type,i={};for(var r in t){var c=t[r];if(!(r==="value"&&"defaultValue"in t&&c==null||cs&&r==="children"&&o==="noscript"||r==="class"||r==="className")){var a=r.toLowerCase();r==="defaultValue"&&"value"in t&&t.value==null?r="value":r==="download"&&c===!0?c="":a==="ondoubleclick"?r="ondblclick":a!=="onchange"||o!=="input"&&o!=="textarea"||as(t.type)?a==="onfocus"?r="onfocusin":a==="onblur"?r="onfocusout":is.test(r)?r=a:o.indexOf("-")===-1&&os.test(r)?r=r.replace(rs,"-$&").toLowerCase():c===null&&(c=void 0):a=r="oninput",a==="oninput"&&i[r=a]&&(r="oninputCapture"),i[r]=c}}o=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=En(t.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),o=="select"&&i.defaultValue!=null&&(i.value=En(t.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),t.class&&!t.className?(i.class=t.class,Object.defineProperty(i,"className",Es)):(t.className&&!t.class||t.class&&t.className)&&(i.class=i.className=t.className),e.props=i}(n),n.$$typeof=Wi,Yi&&Yi(n)};var Vi=g.__r;g.__r=function(n){Vi&&Vi(n),io=n.__c};var Xi=g.diffed;g.diffed=function(n){Xi&&Xi(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),io=null};var ds={ReactCurrentDispatcher:{current:{readContext:function(n){return io.__n[n.__c].props.value}}}},nB="17.0.2";function gs(n){return K.bind(null,n)}function tt(n){return!!n&&n.$$typeof===Wi}function ps(n){return tt(n)&&n.type===D}function bs(n){return tt(n)?Fi.apply(null,arguments):n}function Zi(n){return!!n.__k&&(Yn(null,n),!0)}function _s(n){return n&&(n.base||n.nodeType===1&&n)||null}var Qi=function(n,e){return n(e)},hs=function(n,e){return n(e)},ms=D;function nr(n){n()}function Bs(n){return n}function ys(){return[!1,nr]}var Fs=Ce,vs=tt;function Cs(n,e){var t=e(),o=Xt({h:{__:t,v:e}}),i=o[0].h,r=o[1];return Ce(function(){i.__=t,i.v=e,ro(i)&&r({h:i})},[n,t,e]),Qe(function(){return ro(i)&&r({h:i}),n(function(){ro(i)&&r({h:i})})},[n]),t}function ro(n){var e,t,o=n.v,i=n.__;try{var r=o();return!((e=i)===(t=r)&&(e!==0||1/e==1/t)||e!=e&&t!=t)}catch{return!0}}var er={useState:Xt,useId:Hl,useReducer:Zt,useEffect:Qe,useLayoutEffect:Ce,useInsertionEffect:Fs,useTransition:ys,useDeferredValue:Bs,useSyncExternalStore:Cs,startTransition:nr,useRef:Zn,useImperativeHandle:zl,useMemo:Qn,useCallback:ql,useContext:Qt,useDebugValue:Ni,version:"17.0.2",Children:Xl,render:ls,hydrate:ss,unmountComponentAtNode:Zi,createPortal:ts,createElement:K,createContext:vi,createFactory:gs,cloneElement:bs,createRef:q,Fragment:D,isValidElement:tt,isElement:vs,isFragment:ps,findDOMNode:_s,Component:b,PureComponent:oo,memo:Kl,forwardRef:Vl,flushSync:hs,unstable_batchedUpdates:Qi,StrictMode:ms,Suspense:et,SuspenseList:ke,lazy:Ql,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ds},eB=I(4031),ot=er.createContext(null);const tB=null;function ks(n){n()}var tr=ks,ws=function(e){return tr=e},Ss=function(){return tr},or={notify:function(){}};function xs(){var n=Ss(),e=null,t=null;return{clear:function(){e=null,t=null},notify:function(){n(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],r=e;r;)i.push(r),r=r.next;return i},subscribe:function(i){var r=!0,c=t={callback:i,next:null,prev:t};return c.prev?c.prev.next=c:e=c,function(){!r||e===null||(r=!1,c.next?c.next.prev=c.prev:t=c.prev,c.prev?c.prev.next=c.next:e=c.next)}}}}var ir=function(){function n(t,o){this.store=t,this.parentSub=o,this.unsubscribe=null,this.listeners=or,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var e=n.prototype;return e.addNestedSub=function(o){return this.trySubscribe(),this.listeners.subscribe(o)},e.notifyNestedSubs=function(){this.listeners.notify()},e.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},e.isSubscribed=function(){return!!this.unsubscribe},e.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=xs())},e.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=or)},n}(),co=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?Ce:Qe;function Ts(n){var e=n.store,t=n.context,o=n.children,i=Qn(function(){var a=new ir(e);return a.onStateChange=a.notifyNestedSubs,{store:e,subscription:a}},[e]),r=Qn(function(){return e.getState()},[e]);co(function(){var a=i.subscription;return a.trySubscribe(),r!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,r]);var c=t||ot;return er.createElement(c.Provider,{value:i},o)}const Is=Ts;var oB=I(3869),iB=I(5376),it,rr,cr,In,ne,Os,Rs,rt,Ps,Ds,Ns,Ls,Ms=null,js=null,rB=function(e){try{return JSON.stringify(e)}catch{return String(e)}};function Js(n,e){var t=n[1];return[e.payload,t+1]}function ar(n,e,t){Ns(function(){return n.apply(void 0,e)},t)}function Us(n,e,t,o,i,r,c){n.current=o,e.current=i,t.current=!1,r.current&&(r.current=null,c())}function $s(n,e,t,o,i,r,c,a,l,s){if(n){var f=!1,A=null,d=function(){if(!f){var S=e.getState(),y,k;try{y=o(S,i.current)}catch(R){k=R,A=R}k||(A=null),y===r.current?c.current||l():(r.current=y,a.current=y,c.current=!0,s({type:"STORE_UPDATED",payload:{error:k}}))}};t.onStateChange=d,t.trySubscribe(),d();var E=function(){if(f=!0,t.tryUnsubscribe(),t.onStateChange=null,A)throw A};return E}}var zs=function(){return[null,0]};function cB(n,e){e===void 0&&(e={});var t=e,o=t.getDisplayName,i=o===void 0?function(Dn){return"ConnectAdvanced("+Dn+")"}:o,r=t.methodName,c=r===void 0?"connectAdvanced":r,a=t.renderCountProp,l=a===void 0?void 0:a,s=t.shouldHandleStateChanges,f=s===void 0?!0:s,A=t.storeKey,d=A===void 0?"store":A,E=t.withRef,h=E===void 0?!1:E,S=t.forwardRef,y=S===void 0?!1:S,k=t.context,R=k===void 0?Ls:k,V=rr(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(0)var ln;var on=R;return function(nn){var wn=nn.displayName||nn.name||"Component",X=i(wn),Sn=it({},V,{getDisplayName:i,methodName:c,renderCountProp:l,shouldHandleStateChanges:f,storeKey:d,displayName:X,wrappedComponentName:wn,WrappedComponent:nn}),Jt=V.pure;function Ai(rn){return n(rn.dispatch,Sn)}var fi=Jt?In:function(rn){return rn()};function qe(rn){var He=In(function(){var Ke=rn.reactReduxForwardedRef,bi=rr(rn,["reactReduxForwardedRef"]);return[rn.context,Ke,bi]},[rn]),Kn=He[0],al=He[1],Ge=He[2],ui=In(function(){return Kn&&Kn.Consumer&&Ps(ne.createElement(Kn.Consumer,null))?Kn:on},[Kn,on]),Nn=Os(ui),We=!!rn.store&&!!rn.store.getState&&!!rn.store.dispatch,eF=!!Nn&&!!Nn.store,Ln=We?rn.store:Nn.store,Ei=In(function(){return Ai(Ln)},[Ln]),ll=In(function(){if(!f)return js;var Ke=new Ds(Ln,We?null:Nn.subscription),bi=Ke.notifyNestedSubs.bind(Ke);return[Ke,bi]},[Ln,We,Nn]),$t=ll[0],sl=ll[1],Al=In(function(){return We?Nn:it({},Nn,{subscription:$t})},[We,Nn,$t]),fl=Rs(Js,Ms,zs),$m=fl[0],zt=$m[0],zm=fl[1];if(zt&&zt.error)throw zt.error;var ul=rt(),di=rt(Ge),qt=rt(),El=rt(!1),gi=fi(function(){return qt.current&&Ge===di.current?qt.current:Ei(Ln.getState(),Ge)},[Ln,zt,Ge]);ar(Us,[di,ul,El,Ge,gi,qt,sl]),ar($s,[f,Ln,$t,Ei,di,ul,El,qt,sl,zm],[Ln,$t,Ei]);var pi=In(function(){return ne.createElement(nn,it({},gi,{ref:al}))},[al,nn,gi]),qm=In(function(){return f?ne.createElement(ui.Provider,{value:Al},pi):pi},[ui,pi,Al]);return qm}var Fe=Jt?ne.memo(qe):qe;if(Fe.WrappedComponent=nn,Fe.displayName=qe.displayName=X,y){var Ut=ne.forwardRef(function(He,Kn){return ne.createElement(Fe,it({},He,{reactReduxForwardedRef:Kn}))});return Ut.displayName=X,Ut.WrappedComponent=nn,cr(Ut,nn)}return cr(Fe,nn)}}function qs(n,e){var t={},o=function(c){var a=n[c];typeof a=="function"&&(t[c]=function(){return e(a.apply(void 0,arguments))})};for(var i in n)o(i);return t}function ao(n){return function(t,o){var i=n(t,o);function r(){return i}return r.dependsOnOwnProps=!1,r}}function lr(n){return n.dependsOnOwnProps!==null&&n.dependsOnOwnProps!==void 0?!!n.dependsOnOwnProps:n.length!==1}function sr(n,e){return function(o,i){var r=i.displayName,c=function(l,s){return c.dependsOnOwnProps?c.mapToProps(l,s):c.mapToProps(l)};return c.dependsOnOwnProps=!0,c.mapToProps=function(l,s){c.mapToProps=n,c.dependsOnOwnProps=lr(n);var f=c(l,s);return typeof f=="function"&&(c.mapToProps=f,c.dependsOnOwnProps=lr(f),f=c(l,s)),f},c}}function Hs(n){return typeof n=="function"?sr(n,"mapDispatchToProps"):void 0}function Gs(n){return n?void 0:ao(function(e){return{dispatch:e}})}function Ws(n){return n&&typeof n=="object"?ao(function(e){return qs(n,e)}):void 0}const aB=[Hs,Gs,Ws];function Ks(n){return typeof n=="function"?sr(n,"mapStateToProps"):void 0}function Ys(n){return n?void 0:ao(function(){return{}})}const lB=[Ks,Ys];function lo(){return lo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)({}).hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},lo.apply(null,arguments)}function Vs(n,e,t){return lo({},t,n,e)}function Xs(n){return function(t,o){var i=o.displayName,r=o.pure,c=o.areMergedPropsEqual,a=!1,l;return function(f,A,d){var E=n(f,A,d);return a?(!r||!c(E,l))&&(l=E):(a=!0,l=E),l}}}function Zs(n){return typeof n=="function"?Xs(n):void 0}function Qs(n){return n?void 0:function(){return Vs}}const sB=[Zs,Qs];var nA,eA,tA,so,oA,iA,rA,cA;function Ao(n,e,t){for(var o=e.length-1;o>=0;o--){var i=e[o](n);if(i)return i}return function(r,c){throw new Error("Invalid value of type "+typeof n+" for "+t+" argument when connecting component "+c.wrappedComponentName+".")}}function aA(n,e){return n===e}function AB(n){var e=n===void 0?{}:n,t=e.connectHOC,o=t===void 0?tA:t,i=e.mapStateToPropsFactories,r=i===void 0?iA:i,c=e.mapDispatchToPropsFactories,a=c===void 0?oA:c,l=e.mergePropsFactories,s=l===void 0?rA:l,f=e.selectorFactory,A=f===void 0?cA:f;return function(E,h,S,y){y===void 0&&(y={});var k=y,R=k.pure,V=R===void 0?!0:R,ln=k.areStatesEqual,on=ln===void 0?aA:ln,Dn=k.areOwnPropsEqual,nn=Dn===void 0?so:Dn,wn=k.areStatePropsEqual,X=wn===void 0?so:wn,Sn=k.areMergedPropsEqual,Jt=Sn===void 0?so:Sn,Ai=eA(k,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),fi=Ao(E,r,"mapStateToProps"),qe=Ao(h,a,"mapDispatchToProps"),Fe=Ao(S,s,"mergeProps");return o(A,nA({methodName:"connect",getDisplayName:function(rn){return"Connect("+rn+")"},shouldHandleStateChanges:!!E,initMapStateToProps:fi,initMapDispatchToProps:qe,initMergeProps:Fe,pure:V,areStatesEqual:on,areOwnPropsEqual:nn,areStatePropsEqual:X,areMergedPropsEqual:Jt},Ai))}}const fB=null;function lA(){var n=Qt(ot);return n}var sA,Ar,AA;function uB(n){n===void 0&&(n=Ar);var e=n===Ar?AA:function(){return sA(n)};return function(){var o=e(),i=o.store;return i}}var EB=null,fr,fA,uA;function dB(n){n===void 0&&(n=fr);var e=n===fr?fA:uA(n);return function(){var o=e();return o.dispatch}}var gB=null,EA=function(e,t){return e===t};function dA(n,e,t,o){var i=Zt(function(h){return h+1},0),r=i[1],c=Qn(function(){return new ir(t,o)},[t,o]),a=Zn(),l=Zn(),s=Zn(),f=Zn(),A=t.getState(),d;try{if(n!==l.current||A!==s.current||a.current){var E=n(A);f.current===void 0||!e(E,f.current)?d=E:d=f.current}else d=f.current}catch(h){throw a.current&&(h.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),h}return co(function(){l.current=n,s.current=A,f.current=d,a.current=void 0}),co(function(){function h(){try{var S=t.getState(),y=l.current(S);if(e(y,f.current))return;f.current=y,s.current=S}catch(k){a.current=k}r()}return c.onStateChange=h,c.trySubscribe(),h(),function(){return c.tryUnsubscribe()}},[t,c]),d}function gA(n){n===void 0&&(n=ot);var e=n===ot?lA:function(){return Qt(n)};return function(o,i){i===void 0&&(i=EA);var r=e(),c=r.store,a=r.subscription,l=dA(o,i,c,a);return Ni(l),l}}var pA=gA();ws(Qi);var bA=/\s/;function _A(n){for(var e=n.length;e--&&bA.test(n.charAt(e)););return e}const hA=_A;var mA=/^\s+/;function BA(n){return n&&n.slice(0,hA(n)+1).replace(mA,"")}const yA=BA;function FA(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}const ct=FA;var vA=typeof global=="object"&&global&&global.Object===Object&&global;const ur=vA;var CA=typeof self=="object"&&self&&self.Object===Object&&self,kA=ur||CA||Function("return this")();const mn=kA;var wA=mn.Symbol;const ee=wA;var Er=Object.prototype,SA=Er.hasOwnProperty,xA=Er.toString,we=ee?ee.toStringTag:void 0;function TA(n){var e=SA.call(n,we),t=n[we];try{n[we]=void 0;var o=!0}catch{}var i=xA.call(n);return o&&(e?n[we]=t:delete n[we]),i}const IA=TA;var OA=Object.prototype,RA=OA.toString;function PA(n){return RA.call(n)}const DA=PA;var NA="[object Null]",LA="[object Undefined]",dr=ee?ee.toStringTag:void 0;function MA(n){return n==null?n===void 0?LA:NA:dr&&dr in Object(n)?IA(n):DA(n)}const te=MA;function jA(n){return n!=null&&typeof n=="object"}const oe=jA;var JA="[object Symbol]";function UA(n){return typeof n=="symbol"||oe(n)&&te(n)==JA}const $A=UA;var gr=NaN,zA=/^[-+]0x[0-9a-f]+$/i,qA=/^0b[01]+$/i,HA=/^0o[0-7]+$/i,GA=parseInt;function WA(n){if(typeof n=="number")return n;if($A(n))return gr;if(ct(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=ct(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=yA(n);var t=qA.test(n);return t||HA.test(n)?GA(n.slice(2),t?2:8):zA.test(n)?gr:+n}const KA=WA;var pr=1/0,YA=17976931348623157e292;function VA(n){if(!n)return n===0?n:0;if(n=KA(n),n===pr||n===-pr){var e=n<0?-1:1;return e*YA}return n===n?n:0}const XA=VA;function ZA(n){var e=XA(n),t=e%1;return e===e?t?e-t:e:0}const QA=ZA;var nf="Expected a function";function ef(n,e){var t;if(typeof e!="function")throw new TypeError(nf);return n=QA(n),function(){return--n>0&&(t=e.apply(this,arguments)),n<=1&&(e=void 0),t}}const tf=ef;function of(n){return tf(2,n)}const rf=of;function cf(){}const af=cf,lf=rf(()=>({...window.desktop.store,dispatch:af})),{XX:sf}=m,Af=async(n,e="div")=>{const t=lf(),i=t.getState().settings.locale;i&&await window.desktop.intl.applyLocale(i);const r=document.createElement(e);document.body.appendChild(r),window.addEventListener("beforeunload",()=>Zi(r)),sf(dn(Is,{store:t,children:dn(n,{})}),r)},br={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},_r=(n,e)=>(...t)=>{try{const o=t.map(i=>typeof i=="object"?JSON.stringify(i,null,2):i).join(" ");e?console[n](`[${e}]	${o}`):console[n](o)}catch{}},ff=Object.entries(br).reduce((n,[e,t])=>(n[e]=_r(t),n),{}),pB=(n,e)=>Object.entries(br).reduce((t,[o,i])=>(t[o]=_r(i,n),t),{}),{notifyError:bB,setupErrorReporter:uf}=(()=>{let n=null;return{setupErrorReporter:e=>n=e,notifyError:e=>{if(n){n(e);return}ff.warn("notifyError: skipping error reporting, reporter is not initialized.",{error:e})}}})(),hr=Object.prototype.toString;function mr(n){switch(hr.call(n)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return Un(n,Error)}}function ie(n,e){return hr.call(n)===`[object ${e}]`}function fo(n){return ie(n,"ErrorEvent")}function Br(n){return ie(n,"DOMError")}function Ef(n){return ie(n,"DOMException")}function Bn(n){return ie(n,"String")}function uo(n){return typeof n=="object"&&n!==null&&"__sentry_template_string__"in n&&"__sentry_template_values__"in n}function Eo(n){return n===null||uo(n)||typeof n!="object"&&typeof n!="function"}function re(n){return ie(n,"Object")}function at(n){return typeof Event<"u"&&Un(n,Event)}function df(n){return typeof Element<"u"&&Un(n,Element)}function gf(n){return ie(n,"RegExp")}function lt(n){return!!(n&&n.then&&typeof n.then=="function")}function pf(n){return re(n)&&"nativeEvent"in n&&"preventDefault"in n&&"stopPropagation"in n}function bf(n){return typeof n=="number"&&n!==n}function Un(n,e){try{return n instanceof e}catch{return!1}}function yr(n){return!!(typeof n=="object"&&n!==null&&(n.__isVue||n._isVue))}function st(n){return n&&n.Math==Math?n:void 0}const N=typeof globalThis=="object"&&st(globalThis)||typeof window=="object"&&st(window)||typeof self=="object"&&st(self)||typeof global=="object"&&st(global)||function(){return this}()||{};function go(){return N}function Fr(n,e,t){const o=t||N,i=o.__SENTRY__=o.__SENTRY__||{};return i[n]||(i[n]=e())}const ce=go(),_f=80;function vr(n,e={}){if(!n)return"<unknown>";try{let t=n;const o=5,i=[];let r=0,c=0;const a=" > ",l=a.length;let s;const f=Array.isArray(e)?e:e.keyAttrs,A=!Array.isArray(e)&&e.maxStringLength||_f;for(;t&&r++<o&&(s=hf(t,f),!(s==="html"||r>1&&c+i.length*l+s.length>=A));)i.push(s),c+=s.length,t=t.parentNode;return i.reverse().join(a)}catch{return"<unknown>"}}function hf(n,e){const t=n,o=[];let i,r,c,a,l;if(!t||!t.tagName)return"";if(ce.HTMLElement&&t instanceof HTMLElement&&t.dataset&&t.dataset.sentryComponent)return t.dataset.sentryComponent;o.push(t.tagName.toLowerCase());const s=e&&e.length?e.filter(A=>t.getAttribute(A)).map(A=>[A,t.getAttribute(A)]):null;if(s&&s.length)s.forEach(A=>{o.push(`[${A[0]}="${A[1]}"]`)});else if(t.id&&o.push(`#${t.id}`),i=t.className,i&&Bn(i))for(r=i.split(/\s+/),l=0;l<r.length;l++)o.push(`.${r[l]}`);const f=["aria-label","type","name","title","alt"];for(l=0;l<f.length;l++)c=f[l],a=t.getAttribute(c),a&&o.push(`[${c}="${a}"]`);return o.join("")}function mf(){try{return ce.document.location.href}catch{return""}}function _B(n){return ce.document&&ce.document.querySelector?ce.document.querySelector(n):null}function Bf(n){if(!ce.HTMLElement)return null;let e=n;const t=5;for(let o=0;o<t;o++){if(!e)return null;if(e instanceof HTMLElement&&e.dataset.sentryComponent)return e.dataset.sentryComponent;e=e.parentNode}return null}const Se=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__,yf="Sentry Logger ",po=["debug","info","warn","error","log","assert","trace"],At={};function ft(n){if(!("console"in N))return n();const e=N.console,t={},o=Object.keys(At);o.forEach(i=>{const r=At[i];t[i]=e[i],e[i]=r});try{return n()}finally{o.forEach(i=>{e[i]=t[i]})}}function Ff(){let n=!1;const e={enable:()=>{n=!0},disable:()=>{n=!1},isEnabled:()=>n};return Se?po.forEach(t=>{e[t]=(...o)=>{n&&ft(()=>{N.console[t](`${yf}[${t}]:`,...o)})}}):po.forEach(t=>{e[t]=()=>{}}),e}const w=Ff();function ae(n,e=0){return typeof n!="string"||e===0||n.length<=e?n:`${n.slice(0,e)}...`}function hB(n,e){let t=n;const o=t.length;if(o<=150)return t;e>o&&(e=o);let i=Math.max(e-60,0);i<5&&(i=0);let r=Math.min(i+140,o);return r>o-5&&(r=o),r===o&&(i=Math.max(r-140,0)),t=t.slice(i,r),i>0&&(t=`'{snip} ${t}`),r<o&&(t+=" {snip}"),t}function Cr(n,e){if(!Array.isArray(n))return"";const t=[];for(let o=0;o<n.length;o++){const i=n[o];try{yr(i)?t.push("[VueViewModel]"):t.push(String(i))}catch{t.push("[value cannot be serialized]")}}return t.join(e)}function vf(n,e,t=!1){return Bn(n)?gf(e)?e.test(n):Bn(e)?t?n===e:n.includes(e):!1:!1}function ut(n,e=[],t=!1){return e.some(o=>vf(n,o,t))}var Cf;function Z(n,e,t){if(!(e in n))return;const o=n[e],i=t(o);typeof i=="function"&&kr(i,o),n[e]=i}function xe(n,e,t){try{Object.defineProperty(n,e,{value:t,writable:!0,configurable:!0})}catch{Se&&w.log(`Failed to add non-enumerable property "${e}" to object`,n)}}function kr(n,e){try{const t=e.prototype||{};n.prototype=e.prototype=t,xe(n,"__sentry_original__",e)}catch{}}function bo(n){return n.__sentry_original__}function kf(n){return Object.keys(n).map(e=>`${encodeURIComponent(e)}=${encodeURIComponent(n[e])}`).join("&")}function wr(n){if(mr(n))return{message:n.message,name:n.name,stack:n.stack,...xr(n)};if(at(n)){const e={type:n.type,target:Sr(n.target),currentTarget:Sr(n.currentTarget),...xr(n)};return typeof CustomEvent<"u"&&Un(n,CustomEvent)&&(e.detail=n.detail),e}else return n}function Sr(n){try{return df(n)?vr(n):Object.prototype.toString.call(n)}catch{return"<unknown>"}}function xr(n){if(typeof n=="object"&&n!==null){const e={};for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e}else return{}}function wf(n,e=40){const t=Object.keys(wr(n));if(t.sort(),!t.length)return"[object has no keys]";if(t[0].length>=e)return ae(t[0],e);for(let o=t.length;o>0;o--){const i=t.slice(0,o).join(", ");if(!(i.length>e))return o===t.length?i:ae(i,e)}return""}function An(n){return _o(n,new Map)}function _o(n,e){if(Sf(n)){const t=e.get(n);if(t!==void 0)return t;const o={};e.set(n,o);for(const i of Object.keys(n))typeof n[i]<"u"&&(o[i]=_o(n[i],e));return o}if(Array.isArray(n)){const t=e.get(n);if(t!==void 0)return t;const o=[];return e.set(n,o),n.forEach(i=>{o.push(_o(i,e))}),o}return n}function Sf(n){if(!re(n))return!1;try{const e=Object.getPrototypeOf(n).constructor.name;return!e||e==="Object"}catch{return!0}}function mB(n){let e;switch(!0){case n==null:e=new String(n);break;case(typeof n=="symbol"||typeof n=="bigint"):e=Object(n);break;case Cf(n):e=new n.constructor(n);break;default:e=n;break}return e}const Et="production";var ho;function cn(){const n=N,e=n.crypto||n.msCrypto;let t=()=>Math.random()*16;try{if(e&&e.randomUUID)return e.randomUUID().replace(/-/g,"");e&&e.getRandomValues&&(t=()=>{const o=new Uint8Array(1);return e.getRandomValues(o),o[0]})}catch{}return("10000000100040008000"+1e11).replace(/[018]/g,o=>(o^(t()&15)>>o/4).toString(16))}function Tr(n){return n.exception&&n.exception.values?n.exception.values[0]:void 0}function On(n){const{message:e,event_id:t}=n;if(e)return e;const o=Tr(n);return o?o.type&&o.value?`${o.type}: ${o.value}`:o.type||o.value||t||"<unknown>":t||"<unknown>"}function mo(n,e,t){const o=n.exception=n.exception||{},i=o.values=o.values||[],r=i[0]=i[0]||{};r.value||(r.value=e||""),r.type||(r.type=t||"Error")}function Te(n,e){const t=Tr(n);if(!t)return;const o={type:"generic",handled:!0},i=t.mechanism;if(t.mechanism={...o,...i,...e},e&&"data"in e){const r={...i&&i.data,...e.data};t.mechanism.data=r}}const xf=/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;function BB(n){const e=n.match(xf)||[],t=parseInt(e[1],10),o=parseInt(e[2],10),i=parseInt(e[3],10);return{buildmetadata:e[5],major:isNaN(t)?void 0:t,minor:isNaN(o)?void 0:o,patch:isNaN(i)?void 0:i,prerelease:e[4]}}function yB(n,e,t=5){if(e.lineno===void 0)return;const o=n.length,i=Math.max(Math.min(o-1,e.lineno-1),0);e.pre_context=n.slice(Math.max(0,i-t),i).map(r=>ho(r,0)),e.context_line=ho(n[Math.min(o-1,i)],e.colno||0),e.post_context=n.slice(Math.min(i+1,o),i+1+t).map(r=>ho(r,0))}function Ir(n){if(n&&n.__sentry_captured__)return!0;try{xe(n,"__sentry_captured__",!0)}catch{}return!1}function Or(n){return Array.isArray(n)?n:[n]}const Rr=1e3;function Ie(){return Date.now()/Rr}function Tf(){const{performance:n}=N;if(!n||!n.now)return Ie;const e=Date.now()-n.now(),t=n.timeOrigin==null?e:n.timeOrigin;return()=>(t+n.now())/Rr}const Bo=Tf(),FB=null;let dt;const vB=(()=>{const{performance:n}=N;if(!n||!n.now){dt="none";return}const e=3600*1e3,t=n.now(),o=Date.now(),i=n.timeOrigin?Math.abs(n.timeOrigin+t-o):e,r=i<e,c=n.timing&&n.timing.navigationStart,l=typeof c=="number"?Math.abs(c+t-o):e,s=l<e;return r||s?i<=l?(dt="timeOrigin",n.timeOrigin):(dt="navigationStart",c):(dt="dateNow",o)})(),M=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;var yn;(function(n){n[n.PENDING=0]="PENDING";const t=1;n[n.RESOLVED=t]="RESOLVED";const o=2;n[n.REJECTED=o]="REJECTED"})(yn||(yn={}));function le(n){return new an(e=>{e(n)})}function yo(n){return new an((e,t)=>{t(n)})}class an{constructor(e){an.prototype.__init.call(this),an.prototype.__init2.call(this),an.prototype.__init3.call(this),an.prototype.__init4.call(this),this._state=yn.PENDING,this._handlers=[];try{e(this._resolve,this._reject)}catch(t){this._reject(t)}}then(e,t){return new an((o,i)=>{this._handlers.push([!1,r=>{if(!e)o(r);else try{o(e(r))}catch(c){i(c)}},r=>{if(!t)i(r);else try{o(t(r))}catch(c){i(c)}}]),this._executeHandlers()})}catch(e){return this.then(t=>t,e)}finally(e){return new an((t,o)=>{let i,r;return this.then(c=>{r=!1,i=c,e&&e()},c=>{r=!0,i=c,e&&e()}).then(()=>{if(r){o(i);return}t(i)})})}__init(){this._resolve=e=>{this._setResult(yn.RESOLVED,e)}}__init2(){this._reject=e=>{this._setResult(yn.REJECTED,e)}}__init3(){this._setResult=(e,t)=>{if(this._state===yn.PENDING){if(lt(t)){t.then(this._resolve,this._reject);return}this._state=e,this._value=t,this._executeHandlers()}}}__init4(){this._executeHandlers=()=>{if(this._state===yn.PENDING)return;const e=this._handlers.slice();this._handlers=[],e.forEach(t=>{t[0]||(this._state===yn.RESOLVED&&t[1](this._value),this._state===yn.REJECTED&&t[2](this._value),t[0]=!0)})}}}function Fo(){return Fr("globalEventProcessors",()=>[])}function If(n){Fo().push(n)}function gt(n,e,t,o=0){return new an((i,r)=>{const c=n[o];if(e===null||typeof c!="function")i(e);else{const a=c({...e},t);M&&c.id&&a===null&&w.log(`Event processor "${c.id}" dropped event`),lt(a)?a.then(l=>gt(n,l,t,o+1).then(i)).then(null,r):gt(n,a,t,o+1).then(i).then(null,r)}})}function Pr(n){const e=Bo(),t={sid:cn(),init:!0,timestamp:e,started:e,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>Of(t)};return n&&$n(t,n),t}function $n(n,e={}){if(e.user&&(!n.ipAddress&&e.user.ip_address&&(n.ipAddress=e.user.ip_address),!n.did&&!e.did&&(n.did=e.user.id||e.user.email||e.user.username)),n.timestamp=e.timestamp||Bo(),e.abnormal_mechanism&&(n.abnormal_mechanism=e.abnormal_mechanism),e.ignoreDuration&&(n.ignoreDuration=e.ignoreDuration),e.sid&&(n.sid=e.sid.length===32?e.sid:cn()),e.init!==void 0&&(n.init=e.init),!n.did&&e.did&&(n.did=`${e.did}`),typeof e.started=="number"&&(n.started=e.started),n.ignoreDuration)n.duration=void 0;else if(typeof e.duration=="number")n.duration=e.duration;else{const t=n.timestamp-n.started;n.duration=t>=0?t:0}e.release&&(n.release=e.release),e.environment&&(n.environment=e.environment),!n.ipAddress&&e.ipAddress&&(n.ipAddress=e.ipAddress),!n.userAgent&&e.userAgent&&(n.userAgent=e.userAgent),typeof e.errors=="number"&&(n.errors=e.errors),e.status&&(n.status=e.status)}function Dr(n,e){let t={};e?t={status:e}:n.status==="ok"&&(t={status:"exited"}),$n(n,t)}function Of(n){return An({sid:`${n.sid}`,init:n.init,started:new Date(n.started*1e3).toISOString(),timestamp:new Date(n.timestamp*1e3).toISOString(),status:n.status,errors:n.errors,did:typeof n.did=="number"||typeof n.did=="string"?`${n.did}`:void 0,duration:n.duration,abnormal_mechanism:n.abnormal_mechanism,attrs:{release:n.release,environment:n.environment,ip_address:n.ipAddress,user_agent:n.userAgent}})}function Nr(n){return n.transaction}var Rf,Pf;const CB=0,Df=1;function Nf(n){const{spanId:e,traceId:t}=n.spanContext(),{data:o,op:i,parent_span_id:r,status:c,tags:a,origin:l}=se(n);return An({data:o,op:i,parent_span_id:r,span_id:e,status:c,tags:a,trace_id:t,origin:l})}function kB(n){const{traceId:e,spanId:t}=n.spanContext(),o=Mr(n);return Pf(e,t,o)}function wB(n){return typeof n=="number"?Lr(n):Array.isArray(n)?n[0]+n[1]/1e9:n instanceof Date?Lr(n.getTime()):Rf()}function Lr(n){return n>9999999999?n/1e3:n}function se(n){return Lf(n)?n.getSpanJSON():typeof n.toJSON=="function"?n.toJSON():{}}function Lf(n){return typeof n.getSpanJSON=="function"}function Mr(n){const{traceFlags:e}=n.spanContext();return!!(e&Df)}function jr(n,e,t){const o=e.getOptions(),{publicKey:i}=e.getDsn()||{},{segment:r}=t&&t.getUser()||{},c=An({environment:o.environment||Et,release:o.release,user_segment:r,public_key:i,trace_id:n});return e.emit&&e.emit("createDsc",c),c}function Mf(n){const e=Y();if(!e)return{};const t=jr(se(n).trace_id||"",e,Cn()),o=Nr(n);if(!o)return t;const i=o&&o._frozenDynamicSamplingContext;if(i)return i;const{sampleRate:r,source:c}=o.metadata;r!=null&&(t.sample_rate=`${r}`);const a=se(o);return c&&c!=="url"&&(t.transaction=a.description),t.sampled=String(Mr(o)),e.emit&&e.emit("createDsc",t),t}function Jr(n,e){const{fingerprint:t,span:o,breadcrumbs:i,sdkProcessingMetadata:r}=e;jf(n,e),o&&$f(n,o),zf(n,t),Jf(n,i),Uf(n,r)}function Ur(n,e){const{extra:t,tags:o,user:i,contexts:r,level:c,sdkProcessingMetadata:a,breadcrumbs:l,fingerprint:s,eventProcessors:f,attachments:A,propagationContext:d,transactionName:E,span:h}=e;Oe(n,"extra",t),Oe(n,"tags",o),Oe(n,"user",i),Oe(n,"contexts",r),Oe(n,"sdkProcessingMetadata",a),c&&(n.level=c),E&&(n.transactionName=E),h&&(n.span=h),l.length&&(n.breadcrumbs=[...n.breadcrumbs,...l]),s.length&&(n.fingerprint=[...n.fingerprint,...s]),f.length&&(n.eventProcessors=[...n.eventProcessors,...f]),A.length&&(n.attachments=[...n.attachments,...A]),n.propagationContext={...n.propagationContext,...d}}function Oe(n,e,t){if(t&&Object.keys(t).length){n[e]={...n[e]};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[e][o]=t[o])}}function jf(n,e){const{extra:t,tags:o,user:i,contexts:r,level:c,transactionName:a}=e,l=An(t);l&&Object.keys(l).length&&(n.extra={...l,...n.extra});const s=An(o);s&&Object.keys(s).length&&(n.tags={...s,...n.tags});const f=An(i);f&&Object.keys(f).length&&(n.user={...f,...n.user});const A=An(r);A&&Object.keys(A).length&&(n.contexts={...A,...n.contexts}),c&&(n.level=c),a&&(n.transaction=a)}function Jf(n,e){const t=[...n.breadcrumbs||[],...e];n.breadcrumbs=t.length?t:void 0}function Uf(n,e){n.sdkProcessingMetadata={...n.sdkProcessingMetadata,...e}}function $f(n,e){n.contexts={trace:Nf(e),...n.contexts};const t=Nr(e);if(t){n.sdkProcessingMetadata={dynamicSamplingContext:Mf(e),...n.sdkProcessingMetadata};const o=se(t).description;o&&(n.tags={transaction:o,...n.tags})}}function zf(n,e){n.fingerprint=n.fingerprint?Or(n.fingerprint):[],e&&(n.fingerprint=n.fingerprint.concat(e)),n.fingerprint&&!n.fingerprint.length&&delete n.fingerprint}const qf=100;let pt;class Fn{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={},this._propagationContext=$r()}static clone(e){return e?e.clone():new Fn}clone(){const e=new Fn;return e._breadcrumbs=[...this._breadcrumbs],e._tags={...this._tags},e._extra={...this._extra},e._contexts={...this._contexts},e._user=this._user,e._level=this._level,e._span=this._span,e._session=this._session,e._transactionName=this._transactionName,e._fingerprint=this._fingerprint,e._eventProcessors=[...this._eventProcessors],e._requestSession=this._requestSession,e._attachments=[...this._attachments],e._sdkProcessingMetadata={...this._sdkProcessingMetadata},e._propagationContext={...this._propagationContext},e._client=this._client,e}setClient(e){this._client=e}getClient(){return this._client}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{email:void 0,id:void 0,ip_address:void 0,segment:void 0,username:void 0},this._session&&$n(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return t===null?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){const e=this._span;return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;const t=typeof e=="function"?e(this):e;if(t instanceof Fn){const o=t.getScopeData();this._tags={...this._tags,...o.tags},this._extra={...this._extra,...o.extra},this._contexts={...this._contexts,...o.contexts},o.user&&Object.keys(o.user).length&&(this._user=o.user),o.level&&(this._level=o.level),o.fingerprint.length&&(this._fingerprint=o.fingerprint),t.getRequestSession()&&(this._requestSession=t.getRequestSession()),o.propagationContext&&(this._propagationContext=o.propagationContext)}else if(re(t)){const o=e;this._tags={...this._tags,...o.tags},this._extra={...this._extra,...o.extra},this._contexts={...this._contexts,...o.contexts},o.user&&(this._user=o.user),o.level&&(this._level=o.level),o.fingerprint&&(this._fingerprint=o.fingerprint),o.requestSession&&(this._requestSession=o.requestSession),o.propagationContext&&(this._propagationContext=o.propagationContext)}return this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this._propagationContext=$r(),this}addBreadcrumb(e,t){const o=typeof t=="number"?t:qf;if(o<=0)return this;const i={timestamp:Ie(),...e},r=this._breadcrumbs;return r.push(i),this._breadcrumbs=r.length>o?r.slice(-o):r,this._notifyScopeListeners(),this}getLastBreadcrumb(){return this._breadcrumbs[this._breadcrumbs.length-1]}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this.getScopeData().attachments}clearAttachments(){return this._attachments=[],this}getScopeData(){const{_breadcrumbs:e,_attachments:t,_contexts:o,_tags:i,_extra:r,_user:c,_level:a,_fingerprint:l,_eventProcessors:s,_propagationContext:f,_sdkProcessingMetadata:A,_transactionName:d,_span:E}=this;return{breadcrumbs:e,attachments:t,contexts:o,tags:i,extra:r,user:c,level:a,fingerprint:l||[],eventProcessors:s,propagationContext:f,sdkProcessingMetadata:A,transactionName:d,span:E}}applyToEvent(e,t={},o=[]){Jr(e,this.getScopeData());const i=[...o,...Fo(),...this._eventProcessors];return gt(i,e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}setPropagationContext(e){return this._propagationContext=e,this}getPropagationContext(){return this._propagationContext}captureException(e,t){const o=t&&t.event_id?t.event_id:cn();if(!this._client)return w.warn("No client configured on scope - will not capture exception!"),o;const i=new Error("Sentry syntheticException");return this._client.captureException(e,{originalException:e,syntheticException:i,...t,event_id:o},this),o}captureMessage(e,t,o){const i=o&&o.event_id?o.event_id:cn();if(!this._client)return w.warn("No client configured on scope - will not capture message!"),i;const r=new Error(e);return this._client.captureMessage(e,t,{originalException:e,syntheticException:r,...o,event_id:i},this),i}captureEvent(e,t){const o=t&&t.event_id?t.event_id:cn();return this._client?(this._client.captureEvent(e,{...t,event_id:o},this),o):(w.warn("No client configured on scope - will not capture event!"),o)}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}}function Hf(){return pt||(pt=new Fn),pt}function SB(n){pt=n}function $r(){return{traceId:cn(),spanId:cn().substring(16)}}const vo="7.112.0",Co=parseFloat(vo),Gf=100;class ko{constructor(e,t,o,i=Co){this._version=i;let r;t?r=t:(r=new Fn,r.setClient(e));let c;o?c=o:(c=new Fn,c.setClient(e)),this._stack=[{scope:r}],e&&this.bindClient(e),this._isolationScope=c}isOlderThan(e){return this._version<e}bindClient(e){const t=this.getStackTop();t.client=e,t.scope.setClient(e),e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){const e=this.getScope().clone();return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return this.getStack().length<=1?!1:!!this.getStack().pop()}withScope(e){const t=this.pushScope();let o;try{o=e(t)}catch(i){throw this.popScope(),i}return lt(o)?o.then(i=>(this.popScope(),i),i=>{throw this.popScope(),i}):(this.popScope(),o)}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getIsolationScope(){return this._isolationScope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){const o=this._lastEventId=t&&t.event_id?t.event_id:cn(),i=new Error("Sentry syntheticException");return this.getScope().captureException(e,{originalException:e,syntheticException:i,...t,event_id:o}),o}captureMessage(e,t,o){const i=this._lastEventId=o&&o.event_id?o.event_id:cn(),r=new Error(e);return this.getScope().captureMessage(e,t,{originalException:e,syntheticException:r,...o,event_id:i}),i}captureEvent(e,t){const o=t&&t.event_id?t.event_id:cn();return e.type||(this._lastEventId=o),this.getScope().captureEvent(e,{...t,event_id:o}),o}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){const{scope:o,client:i}=this.getStackTop();if(!i)return;const{beforeBreadcrumb:r=null,maxBreadcrumbs:c=Gf}=i.getOptions&&i.getOptions()||{};if(c<=0)return;const l={timestamp:Ie(),...e},s=r?ft(()=>r(l,t)):l;s!==null&&(i.emit&&i.emit("beforeAddBreadcrumb",s,t),o.addBreadcrumb(s,c))}setUser(e){this.getScope().setUser(e),this.getIsolationScope().setUser(e)}setTags(e){this.getScope().setTags(e),this.getIsolationScope().setTags(e)}setExtras(e){this.getScope().setExtras(e),this.getIsolationScope().setExtras(e)}setTag(e,t){this.getScope().setTag(e,t),this.getIsolationScope().setTag(e,t)}setExtra(e,t){this.getScope().setExtra(e,t),this.getIsolationScope().setExtra(e,t)}setContext(e,t){this.getScope().setContext(e,t),this.getIsolationScope().setContext(e,t)}configureScope(e){const{scope:t,client:o}=this.getStackTop();o&&e(t)}run(e){const t=zr(this);try{e(this)}finally{zr(t)}}getIntegration(e){const t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch{return M&&w.warn(`Cannot retrieve integration ${e.id} from the current Hub`),null}}startTransaction(e,t){const o=this._callExtensionMethod("startTransaction",e,t);return M&&!o&&(this.getClient()?w.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`):w.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")),o}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){const t=this.getStackTop().scope,o=t.getSession();o&&Dr(o),this._sendSessionUpdate(),t.setSession()}startSession(e){const{scope:t,client:o}=this.getStackTop(),{release:i,environment:r=Et}=o&&o.getOptions()||{},{userAgent:c}=N.navigator||{},a=Pr({release:i,environment:r,user:t.getUser(),...c&&{userAgent:c},...e}),l=t.getSession&&t.getSession();return l&&l.status==="ok"&&$n(l,{status:"exited"}),this.endSession(),t.setSession(a),a}shouldSendDefaultPii(){const e=this.getClient(),t=e&&e.getOptions();return!!(t&&t.sendDefaultPii)}_sendSessionUpdate(){const{scope:e,client:t}=this.getStackTop(),o=e.getSession();o&&t&&t.captureSession&&t.captureSession(o)}_callExtensionMethod(e,...t){const i=Ae().__SENTRY__;if(i&&i.extensions&&typeof i.extensions[e]=="function")return i.extensions[e].apply(this,t);M&&w.warn(`Extension method ${e} couldn't be found, doing nothing.`)}}function Ae(){return N.__SENTRY__=N.__SENTRY__||{extensions:{},hub:void 0},N}function zr(n){const e=Ae(),t=_t(e);return wo(e,n),t}function vn(){const n=Ae();if(n.__SENTRY__&&n.__SENTRY__.acs){const e=n.__SENTRY__.acs.getCurrentHub();if(e)return e}return qr(n)}function bt(){return vn().getIsolationScope()}function qr(n=Ae()){return(!Hr(n)||_t(n).isOlderThan(Co))&&wo(n,new ko),_t(n)}function xB(n,e=qr()){if(!Hr(n)||_t(n).isOlderThan(Co)){const t=e.getClient(),o=e.getScope(),i=e.getIsolationScope();wo(n,new ko(t,o.clone(),i.clone()))}}function TB(n){const e=Ae();e.__SENTRY__=e.__SENTRY__||{},e.__SENTRY__.acs=n}function IB(n,e={}){const t=Ae();return t.__SENTRY__&&t.__SENTRY__.acs?t.__SENTRY__.acs.runWithAsyncContext(n,e):n()}function Hr(n){return!!(n&&n.__SENTRY__&&n.__SENTRY__.hub)}function _t(n){return Fr("hub",()=>new ko,n)}function wo(n,e){if(!n)return!1;const t=n.__SENTRY__=n.__SENTRY__||{};return t.hub=e,!0}function Wf(){const n=typeof WeakSet=="function",e=n?new WeakSet:[];function t(i){if(n)return e.has(i)?!0:(e.add(i),!1);for(let r=0;r<e.length;r++)if(e[r]===i)return!0;return e.push(i),!1}function o(i){if(n)e.delete(i);else for(let r=0;r<e.length;r++)if(e[r]===i){e.splice(r,1);break}}return[t,o]}function Kf(n,e=!1){return!(e||n&&!n.startsWith("/")&&!n.match(/^[A-Z]:/)&&!n.startsWith(".")&&!n.match(/^[a-zA-Z]([a-zA-Z0-9.\-+])*:\/\//))&&n!==void 0&&!n.includes("node_modules/")}function Yf(n){const e=/^\s*[-]{4,}$/,t=/at (?:async )?(?:(.+?)\s+\()?(?:(.+):(\d+):(\d+)?|([^)]+))\)?/;return o=>{const i=o.match(t);if(i){let r,c,a,l,s;if(i[1]){a=i[1];let d=a.lastIndexOf(".");if(a[d-1]==="."&&d--,d>0){r=a.slice(0,d),c=a.slice(d+1);const E=r.indexOf(".Module");E>0&&(a=a.slice(E+1),r=r.slice(0,E))}l=void 0}c&&(l=r,s=c),c==="<anonymous>"&&(s=void 0,a=void 0),a===void 0&&(s=s||"<anonymous>",a=l?`${l}.${s}`:s);let f=i[2]&&i[2].startsWith("file://")?i[2].slice(7):i[2];const A=i[5]==="native";return f&&f.match(/\/[A-Z]:/)&&(f=f.slice(1)),!f&&i[5]&&!A&&(f=i[5]),{filename:f,module:n?n(f):void 0,function:a,lineno:parseInt(i[3],10)||void 0,colno:parseInt(i[4],10)||void 0,in_app:Kf(f,A)}}if(o.match(e))return{filename:o}}}const Gr=50,Wr=/\(error: (.*)\)/,Kr=/captureMessage|captureException/;function Yr(...n){const e=n.sort((t,o)=>t[0]-o[0]).map(t=>t[1]);return(t,o=0)=>{const i=[],r=t.split(`
`);for(let c=o;c<r.length;c++){const a=r[c];if(a.length>1024)continue;const l=Wr.test(a)?a.replace(Wr,"$1"):a;if(!l.match(/\S*Error: /)){for(const s of e){const f=s(l);if(f){i.push(f);break}}if(i.length>=Gr)break}}return Vr(i)}}function Vf(n){return Array.isArray(n)?Yr(...n):n}function Vr(n){if(!n.length)return[];const e=Array.from(n);return/sentryWrapped/.test(e[e.length-1].function||"")&&e.pop(),e.reverse(),Kr.test(e[e.length-1].function||"")&&(e.pop(),Kr.test(e[e.length-1].function||"")&&e.pop()),e.slice(0,Gr).map(t=>({...t,filename:t.filename||e[e.length-1].filename,function:t.function||"?"}))}const So="<anonymous>";function Rn(n){try{return!n||typeof n!="function"?So:n.name||So}catch{return So}}function Xf(n){return[90,Yf(n)]}function gn(n,e=100,t=1/0){try{return xo("",n,e,t)}catch(o){return{ERROR:`**non-serializable** (${o})`}}}function Xr(n,e=3,t=100*1024){const o=gn(n,e);return eu(o)>t?Xr(n,e-1,t):o}function xo(n,e,t=1/0,o=1/0,i=Wf()){const[r,c]=i;if(e==null||["number","boolean","string"].includes(typeof e)&&!bf(e))return e;const a=Zf(n,e);if(!a.startsWith("[object "))return a;if(e.__sentry_skip_normalization__)return e;const l=typeof e.__sentry_override_normalization_depth__=="number"?e.__sentry_override_normalization_depth__:t;if(l===0)return a.replace("object ","");if(r(e))return"[Circular ~]";const s=e;if(s&&typeof s.toJSON=="function")try{const E=s.toJSON();return xo("",E,l-1,o,i)}catch{}const f=Array.isArray(e)?[]:{};let A=0;const d=wr(e);for(const E in d){if(!Object.prototype.hasOwnProperty.call(d,E))continue;if(A>=o){f[E]="[MaxProperties ~]";break}const h=d[E];f[E]=xo(E,h,l-1,o,i),A++}return c(e),f}function Zf(n,e){try{if(n==="domain"&&e&&typeof e=="object"&&e._events)return"[Domain]";if(n==="domainEmitter")return"[DomainEmitter]";if(typeof global<"u"&&e===global)return"[Global]";if(typeof window<"u"&&e===window)return"[Window]";if(typeof document<"u"&&e===document)return"[Document]";if(yr(e))return"[VueViewModel]";if(pf(e))return"[SyntheticEvent]";if(typeof e=="number"&&e!==e)return"[NaN]";if(typeof e=="function")return`[Function: ${Rn(e)}]`;if(typeof e=="symbol")return`[${String(e)}]`;if(typeof e=="bigint")return`[BigInt: ${String(e)}]`;const t=Qf(e);return/^HTML(\w*)Element$/.test(t)?`[HTMLElement: ${t}]`:`[object ${t}]`}catch(t){return`**non-serializable** (${t})`}}function Qf(n){const e=Object.getPrototypeOf(n);return e?e.constructor.name:"null prototype"}function nu(n){return~-encodeURI(n).split(/%..|./).length}function eu(n){return nu(JSON.stringify(n))}function OB(n,e){const t=e.replace(/\\/g,"/").replace(/[|\\{}()[\]^$+*?.]/g,"\\$&");let o=n;try{o=decodeURI(n)}catch{}return o.replace(/\\/g,"/").replace(/webpack:\/?/g,"").replace(new RegExp(`(file://)?/*${t}/*`,"ig"),"app:///")}function tu(n,e,t,o,i,r){const{normalizeDepth:c=3,normalizeMaxBreadth:a=1e3}=n,l={...e,event_id:e.event_id||t.event_id||cn(),timestamp:e.timestamp||Ie()},s=t.integrations||n.integrations.map(y=>y.name);ou(l,n),cu(l,s),e.type===void 0&&iu(l,n.stackParser);const f=lu(o,t.captureContext);t.mechanism&&Te(l,t.mechanism);const A=i&&i.getEventProcessors?i.getEventProcessors():[],d=Hf().getScopeData();if(r){const y=r.getScopeData();Ur(d,y)}if(f){const y=f.getScopeData();Ur(d,y)}const E=[...t.attachments||[],...d.attachments];E.length&&(t.attachments=E),Jr(l,d);const h=[...A,...Fo(),...d.eventProcessors];return gt(h,l,t).then(y=>(y&&ru(y),typeof c=="number"&&c>0?au(y,c,a):y))}function ou(n,e){const{environment:t,release:o,dist:i,maxValueLength:r=250}=e;"environment"in n||(n.environment="environment"in e?t:Et),n.release===void 0&&o!==void 0&&(n.release=o),n.dist===void 0&&i!==void 0&&(n.dist=i),n.message&&(n.message=ae(n.message,r));const c=n.exception&&n.exception.values&&n.exception.values[0];c&&c.value&&(c.value=ae(c.value,r));const a=n.request;a&&a.url&&(a.url=ae(a.url,r))}const Zr=new WeakMap;function iu(n,e){const t=N._sentryDebugIds;if(!t)return;let o;const i=Zr.get(e);i?o=i:(o=new Map,Zr.set(e,o));const r=Object.keys(t).reduce((c,a)=>{let l;const s=o.get(a);s?l=s:(l=e(a),o.set(a,l));for(let f=l.length-1;f>=0;f--){const A=l[f];if(A.filename){c[A.filename]=t[a];break}}return c},{});try{n.exception.values.forEach(c=>{c.stacktrace.frames.forEach(a=>{a.filename&&(a.debug_id=r[a.filename])})})}catch{}}function ru(n){const e={};try{n.exception.values.forEach(o=>{o.stacktrace.frames.forEach(i=>{i.debug_id&&(i.abs_path?e[i.abs_path]=i.debug_id:i.filename&&(e[i.filename]=i.debug_id),delete i.debug_id)})})}catch{}if(Object.keys(e).length===0)return;n.debug_meta=n.debug_meta||{},n.debug_meta.images=n.debug_meta.images||[];const t=n.debug_meta.images;Object.keys(e).forEach(o=>{t.push({type:"sourcemap",code_file:o,debug_id:e[o]})})}function cu(n,e){e.length>0&&(n.sdk=n.sdk||{},n.sdk.integrations=[...n.sdk.integrations||[],...e])}function au(n,e,t){if(!n)return null;const o={...n,...n.breadcrumbs&&{breadcrumbs:n.breadcrumbs.map(i=>({...i,...i.data&&{data:gn(i.data,e,t)}}))},...n.user&&{user:gn(n.user,e,t)},...n.contexts&&{contexts:gn(n.contexts,e,t)},...n.extra&&{extra:gn(n.extra,e,t)}};return n.contexts&&n.contexts.trace&&o.contexts&&(o.contexts.trace=n.contexts.trace,n.contexts.trace.data&&(o.contexts.trace.data=gn(n.contexts.trace.data,e,t))),n.spans&&(o.spans=n.spans.map(i=>{const r=se(i).data;return r&&(i.data=gn(r,e,t)),i})),o}function lu(n,e){if(!e)return n;const t=n?n.clone():new Fn;return t.update(e),t}function su(n){if(n)return Au(n)?{captureContext:n}:uu(n)?{captureContext:n}:n}function Au(n){return n instanceof Fn||typeof n=="function"}const fu=["user","level","extra","contexts","tags","fingerprint","requestSession","propagationContext"];function uu(n){return Object.keys(n).some(e=>fu.includes(e))}var Eu,ht,du,Qr,mt,pn,gu,pu;function nc(n,e){return vn().captureException(n,su(e))}function RB(n,e){const t=typeof e=="string"?e:void 0,o=typeof e!="string"?{captureContext:e}:void 0;return pn().captureMessage(n,t,o)}function ec(n,e){return vn().captureEvent(n,e)}function PB(n){pn().configureScope(n)}function zn(n,e){vn().addBreadcrumb(n,e)}function DB(n,e){pn().setContext(n,e)}function NB(n){pn().setExtras(n)}function LB(n,e){pn().setExtra(n,e)}function MB(n){pn().setTags(n)}function jB(n,e){pn().setTag(n,e)}function JB(n){pn().setUser(n)}function tc(...n){const e=vn();if(n.length===2){const[t,o]=n;return t?e.withScope(()=>(e.getStackTop().scope=t,o(t))):e.withScope(o)}return e.withScope(n[0])}function UB(n){return gu(()=>n(pu()))}function $B(n,e){return tc(t=>(t.setSpan(n),e(t)))}function zB(n,e){return pn().startTransaction({...n},e)}function oc(n,e){const t=Cn(),o=Y();if(!o)mt&&ht.warn("Cannot capture check-in. No client defined.");else if(!o.captureCheckIn)mt&&ht.warn("Cannot capture check-in. Client does not support sending check-ins.");else return o.captureCheckIn(n,e,t);return du()}function qB(n,e,t){const o=oc({monitorSlug:n,status:"in_progress"},t),i=Qr();function r(a){oc({monitorSlug:n,status:a,checkInId:o,duration:Qr()-i})}let c;try{c=e()}catch(a){throw r("error"),a}return Eu(c)?Promise.resolve(c).then(()=>{r("ok")},()=>{r("error")}):r("ok"),c}async function HB(n){const e=Y();return e?e.flush(n):(mt&&ht.warn("Cannot flush events. No client defined."),Promise.resolve(!1))}async function GB(n){const e=Y();return e?e.close(n):(mt&&ht.warn("Cannot flush events and disable SDK. No client defined."),Promise.resolve(!1))}function WB(){return pn().lastEventId()}function Y(){return vn().getClient()}function KB(){return!!Y()}function Cn(){return vn().getScope()}function ic(n){const e=Y(),t=bt(),o=Cn(),{release:i,environment:r=Et}=e&&e.getOptions()||{},{userAgent:c}=N.navigator||{},a=Pr({release:i,environment:r,user:o.getUser()||t.getUser(),...c&&{userAgent:c},...n}),l=t.getSession();return l&&l.status==="ok"&&$n(l,{status:"exited"}),rc(),t.setSession(a),o.setSession(a),a}function rc(){const n=bt(),e=Cn(),t=e.getSession()||n.getSession();t&&Dr(t),cc(),n.setSession(),e.setSession()}function cc(){const n=bt(),e=Cn(),t=Y(),o=e.getSession()||n.getSession();o&&t&&t.captureSession&&t.captureSession(o)}function ac(n=!1){if(n){rc();return}cc()}var bu,_u,hu;const lc=[];function mu(n){const e={};return n.forEach(t=>{const{name:o}=t,i=e[o];i&&!i.isDefaultInstance&&t.isDefaultInstance||(e[o]=t)}),Object.keys(e).map(t=>e[t])}function Bu(n){const e=n.defaultIntegrations||[],t=n.integrations;e.forEach(c=>{c.isDefaultInstance=!0});let o;Array.isArray(t)?o=[...e,...t]:typeof t=="function"?o=Or(t(e)):o=e;const i=mu(o),r=Fu(i,c=>c.name==="Debug");if(r!==-1){const[c]=i.splice(r,1);i.push(c)}return i}function yu(n,e){const t={};return e.forEach(o=>{o&&Ac(n,o,t)}),t}function sc(n,e){for(const t of e)t&&t.afterAllSetup&&t.afterAllSetup(n)}function Ac(n,e,t){if(t[e.name]){M&&w.log(`Integration skipped because it was already installed: ${e.name}`);return}if(t[e.name]=e,lc.indexOf(e.name)===-1&&(e.setupOnce(If,vn),lc.push(e.name)),e.setup&&typeof e.setup=="function"&&e.setup(n),n.on&&typeof e.preprocessEvent=="function"){const o=e.preprocessEvent.bind(e);n.on("preprocessEvent",(i,r)=>o(i,r,n))}if(n.addEventProcessor&&typeof e.processEvent=="function"){const o=e.processEvent.bind(e),i=Object.assign((r,c)=>o(r,c,n),{id:e.name});n.addEventProcessor(i)}M&&w.log(`Integration installed: ${e.name}`)}function YB(n){const e=hu();if(!e||!e.addIntegration){_u&&bu.warn(`Cannot add integration "${n.name}" because no SDK Client is available.`);return}e.addIntegration(n)}function Fu(n,e){for(let t=0;t<n.length;t++)if(e(n[t])===!0)return t;return-1}function sn(n,e){return Object.assign(function(...o){return e(...o)},{id:n})}function VB(n){return n}let fc;const uc="FunctionToString",Ec=new WeakMap,dc=()=>({name:uc,setupOnce(){fc=Function.prototype.toString;try{Function.prototype.toString=function(...n){const e=bo(this),t=Ec.has(Y())&&e!==void 0?e:this;return fc.apply(t,n)}}catch{}},setup(n){Ec.set(n,!0)}}),vu=sn(uc,dc),Cu=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/,/^ResizeObserver loop completed with undelivered notifications.$/,/^Cannot redefine property: googletag$/],ku=[/^.*\/healthcheck$/,/^.*\/healthy$/,/^.*\/live$/,/^.*\/ready$/,/^.*\/heartbeat$/,/^.*\/health$/,/^.*\/healthz$/],gc="InboundFilters",pc=(n={})=>({name:gc,setupOnce(){},processEvent(e,t,o){const i=o.getOptions(),r=Su(n,i);return xu(e,r)?null:e}}),wu=sn(gc,pc);function Su(n={},e={}){return{allowUrls:[...n.allowUrls||[],...e.allowUrls||[]],denyUrls:[...n.denyUrls||[],...e.denyUrls||[]],ignoreErrors:[...n.ignoreErrors||[],...e.ignoreErrors||[],...n.disableErrorDefaults?[]:Cu],ignoreTransactions:[...n.ignoreTransactions||[],...e.ignoreTransactions||[],...n.disableTransactionDefaults?[]:ku],ignoreInternal:n.ignoreInternal!==void 0?n.ignoreInternal:!0}}function xu(n,e){return e.ignoreInternal&&Du(n)?(M&&w.warn(`Event dropped due to being internal Sentry Error.
Event: ${On(n)}`),!0):Tu(n,e.ignoreErrors)?(M&&w.warn(`Event dropped due to being matched by \`ignoreErrors\` option.
Event: ${On(n)}`),!0):Iu(n,e.ignoreTransactions)?(M&&w.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.
Event: ${On(n)}`),!0):Ou(n,e.denyUrls)?(M&&w.warn(`Event dropped due to being matched by \`denyUrls\` option.
Event: ${On(n)}.
Url: ${Bt(n)}`),!0):Ru(n,e.allowUrls)?!1:(M&&w.warn(`Event dropped due to not being matched by \`allowUrls\` option.
Event: ${On(n)}.
Url: ${Bt(n)}`),!0)}function Tu(n,e){return n.type||!e||!e.length?!1:Pu(n).some(t=>ut(t,e))}function Iu(n,e){if(n.type!=="transaction"||!e||!e.length)return!1;const t=n.transaction;return t?ut(t,e):!1}function Ou(n,e){if(!e||!e.length)return!1;const t=Bt(n);return t?ut(t,e):!1}function Ru(n,e){if(!e||!e.length)return!0;const t=Bt(n);return t?ut(t,e):!0}function Pu(n){const e=[];n.message&&e.push(n.message);let t;try{t=n.exception.values[n.exception.values.length-1]}catch{}return t&&t.value&&(e.push(t.value),t.type&&e.push(`${t.type}: ${t.value}`)),M&&e.length===0&&w.error(`Could not extract message for event ${On(n)}`),e}function Du(n){try{return n.exception.values[0].type==="SentryError"}catch{}return!1}function Nu(n=[]){for(let e=n.length-1;e>=0;e--){const t=n[e];if(t&&t.filename!=="<anonymous>"&&t.filename!=="[native code]")return t.filename||null}return null}function Bt(n){try{let e;try{e=n.exception.values[0].stacktrace.frames}catch{}return e?Nu(e):null}catch{return M&&w.error(`Cannot extract url for event ${On(n)}`),null}}function bc(n,e,t=250,o,i,r,c){if(!r.exception||!r.exception.values||!c||!Un(c.originalException,Error))return;const a=r.exception.values.length>0?r.exception.values[r.exception.values.length-1]:void 0;a&&(r.exception.values=Lu(To(n,e,i,c.originalException,o,r.exception.values,a,0),t))}function To(n,e,t,o,i,r,c,a){if(r.length>=t+1)return r;let l=[...r];if(Un(o[i],Error)){_c(c,a);const s=n(e,o[i]),f=l.length;hc(s,i,f,a),l=To(n,e,t,o[i],i,[s,...l],s,f)}return Array.isArray(o.errors)&&o.errors.forEach((s,f)=>{if(Un(s,Error)){_c(c,a);const A=n(e,s),d=l.length;hc(A,`errors[${f}]`,d,a),l=To(n,e,t,s,i,[A,...l],A,d)}}),l}function _c(n,e){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,...n.type==="AggregateError"&&{is_exception_group:!0},exception_id:e}}function hc(n,e,t,o){n.mechanism=n.mechanism||{type:"generic",handled:!0},n.mechanism={...n.mechanism,type:"chained",source:e,exception_id:t,parent_id:o}}function Lu(n,e){return n.map(t=>(t.value&&(t.value=ae(t.value,e)),t))}var Mu,ju,Ju,Uu,$u,zu,qu;function mc(n,e){return n(e.stack||"",1)}function Bc(n,e){const t={type:e.name||e.constructor.name,value:e.message},o=mc(n,e);return o.length&&(t.stacktrace={frames:o}),t}function Hu(n){if("name"in n&&typeof n.name=="string"){let e=`'${n.name}' captured as exception`;return"message"in n&&typeof n.message=="string"&&(e+=` with message '${n.message}'`),e}else return"message"in n&&typeof n.message=="string"?n.message:`Object captured as exception with keys: ${qu(n)}`}function QB(n,e,t,o){const i=typeof n=="function"?n().getClient():n;let r=t;const a=o&&o.data&&o.data.mechanism||{handled:!0,type:"generic"};let l;if(!Mu(t)){if(ju(t)){const f=i&&i.getOptions().normalizeDepth;l={__serialized__:zu(t,f)};const A=Hu(t);r=o&&o.syntheticException||new Error(A),r.message=A}else r=o&&o.syntheticException||new Error(t),r.message=t;a.synthetic=!0}const s={exception:{values:[Bc(e,r)]}};return l&&(s.extra=l),Uu(s,void 0,void 0),$u(s,a),{...s,event_id:o&&o.event_id}}function ny(n,e,t="info",o,i){const r={event_id:o&&o.event_id,level:t};if(i&&o&&o.syntheticException){const c=mc(n,o.syntheticException);c.length&&(r.exception={values:[{value:e,stacktrace:{frames:c}}]})}if(Ju(e)){const{__sentry_template_string__:c,__sentry_template_values__:a}=e;return r.logentry={message:c,params:a},r}return r.message=e,r}const Gu="cause",Wu=5,yc="LinkedErrors",Ku=(n={})=>{const e=n.limit||Wu,t=n.key||Gu;return{name:yc,setupOnce(){},preprocessEvent(o,i,r){const c=r.getOptions();bc(Bc,c.stackParser,c.maxValueLength,t,e,o,i)}}},Yu=sn(yc,Ku),Vu=p,L=N;let Io=0;function Fc(){return Io>0}function Xu(){Io++,setTimeout(()=>{Io--})}function fe(n,e={},t){if(typeof n!="function")return n;try{const i=n.__sentry_wrapped__;if(i)return i;if(bo(n))return n}catch{return n}const o=function(){const i=Array.prototype.slice.call(arguments);try{t&&typeof t=="function"&&t.apply(this,arguments);const r=i.map(c=>fe(c,e));return n.apply(this,r)}catch(r){throw Xu(),tc(c=>{c.addEventProcessor(a=>(e.mechanism&&(mo(a,void 0,void 0),Te(a,e.mechanism)),a.extra={...a.extra,arguments:i},a)),nc(r)}),r}};try{for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(o[i]=n[i])}catch{}kr(o,n),xe(n,"__sentry_wrapped__",o);try{Object.getOwnPropertyDescriptor(o,"name").configurable&&Object.defineProperty(o,"name",{get(){return n.name}})}catch{}return o}const ue={},vc={};function qn(n,e){ue[n]=ue[n]||[],ue[n].push(e)}function ty(){Object.keys(ue).forEach(n=>{ue[n]=void 0})}function Hn(n,e){vc[n]||(e(),vc[n]=!0)}function fn(n,e){const t=n&&ue[n];if(t)for(const o of t)try{o(e)}catch(i){Se&&w.error(`Error while triggering instrumentation handler.
Type: ${n}
Name: ${Rn(o)}
Error:`,i)}}let yt=null;function Zu(n){const e="error";qn(e,n),Hn(e,Qu)}function Qu(){yt=N.onerror,N.onerror=function(n,e,t,o,i){return fn("error",{column:o,error:i,line:t,msg:n,url:e}),yt&&!yt.__SENTRY_LOADER__?yt.apply(this,arguments):!1},N.onerror.__SENTRY_INSTRUMENTED__=!0}let Ft=null;function nE(n){const e="unhandledrejection";qn(e,n),Hn(e,eE)}function eE(){Ft=N.onunhandledrejection,N.onunhandledrejection=function(n){return fn("unhandledrejection",n),Ft&&!Ft.__SENTRY_LOADER__?Ft.apply(this,arguments):!0},N.onunhandledrejection.__SENTRY_INSTRUMENTED__=!0}const kn=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__;function Cc(n,e){const t=Ro(n,e),o={type:e&&e.name,value:rE(e)};return t.length&&(o.stacktrace={frames:t}),o.type===void 0&&o.value===""&&(o.value="Unrecoverable error caught"),o}function tE(n,e,t,o){const i=Y(),r=i&&i.getOptions().normalizeDepth,c={exception:{values:[{type:at(e)?e.constructor.name:o?"UnhandledRejection":"Error",value:lE(e,{isUnhandledRejection:o})}]},extra:{__serialized__:Xr(e,r)}};if(t){const a=Ro(n,t);a.length&&(c.exception.values[0].stacktrace={frames:a})}return c}function Oo(n,e){return{exception:{values:[Cc(n,e)]}}}function Ro(n,e){const t=e.stacktrace||e.stack||"",o=iE(e);try{return n(t,o)}catch{}return[]}const oE=/Minified React error #\d+;/i;function iE(n){if(n){if(typeof n.framesToPop=="number")return n.framesToPop;if(oE.test(n.message))return 1}return 0}function rE(n){const e=n&&n.message;return e?e.error&&typeof e.error.message=="string"?e.error.message:e:"No error message"}function cE(n,e,t,o){const i=t&&t.syntheticException||void 0,r=Po(n,e,i,o);return Te(r),r.level="error",t&&t.event_id&&(r.event_id=t.event_id),le(r)}function aE(n,e,t="info",o,i){const r=o&&o.syntheticException||void 0,c=Do(n,e,r,i);return c.level=t,o&&o.event_id&&(c.event_id=o.event_id),le(c)}function Po(n,e,t,o,i){let r;if(fo(e)&&e.error)return Oo(n,e.error);if(Br(e)||Ef(e)){const c=e;if("stack"in e)r=Oo(n,e);else{const a=c.name||(Br(c)?"DOMError":"DOMException"),l=c.message?`${a}: ${c.message}`:a;r=Do(n,l,t,o),mo(r,l)}return"code"in c&&(r.tags={...r.tags,"DOMException.code":`${c.code}`}),r}return mr(e)?Oo(n,e):re(e)||at(e)?(r=tE(n,e,t,i),Te(r,{synthetic:!0}),r):(r=Do(n,e,t,o),mo(r,`${e}`,void 0),Te(r,{synthetic:!0}),r)}function Do(n,e,t,o){const i={};if(o&&t){const r=Ro(n,t);r.length&&(i.exception={values:[{value:e,stacktrace:{frames:r}}]})}if(uo(e)){const{__sentry_template_string__:r,__sentry_template_values__:c}=e;return i.logentry={message:r,params:c},i}return i.message=e,i}function lE(n,{isUnhandledRejection:e}){const t=wf(n),o=e?"promise rejection":"exception";return fo(n)?`Event \`ErrorEvent\` captured as ${o} with message \`${n.message}\``:at(n)?`Event \`${sE(n)}\` (type=${n.type}) captured as ${o}`:`Object captured as ${o} with keys: ${t}`}function sE(n){try{const e=Object.getPrototypeOf(n);return e?e.constructor.name:void 0}catch{}}const kc="GlobalHandlers",wc=(n={})=>{const e={onerror:!0,onunhandledrejection:!0,...n};return{name:kc,setupOnce(){Error.stackTraceLimit=50},setup(t){e.onerror&&(fE(t),xc("onerror")),e.onunhandledrejection&&(uE(t),xc("onunhandledrejection"))}}},AE=sn(kc,wc);function fE(n){Zu(e=>{const{stackParser:t,attachStacktrace:o}=Tc();if(Y()!==n||Fc())return;const{msg:i,url:r,line:c,column:a,error:l}=e,s=l===void 0&&Bn(i)?gE(i,r,c,a):Sc(Po(t,l||i,void 0,o,!1),r,c,a);s.level="error",ec(s,{originalException:l,mechanism:{handled:!1,type:"onerror"}})})}function uE(n){nE(e=>{const{stackParser:t,attachStacktrace:o}=Tc();if(Y()!==n||Fc())return;const i=EE(e),r=Eo(i)?dE(i):Po(t,i,void 0,o,!0);r.level="error",ec(r,{originalException:i,mechanism:{handled:!1,type:"onunhandledrejection"}})})}function EE(n){if(Eo(n))return n;const e=n;try{if("reason"in e)return e.reason;if("detail"in e&&"reason"in e.detail)return e.detail.reason}catch{}return n}function dE(n){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(n)}`}]}}}function gE(n,e,t,o){const i=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let r=fo(n)?n.message:n,c="Error";const a=r.match(i);return a&&(c=a[1],r=a[2]),Sc({exception:{values:[{type:c,value:r}]}},e,t,o)}function Sc(n,e,t,o){const i=n.exception=n.exception||{},r=i.values=i.values||[],c=r[0]=r[0]||{},a=c.stacktrace=c.stacktrace||{},l=a.frames=a.frames||[],s=isNaN(parseInt(o,10))?void 0:o,f=isNaN(parseInt(t,10))?void 0:t,A=Bn(e)&&e.length>0?e:mf();return l.length===0&&l.push({colno:s,filename:A,function:"?",in_app:!0,lineno:f}),n}function xc(n){kn&&w.log(`Global Handler attached: ${n}`)}function Tc(){const n=Y();return n&&n.getOptions()||{stackParser:()=>[],attachStacktrace:!1}}const pE=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","BroadcastChannel","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","SharedWorker","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Ic="TryCatch",Oc=(n={})=>{const e={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...n};return{name:Ic,setupOnce(){e.setTimeout&&Z(L,"setTimeout",Rc),e.setInterval&&Z(L,"setInterval",Rc),e.requestAnimationFrame&&Z(L,"requestAnimationFrame",_E),e.XMLHttpRequest&&"XMLHttpRequest"in L&&Z(XMLHttpRequest.prototype,"send",hE);const t=e.eventTarget;t&&(Array.isArray(t)?t:pE).forEach(mE)}}},bE=sn(Ic,Oc);function Rc(n){return function(...e){const t=e[0];return e[0]=fe(t,{mechanism:{data:{function:Rn(n)},handled:!1,type:"instrument"}}),n.apply(this,e)}}function _E(n){return function(e){return n.apply(this,[fe(e,{mechanism:{data:{function:"requestAnimationFrame",handler:Rn(n)},handled:!1,type:"instrument"}})])}}function hE(n){return function(...e){const t=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(i=>{i in t&&typeof t[i]=="function"&&Z(t,i,function(r){const c={mechanism:{data:{function:i,handler:Rn(r)},handled:!1,type:"instrument"}},a=bo(r);return a&&(c.mechanism.data.handler=Rn(a)),fe(r,c)})}),n.apply(this,e)}}function mE(n){const e=L,t=e[n]&&e[n].prototype;!t||!t.hasOwnProperty||!t.hasOwnProperty("addEventListener")||(Z(t,"addEventListener",function(o){return function(i,r,c){try{typeof r.handleEvent=="function"&&(r.handleEvent=fe(r.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Rn(r),target:n},handled:!1,type:"instrument"}}))}catch{}return o.apply(this,[i,fe(r,{mechanism:{data:{function:"addEventListener",handler:Rn(r),target:n},handled:!1,type:"instrument"}}),c])}}),Z(t,"removeEventListener",function(o){return function(i,r,c){const a=r;try{const l=a&&a.__sentry_wrapped__;l&&o.call(this,i,l,c)}catch{}return o.call(this,i,a,c)}}))}function BE(n){const e="console";qn(e,n),Hn(e,yE)}function yE(){"console"in N&&po.forEach(function(n){n in N.console&&Z(N.console,n,function(e){return At[n]=e,function(...t){fn("console",{args:t,level:n});const i=At[n];i&&i.apply(N.console,t)}})})}const Ee=N,FE=1e3;let Pc,No,Lo;function vE(n){const e="dom";qn(e,n),Hn(e,CE)}function CE(){if(!Ee.document)return;const n=fn.bind(null,"dom"),e=Dc(n,!0);Ee.document.addEventListener("click",e,!1),Ee.document.addEventListener("keypress",e,!1),["EventTarget","Node"].forEach(t=>{const o=Ee[t]&&Ee[t].prototype;!o||!o.hasOwnProperty||!o.hasOwnProperty("addEventListener")||(Z(o,"addEventListener",function(i){return function(r,c,a){if(r==="click"||r=="keypress")try{const l=this,s=l.__sentry_instrumentation_handlers__=l.__sentry_instrumentation_handlers__||{},f=s[r]=s[r]||{refCount:0};if(!f.handler){const A=Dc(n);f.handler=A,i.call(this,r,A,a)}f.refCount++}catch{}return i.call(this,r,c,a)}}),Z(o,"removeEventListener",function(i){return function(r,c,a){if(r==="click"||r=="keypress")try{const l=this,s=l.__sentry_instrumentation_handlers__||{},f=s[r];f&&(f.refCount--,f.refCount<=0&&(i.call(this,r,f.handler,a),f.handler=void 0,delete s[r]),Object.keys(s).length===0&&delete l.__sentry_instrumentation_handlers__)}catch{}return i.call(this,r,c,a)}}))})}function kE(n){if(n.type!==No)return!1;try{if(!n.target||n.target._sentryId!==Lo)return!1}catch{}return!0}function wE(n,e){return n!=="keypress"?!1:!e||!e.tagName?!0:!(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)}function Dc(n,e=!1){return t=>{if(!t||t._sentryCaptured)return;const o=SE(t);if(wE(t.type,o))return;xe(t,"_sentryCaptured",!0),o&&!o._sentryId&&xe(o,"_sentryId",cn());const i=t.type==="keypress"?"input":t.type;kE(t)||(n({event:t,name:i,global:e}),No=t.type,Lo=o?o._sentryId:void 0),clearTimeout(Pc),Pc=Ee.setTimeout(()=>{Lo=void 0,No=void 0},FE)}}function SE(n){try{return n.target}catch{return null}}const xE=N,Re="__sentry_xhr_v3__";function TE(n){const e="xhr";qn(e,n),Hn(e,IE)}function IE(){if(!xE.XMLHttpRequest)return;const n=XMLHttpRequest.prototype;Z(n,"open",function(e){return function(...t){const o=Date.now(),i=Bn(t[0])?t[0].toUpperCase():void 0,r=OE(t[1]);if(!i||!r)return e.apply(this,t);this[Re]={method:i,url:r,request_headers:{}},i==="POST"&&r.match(/sentry_key/)&&(this.__sentry_own_request__=!0);const c=()=>{const a=this[Re];if(a&&this.readyState===4){try{a.status_code=this.status}catch{}const l={args:[i,r],endTimestamp:Date.now(),startTimestamp:o,xhr:this};fn("xhr",l)}};return"onreadystatechange"in this&&typeof this.onreadystatechange=="function"?Z(this,"onreadystatechange",function(a){return function(...l){return c(),a.apply(this,l)}}):this.addEventListener("readystatechange",c),Z(this,"setRequestHeader",function(a){return function(...l){const[s,f]=l,A=this[Re];return A&&Bn(s)&&Bn(f)&&(A.request_headers[s.toLowerCase()]=f),a.apply(this,l)}}),e.apply(this,t)}}),Z(n,"send",function(e){return function(...t){const o=this[Re];if(!o)return e.apply(this,t);t[0]!==void 0&&(o.body=t[0]);const i={args:[o.method,o.url],startTimestamp:Date.now(),xhr:this};return fn("xhr",i),e.apply(this,t)}})}function OE(n){if(Bn(n))return n;try{return n.toString()}catch{}}const vt=go();function ry(){try{return new ErrorEvent(""),!0}catch{return!1}}function cy(){try{return new DOMError(""),!0}catch{return!1}}function ay(){try{return new DOMException(""),!0}catch{return!1}}function Mo(){if(!("fetch"in vt))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}function jo(n){return n&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(n.toString())}function RE(){if(typeof EdgeRuntime=="string")return!0;if(!Mo())return!1;if(jo(vt.fetch))return!0;let n=!1;const e=vt.document;if(e&&typeof e.createElement=="function")try{const t=e.createElement("iframe");t.hidden=!0,e.head.appendChild(t),t.contentWindow&&t.contentWindow.fetch&&(n=jo(t.contentWindow.fetch)),e.head.removeChild(t)}catch(t){Se&&w.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return n}function ly(){return"ReportingObserver"in vt}function sy(){if(!Mo())return!1;try{return new Request("_",{referrerPolicy:"origin"}),!0}catch{return!1}}function PE(n){const e="fetch";qn(e,n),Hn(e,DE)}function DE(){RE()&&Z(N,"fetch",function(n){return function(...e){const{method:t,url:o}=NE(e),i={args:e,fetchData:{method:t,url:o},startTimestamp:Date.now()};return fn("fetch",{...i}),n.apply(N,e).then(r=>{const c={...i,endTimestamp:Date.now(),response:r};return fn("fetch",c),r},r=>{const c={...i,endTimestamp:Date.now(),error:r};throw fn("fetch",c),r})}})}function Jo(n,e){return!!n&&typeof n=="object"&&!!n[e]}function Nc(n){return typeof n=="string"?n:n?Jo(n,"url")?n.url:n.toString?n.toString():"":""}function NE(n){if(n.length===0)return{method:"GET",url:""};if(n.length===2){const[t,o]=n;return{url:Nc(t),method:Jo(o,"method")?String(o.method).toUpperCase():"GET"}}const e=n[0];return{url:Nc(e),method:Jo(e,"method")?String(e.method).toUpperCase():"GET"}}const Ct=go();function LE(){const n=Ct.chrome,e=n&&n.app&&n.app.runtime,t="history"in Ct&&!!Ct.history.pushState&&!!Ct.history.replaceState;return!e&&t}const Pe=N;let kt;function Lc(n){const e="history";qn(e,n),Hn(e,ME)}function ME(){if(!LE())return;const n=Pe.onpopstate;Pe.onpopstate=function(...t){const o=Pe.location.href,i=kt;if(kt=o,fn("history",{from:i,to:o}),n)try{return n.apply(this,t)}catch{}};function e(t){return function(...o){const i=o.length>2?o[2]:void 0;if(i){const r=kt,c=String(i);kt=c,fn("history",{from:r,to:c})}return t.apply(this,o)}}Z(Pe.history,"pushState",e),Z(Pe.history,"replaceState",e)}const jE=["fatal","error","warning","log","info","debug"];function Ay(n){return Mc(n)}function Mc(n){return n==="warn"?"warning":jE.includes(n)?n:"log"}function Uo(n){if(!n)return{};const e=n.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!e)return{};const t=e[6]||"",o=e[8]||"";return{host:e[4],path:e[5],protocol:e[2],search:t,hash:o,relative:e[5]+t+o}}function fy(n){return n.split(/[\?#]/,1)[0]}function uy(n){return n.split(/\\?\//).filter(e=>e.length>0&&e!==",").length}function Ey(n){const{protocol:e,host:t,path:o}=n,i=t&&t.replace(/^.*@/,"[filtered]:[filtered]@").replace(/(:80)$/,"").replace(/(:443)$/,"")||"";return`${e?`${e}://`:""}${i}${o}`}const wt=1024,jc="Breadcrumbs",Jc=(n={})=>{const e={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...n};return{name:jc,setupOnce(){},setup(t){e.console&&BE(zE(t)),e.dom&&vE($E(t,e.dom)),e.xhr&&TE(qE(t)),e.fetch&&PE(HE(t)),e.history&&Lc(GE(t)),e.sentry&&t.on&&t.on("beforeSendEvent",UE(t))}}},JE=sn(jc,Jc);function UE(n){return function(t){Y()===n&&zn({category:`sentry.${t.type==="transaction"?"transaction":"event"}`,event_id:t.event_id,level:t.level,message:On(t)},{event:t})}}function $E(n,e){return function(o){if(Y()!==n)return;let i,r,c=typeof e=="object"?e.serializeAttribute:void 0,a=typeof e=="object"&&typeof e.maxStringLength=="number"?e.maxStringLength:void 0;a&&a>wt&&(kn&&w.warn(`\`dom.maxStringLength\` cannot exceed ${wt}, but a value of ${a} was configured. Sentry will use ${wt} instead.`),a=wt),typeof c=="string"&&(c=[c]);try{const s=o.event,f=WE(s)?s.target:s;i=vr(f,{keyAttrs:c,maxStringLength:a}),r=Bf(f)}catch{i="<unknown>"}if(i.length===0)return;const l={category:`ui.${o.name}`,message:i};r&&(l.data={"ui.component_name":r}),zn(l,{event:o.event,name:o.name,global:o.global})}}function zE(n){return function(t){if(Y()!==n)return;const o={category:"console",data:{arguments:t.args,logger:"console"},level:Mc(t.level),message:Cr(t.args," ")};if(t.level==="assert")if(t.args[0]===!1)o.message=`Assertion failed: ${Cr(t.args.slice(1)," ")||"console.assert"}`,o.data.arguments=t.args.slice(1);else return;zn(o,{input:t.args,level:t.level})}}function qE(n){return function(t){if(Y()!==n)return;const{startTimestamp:o,endTimestamp:i}=t,r=t.xhr[Re];if(!o||!i||!r)return;const{method:c,url:a,status_code:l,body:s}=r,f={method:c,url:a,status_code:l},A={xhr:t.xhr,input:s,startTimestamp:o,endTimestamp:i};zn({category:"xhr",data:f,type:"http"},A)}}function HE(n){return function(t){if(Y()!==n)return;const{startTimestamp:o,endTimestamp:i}=t;if(i&&!(t.fetchData.url.match(/sentry_key/)&&t.fetchData.method==="POST"))if(t.error){const r=t.fetchData,c={data:t.error,input:t.args,startTimestamp:o,endTimestamp:i};zn({category:"fetch",data:r,level:"error",type:"http"},c)}else{const r=t.response,c={...t.fetchData,status_code:r&&r.status},a={input:t.args,response:r,startTimestamp:o,endTimestamp:i};zn({category:"fetch",data:c,type:"http"},a)}}}function GE(n){return function(t){if(Y()!==n)return;let o=t.from,i=t.to;const r=Uo(L.location.href);let c=o?Uo(o):void 0;const a=Uo(i);(!c||!c.path)&&(c=r),r.protocol===a.protocol&&r.host===a.host&&(i=a.relative),r.protocol===c.protocol&&r.host===c.host&&(o=c.relative),zn({category:"navigation",data:{from:o,to:i}})}}function WE(n){return!!n&&!!n.target}const KE="cause",YE=5,Uc="LinkedErrors",$c=(n={})=>{const e=n.limit||YE,t=n.key||KE;return{name:Uc,setupOnce(){},preprocessEvent(o,i,r){const c=r.getOptions();bc(Cc,c.stackParser,c.maxValueLength,t,e,o,i)}}},VE=sn(Uc,$c),zc="HttpContext",qc=()=>({name:zc,setupOnce(){},preprocessEvent(n){if(!L.navigator&&!L.location&&!L.document)return;const e=n.request&&n.request.url||L.location&&L.location.href,{referrer:t}=L.document||{},{userAgent:o}=L.navigator||{},i={...n.request&&n.request.headers,...t&&{Referer:t},...o&&{"User-Agent":o}},r={...n.request,...e&&{url:e},headers:i};n.request=r}}),XE=sn(zc,qc),Hc="Dedupe",Gc=()=>{let n;return{name:Hc,setupOnce(){},processEvent(e){if(e.type)return e;try{if(QE(e,n))return kn&&w.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{}return n=e}}},ZE=sn(Hc,Gc);function QE(n,e){return e?!!(nd(n,e)||ed(n,e)):!1}function nd(n,e){const t=n.message,o=e.message;return!(!t&&!o||t&&!o||!t&&o||t!==o||!Kc(n,e)||!Wc(n,e))}function ed(n,e){const t=Yc(e),o=Yc(n);return!(!t||!o||t.type!==o.type||t.value!==o.value||!Kc(n,e)||!Wc(n,e))}function Wc(n,e){let t=Vc(n),o=Vc(e);if(!t&&!o)return!0;if(t&&!o||!t&&o||(t=t,o=o,o.length!==t.length))return!1;for(let i=0;i<o.length;i++){const r=o[i],c=t[i];if(r.filename!==c.filename||r.lineno!==c.lineno||r.colno!==c.colno||r.function!==c.function)return!1}return!0}function Kc(n,e){let t=n.fingerprint,o=e.fingerprint;if(!t&&!o)return!0;if(t&&!o||!t&&o)return!1;t=t,o=o;try{return t.join("")===o.join("")}catch{return!1}}function Yc(n){return n.exception&&n.exception.values&&n.exception.values[0]}function Vc(n){const e=n.exception;if(e)try{return e.values[0].stacktrace.frames}catch{return}}let Xc={};L.Sentry&&L.Sentry.Integrations&&(Xc=L.Sentry.Integrations);const td={...Xc,...Vu,...u},od="sentry-ipc";var Pn;(function(n){n.RENDERER_START="sentry-electron.renderer-start",n.EVENT="sentry-electron.event",n.SCOPE="sentry-electron.scope",n.ENVELOPE="sentry-electron.envelope",n.STATUS="sentry-electron.status",n.ADD_METRIC="sentry-electron.add-metric"})(Pn||(Pn={}));const id="sentry-electron-renderer-id";function de(n){return`${od}://${n}/sentry_key`}function rd(){if(window.__SENTRY_IPC__)return window.__SENTRY_IPC__;{w.log("IPC was not configured in preload script, falling back to custom protocol and fetch");const n=window.__SENTRY_RENDERER_ID__=cn(),e={[id]:n};return{sendRendererStart:()=>{fetch(de(Pn.RENDERER_START),{method:"POST",body:"",headers:e}).catch(()=>{console.error(`Sentry SDK failed to establish connection with the Electron main process.
  - Ensure you have initialized the SDK in the main process
  - If your renderers use custom sessions, be sure to set 'getSessions' in the main process options
  - If you are bundling your main process code and using Electron < v5, you'll need to manually configure a preload script`)})},sendScope:t=>{fetch(de(Pn.SCOPE),{method:"POST",body:t,headers:e}).catch(()=>{})},sendEvent:t=>{fetch(de(Pn.EVENT),{method:"POST",body:t,headers:e}).catch(()=>{})},sendEnvelope:t=>{fetch(de(Pn.ENVELOPE),{method:"POST",body:t,headers:e}).catch(()=>{})},sendStatus:t=>{fetch(de(Pn.STATUS),{method:"POST",body:JSON.stringify({status:t}),headers:e}).catch(()=>{})},sendAddMetric:t=>{fetch(de(Pn.ADD_METRIC),{method:"POST",body:JSON.stringify(t),headers:e}).catch(()=>{})}}}}let St;function De(){return St||(St=rd(),St.sendRendererStart()),St}const Zc="ScopeToMain",Qc=()=>({name:Zc,setupOnce(){},setup(){const n=Cn();if(n){const e=De();n.addScopeListener(t=>{e.sendScope(JSON.stringify(gn(t.getScopeData(),20,2e3))),n.clearBreadcrumbs(),n.clearAttachments()})}}}),cd=sn(Zc,Qc);class xt{constructor(){this.name=xt.id}setupOnce(e){const t=De();e(o=>(o.breadcrumbs=o.breadcrumbs||[],o.environment=void 0,t.sendEvent(JSON.stringify(gn(o,20,2e3))),null))}}xt.id="EventToMain";const na="c",ea="g",$o="s",ta="d",ad=5e3,_y=1e4,hy=1e4;function ld(n,e,t,o){const i=Object.entries(An(o)).sort((r,c)=>r[0].localeCompare(c[0]));return`${n}${e}${t}${i}`}function sd(n){let e=0;for(let t=0;t<n.length;t++){const o=n.charCodeAt(t);e=(e<<5)-e+o,e&=e}return e>>>0}function Ad(n){let e="";for(const t of n){const o=Object.entries(t.tags),i=o.length>0?`|#${o.map(([r,c])=>`${r}:${c}`).join(",")}`:"";e+=`${t.name}@${t.unit}:${t.metric}|${t.metricType}${i}|T${t.timestamp}
`}return e}function fd(n){return n.replace(/[^\w]+/gi,"_")}function ud(n){return n.replace(/[^\w\-.]+/gi,"_")}function Ed(n){return n.replace(/[^\w\-./]+/gi,"")}const dd=[[`
`,"\\n"],["\r","\\r"],["	","\\t"],["\\","\\\\"],["|","\\u{7c}"],[",","\\u{2c}"]];function gd(n){for(const[e,t]of dd)if(n===e)return t;return n}function pd(n){return[...n].reduce((e,t)=>e+gd(t),"")}function bd(n){const e={};for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const o=Ed(t);e[o]=pd(String(n[t]))}return e}class _d{constructor(e){this._value=e}get weight(){return 1}add(e){this._value+=e}toString(){return`${this._value}`}}class hd{constructor(e){this._last=e,this._min=e,this._max=e,this._sum=e,this._count=1}get weight(){return 5}add(e){this._last=e,e<this._min&&(this._min=e),e>this._max&&(this._max=e),this._sum+=e,this._count++}toString(){return`${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`}}class md{constructor(e){this._value=[e]}get weight(){return this._value.length}add(e){this._value.push(e)}toString(){return this._value.join(":")}}class Bd{constructor(e){this.first=e,this._value=new Set([e])}get weight(){return this._value.size}add(e){this._value.add(e)}toString(){return Array.from(this._value).map(e=>typeof e=="string"?sd(e):e).join(":")}}const yd={[na]:_d,[ea]:hd,[ta]:md,[$o]:Bd};var Fd,vd,oa,Cd,kd,Tt,zo,wd,ia,Sd,xd,Td,qo,ra,Ho,ca;function my(n,e,t=()=>{},o=()=>{}){const i=Tt(),r=qo(),c=r.getSpan(),a=Ot(n),l=It(i,{parentSpan:c,spanContext:a,forceTransaction:!1,scope:r});return r.setSpan(l),Ho(()=>e(l),s=>{l&&l.setStatus("internal_error"),t(s,l)},()=>{l&&l.end(),r.setSpan(c),o()})}function By(n,e){const t=Ot(n);return zo(()=>ra(n.scope,o=>{const i=Tt(),r=o.getSpan(),a=n.onlyIfParent&&!r?void 0:It(i,{parentSpan:r,spanContext:t,forceTransaction:n.forceTransaction,scope:o});return Ho(()=>e(a),()=>{if(a){const{status:l}=ia(a);(!l||l==="ok")&&a.setStatus("internal_error")}},()=>a&&a.end())}))}const yy=null;function Fy(n,e){const t=Ot(n);return zo(()=>ra(n.scope,o=>{const i=Tt(),r=o.getSpan(),a=n.onlyIfParent&&!r?void 0:It(i,{parentSpan:r,spanContext:t,forceTransaction:n.forceTransaction,scope:o});function l(){a&&a.end()}return Ho(()=>e(a,l),()=>{if(a&&a.isRecording()){const{status:s}=ia(a);(!s||s==="ok")&&a.setStatus("internal_error")}})}))}function vy(n){if(!ca())return;const e=Ot(n),t=Tt(),o=n.scope?n.scope.getSpan():aa();if(n.onlyIfParent&&!o)return;const c=(n.scope||qo()).clone();return It(t,{parentSpan:o,spanContext:e,forceTransaction:n.forceTransaction,scope:c})}function aa(){return Cn().getSpan()}const Cy=({sentryTrace:n,baggage:e},t)=>{const o=qo(),{traceparentData:i,dynamicSamplingContext:r,propagationContext:c}=Cd(n,e);o.setPropagationContext(c),kd&&i&&Fd.log(`[Tracing] Continuing trace ${i.traceId}.`);const a={...i,metadata:vd({dynamicSamplingContext:r})};return t?zo(()=>t(a)):a};function It(n,{parentSpan:e,spanContext:t,forceTransaction:o,scope:i}){if(!ca())return;const r=wd();let c;if(e&&!o)c=e.startChild(t);else if(e){const a=Td(e),{traceId:l,spanId:s}=e.spanContext(),f=Sd(e);c=n.startTransaction({traceId:l,parentSpanId:s,parentSampled:f,...t,metadata:{dynamicSamplingContext:a,...t.metadata}})}else{const{traceId:a,dsc:l,parentSpanId:s,sampled:f}={...r.getPropagationContext(),...i.getPropagationContext()};c=n.startTransaction({traceId:a,parentSpanId:s,parentSampled:f,...t,metadata:{dynamicSamplingContext:l,...t.metadata}})}return i.setSpan(c),Id(c,i,r),c}function Ot(n){if(n.startTime){const e={...n};return e.startTimestamp=xd(n.startTime),delete e.startTime,e}return n}const la="_sentryScope",sa="_sentryIsolationScope";function Id(n,e,t){n&&(oa(n,sa,t),oa(n,la,e))}function ky(n){return{scope:n[la],isolationScope:n[sa]}}var Od;let Ne;function Aa(n){return Ne?Ne.get(n):void 0}function wy(n){const e=Aa(n);if(!e)return;const t={};for(const[,[o,i]]of e)t[o]||(t[o]=[]),t[o].push(Od(i));return t}function Rd(n,e,t,o,i,r){const c=aa();if(c){const a=Aa(c)||new Map,l=`${n}:${e}@${o}`,s=a.get(r);if(s){const[,f]=s;a.set(r,[l,{min:Math.min(f.min,t),max:Math.max(f.max,t),count:f.count+=1,sum:f.sum+=t,tags:f.tags}])}else a.set(r,[l,{min:t,max:t,count:1,sum:t,tags:i}]);Ne||(Ne=new WeakMap),Ne.set(c,a)}}class Pd{constructor(e){this._client=e,this._buckets=new Map,this._interval=setInterval(()=>this.flush(),ad)}add(e,t,o,i="none",r={},c=Bo()){const a=Math.floor(c),l=ud(t),s=bd(r),f=fd(i),A=ld(e,l,f,s);let d=this._buckets.get(A);const E=d&&e===$o?d.metric.weight:0;d?(d.metric.add(o),d.timestamp<a&&(d.timestamp=a)):(d={metric:new yd[e](o),timestamp:a,metricType:e,name:l,unit:f,tags:s},this._buckets.set(A,d));const h=typeof o=="string"?d.metric.weight-E:o;Rd(e,l,h,f,r,A)}flush(){if(this._buckets.size!==0){if(this._client.captureAggregateMetrics){const e=Array.from(this._buckets).map(([,t])=>t);this._client.captureAggregateMetrics(e)}this._buckets.clear()}}close(){clearInterval(this._interval),this.flush()}}const fa="MetricsAggregator",ua=()=>({name:fa,setupOnce(){},setup(n){n.metricsAggregator=new Pd(n)}}),Dd=sn(fa,ua);function Rt(n,e,t,o={}){const i=Y(),r=Cn();if(i){if(!i.metricsAggregator){M&&w.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs");return}const{unit:c,tags:a,timestamp:l}=o,{release:s,environment:f}=i.getOptions(),A=r.getTransaction(),d={};s&&(d.release=s),f&&(d.environment=f),A&&(d.transaction=se(A).description||""),M&&w.log(`Adding value of ${t} to ${n} metric ${e}`),i.metricsAggregator.add(n,e,t,c,{...d,...a},l)}}function Nd(n,e=1,t){Rt(na,n,e,t)}function Ld(n,e,t){Rt(ta,n,e,t)}function Md(n,e,t){Rt($o,n,e,t)}function jd(n,e,t){Rt(ea,n,e,t)}const Jd={increment:Nd,distribution:Ld,set:Md,gauge:jd,MetricsAggregator:Dd,metricsAggregatorIntegration:ua};class Ud{constructor(){this._ipc=De()}add(e,t,o,i,r,c){this._ipc.sendAddMetric({metricType:e,name:t,value:o,unit:i,tags:r,timestamp:c})}flush(){}close(){}toString(){return""}}const Ea="MetricsAggregator",da=()=>({name:Ea,setupOnce(){},setup(n){n.metricsAggregator=new Ud}}),$d=sn(Ea,da);function zd(n,e){e.debug===!0&&(M?w.enable():ft(()=>{console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")})),Cn().update(e.initialScope);const o=new n(e);qd(o),Hd(o)}function qd(n){const t=vn().getStackTop();t.client=n,t.scope.setClient(n)}function Hd(n){n.init?n.init():n.setupIntegrations&&n.setupIntegrations()}const Gd=/^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;function Wd(n){return n==="http"||n==="https"}function Le(n,e=!1){const{host:t,path:o,pass:i,port:r,projectId:c,protocol:a,publicKey:l}=n;return`${a}://${l}${e&&i?`:${i}`:""}@${t}${r?`:${r}`:""}/${o&&`${o}/`}${c}`}function Kd(n){const e=Gd.exec(n);if(!e){ft(()=>{console.error(`Invalid Sentry Dsn: ${n}`)});return}const[t,o,i="",r,c="",a]=e.slice(1);let l="",s=a;const f=s.split("/");if(f.length>1&&(l=f.slice(0,-1).join("/"),s=f.pop()),s){const A=s.match(/^\d+/);A&&(s=A[0])}return ga({host:r,pass:i,path:l,projectId:s,port:c,protocol:t,publicKey:o})}function ga(n){return{protocol:n.protocol,publicKey:n.publicKey||"",pass:n.pass||"",host:n.host,port:n.port||"",path:n.path||"",projectId:n.projectId}}function Yd(n){if(!Se)return!0;const{port:e,projectId:t,protocol:o}=n;return["protocol","publicKey","host","projectId"].find(c=>n[c]?!1:(w.error(`Invalid Sentry Dsn: ${c} missing`),!0))?!1:t.match(/^\d+$/)?Wd(o)?e&&isNaN(parseInt(e,10))?(w.error(`Invalid Sentry Dsn: Invalid port ${e}`),!1):!0:(w.error(`Invalid Sentry Dsn: Invalid protocol ${o}`),!1):(w.error(`Invalid Sentry Dsn: Invalid projectId ${t}`),!1)}function Vd(n){const e=typeof n=="string"?Kd(n):ga(n);if(!(!e||!Yd(e)))return e}function ge(n,e=[]){return[n,e]}function Xd(n,e){const[t,o]=n;return[t,[...o,e]]}function Go(n,e){const t=n[1];for(const o of t){const i=o[0].type;if(e(o,i))return!0}return!1}function xy(n,e){return Go(n,(t,o)=>e.includes(o))}function Wo(n,e){return(e||new TextEncoder).encode(n)}function Zd(n,e){const[t,o]=n;let i=JSON.stringify(t);function r(c){typeof i=="string"?i=typeof c=="string"?i+c:[Wo(i,e),c]:i.push(typeof c=="string"?Wo(c,e):c)}for(const c of o){const[a,l]=c;if(r(`
${JSON.stringify(a)}
`),typeof l=="string"||l instanceof Uint8Array)r(l);else{let s;try{s=JSON.stringify(l)}catch{s=JSON.stringify(gn(l))}r(s)}}return typeof i=="string"?i:Qd(i)}function Qd(n){const e=n.reduce((i,r)=>i+r.length,0),t=new Uint8Array(e);let o=0;for(const i of n)t.set(i,o),o+=i.length;return t}function Ty(n,e,t){let o=typeof n=="string"?e.encode(n):n;function i(l){const s=o.subarray(0,l);return o=o.subarray(l+1),s}function r(){let l=o.indexOf(10);return l<0&&(l=o.length),JSON.parse(t.decode(i(l)))}const c=r(),a=[];for(;o.length;){const l=r(),s=typeof l.length=="number"?l.length:void 0;a.push([l,s?i(s):r()])}return[c,a]}function ng(n,e){const t=typeof n.data=="string"?Wo(n.data,e):n.data;return[An({type:"attachment",length:t.length,filename:n.filename,content_type:n.contentType,attachment_type:n.attachmentType}),t]}const eg={session:"session",sessions:"session",attachment:"attachment",transaction:"transaction",event:"error",client_report:"internal",user_report:"default",profile:"profile",replay_event:"replay",replay_recording:"replay",check_in:"monitor",feedback:"feedback",span:"span",statsd:"metric_bucket"};function pa(n){return eg[n]}function ba(n){if(!n||!n.sdk)return;const{name:e,version:t}=n.sdk;return{name:e,version:t}}function tg(n,e,t,o){const i=n.sdkProcessingMetadata&&n.sdkProcessingMetadata.dynamicSamplingContext;return{event_id:n.event_id,sent_at:new Date().toISOString(),...e&&{sdk:e},...!!t&&o&&{dsn:Le(o)},...i&&{trace:An({...i})}}}class bn extends Error{constructor(e,t="warn"){super(e),this.message=e,this.name=new.target.prototype.constructor.name,Object.setPrototypeOf(this,new.target.prototype),this.logLevel=t}}var og,ig;const rg="7";function _a(n){const e=n.protocol?`${n.protocol}:`:"",t=n.port?`:${n.port}`:"";return`${e}//${n.host}${t}${n.path?`/${n.path}`:""}/api/`}function cg(n){return`${_a(n)}${n.projectId}/envelope/`}function ag(n,e){return kf({sentry_key:n.publicKey,sentry_version:rg,...e&&{sentry_client:`${e.name}/${e.version}`}})}function lg(n,e={}){const t=typeof e=="string"?e:e.tunnel,o=typeof e=="string"||!e._metadata?void 0:e._metadata.sdk;return t||`${cg(n)}?${ag(n,o)}`}function Iy(n,e){const t=og(n);if(!t)return"";const o=`${_a(t)}embed/error-page/`;let i=`dsn=${ig(t)}`;for(const r in e)if(r!=="dsn"&&r!=="onClose")if(r==="user"){const c=e.user;if(!c)continue;c.name&&(i+=`&name=${encodeURIComponent(c.name)}`),c.email&&(i+=`&email=${encodeURIComponent(c.email)}`)}else i+=`&${encodeURIComponent(r)}=${encodeURIComponent(e[r])}`;return`${o}?${i}`}function sg(n,e){return e&&(n.sdk=n.sdk||{},n.sdk.name=n.sdk.name||e.name,n.sdk.version=n.sdk.version||e.version,n.sdk.integrations=[...n.sdk.integrations||[],...e.integrations||[]],n.sdk.packages=[...n.sdk.packages||[],...e.packages||[]]),n}function Ag(n,e,t,o){const i=ba(t),r={sent_at:new Date().toISOString(),...i&&{sdk:i},...!!o&&e&&{dsn:Le(e)}},c="aggregates"in n?[{type:"sessions"},n]:[{type:"session"},n.toJSON()];return ge(r,[c])}function fg(n,e,t,o){const i=ba(t),r=n.type&&n.type!=="replay_event"?n.type:"event";sg(n,t&&t.sdk);const c=tg(n,i,o,e);return delete n.sdkProcessingMetadata,ge(c,[[{type:r},n]])}function ug(n,e,t,o){const i={sent_at:new Date().toISOString()};t&&t.sdk&&(i.sdk={name:t.sdk.name,version:t.sdk.version}),o&&e&&(i.dsn=Le(e));const r=Eg(n);return ge(i,[r])}function Eg(n){const e=Ad(n);return[{type:"statsd",length:e.length},e]}var dg;const ha="Not capturing exception because it's already been captured.";class gg{constructor(e){if(this._options=e,this._integrations={},this._integrationsInitialized=!1,this._numProcessing=0,this._outcomes={},this._hooks={},this._eventProcessors=[],e.dsn?this._dsn=Vd(e.dsn):M&&w.warn("No DSN provided, client will not send events."),this._dsn){const t=lg(this._dsn,e);this._transport=e.transport({recordDroppedEvent:this.recordDroppedEvent.bind(this),...e.transportOptions,url:t})}}captureException(e,t,o){if(Ir(e)){M&&w.log(ha);return}let i=t&&t.event_id;return this._process(this.eventFromException(e,t).then(r=>this._captureEvent(r,t,o)).then(r=>{i=r})),i}captureMessage(e,t,o,i){let r=o&&o.event_id;const c=uo(e)?e:String(e),a=Eo(e)?this.eventFromMessage(c,t,o):this.eventFromException(e,o);return this._process(a.then(l=>this._captureEvent(l,o,i)).then(l=>{r=l})),r}captureEvent(e,t,o){if(t&&t.originalException&&Ir(t.originalException)){M&&w.log(ha);return}let i=t&&t.event_id;const c=(e.sdkProcessingMetadata||{}).capturedSpanScope;return this._process(this._captureEvent(e,t,c||o).then(a=>{i=a})),i}captureSession(e){typeof e.release!="string"?M&&w.warn("Discarded session because of missing or non-string release"):(this.sendSession(e),$n(e,{init:!1}))}getDsn(){return this._dsn}getOptions(){return this._options}getSdkMetadata(){return this._options._metadata}getTransport(){return this._transport}flush(e){const t=this._transport;return t?(this.metricsAggregator&&this.metricsAggregator.flush(),this._isClientDoneProcessing(e).then(o=>t.flush(e).then(i=>o&&i))):le(!0)}close(e){return this.flush(e).then(t=>(this.getOptions().enabled=!1,this.metricsAggregator&&this.metricsAggregator.close(),t))}getEventProcessors(){return this._eventProcessors}addEventProcessor(e){this._eventProcessors.push(e)}setupIntegrations(e){(e&&!this._integrationsInitialized||this._isEnabled()&&!this._integrationsInitialized)&&this._setupIntegrations()}init(){this._isEnabled()&&this._setupIntegrations()}getIntegrationById(e){return this.getIntegrationByName(e)}getIntegrationByName(e){return this._integrations[e]}getIntegration(e){try{return this._integrations[e.id]||null}catch{return M&&w.warn(`Cannot retrieve integration ${e.id} from the current Client`),null}}addIntegration(e){const t=this._integrations[e.name];Ac(this,e,this._integrations),t||sc(this,[e])}sendEvent(e,t={}){this.emit("beforeSendEvent",e,t);let o=fg(e,this._dsn,this._options._metadata,this._options.tunnel);for(const r of t.attachments||[])o=Xd(o,ng(r,this._options.transportOptions&&this._options.transportOptions.textEncoder));const i=this._sendEnvelope(o);i&&i.then(r=>this.emit("afterSendEvent",e,r),null)}sendSession(e){const t=Ag(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}recordDroppedEvent(e,t,o){if(this._options.sendClientReports){const i=`${e}:${t}`;M&&w.log(`Adding outcome: "${i}"`),this._outcomes[i]=this._outcomes[i]+1||1}}captureAggregateMetrics(e){M&&w.log(`Flushing aggregated metrics, number of metrics: ${e.length}`);const t=ug(e,this._dsn,this._options._metadata,this._options.tunnel);this._sendEnvelope(t)}on(e,t){this._hooks[e]||(this._hooks[e]=[]),this._hooks[e].push(t)}emit(e,...t){this._hooks[e]&&this._hooks[e].forEach(o=>o(...t))}_setupIntegrations(){const{integrations:e}=this._options;this._integrations=yu(this,e),sc(this,e),this._integrationsInitialized=!0}_updateSessionFromEvent(e,t){let o=!1,i=!1;const r=t.exception&&t.exception.values;if(r){i=!0;for(const l of r){const s=l.mechanism;if(s&&s.handled===!1){o=!0;break}}}const c=e.status==="ok";(c&&e.errors===0||c&&o)&&($n(e,{...o&&{status:"crashed"},errors:e.errors||Number(i||o)}),this.captureSession(e))}_isClientDoneProcessing(e){return new an(t=>{let o=0;const i=1,r=setInterval(()=>{this._numProcessing==0?(clearInterval(r),t(!0)):(o+=i,e&&o>=e&&(clearInterval(r),t(!1)))},i)})}_isEnabled(){return this.getOptions().enabled!==!1&&this._transport!==void 0}_prepareEvent(e,t,o,i=bt()){const r=this.getOptions(),c=Object.keys(this._integrations);return!t.integrations&&c.length>0&&(t.integrations=c),this.emit("preprocessEvent",e,t),tu(r,e,t,o,this,i).then(a=>{if(a===null)return a;const l={...i.getPropagationContext(),...o?o.getPropagationContext():void 0};if(!(a.contexts&&a.contexts.trace)&&l){const{traceId:f,spanId:A,parentSpanId:d,dsc:E}=l;a.contexts={trace:{trace_id:f,span_id:A,parent_span_id:d},...a.contexts};const h=E||jr(f,this,o);a.sdkProcessingMetadata={dynamicSamplingContext:h,...a.sdkProcessingMetadata}}return a})}_captureEvent(e,t={},o){return this._processEvent(e,t,o).then(i=>i.event_id,i=>{if(M){const r=i;r.logLevel==="log"?w.log(r.message):w.warn(r)}})}_processEvent(e,t,o){const i=this.getOptions(),{sampleRate:r}=i,c=Ba(e),a=ma(e),l=e.type||"error",s=`before send for type \`${l}\``;if(a&&typeof r=="number"&&Math.random()>r)return this.recordDroppedEvent("sample_rate","error",e),yo(new bn(`Discarding event because it's not included in the random sample (sampling rate = ${r})`,"log"));const f=l==="replay_event"?"replay":l,d=(e.sdkProcessingMetadata||{}).capturedSpanIsolationScope;return this._prepareEvent(e,t,o,d).then(E=>{if(E===null)throw this.recordDroppedEvent("event_processor",f,e),new bn("An event processor returned `null`, will not send event.","log");if(t.data&&t.data.__sentry__===!0)return E;const S=bg(i,E,t);return pg(S,s)}).then(E=>{if(E===null)throw this.recordDroppedEvent("before_send",f,e),new bn(`${s} returned \`null\`, will not send event.`,"log");const h=o&&o.getSession();!c&&h&&this._updateSessionFromEvent(h,E);const S=E.transaction_info;if(c&&S&&E.transaction!==e.transaction){const y="custom";E.transaction_info={...S,source:y}}return this.sendEvent(E,t),E}).then(null,E=>{throw E instanceof bn?E:(this.captureException(E,{data:{__sentry__:!0},originalException:E}),new bn(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${E}`))})}_process(e){this._numProcessing++,e.then(t=>(this._numProcessing--,t),t=>(this._numProcessing--,t))}_sendEnvelope(e){if(this.emit("beforeEnvelope",e),this._isEnabled()&&this._transport)return this._transport.send(e).then(null,t=>{M&&w.error("Error while sending event:",t)});M&&w.error("Transport disabled")}_clearOutcomes(){const e=this._outcomes;return this._outcomes={},Object.keys(e).map(t=>{const[o,i]=t.split(":");return{reason:o,category:i,quantity:e[t]}})}}function pg(n,e){const t=`${e} must return \`null\` or a valid event.`;if(lt(n))return n.then(o=>{if(!re(o)&&o!==null)throw new bn(t);return o},o=>{throw new bn(`${e} rejected with ${o}`)});if(!re(n)&&n!==null)throw new bn(t);return n}function bg(n,e,t){const{beforeSend:o,beforeSendTransaction:i}=n;return ma(e)&&o?o(e,t):Ba(e)&&i?i(e,t):e}function ma(n){return n.type===void 0}function Ba(n){return n.type==="transaction"}function Oy(n){const e=dg();!e||!e.addEventProcessor||e.addEventProcessor(n)}function _g(n,e,t=[e],o="npm"){const i=n._metadata||{};i.sdk||(i.sdk={name:`sentry.javascript.${e}`,packages:t.map(r=>({name:`${o}:@sentry/${r}`,version:vo})),version:vo}),n._metadata=i}function Ry(){return typeof __SENTRY_BROWSER_BUNDLE__<"u"&&!!__SENTRY_BROWSER_BUNDLE__}function hg(){return"npm"}function mg(n,e,t){const o=[{type:"client_report"},{timestamp:t||Ie(),discarded_events:n}];return ge(e?{dsn:e}:{},[o])}function Bg(n,{metadata:e,tunnel:t,dsn:o}){const i={event_id:n.event_id,sent_at:new Date().toISOString(),...e&&e.sdk&&{sdk:{name:e.sdk.name,version:e.sdk.version}},...!!t&&!!o&&{dsn:Le(o)}},r=yg(n);return ge(i,[r])}function yg(n){return[{type:"user_report"},n]}class Fg extends gg{constructor(e){const t=L.SENTRY_SDK_SOURCE||hg();_g(e,"browser",["browser"],t),super(e),e.sendClientReports&&L.document&&L.document.addEventListener("visibilitychange",()=>{L.document.visibilityState==="hidden"&&this._flushOutcomes()})}eventFromException(e,t){return cE(this._options.stackParser,e,t,this._options.attachStacktrace)}eventFromMessage(e,t="info",o){return aE(this._options.stackParser,e,t,o,this._options.attachStacktrace)}captureUserFeedback(e){if(!this._isEnabled()){kn&&w.warn("SDK not enabled, will not capture user feedback.");return}const t=Bg(e,{metadata:this.getSdkMetadata(),dsn:this.getDsn(),tunnel:this.getOptions().tunnel});this._sendEnvelope(t)}_prepareEvent(e,t,o){return e.platform=e.platform||"javascript",super._prepareEvent(e,t,o)}_flushOutcomes(){const e=this._clearOutcomes();if(e.length===0){kn&&w.log("No outcomes to send");return}if(!this._dsn){kn&&w.log("No dsn provided, will not send outcomes");return}kn&&w.log("Sending outcomes:",e);const t=mg(e,this._options.tunnel&&Le(this._dsn));this._sendEnvelope(t)}}const pe="?",vg=10,Cg=20,kg=30,wg=40,Sg=50;function Me(n,e,t,o){const i={filename:n,function:e,in_app:!0};return t!==void 0&&(i.lineno=t),o!==void 0&&(i.colno=o),i}const xg=/^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,Tg=/\((\S*)(?::(\d+))(?::(\d+))\)/,ya=[kg,n=>{const e=xg.exec(n);if(e){if(e[2]&&e[2].indexOf("eval")===0){const r=Tg.exec(e[2]);r&&(e[2]=r[1],e[3]=r[2],e[4]=r[3])}const[o,i]=Fa(e[1]||pe,e[2]);return Me(i,o,e[3]?+e[3]:void 0,e[4]?+e[4]:void 0)}}],Ig=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,Og=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,Rg=[Sg,n=>{const e=Ig.exec(n);if(e){if(e[3]&&e[3].indexOf(" > eval")>-1){const r=Og.exec(e[3]);r&&(e[1]=e[1]||"eval",e[3]=r[1],e[4]=r[2],e[5]="")}let o=e[3],i=e[1]||pe;return[i,o]=Fa(i,o),Me(o,i,e[4]?+e[4]:void 0,e[5]?+e[5]:void 0)}}],Pg=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,Dg=[wg,n=>{const e=Pg.exec(n);return e?Me(e[2],e[1]||pe,+e[3],e[4]?+e[4]:void 0):void 0}],Ng=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,My=[vg,n=>{const e=Ng.exec(n);return e?Me(e[2],e[3]||pe,+e[1]):void 0}],Lg=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,Jy=[Cg,n=>{const e=Lg.exec(n);return e?Me(e[5],e[3]||e[4]||pe,+e[1],+e[2]):void 0}],Mg=Yr(...[ya,Rg,Dg]),Fa=(n,e)=>{const t=n.indexOf("safari-extension")!==-1,o=n.indexOf("safari-web-extension")!==-1;return t||o?[n.indexOf("@")!==-1?n.split("@")[0]:pe,t?`safari-extension:${e}`:`safari-web-extension:${e}`]:[n,e]};function jg(n){const e=[];function t(){return n===void 0||e.length<n}function o(c){return e.splice(e.indexOf(c),1)[0]}function i(c){if(!t())return yo(new bn("Not adding Promise because buffer limit was reached."));const a=c();return e.indexOf(a)===-1&&e.push(a),a.then(()=>o(a)).then(null,()=>o(a).then(null,()=>{})),a}function r(c){return new an((a,l)=>{let s=e.length;if(!s)return a(!0);const f=setTimeout(()=>{c&&c>0&&a(!1)},c);e.forEach(A=>{le(A).then(()=>{--s||(clearTimeout(f),a(!0))},l)})})}return{$:e,add:i,drain:r}}const Jg=60*1e3;function Ug(n,e=Date.now()){const t=parseInt(`${n}`,10);if(!isNaN(t))return t*1e3;const o=Date.parse(`${n}`);return isNaN(o)?Jg:o-e}function $g(n,e){return n[e]||n.all||0}function zg(n,e,t=Date.now()){return $g(n,e)>t}function qg(n,{statusCode:e,headers:t},o=Date.now()){const i={...n},r=t&&t["x-sentry-rate-limits"],c=t&&t["retry-after"];if(r)for(const a of r.trim().split(",")){const[l,s,,,f]=a.split(":",5),A=parseInt(l,10),d=(isNaN(A)?60:A)*1e3;if(!s)i.all=o+d;else for(const E of s.split(";"))E==="metric_bucket"?(!f||f.split(";").includes("custom"))&&(i[E]=o+d):i[E]=o+d}else c?i.all=o+Ug(c,o):e===429&&(i.all=o+60*1e3);return i}const Hg=30;function Ko(n,e,t=jg(n.bufferSize||Hg)){let o={};const i=c=>t.drain(c);function r(c){const a=[];if(Go(c,(A,d)=>{const E=pa(d);if(zg(o,E)){const h=va(A,d);n.recordDroppedEvent("ratelimit_backoff",E,h)}else a.push(A)}),a.length===0)return le();const l=ge(c[0],a),s=A=>{Go(l,(d,E)=>{const h=va(d,E);n.recordDroppedEvent(A,pa(E),h)})},f=()=>e({body:Zd(l,n.textEncoder)}).then(A=>(A.statusCode!==void 0&&(A.statusCode<200||A.statusCode>=300)&&M&&w.warn(`Sentry responded with status code ${A.statusCode} to sent event.`),o=qg(o,A),A),A=>{throw s("network_error"),A});return t.add(f).then(A=>A,A=>{if(A instanceof bn)return M&&w.error("Skipped sending event because buffer is full."),s("queue_overflow"),le();throw A})}return r.__sentry__baseTransport__=!0,{send:r,flush:i}}function va(n,e){if(!(e!=="event"&&e!=="transaction"))return Array.isArray(n)?n[1]:void 0}let je;function Gg(){if(je)return je;if(jo(L.fetch))return je=L.fetch.bind(L);const n=L.document;let e=L.fetch;if(n&&typeof n.createElement=="function")try{const t=n.createElement("iframe");t.hidden=!0,n.head.appendChild(t);const o=t.contentWindow;o&&o.fetch&&(e=o.fetch),n.head.removeChild(t)}catch(t){kn&&w.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",t)}return je=e.bind(L)}function Wg(){je=void 0}function Kg(n,e=Gg()){let t=0,o=0;function i(r){const c=r.body.length;t+=c,o++;const a={body:r.body,method:"POST",referrerPolicy:"origin",headers:n.headers,keepalive:t<=6e4&&o<15,...n.fetchOptions};try{return e(n.url,a).then(l=>(t-=c,o--,{statusCode:l.status,headers:{"x-sentry-rate-limits":l.headers.get("X-Sentry-Rate-Limits"),"retry-after":l.headers.get("Retry-After")}}))}catch(l){return Wg(),t-=c,o--,yo(l)}}return Ko(n,i)}const Yg=4;function Vg(n){function e(t){return new an((o,i)=>{const r=new XMLHttpRequest;r.onerror=i,r.onreadystatechange=()=>{r.readyState===Yg&&o({statusCode:r.status,headers:{"x-sentry-rate-limits":r.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":r.getResponseHeader("Retry-After")}})},r.open("POST",n.url);for(const c in n.headers)Object.prototype.hasOwnProperty.call(n.headers,c)&&r.setRequestHeader(c,n.headers[c]);r.send(t.body)})}return Ko(n,e)}var Xg,Zg,Qg,Yo,Vo,be,np;const Ca=[pc(),dc(),Oc(),Jc(),wc(),$c(),Gc(),qc()];function ep(n){return[...Ca]}function tp(n={}){n.defaultIntegrations===void 0&&(n.defaultIntegrations=ep()),n.release===void 0&&(typeof __SENTRY_RELEASE__=="string"&&(n.release=__SENTRY_RELEASE__),L.SENTRY_RELEASE&&L.SENTRY_RELEASE.id&&(n.release=L.SENTRY_RELEASE.id)),n.autoSessionTracking===void 0&&(n.autoSessionTracking=!0),n.sendClientReports===void 0&&(n.sendClientReports=!0);const e={...n,stackParser:Vf(n.stackParser||Mg),integrations:Bu(n),transport:n.transport||(Mo()?Kg:Vg)};zd(Fg,e),n.autoSessionTracking&&op()}const $y=(n={},e=Zg())=>{if(!be.document){Vo&&Yo.error("Global document not defined in showReportDialog call");return}const{client:t,scope:o}=e.getStackTop(),i=n.dsn||t&&t.getDsn();if(!i){Vo&&Yo.error("DSN not configured for showReportDialog call");return}o&&(n.user={...o.getUser(),...n.user}),n.eventId||(n.eventId=e.lastEventId());const r=be.document.createElement("script");r.async=!0,r.crossOrigin="anonymous",r.src=Qg(i,n),n.onLoad&&(r.onload=n.onLoad);const{onClose:c}=n;if(c){const l=s=>{if(s.data==="__sentry_reportdialog_closed__")try{c()}finally{be.removeEventListener("message",l)}};be.addEventListener("message",l)}const a=be.document.head||be.document.body;a?a.appendChild(r):Vo&&Yo.error("Not injecting report dialog. No injection point found in HTML")};function zy(){}function qy(n){n()}function Hy(n){return np(n)()}function op(){if(typeof L.document>"u"){kn&&w.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");return}ic({ignoreDuration:!0}),ac(),Lc(({from:n,to:e})=>{n!==void 0&&n!==e&&(ic({ignoreDuration:!0}),ac())})}function Gy(n){const e=Xg();e&&e.captureUserFeedback(n)}function ip(n){const e=Object.assign({pollInterval:1e3,anrThreshold:5e3,captureStackTrace:!1},n),t=De();document.addEventListener("visibilitychange",()=>{t.sendStatus({status:document.visibilityState,config:e})}),t.sendStatus({status:document.visibilityState,config:e}),setInterval(()=>{t.sendStatus({status:"alive",config:e})},e.pollInterval)}const rp=50,[,cp]=ya,[,ap]=Xf(),lp=(n,e=0)=>{const t=[];for(const o of n.split(`
`).slice(e)){const i=cp(o),r=ap(o);if(i&&r?.in_app!==!1?t.push(i):r&&t.push(An(r)),t.length>=rp)break}return Vr(t)};var Xo=function(n,e){return Xo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])},Xo(n,e)};function sp(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Xo(n,e);function t(){this.constructor=n}n.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Zo=function(){return Zo=Object.assign||function(e){for(var t,o=1,i=arguments.length;o<i;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Zo.apply(this,arguments)};function Ap(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(t[o[i]]=n[o[i]]);return t}function fp(n,e,t,o){var i=arguments.length,r=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,o);else for(var a=n.length-1;a>=0;a--)(c=n[a])&&(r=(i<3?c(r):i>3?c(e,t,r):c(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function up(n,e){return function(t,o){e(t,o,n)}}function Wy(n,e,t,o,i,r){function c(k){if(k!==void 0&&typeof k!="function")throw new TypeError("Function expected");return k}for(var a=o.kind,l=a==="getter"?"get":a==="setter"?"set":"value",s=!e&&n?o.static?n:n.prototype:null,f=e||(s?Object.getOwnPropertyDescriptor(s,o.name):{}),A,d=!1,E=t.length-1;E>=0;E--){var h={};for(var S in o)h[S]=S==="access"?{}:o[S];for(var S in o.access)h.access[S]=o.access[S];h.addInitializer=function(k){if(d)throw new TypeError("Cannot add initializers after decoration has completed");r.push(c(k||null))};var y=(0,t[E])(a==="accessor"?{get:f.get,set:f.set}:f[l],h);if(a==="accessor"){if(y===void 0)continue;if(y===null||typeof y!="object")throw new TypeError("Object expected");(A=c(y.get))&&(f.get=A),(A=c(y.set))&&(f.set=A),(A=c(y.init))&&i.unshift(A)}else(A=c(y))&&(a==="field"?i.unshift(A):f[l]=A)}s&&Object.defineProperty(s,o.name,f),d=!0}function Ky(n,e,t){for(var o=arguments.length>2,i=0;i<e.length;i++)t=o?e[i].call(n,t):e[i].call(n);return o?t:void 0}function Yy(n){return typeof n=="symbol"?n:"".concat(n)}function Vy(n,e,t){return typeof e=="symbol"&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:t?"".concat(t," ",e):e})}function Ep(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function ka(n,e,t,o){function i(r){return r instanceof t?r:new t(function(c){c(r)})}return new(t||(t=Promise))(function(r,c){function a(f){try{s(o.next(f))}catch(A){c(A)}}function l(f){try{s(o.throw(f))}catch(A){c(A)}}function s(f){f.done?r(f.value):i(f.value).then(a,l)}s((o=o.apply(n,e||[])).next())})}function dp(n,e){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(s){return function(f){return l([s,f])}}function l(s){if(o)throw new TypeError("Generator is already executing.");for(;c&&(c=0,s[0]&&(t=0)),t;)try{if(o=1,i&&(r=s[0]&2?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){t.label=s[1];break}if(s[0]===6&&t.label<r[1]){t.label=r[1],r=s;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(s);break}r[2]&&t.ops.pop(),t.trys.pop();continue}s=e.call(n,t)}catch(f){s=[6,f],i=0}finally{o=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}var Qo=Object.create?function(n,e,t,o){o===void 0&&(o=t);var i=Object.getOwnPropertyDescriptor(e,t);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(n,o,i)}:function(n,e,t,o){o===void 0&&(o=t),n[o]=e[t]};function gp(n,e){for(var t in n)t!=="default"&&!Object.prototype.hasOwnProperty.call(e,t)&&Qo(e,n,t)}function ni(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],o=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&o>=n.length&&(n=void 0),{value:n&&n[o++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function wa(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var o=t.call(n),i,r=[],c;try{for(;(e===void 0||e-- >0)&&!(i=o.next()).done;)r.push(i.value)}catch(a){c={error:a}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return r}function pp(){for(var n=[],e=0;e<arguments.length;e++)n=n.concat(wa(arguments[e]));return n}function bp(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var o=Array(n),i=0,e=0;e<t;e++)for(var r=arguments[e],c=0,a=r.length;c<a;c++,i++)o[i]=r[c];return o}function _p(n,e,t){if(t||arguments.length===2)for(var o=0,i=e.length,r;o<i;o++)(r||!(o in e))&&(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}function Je(n){return this instanceof Je?(this.v=n,this):new Je(n)}function hp(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(n,e||[]),i,r=[];return i={},c("next"),c("throw"),c("return"),i[Symbol.asyncIterator]=function(){return this},i;function c(d){o[d]&&(i[d]=function(E){return new Promise(function(h,S){r.push([d,E,h,S])>1||a(d,E)})})}function a(d,E){try{l(o[d](E))}catch(h){A(r[0][3],h)}}function l(d){d.value instanceof Je?Promise.resolve(d.value.v).then(s,f):A(r[0][2],d)}function s(d){a("next",d)}function f(d){a("throw",d)}function A(d,E){d(E),r.shift(),r.length&&a(r[0][0],r[0][1])}}function mp(n){var e,t;return e={},o("next"),o("throw",function(i){throw i}),o("return"),e[Symbol.iterator]=function(){return this},e;function o(i,r){e[i]=n[i]?function(c){return(t=!t)?{value:Je(n[i](c)),done:!1}:r?r(c):c}:r}}function Bp(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ni=="function"?ni(n):n[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(r){t[r]=n[r]&&function(c){return new Promise(function(a,l){c=n[r](c),i(a,l,c.done,c.value)})}}function i(r,c,a,l){Promise.resolve(l).then(function(s){r({value:s,done:a})},c)}}function yp(n,e){return Object.defineProperty?Object.defineProperty(n,"raw",{value:e}):n.raw=e,n}var Fp=Object.create?function(n,e){Object.defineProperty(n,"default",{enumerable:!0,value:e})}:function(n,e){n.default=e};function vp(n){if(n&&n.__esModule)return n;var e={};if(n!=null)for(var t in n)t!=="default"&&Object.prototype.hasOwnProperty.call(n,t)&&Qo(e,n,t);return Fp(e,n),e}function Cp(n){return n&&n.__esModule?n:{default:n}}function kp(n,e,t,o){if(t==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?n!==e||!o:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?o:t==="a"?o.call(n):o?o.value:e.get(n)}function wp(n,e,t,o,i){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?n!==e||!i:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?i.call(n,t):i?i.value=t:e.set(n,t),t}function Sp(n,e){if(e===null||typeof e!="object"&&typeof e!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?e===n:n.has(e)}function xp(n,e,t){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var o;if(t){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");o=e[Symbol.asyncDispose]}if(o===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");o=e[Symbol.dispose]}if(typeof o!="function")throw new TypeError("Object not disposable.");n.stack.push({value:e,dispose:o,async:t})}else t&&n.stack.push({async:!0});return e}var Tp=typeof SuppressedError=="function"?SuppressedError:function(n,e,t){var o=new Error(t);return o.name="SuppressedError",o.error=n,o.suppressed=e,o};function Ip(n){function e(o){n.error=n.hasError?new Tp(o,n.error,"An error was suppressed during disposal."):o,n.hasError=!0}function t(){for(;n.stack.length;){var o=n.stack.pop();try{var i=o.dispose&&o.dispose.call(o.value);if(o.async)return Promise.resolve(i).then(t,function(r){return e(r),t()})}catch(r){e(r)}}if(n.hasError)throw n.error}return t()}const Xy={__extends:sp,__assign:Zo,__rest:Ap,__decorate:fp,__param:up,__metadata:Ep,__awaiter:ka,__generator:dp,__createBinding:Qo,__exportStar:gp,__values:ni,__read:wa,__spread:pp,__spreadArrays:bp,__spreadArray:_p,__await:Je,__asyncGenerator:hp,__asyncDelegator:mp,__asyncValues:Bp,__makeTemplateObject:yp,__importStar:vp,__importDefault:Cp,__classPrivateFieldGet:kp,__classPrivateFieldSet:wp,__classPrivateFieldIn:Sp,__addDisposableResource:xp,__disposeResources:Ip};function Op(n){const e=De();return Ko(n,t=>ka(this,void 0,void 0,function*(){return e.sendEnvelope(t.body),{statusCode:200}}))}function Rp(n){const e=typeof window<"u"?"renderer":"main";if(e!==n)throw new Error(`This code is intended to run in the Electron ${n} process but is currently running in the ${e} process.
This can occur if a bundler picks the wrong entry point.

You can work around this by using a relative import:
import * as Sentry from '@sentry/electron/${e}';`)}const Pp=[...Ca,Qc(),da()];function Dp(n={},e=tp){if(Rp("renderer"),window?.__SENTRY__RENDERER_INIT__){w.warn(`The browser SDK has already been initialized.
If init has been called in the preload and contextIsolation is disabled, is not required to call init in the renderer`);return}window.__SENTRY__RENDERER_INIT__=!0,n.autoSessionTracking===void 0&&(n.autoSessionTracking=!1),n.sendClientReports=!1,n.defaultIntegrations===void 0&&(n.defaultIntegrations=Pp),n.stackParser===void 0&&(n.stackParser=lp),n.dsn===void 0&&(n.dsn="https://12345@dummy.dsn/12345"),n.transport===void 0&&(n.transport=Op),n.anrDetection&&ip(n.anrDetection===!0?{}:n.anrDetection),delete n.initialScope,e(n)}const Zy=Object.assign(Object.assign({},Jd),{MetricsAggregator:$d}),Qy=Object.assign(Object.assign({},td),v);function Np(){console.log("Starting Sentry (Renderer)"),Dp({...window.desktop?.diagnostics?.sentryOptions}),uf(nc)}const Lp=Object.prototype.hasOwnProperty;function Mp(n,e){if(Object.is(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;const t=Object.keys(n),o=Object.keys(e);if(t.length!==o.length)return!1;for(let i=0;i<t.length;i++)if(!Lp.call(e,t[i])||!Object.is(n[t[i]],e[t[i]]))return!1;return!0}function jp(){this.__data__=[],this.size=0}const Jp=jp;function Up(n,e){return n===e||n!==n&&e!==e}const Sa=Up;function $p(n,e){for(var t=n.length;t--;)if(Sa(n[t][0],e))return t;return-1}const Pt=$p;var zp=Array.prototype,qp=zp.splice;function Hp(n){var e=this.__data__,t=Pt(e,n);if(t<0)return!1;var o=e.length-1;return t==o?e.pop():qp.call(e,t,1),--this.size,!0}const Gp=Hp;function Wp(n){var e=this.__data__,t=Pt(e,n);return t<0?void 0:e[t][1]}const Kp=Wp;function Yp(n){return Pt(this.__data__,n)>-1}const Vp=Yp;function Xp(n,e){var t=this.__data__,o=Pt(t,n);return o<0?(++this.size,t.push([n,e])):t[o][1]=e,this}const Zp=Xp;function _e(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}_e.prototype.clear=Jp,_e.prototype.delete=Gp,_e.prototype.get=Kp,_e.prototype.has=Vp,_e.prototype.set=Zp;const Dt=_e;function Qp(){this.__data__=new Dt,this.size=0}const nb=Qp;function eb(n){var e=this.__data__,t=e.delete(n);return this.size=e.size,t}const tb=eb;function ob(n){return this.__data__.get(n)}const ib=ob;function rb(n){return this.__data__.has(n)}const cb=rb;var ab="[object AsyncFunction]",lb="[object Function]",sb="[object GeneratorFunction]",Ab="[object Proxy]";function fb(n){if(!ct(n))return!1;var e=te(n);return e==lb||e==sb||e==ab||e==Ab}const xa=fb;var ub=mn["__core-js_shared__"];const ei=ub;var Ta=function(){var n=/[^.]+$/.exec(ei&&ei.keys&&ei.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function Eb(n){return!!Ta&&Ta in n}const db=Eb;var gb=Function.prototype,pb=gb.toString;function bb(n){if(n!=null){try{return pb.call(n)}catch{}try{return n+""}catch{}}return""}const Gn=bb;var _b=/[\\^$.*+?()[\]{}|]/g,hb=/^\[object .+?Constructor\]$/,mb=Function.prototype,Bb=Object.prototype,yb=mb.toString,Fb=Bb.hasOwnProperty,vb=RegExp("^"+yb.call(Fb).replace(_b,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Cb(n){if(!ct(n)||db(n))return!1;var e=xa(n)?vb:hb;return e.test(Gn(n))}const kb=Cb;function wb(n,e){return n?.[e]}const Sb=wb;function xb(n,e){var t=Sb(n,e);return kb(t)?t:void 0}const he=xb;var Tb=he(mn,"Map");const Ue=Tb;var Ib=he(Object,"create");const $e=Ib;function Ob(){this.__data__=$e?$e(null):{},this.size=0}const Rb=Ob;function Pb(n){var e=this.has(n)&&delete this.__data__[n];return this.size-=e?1:0,e}const Db=Pb;var Nb="__lodash_hash_undefined__",Lb=Object.prototype,Mb=Lb.hasOwnProperty;function jb(n){var e=this.__data__;if($e){var t=e[n];return t===Nb?void 0:t}return Mb.call(e,n)?e[n]:void 0}const Jb=jb;var Ub=Object.prototype,$b=Ub.hasOwnProperty;function zb(n){var e=this.__data__;return $e?e[n]!==void 0:$b.call(e,n)}const qb=zb;var Hb="__lodash_hash_undefined__";function Gb(n,e){var t=this.__data__;return this.size+=this.has(n)?0:1,t[n]=$e&&e===void 0?Hb:e,this}const Wb=Gb;function me(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}me.prototype.clear=Rb,me.prototype.delete=Db,me.prototype.get=Jb,me.prototype.has=qb,me.prototype.set=Wb;const Ia=me;function Kb(){this.size=0,this.__data__={hash:new Ia,map:new(Ue||Dt),string:new Ia}}const Yb=Kb;function Vb(n){var e=typeof n;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?n!=="__proto__":n===null}const Xb=Vb;function Zb(n,e){var t=n.__data__;return Xb(e)?t[typeof e=="string"?"string":"hash"]:t.map}const Nt=Zb;function Qb(n){var e=Nt(this,n).delete(n);return this.size-=e?1:0,e}const n_=Qb;function e_(n){return Nt(this,n).get(n)}const t_=e_;function o_(n){return Nt(this,n).has(n)}const i_=o_;function r_(n,e){var t=Nt(this,n),o=t.size;return t.set(n,e),this.size+=t.size==o?0:1,this}const c_=r_;function Be(n){var e=-1,t=n==null?0:n.length;for(this.clear();++e<t;){var o=n[e];this.set(o[0],o[1])}}Be.prototype.clear=Yb,Be.prototype.delete=n_,Be.prototype.get=t_,Be.prototype.has=i_,Be.prototype.set=c_;const Oa=Be;var a_=200;function l_(n,e){var t=this.__data__;if(t instanceof Dt){var o=t.__data__;if(!Ue||o.length<a_-1)return o.push([n,e]),this.size=++t.size,this;t=this.__data__=new Oa(o)}return t.set(n,e),this.size=t.size,this}const s_=l_;function ye(n){var e=this.__data__=new Dt(n);this.size=e.size}ye.prototype.clear=nb,ye.prototype.delete=tb,ye.prototype.get=ib,ye.prototype.has=cb,ye.prototype.set=s_;const ti=ye;var A_="__lodash_hash_undefined__";function f_(n){return this.__data__.set(n,A_),this}const u_=f_;function E_(n){return this.__data__.has(n)}const d_=E_;function Lt(n){var e=-1,t=n==null?0:n.length;for(this.__data__=new Oa;++e<t;)this.add(n[e])}Lt.prototype.add=Lt.prototype.push=u_,Lt.prototype.has=d_;const g_=Lt;function p_(n,e){for(var t=-1,o=n==null?0:n.length;++t<o;)if(e(n[t],t,n))return!0;return!1}const b_=p_;function __(n,e){return n.has(e)}const h_=__;var m_=1,B_=2;function y_(n,e,t,o,i,r){var c=t&m_,a=n.length,l=e.length;if(a!=l&&!(c&&l>a))return!1;var s=r.get(n),f=r.get(e);if(s&&f)return s==e&&f==n;var A=-1,d=!0,E=t&B_?new g_:void 0;for(r.set(n,e),r.set(e,n);++A<a;){var h=n[A],S=e[A];if(o)var y=c?o(S,h,A,e,n,r):o(h,S,A,n,e,r);if(y!==void 0){if(y)continue;d=!1;break}if(E){if(!b_(e,function(k,R){if(!h_(E,R)&&(h===k||i(h,k,t,o,r)))return E.push(R)})){d=!1;break}}else if(!(h===S||i(h,S,t,o,r))){d=!1;break}}return r.delete(n),r.delete(e),d}const Ra=y_;var F_=mn.Uint8Array;const Pa=F_;function v_(n){var e=-1,t=Array(n.size);return n.forEach(function(o,i){t[++e]=[i,o]}),t}const C_=v_;function k_(n){var e=-1,t=Array(n.size);return n.forEach(function(o){t[++e]=o}),t}const w_=k_;var S_=1,x_=2,T_="[object Boolean]",I_="[object Date]",O_="[object Error]",R_="[object Map]",P_="[object Number]",D_="[object RegExp]",N_="[object Set]",L_="[object String]",M_="[object Symbol]",j_="[object ArrayBuffer]",J_="[object DataView]",Da=ee?ee.prototype:void 0,oi=Da?Da.valueOf:void 0;function U_(n,e,t,o,i,r,c){switch(t){case J_:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case j_:return!(n.byteLength!=e.byteLength||!r(new Pa(n),new Pa(e)));case T_:case I_:case P_:return Sa(+n,+e);case O_:return n.name==e.name&&n.message==e.message;case D_:case L_:return n==e+"";case R_:var a=C_;case N_:var l=o&S_;if(a||(a=w_),n.size!=e.size&&!l)return!1;var s=c.get(n);if(s)return s==e;o|=x_,c.set(n,e);var f=Ra(a(n),a(e),o,i,r,c);return c.delete(n),f;case M_:if(oi)return oi.call(n)==oi.call(e)}return!1}const $_=U_;function z_(n,e){for(var t=-1,o=e.length,i=n.length;++t<o;)n[i+t]=e[t];return n}const q_=z_;var H_=Array.isArray;const Mt=H_;function G_(n,e,t){var o=e(n);return Mt(n)?o:q_(o,t(n))}const W_=G_;function K_(n,e){for(var t=-1,o=n==null?0:n.length,i=0,r=[];++t<o;){var c=n[t];e(c,t,n)&&(r[i++]=c)}return r}const Y_=K_;function V_(){return[]}const X_=V_;var Z_=Object.prototype,Q_=Z_.propertyIsEnumerable,Na=Object.getOwnPropertySymbols,nh=Na?function(n){return n==null?[]:(n=Object(n),Y_(Na(n),function(e){return Q_.call(n,e)}))}:X_;const eh=nh;function th(n,e){for(var t=-1,o=Array(n);++t<n;)o[t]=e(t);return o}const oh=th;var ih="[object Arguments]";function rh(n){return oe(n)&&te(n)==ih}const La=rh;var Ma=Object.prototype,ch=Ma.hasOwnProperty,ah=Ma.propertyIsEnumerable,lh=La(function(){return arguments}())?La:function(n){return oe(n)&&ch.call(n,"callee")&&!ah.call(n,"callee")};const sh=lh;function Ah(){return!1}const fh=Ah;var ja=typeof xn=="object"&&xn&&!xn.nodeType&&xn,Ja=ja&&typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,uh=Ja&&Ja.exports===ja,Ua=uh?mn.Buffer:void 0,Eh=Ua?Ua.isBuffer:void 0,dh=Eh||fh;const ii=dh;var gh=9007199254740991,ph=/^(?:0|[1-9]\d*)$/;function bh(n,e){var t=typeof n;return e=e??gh,!!e&&(t=="number"||t!="symbol"&&ph.test(n))&&n>-1&&n%1==0&&n<e}const _h=bh;var hh=9007199254740991;function mh(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=hh}const $a=mh;var Bh="[object Arguments]",yh="[object Array]",Fh="[object Boolean]",vh="[object Date]",Ch="[object Error]",kh="[object Function]",wh="[object Map]",Sh="[object Number]",xh="[object Object]",Th="[object RegExp]",Ih="[object Set]",Oh="[object String]",Rh="[object WeakMap]",Ph="[object ArrayBuffer]",Dh="[object DataView]",Nh="[object Float32Array]",Lh="[object Float64Array]",Mh="[object Int8Array]",jh="[object Int16Array]",Jh="[object Int32Array]",Uh="[object Uint8Array]",$h="[object Uint8ClampedArray]",zh="[object Uint16Array]",qh="[object Uint32Array]",H={};H[Nh]=H[Lh]=H[Mh]=H[jh]=H[Jh]=H[Uh]=H[$h]=H[zh]=H[qh]=!0,H[Bh]=H[yh]=H[Ph]=H[Fh]=H[Dh]=H[vh]=H[Ch]=H[kh]=H[wh]=H[Sh]=H[xh]=H[Th]=H[Ih]=H[Oh]=H[Rh]=!1;function Hh(n){return oe(n)&&$a(n.length)&&!!H[te(n)]}const Gh=Hh;function Wh(n){return function(e){return n(e)}}const Kh=Wh;var za=typeof xn=="object"&&xn&&!xn.nodeType&&xn,ze=za&&typeof Tn=="object"&&Tn&&!Tn.nodeType&&Tn,Yh=ze&&ze.exports===za,ri=Yh&&ur.process,Vh=function(){try{var n=ze&&ze.require&&ze.require("util").types;return n||ri&&ri.binding&&ri.binding("util")}catch{}}();const qa=Vh;var Ha=qa&&qa.isTypedArray,Xh=Ha?Kh(Ha):Gh;const Ga=Xh;var Zh=Object.prototype,Qh=Zh.hasOwnProperty;function nm(n,e){var t=Mt(n),o=!t&&sh(n),i=!t&&!o&&ii(n),r=!t&&!o&&!i&&Ga(n),c=t||o||i||r,a=c?oh(n.length,String):[],l=a.length;for(var s in n)(e||Qh.call(n,s))&&!(c&&(s=="length"||i&&(s=="offset"||s=="parent")||r&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||_h(s,l)))&&a.push(s);return a}const em=nm;var tm=Object.prototype;function om(n){var e=n&&n.constructor,t=typeof e=="function"&&e.prototype||tm;return n===t}const im=om;function rm(n,e){return function(t){return n(e(t))}}var cm=rm(Object.keys,Object);const am=cm;var lm=Object.prototype,sm=lm.hasOwnProperty;function Am(n){if(!im(n))return am(n);var e=[];for(var t in Object(n))sm.call(n,t)&&t!="constructor"&&e.push(t);return e}const fm=Am;function um(n){return n!=null&&$a(n.length)&&!xa(n)}const Em=um;function dm(n){return Em(n)?em(n):fm(n)}const gm=dm;function pm(n){return W_(n,gm,eh)}const Wa=pm;var bm=1,_m=Object.prototype,hm=_m.hasOwnProperty;function mm(n,e,t,o,i,r){var c=t&bm,a=Wa(n),l=a.length,s=Wa(e),f=s.length;if(l!=f&&!c)return!1;for(var A=l;A--;){var d=a[A];if(!(c?d in e:hm.call(e,d)))return!1}var E=r.get(n),h=r.get(e);if(E&&h)return E==e&&h==n;var S=!0;r.set(n,e),r.set(e,n);for(var y=c;++A<l;){d=a[A];var k=n[d],R=e[d];if(o)var V=c?o(R,k,d,e,n,r):o(k,R,d,n,e,r);if(!(V===void 0?k===R||i(k,R,t,o,r):V)){S=!1;break}y||(y=d=="constructor")}if(S&&!y){var ln=n.constructor,on=e.constructor;ln!=on&&"constructor"in n&&"constructor"in e&&!(typeof ln=="function"&&ln instanceof ln&&typeof on=="function"&&on instanceof on)&&(S=!1)}return r.delete(n),r.delete(e),S}const Bm=mm;var ym=he(mn,"DataView");const ci=ym;var Fm=he(mn,"Promise");const ai=Fm;var vm=he(mn,"Set");const li=vm;var Cm=he(mn,"WeakMap");const si=Cm;var Ka="[object Map]",km="[object Object]",Ya="[object Promise]",Va="[object Set]",Xa="[object WeakMap]",Za="[object DataView]",wm=Gn(ci),Sm=Gn(Ue),xm=Gn(ai),Tm=Gn(li),Im=Gn(si),Wn=te;(ci&&Wn(new ci(new ArrayBuffer(1)))!=Za||Ue&&Wn(new Ue)!=Ka||ai&&Wn(ai.resolve())!=Ya||li&&Wn(new li)!=Va||si&&Wn(new si)!=Xa)&&(Wn=function(n){var e=te(n),t=e==km?n.constructor:void 0,o=t?Gn(t):"";if(o)switch(o){case wm:return Za;case Sm:return Ka;case xm:return Ya;case Tm:return Va;case Im:return Xa}return e});const Qa=Wn;var Om=1,nl="[object Arguments]",el="[object Array]",jt="[object Object]",Rm=Object.prototype,tl=Rm.hasOwnProperty;function Pm(n,e,t,o,i,r){var c=Mt(n),a=Mt(e),l=c?el:Qa(n),s=a?el:Qa(e);l=l==nl?jt:l,s=s==nl?jt:s;var f=l==jt,A=s==jt,d=l==s;if(d&&ii(n)){if(!ii(e))return!1;c=!0,f=!1}if(d&&!f)return r||(r=new ti),c||Ga(n)?Ra(n,e,t,o,i,r):$_(n,e,l,t,o,i,r);if(!(t&Om)){var E=f&&tl.call(n,"__wrapped__"),h=A&&tl.call(e,"__wrapped__");if(E||h){var S=E?n.value():n,y=h?e.value():e;return r||(r=new ti),i(S,y,t,o,r)}}return d?(r||(r=new ti),Bm(n,e,t,o,i,r)):!1}const Dm=Pm;function ol(n,e,t,o,i){return n===e?!0:n==null||e==null||!oe(n)&&!oe(e)?n!==n&&e!==e:Dm(n,e,t,o,ol,i)}const Nm=ol;function Lm(n,e){return Nm(n,e)}const il=Lm;function Mm(n){const e=Zn(n);return!Mp(n,e.current)&&!il(n,e.current)&&(e.current=n),e.current}function jm(n,e){Qe(n,[Mm(e)])}function rl(n){return pA(n,il)}const Jm=()=>{const n=rl(e=>e.settings.locale);jm(()=>{async function e(){n&&await window.desktop.intl.applyLocale(n)}e()},[n])};Np();const Um={boldenText:{pattern:/<strong>(.*)<\/strong>/,matcherFn:(n,e,t)=>dn("strong",{children:e},t)}},cl=()=>{const n=rl(c=>c.app);Jm();const e=()=>window.desktop.netLogWindow.prepareAndRevealLogs(),t=()=>window.close(),{intl:o}=window.desktop,i=n.netLogStatus?o.t("Your log is in progress.",ve.RENDERER)():Jl(Um)(o.t("Your log has been saved to your <strong>Downloads</strong> folder.",ve.RENDERER)()),r=n.netLogStatus?dn("button",{className:"btn",onClick:e,children:o.t("Stop Logging",ve.RENDERER)()}):dn("button",{className:"btn btn_outline",onClick:t,children:o.t("Close Window",ve.RENDERER)()});return dn("div",{className:"NetLogWindow",children:[dn("div",{className:"NetLogWindow-illustration",children:dn("img",{src:n.netLogStatus?Ul:$l})}),dn("div",{className:"NetLogWindow-text",children:i}),r]})};void Af(cl)})(),Wm=Ht})()});Km();})();

//# sourceMappingURL=net-log-window.bundle.js.map
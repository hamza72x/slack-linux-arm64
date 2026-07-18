(()=>{var Q0=(nn,$e)=>()=>($e||nn(($e={exports:{}}).exports,$e),$e.exports);var nv=Q0((gn,bn)=>{(function(){try{var nn=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$e=new Error().stack;$e&&(nn._sentryDebugIds=nn._sentryDebugIds||{},nn._sentryDebugIds[$e]="87ddfa86-e86c-49fc-aedd-9bca2024cf57",nn._sentryDebugIdIdentifier="sentry-dbid-87ddfa86-e86c-49fc-aedd-9bca2024cf57")}catch{}})();var Z0=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};Z0.SENTRY_RELEASE={id:"Slack@4.50.143"};var ev;(()=>{var nn={4871(v,y,u){"use strict";u.d(y,{A:()=>k});var w=u(2845),T=u.n(w),S=u(8843),I=u.n(S),O=I()(T());O.push([v.id,`.Avatar {
  border-radius: 4px;
  margin: 3px 8px 0 0;
  width: 36px;
  min-width: 36px;
  max-height: 36px;
  background-size: cover;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/avatar.less"],names:[],mappings:"AAAA;EACE,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;EACA,sBAAA;AACF",sourcesContent:[`.Avatar {
  border-radius: 4px;
  margin: 3px 8px 0 0;
  width: 36px;
  min-width: 36px;
  max-height: 36px;
  background-size: cover;
}
`],sourceRoot:""}]);const k=O},8455(v,y,u){"use strict";u.d(y,{A:()=>k});var w=u(2845),T=u.n(w),S=u(8843),I=u.n(S),O=I()(T());O.push([v.id,`.Notifications2018 .Channels {
  background-color: var(--sk_primary_background);
}
.Notifications2018 .Channel {
  border-bottom: 1px solid var(--sk_foreground_min);
}
.Notifications2018 .Channel header {
  color: var(--sk_foreground_max);
  display: flex;
}
.Notifications2018 .Channel header h4 {
  font-size: 14px;
  font-weight: 800;
  margin: 0;
}
.Notifications2018 .Channel header a:hover {
  background-color: var(--sk_foreground_min);
}
.Notifications2018 .Channel header a.OpenChannel {
  height: 100%;
  padding: 9px 10px 7px 10px;
  display: inline-block;
  width: calc(100% - 35px);
  box-sizing: border-box;
  flex-grow: 1;
}
.Notifications2018 .Channel header a.OpenChannel h4 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Notifications2018 .Channel header a.Close {
  display: inline-block;
  padding: 7px 10px 0 10px;
  float: right;
  margin-right: 1px;
}
.Notifications2018 .Channel header i.c-icon:before {
  font-size: 14px;
}
.Notifications2018 .Channels:last-child {
  border: none;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/channel.less"],names:[],mappings:"AAAA;EAEI,8CAAA;AAAJ;AAFA;EAMI,iDAAA;AADJ;AALA;EASM,+BAAA;EACA,aAAA;AADN;AATA;EAaQ,eAAA;EACA,gBAAA;EACA,SAAA;AADR;AAdA;EAmBQ,0CAAA;AAFR;AAjBA;EAuBQ,YAAA;EACA,0BAAA;EACA,qBAAA;EACA,wBAAA;EACA,sBAAA;EACA,YAAA;AAHR;AAzBA;EA+BU,mBAAA;EACA,gBAAA;EACA,uBAAA;AAHV;AA9BA;EAsCQ,qBAAA;EACA,wBAAA;EACA,YAAA;EACA,iBAAA;AALR;AApCA;EA6CQ,eAAA;AANR;AAvCA;EAmDI,YAAA;AATJ",sourcesContent:[`.Notifications2018 {
  .Channels {
    background-color: var(--sk_primary_background);
  }

  .Channel {
    border-bottom: 1px solid var(--sk_foreground_min);

    header {
      color: var(--sk_foreground_max);
      display: flex;

      h4 {
        font-size: 14px;
        font-weight: 800;
        margin: 0;
      }

      a:hover {
        background-color: var(--sk_foreground_min);
      }

      a.OpenChannel {
        height: 100%;
        padding: 9px 10px 7px 10px;
        display: inline-block;
        width: ~'calc(100% - 35px)';
        box-sizing: border-box;
        flex-grow: 1;

        h4 {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      a.Close {
        display: inline-block;
        padding: 7px 10px 0 10px;
        float: right;
        margin-right: 1px;
      }

      i.c-icon:before {
        font-size: 14px;
      }
    }
  }

  .Channels:last-child {
    border: none;
  }
}
`],sourceRoot:""}]);const k=O},519(v,y,u){"use strict";u.d(y,{A:()=>k});var w=u(2845),T=u.n(w),S=u(8843),I=u.n(S),O=I()(T());O.push([v.id,`.Notifications2018 .Message:hover {
  background-color: var(--sk_foreground_min);
}
.Notifications2018 .Message {
  display: flex;
  padding: 8px 10px 6px 10px;
}
.Notifications2018 .Message:last-child {
  margin-bottom: 10px;
}
.Notifications2018 .Message:first-child {
  padding-top: 0;
}
.Notifications2018 .Message p,
.Notifications2018 .Message h5 {
  margin: 0;
}
.Notifications2018 .Message h5 {
  font-weight: 900;
  color: var(--sk_primary_foreground);
  font-size: 15px;
}
.Notifications2018 .Message .Timestamp {
  font-size: 12px;
  color: var(--sk_foreground_max);
  font-weight: 400;
  margin-left: 4px;
}
.Notifications2018 .Message .Content {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  display: -webkit-box;
  padding: 0 2px;
}
.Notifications2018 .Message .Content p {
  line-height: 22px;
}
.Notifications2018 .Message .Content img {
  width: 100%;
  border-radius: 3px;
  margin-top: 11px;
}
.Notifications2018 .Message .Content .emoji {
  max-width: 22px;
  max-height: 22px;
  margin: 0;
  margin-bottom: -5px;
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/message.less"],names:[],mappings:"AAAA;EAEI,0CAAA;AAAJ;AAFA;EAMI,aAAA;EACA,0BAAA;AADJ;AAGI;EACE,mBAAA;AADN;AAII;EACE,cAAA;AAFN;AAZA;;EAmBM,SAAA;AAHN;AAhBA;EAuBM,gBAAA;EACA,mCAAA;EACA,eAAA;AAJN;AArBA;EA6BM,eAAA;EACA,+BAAA;EACA,gBAAA;EACA,gBAAA;AALN;AA3BA;EAqCM,4BAAA;EACA,qBAAA;EACA,gBAAA;EACA,oBAAA;EACA,cAAA;AAPN;AAlCA;EA4CQ,iBAAA;AAPR;AArCA;EAgDQ,WAAA;EACA,kBAAA;EACA,gBAAA;AARR;AA1CA;EAsDQ,eAAA;EACA,gBAAA;EACA,SAAA;EACA,mBAAA;AATR",sourcesContent:[`.Notifications2018 {
  .Message:hover {
    background-color: var(--sk_foreground_min);
  }

  .Message {
    display: flex;
    padding: 8px 10px 6px 10px;

    &:last-child {
      margin-bottom: 10px;
    }

    &:first-child {
      padding-top: 0;
    }

    p,
    h5 {
      margin: 0;
    }

    h5 {
      font-weight: 900;
      color: var(--sk_primary_foreground);
      font-size: 15px;
    }

    .Timestamp {
      font-size: 12px;
      color: var(--sk_foreground_max);
      font-weight: 400;
      margin-left: 4px;
    }

    .Content {
      // 5 lines max
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      overflow: hidden;
      display: -webkit-box;
      padding: 0 2px;

      p {
        line-height: 22px;
      }

      img {
        width: 100%;
        border-radius: 3px;
        margin-top: 11px;
      }

      .emoji {
        max-width: 22px;
        max-height: 22px;
        margin: 0;
        margin-bottom: -5px;
      }
    }
  }
}
`],sourceRoot:""}]);const k=O},8972(v,y,u){"use strict";u.d(y,{A:()=>Te});var w=u(2845),T=u.n(w),S=u(8843),I=u.n(S),O=u(5858),k=u.n(O),H=new URL(u(5539),u.b),M=new URL(u(4603),u.b),K=new URL(u(4392),u.b),U=new URL(u(9138),u.b),L=new URL(u(5906),u.b),W=new URL(u(9269),u.b),te=new URL(u(5959),u.b),q=new URL(u(7),u.b),Y=new URL(u(6723),u.b),le=I()(T()),ie=k()(H),Ae=k()(M),X=k()(K),ne=k()(U),D=k()(L),J=k()(W),Be=k()(te),mn=k()(q),Ve=k()(Y);le.push([v.id,`/*

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
  src: url(${ie}) format('woff2');
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
  src: url(${X}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(${ne}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Light Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 300;
  src: url(${D}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 400;
  src: url(${J}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(${Be}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(${mn}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
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
@font-face {
  font-family: 'Slack v2';
  src: url(${Ve}) format('woff2');
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
.Notifications2018 a {
  text-decoration: none;
}
.Notifications2018 .NotificationHost {
  --sk_primary_foreground: #1d1c1d;
  --sk_primary_background: #fff;
  --sk_inverted_foreground: #fff;
  --sk_inverted_background: #1d1c1d;
  --sk_foreground_min: rgba(29, 28, 29, 0.04);
  --sk_foreground_low: rgba(29, 28, 29, 0.13);
  --sk_foreground_high: rgba(29, 28, 29, 0.5);
  --sk_foreground_max: rgba(29, 28, 29, 0.7);
  width: 98%;
  height: 100%;
  float: right;
  display: flex;
  align-items: flex-end;
  font-family: Slack-Lato, Meiryo, Lucida Grande, sans-serif;
  color: var(--sk_primary_foreground);
}
.Notifications2018 .NotificationHost.NotificationHost--dark {
  --sk_primary_foreground: #e8e8e8;
  --sk_primary_background: #1a1d21;
  --sk_inverted_foreground: #1a1d21;
  --sk_inverted_background: #e8e8e8;
  --sk_foreground_min: rgba(232, 232, 232, 0.04);
  --sk_foreground_low: rgba(232, 232, 232, 0.13);
  --sk_foreground_high: rgba(232, 232, 232, 0.5);
  --sk_foreground_max: rgba(232, 232, 232, 0.7);
}
.Notifications2018 .NotificationHost-list {
  width: 100%;
}
.Notifications2018 .NotificationHost .spin-enter {
  -webkit-animation-duration: 0.2s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
}
.Notifications2018 .NotificationHost .spin-leave {
  -webkit-animation-duration: 0.2s;
  -webkit-animation-fill-mode: both;
  -webkit-animation-name: collapseHeight;
  align-self: flex-end;
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes collapseHeight {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    height: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/notification-host.less","webpack://./src/resources/lato.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less","webpack://./src/resources/slack-icons-font.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA;;;;;;;;;;;;;EAaE;AACF;;;;EAIE;AEvFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AFyFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;CAGC;AACD;;;CAGC;AGpBD;EACE,iBAAA;AHsBF;AGpBA;EACE,iBAAA;AHsBF;AIjHA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AJkHF;AItGA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AJwGF;AIvGE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AJyHF;AIvGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AJyGF;AIxGE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AJ0GJ;AIxGE;EAEE,gBAAA;AJyGJ;AIlGA;EACE,UAAA;AJoGF;AInGE;EACE,kBAAA;AJqGJ;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AImkBA;EAEE,WAAA;AJlkBF;AIujBE;EACE,gBAAA;EACA,cAAA;AJrjBJ;AIujBE;EACE,yBAAA;AJrjBJ;AI6jBE;EACE,eAAA;AJ3jBJ;AI+jBA;EAEE,WAAA;AJ9jBF;AI0iBE;EACE,gBAAA;EACA,cAAA;AJxiBJ;AI0iBE;EACE,yBAAA;AJxiBJ;AIyjBE;EACE,eAAA;AJvjBJ;AI2jBA;EAEE,WAAA;AJ1jBF;AI6hBE;EACE,gBAAA;EACA,cAAA;AJ3hBJ;AI6hBE;EACE,yBAAA;AJ3hBJ;AIqjBE;EACE,eAAA;AJnjBJ;AImhBE;EACE,gBAAA;EACA,cAAA;AJjhBJ;AImhBE;EACE,yBAAA;AJjhBJ;AI4gBE;EACE,gBAAA;EACA,cAAA;AJ1gBJ;AI4gBE;EACE,yBAAA;AJ1gBJ;AIqgBE;EACE,gBAAA;EACA,cAAA;AJngBJ;AIqgBE;EACE,yBAAA;AJngBJ;AI8fE;EACE,gBAAA;EACA,cAAA;AJ5fJ;AI8fE;EACE,yBAAA;AJ5fJ;AIufE;EACE,gBAAA;EACA,cAAA;AJrfJ;AIufE;EACE,yBAAA;AJrfJ;AIgfE;EACE,gBAAA;EACA,cAAA;AJ9eJ;AIgfE;EACE,yBAAA;AJ9eJ;AIyeE;EACE,gBAAA;EACA,cAAA;AJveJ;AIyeE;EACE,yBAAA;AJveJ;AIkeE;EACE,gBAAA;EACA,cAAA;AJheJ;AIkeE;EACE,yBAAA;AJheJ;AI2dE;EACE,gBAAA;EACA,cAAA;AJzdJ;AI2dE;EACE,yBAAA;AJzdJ;AIodE;EACE,gBAAA;EACA,cAAA;AJldJ;AIodE;EACE,yBAAA;AJldJ;AI6cE;EACE,gBAAA;EACA,cAAA;AJ3cJ;AI6cE;EACE,yBAAA;AJ3cJ;AIscE;EACE,gBAAA;EACA,cAAA;AJpcJ;AIscE;EACE,yBAAA;AJpcJ;AI+bE;EACE,gBAAA;EACA,cAAA;AJ7bJ;AI+bE;EACE,yBAAA;AJ7bJ;AIwbE;EACE,gBAAA;EACA,cAAA;AJtbJ;AIwbE;EACE,yBAAA;AJtbJ;AIibE;EACE,gBAAA;EACA,cAAA;AJ/aJ;AIibE;EACE,yBAAA;AJ/aJ;AI0aE;EACE,gBAAA;EACA,cAAA;AJxaJ;AI0aE;EACE,yBAAA;AJxaJ;AImaE;EACE,gBAAA;EACA,cAAA;AJjaJ;AImaE;EACE,yBAAA;AJjaJ;AI4ZE;EACE,gBAAA;EACA,cAAA;AJ1ZJ;AI4ZE;EACE,yBAAA;AJ1ZJ;AIqZE;EACE,gBAAA;EACA,cAAA;AJnZJ;AIqZE;EACE,yBAAA;AJnZJ;AI8YE;EACE,gBAAA;EACA,cAAA;AJ5YJ;AI8YE;EACE,yBAAA;AJ5YJ;AIuYE;EACE,gBAAA;EACA,cAAA;AJrYJ;AIuYE;EACE,yBAAA;AJrYJ;AIgYE;EACE,gBAAA;EACA,cAAA;AJ9XJ;AIgYE;EACE,yBAAA;AJ9XJ;AIyXE;EACE,gBAAA;EACA,cAAA;AJvXJ;AIyXE;EACE,yBAAA;AJvXJ;AIkXE;EACE,gBAAA;EACA,cAAA;AJhXJ;AIkXE;EACE,yBAAA;AJhXJ;AI2WE;EACE,gBAAA;EACA,cAAA;AJzWJ;AI2WE;EACE,yBAAA;AJzWJ;AIoWE;EACE,gBAAA;EACA,cAAA;AJlWJ;AIoWE;EACE,yBAAA;AJlWJ;AI6VE;EACE,gBAAA;EACA,cAAA;AJ3VJ;AI6VE;EACE,yBAAA;AJ3VJ;AIsVE;EACE,gBAAA;EACA,cAAA;AJpVJ;AIsVE;EACE,yBAAA;AJpVJ;AI+UE;EACE,gBAAA;EACA,cAAA;AJ7UJ;AI+UE;EACE,yBAAA;AJ7UJ;AIwUE;EACE,gBAAA;EACA,cAAA;AJtUJ;AIwUE;EACE,yBAAA;AJtUJ;AIiUE;EACE,gBAAA;EACA,cAAA;AJ/TJ;AIiUE;EACE,yBAAA;AJ/TJ;AI0TE;EACE,gBAAA;EACA,cAAA;AJxTJ;AI0TE;EACE,yBAAA;AJxTJ;AImTE;EACE,gBAAA;EACA,cAAA;AJjTJ;AImTE;EACE,yBAAA;AJjTJ;AI4SE;EACE,gBAAA;EACA,cAAA;AJ1SJ;AI4SE;EACE,yBAAA;AJ1SJ;AIqSE;EACE,gBAAA;EACA,cAAA;AJnSJ;AIqSE;EACE,yBAAA;AJnSJ;AI8RE;EACE,gBAAA;EACA,cAAA;AJ5RJ;AI8RE;EACE,yBAAA;AJ5RJ;AIuRE;EACE,gBAAA;EACA,cAAA;AJrRJ;AIuRE;EACE,yBAAA;AJrRJ;AIgRE;EACE,gBAAA;EACA,cAAA;AJ9QJ;AIgRE;EACE,yBAAA;AJ9QJ;AIyQE;EACE,gBAAA;EACA,cAAA;AJvQJ;AIyQE;EACE,yBAAA;AJvQJ;AIkQE;EACE,gBAAA;EACA,cAAA;AJhQJ;AIkQE;EACE,yBAAA;AJhQJ;AI2PE;EACE,gBAAA;EACA,cAAA;AJzPJ;AI2PE;EACE,yBAAA;AJzPJ;AIoPE;EACE,gBAAA;EACA,cAAA;AJlPJ;AIoPE;EACE,yBAAA;AJlPJ;AI6OE;EACE,gBAAA;EACA,cAAA;AJ3OJ;AI6OE;EACE,yBAAA;AJ3OJ;AIsOE;EACE,gBAAA;EACA,cAAA;AJpOJ;AIsOE;EACE,yBAAA;AJpOJ;AI+NE;EACE,gBAAA;EACA,cAAA;AJ7NJ;AI+NE;EACE,yBAAA;AJ7NJ;AIwNE;EACE,gBAAA;EACA,cAAA;AJtNJ;AIwNE;EACE,yBAAA;AJtNJ;AIiNE;EACE,gBAAA;EACA,cAAA;AJ/MJ;AIiNE;EACE,yBAAA;AJ/MJ;AI0ME;EACE,gBAAA;EACA,cAAA;AJxMJ;AI0ME;EACE,yBAAA;AJxMJ;AImME;EACE,gBAAA;EACA,cAAA;AJjMJ;AImME;EACE,yBAAA;AJjMJ;AI4LE;EACE,gBAAA;EACA,cAAA;AJ1LJ;AI4LE;EACE,yBAAA;AJ1LJ;AIqLE;EACE,gBAAA;EACA,cAAA;AJnLJ;AIqLE;EACE,yBAAA;AJnLJ;AI8KE;EACE,gBAAA;EACA,cAAA;AJ5KJ;AI8KE;EACE,yBAAA;AJ5KJ;AIuKE;EACE,gBAAA;EACA,cAAA;AJrKJ;AIuKE;EACE,yBAAA;AJrKJ;AIgKE;EACE,gBAAA;EACA,cAAA;AJ9JJ;AIgKE;EACE,yBAAA;AJ9JJ;AIyJE;EACE,gBAAA;EACA,cAAA;AJvJJ;AIyJE;EACE,yBAAA;AJvJJ;AIkJE;EACE,gBAAA;EACA,cAAA;AJhJJ;AIkJE;EACE,yBAAA;AJhJJ;AI2IE;EACE,gBAAA;EACA,cAAA;AJzIJ;AI2IE;EACE,yBAAA;AJzIJ;AIoIE;EACE,gBAAA;EACA,cAAA;AJlIJ;AIoIE;EACE,yBAAA;AJlIJ;AI6HE;EACE,gBAAA;EACA,cAAA;AJ3HJ;AI6HE;EACE,yBAAA;AJ3HJ;AIsHE;EACE,gBAAA;EACA,cAAA;AJpHJ;AIsHE;EACE,yBAAA;AJpHJ;AI+GE;EACE,gBAAA;EACA,cAAA;AJ7GJ;AI+GE;EACE,yBAAA;AJ7GJ;AIwGE;EACE,gBAAA;EACA,cAAA;AJtGJ;AIwGE;EACE,yBAAA;AJtGJ;AIiGE;EACE,gBAAA;EACA,cAAA;AJ/FJ;AIiGE;EACE,yBAAA;AJ/FJ;AI0FE;EACE,gBAAA;EACA,cAAA;AJxFJ;AI0FE;EACE,yBAAA;AJxFJ;AImFE;EACE,gBAAA;EACA,cAAA;AJjFJ;AImFE;EACE,yBAAA;AJjFJ;AI4EE;EACE,gBAAA;EACA,cAAA;AJ1EJ;AI4EE;EACE,yBAAA;AJ1EJ;AIqEE;EACE,gBAAA;EACA,cAAA;AJnEJ;AIqEE;EACE,yBAAA;AJnEJ;AI8DE;EACE,gBAAA;EACA,cAAA;AJ5DJ;AI8DE;EACE,yBAAA;AJ5DJ;AIuDE;EACE,gBAAA;EACA,cAAA;AJrDJ;AIuDE;EACE,yBAAA;AJrDJ;AIgDE;EACE,gBAAA;EACA,cAAA;AJ9CJ;AIgDE;EACE,yBAAA;AJ9CJ;AIyCE;EACE,gBAAA;EACA,cAAA;AJvCJ;AIyCE;EACE,yBAAA;AJvCJ;AIkCE;EACE,gBAAA;EACA,cAAA;AJhCJ;AIkCE;EACE,yBAAA;AJhCJ;AI2BE;EACE,gBAAA;EACA,cAAA;AJzBJ;AI2BE;EACE,yBAAA;AJzBJ;AIoBE;EACE,gBAAA;EACA,cAAA;AJlBJ;AIoBE;EACE,yBAAA;AJlBJ;AIaE;EACE,gBAAA;EACA,cAAA;AJXJ;AIaE;EACE,yBAAA;AJXJ;AIME;EACE,gBAAA;EACA,cAAA;AJJJ;AIME;EACE,yBAAA;AJJJ;AIDE;EACE,gBAAA;EACA,cAAA;AJGJ;AIDE;EACE,yBAAA;AJGJ;AIRE;EACE,gBAAA;EACA,cAAA;AJUJ;AIRE;EACE,yBAAA;AJUJ;AIfE;EACE,gBAAA;EACA,cAAA;AJiBJ;AIfE;EACE,yBAAA;AJiBJ;AItBE;EACE,gBAAA;EACA,cAAA;AJwBJ;AItBE;EACE,yBAAA;AJwBJ;AI7BE;EACE,gBAAA;EACA,cAAA;AJ+BJ;AI7BE;EACE,yBAAA;AJ+BJ;AIpCE;EACE,gBAAA;EACA,cAAA;AJsCJ;AIpCE;EACE,yBAAA;AJsCJ;AI3CE;EACE,gBAAA;EACA,cAAA;AJ6CJ;AI3CE;EACE,yBAAA;AJ6CJ;AIlDE;EACE,gBAAA;EACA,cAAA;AJoDJ;AIlDE;EACE,yBAAA;AJoDJ;AIzDE;EACE,gBAAA;EACA,cAAA;AJ2DJ;AIzDE;EACE,yBAAA;AJ2DJ;AIhEE;EACE,gBAAA;EACA,cAAA;AJkEJ;AIhEE;EACE,yBAAA;AJkEJ;AIvEE;EACE,gBAAA;EACA,cAAA;AJyEJ;AIvEE;EACE,yBAAA;AJyEJ;AI9EE;EACE,gBAAA;EACA,cAAA;AJgFJ;AI9EE;EACE,yBAAA;AJgFJ;AIrFE;EACE,gBAAA;EACA,cAAA;AJuFJ;AIrFE;EACE,yBAAA;AJuFJ;AI5FE;EACE,gBAAA;EACA,cAAA;AJ8FJ;AI5FE;EACE,yBAAA;AJ8FJ;AInGE;EACE,gBAAA;EACA,cAAA;AJqGJ;AInGE;EACE,yBAAA;AJqGJ;AI1GE;EACE,gBAAA;EACA,cAAA;AJ4GJ;AI1GE;EACE,yBAAA;AJ4GJ;AIjHE;EACE,gBAAA;EACA,cAAA;AJmHJ;AIjHE;EACE,yBAAA;AJmHJ;AIxHE;EACE,gBAAA;EACA,cAAA;AJ0HJ;AIxHE;EACE,yBAAA;AJ0HJ;AI/HE;EACE,gBAAA;EACA,cAAA;AJiIJ;AI/HE;EACE,yBAAA;AJiIJ;AItIE;EACE,gBAAA;EACA,cAAA;AJwIJ;AItIE;EACE,yBAAA;AJwIJ;AI7IE;EACE,gBAAA;EACA,cAAA;AJ+IJ;AI7IE;EACE,yBAAA;AJ+IJ;AIpJE;EACE,gBAAA;EACA,cAAA;AJsJJ;AIpJE;EACE,yBAAA;AJsJJ;AI3JE;EACE,gBAAA;EACA,cAAA;AJ6JJ;AI3JE;EACE,yBAAA;AJ6JJ;AIlKE;EACE,gBAAA;EACA,cAAA;AJoKJ;AIlKE;EACE,yBAAA;AJoKJ;AIzKE;EACE,gBAAA;EACA,cAAA;AJ2KJ;AIzKE;EACE,yBAAA;AJ2KJ;AIhLE;EACE,gBAAA;EACA,cAAA;AJkLJ;AIhLE;EACE,yBAAA;AJkLJ;AIvLE;EACE,gBAAA;EACA,cAAA;AJyLJ;AIvLE;EACE,yBAAA;AJyLJ;AI9LE;EACE,gBAAA;EACA,cAAA;AJgMJ;AI9LE;EACE,yBAAA;AJgMJ;AIrME;EACE,gBAAA;EACA,cAAA;AJuMJ;AIrME;EACE,yBAAA;AJuMJ;AI5ME;EACE,gBAAA;EACA,cAAA;AJ8MJ;AI5ME;EACE,yBAAA;AJ8MJ;AInNE;EACE,gBAAA;EACA,cAAA;AJqNJ;AInNE;EACE,yBAAA;AJqNJ;AI1NE;EACE,gBAAA;EACA,cAAA;AJ4NJ;AI1NE;EACE,yBAAA;AJ4NJ;AIjOE;EACE,gBAAA;EACA,cAAA;AJmOJ;AIjOE;EACE,yBAAA;AJmOJ;AIxOE;EACE,gBAAA;EACA,cAAA;AJ0OJ;AIxOE;EACE,yBAAA;AJ0OJ;AI/OE;EACE,gBAAA;EACA,cAAA;AJiPJ;AI/OE;EACE,yBAAA;AJiPJ;AItPE;EACE,gBAAA;EACA,cAAA;AJwPJ;AItPE;EACE,yBAAA;AJwPJ;AI7PE;EACE,gBAAA;EACA,cAAA;AJ+PJ;AI7PE;EACE,yBAAA;AJ+PJ;AIpQE;EACE,gBAAA;EACA,cAAA;AJsQJ;AIpQE;EACE,yBAAA;AJsQJ;AI3QE;EACE,gBAAA;EACA,cAAA;AJ6QJ;AI3QE;EACE,yBAAA;AJ6QJ;AIlRE;EACE,gBAAA;EACA,cAAA;AJoRJ;AIlRE;EACE,yBAAA;AJoRJ;AIzRE;EACE,gBAAA;EACA,cAAA;AJ2RJ;AIzRE;EACE,yBAAA;AJ2RJ;AIhSE;EACE,gBAAA;EACA,cAAA;AJkSJ;AIhSE;EACE,yBAAA;AJkSJ;AIvSE;EACE,gBAAA;EACA,cAAA;AJySJ;AIvSE;EACE,yBAAA;AJySJ;AI9SE;EACE,gBAAA;EACA,cAAA;AJgTJ;AI9SE;EACE,yBAAA;AJgTJ;AIrTE;EACE,gBAAA;EACA,cAAA;AJuTJ;AIrTE;EACE,yBAAA;AJuTJ;AI5TE;EACE,gBAAA;EACA,cAAA;AJ8TJ;AI5TE;EACE,yBAAA;AJ8TJ;AInUE;EACE,gBAAA;EACA,cAAA;AJqUJ;AInUE;EACE,yBAAA;AJqUJ;AI1UE;EACE,gBAAA;EACA,cAAA;AJ4UJ;AI1UE;EACE,yBAAA;AJ4UJ;AA10FA;EAEI,qBAAA;AA20FJ;AA70FA;EAWI,gCAAA;EACA,6BAAA;EACA,8BAAA;EACA,iCAAA;EAKA,2CAAA;EACA,2CAAA;EACA,2CAAA;EACA,0CAAA;EAcA,UAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EAEA,0DAAA;EAKA,mCAAA;AA+yFJ;AAr0FI;EACE,gCAAA;EACA,gCAAA;EACA,iCAAA;EACA,iCAAA;EACA,8CAAA;EACA,8CAAA;EACA,8CAAA;EACA,6CAAA;AAu0FN;AAvzFI;EACE,WAAA;AAyzFN;AA32FA;EAsDM,gCAAA;EACA,iCAAA;EACA,8BAAA;AAwzFN;AAh3FA;EA4DM,gCAAA;EACA,iCAAA;EACA,sCAAA;EACA,oBAAA;AAuzFN;AAnzFE;EACE;IACE,UAAA;EAqzFJ;EAnzFE;IACE,UAAA;EAqzFJ;AACF;AAlzFE;EACE;IACE,UAAA;EAozFJ;EAlzFE;IACE,UAAA;IACA,SAAA;IACA,aAAA;IACA,gBAAA;EAozFJ;AACF",sourcesContent:[`@import '../../../resources/lato';
@import '../../../resources/slack-icons-font';

.Notifications2018 {
  a {
    text-decoration: none;
  }

  .NotificationHost {
    // This file uses a pared-down version of Slack Kit's color variable system.
    // Please reach out in #devel-slack-kit if you have any questions about how
    // to use these colors!

    // Light Mode variable names
    --sk_primary_foreground: #1d1c1d; // rgb(29, 28, 29)
    --sk_primary_background: #fff;
    --sk_inverted_foreground: #fff;
    --sk_inverted_background: #1d1c1d;
    // These are fades of the primary color at four stops: 4%, 13%, 50% and 70%.
    // min, low, high, and max describe how much contrast the color should create
    // against the background, e.g. _max would create the darkest gray in light
    // mode and the lightest gray in dark mode.
    --sk_foreground_min: rgba(29, 28, 29, 0.04);
    --sk_foreground_low: rgba(29, 28, 29, 0.13);
    --sk_foreground_high: rgba(29, 28, 29, 0.5);
    --sk_foreground_max: rgba(29, 28, 29, 0.7);

    // and their Dark Mode counterparts
    &.NotificationHost--dark {
      --sk_primary_foreground: #e8e8e8; // rgb(232, 232, 232)
      --sk_primary_background: #1a1d21;
      --sk_inverted_foreground: #1a1d21;
      --sk_inverted_background: #e8e8e8;
      --sk_foreground_min: rgba(232, 232, 232, 0.04);
      --sk_foreground_low: rgba(232, 232, 232, 0.13);
      --sk_foreground_high: rgba(232, 232, 232, 0.5);
      --sk_foreground_max: rgba(232, 232, 232, 0.7);
    }

    width: 98%;
    height: 100%;
    float: right;
    display: flex;
    align-items: flex-end;

    font-family:
      Slack-Lato,
      Meiryo,
      Lucida Grande,
      sans-serif;
    color: var(--sk_primary_foreground);

    &-list {
      width: 100%;
    }

    .spin-enter {
      -webkit-animation-duration: 0.2s;
      -webkit-animation-fill-mode: both;
      -webkit-animation-name: fadeIn;
    }

    .spin-leave {
      -webkit-animation-duration: 0.2s;
      -webkit-animation-fill-mode: both;
      -webkit-animation-name: collapseHeight;
      align-self: flex-end;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes collapseHeight {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      height: 0;
      margin-top: 0;
      margin-bottom: 0;
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
`],sourceRoot:""}]);const Te=le},4183(v,y,u){"use strict";u.d(y,{A:()=>k});var w=u(2845),T=u.n(w),S=u(8843),I=u.n(S),O=I()(T());O.push([v.id,`.Notifications2018 .Team {
  background-color: var(--sk_primary_background);
  border-radius: 4px;
  box-shadow: 0px 1px 4px rgba(44, 45, 48, 0.3);
  margin: 10px;
}
.Notifications2018 .Team a,
.Notifications2018 .Team a:active,
.Notifications2018 .Team a:visited,
.Notifications2018 .Team a:focus {
  color: unset;
}
.Notifications2018 .Team > header {
  border-radius: 4px 4px 0 0;
  margin: 0;
  height: 40px;
  position: relative;
}
.Notifications2018 .Team > header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  position: relative;
  display: inline-block;
}
.Notifications2018 .Team > header i {
  margin: 1px 9px 0 0;
}
.Notifications2018 .Team > header a.OpenTeam,
.Notifications2018 .Team > header a.Close {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.Notifications2018 .Team > header a.OpenTeam {
  margin-left: 10px;
  display: inline-block;
  box-sizing: border-box;
  width: calc(100% - 50px);
}
.Notifications2018 .Team > header a.OpenTeam i {
  padding-top: 5px;
  float: left;
}
.Notifications2018 .Team > header a.OpenTeam h3 {
  width: calc(100% - 30px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.Notifications2018 .Team > header a.Close {
  right: 5px;
  box-sizing: border-box;
  float: right;
  display: inline;
}
.Notifications2018 .Team > header > a:hover {
  box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/team.less"],names:[],mappings:"AAAA;EAEI,8CAAA;EACA,kBAAA;EACA,6CAAA;EACA,YAAA;AAAJ;AALA;;;;EAWM,YAAA;AAAN;AAGI;EACE,0BAAA;EACA,SAAA;EACA,YAAA;EACA,kBAAA;AADN;AAHI;EAOI,SAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;AADR;AAVI;EAeI,mBAAA;AAFR;AAbI;;EAoBI,kBAAA;EACA,QAAA;EACA,2BAAA;AAHR;AAnBI;EA0BI,iBAAA;EACA,qBAAA;EACA,sBAAA;EACA,wBAAA;AAJR;AAzBI;EAgCM,gBAAA;EACA,WAAA;AAJV;AA7BI;EAqCM,wBAAA;EACA,gBAAA;EACA,uBAAA;EACA,mBAAA;AALV;AAnCI;EA6CI,UAAA;EACA,sBAAA;EACA,YAAA;EACA,eAAA;AAPR;AAUM;EACE,0DAAA;AARR",sourcesContent:[`.Notifications2018 {
  .Team {
    background-color: var(--sk_primary_background);
    border-radius: 4px;
    box-shadow: 0px 1px 4px rgba(44, 45, 48, 0.3);
    margin: 10px;

    a,
    a:active,
    a:visited,
    a:focus {
      color: unset;
    }

    & > header {
      border-radius: 4px 4px 0 0;
      margin: 0;
      height: 40px;
      position: relative;

      h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 800;
        position: relative;
        display: inline-block;
      }

      i {
        margin: 1px 9px 0 0;
      }

      a.OpenTeam,
      a.Close {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      a.OpenTeam {
        margin-left: 10px;
        display: inline-block;
        box-sizing: border-box;
        width: ~'calc(100% - 50px)';

        i {
          padding-top: 5px;
          float: left;
        }

        h3 {
          width: ~'calc(100% - 30px)';
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }

      a.Close {
        right: 5px;
        box-sizing: border-box;
        float: right;
        display: inline;
      }

      & > a:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
      }
    }
  }
}
`],sourceRoot:""}]);const k=O},8843(v){"use strict";v.exports=function(y){var u=[];return u.toString=function(){return this.map(function(T){var S="",I=typeof T[5]<"u";return T[4]&&(S+="@supports (".concat(T[4],") {")),T[2]&&(S+="@media ".concat(T[2]," {")),I&&(S+="@layer".concat(T[5].length>0?" ".concat(T[5]):""," {")),S+=y(T),I&&(S+="}"),T[2]&&(S+="}"),T[4]&&(S+="}"),S}).join("")},u.i=function(T,S,I,O,k){typeof T=="string"&&(T=[[null,T,void 0]]);var H={};if(I)for(var M=0;M<this.length;M++){var K=this[M][0];K!=null&&(H[K]=!0)}for(var U=0;U<T.length;U++){var L=[].concat(T[U]);I&&H[L[0]]||(typeof k<"u"&&(typeof L[5]>"u"||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=k),S&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=S),O&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=O):L[4]="".concat(O)),u.push(L))}},u}},5858(v){"use strict";v.exports=function(y,u){return u||(u={}),y&&(y=String(y.__esModule?y.default:y),/^['"].*['"]$/.test(y)&&(y=y.slice(1,-1)),u.hash&&(y+=u.hash),/["'() \t\n]|(%20)/.test(y)||u.needQuotes?'"'.concat(y.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):y)}},2845(v){"use strict";v.exports=function(y){var u=y[1],w=y[3];if(!w)return u;if(typeof btoa=="function"){var T=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(T),I="/*# ".concat(S," */");return[u].concat([I]).join(`
`)}return[u].join(`
`)}},3869(v,y,u){"use strict";var w=u(4717),T={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},I={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},O={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},k={};k[w.ForwardRef]=I,k[w.Memo]=O;function H(Y){return w.isMemo(Y)?O:k[Y.$$typeof]||T}var M=Object.defineProperty,K=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,L=Object.getOwnPropertyDescriptor,W=Object.getPrototypeOf,te=Object.prototype;function q(Y,le,ie){if(typeof le!="string"){if(te){var Ae=W(le);Ae&&Ae!==te&&q(Y,Ae,ie)}var X=K(le);U&&(X=X.concat(U(le)));for(var ne=H(Y),D=H(le),J=0;J<X.length;++J){var Be=X[J];if(!S[Be]&&!(ie&&ie[Be])&&!(D&&D[Be])&&!(ne&&ne[Be])){var mn=L(le,Be);try{M(Y,Be,mn)}catch{}}}}return Y}v.exports=q},5889(v,y){"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=typeof Symbol=="function"&&Symbol.for,w=u?Symbol.for("react.element"):60103,T=u?Symbol.for("react.portal"):60106,S=u?Symbol.for("react.fragment"):60107,I=u?Symbol.for("react.strict_mode"):60108,O=u?Symbol.for("react.profiler"):60114,k=u?Symbol.for("react.provider"):60109,H=u?Symbol.for("react.context"):60110,M=u?Symbol.for("react.async_mode"):60111,K=u?Symbol.for("react.concurrent_mode"):60111,U=u?Symbol.for("react.forward_ref"):60112,L=u?Symbol.for("react.suspense"):60113,W=u?Symbol.for("react.suspense_list"):60120,te=u?Symbol.for("react.memo"):60115,q=u?Symbol.for("react.lazy"):60116,Y=u?Symbol.for("react.block"):60121,le=u?Symbol.for("react.fundamental"):60117,ie=u?Symbol.for("react.responder"):60118,Ae=u?Symbol.for("react.scope"):60119;function X(D){if(typeof D=="object"&&D!==null){var J=D.$$typeof;switch(J){case w:switch(D=D.type,D){case M:case K:case S:case O:case I:case L:return D;default:switch(D=D&&D.$$typeof,D){case H:case U:case q:case te:case k:return D;default:return J}}case T:return J}}}function ne(D){return X(D)===K}y.AsyncMode=M,y.ConcurrentMode=K,y.ContextConsumer=H,y.ContextProvider=k,y.Element=w,y.ForwardRef=U,y.Fragment=S,y.Lazy=q,y.Memo=te,y.Portal=T,y.Profiler=O,y.StrictMode=I,y.Suspense=L,y.isAsyncMode=function(D){return ne(D)||X(D)===M},y.isConcurrentMode=ne,y.isContextConsumer=function(D){return X(D)===H},y.isContextProvider=function(D){return X(D)===k},y.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===w},y.isForwardRef=function(D){return X(D)===U},y.isFragment=function(D){return X(D)===S},y.isLazy=function(D){return X(D)===q},y.isMemo=function(D){return X(D)===te},y.isPortal=function(D){return X(D)===T},y.isProfiler=function(D){return X(D)===O},y.isStrictMode=function(D){return X(D)===I},y.isSuspense=function(D){return X(D)===L},y.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===S||D===K||D===O||D===I||D===L||D===W||typeof D=="object"&&D!==null&&(D.$$typeof===q||D.$$typeof===te||D.$$typeof===k||D.$$typeof===H||D.$$typeof===U||D.$$typeof===le||D.$$typeof===ie||D.$$typeof===Ae||D.$$typeof===Y)},y.typeOf=X},4717(v,y,u){"use strict";v.exports=u(5889)},3475(v,y,u){"use strict";var w=u(9572);function T(){}function S(){}S.resetWarningCache=T,v.exports=function(){function I(H,M,K,U,L,W){if(W!==w){var te=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw te.name="Invariant Violation",te}}I.isRequired=I;function O(){return I}var k={array:I,bool:I,func:I,number:I,object:I,string:I,symbol:I,any:I,arrayOf:O,element:I,elementType:I,instanceOf:O,node:I,objectOf:O,oneOf:O,oneOfType:O,shape:O,exact:O,checkPropTypes:S,resetWarningCache:T};return k.PropTypes=k,k}},4031(v,y,u){if(0)var w,T;else v.exports=u(3475)()},9572(v){"use strict";var y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";v.exports=y},6988(v,y){"use strict";var u;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=typeof Symbol=="function"&&Symbol.for,T=w?Symbol.for("react.element"):60103,S=w?Symbol.for("react.portal"):60106,I=w?Symbol.for("react.fragment"):60107,O=w?Symbol.for("react.strict_mode"):60108,k=w?Symbol.for("react.profiler"):60114,H=w?Symbol.for("react.provider"):60109,M=w?Symbol.for("react.context"):60110,K=w?Symbol.for("react.async_mode"):60111,U=w?Symbol.for("react.concurrent_mode"):60111,L=w?Symbol.for("react.forward_ref"):60112,W=w?Symbol.for("react.suspense"):60113,te=w?Symbol.for("react.suspense_list"):60120,q=w?Symbol.for("react.memo"):60115,Y=w?Symbol.for("react.lazy"):60116,le=w?Symbol.for("react.block"):60121,ie=w?Symbol.for("react.fundamental"):60117,Ae=w?Symbol.for("react.responder"):60118,X=w?Symbol.for("react.scope"):60119;function ne(J){if(typeof J=="object"&&J!==null){var Be=J.$$typeof;switch(Be){case T:switch(J=J.type,J){case K:case U:case I:case k:case O:case W:return J;default:switch(J=J&&J.$$typeof,J){case M:case L:case Y:case q:case H:return J;default:return Be}}case S:return Be}}}function D(J){return ne(J)===U}u=K,u=U,u=M,u=H,u=T,u=L,u=I,u=Y,u=q,u=S,u=k,u=O,u=W,u=function(J){return D(J)||ne(J)===K},u=D,u=function(J){return ne(J)===M},u=function(J){return ne(J)===H},u=function(J){return typeof J=="object"&&J!==null&&J.$$typeof===T},u=function(J){return ne(J)===L},u=function(J){return ne(J)===I},u=function(J){return ne(J)===Y},u=function(J){return ne(J)===q},u=function(J){return ne(J)===S},u=function(J){return ne(J)===k},u=function(J){return ne(J)===O},u=function(J){return ne(J)===W},u=function(J){return typeof J=="string"||typeof J=="function"||J===I||J===U||J===k||J===O||J===W||J===te||typeof J=="object"&&J!==null&&(J.$$typeof===Y||J.$$typeof===q||J.$$typeof===H||J.$$typeof===M||J.$$typeof===L||J.$$typeof===ie||J.$$typeof===Ae||J.$$typeof===X||J.$$typeof===le)},u=ne},5376(v,y,u){"use strict";u(6988)},6393(v,y,u){var w=u(4453),T=w.Symbol;v.exports=T},4224(v,y,u){var w=u(6393),T=u(4875),S=u(9662),I="[object Null]",O="[object Undefined]",k=w?w.toStringTag:void 0;function H(M){return M==null?M===void 0?O:I:k&&k in Object(M)?T(M):S(M)}v.exports=H},4424(v,y,u){var w=u(6304),T=/^\s+/;function S(I){return I&&I.slice(0,w(I)+1).replace(T,"")}v.exports=S},2432(v){var y=typeof global=="object"&&global&&global.Object===Object&&global;v.exports=y},4875(v,y,u){var w=u(6393),T=Object.prototype,S=T.hasOwnProperty,I=T.toString,O=w?w.toStringTag:void 0;function k(H){var M=S.call(H,O),K=H[O];try{H[O]=void 0;var U=!0}catch{}var L=I.call(H);return U&&(M?H[O]=K:delete H[O]),L}v.exports=k},9662(v){var y=Object.prototype,u=y.toString;function w(T){return u.call(T)}v.exports=w},4453(v,y,u){var w=u(2432),T=typeof self=="object"&&self&&self.Object===Object&&self,S=w||T||Function("return this")();v.exports=S},6304(v){var y=/\s/;function u(w){for(var T=w.length;T--&&y.test(w.charAt(T)););return T}v.exports=u},1397(v,y,u){var w=u(6085),T=u(8820),S=u(7766),I="Expected a function",O=Math.max,k=Math.min;function H(M,K,U){var L,W,te,q,Y,le,ie=0,Ae=!1,X=!1,ne=!0;if(typeof M!="function")throw new TypeError(I);K=S(K)||0,w(U)&&(Ae=!!U.leading,X="maxWait"in U,te=X?O(S(U.maxWait)||0,K):te,ne="trailing"in U?!!U.trailing:ne);function D(Ee){var ze=L,tn=W;return L=W=void 0,ie=Ee,q=M.apply(tn,ze),q}function J(Ee){return ie=Ee,Y=setTimeout(Ve,K),Ae?D(Ee):q}function Be(Ee){var ze=Ee-le,tn=Ee-ie,Lt=K-ze;return X?k(Lt,te-tn):Lt}function mn(Ee){var ze=Ee-le,tn=Ee-ie;return le===void 0||ze>=K||ze<0||X&&tn>=te}function Ve(){var Ee=T();if(mn(Ee))return Te(Ee);Y=setTimeout(Ve,Be(Ee))}function Te(Ee){return Y=void 0,ne&&L?D(Ee):(L=W=void 0,q)}function Ui(){Y!==void 0&&clearTimeout(Y),ie=0,L=le=W=Y=void 0}function Ro(){return Y===void 0?q:Te(T())}function Bn(){var Ee=T(),ze=mn(Ee);if(L=arguments,W=this,le=Ee,ze){if(Y===void 0)return J(le);if(X)return clearTimeout(Y),Y=setTimeout(Ve,K),D(le)}return Y===void 0&&(Y=setTimeout(Ve,K)),q}return Bn.cancel=Ui,Bn.flush=Ro,Bn}v.exports=H},6085(v){function y(u){var w=typeof u;return u!=null&&(w=="object"||w=="function")}v.exports=y},1154(v){function y(u){return u!=null&&typeof u=="object"}v.exports=y},7858(v,y,u){var w=u(4224),T=u(1154),S="[object Symbol]";function I(O){return typeof O=="symbol"||T(O)&&w(O)==S}v.exports=I},8820(v,y,u){var w=u(4453),T=function(){return w.Date.now()};v.exports=T},5726(v,y,u){var w=u(1397),T=u(6085),S="Expected a function";function I(O,k,H){var M=!0,K=!0;if(typeof O!="function")throw new TypeError(S);return T(H)&&(M="leading"in H?!!H.leading:M,K="trailing"in H?!!H.trailing:K),w(O,k,{leading:M,maxWait:k,trailing:K})}v.exports=I},7766(v,y,u){var w=u(4424),T=u(6085),S=u(7858),I=NaN,O=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,H=/^0o[0-7]+$/i,M=parseInt;function K(U){if(typeof U=="number")return U;if(S(U))return I;if(T(U)){var L=typeof U.valueOf=="function"?U.valueOf():U;U=T(L)?L+"":L}if(typeof U!="string")return U===0?U:+U;U=w(U);var W=k.test(U);return W||H.test(U)?M(U.slice(2),W?2:8):O.test(U)?I:+U}v.exports=K},403(v){"use strict";var y=[];function u(S){for(var I=-1,O=0;O<y.length;O++)if(y[O].identifier===S){I=O;break}return I}function w(S,I){for(var O={},k=[],H=0;H<S.length;H++){var M=S[H],K=I.base?M[0]+I.base:M[0],U=O[K]||0,L="".concat(K," ").concat(U);O[K]=U+1;var W=u(L),te={css:M[1],media:M[2],sourceMap:M[3],supports:M[4],layer:M[5]};if(W!==-1)y[W].references++,y[W].updater(te);else{var q=T(te,I);I.byIndex=H,y.splice(H,0,{identifier:L,updater:q,references:1})}k.push(L)}return k}function T(S,I){var O=I.domAPI(I);O.update(S);var k=function(M){if(M){if(M.css===S.css&&M.media===S.media&&M.sourceMap===S.sourceMap&&M.supports===S.supports&&M.layer===S.layer)return;O.update(S=M)}else O.remove()};return k}v.exports=function(S,I){I=I||{},S=S||[];var O=w(S,I);return function(H){H=H||[];for(var M=0;M<O.length;M++){var K=O[M],U=u(K);y[U].references--}for(var L=w(H,I),W=0;W<O.length;W++){var te=O[W],q=u(te);y[q].references===0&&(y[q].updater(),y.splice(q,1))}O=L}}},7380(v){"use strict";var y={};function u(T){if(typeof y[T]>"u"){var S=document.querySelector(T);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch{S=null}y[T]=S}return y[T]}function w(T,S){var I=u(T);if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");I.appendChild(S)}v.exports=w},7031(v){"use strict";function y(u){var w=document.createElement("style");return u.setAttributes(w,u.attributes),u.insert(w,u.options),w}v.exports=y},211(v,y,u){"use strict";function w(T){var S=u.nc;S&&T.setAttribute("nonce",S)}v.exports=w},2792(v){"use strict";function y(T,S,I){var O="";I.supports&&(O+="@supports (".concat(I.supports,") {")),I.media&&(O+="@media ".concat(I.media," {"));var k=typeof I.layer<"u";k&&(O+="@layer".concat(I.layer.length>0?" ".concat(I.layer):""," {")),O+=I.css,k&&(O+="}"),I.media&&(O+="}"),I.supports&&(O+="}");var H=I.sourceMap;H&&typeof btoa<"u"&&(O+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(H))))," */")),S.styleTagTransform(O,T,S.options)}function u(T){if(T.parentNode===null)return!1;T.parentNode.removeChild(T)}function w(T){var S=T.insertStyleElement(T);return{update:function(O){y(S,T,O)},remove:function(){u(S)}}}v.exports=w},1684(v){"use strict";function y(u,w){if(w.styleSheet)w.styleSheet.cssText=u;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(u))}}v.exports=y},6723(v,y,u){"use strict";v.exports=u.p+"slack-icons-v25aaab12924ee17421031.woff2"},9138(v,y,u){"use strict";v.exports=u.p+"lato-blackd3e44e6115ad32c37176.woff2"},4392(v,y,u){"use strict";v.exports=u.p+"lato-bold31816c24a18fbc659282.woff2"},7(v,y,u){"use strict";v.exports=u.p+"lato-italic-black62bc5da14d9c6ff41e5f.woff2"},5959(v,y,u){"use strict";v.exports=u.p+"lato-italic-bold365ea5a303e2259ca5ab.woff2"},5906(v,y,u){"use strict";v.exports=u.p+"lato-italic-light074c7fc38126bb94664d.woff2"},9269(v,y,u){"use strict";v.exports=u.p+"lato-italic4484c4211566a05bd71b.woff2"},5539(v,y,u){"use strict";v.exports=u.p+"lato-light2815bd9ba07f2cbe781a.woff2"},4603(v,y,u){"use strict";v.exports=u.p+"lato-regularf1aa7a0753149183efa2.woff2"}},$e={};function z(v){var y=$e[v];if(y!==void 0)return y.exports;var u=$e[v]={id:v,exports:{}};return nn[v](u,u.exports,z),u.exports}z.m=nn,z.n=v=>{var y=v&&v.__esModule?()=>v.default:()=>v;return z.d(y,{a:y}),y},z.d=(v,y)=>{for(var u in y)z.o(y,u)&&!z.o(v,u)&&Object.defineProperty(v,u,{enumerable:!0,get:y[u]})},z.o=(v,y)=>Object.prototype.hasOwnProperty.call(v,y),z.r=v=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(v,"__esModule",{value:!0})},z.p="./",(()=>{z.b=typeof document<"u"&&document.baseURI||self.location.href;var v={893:0}})(),z.nc=void 0;var Li={};(()=>{"use strict";z.r(Li),z.d(Li,{NotificationHost:()=>wA});var v={};z.r(v),z.d(v,{uA:()=>Ae,FK:()=>ie,Ob:()=>Mc,q6:()=>Lc,n:()=>q,_3:()=>le,Qv:()=>Ki,fF:()=>u,XX:()=>ot,v2:()=>Te});var y,u,w,T,S,I,O,k,H,M={},K=[],U=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,L=Array.isArray;function W(e,n){for(var t in n)e[t]=n[t];return e}function te(e){var n=e.parentNode;n&&n.removeChild(e)}function q(e,n,t){var o,i,r,c={};for(r in n)r=="key"?o=n[r]:r=="ref"?i=n[r]:c[r]=n[r];if(arguments.length>2&&(c.children=arguments.length>3?y.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return Y(e,c,o,i,null)}function Y(e,n,t,o,i){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++w,__i:-1,__u:0};return i==null&&u.vnode!=null&&u.vnode(r),r}function le(){return{current:null}}function ie(e){return e.children}function Ae(e,n){this.props=e,this.context=n}function X(e,n){if(n==null)return e.__?X(e.__,e.__i+1):null;for(var t;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?X(e):null}function ne(e){var n,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if((t=e.__k[n])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return ne(e)}}function D(e){(!e.__d&&(e.__d=!0)&&S.push(e)&&!J.__r++||I!==u.debounceRendering)&&((I=u.debounceRendering)||O)(J)}function J(){var e,n,t,o,i,r,c,a,l;for(S.sort(k);e=S.shift();)e.__d&&(n=S.length,o=void 0,r=(i=(t=e).__v).__e,a=[],l=[],(c=t.__P)&&((o=W({},i)).__v=i.__v+1,u.vnode&&u.vnode(o),tn(c,o,i,t.__n,c.ownerSVGElement!==void 0,32&i.__u?[r]:null,a,r??X(i),!!(32&i.__u),l),o.__.__k[o.__i]=o,Lt(a,o,l),o.__e!=r&&ne(o)),S.length>n&&S.sort(k));J.__r=0}function Be(e,n,t,o,i,r,c,a,l,s,A){var f,E,d,p,g,b=o&&o.__k||K,h=n.length;for(t.__d=l,mn(t,n,b),l=t.__d,f=0;f<h;f++)(d=t.__k[f])!=null&&typeof d!="boolean"&&typeof d!="function"&&(E=d.__i===-1?M:b[d.__i]||M,d.__i=f,tn(e,d,E,i,r,c,a,l,s,A),p=d.__e,d.ref&&E.ref!=d.ref&&(E.ref&&ji(E.ref,null,d),A.push(d.ref,d.__c||p,d)),g==null&&p!=null&&(g=p),65536&d.__u||E.__k===d.__k?l=Ve(d,l,e):typeof d.type=="function"&&d.__d!==void 0?l=d.__d:p&&(l=p.nextSibling),d.__d=void 0,d.__u&=-196609);t.__d=l,t.__e=g}function mn(e,n,t){var o,i,r,c,a,l=n.length,s=t.length,A=s,f=0;for(e.__k=[],o=0;o<l;o++)(i=e.__k[o]=(i=n[o])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?Y(null,i,null,null,i):L(i)?Y(ie,{children:i},null,null,null):i.__b>0?Y(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,a=Ui(i,t,c=o+f,A),i.__i=a,r=null,a!==-1&&(A--,(r=t[a])&&(r.__u|=131072)),r==null||r.__v===null?(a==-1&&f--,typeof i.type!="function"&&(i.__u|=65536)):a!==c&&(a===c+1?f++:a>c?A>l-c?f+=a-c:f--:f=a<c&&a==c-1?a-c:0,a!==o+f&&(i.__u|=65536))):(r=t[o])&&r.key==null&&r.__e&&(r.__e==e.__d&&(e.__d=X(r)),Hi(r,r,!1),t[o]=null,A--);if(A)for(o=0;o<s;o++)(r=t[o])!=null&&!(131072&r.__u)&&(r.__e==e.__d&&(e.__d=X(r)),Hi(r,r))}function Ve(e,n,t){var o,i;if(typeof e.type=="function"){for(o=e.__k,i=0;o&&i<o.length;i++)o[i]&&(o[i].__=e,n=Ve(o[i],n,t));return n}return e.__e!=n&&(t.insertBefore(e.__e,n||null),n=e.__e),n&&n.nextSibling}function Te(e,n){return n=n||[],e==null||typeof e=="boolean"||(L(e)?e.some(function(t){Te(t,n)}):n.push(e)),n}function Ui(e,n,t,o){var i=e.key,r=e.type,c=t-1,a=t+1,l=n[t];if(l===null||l&&i==l.key&&r===l.type)return t;if(o>(l!=null&&!(131072&l.__u)?1:0))for(;c>=0||a<n.length;){if(c>=0){if((l=n[c])&&!(131072&l.__u)&&i==l.key&&r===l.type)return c;c--}if(a<n.length){if((l=n[a])&&!(131072&l.__u)&&i==l.key&&r===l.type)return a;a++}}return-1}function Ro(e,n,t){n[0]==="-"?e.setProperty(n,t??""):e[n]=t==null?"":typeof t!="number"||U.test(n)?t:t+"px"}function Bn(e,n,t,o,i){var r;e:if(n==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||Ro(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||Ro(e.style,n,t[n])}else if(n[0]==="o"&&n[1]==="n")r=n!==(n=n.replace(/(PointerCapture)$|Capture$/,"$1")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+r]=t,t?o?t.u=o.u:(t.u=Date.now(),e.addEventListener(n,r?ze:Ee,r)):e.removeEventListener(n,r?ze:Ee,r);else{if(i)n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!=="width"&&n!=="height"&&n!=="href"&&n!=="list"&&n!=="form"&&n!=="tabIndex"&&n!=="download"&&n!=="rowSpan"&&n!=="colSpan"&&n!=="role"&&n in e)try{e[n]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&n[4]!=="-"?e.removeAttribute(n):e.setAttribute(n,t))}}function Ee(e){var n=this.l[e.type+!1];if(e.t){if(e.t<=n.u)return}else e.t=Date.now();return n(u.event?u.event(e):e)}function ze(e){return this.l[e.type+!0](u.event?u.event(e):e)}function tn(e,n,t,o,i,r,c,a,l,s){var A,f,E,d,p,g,b,h,m,B,C,x,P,R,ce,ee=n.type;if(n.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),r=[a=n.__e=t.__e]),(A=u.__b)&&A(n);e:if(typeof ee=="function")try{if(h=n.props,m=(A=ee.contextType)&&o[A.__c],B=A?m?m.props.value:A.__:o,t.__c?b=(f=n.__c=t.__c).__=f.__E:("prototype"in ee&&ee.prototype.render?n.__c=f=new ee(h,B):(n.__c=f=new Ae(h,B),f.constructor=ee,f.render=KA),m&&m.sub(f),f.props=h,f.state||(f.state={}),f.context=B,f.__n=o,E=f.__d=!0,f.__h=[],f._sb=[]),f.__s==null&&(f.__s=f.state),ee.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=W({},f.__s)),W(f.__s,ee.getDerivedStateFromProps(h,f.__s))),d=f.props,p=f.state,f.__v=n,E)ee.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(ee.getDerivedStateFromProps==null&&h!==d&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(h,B),!f.__e&&(f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(h,f.__s,B)===!1||n.__v===t.__v)){for(n.__v!==t.__v&&(f.props=h,f.state=f.__s,f.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(Z){Z&&(Z.__=n)}),C=0;C<f._sb.length;C++)f.__h.push(f._sb[C]);f._sb=[],f.__h.length&&c.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(h,f.__s,B),f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(d,p,g)})}if(f.context=B,f.props=h,f.__P=e,f.__e=!1,x=u.__r,P=0,"prototype"in ee&&ee.prototype.render){for(f.state=f.__s,f.__d=!1,x&&x(n),A=f.render(f.props,f.state,f.context),R=0;R<f._sb.length;R++)f.__h.push(f._sb[R]);f._sb=[]}else do f.__d=!1,x&&x(n),A=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++P<25);f.state=f.__s,f.getChildContext!=null&&(o=W(W({},o),f.getChildContext())),E||f.getSnapshotBeforeUpdate==null||(g=f.getSnapshotBeforeUpdate(d,p)),Be(e,L(ce=A!=null&&A.type===ie&&A.key==null?A.props.children:A)?ce:[ce],n,t,o,i,r,c,a,l,s),f.base=n.__e,n.__u&=-161,f.__h.length&&c.push(f),b&&(f.__E=f.__=null)}catch(Z){n.__v=null,l||r!=null?(n.__e=a,n.__u|=l?160:32,r[r.indexOf(a)]=null):(n.__e=t.__e,n.__k=t.__k),u.__e(Z,n,t)}else r==null&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=HA(t.__e,n,t,o,i,r,c,l,s);(A=u.diffed)&&A(n)}function Lt(e,n,t){n.__d=void 0;for(var o=0;o<t.length;o++)ji(t[o],t[++o],t[++o]);u.__c&&u.__c(n,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(r){r.call(i)})}catch(r){u.__e(r,i.__v)}})}function HA(e,n,t,o,i,r,c,a,l){var s,A,f,E,d,p,g,b=t.props,h=n.props,m=n.type;if(m==="svg"&&(i=!0),r!=null){for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!m&&(m?d.localName===m:d.nodeType===3)){e=d,r[s]=null;break}}if(e==null){if(m===null)return document.createTextNode(h);e=i?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,h.is&&h),r=null,a=!1}if(m===null)b===h||a&&e.data===h||(e.data=h);else{if(r=r&&y.call(e.childNodes),b=t.props||M,!a&&r!=null)for(b={},s=0;s<e.attributes.length;s++)b[(d=e.attributes[s]).name]=d.value;for(s in b)d=b[s],s=="children"||(s=="dangerouslySetInnerHTML"?f=d:s==="key"||s in h||Bn(e,s,null,d,i));for(s in h)d=h[s],s=="children"?E=d:s=="dangerouslySetInnerHTML"?A=d:s=="value"?p=d:s=="checked"?g=d:s==="key"||a&&typeof d!="function"||b[s]===d||Bn(e,s,d,b[s],i);if(A)a||f&&(A.__html===f.__html||A.__html===e.innerHTML)||(e.innerHTML=A.__html),n.__k=[];else if(f&&(e.innerHTML=""),Be(e,L(E)?E:[E],n,t,o,i&&m!=="foreignObject",r,c,r?r[0]:t.__k&&X(t,0),a,l),r!=null)for(s=r.length;s--;)r[s]!=null&&te(r[s]);a||(s="value",p!==void 0&&(p!==e[s]||m==="progress"&&!p||m==="option"&&p!==b[s])&&Bn(e,s,p,b[s],!1),s="checked",g!==void 0&&g!==e[s]&&Bn(e,s,g,b[s],!1))}return e}function ji(e,n,t){try{typeof e=="function"?e(n):e.current=n}catch(o){u.__e(o,t)}}function Hi(e,n,t){var o,i;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||ji(o,null,n)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){u.__e(r,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&Hi(o[i],n,t||typeof e.type!="function");t||e.__e==null||te(e.__e),e.__=e.__e=e.__d=void 0}function KA(e,n,t){return this.constructor(e,t)}function ot(e,n,t){var o,i,r,c;u.__&&u.__(e,n),i=(o=typeof t=="function")?null:t&&t.__k||n.__k,r=[],c=[],tn(n,e=(!o&&t||n).__k=q(ie,null,[e]),i||M,M,n.ownerSVGElement!==void 0,!o&&t?[t]:i?null:n.firstChild?y.call(n.childNodes):null,r,!o&&t?t:i?i.__e:n.firstChild,o,c),Lt(r,e,c)}function Ki(e,n){ot(e,n,Ki)}function Mc(e,n,t){var o,i,r,c,a=W({},e.props);for(r in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),n)r=="key"?o=n[r]:r=="ref"?i=n[r]:a[r]=n[r]===void 0&&c!==void 0?c[r]:n[r];return arguments.length>2&&(a.children=arguments.length>3?y.call(arguments,2):t),Y(e.type,a,o||e.key,i||e.ref,null)}function Lc(e,n){var t={__c:n="__cC"+H++,__:e,Consumer:function(o,i){return o.children(i)},Provider:function(o){var i,r;return this.getChildContext||(i=[],(r={})[n]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&i.some(function(a){a.__e=!0,D(a)})},this.sub=function(c){i.push(c);var a=c.componentWillUnmount;c.componentWillUnmount=function(){i.splice(i.indexOf(c),1),a&&a.call(c)}}),o.children}};return t.Provider.__=t.Consumer.contextType=t}y=K.slice,u={__e:function(e,n,t,o){for(var i,r,c;n=n.__;)if((i=n.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(e)),c=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),c=i.__d),c)return i.__E=i}catch(a){e=a}throw e}},w=0,T=function(e){return e!=null&&e.constructor==null},Ae.prototype.setState=function(e,n){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=W({},this.state),typeof e=="function"&&(e=e(W({},t),this.props)),e&&W(t,e),e!=null&&this.__v&&(n&&this._sb.push(n),D(this))},Ae.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),D(this))},Ae.prototype.render=ie,S=[],O=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k=function(e,n){return e.__v.__b-n.__v.__b},J.__r=0,H=0;var zA,Uc,WA=/["&<]/;function jc(e){if(e.length===0||WA.test(e)===!1)return e;for(var n=0,t=0,o="",i="";t<e.length;t++){switch(e.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}t!==n&&(o+=e.slice(n,t)),o+=i,n=t+1}return t!==n&&(o+=e.slice(n,t)),o}var GA=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,qA=0,$A=Array.isArray;function V(e,n,t,o,i,r){var c,a,l={};for(a in n)a=="ref"?c=n[a]:l[a]=n[a];var s={type:e,props:l,key:t,ref:c,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--qA,__i:-1,__u:0,__source:i,__self:r};if(typeof e=="function"&&(c=e.defaultProps))for(a in c)l[a]===void 0&&(l[a]=c[a]);return u.vnode&&u.vnode(s),s}function tv(e){var n=V(zA,{tpl:e,exprs:[].slice.call(arguments,1)});return n.key=n.__v,n}var Hc={},VA=/[A-Z]/g;function ov(e,n){if(Uc.attr){var t=Uc.attr(e,n);if(typeof t=="string")return t}if(e==="ref"||e==="key")return"";if(e==="style"&&typeof n=="object"){var o="";for(var i in n){var r=n[i];if(r!=null&&r!==""){var c=i[0]=="-"?i:Hc[i]||(Hc[i]=i.replace(VA,"-$&").toLowerCase()),a=";";typeof r!="number"||c.startsWith("--")||GA.test(c)||(a="px;"),o=o+c+":"+r+a}}return e+'="'+o+'"'}return n==null||n===!1||typeof n=="function"||typeof n=="object"?"":n===!0?e:e+'="'+jc(n)+'"'}function YA(e){if(e==null||typeof e=="boolean"||typeof e=="function")return null;if(typeof e=="object"){if(e.constructor===void 0)return e;if($A(e)){for(var n=0;n<e.length;n++)e[n]=YA(e[n]);return e}}return jc(""+e)}var XA=z(403),Ut=z.n(XA),QA=z(2792),jt=z.n(QA),ZA=z(7380),Ht=z.n(ZA),ef=z(211),Kt=z.n(ef),nf=z(7031),zt=z.n(nf),tf=z(1684),Wt=z.n(tf),xo=z(8972),it={};it.styleTagTransform=Wt(),it.setAttributes=Kt(),it.insert=Ht().bind(null,"head"),it.domAPI=jt(),it.insertStyleElement=zt();var iv=Ut()(xo.A,it);const rv=xo.A&&xo.A.locals?xo.A.locals:void 0;var of=(e,n,t)=>{if(n.length===1&&n[0]===t){let o=!1;try{const i={};e(i)===i&&(o=!0)}catch{}if(o){let i;try{throw new Error}catch(r){({stack:i}=r)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:i})}}},rf=(e,n,t)=>{const{memoize:o,memoizeOptions:i}=n,{inputSelectorResults:r,inputSelectorResultsCopy:c}=e,a=o(()=>({}),...i);if(!(a.apply(null,r)===a.apply(null,c))){let s;try{throw new Error}catch(A){({stack:s}=A)}console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:t,firstInputs:r,secondInputs:c,stack:s})}},Kc={inputStabilityCheck:"once",identityFunctionCheck:"once"},cv=e=>{Object.assign(Kc,e)},Po=null;function zc(e,n=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(n)}function cf(e,n=`expected an object, instead received ${typeof e}`){if(typeof e!="object")throw new TypeError(n)}function af(e,n="expected all items to be functions, instead received the following types: "){if(!e.every(t=>typeof t=="function")){const t=e.map(o=>typeof o=="function"?`function ${o.name||"unnamed"}()`:typeof o).join(", ");throw new TypeError(`${n}[${t}]`)}}var Wc=e=>Array.isArray(e)?e:[e];function lf(e){const n=Array.isArray(e[0])?e[0]:e;return af(n,"createSelector expects all input-selectors to be functions, but received the following types: "),n}function sf(e,n){const t=[],{length:o}=e;for(let i=0;i<o;i++)t.push(e[i].apply(null,n));return t}var av=(e,n)=>{const{identityFunctionCheck:t,inputStabilityCheck:o}={...Kc,...n};return{identityFunctionCheck:{shouldRun:t==="always"||t==="once"&&e,run:of},inputStabilityCheck:{shouldRun:o==="always"||o==="once"&&e,run:rf}}},Gc=0,Gt=null,zi=class{revision=Gc;_value;_lastValue;_isEqual=Wi;constructor(e,n=Wi){this._value=this._lastValue=e,this._isEqual=n}get value(){return Gt?.add(this),this._value}set value(e){this.value!==e&&(this._value=e,this.revision=++Gc)}};function Wi(e,n){return e===n}var Af=class{_cachedValue;_cachedRevision=-1;_deps=[];hits=0;fn;constructor(e){this.fn=e}clear(){this._cachedValue=void 0,this._cachedRevision=-1,this._deps=[],this.hits=0}get value(){if(this.revision>this._cachedRevision){const{fn:e}=this,n=new Set,t=Gt;Gt=n,this._cachedValue=e(),Gt=t,this.hits++,this._deps=Array.from(n),this._cachedRevision=this.revision}return Gt?.add(this),this._cachedValue}get revision(){return Math.max(...this._deps.map(e=>e.revision),0)}};function Gi(e){return e instanceof zi||console.warn("Not a valid cell! ",e),e.value}function ff(e,n){if(!(e instanceof zi))throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");e.value=e._lastValue=n}function uf(e,n=Wi){return new zi(e,n)}function Ef(e){return zc(e,"the first parameter to `createCache` must be a function"),new Af(e)}var df=(e,n)=>!1;function ko(){return uf(null,df)}function No(e,n){ff(e,n)}var qc=e=>{let n=e.collectionTag;n===null&&(n=e.collectionTag=ko()),Gi(n)},Mo=e=>{const n=e.collectionTag;n!==null&&No(n,null)},lv=Symbol(),$c=0,pf=Object.getPrototypeOf({}),_f=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy(this,qt);tag=ko();tags={};children={};collectionTag=null;id=$c++},qt={get(e,n){function t(){const{value:i}=e,r=Reflect.get(i,n);if(typeof n=="symbol"||n in pf)return r;if(typeof r=="object"&&r!==null){let c=e.children[n];return c===void 0&&(c=e.children[n]=Vc(r)),c.tag&&Gi(c.tag),c.proxy}else{let c=e.tags[n];return c===void 0&&(c=e.tags[n]=ko(),c.value=r),Gi(c),r}}return t()},ownKeys(e){return qc(e),Reflect.ownKeys(e.value)},getOwnPropertyDescriptor(e,n){return Reflect.getOwnPropertyDescriptor(e.value,n)},has(e,n){return Reflect.has(e.value,n)}},hf=class{constructor(e){this.value=e,this.value=e,this.tag.value=e}proxy=new Proxy([this],gf);tag=ko();tags={};children={};collectionTag=null;id=$c++},gf={get([e],n){return n==="length"&&qc(e),qt.get(e,n)},ownKeys([e]){return qt.ownKeys(e)},getOwnPropertyDescriptor([e],n){return qt.getOwnPropertyDescriptor(e,n)},has([e],n){return qt.has(e,n)}};function Vc(e){return Array.isArray(e)?new hf(e):new _f(e)}function Yc(e,n){const{value:t,tags:o,children:i}=e;if(e.value=n,Array.isArray(t)&&Array.isArray(n)&&t.length!==n.length)Mo(e);else if(t!==n){let r=0,c=0,a=!1;for(const s in t)r++;for(const s in n)if(c++,!(s in t)){a=!0;break}(a||r!==c)&&Mo(e)}for(const r in o){const c=t[r],a=n[r];c!==a&&(Mo(e),No(o[r],a)),typeof a=="object"&&a!==null&&delete o[r]}for(const r in i){const c=i[r],a=n[r];c.value!==a&&(typeof a=="object"&&a!==null?Yc(c,a):(Xc(c),delete i[r]))}}function Xc(e){e.tag&&No(e.tag,null),Mo(e);for(const n in e.tags)No(e.tags[n],null);for(const n in e.children)Xc(e.children[n])}function bf(e){let n;return{get(t){return n&&e(n.key,t)?n.value:Po},put(t,o){n={key:t,value:o}},getEntries(){return n?[n]:[]},clear(){n=void 0}}}function mf(e,n){let t=[];function o(a){const l=t.findIndex(s=>n(a,s.key));if(l>-1){const s=t[l];return l>0&&(t.splice(l,1),t.unshift(s)),s.value}return Po}function i(a,l){o(a)===Po&&(t.unshift({key:a,value:l}),t.length>e&&t.pop())}function r(){return t}function c(){t=[]}return{get:o,put:i,getEntries:r,clear:c}}var Qc=(e,n)=>e===n;function Zc(e){return function(t,o){if(t===null||o===null||t.length!==o.length)return!1;const{length:i}=t;for(let r=0;r<i;r++)if(!e(t[r],o[r]))return!1;return!0}}function sv(e,n){const t=typeof n=="object"?n:{equalityCheck:n},{equalityCheck:o=Qc,maxSize:i=1,resultEqualityCheck:r}=t,c=Zc(o);let a=0;const l=i<=1?bf(c):mf(i,c);function s(){let A=l.get(arguments);if(A===Po){if(A=e.apply(null,arguments),a++,r){const E=l.getEntries().find(d=>r(d.value,A));E&&(A=E.value,a!==0&&a--)}l.put(arguments,A)}return A}return s.clearCache=()=>{l.clear(),s.resetResultsCount()},s.resultsCount=()=>a,s.resetResultsCount=()=>{a=0},s}function Av(e){const n=Vc([]);let t=null;const o=Zc(Qc),i=Ef(()=>e.apply(null,n.proxy));function r(){return o(t,arguments)||(Yc(n,arguments),t=arguments),i.value}return r.clearCache=()=>i.clear(),r}var Bf=class{constructor(e){this.value=e}deref(){return this.value}},yf=typeof WeakRef<"u"?WeakRef:Bf,Cf=0,ea=1;function Lo(){return{s:Cf,v:void 0,o:null,p:null}}function na(e,n={}){let t=Lo();const{resultEqualityCheck:o}=n;let i,r=0;function c(){let a=t;const{length:l}=arguments;for(let f=0,E=l;f<E;f++){const d=arguments[f];if(typeof d=="function"||typeof d=="object"&&d!==null){let p=a.o;p===null&&(a.o=p=new WeakMap);const g=p.get(d);g===void 0?(a=Lo(),p.set(d,a)):a=g}else{let p=a.p;p===null&&(a.p=p=new Map);const g=p.get(d);g===void 0?(a=Lo(),p.set(d,a)):a=g}}const s=a;let A;if(a.s===ea)A=a.v;else if(A=e.apply(null,arguments),r++,o){const f=i?.deref?.()??i;f!=null&&o(f,A)&&(A=f,r!==0&&r--),i=typeof A=="object"&&A!==null||typeof A=="function"?new yf(A):A}return s.s=ea,s.v=A,A}return c.clearCache=()=>{t=Lo(),c.resetResultsCount()},c.resultsCount=()=>r,c.resetResultsCount=()=>{r=0},c}function vf(e,...n){const t=typeof e=="function"?{memoize:e,memoizeOptions:n}:e,o=(...i)=>{let r=0,c=0,a,l={},s=i.pop();typeof s=="object"&&(l=s,s=i.pop()),zc(s,`createSelector expects an output function after the inputs, but received: [${typeof s}]`);const A={...t,...l},{memoize:f,memoizeOptions:E=[],argsMemoize:d=na,argsMemoizeOptions:p=[],devModeChecks:g={}}=A,b=Wc(E),h=Wc(p),m=lf(i),B=f(function(){return r++,s.apply(null,arguments)},...b);let C=!0;const x=d(function(){c++;const R=sf(m,arguments);return a=B.apply(null,R),a},...h);return Object.assign(x,{resultFunc:s,memoizedResultFunc:B,dependencies:m,dependencyRecomputations:()=>c,resetDependencyRecomputations:()=>{c=0},lastResult:()=>a,recomputations:()=>r,resetRecomputations:()=>{r=0},memoize:f,argsMemoize:d})};return Object.assign(o,{withTypes:()=>o}),o}var ke=vf(na),If=Object.assign((e,n=ke)=>{cf(e,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`);const t=Object.keys(e),o=t.map(r=>e[r]);return n(o,(...r)=>r.reduce((c,a,l)=>(c[t[l]]=a,c),{}))},{withTypes:()=>If}),ta,wf,Sf,Tf,Of,Ff;function fv(e,n){for(const t of Object.values(Of))if(wf(e[t],n))return t;return null}const Jf=ke(e=>e,({zoomLevel:e,notificationZoomLevel:n})=>n&&n!==null?n:e),Df=ke(Jf,e=>1+e*.2),uv=({settings:e})=>e.releaseChannelOverride||Sf.PROD,Ev=({environment:e,settings:n})=>{const t=process.env.SLACK_DEVELOPER_MENU;if(t==="false")return!1;const{isDevMode:o,devEnv:i,openDevToolsOnStart:r}=e,{devToolsEnabled:c}=n;return o||!!i||r||!!t||c},dv=({settings:e})=>{const{devToolsEnabled:n}=e;return n},Rf=e=>!0,pv=({app:e,environment:n,settings:t})=>{const{notificationMethod:o}=t,i=Ff(Tf.FORCE_NATIVE_NOTIFICATIONS,e),r=o==="html",c=Rf(n);return ta.debug("isShowingHtmlNotifications",{notificationMethod:o,enforceNativeNotifications:i,isPreferred:r,canShow:c}),i?(ta.info("isShowingHtmlNotifications: notification method is HTML but we force native notification via experiment."),!1):!!(r&&c)},oa=e=>{const n=e.notificationTimeout;return Number.isSafeInteger(n)&&n===Number.MAX_SAFE_INTEGER},ia={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},ra=(e,n)=>(...t)=>{try{const o=t.map(i=>typeof i=="object"?JSON.stringify(i,null,2):i).join(" ");n?console[e](`[${n}]	${o}`):console[e](o)}catch{}},Oe=Object.entries(ia).reduce((e,[n,t])=>(e[n]=ra(t),e),{}),_v=(e,n)=>Object.entries(ia).reduce((t,[o,i])=>(t[o]=ra(i,e),t),{});var xf=typeof global=="object"&&global&&global.Object===Object&&global;const ca=xf;var Pf=typeof self=="object"&&self&&self.Object===Object&&self,kf=ca||Pf||Function("return this")();const on=kf;var Nf=on.Symbol;const Ye=Nf;var aa=Object.prototype,Mf=aa.hasOwnProperty,Lf=aa.toString,$t=Ye?Ye.toStringTag:void 0;function Uf(e){var n=Mf.call(e,$t),t=e[$t];try{e[$t]=void 0;var o=!0}catch{}var i=Lf.call(e);return o&&(n?e[$t]=t:delete e[$t]),i}const jf=Uf;var Hf=Object.prototype,Kf=Hf.toString;function zf(e){return Kf.call(e)}const Wf=zf;var Gf="[object Null]",qf="[object Undefined]",la=Ye?Ye.toStringTag:void 0;function $f(e){return e==null?e===void 0?qf:Gf:la&&la in Object(e)?jf(e):Wf(e)}const rt=$f;function Vf(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}const Dn=Vf;var Yf="[object AsyncFunction]",Xf="[object Function]",Qf="[object GeneratorFunction]",Zf="[object Proxy]";function eu(e){if(!Dn(e))return!1;var n=rt(e);return n==Xf||n==Qf||n==Yf||n==Zf}const sa=eu;var nu=on["__core-js_shared__"];const qi=nu;var Aa=function(){var e=/[^.]+$/.exec(qi&&qi.keys&&qi.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function tu(e){return!!Aa&&Aa in e}const ou=tu;var iu=Function.prototype,ru=iu.toString;function cu(e){if(e!=null){try{return ru.call(e)}catch{}try{return e+""}catch{}}return""}const Rn=cu;var au=/[\\^$.*+?()[\]{}|]/g,lu=/^\[object .+?Constructor\]$/,su=Function.prototype,Au=Object.prototype,fu=su.toString,uu=Au.hasOwnProperty,Eu=RegExp("^"+fu.call(uu).replace(au,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function du(e){if(!Dn(e)||ou(e))return!1;var n=sa(e)?Eu:lu;return n.test(Rn(e))}const pu=du;function _u(e,n){return e?.[n]}const hu=_u;function gu(e,n){var t=hu(e,n);return pu(t)?t:void 0}const xn=gu;var bu=xn(Object,"create");const Vt=bu;function mu(){this.__data__=Vt?Vt(null):{},this.size=0}const Bu=mu;function yu(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}const Cu=yu;var vu="__lodash_hash_undefined__",Iu=Object.prototype,wu=Iu.hasOwnProperty;function Su(e){var n=this.__data__;if(Vt){var t=n[e];return t===vu?void 0:t}return wu.call(n,e)?n[e]:void 0}const Tu=Su;var Ou=Object.prototype,Fu=Ou.hasOwnProperty;function Ju(e){var n=this.__data__;return Vt?n[e]!==void 0:Fu.call(n,e)}const Du=Ju;var Ru="__lodash_hash_undefined__";function xu(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Vt&&n===void 0?Ru:n,this}const Pu=xu;function ct(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}ct.prototype.clear=Bu,ct.prototype.delete=Cu,ct.prototype.get=Tu,ct.prototype.has=Du,ct.prototype.set=Pu;const fa=ct;function ku(){this.__data__=[],this.size=0}const Nu=ku;function Mu(e,n){return e===n||e!==e&&n!==n}const $i=Mu;function Lu(e,n){for(var t=e.length;t--;)if($i(e[t][0],n))return t;return-1}const Uo=Lu;var Uu=Array.prototype,ju=Uu.splice;function Hu(e){var n=this.__data__,t=Uo(n,e);if(t<0)return!1;var o=n.length-1;return t==o?n.pop():ju.call(n,t,1),--this.size,!0}const Ku=Hu;function zu(e){var n=this.__data__,t=Uo(n,e);return t<0?void 0:n[t][1]}const Wu=zu;function Gu(e){return Uo(this.__data__,e)>-1}const qu=Gu;function $u(e,n){var t=this.__data__,o=Uo(t,e);return o<0?(++this.size,t.push([e,n])):t[o][1]=n,this}const Vu=$u;function at(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}at.prototype.clear=Nu,at.prototype.delete=Ku,at.prototype.get=Wu,at.prototype.has=qu,at.prototype.set=Vu;const jo=at;var Yu=xn(on,"Map");const Yt=Yu;function Xu(){this.size=0,this.__data__={hash:new fa,map:new(Yt||jo),string:new fa}}const Qu=Xu;function Zu(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}const eE=Zu;function nE(e,n){var t=e.__data__;return eE(n)?t[typeof n=="string"?"string":"hash"]:t.map}const Ho=nE;function tE(e){var n=Ho(this,e).delete(e);return this.size-=n?1:0,n}const oE=tE;function iE(e){return Ho(this,e).get(e)}const rE=iE;function cE(e){return Ho(this,e).has(e)}const aE=cE;function lE(e,n){var t=Ho(this,e),o=t.size;return t.set(e,n),this.size+=t.size==o?0:1,this}const sE=lE;function lt(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var o=e[n];this.set(o[0],o[1])}}lt.prototype.clear=Qu,lt.prototype.delete=oE,lt.prototype.get=rE,lt.prototype.has=aE,lt.prototype.set=sE;const Ko=lt;var AE="__lodash_hash_undefined__";function fE(e){return this.__data__.set(e,AE),this}const uE=fE;function EE(e){return this.__data__.has(e)}const dE=EE;function zo(e){var n=-1,t=e==null?0:e.length;for(this.__data__=new Ko;++n<t;)this.add(e[n])}zo.prototype.add=zo.prototype.push=uE,zo.prototype.has=dE;const Wo=zo;function pE(e,n,t,o){for(var i=e.length,r=t+(o?1:-1);o?r--:++r<i;)if(n(e[r],r,e))return r;return-1}const _E=pE;function hE(e){return e!==e}const gE=hE;function bE(e,n,t){for(var o=t-1,i=e.length;++o<i;)if(e[o]===n)return o;return-1}const mE=bE;function BE(e,n,t){return n===n?mE(e,n,t):_E(e,gE,t)}const yE=BE;function CE(e,n){var t=e==null?0:e.length;return!!t&&yE(e,n,0)>-1}const Vi=CE;function vE(e,n,t){for(var o=-1,i=e==null?0:e.length;++o<i;)if(t(n,e[o]))return!0;return!1}const Yi=vE;function IE(e,n){for(var t=-1,o=e==null?0:e.length,i=Array(o);++t<o;)i[t]=n(e[t],t,e);return i}const Go=IE;function wE(e){return function(n){return e(n)}}const Xi=wE;function SE(e,n){return e.has(n)}const Xt=SE;var TE=200;function OE(e,n,t,o){var i=-1,r=Vi,c=!0,a=e.length,l=[],s=n.length;if(!a)return l;t&&(n=Go(n,Xi(t))),o?(r=Yi,c=!1):n.length>=TE&&(r=Xt,c=!1,n=new Wo(n));e:for(;++i<a;){var A=e[i],f=t==null?A:t(A);if(A=o||A!==0?A:0,c&&f===f){for(var E=s;E--;)if(n[E]===f)continue e;l.push(A)}else r(n,f,o)||l.push(A)}return l}const FE=OE;function JE(e,n){for(var t=-1,o=n.length,i=e.length;++t<o;)e[i+t]=n[t];return e}const ua=JE;function DE(e){return e!=null&&typeof e=="object"}const Pn=DE;var RE="[object Arguments]";function xE(e){return Pn(e)&&rt(e)==RE}const Ea=xE;var da=Object.prototype,PE=da.hasOwnProperty,kE=da.propertyIsEnumerable,NE=Ea(function(){return arguments}())?Ea:function(e){return Pn(e)&&PE.call(e,"callee")&&!kE.call(e,"callee")};const Qi=NE;var ME=Array.isArray;const Me=ME;var pa=Ye?Ye.isConcatSpreadable:void 0;function LE(e){return Me(e)||Qi(e)||!!(pa&&e&&e[pa])}const UE=LE;function _a(e,n,t,o,i){var r=-1,c=e.length;for(t||(t=UE),i||(i=[]);++r<c;){var a=e[r];n>0&&t(a)?n>1?_a(a,n-1,t,o,i):ua(i,a):o||(i[i.length]=a)}return i}const Zi=_a;function jE(e){return e}const qo=jE;function HE(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}const KE=HE;var ha=Math.max;function zE(e,n,t){return n=ha(n===void 0?e.length-1:n,0),function(){for(var o=arguments,i=-1,r=ha(o.length-n,0),c=Array(r);++i<r;)c[i]=o[n+i];i=-1;for(var a=Array(n+1);++i<n;)a[i]=o[i];return a[n]=t(c),KE(e,this,a)}}const ga=zE;function WE(e){return function(){return e}}const GE=WE;var qE=function(){try{var e=xn(Object,"defineProperty");return e({},"",{}),e}catch{}}();const $o=qE;var $E=$o?function(e,n){return $o(e,"toString",{configurable:!0,enumerable:!1,value:GE(n),writable:!0})}:qo;const VE=$E;var YE=800,XE=16,QE=Date.now;function ZE(e){var n=0,t=0;return function(){var o=QE(),i=XE-(o-t);if(t=o,i>0){if(++n>=YE)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}var ed=ZE(VE);const ba=ed;function nd(e,n){return ba(ga(e,n,qo),e+"")}const er=nd;var td=9007199254740991;function od(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=td}const nr=od;function id(e){return e!=null&&nr(e.length)&&!sa(e)}const tr=id;function rd(e){return Pn(e)&&tr(e)}const Qt=rd;function cd(e){var n=e==null?0:e.length;return n?e[n-1]:void 0}const ad=cd;var ld=er(function(e,n){var t=ad(n);return Qt(t)&&(t=void 0),Qt(e)?FE(e,Zi(n,1,Qt,!0),void 0,t):[]});const Vo=ld;var sd=xn(on,"Set");const st=sd;function Ad(){}const ma=Ad;function fd(e){var n=-1,t=Array(e.size);return e.forEach(function(o){t[++n]=o}),t}const or=fd;var ud=1/0,Ed=st&&1/or(new st([,-0]))[1]==ud?function(e){return new st(e)}:ma;const dd=Ed;var pd=200;function _d(e,n,t){var o=-1,i=Vi,r=e.length,c=!0,a=[],l=a;if(t)c=!1,i=Yi;else if(r>=pd){var s=n?null:dd(e);if(s)return or(s);c=!1,i=Xt,l=new Wo}else l=n?[]:a;e:for(;++o<r;){var A=e[o],f=n?n(A):A;if(A=t||A!==0?A:0,c&&f===f){for(var E=l.length;E--;)if(l[E]===f)continue e;n&&l.push(f),a.push(A)}else i(l,f,t)||(l!==a&&l.push(f),a.push(A))}return a}const Ba=_d;var hd=er(function(e){return Ba(Zi(e,1,Qt,!0))});const gd=hd;function bd(e){return e&&e.length?Ba(e):[]}const ya=bd;function md(){this.__data__=new jo,this.size=0}const Bd=md;function yd(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}const Cd=yd;function vd(e){return this.__data__.get(e)}const Id=vd;function wd(e){return this.__data__.has(e)}const Sd=wd;var Td=200;function Od(e,n){var t=this.__data__;if(t instanceof jo){var o=t.__data__;if(!Yt||o.length<Td-1)return o.push([e,n]),this.size=++t.size,this;t=this.__data__=new Ko(o)}return t.set(e,n),this.size=t.size,this}const Fd=Od;function At(e){var n=this.__data__=new jo(e);this.size=n.size}At.prototype.clear=Bd,At.prototype.delete=Cd,At.prototype.get=Id,At.prototype.has=Sd,At.prototype.set=Fd;const Yo=At;function Jd(e,n){for(var t=-1,o=e==null?0:e.length;++t<o;)if(n(e[t],t,e))return!0;return!1}const Dd=Jd;var Rd=1,xd=2;function Pd(e,n,t,o,i,r){var c=t&Rd,a=e.length,l=n.length;if(a!=l&&!(c&&l>a))return!1;var s=r.get(e),A=r.get(n);if(s&&A)return s==n&&A==e;var f=-1,E=!0,d=t&xd?new Wo:void 0;for(r.set(e,n),r.set(n,e);++f<a;){var p=e[f],g=n[f];if(o)var b=c?o(g,p,f,n,e,r):o(p,g,f,e,n,r);if(b!==void 0){if(b)continue;E=!1;break}if(d){if(!Dd(n,function(h,m){if(!Xt(d,m)&&(p===h||i(p,h,t,o,r)))return d.push(m)})){E=!1;break}}else if(!(p===g||i(p,g,t,o,r))){E=!1;break}}return r.delete(e),r.delete(n),E}const Ca=Pd;var kd=on.Uint8Array;const va=kd;function Nd(e){var n=-1,t=Array(e.size);return e.forEach(function(o,i){t[++n]=[i,o]}),t}const Md=Nd;var Ld=1,Ud=2,jd="[object Boolean]",Hd="[object Date]",Kd="[object Error]",zd="[object Map]",Wd="[object Number]",Gd="[object RegExp]",qd="[object Set]",$d="[object String]",Vd="[object Symbol]",Yd="[object ArrayBuffer]",Xd="[object DataView]",Ia=Ye?Ye.prototype:void 0,ir=Ia?Ia.valueOf:void 0;function Qd(e,n,t,o,i,r,c){switch(t){case Xd:if(e.byteLength!=n.byteLength||e.byteOffset!=n.byteOffset)return!1;e=e.buffer,n=n.buffer;case Yd:return!(e.byteLength!=n.byteLength||!r(new va(e),new va(n)));case jd:case Hd:case Wd:return $i(+e,+n);case Kd:return e.name==n.name&&e.message==n.message;case Gd:case $d:return e==n+"";case zd:var a=Md;case qd:var l=o&Ld;if(a||(a=or),e.size!=n.size&&!l)return!1;var s=c.get(e);if(s)return s==n;o|=Ud,c.set(e,n);var A=Ca(a(e),a(n),o,i,r,c);return c.delete(e),A;case Vd:if(ir)return ir.call(e)==ir.call(n)}return!1}const Zd=Qd;function ep(e,n,t){var o=n(e);return Me(e)?o:ua(o,t(e))}const np=ep;function tp(e,n){for(var t=-1,o=e==null?0:e.length,i=0,r=[];++t<o;){var c=e[t];n(c,t,e)&&(r[i++]=c)}return r}const op=tp;function ip(){return[]}const rp=ip;var cp=Object.prototype,ap=cp.propertyIsEnumerable,wa=Object.getOwnPropertySymbols,lp=wa?function(e){return e==null?[]:(e=Object(e),op(wa(e),function(n){return ap.call(e,n)}))}:rp;const sp=lp;function Ap(e,n){for(var t=-1,o=Array(e);++t<e;)o[t]=n(t);return o}const fp=Ap;function up(){return!1}const Ep=up;var Sa=typeof gn=="object"&&gn&&!gn.nodeType&&gn,Ta=Sa&&typeof bn=="object"&&bn&&!bn.nodeType&&bn,dp=Ta&&Ta.exports===Sa,Oa=dp?on.Buffer:void 0,pp=Oa?Oa.isBuffer:void 0,_p=pp||Ep;const rr=_p;var hp=9007199254740991,gp=/^(?:0|[1-9]\d*)$/;function bp(e,n){var t=typeof e;return n=n??hp,!!n&&(t=="number"||t!="symbol"&&gp.test(e))&&e>-1&&e%1==0&&e<n}const cr=bp;var mp="[object Arguments]",Bp="[object Array]",yp="[object Boolean]",Cp="[object Date]",vp="[object Error]",Ip="[object Function]",wp="[object Map]",Sp="[object Number]",Tp="[object Object]",Op="[object RegExp]",Fp="[object Set]",Jp="[object String]",Dp="[object WeakMap]",Rp="[object ArrayBuffer]",xp="[object DataView]",Pp="[object Float32Array]",kp="[object Float64Array]",Np="[object Int8Array]",Mp="[object Int16Array]",Lp="[object Int32Array]",Up="[object Uint8Array]",jp="[object Uint8ClampedArray]",Hp="[object Uint16Array]",Kp="[object Uint32Array]",se={};se[Pp]=se[kp]=se[Np]=se[Mp]=se[Lp]=se[Up]=se[jp]=se[Hp]=se[Kp]=!0,se[mp]=se[Bp]=se[Rp]=se[yp]=se[xp]=se[Cp]=se[vp]=se[Ip]=se[wp]=se[Sp]=se[Tp]=se[Op]=se[Fp]=se[Jp]=se[Dp]=!1;function zp(e){return Pn(e)&&nr(e.length)&&!!se[rt(e)]}const Wp=zp;var Fa=typeof gn=="object"&&gn&&!gn.nodeType&&gn,Zt=Fa&&typeof bn=="object"&&bn&&!bn.nodeType&&bn,Gp=Zt&&Zt.exports===Fa,ar=Gp&&ca.process,qp=function(){try{var e=Zt&&Zt.require&&Zt.require("util").types;return e||ar&&ar.binding&&ar.binding("util")}catch{}}();const Ja=qp;var Da=Ja&&Ja.isTypedArray,$p=Da?Xi(Da):Wp;const Ra=$p;var Vp=Object.prototype,Yp=Vp.hasOwnProperty;function Xp(e,n){var t=Me(e),o=!t&&Qi(e),i=!t&&!o&&rr(e),r=!t&&!o&&!i&&Ra(e),c=t||o||i||r,a=c?fp(e.length,String):[],l=a.length;for(var s in e)(n||Yp.call(e,s))&&!(c&&(s=="length"||i&&(s=="offset"||s=="parent")||r&&(s=="buffer"||s=="byteLength"||s=="byteOffset")||cr(s,l)))&&a.push(s);return a}const Qp=Xp;var Zp=Object.prototype;function e_(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||Zp;return e===t}const n_=e_;function t_(e,n){return function(t){return e(n(t))}}var o_=t_(Object.keys,Object);const i_=o_;var r_=Object.prototype,c_=r_.hasOwnProperty;function a_(e){if(!n_(e))return i_(e);var n=[];for(var t in Object(e))c_.call(e,t)&&t!="constructor"&&n.push(t);return n}const l_=a_;function s_(e){return tr(e)?Qp(e):l_(e)}const lr=s_;function A_(e){return np(e,lr,sp)}const xa=A_;var f_=1,u_=Object.prototype,E_=u_.hasOwnProperty;function d_(e,n,t,o,i,r){var c=t&f_,a=xa(e),l=a.length,s=xa(n),A=s.length;if(l!=A&&!c)return!1;for(var f=l;f--;){var E=a[f];if(!(c?E in n:E_.call(n,E)))return!1}var d=r.get(e),p=r.get(n);if(d&&p)return d==n&&p==e;var g=!0;r.set(e,n),r.set(n,e);for(var b=c;++f<l;){E=a[f];var h=e[E],m=n[E];if(o)var B=c?o(m,h,E,n,e,r):o(h,m,E,e,n,r);if(!(B===void 0?h===m||i(h,m,t,o,r):B)){g=!1;break}b||(b=E=="constructor")}if(g&&!b){var C=e.constructor,x=n.constructor;C!=x&&"constructor"in e&&"constructor"in n&&!(typeof C=="function"&&C instanceof C&&typeof x=="function"&&x instanceof x)&&(g=!1)}return r.delete(e),r.delete(n),g}const p_=d_;var __=xn(on,"DataView");const sr=__;var h_=xn(on,"Promise");const Ar=h_;var g_=xn(on,"WeakMap");const fr=g_;var Pa="[object Map]",b_="[object Object]",ka="[object Promise]",Na="[object Set]",Ma="[object WeakMap]",La="[object DataView]",m_=Rn(sr),B_=Rn(Yt),y_=Rn(Ar),C_=Rn(st),v_=Rn(fr),kn=rt;(sr&&kn(new sr(new ArrayBuffer(1)))!=La||Yt&&kn(new Yt)!=Pa||Ar&&kn(Ar.resolve())!=ka||st&&kn(new st)!=Na||fr&&kn(new fr)!=Ma)&&(kn=function(e){var n=rt(e),t=n==b_?e.constructor:void 0,o=t?Rn(t):"";if(o)switch(o){case m_:return La;case B_:return Pa;case y_:return ka;case C_:return Na;case v_:return Ma}return n});const Ua=kn;var I_=1,ja="[object Arguments]",Ha="[object Array]",Xo="[object Object]",w_=Object.prototype,Ka=w_.hasOwnProperty;function S_(e,n,t,o,i,r){var c=Me(e),a=Me(n),l=c?Ha:Ua(e),s=a?Ha:Ua(n);l=l==ja?Xo:l,s=s==ja?Xo:s;var A=l==Xo,f=s==Xo,E=l==s;if(E&&rr(e)){if(!rr(n))return!1;c=!0,A=!1}if(E&&!A)return r||(r=new Yo),c||Ra(e)?Ca(e,n,t,o,i,r):Zd(e,n,l,t,o,i,r);if(!(t&I_)){var d=A&&Ka.call(e,"__wrapped__"),p=f&&Ka.call(n,"__wrapped__");if(d||p){var g=d?e.value():e,b=p?n.value():n;return r||(r=new Yo),i(g,b,t,o,r)}}return E?(r||(r=new Yo),p_(e,n,t,o,i,r)):!1}const T_=S_;function za(e,n,t,o,i){return e===n?!0:e==null||n==null||!Pn(e)&&!Pn(n)?e!==e&&n!==n:T_(e,n,t,o,za,i)}const ur=za;function O_(e,n){return ur(e,n)}const Er=O_;var rn,oe,dr,Wa,ft=0,Ga=[],Qo=[],qa=u.__b,$a=u.__r,Va=u.diffed,Ya=u.__c,Xa=u.unmount;function Nn(e,n){u.__h&&u.__h(oe,e,ft||n),ft=0;var t=oe.__H||(oe.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({__V:Qo}),t.__[e]}function yn(e){return ft=1,pr(el,e)}function pr(e,n,t){var o=Nn(rn++,2);if(o.t=e,!o.__c&&(o.__=[t?t(n):el(void 0,n),function(a){var l=o.__N?o.__N[0]:o.__[0],s=o.t(l,a);l!==s&&(o.__N=[s,o.__[1]],o.__c.setState({}))}],o.__c=oe,!oe.u)){var i=function(a,l,s){if(!o.__c.__H)return!0;var A=o.__c.__H.__.filter(function(E){return E.__c});if(A.every(function(E){return!E.__N}))return!r||r.call(this,a,l,s);var f=!1;return A.forEach(function(E){if(E.__N){var d=E.__[0];E.__=E.__N,E.__N=void 0,d!==E.__[0]&&(f=!0)}}),!(!f&&o.__c.props===a)&&(!r||r.call(this,a,l,s))};oe.u=!0;var r=oe.shouldComponentUpdate,c=oe.componentWillUpdate;oe.componentWillUpdate=function(a,l,s){if(this.__e){var A=r;r=void 0,i(a,l,s),r=A}c&&c.call(this,a,l,s)},oe.shouldComponentUpdate=i}return o.__N||o.__}function Xe(e,n){var t=Nn(rn++,3);!u.__s&&gr(t.__H,n)&&(t.__=e,t.i=n,oe.__H.__h.push(t))}function eo(e,n){var t=Nn(rn++,4);!u.__s&&gr(t.__H,n)&&(t.__=e,t.i=n,oe.__h.push(t))}function cn(e){return ft=5,ut(function(){return{current:e}},[])}function F_(e,n,t){ft=6,eo(function(){return typeof e=="function"?(e(n()),function(){return e(null)}):e?(e.current=n(),function(){return e.current=null}):void 0},t==null?t:t.concat(e))}function ut(e,n){var t=Nn(rn++,7);return gr(t.__H,n)?(t.__V=e(),t.i=n,t.__h=e,t.__V):t.__}function Et(e,n){return ft=8,ut(function(){return e},n)}function _r(e){var n=oe.context[e.__c],t=Nn(rn++,9);return t.c=e,n?(t.__==null&&(t.__=!0,n.sub(oe)),n.props.value):e.__}function Qa(e,n){u.useDebugValue&&u.useDebugValue(n?n(e):e)}function bv(e){var n=Nn(rn++,10),t=yn();return n.__=e,oe.componentDidCatch||(oe.componentDidCatch=function(o,i){n.__&&n.__(o,i),t[1](o)}),[t[0],function(){t[1](void 0)}]}function J_(){var e=Nn(rn++,11);if(!e.__){for(var n=oe.__v;n!==null&&!n.__m&&n.__!==null;)n=n.__;var t=n.__m||(n.__m=[0,0]);e.__="P"+t[0]+"-"+t[1]++}return e.__}function D_(){for(var e;e=Ga.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Zo),e.__H.__h.forEach(hr),e.__H.__h=[]}catch(n){e.__H.__h=[],u.__e(n,e.__v)}}u.__b=function(e){oe=null,qa&&qa(e)},u.__r=function(e){$a&&$a(e),rn=0;var n=(oe=e.__c).__H;n&&(dr===oe?(n.__h=[],oe.__h=[],n.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=Qo,t.__N=t.i=void 0})):(n.__h.forEach(Zo),n.__h.forEach(hr),n.__h=[],rn=0)),dr=oe},u.diffed=function(e){Va&&Va(e);var n=e.__c;n&&n.__H&&(n.__H.__h.length&&(Ga.push(n)!==1&&Wa===u.requestAnimationFrame||((Wa=u.requestAnimationFrame)||R_)(D_)),n.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==Qo&&(t.__=t.__V),t.i=void 0,t.__V=Qo})),dr=oe=null},u.__c=function(e,n){n.some(function(t){try{t.__h.forEach(Zo),t.__h=t.__h.filter(function(o){return!o.__||hr(o)})}catch(o){n.some(function(i){i.__h&&(i.__h=[])}),n=[],u.__e(o,t.__v)}}),Ya&&Ya(e,n)},u.unmount=function(e){Xa&&Xa(e);var n,t=e.__c;t&&t.__H&&(t.__H.__.forEach(function(o){try{Zo(o)}catch(i){n=i}}),t.__H=void 0,n&&u.__e(n,t.__v))};var Za=typeof requestAnimationFrame=="function";function R_(e){var n,t=function(){clearTimeout(o),Za&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);Za&&(n=requestAnimationFrame(t))}function Zo(e){var n=oe,t=e.__c;typeof t=="function"&&(e.__c=void 0,t()),oe=n}function hr(e){var n=oe;e.__c=e.__(),oe=n}function gr(e,n){return!e||e.length!==n.length||n.some(function(t,o){return t!==e[o]})}function el(e,n){return typeof n=="function"?n(e):n}function nl(e,n){for(var t in n)e[t]=n[t];return e}function br(e,n){for(var t in e)if(t!=="__source"&&!(t in n))return!0;for(var o in n)if(o!=="__source"&&e[o]!==n[o])return!0;return!1}function ei(e){this.props=e}function x_(e,n){function t(i){var r=this.props.ref,c=r==i.ref;return!c&&r&&(r.call?r(null):r.current=null),n?!n(this.props,i)||!c:br(this.props,i)}function o(i){return this.shouldComponentUpdate=t,q(e,i)}return o.displayName="Memo("+(e.displayName||e.name)+")",o.prototype.isReactComponent=!0,o.__f=!0,o}(ei.prototype=new Ae).isPureReactComponent=!0,ei.prototype.shouldComponentUpdate=function(e,n){return br(this.props,e)||br(this.state,n)};var tl=u.__b;u.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),tl&&tl(e)};var P_=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function k_(e){function n(t){var o=nl({},t);return delete o.ref,e(o,t.ref||null)}return n.$$typeof=P_,n.render=n,n.prototype.isReactComponent=n.__f=!0,n.displayName="ForwardRef("+(e.displayName||e.name)+")",n}var ol=function(e,n){return e==null?null:Te(Te(e).map(n))},il={map:ol,forEach:ol,count:function(e){return e?Te(e).length:0},only:function(e){var n=Te(e);if(n.length!==1)throw"Children.only";return n[0]},toArray:Te},N_=u.__e;u.__e=function(e,n,t,o){if(e.then){for(var i,r=n;r=r.__;)if((i=r.__c)&&i.__c)return n.__e==null&&(n.__e=t.__e,n.__k=t.__k),i.__c(e,n)}N_(e,n,t,o)};var rl=u.unmount;function cl(e,n,t){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(o){typeof o.__c=="function"&&o.__c()}),e.__c.__H=null),(e=nl({},e)).__c!=null&&(e.__c.__P===t&&(e.__c.__P=n),e.__c=null),e.__k=e.__k&&e.__k.map(function(o){return cl(o,n,t)})),e}function al(e,n,t){return e&&t&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(o){return al(o,n,t)}),e.__c&&e.__c.__P===n&&(e.__e&&t.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=t)),e}function ni(){this.__u=0,this.t=null,this.__b=null}function ll(e){var n=e.__.__c;return n&&n.__a&&n.__a(e)}function M_(e){var n,t,o;function i(r){if(n||(n=e()).then(function(c){t=c.default||c},function(c){o=c}),o)throw o;if(!t)throw n;return q(t,r)}return i.displayName="Lazy",i.__f=!0,i}function no(){this.u=null,this.o=null}u.unmount=function(e){var n=e.__c;n&&n.__R&&n.__R(),n&&32&e.__u&&(e.type=null),rl&&rl(e)},(ni.prototype=new Ae).__c=function(e,n){var t=n.__c,o=this;o.t==null&&(o.t=[]),o.t.push(t);var i=ll(o.__v),r=!1,c=function(){r||(r=!0,t.__R=null,i?i(a):a())};t.__R=c;var a=function(){if(!--o.__u){if(o.state.__a){var l=o.state.__a;o.__v.__k[0]=al(l,l.__c.__P,l.__c.__O)}var s;for(o.setState({__a:o.__b=null});s=o.t.pop();)s.forceUpdate()}};o.__u++||32&n.__u||o.setState({__a:o.__b=o.__v.__k[0]}),e.then(c,c)},ni.prototype.componentWillUnmount=function(){this.t=[]},ni.prototype.render=function(e,n){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=cl(this.__b,t,o.__O=o.__P)}this.__b=null}var i=n.__a&&q(ie,null,e.fallback);return i&&(i.__u&=-33),[q(ie,null,n.__a?null:e.children),i]};var sl=function(e,n,t){if(++t[1]===t[0]&&e.o.delete(n),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(t=e.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;e.u=t=t[2]}};function L_(e){return this.getChildContext=function(){return e.context},e.children}function U_(e){var n=this,t=e.i;n.componentWillUnmount=function(){ot(null,n.l),n.l=null,n.i=null},n.i&&n.i!==t&&n.componentWillUnmount(),n.l||(n.i=t,n.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(o){this.childNodes.push(o),n.i.appendChild(o)},insertBefore:function(o,i){this.childNodes.push(o),n.i.appendChild(o)},removeChild:function(o){this.childNodes.splice(this.childNodes.indexOf(o)>>>1,1),n.i.removeChild(o)}}),ot(q(L_,{context:n.context},e.__v),n.l)}function j_(e,n){var t=q(U_,{__v:e,i:n});return t.containerInfo=n,t}(no.prototype=new Ae).__a=function(e){var n=this,t=ll(n.__v),o=n.o.get(e);return o[0]++,function(i){var r=function(){n.props.revealOrder?(o.push(i),sl(n,e,o)):i()};t?t(r):r()}},no.prototype.render=function(e){this.u=null,this.o=new Map;var n=Te(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&n.reverse();for(var t=n.length;t--;)this.o.set(n[t],this.u=[1,0,this.u]);return e.children},no.prototype.componentDidUpdate=no.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(n,t){sl(e,t,n)})};var Al=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,H_=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,K_=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,z_=/[A-Z0-9]/g,W_=typeof document<"u",G_=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function q_(e,n,t){return n.__k==null&&(n.textContent=""),ot(e,n),typeof t=="function"&&t(),e?e.__c:null}function $_(e,n,t){return Ki(e,n),typeof t=="function"&&t(),e?e.__c:null}Ae.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(Ae.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(n){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:n})}})});var fl=u.event;function V_(){}function Y_(){return this.cancelBubble}function X_(){return this.defaultPrevented}u.event=function(e){return fl&&(e=fl(e)),e.persist=V_,e.isPropagationStopped=Y_,e.isDefaultPrevented=X_,e.nativeEvent=e};var mr,Q_={enumerable:!1,configurable:!0,get:function(){return this.class}},ul=u.vnode;u.vnode=function(e){typeof e.type=="string"&&function(n){var t=n.props,o=n.type,i={};for(var r in t){var c=t[r];if(!(r==="value"&&"defaultValue"in t&&c==null||W_&&r==="children"&&o==="noscript"||r==="class"||r==="className")){var a=r.toLowerCase();r==="defaultValue"&&"value"in t&&t.value==null?r="value":r==="download"&&c===!0?c="":a==="ondoubleclick"?r="ondblclick":a!=="onchange"||o!=="input"&&o!=="textarea"||G_(t.type)?a==="onfocus"?r="onfocusin":a==="onblur"?r="onfocusout":K_.test(r)?r=a:o.indexOf("-")===-1&&H_.test(r)?r=r.replace(z_,"-$&").toLowerCase():c===null&&(c=void 0):a=r="oninput",a==="oninput"&&i[r=a]&&(r="oninputCapture"),i[r]=c}}o=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Te(t.children).forEach(function(l){l.props.selected=i.value.indexOf(l.props.value)!=-1})),o=="select"&&i.defaultValue!=null&&(i.value=Te(t.children).forEach(function(l){l.props.selected=i.multiple?i.defaultValue.indexOf(l.props.value)!=-1:i.defaultValue==l.props.value})),t.class&&!t.className?(i.class=t.class,Object.defineProperty(i,"className",Q_)):(t.className&&!t.class||t.class&&t.className)&&(i.class=i.className=t.className),n.props=i}(e),e.$$typeof=Al,ul&&ul(e)};var El=u.__r;u.__r=function(e){El&&El(e),mr=e.__c};var dl=u.diffed;u.diffed=function(e){dl&&dl(e);var n=e.props,t=e.__e;t!=null&&e.type==="textarea"&&"value"in n&&n.value!==t.value&&(t.value=n.value==null?"":n.value),mr=null};var Z_={ReactCurrentDispatcher:{current:{readContext:function(e){return mr.__n[e.__c].props.value}}}},mv="17.0.2";function eh(e){return q.bind(null,e)}function an(e){return!!e&&e.$$typeof===Al}function nh(e){return an(e)&&e.type===ie}function Cn(e){return an(e)?Mc.apply(null,arguments):e}function pl(e){return!!e.__k&&(ot(null,e),!0)}function _l(e){return e&&(e.base||e.nodeType===1&&e)||null}var hl=function(e,n){return e(n)},th=function(e,n){return e(n)},oh=ie;function gl(e){e()}function ih(e){return e}function rh(){return[!1,gl]}var ch=eo,ah=an;function lh(e,n){var t=n(),o=yn({h:{__:t,v:n}}),i=o[0].h,r=o[1];return eo(function(){i.__=t,i.v=n,Br(i)&&r({h:i})},[e,t,n]),Xe(function(){return Br(i)&&r({h:i}),e(function(){Br(i)&&r({h:i})})},[e]),t}function Br(e){var n,t,o=e.v,i=e.__;try{var r=o();return!((n=i)===(t=r)&&(n!==0||1/n==1/t)||n!=n&&t!=t)}catch{return!0}}var ye={useState:yn,useId:J_,useReducer:pr,useEffect:Xe,useLayoutEffect:eo,useInsertionEffect:ch,useTransition:rh,useDeferredValue:ih,useSyncExternalStore:lh,startTransition:gl,useRef:cn,useImperativeHandle:F_,useMemo:ut,useCallback:Et,useContext:_r,useDebugValue:Qa,version:"17.0.2",Children:il,render:q_,hydrate:$_,unmountComponentAtNode:pl,createPortal:j_,createElement:q,createContext:Lc,createFactory:eh,cloneElement:Cn,createRef:le,Fragment:ie,isValidElement:an,isElement:ah,isFragment:nh,findDOMNode:_l,Component:Ae,PureComponent:ei,memo:x_,forwardRef:k_,flushSync:th,unstable_batchedUpdates:hl,StrictMode:oh,Suspense:ni,SuspenseList:no,lazy:M_,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Z_},sh=z(1397),Ah=z.n(sh),fh=z(5726),uh=z.n(fh),Eh,yr,dh,ph;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Cr=function(e,n){return Cr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)o.hasOwnProperty(i)&&(t[i]=o[i])},Cr(e,n)};function bl(e,n){Cr(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var dt=function(){return dt=Object.assign||function(n){for(var t,o=1,i=arguments.length;o<i;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},dt.apply(this,arguments)};function ml(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t}var Bl=function(e,n,t,o){switch(n){case"debounce":return Ah()(e,t,o);case"throttle":return uh()(e,t,o);default:return e}},yl=function(e){return typeof e=="function"},to=function(){return typeof window>"u"},Cl=function(e){return e instanceof Element||e instanceof HTMLDocument},_h=function(e){bl(n,e);function n(t){var o=e.call(this,t)||this;o.cancelHandler=function(){o.resizeHandler&&o.resizeHandler.cancel&&(o.resizeHandler.cancel(),o.resizeHandler=null)},o.attachObserver=function(){var s=o.props,A=s.targetRef,f=s.observerOptions;if(!to()){A&&A.current&&(o.targetRef.current=A.current);var E=o.getElement();E&&(o.observableElement&&o.observableElement===E||(o.observableElement=E,o.resizeObserver.observe(E,f)))}},o.getElement=function(){var s=o.props,A=s.querySelector,f=s.targetDomEl;if(to())return null;if(A)return document.querySelector(A);if(f&&Cl(f))return f;if(o.targetRef&&Cl(o.targetRef.current))return o.targetRef.current;var E=_l(o);if(!E)return null;var d=o.getRenderType();switch(d){case"renderProp":return E;case"childFunction":return E;case"child":return E;case"childArray":return E;default:return E.parentElement}},o.createResizeHandler=function(s){var A=o.props,f=A.handleWidth,E=f===void 0?!0:f,d=A.handleHeight,p=d===void 0?!0:d,g=A.onResize;if(!(!E&&!p)){var b=function(h){var m=h.width,B=h.height;o.state.width===m&&o.state.height===B||o.state.width===m&&!p||o.state.height===B&&!E||(g?.(m,B),o.setState({width:m,height:B}))};s.forEach(function(h){var m=h&&h.contentRect||{},B=m.width,C=m.height,x=!o.skipOnMount&&!to();x&&b({width:B,height:C}),o.skipOnMount=!1})}},o.getRenderType=function(){var s=o.props,A=s.render,f=s.children;return yl(A)?"renderProp":yl(f)?"childFunction":an(f)?"child":Array.isArray(f)?"childArray":"parent"};var i=t.skipOnMount,r=t.refreshMode,c=t.refreshRate,a=c===void 0?1e3:c,l=t.refreshOptions;return o.state={width:void 0,height:void 0},o.sizeRef={current:o.state},o.skipOnMount=i,o.targetRef=le(),o.observableElement=null,to()||(o.resizeHandler=Bl(o.createResizeHandler,r,a,l),o.resizeObserver=new window.ResizeObserver(o.resizeHandler)),o}return n.prototype.componentDidMount=function(){this.attachObserver()},n.prototype.componentDidUpdate=function(){this.attachObserver(),this.sizeRef.current=this.state},n.prototype.componentWillUnmount=function(){to()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},n.prototype.render=function(){var t=this.props,o=t.render,i=t.children,r=t.nodeType,c=r===void 0?"div":r,a=this.state,l=a.width,s=a.height,A={width:l,height:s,targetRef:this.targetRef},f=this.getRenderType();switch(f){case"renderProp":return o?.(A);case"childFunction":{var E=i;return E?.(A)}case"child":{var d=i;if(d.type&&typeof d.type=="string"){A.targetRef;var p=ml(A,["targetRef"]);return Cn(d,p)}return Cn(d,A)}case"childArray":{var g=i;return g.map(function(b){return!!b&&Cn(b,A)})}default:return ye.createElement(c,null)}},n}(ei);function Bv(e,n){n===void 0&&(n={});var t=function(r){bl(c,r);function c(){var a=r!==null&&r.apply(this,arguments)||this;return a.ref=Eh(),a}return c.prototype.render=function(){var a=this.props,l=a.forwardedRef,s=ml(a,["forwardedRef"]),A=l??this.ref;return yr.createElement(_h,dt({},n,{targetRef:A}),yr.createElement(e,dt({targetRef:A},s)))},c}(dh);function o(r,c){return yr.createElement(t,dt({},r,{forwardedRef:c}))}var i=e.displayName||e.name;return o.displayName="withResizeDetector(".concat(i,")"),ph(o)}function hh(e){var n=e===void 0?{}:e,t=n.skipOnMount,o=t===void 0?!1:t,i=n.refreshMode,r=n.refreshRate,c=r===void 0?1e3:r,a=n.refreshOptions,l=n.handleWidth,s=l===void 0?!0:l,A=n.handleHeight,f=A===void 0?!0:A,E=n.targetRef,d=n.observerOptions,p=n.onResize,g=cn(o),b=yn({width:void 0,height:void 0}),h=b[0],m=b[1],B=yn(E?.current||null),C=B[0],x=B[1];E&&setTimeout(function(){E.current!==C&&x(E.current)},0);var P=Et(function(Z){Z!==C&&x(Z)},[C]);P.current=C,Xe(function(){return function(){x(null),P.current=null}},[]);var R=Et(function(Z,G){return!(Z.width===G.width&&Z.height===G.height||Z.width===G.width&&!f||Z.height===G.height&&!s)},[s,f]),ce=Et(function(Z){if(!(!s&&!f)){if(g.current){g.current=!1;return}Z.forEach(function(G){var we=G?.contentRect||{},Re=we.width,Ke=we.height;m(function(Ge){return R(Ge,{width:Re,height:Ke})?{width:Re,height:Ke}:Ge})})}},[s,f,g,R]),ee=Et(Bl(ce,i,c,a),[ce,i,c,a]);return Xe(function(){var Z;return C?(Z=new window.ResizeObserver(ee),Z.observe(C,d)):(h.width||h.height)&&m({width:void 0,height:void 0}),function(){var G,we,Re;(G=Z?.disconnect)===null||G===void 0||G.call(Z),(Re=(we=ee).cancel)===null||Re===void 0||Re.call(we)}},[ee,C]),Xe(function(){p?.(h.width,h.height)},[h]),dt({ref:P},h)}function oo(){return oo=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},oo.apply(null,arguments)}function vr(e,n){if(e==null)return{};var t={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(n.indexOf(o)!==-1)continue;t[o]=e[o]}return t}function Ir(e,n){return Ir=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,o){return t.__proto__=o,t},Ir(e,n)}function wr(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,Ir(e,n)}var yv=z(4031);function gh(e,n){return e.classList?!!n&&e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function bh(e,n){e.classList?e.classList.add(n):gh(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function vl(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function mh(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=vl(e.className,n):e.setAttribute("class",vl(e.className&&e.className.baseVal||"",n))}const Il={disabled:!1},ti=ye.createContext(null);var io="unmounted",Mn="exited",Ln="entering",pt="entered",Sr="exiting",ln=function(e){wr(n,e);function n(o,i){var r;r=e.call(this,o,i)||this;var c=i,a=c&&!c.isMounting?o.enter:o.appear,l;return r.appearStatus=null,o.in?a?(l=Mn,r.appearStatus=Ln):l=pt:o.unmountOnExit||o.mountOnEnter?l=io:l=Mn,r.state={status:l},r.nextCallback=null,r}n.getDerivedStateFromProps=function(i,r){var c=i.in;return c&&r.status===io?{status:Mn}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(i){var r=null;if(i!==this.props){var c=this.state.status;this.props.in?c!==Ln&&c!==pt&&(r=Ln):(c===Ln||c===pt)&&(r=Sr)}this.updateStatus(!1,r)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var i=this.props.timeout,r,c,a;return r=c=a=i,i!=null&&typeof i!="number"&&(r=i.exit,c=i.enter,a=i.appear!==void 0?i.appear:c),{exit:r,enter:c,appear:a}},t.updateStatus=function(i,r){i===void 0&&(i=!1),r!==null?(this.cancelNextCallback(),r===Ln?this.performEnter(i):this.performExit()):this.props.unmountOnExit&&this.state.status===Mn&&this.setState({status:io})},t.performEnter=function(i){var r=this,c=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[ye.findDOMNode(this),a],s=l[0],A=l[1],f=this.getTimeouts(),E=a?f.appear:f.enter;if(!i&&!c||Il.disabled){this.safeSetState({status:pt},function(){r.props.onEntered(s)});return}this.props.onEnter(s,A),this.safeSetState({status:Ln},function(){r.props.onEntering(s,A),r.onTransitionEnd(E,function(){r.safeSetState({status:pt},function(){r.props.onEntered(s,A)})})})},t.performExit=function(){var i=this,r=this.props.exit,c=this.getTimeouts(),a=this.props.nodeRef?void 0:ye.findDOMNode(this);if(!r||Il.disabled){this.safeSetState({status:Mn},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Sr},function(){i.props.onExiting(a),i.onTransitionEnd(c.exit,function(){i.safeSetState({status:Mn},function(){i.props.onExited(a)})})})},t.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(i,r){r=this.setNextCallback(r),this.setState(i,r)},t.setNextCallback=function(i){var r=this,c=!0;return this.nextCallback=function(a){c&&(c=!1,r.nextCallback=null,i(a))},this.nextCallback.cancel=function(){c=!1},this.nextCallback},t.onTransitionEnd=function(i,r){this.setNextCallback(r);var c=this.props.nodeRef?this.props.nodeRef.current:ye.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!c||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[c,this.nextCallback],s=l[0],A=l[1];this.props.addEndListener(s,A)}i!=null&&setTimeout(this.nextCallback,i)},t.render=function(){var i=this.state.status;if(i===io)return null;var r=this.props,c=r.children,a=r.in,l=r.mountOnEnter,s=r.unmountOnExit,A=r.appear,f=r.enter,E=r.exit,d=r.timeout,p=r.addEndListener,g=r.onEnter,b=r.onEntering,h=r.onEntered,m=r.onExit,B=r.onExiting,C=r.onExited,x=r.nodeRef,P=vr(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return ye.createElement(ti.Provider,{value:null},typeof c=="function"?c(i,P):ye.cloneElement(ye.Children.only(c),P))},n}(ye.Component);ln.contextType=ti,ln.propTypes={};function _t(){}ln.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:_t,onEntering:_t,onEntered:_t,onExit:_t,onExiting:_t,onExited:_t},ln.UNMOUNTED=io,ln.EXITED=Mn,ln.ENTERING=Ln,ln.ENTERED=pt,ln.EXITING=Sr;const Bh=ln;var yh=function(n,t){return n&&t&&t.split(" ").forEach(function(o){return bh(n,o)})},Tr=function(n,t){return n&&t&&t.split(" ").forEach(function(o){return mh(n,o)})},Or=function(e){wr(n,e);function n(){for(var o,i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return o=e.call.apply(e,[this].concat(r))||this,o.appliedClasses={appear:{},enter:{},exit:{}},o.onEnter=function(a,l){var s=o.resolveArguments(a,l),A=s[0],f=s[1];o.removeClasses(A,"exit"),o.addClass(A,f?"appear":"enter","base"),o.props.onEnter&&o.props.onEnter(a,l)},o.onEntering=function(a,l){var s=o.resolveArguments(a,l),A=s[0],f=s[1],E=f?"appear":"enter";o.addClass(A,E,"active"),o.props.onEntering&&o.props.onEntering(a,l)},o.onEntered=function(a,l){var s=o.resolveArguments(a,l),A=s[0],f=s[1],E=f?"appear":"enter";o.removeClasses(A,E),o.addClass(A,E,"done"),o.props.onEntered&&o.props.onEntered(a,l)},o.onExit=function(a){var l=o.resolveArguments(a),s=l[0];o.removeClasses(s,"appear"),o.removeClasses(s,"enter"),o.addClass(s,"exit","base"),o.props.onExit&&o.props.onExit(a)},o.onExiting=function(a){var l=o.resolveArguments(a),s=l[0];o.addClass(s,"exit","active"),o.props.onExiting&&o.props.onExiting(a)},o.onExited=function(a){var l=o.resolveArguments(a),s=l[0];o.removeClasses(s,"exit"),o.addClass(s,"exit","done"),o.props.onExited&&o.props.onExited(a)},o.resolveArguments=function(a,l){return o.props.nodeRef?[o.props.nodeRef.current,a]:[a,l]},o.getClassNames=function(a){var l=o.props.classNames,s=typeof l=="string",A=s&&l?l+"-":"",f=s?""+A+a:l[a],E=s?f+"-active":l[a+"Active"],d=s?f+"-done":l[a+"Done"];return{baseClassName:f,activeClassName:E,doneClassName:d}},o}var t=n.prototype;return t.addClass=function(i,r,c){var a=this.getClassNames(r)[c+"ClassName"],l=this.getClassNames("enter"),s=l.doneClassName;r==="appear"&&c==="done"&&s&&(a+=" "+s),c==="active"&&i&&i.scrollTop,a&&(this.appliedClasses[r][c]=a,yh(i,a))},t.removeClasses=function(i,r){var c=this.appliedClasses[r],a=c.base,l=c.active,s=c.done;this.appliedClasses[r]={},a&&Tr(i,a),l&&Tr(i,l),s&&Tr(i,s)},t.render=function(){var i=this.props,r=i.classNames,c=vr(i,["classNames"]);return ye.createElement(Bh,oo({},c,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},n}(ye.Component);Or.defaultProps={classNames:""},Or.propTypes={};const Ch=Or;function vh(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Fr(e,n){var t=function(r){return n&&an(r)?n(r):r},o=Object.create(null);return e&&il.map(e,function(i){return i}).forEach(function(i){o[i.key]=t(i)}),o}function Ih(e,n){e=e||{},n=n||{};function t(A){return A in n?n[A]:e[A]}var o=Object.create(null),i=[];for(var r in e)r in n?i.length&&(o[r]=i,i=[]):i.push(r);var c,a={};for(var l in n){if(o[l])for(c=0;c<o[l].length;c++){var s=o[l][c];a[o[l][c]]=t(s)}a[l]=t(l)}for(c=0;c<i.length;c++)a[i[c]]=t(i[c]);return a}function Un(e,n,t){return t[n]!=null?t[n]:e.props[n]}function wh(e,n){return Fr(e.children,function(t){return Cn(t,{onExited:n.bind(null,t),in:!0,appear:Un(t,"appear",e),enter:Un(t,"enter",e),exit:Un(t,"exit",e)})})}function Sh(e,n,t){var o=Fr(e.children),i=Ih(n,o);return Object.keys(i).forEach(function(r){var c=i[r];if(an(c)){var a=r in n,l=r in o,s=n[r],A=an(s)&&!s.props.in;l&&(!a||A)?i[r]=Cn(c,{onExited:t.bind(null,c),in:!0,exit:Un(c,"exit",e),enter:Un(c,"enter",e)}):!l&&a&&!A?i[r]=Cn(c,{in:!1}):l&&a&&an(s)&&(i[r]=Cn(c,{onExited:t.bind(null,c),in:s.props.in,exit:Un(c,"exit",e),enter:Un(c,"enter",e)}))}}),i}var Th=Object.values||function(e){return Object.keys(e).map(function(n){return e[n]})},Oh={component:"div",childFactory:function(n){return n}},Jr=function(e){wr(n,e);function n(o,i){var r;r=e.call(this,o,i)||this;var c=r.handleExited.bind(vh(r));return r.state={contextValue:{isMounting:!0},handleExited:c,firstRender:!0},r}var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(i,r){var c=r.children,a=r.handleExited,l=r.firstRender;return{children:l?wh(i,a):Sh(i,c,a),firstRender:!1}},t.handleExited=function(i,r){var c=Fr(this.props.children);i.key in c||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(a){var l=oo({},a.children);return delete l[i.key],{children:l}}))},t.render=function(){var i=this.props,r=i.component,c=i.childFactory,a=vr(i,["component","childFactory"]),l=this.state.contextValue,s=Th(this.state.children).map(c);return delete a.appear,delete a.enter,delete a.exit,r===null?ye.createElement(ti.Provider,{value:l},s):ye.createElement(ti.Provider,{value:l},ye.createElement(r,a,s))},n}(ye.Component);Jr.propTypes={},Jr.defaultProps=Oh;const Fh=Jr;var oi=ye.createContext(null);const Cv=null;function Jh(e){e()}var wl=Jh,Dh=function(n){return wl=n},Rh=function(){return wl},Sl={notify:function(){}};function xh(){var e=Rh(),n=null,t=null;return{clear:function(){n=null,t=null},notify:function(){e(function(){for(var i=n;i;)i.callback(),i=i.next})},get:function(){for(var i=[],r=n;r;)i.push(r),r=r.next;return i},subscribe:function(i){var r=!0,c=t={callback:i,next:null,prev:t};return c.prev?c.prev.next=c:n=c,function(){!r||n===null||(r=!1,c.next?c.next.prev=c.prev:t=c.prev,c.prev?c.prev.next=c.next:n=c.next)}}}}var Tl=function(){function e(t,o){this.store=t,this.parentSub=o,this.unsubscribe=null,this.listeners=Sl,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var n=e.prototype;return n.addNestedSub=function(o){return this.trySubscribe(),this.listeners.subscribe(o)},n.notifyNestedSubs=function(){this.listeners.notify()},n.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},n.isSubscribed=function(){return!!this.unsubscribe},n.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=xh())},n.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=Sl)},e}(),Dr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?eo:Xe;function Ph(e){var n=e.store,t=e.context,o=e.children,i=ut(function(){var a=new Tl(n);return a.onStateChange=a.notifyNestedSubs,{store:n,subscription:a}},[n]),r=ut(function(){return n.getState()},[n]);Dr(function(){var a=i.subscription;return a.trySubscribe(),r!==n.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,r]);var c=t||oi;return ye.createElement(c.Provider,{value:i},o)}const kh=Ph;var vv=z(3869),Iv=z(5376),ii,Ol,Fl,vn,ht,Nh,Mh,ri,Lh,Uh,jh,Hh,Kh=null,zh=null,wv=function(n){try{return JSON.stringify(n)}catch{return String(n)}};function Wh(e,n){var t=e[1];return[n.payload,t+1]}function Jl(e,n,t){jh(function(){return e.apply(void 0,n)},t)}function Gh(e,n,t,o,i,r,c){e.current=o,n.current=i,t.current=!1,r.current&&(r.current=null,c())}function qh(e,n,t,o,i,r,c,a,l,s){if(e){var A=!1,f=null,E=function(){if(!A){var g=n.getState(),b,h;try{b=o(g,i.current)}catch(m){h=m,f=m}h||(f=null),b===r.current?c.current||l():(r.current=b,a.current=b,c.current=!0,s({type:"STORE_UPDATED",payload:{error:h}}))}};t.onStateChange=E,t.trySubscribe(),E();var d=function(){if(A=!0,t.tryUnsubscribe(),t.onStateChange=null,f)throw f};return d}}var $h=function(){return[null,0]};function Sv(e,n){n===void 0&&(n={});var t=n,o=t.getDisplayName,i=o===void 0?function(P){return"ConnectAdvanced("+P+")"}:o,r=t.methodName,c=r===void 0?"connectAdvanced":r,a=t.renderCountProp,l=a===void 0?void 0:a,s=t.shouldHandleStateChanges,A=s===void 0?!0:s,f=t.storeKey,E=f===void 0?"store":f,d=t.withRef,p=d===void 0?!1:d,g=t.forwardRef,b=g===void 0?!1:g,h=t.context,m=h===void 0?Hh:h,B=Ol(t,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(0)var C;var x=m;return function(R){var ce=R.displayName||R.name||"Component",ee=i(ce),Z=ii({},B,{getDisplayName:i,methodName:c,renderCountProp:l,shouldHandleStateChanges:A,storeKey:E,displayName:ee,wrappedComponentName:ce,WrappedComponent:R}),G=B.pure;function we(ve){return e(ve.dispatch,Z)}var Re=G?vn:function(ve){return ve()};function Ke(ve){var Tn=vn(function(){var et=ve.reactReduxForwardedRef,nt=Ol(ve,["reactReduxForwardedRef"]);return[ve.context,et,nt]},[ve]),fn=Tn[0],So=Tn[1],fe=Tn[2],Jt=vn(function(){return fn&&fn.Consumer&&Lh(ht.createElement(fn.Consumer,null))?fn:x},[fn,x]),ae=Nh(Jt),On=!!ve.store&&!!ve.store.getState&&!!ve.store.dispatch,de=!!ae&&!!ae.store,xe=On?ve.store:ae.store,Yn=vn(function(){return we(xe)},[xe]),un=vn(function(){if(!A)return zh;var et=new Uh(xe,On?null:ae.subscription),nt=et.notifyNestedSubs.bind(et);return[et,nt]},[xe,On,ae]),Xn=un[0],Dt=un[1],To=vn(function(){return On?ae:ii({},ae,{subscription:Xn})},[On,ae,Xn]),Oo=Mh(Wh,Kh,$h),Fn=Oo[0],En=Fn[0],dn=Oo[1];if(En&&En.error)throw En.error;var Rt=ri(),Qn=ri(fe),qe=ri(),Zn=ri(!1),Jn=Re(function(){return qe.current&&fe===Qn.current?qe.current:Yn(xe.getState(),fe)},[xe,En,fe]);Jl(Gh,[Qn,Rt,Zn,fe,Jn,qe,Dt]),Jl(qh,[A,xe,Xn,Yn,Qn,Rt,Zn,qe,Dt,dn],[xe,Xn,Yn]);var xt=vn(function(){return ht.createElement(R,ii({},Jn,{ref:So}))},[So,R,Jn]),xi=vn(function(){return A?ht.createElement(Jt.Provider,{value:To},xt):xt},[Jt,xt,To]);return xi}var Ge=G?ht.memo(Ke):Ke;if(Ge.WrappedComponent=R,Ge.displayName=Ke.displayName=ee,b){var Ft=ht.forwardRef(function(Tn,fn){return ht.createElement(Ge,ii({},Tn,{reactReduxForwardedRef:fn}))});return Ft.displayName=ee,Ft.WrappedComponent=R,Fl(Ft,R)}return Fl(Ge,R)}}function Vh(e,n){var t={},o=function(c){var a=e[c];typeof a=="function"&&(t[c]=function(){return n(a.apply(void 0,arguments))})};for(var i in e)o(i);return t}function Rr(e){return function(t,o){var i=e(t,o);function r(){return i}return r.dependsOnOwnProps=!1,r}}function Dl(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function Rl(e,n){return function(o,i){var r=i.displayName,c=function(l,s){return c.dependsOnOwnProps?c.mapToProps(l,s):c.mapToProps(l)};return c.dependsOnOwnProps=!0,c.mapToProps=function(l,s){c.mapToProps=e,c.dependsOnOwnProps=Dl(e);var A=c(l,s);return typeof A=="function"&&(c.mapToProps=A,c.dependsOnOwnProps=Dl(A),A=c(l,s)),A},c}}function Yh(e){return typeof e=="function"?Rl(e,"mapDispatchToProps"):void 0}function Xh(e){return e?void 0:Rr(function(n){return{dispatch:n}})}function Qh(e){return e&&typeof e=="object"?Rr(function(n){return Vh(e,n)}):void 0}const Tv=[Yh,Xh,Qh];function Zh(e){return typeof e=="function"?Rl(e,"mapStateToProps"):void 0}function eg(e){return e?void 0:Rr(function(){return{}})}const Ov=[Zh,eg];function ng(e,n,t){return oo({},t,e,n)}function tg(e){return function(t,o){var i=o.displayName,r=o.pure,c=o.areMergedPropsEqual,a=!1,l;return function(A,f,E){var d=e(A,f,E);return a?(!r||!c(d,l))&&(l=d):(a=!0,l=d),l}}}function og(e){return typeof e=="function"?tg(e):void 0}function ig(e){return e?void 0:function(){return ng}}const Fv=[og,ig];var rg,cg,ag,xr,lg,sg,Ag,fg;function Pr(e,n,t){for(var o=n.length-1;o>=0;o--){var i=n[o](e);if(i)return i}return function(r,c){throw new Error("Invalid value of type "+typeof e+" for "+t+" argument when connecting component "+c.wrappedComponentName+".")}}function ug(e,n){return e===n}function Jv(e){var n=e===void 0?{}:e,t=n.connectHOC,o=t===void 0?ag:t,i=n.mapStateToPropsFactories,r=i===void 0?sg:i,c=n.mapDispatchToPropsFactories,a=c===void 0?lg:c,l=n.mergePropsFactories,s=l===void 0?Ag:l,A=n.selectorFactory,f=A===void 0?fg:A;return function(d,p,g,b){b===void 0&&(b={});var h=b,m=h.pure,B=m===void 0?!0:m,C=h.areStatesEqual,x=C===void 0?ug:C,P=h.areOwnPropsEqual,R=P===void 0?xr:P,ce=h.areStatePropsEqual,ee=ce===void 0?xr:ce,Z=h.areMergedPropsEqual,G=Z===void 0?xr:Z,we=cg(h,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),Re=Pr(d,r,"mapStateToProps"),Ke=Pr(p,a,"mapDispatchToProps"),Ge=Pr(g,s,"mergeProps");return o(f,rg({methodName:"connect",getDisplayName:function(ve){return"Connect("+ve+")"},shouldHandleStateChanges:!!d,initMapStateToProps:Re,initMapDispatchToProps:Ke,initMergeProps:Ge,pure:B,areStatesEqual:x,areOwnPropsEqual:R,areStatePropsEqual:ee,areMergedPropsEqual:G},we))}}const Dv=null;function Eg(){var e=_r(oi);return e}var dg,xl,pg;function Rv(e){e===void 0&&(e=xl);var n=e===xl?pg:function(){return dg(e)};return function(){var o=n(),i=o.store;return i}}var xv=null,Pl,_g,hg;function Pv(e){e===void 0&&(e=Pl);var n=e===Pl?_g:hg(e);return function(){var o=n();return o.dispatch}}var kv=null,gg=function(n,t){return n===t};function bg(e,n,t,o){var i=pr(function(p){return p+1},0),r=i[1],c=ut(function(){return new Tl(t,o)},[t,o]),a=cn(),l=cn(),s=cn(),A=cn(),f=t.getState(),E;try{if(e!==l.current||f!==s.current||a.current){var d=e(f);A.current===void 0||!n(d,A.current)?E=d:E=A.current}else E=A.current}catch(p){throw a.current&&(p.message+=`
The error may be correlated with this previous error:
`+a.current.stack+`

`),p}return Dr(function(){l.current=e,s.current=f,A.current=E,a.current=void 0}),Dr(function(){function p(){try{var g=t.getState(),b=l.current(g);if(n(b,A.current))return;A.current=b,s.current=g}catch(h){a.current=h}r()}return c.onStateChange=p,c.trySubscribe(),p(),function(){return c.tryUnsubscribe()}},[t,c]),E}function mg(e){e===void 0&&(e=oi);var n=e===oi?Eg:function(){return _r(e)};return function(o,i){i===void 0&&(i=gg);var r=n(),c=r.store,a=r.subscription,l=bg(o,i,c,a);return Qa(l),l}}var Bg=mg();Dh(hl);var yg=/\s/;function Cg(e){for(var n=e.length;n--&&yg.test(e.charAt(n)););return n}const vg=Cg;var Ig=/^\s+/;function wg(e){return e&&e.slice(0,vg(e)+1).replace(Ig,"")}const Sg=wg;var Tg="[object Symbol]";function Og(e){return typeof e=="symbol"||Pn(e)&&rt(e)==Tg}const ci=Og;var kl=NaN,Fg=/^[-+]0x[0-9a-f]+$/i,Jg=/^0b[01]+$/i,Dg=/^0o[0-7]+$/i,Rg=parseInt;function xg(e){if(typeof e=="number")return e;if(ci(e))return kl;if(Dn(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Dn(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=Sg(e);var t=Jg.test(e);return t||Dg.test(e)?Rg(e.slice(2),t?2:8):Fg.test(e)?kl:+e}const Pg=xg;var Nl=1/0,kg=17976931348623157e292;function Ng(e){if(!e)return e===0?e:0;if(e=Pg(e),e===Nl||e===-Nl){var n=e<0?-1:1;return n*kg}return e===e?e:0}const Mg=Ng;function Lg(e){var n=Mg(e),t=n%1;return n===n?t?n-t:n:0}const Ug=Lg;var jg="Expected a function";function Hg(e,n){var t;if(typeof n!="function")throw new TypeError(jg);return e=Ug(e),function(){return--e>0&&(t=n.apply(this,arguments)),e<=1&&(n=void 0),t}}const Kg=Hg;function zg(e){return Kg(2,e)}const Wg=zg(()=>({...window.desktop.store,dispatch:ma})),{XX:Gg}=v,qg=async(e,n="div")=>{const t=Wg(),i=t.getState().settings.locale;i&&await window.desktop.intl.applyLocale(i);const r=document.createElement(n);document.body.appendChild(r),window.addEventListener("beforeunload",()=>pl(r)),Gg(V(kh,{store:t,children:V(e,{})}),r)};function $g(e,n,t){n=="__proto__"&&$o?$o(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}const Ml=$g;function Vg(e,n,t,o){for(var i=-1,r=e==null?0:e.length;++i<r;){var c=e[i];n(o,c,t(c),e)}return o}const Yg=Vg;function Xg(e){return function(n,t,o){for(var i=-1,r=Object(n),c=o(n),a=c.length;a--;){var l=c[e?a:++i];if(t(r[l],l,r)===!1)break}return n}}var Qg=Xg();const Zg=Qg;function eb(e,n){return e&&Zg(e,n,lr)}const nb=eb;function tb(e,n){return function(t,o){if(t==null)return t;if(!tr(t))return e(t,o);for(var i=t.length,r=n?i:-1,c=Object(t);(n?r--:++r<i)&&o(c[r],r,c)!==!1;);return t}}var ob=tb(nb);const Ll=ob;function ib(e,n,t,o){return Ll(e,function(i,r,c){n(o,i,t(i),c)}),o}const rb=ib;var cb=1,ab=2;function lb(e,n,t,o){var i=t.length,r=i,c=!o;if(e==null)return!r;for(e=Object(e);i--;){var a=t[i];if(c&&a[2]?a[1]!==e[a[0]]:!(a[0]in e))return!1}for(;++i<r;){a=t[i];var l=a[0],s=e[l],A=a[1];if(c&&a[2]){if(s===void 0&&!(l in e))return!1}else{var f=new Yo;if(o)var E=o(s,A,l,e,n,f);if(!(E===void 0?ur(A,s,cb|ab,o,f):E))return!1}}return!0}const sb=lb;function Ab(e){return e===e&&!Dn(e)}const Ul=Ab;function fb(e){for(var n=lr(e),t=n.length;t--;){var o=n[t],i=e[o];n[t]=[o,i,Ul(i)]}return n}const ub=fb;function Eb(e,n){return function(t){return t==null?!1:t[e]===n&&(n!==void 0||e in Object(t))}}const jl=Eb;function db(e){var n=ub(e);return n.length==1&&n[0][2]?jl(n[0][0],n[0][1]):function(t){return t===e||sb(t,e,n)}}const pb=db;var _b=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,hb=/^\w*$/;function gb(e,n){if(Me(e))return!1;var t=typeof e;return t=="number"||t=="symbol"||t=="boolean"||e==null||ci(e)?!0:hb.test(e)||!_b.test(e)||n!=null&&e in Object(n)}const kr=gb;var bb="Expected a function";function Nr(e,n){if(typeof e!="function"||n!=null&&typeof n!="function")throw new TypeError(bb);var t=function(){var o=arguments,i=n?n.apply(this,o):o[0],r=t.cache;if(r.has(i))return r.get(i);var c=e.apply(this,o);return t.cache=r.set(i,c)||r,c};return t.cache=new(Nr.Cache||Ko),t}Nr.Cache=Ko;const mb=Nr;var Bb=500;function yb(e){var n=mb(e,function(o){return t.size===Bb&&t.clear(),o}),t=n.cache;return n}const Cb=yb;var vb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ib=/\\(\\)?/g,wb=Cb(function(e){var n=[];return e.charCodeAt(0)===46&&n.push(""),e.replace(vb,function(t,o,i,r){n.push(i?r.replace(Ib,"$1"):o||t)}),n});const Sb=wb;var Tb=1/0,Hl=Ye?Ye.prototype:void 0,Kl=Hl?Hl.toString:void 0;function zl(e){if(typeof e=="string")return e;if(Me(e))return Go(e,zl)+"";if(ci(e))return Kl?Kl.call(e):"";var n=e+"";return n=="0"&&1/e==-Tb?"-0":n}const Ob=zl;function Fb(e){return e==null?"":Ob(e)}const Jb=Fb;function Db(e,n){return Me(e)?e:kr(e,n)?[e]:Sb(Jb(e))}const ai=Db;var Rb=1/0;function xb(e){if(typeof e=="string"||ci(e))return e;var n=e+"";return n=="0"&&1/e==-Rb?"-0":n}const ro=xb;function Pb(e,n){n=ai(n,e);for(var t=0,o=n.length;e!=null&&t<o;)e=e[ro(n[t++])];return t&&t==o?e:void 0}const Mr=Pb;function kb(e,n,t){var o=e==null?void 0:Mr(e,n);return o===void 0?t:o}const Nb=kb;function Mb(e,n){return e!=null&&n in Object(e)}const Lb=Mb;function Ub(e,n,t){n=ai(n,e);for(var o=-1,i=n.length,r=!1;++o<i;){var c=ro(n[o]);if(!(r=e!=null&&t(e,c)))break;e=e[c]}return r||++o!=i?r:(i=e==null?0:e.length,!!i&&nr(i)&&cr(c,i)&&(Me(e)||Qi(e)))}const jb=Ub;function Hb(e,n){return e!=null&&jb(e,n,Lb)}const Wl=Hb;var Kb=1,zb=2;function Wb(e,n){return kr(e)&&Ul(n)?jl(ro(e),n):function(t){var o=Nb(t,e);return o===void 0&&o===n?Wl(t,e):ur(n,o,Kb|zb)}}const Gb=Wb;function qb(e){return function(n){return n?.[e]}}const $b=qb;function Vb(e){return function(n){return Mr(n,e)}}const Yb=Vb;function Xb(e){return kr(e)?$b(ro(e)):Yb(e)}const Qb=Xb;function Zb(e){return typeof e=="function"?e:e==null?qo:typeof e=="object"?Me(e)?Gb(e[0],e[1]):pb(e):Qb(e)}const Gl=Zb;function em(e,n){return function(t,o){var i=Me(t)?Yg:rb,r=n?n():{};return i(t,e,Gl(o,2),r)}}const nm=em;var tm=Object.prototype,om=tm.hasOwnProperty,im=nm(function(e,n,t){om.call(e,t)?e[t].push(n):Ml(e,t,[n])});const ql=im;function rm(e,n){for(var t=-1,o=e==null?0:e.length;++t<o&&n(e[t],t,e)!==!1;);return e}const cm=rm;function am(e){return typeof e=="function"?e:qo}const lm=am;function sm(e,n){var t=Me(e)?cm:Ll;return t(e,lm(n))}const Am=sm;function fm(e){const n=ql(e,"teamId"),t={};return Am(n,(o,i)=>{t[i]=ql(n[i],"channel")}),t}function um(e){return!e.channelName||e.channelName.startsWith("#")||e.channelName.includes(" ")?e:{...e,channelName:`#${e.channelName}`}}function Em(e){if(e&&e.authorName)return e;if(e&&(e.content||"").startsWith("<img"))return Oe.warn("ensureAuthorName: not able to resolve author name, either content is empty or content is html"),e;{const n={...e},t=n.content?.match(/.*?:/);return t&&t.length>0&&(n.authorName=t[0].slice(0,t[0].length-1),n.content=n.content?.replace(t[0],"")),Oe.info("ensureAuthorName: notification payload does not contain author name, match possible name instead"),n}}const dm=Object.prototype.hasOwnProperty;function pm(e,n){if(Object.is(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;const t=Object.keys(e),o=Object.keys(n);if(t.length!==o.length)return!1;for(let i=0;i<t.length;i++)if(!dm.call(n,t[i])||!Object.is(e[t[i]],n[t[i]]))return!1;return!0}function _m(e){const n=cn(e);return!pm(e,n.current)&&!Er(e,n.current)&&(n.current=e),n.current}function Lr(e,n){Xe(e,[_m(n)])}function co(e){return Bg(e,Er)}const hm=()=>{const e=co(n=>n.settings.locale);Lr(()=>{async function n(){e&&await window.desktop.intl.applyLocale(e)}n()},[e])};var li=z(4183),gt={};gt.styleTagTransform=Wt(),gt.setAttributes=Kt(),gt.insert=Ht().bind(null,"head"),gt.domAPI=jt(),gt.insertStyleElement=zt();var Uv=Ut()(li.A,gt);const jv=li.A&&li.A.locals?li.A.locals:void 0;var gm=Object.prototype,bm=gm.hasOwnProperty;function mm(e,n,t){var o=e[n];(!(bm.call(e,n)&&$i(o,t))||t===void 0&&!(n in e))&&Ml(e,n,t)}const Bm=mm;function ym(e,n,t,o){if(!Dn(e))return e;n=ai(n,e);for(var i=-1,r=n.length,c=r-1,a=e;a!=null&&++i<r;){var l=ro(n[i]),s=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return e;if(i!=c){var A=a[l];s=o?o(A,l,a):void 0,s===void 0&&(s=Dn(A)?A:cr(n[i+1])?[]:{})}Bm(a,l,s),a=a[l]}return e}const Cm=ym;function vm(e,n,t){for(var o=-1,i=n.length,r={};++o<i;){var c=n[o],a=Mr(e,c);t(a,c)&&Cm(r,ai(c,e),a)}return r}const Im=vm;function wm(e,n){return Im(e,n,function(t,o){return Wl(e,o)})}const Sm=wm;function Tm(e){var n=e==null?0:e.length;return n?Zi(e,1):[]}const Om=Tm;function Fm(e){return ba(ga(e,void 0,Om),e+"")}var Jm=Fm(function(e,n){return e==null?{}:Sm(e,n)});const Dm=Jm;var Rm=Math.min;function xm(e,n,t){for(var o=t?Yi:Vi,i=e[0].length,r=e.length,c=r,a=Array(r),l=1/0,s=[];c--;){var A=e[c];c&&n&&(A=Go(A,Xi(n))),l=Rm(A.length,l),a[c]=!t&&(n||i>=120&&A.length>=120)?new Wo(c&&A):void 0}A=e[0];var f=-1,E=a[0];e:for(;++f<i&&s.length<l;){var d=A[f],p=n?n(d):d;if(d=t||d!==0?d:0,!(E?Xt(E,p):o(s,p,t))){for(c=r;--c;){var g=a[c];if(!(g?Xt(g,p):o(e[c],p,t)))continue e}E&&E.push(p),s.push(d)}}return s}const Pm=xm;function km(e){return Qt(e)?e:[]}const Nm=km;var Mm=er(function(e){var n=Go(e,Nm);return n.length&&n[0]===e[0]?Pm(n):[]});const Lm=Mm;function Um(e,n){for(var t,o=-1,i=e.length;++o<i;){var r=n(e[o]);r!==void 0&&(t=t===void 0?r:t+r)}return t}const jm=Um;function Hm(e,n){return e&&e.length?jm(e,Gl(n,2)):0}const $l=Hm;function Km(e,n){return e.teams[n]}const zm=e=>e.length===2,Vl=e=>{const n=e.split("@");return zm(n)?n:void 0},Yl=ke(e=>e?.teams??{},e=>{const n=Object.values(e).find(t=>t&&t.version);return n?n.version:void 0}),Kv=ke([Yl],e=>{if(!e)return;const n=Vl(e);return n?n[0]:void 0}),zv=ke([Yl],e=>{if(!e)return;const n=Vl(e);if(!n)return;const t=Number.parseInt(n[1],10);return Number.isNaN(t)?void 0:t}),Wv=ke(e=>e?.teams??{},e=>{const n=Object.values(e).find(t=>t&&t.frontendBuildType);return n?n.frontendBuildType:void 0}),Wm=ke(e=>e,e=>Object.entries(e).reduce((n,[t,o])=>(n[t]={...o.unreads,teamId:t},n),{})),Ur="*",Gv=ke(e=>e?.teams??{},e=>Object.values(e).map(n=>n?.connectivityPrefs?.ntlmCredentialDomains||Ur).find(n=>n!==Ur)||Ur),qv=ke([e=>e.webapp?.teams??{},e=>e.workspaces],(e,n)=>Dm(e,Lm(...[e,n].map(Object.keys)))),Gm=ke([e=>e.webapp?e.webapp.teams:{},e=>e.workspacesMeta.selectedWorkspaceId],(e,n)=>n?e?.[n]:null),$v=ke([Gm,e=>e.settings.locale],(e,n)=>e?e.locale:n),Vv=ke([Wm],e=>{const n=Object.values(e),t=Object.keys(e).some(o=>{const{showBullet:i,unreads:r}=e[o];return i&&r>0});return{unreads:$l(n,({unreads:o})=>o||0),unreadHighlights:$l(n,({unreadHighlights:o})=>o||0),showBullet:t}});function ge(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Yv=null,Xl=null,jr=()=>Math.random().toString(36).substring(7).split("").join("."),Xv={INIT:`@@redux/INIT${jr()}`,REPLACE:`@@redux/REPLACE${jr()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${jr()}`},bt=null;function Hr(e){if(typeof e!="object"||e===null)return!1;let n=e;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(e)===n||Object.getPrototypeOf(e)===null}function Qv(e){if(e===void 0)return"undefined";if(e===null)return"null";const n=typeof e;switch(n){case"boolean":case"string":case"number":case"symbol":case"function":return n}if(Array.isArray(e))return"array";if(Vm(e))return"date";if($m(e))return"error";const t=qm(e);switch(t){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return t}return Object.prototype.toString.call(e).slice(8,-1).toLowerCase().replace(/\s/g,"")}function qm(e){return typeof e.constructor=="function"?e.constructor.name:null}function $m(e){return e instanceof Error||typeof e.message=="string"&&e.constructor&&typeof e.constructor.stackTraceLimit=="number"}function Vm(e){return e instanceof Date?!0:typeof e.toDateString=="function"&&typeof e.getDate=="function"&&typeof e.setDate=="function"}function Ym(e){return typeof e}function Ql(e,n,t){if(typeof e!="function")throw new Error(ge(2));if(typeof n=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ge(0));if(typeof n=="function"&&typeof t>"u"&&(t=n,n=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ge(1));return t(Ql)(e,n)}let o=e,i=n,r=new Map,c=r,a=0,l=!1;function s(){c===r&&(c=new Map,r.forEach((b,h)=>{c.set(h,b)}))}function A(){if(l)throw new Error(ge(3));return i}function f(b){if(typeof b!="function")throw new Error(ge(4));if(l)throw new Error(ge(5));let h=!0;s();const m=a++;return c.set(m,b),function(){if(h){if(l)throw new Error(ge(6));h=!1,s(),c.delete(m),r=null}}}function E(b){if(!Hr(b))throw new Error(ge(7));if(typeof b.type>"u")throw new Error(ge(8));if(typeof b.type!="string")throw new Error(ge(17));if(l)throw new Error(ge(9));try{l=!0,i=o(i,b)}finally{l=!1}return(r=c).forEach(m=>{m()}),b}function d(b){if(typeof b!="function")throw new Error(ge(10));o=b,E({type:bt.REPLACE})}function p(){const b=f;return{subscribe(h){if(typeof h!="object"||h===null)throw new Error(ge(11));function m(){const C=h;C.next&&C.next(A())}return m(),{unsubscribe:b(m)}},[Xl](){return this}}}return E({type:bt.INIT}),{dispatch:E,subscribe:f,getState:A,replaceReducer:d,[Xl]:p}}function Zv(e,n,t){return Ql(e,n,t)}function eI(e){typeof console<"u"&&typeof console.error=="function"&&console.error(e);try{throw new Error(e)}catch{}}function nI(e,n,t,o){const i=Object.keys(n),r=t&&t.type===bt.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(i.length===0)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!Hr(e))return`The ${r} has unexpected type of "${Ym(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;const c=Object.keys(e).filter(a=>!n.hasOwnProperty(a)&&!o[a]);if(c.forEach(a=>{o[a]=!0}),!(t&&t.type===bt.REPLACE)&&c.length>0)return`Unexpected ${c.length>1?"keys":"key"} "${c.join('", "')}" found in ${r}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`}function Xm(e){Object.keys(e).forEach(n=>{const t=e[n];if(typeof t(void 0,{type:bt.INIT})>"u")throw new Error(ge(12));if(typeof t(void 0,{type:bt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ge(13))})}function tI(e){const n=Object.keys(e),t={};for(let c=0;c<n.length;c++){const a=n[c];typeof e[a]=="function"&&(t[a]=e[a])}const o=Object.keys(t);let i,r;try{Xm(t)}catch(c){r=c}return function(a={},l){if(r)throw r;let s=!1;const A={};for(let f=0;f<o.length;f++){const E=o[f],d=t[E],p=a[E],g=d(p,l);if(typeof g>"u"){const b=l&&l.type;throw new Error(ge(14))}A[E]=g,s=s||g!==p}return s=s||o.length!==Object.keys(a).length,s?A:a}}function Zl(e,n){return function(...t){return n(e.apply(this,t))}}function oI(e,n){if(typeof e=="function")return Zl(e,n);if(typeof e!="object"||e===null)throw new Error(ge(16));const t={};for(const o in e){const i=e[o];typeof i=="function"&&(t[o]=Zl(i,n))}return t}function Kr(...e){return e.length===0?n=>n:e.length===1?e[0]:e.reduce((n,t)=>(...o)=>n(t(...o)))}function iI(...e){return n=>(t,o)=>{const i=n(t,o);let r=()=>{throw new Error(ge(15))};const c={getState:i.getState,dispatch:(l,...s)=>r(l,...s)},a=e.map(l=>l(c));return r=Kr(...a)(i.dispatch),{...i,dispatch:r}}}function Qm(e){return Hr(e)&&"type"in e&&typeof e.type=="string"}var zr=Symbol.for("immer-nothing"),ao=Symbol.for("immer-draftable"),Q=Symbol.for("immer-state"),rI=[];function be(e,...n){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var jn=Object.getPrototypeOf;function sn(e){return!!e&&!!e[Q]}function Le(e){return e?es(e)||Array.isArray(e)||!!e[ao]||!!e.constructor?.[ao]||so(e)||Ao(e):!1}var Zm=Object.prototype.constructor.toString();function es(e){if(!e||typeof e!="object")return!1;const n=jn(e);if(n===null)return!0;const t=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Zm}function cI(e){return sn(e)||be(15,e),e[Q].base_}function mt(e,n){Hn(e)===0?Reflect.ownKeys(e).forEach(t=>{n(t,e[t],e)}):e.forEach((t,o)=>n(o,t,e))}function Hn(e){const n=e[Q];return n?n.type_:Array.isArray(e)?1:so(e)?2:Ao(e)?3:0}function lo(e,n){return Hn(e)===2?e.has(n):Object.prototype.hasOwnProperty.call(e,n)}function Wr(e,n){return Hn(e)===2?e.get(n):e[n]}function ns(e,n,t){const o=Hn(e);o===2?e.set(n,t):o===3?e.add(t):e[n]=t}function eB(e,n){return e===n?e!==0||1/e===1/n:e!==e&&n!==n}function so(e){return e instanceof Map}function Ao(e){return e instanceof Set}function me(e){return e.copy_||e.base_}function Gr(e,n){if(so(e))return new Map(e);if(Ao(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!n&&es(e))return jn(e)?{...e}:Object.assign(Object.create(null),e);const t=Object.getOwnPropertyDescriptors(e);delete t[Q];let o=Reflect.ownKeys(t);for(let i=0;i<o.length;i++){const r=o[i],c=t[r];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(t[r]={configurable:!0,writable:!0,enumerable:c.enumerable,value:e[r]})}return Object.create(jn(e),t)}function qr(e,n=!1){return si(e)||sn(e)||!Le(e)||(Hn(e)>1&&(e.set=e.add=e.clear=e.delete=nB),Object.freeze(e),n&&Object.entries(e).forEach(([t,o])=>qr(o,!0))),e}function nB(){be(2)}function si(e){return Object.isFrozen(e)}var $r={};function Kn(e){const n=$r[e];return n||be(0,e),n}function ts(e,n){$r[e]||($r[e]=n)}var fo;function Ai(){return fo}function tB(e,n){return{drafts_:[],parent_:e,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function os(e,n){n&&(Kn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=n)}function Vr(e){Yr(e),e.drafts_.forEach(oB),e.drafts_=null}function Yr(e){e===fo&&(fo=e.parent_)}function is(e){return fo=tB(fo,e)}function oB(e){const n=e[Q];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function rs(e,n){n.unfinalizedDrafts_=n.drafts_.length;const t=n.drafts_[0];return e!==void 0&&e!==t?(t[Q].modified_&&(Vr(n),be(4)),Le(e)&&(e=fi(n,e),n.parent_||ui(n,e)),n.patches_&&Kn("Patches").generateReplacementPatches_(t[Q].base_,e,n.patches_,n.inversePatches_)):e=fi(n,t,[]),Vr(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),e!==zr?e:void 0}function fi(e,n,t){if(si(n))return n;const o=n[Q];if(!o)return mt(n,(i,r)=>cs(e,o,n,i,r,t)),n;if(o.scope_!==e)return n;if(!o.modified_)return ui(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const i=o.copy_;let r=i,c=!1;o.type_===3&&(r=new Set(i),i.clear(),c=!0),mt(r,(a,l)=>cs(e,o,i,a,l,t,c)),ui(e,i,!1),t&&e.patches_&&Kn("Patches").generatePatches_(o,t,e.patches_,e.inversePatches_)}return o.copy_}function cs(e,n,t,o,i,r,c){if(sn(i)){const a=r&&n&&n.type_!==3&&!lo(n.assigned_,o)?r.concat(o):void 0,l=fi(e,i,a);if(ns(t,o,l),sn(l))e.canAutoFreeze_=!1;else return}else c&&t.add(i);if(Le(i)&&!si(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;fi(e,i),(!n||!n.scope_.parent_)&&typeof o!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,o)&&ui(e,i)}}function ui(e,n,t=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&qr(n,t)}function iB(e,n){const t=Array.isArray(e),o={type_:t?1:0,scope_:n?n.scope_:Ai(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=o,r=Xr;t&&(i=[o],r=uo);const{revoke:c,proxy:a}=Proxy.revocable(i,r);return o.draft_=a,o.revoke_=c,a}var Xr={get(e,n){if(n===Q)return e;const t=me(e);if(!lo(t,n))return rB(e,t,n);const o=t[n];return e.finalized_||!Le(o)?o:o===Qr(e.base_,n)?(Zr(e),e.copy_[n]=Eo(o,e)):o},has(e,n){return n in me(e)},ownKeys(e){return Reflect.ownKeys(me(e))},set(e,n,t){const o=as(me(e),n);if(o?.set)return o.set.call(e.draft_,t),!0;if(!e.modified_){const i=Qr(me(e),n),r=i?.[Q];if(r&&r.base_===t)return e.copy_[n]=t,e.assigned_[n]=!1,!0;if(eB(t,i)&&(t!==void 0||lo(e.base_,n)))return!0;Zr(e),An(e)}return e.copy_[n]===t&&(t!==void 0||n in e.copy_)||Number.isNaN(t)&&Number.isNaN(e.copy_[n])||(e.copy_[n]=t,e.assigned_[n]=!0),!0},deleteProperty(e,n){return Qr(e.base_,n)!==void 0||n in e.base_?(e.assigned_[n]=!1,Zr(e),An(e)):delete e.assigned_[n],e.copy_&&delete e.copy_[n],!0},getOwnPropertyDescriptor(e,n){const t=me(e),o=Reflect.getOwnPropertyDescriptor(t,n);return o&&{writable:!0,configurable:e.type_!==1||n!=="length",enumerable:o.enumerable,value:t[n]}},defineProperty(){be(11)},getPrototypeOf(e){return jn(e.base_)},setPrototypeOf(){be(12)}},uo={};mt(Xr,(e,n)=>{uo[e]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}}),uo.deleteProperty=function(e,n){return uo.set.call(this,e,n,void 0)},uo.set=function(e,n,t){return Xr.set.call(this,e[0],n,t,e[0])};function Qr(e,n){const t=e[Q];return(t?me(t):e)[n]}function rB(e,n,t){const o=as(n,t);return o?"value"in o?o.value:o.get?.call(e.draft_):void 0}function as(e,n){if(!(n in e))return;let t=jn(e);for(;t;){const o=Object.getOwnPropertyDescriptor(t,n);if(o)return o;t=jn(t)}}function An(e){e.modified_||(e.modified_=!0,e.parent_&&An(e.parent_))}function Zr(e){e.copy_||(e.copy_=Gr(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var cB=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,t,o)=>{if(typeof n=="function"&&typeof t!="function"){const r=t;t=n;const c=this;return function(l=r,...s){return c.produce(l,A=>t.call(this,A,...s))}}typeof t!="function"&&be(6),o!==void 0&&typeof o!="function"&&be(7);let i;if(Le(n)){const r=is(this),c=Eo(n,void 0);let a=!0;try{i=t(c),a=!1}finally{a?Vr(r):Yr(r)}return os(r,o),rs(i,r)}else if(!n||typeof n!="object"){if(i=t(n),i===void 0&&(i=n),i===zr&&(i=void 0),this.autoFreeze_&&qr(i,!0),o){const r=[],c=[];Kn("Patches").generateReplacementPatches_(n,i,r,c),o(r,c)}return i}else be(1,n)},this.produceWithPatches=(n,t)=>{if(typeof n=="function")return(c,...a)=>this.produceWithPatches(c,l=>n(l,...a));let o,i;return[this.produce(n,t,(c,a)=>{o=c,i=a}),o,i]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Le(e)||be(8),sn(e)&&(e=aB(e));const n=is(this),t=Eo(e,void 0);return t[Q].isManual_=!0,Yr(n),t}finishDraft(e,n){const t=e&&e[Q];(!t||!t.isManual_)&&be(9);const{scope_:o}=t;return os(o,n),rs(void 0,o)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,n){let t;for(t=n.length-1;t>=0;t--){const i=n[t];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}t>-1&&(n=n.slice(t+1));const o=Kn("Patches").applyPatches_;return sn(e)?o(e,n):this.produce(e,i=>o(i,n))}};function Eo(e,n){const t=so(e)?Kn("MapSet").proxyMap_(e,n):Ao(e)?Kn("MapSet").proxySet_(e,n):iB(e,n);return(n?n.scope_:Ai()).drafts_.push(t),t}function aB(e){return sn(e)||be(10,e),ls(e)}function ls(e){if(!Le(e)||si(e))return e;const n=e[Q];let t;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,t=Gr(e,n.scope_.immer_.useStrictShallowCopy_)}else t=Gr(e,!0);return mt(t,(o,i)=>{ns(t,o,ls(i))}),n&&(n.finalized_=!1),t}function aI(){const n="replace",t="add",o="remove";function i(E,d,p,g){switch(E.type_){case 0:case 2:return c(E,d,p,g);case 1:return r(E,d,p,g);case 3:return a(E,d,p,g)}}function r(E,d,p,g){let{base_:b,assigned_:h}=E,m=E.copy_;m.length<b.length&&([b,m]=[m,b],[p,g]=[g,p]);for(let B=0;B<b.length;B++)if(h[B]&&m[B]!==b[B]){const C=d.concat([B]);p.push({op:n,path:C,value:f(m[B])}),g.push({op:n,path:C,value:f(b[B])})}for(let B=b.length;B<m.length;B++){const C=d.concat([B]);p.push({op:t,path:C,value:f(m[B])})}for(let B=m.length-1;b.length<=B;--B){const C=d.concat([B]);g.push({op:o,path:C})}}function c(E,d,p,g){const{base_:b,copy_:h}=E;mt(E.assigned_,(m,B)=>{const C=Wr(b,m),x=Wr(h,m),P=B?lo(b,m)?n:t:o;if(C===x&&P===n)return;const R=d.concat(m);p.push(P===o?{op:P,path:R}:{op:P,path:R,value:x}),g.push(P===t?{op:o,path:R}:P===o?{op:t,path:R,value:f(C)}:{op:n,path:R,value:f(C)})})}function a(E,d,p,g){let{base_:b,copy_:h}=E,m=0;b.forEach(B=>{if(!h.has(B)){const C=d.concat([m]);p.push({op:o,path:C,value:B}),g.unshift({op:t,path:C,value:B})}m++}),m=0,h.forEach(B=>{if(!b.has(B)){const C=d.concat([m]);p.push({op:t,path:C,value:B}),g.unshift({op:o,path:C,value:B})}m++})}function l(E,d,p,g){p.push({op:n,path:[],value:d===zr?void 0:d}),g.push({op:n,path:[],value:E})}function s(E,d){return d.forEach(p=>{const{path:g,op:b}=p;let h=E;for(let x=0;x<g.length-1;x++){const P=Hn(h);let R=g[x];typeof R!="string"&&typeof R!="number"&&(R=""+R),(P===0||P===1)&&(R==="__proto__"||R==="constructor")&&be(19),typeof h=="function"&&R==="prototype"&&be(19),h=Wr(h,R),typeof h!="object"&&be(18,g.join("/"))}const m=Hn(h),B=A(p.value),C=g[g.length-1];switch(b){case n:switch(m){case 2:return h.set(C,B);case 3:be(16);default:return h[C]=B}case t:switch(m){case 1:return C==="-"?h.push(B):h.splice(C,0,B);case 2:return h.set(C,B);case 3:return h.add(B);default:return h[C]=B}case o:switch(m){case 1:return h.splice(C,1);case 2:return h.delete(C);case 3:return h.delete(p.value);default:return delete h[C]}default:be(17,b)}}),E}function A(E){if(!Le(E))return E;if(Array.isArray(E))return E.map(A);if(so(E))return new Map(Array.from(E.entries()).map(([p,g])=>[p,A(g)]));if(Ao(E))return new Set(Array.from(E).map(A));const d=Object.create(jn(E));for(const p in E)d[p]=A(E[p]);return lo(E,ao)&&(d[ao]=E[ao]),d}function f(E){return sn(E)?A(E):E}ts("Patches",{applyPatches_:s,generatePatches_:i,generateReplacementPatches_:l})}function lI(){class e extends Map{constructor(l,s){super(),this[Q]={type_:2,parent_:s,scope_:s?s.scope_:Ai(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:l,draft_:this,isManual_:!1,revoked_:!1}}get size(){return me(this[Q]).size}has(l){return me(this[Q]).has(l)}set(l,s){const A=this[Q];return c(A),(!me(A).has(l)||me(A).get(l)!==s)&&(t(A),An(A),A.assigned_.set(l,!0),A.copy_.set(l,s),A.assigned_.set(l,!0)),this}delete(l){if(!this.has(l))return!1;const s=this[Q];return c(s),t(s),An(s),s.base_.has(l)?s.assigned_.set(l,!1):s.assigned_.delete(l),s.copy_.delete(l),!0}clear(){const l=this[Q];c(l),me(l).size&&(t(l),An(l),l.assigned_=new Map,mt(l.base_,s=>{l.assigned_.set(s,!1)}),l.copy_.clear())}forEach(l,s){const A=this[Q];me(A).forEach((f,E,d)=>{l.call(s,this.get(E),E,this)})}get(l){const s=this[Q];c(s);const A=me(s).get(l);if(s.finalized_||!Le(A)||A!==s.base_.get(l))return A;const f=Eo(A,s);return t(s),s.copy_.set(l,f),f}keys(){return me(this[Q]).keys()}values(){const l=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const s=l.next();return s.done?s:{done:!1,value:this.get(s.value)}}}}entries(){const l=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const s=l.next();if(s.done)return s;const A=this.get(s.value);return{done:!1,value:[s.value,A]}}}}[Symbol.iterator](){return this.entries()}}function n(a,l){return new e(a,l)}function t(a){a.copy_||(a.assigned_=new Map,a.copy_=new Map(a.base_))}class o extends Set{constructor(l,s){super(),this[Q]={type_:3,parent_:s,scope_:s?s.scope_:Ai(),modified_:!1,finalized_:!1,copy_:void 0,base_:l,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return me(this[Q]).size}has(l){const s=this[Q];return c(s),s.copy_?!!(s.copy_.has(l)||s.drafts_.has(l)&&s.copy_.has(s.drafts_.get(l))):s.base_.has(l)}add(l){const s=this[Q];return c(s),this.has(l)||(r(s),An(s),s.copy_.add(l)),this}delete(l){if(!this.has(l))return!1;const s=this[Q];return c(s),r(s),An(s),s.copy_.delete(l)||(s.drafts_.has(l)?s.copy_.delete(s.drafts_.get(l)):!1)}clear(){const l=this[Q];c(l),me(l).size&&(r(l),An(l),l.copy_.clear())}values(){const l=this[Q];return c(l),r(l),l.copy_.values()}entries(){const l=this[Q];return c(l),r(l),l.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(l,s){const A=this.values();let f=A.next();for(;!f.done;)l.call(s,f.value,f.value,this),f=A.next()}}function i(a,l){return new o(a,l)}function r(a){a.copy_||(a.copy_=new Set,a.base_.forEach(l=>{if(Le(l)){const s=Eo(l,a);a.drafts_.set(l,s),a.copy_.add(s)}else a.copy_.add(l)}))}function c(a){a.revoked_&&be(3,JSON.stringify(me(a)))}ts("MapSet",{proxyMap_:n,proxySet_:i})}var Ne=new cB,ss=Ne.produce,sI=Ne.produceWithPatches.bind(Ne),AI=Ne.setAutoFreeze.bind(Ne),fI=Ne.setUseStrictShallowCopy.bind(Ne),uI=Ne.applyPatches.bind(Ne),EI=Ne.createDraft.bind(Ne),dI=Ne.finishDraft.bind(Ne);function pI(e){return e}function _I(e){return e}var lB,sB,AB,hI,fB,uB,EB,dB,pB,_B,hB,gB,bB,gI,mB,BB,yB,CB,vB,IB,bI=(...e)=>{const n=AB(...e),t=Object.assign((...o)=>{const i=n(...o),r=(c,...a)=>i(lB(c)?sB(c):c,...a);return Object.assign(r,i),r},{withTypes:()=>t});return t},wB=null,SB=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Kr:Kr.apply(null,arguments)},mI=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(e){return e}},As=e=>e&&typeof e.match=="function";function Ue(e,n){function t(...o){if(n){let i=n(...o);if(!i)throw new Error(Ce(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:o[0]}}return t.toString=()=>`${e}`,t.type=e,t.match=o=>Qm(o)&&o.type===e,t}function BI(e){return typeof e=="function"&&"type"in e&&As(e)}function TB(e){return gB(e)&&Object.keys(e).every(OB)}function OB(e){return["type","payload","error","meta"].indexOf(e)>-1}function yI(e){const n=e?`${e}`.split("/"):[],t=n[n.length-1]||"actionCreator";return`Detected an action creator with type "${e||"unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${t}())\` instead of \`dispatch(${t})\`. This is necessary even if the action has no payload.`}function CI(e={}){return()=>n=>t=>n(t)}function vI(e,n){let t=0;return{measureTime(o){const i=Date.now();try{return o()}finally{const r=Date.now();t+=r-i}},warnIfExceeded(){t>e&&console.warn(`${n} took ${t}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`)}}}function ec(e,n){for(const t of e)if(n(t))return t}var fs=class Do extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,Do.prototype)}static get[Symbol.species](){return Do}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new Do(...n[0].concat(this)):new Do(...n.concat(this))}};function us(e){return Le(e)?ss(e,()=>{}):e}function Ei(e,n,t){if(e.has(n)){let i=e.get(n);return t.update&&(i=t.update(i,n,e),e.set(n,i)),i}if(!t.insert)throw new Error(Ce(10));const o=t.insert(n,e);return e.set(n,o),o}function II(e){return typeof e!="object"||e==null||Object.isFrozen(e)}function wI(e,n,t){const o=Es(e,n,t);return{detectMutations(){return ds(e,n,o,t)}}}function Es(e,n=[],t,o="",i=new Set){const r={value:t};if(!e(t)&&!i.has(t)){i.add(t),r.children={};for(const c in t){const a=o?o+"."+c:c;n.length&&n.indexOf(a)!==-1||(r.children[c]=Es(e,n,t[c],a))}}return r}function ds(e,n=[],t,o,i=!1,r=""){const c=t?t.value:void 0,a=c===o;if(i&&!a&&!Number.isNaN(o))return{wasMutated:!0,path:r};if(e(c)||e(o))return{wasMutated:!1};const l={};for(let A in t.children)l[A]=!0;for(let A in o)l[A]=!0;const s=n.length>0;for(let A in l){const f=r?r+"."+A:A;if(s&&n.some(p=>p instanceof RegExp?p.test(f):f===p))continue;const E=ds(e,n,t.children[A],o[A],a,f);if(E.wasMutated)return E}return{wasMutated:!1}}function SI(e={}){if(1)return()=>o=>i=>o(i);var n,t}function FB(e){const n=typeof e;return e==null||n==="string"||n==="boolean"||n==="number"||Array.isArray(e)||bB(e)}function JB(e,n="",t=FB,o,i=[],r){let c;if(!t(e))return{keyPath:n||"<root>",value:e};if(typeof e!="object"||e===null||r?.has(e))return!1;const a=o!=null?o(e):Object.entries(e),l=i.length>0;for(const[s,A]of a){const f=n?n+"."+s:s;if(!(l&&i.some(d=>d instanceof RegExp?d.test(f):f===d))){if(!t(A))return{keyPath:f,value:A};if(typeof A=="object"&&(c=JB(A,f,t,o,i,r),c))return c}}return r&&ps(e)&&r.add(e),!1}function ps(e){if(!Object.isFrozen(e))return!1;for(const n of Object.values(e))if(!(typeof n!="object"||n===null)&&!ps(n))return!1;return!0}function TI(e={}){return()=>n=>t=>n(t)}function DB(e){return typeof e=="boolean"}var RB=()=>function(n){const{thunk:t=!0,immutableCheck:o=!0,serializableCheck:i=!0,actionCreatorCheck:r=!0}=n??{};let c=new fs;return t&&(DB(t)?c.push(_B):c.push(hB(t.extraArgument))),c},_s="RTK_autoBatch",OI=()=>e=>({payload:e,meta:{[_s]:!0}}),hs=e=>n=>{setTimeout(n,e)},xB=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:hs(10),PB=(e={type:"raf"})=>n=>(...t)=>{const o=n(...t);let i=!0,r=!1,c=!1;const a=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?xB:e.type==="callback"?e.queueNotification:hs(e.timeout),s=()=>{c=!1,r&&(r=!1,a.forEach(A=>A()))};return Object.assign({},o,{subscribe(A){const f=()=>i&&A(),E=o.subscribe(f);return a.add(A),()=>{E(),a.delete(A)}},dispatch(A){try{return i=!A?.meta?.[_s],r=!i,r&&(c||(c=!0,l(s))),o.dispatch(A)}finally{i=!0}}})},kB=e=>function(t){const{autoBatch:o=!0}=t??{};let i=new fs(e);return o&&i.push(PB(typeof o=="object"?o:void 0)),i};function FI(e){const n=RB(),{reducer:t=void 0,middleware:o,devTools:i=!0,preloadedState:r=void 0,enhancers:c=void 0}=e||{};let a;if(typeof t=="function")a=t;else if(fB(t))a=uB(t);else throw new Error(Ce(1));let l;typeof o=="function"?l=o(n):l=n();let s=EB;i&&(s=SB({trace:!1,...typeof i=="object"&&i}));const A=dB(...l),f=kB(A);let E=typeof c=="function"?c(f):f();const d=s(...E);return pB(a,r,d)}function gs(e){const n={},t=[];let o;const i={addCase(r,c){const a=typeof r=="string"?r:r.type;if(!a)throw new Error(Ce(28));if(a in n)throw new Error(Ce(29));return n[a]=c,i},addMatcher(r,c){return t.push({matcher:r,reducer:c}),i},addDefaultCase(r){return o=r,i}};return e(i),[n,t,o]}function NB(e){return typeof e=="function"}function bs(e,n){let[t,o,i]=gs(n),r;if(NB(e))r=()=>us(e());else{const a=us(e);r=()=>a}function c(a=r(),l){let s=[t[l.type],...o.filter(({matcher:A})=>A(l)).map(({reducer:A})=>A)];return s.filter(A=>!!A).length===0&&(s=[i]),s.reduce((A,f)=>{if(f)if(sn(A)){const d=f(A,l);return d===void 0?A:d}else{if(Le(A))return ss(A,E=>f(E,l));{const E=f(A,l);if(E===void 0){if(A===null)return A;throw new Error(Ce(9))}return E}}return A},a)}return c.getInitialState=r,c}var ms=(e,n)=>As(e)?e.match(n):e(n);function po(...e){return n=>e.some(t=>ms(t,n))}function nc(...e){return n=>e.every(t=>ms(t,n))}function di(e,n){if(!e||!e.meta)return!1;const t=typeof e.meta.requestId=="string",o=n.indexOf(e.meta.requestStatus)>-1;return t&&o}function _o(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function MB(...e){return e.length===0?n=>di(n,["pending"]):_o(e)?po(...e.map(n=>n.pending)):MB()(e[0])}function tc(...e){return e.length===0?n=>di(n,["rejected"]):_o(e)?po(...e.map(n=>n.rejected)):tc()(e[0])}function LB(...e){const n=t=>t&&t.meta&&t.meta.rejectedWithValue;return e.length===0?nc(tc(...e),n):_o(e)?nc(tc(...e),n):LB()(e[0])}function UB(...e){return e.length===0?n=>di(n,["fulfilled"]):_o(e)?po(...e.map(n=>n.fulfilled)):UB()(e[0])}function jB(...e){return e.length===0?n=>di(n,["pending","fulfilled","rejected"]):_o(e)?po(...e.flatMap(n=>[n.pending,n.rejected,n.fulfilled])):jB()(e[0])}var HB="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",ho=(e=21)=>{let n="",t=e;for(;t--;)n+=HB[Math.random()*64|0];return n},KB=["name","message","stack","code"],oc=class{constructor(e,n){this.payload=e,this.meta=n}_type},Bs=class{constructor(e,n){this.payload=e,this.meta=n}_type},zB=e=>{if(typeof e=="object"&&e!==null){const n={};for(const t of KB)typeof e[t]=="string"&&(n[t]=e[t]);return n}return{message:String(e)}},WB=(()=>{function e(n,t,o){const i=Ue(n+"/fulfilled",(l,s,A,f)=>({payload:l,meta:{...f||{},arg:A,requestId:s,requestStatus:"fulfilled"}})),r=Ue(n+"/pending",(l,s,A)=>({payload:void 0,meta:{...A||{},arg:s,requestId:l,requestStatus:"pending"}})),c=Ue(n+"/rejected",(l,s,A,f,E)=>({payload:f,error:(o&&o.serializeError||zB)(l||"Rejected"),meta:{...E||{},arg:A,requestId:s,rejectedWithValue:!!f,requestStatus:"rejected",aborted:l?.name==="AbortError",condition:l?.name==="ConditionError"}}));function a(l){return(s,A,f)=>{const E=o?.idGenerator?o.idGenerator(l):ho(),d=new AbortController;let p,g;function b(m){g=m,d.abort()}const h=async function(){let m;try{let C=o?.condition?.(l,{getState:A,extra:f});if(qB(C)&&(C=await C),C===!1||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const x=new Promise((P,R)=>{p=()=>{R({name:"AbortError",message:g||"Aborted"})},d.signal.addEventListener("abort",p)});s(r(E,l,o?.getPendingMeta?.({requestId:E,arg:l},{getState:A,extra:f}))),m=await Promise.race([x,Promise.resolve(t(l,{dispatch:s,getState:A,extra:f,requestId:E,signal:d.signal,abort:b,rejectWithValue:(P,R)=>new oc(P,R),fulfillWithValue:(P,R)=>new Bs(P,R)})).then(P=>{if(P instanceof oc)throw P;return P instanceof Bs?i(P.payload,E,l,P.meta):i(P,E,l)})])}catch(C){m=C instanceof oc?c(null,E,l,C.payload,C.meta):c(C,E,l)}finally{p&&d.signal.removeEventListener("abort",p)}return o&&!o.dispatchConditionRejection&&c.match(m)&&m.meta.condition||s(m),m}();return Object.assign(h,{abort:b,requestId:E,arg:l,unwrap(){return h.then(GB)}})}}return Object.assign(a,{pending:r,rejected:c,fulfilled:i,settled:po(c,i),typePrefix:n})}return e.withTypes=()=>e,e})();function GB(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function qB(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var ys=Symbol.for("rtk-slice-createasyncthunk"),JI={[ys]:WB},$B=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))($B||{});function VB(e,n){return`${e}/${n}`}function DI({creators:e}={}){const n=e?.asyncThunk?.[ys];return function(o){const{name:i,reducerPath:r=i}=o;if(!i)throw new Error(Ce(11));typeof process<"u";const c=(typeof o.reducers=="function"?o.reducers(XB()):o.reducers)||{},a=Object.keys(c),l={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(m,B){const C=typeof m=="string"?m:m.type;if(!C)throw new Error(Ce(12));if(C in l.sliceCaseReducersByType)throw new Error(Ce(13));return l.sliceCaseReducersByType[C]=B,s},addMatcher(m,B){return l.sliceMatchers.push({matcher:m,reducer:B}),s},exposeAction(m,B){return l.actionCreators[m]=B,s},exposeCaseReducer(m,B){return l.sliceCaseReducersByName[m]=B,s}};a.forEach(m=>{const B=c[m],C={reducerName:m,type:VB(i,m),createNotation:typeof o.reducers=="function"};ZB(B)?ny(C,B,s,n):QB(C,B,s)});function A(){const[m={},B=[],C=void 0]=typeof o.extraReducers=="function"?gs(o.extraReducers):[o.extraReducers],x={...m,...l.sliceCaseReducersByType};return bs(o.initialState,P=>{for(let R in x)P.addCase(R,x[R]);for(let R of l.sliceMatchers)P.addMatcher(R.matcher,R.reducer);for(let R of B)P.addMatcher(R.matcher,R.reducer);C&&P.addDefaultCase(C)})}const f=m=>m,E=new Map;let d;function p(m,B){return d||(d=A()),d(m,B)}function g(){return d||(d=A()),d.getInitialState()}function b(m,B=!1){function C(P){let R=P[m];return typeof R>"u"&&B&&(R=g()),R}function x(P=f){const R=Ei(E,B,{insert:()=>new WeakMap});return Ei(R,P,{insert:()=>{const ce={};for(const[ee,Z]of Object.entries(o.selectors??{}))ce[ee]=YB(Z,P,g,B);return ce}})}return{reducerPath:m,getSelectors:x,get selectors(){return x(C)},selectSlice:C}}const h={name:i,reducer:p,actions:l.actionCreators,caseReducers:l.sliceCaseReducersByName,getInitialState:g,...b(r),injectInto(m,{reducerPath:B,...C}={}){const x=B??r;return m.inject({reducerPath:x,reducer:p},C),{...h,...b(x,!0)}}};return h}}function YB(e,n,t,o){function i(r,...c){let a=n(r);return typeof a>"u"&&o&&(a=t()),e(a,...c)}return i.unwrapped=e,i}var RI=null;function XB(){function e(n,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...t}}return e.withTypes=()=>e,{reducer(n){return Object.assign({[n.name](...t){return n(...t)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:t}},asyncThunk:e}}function QB({type:e,reducerName:n,createNotation:t},o,i){let r,c;if("reducer"in o){if(t&&!ey(o))throw new Error(Ce(17));r=o.reducer,c=o.prepare}else r=o;i.addCase(e,r).exposeCaseReducer(n,r).exposeAction(n,c?Ue(e,c):Ue(e))}function ZB(e){return e._reducerDefinitionType==="asyncThunk"}function ey(e){return e._reducerDefinitionType==="reducerWithPrepare"}function ny({type:e,reducerName:n},t,o,i){if(!i)throw new Error(Ce(18));const{payloadCreator:r,fulfilled:c,pending:a,rejected:l,settled:s,options:A}=t,f=i(e,r,A);o.exposeAction(n,f),c&&o.addCase(f.fulfilled,c),a&&o.addCase(f.pending,a),l&&o.addCase(f.rejected,l),s&&o.addMatcher(f.settled,s),o.exposeCaseReducer(n,{fulfilled:c||pi,pending:a||pi,rejected:l||pi,settled:s||pi})}function pi(){}function ty(){return{ids:[],entities:{}}}function oy(e){function n(t={},o){const i=Object.assign(ty(),t);return o?e.setAll(i,o):i}return{getInitialState:n}}function iy(){function e(n,t={}){const{createSelector:o=wB}=t,i=f=>f.ids,r=f=>f.entities,c=o(i,r,(f,E)=>f.map(d=>E[d])),a=(f,E)=>E,l=(f,E)=>f[E],s=o(i,f=>f.length);if(!n)return{selectIds:i,selectEntities:r,selectAll:c,selectTotal:s,selectById:o(r,a,l)};const A=o(n,r);return{selectIds:o(n,i),selectEntities:A,selectAll:o(n,c),selectTotal:o(n,s),selectById:o(A,a,l)}}return{getSelectors:e}}var ry=null;function cy(e){const n=pe((t,o)=>e(o));return function(o){return n(o,void 0)}}function pe(e){return function(t,o){function i(c){return TB(c)}const r=c=>{i(o)?e(o.payload,c):e(o,c)};return ry(t)?(r(t),t):mB(t,r)}}function Bt(e,n){return n(e)}function zn(e){return Array.isArray(e)||(e=Object.values(e)),e}function _i(e){return BB(e)?yB(e):e}function Cs(e,n,t){e=zn(e);const o=_i(t.ids),i=new Set(o),r=[],c=[];for(const a of e){const l=Bt(a,n);i.has(l)?c.push({id:l,changes:a}):r.push(a)}return[r,c,o]}function vs(e){function n(p,g){const b=Bt(p,e);b in g.entities||(g.ids.push(b),g.entities[b]=p)}function t(p,g){p=zn(p);for(const b of p)n(b,g)}function o(p,g){const b=Bt(p,e);b in g.entities||g.ids.push(b),g.entities[b]=p}function i(p,g){p=zn(p);for(const b of p)o(b,g)}function r(p,g){p=zn(p),g.ids=[],g.entities={},t(p,g)}function c(p,g){return a([p],g)}function a(p,g){let b=!1;p.forEach(h=>{h in g.entities&&(delete g.entities[h],b=!0)}),b&&(g.ids=g.ids.filter(h=>h in g.entities))}function l(p){Object.assign(p,{ids:[],entities:{}})}function s(p,g,b){const h=b.entities[g.id];if(h===void 0)return!1;const m=Object.assign({},h,g.changes),B=Bt(m,e),C=B!==g.id;return C&&(p[g.id]=B,delete b.entities[g.id]),b.entities[B]=m,C}function A(p,g){return f([p],g)}function f(p,g){const b={},h={};p.forEach(B=>{B.id in g.entities&&(h[B.id]={id:B.id,changes:{...h[B.id]?.changes,...B.changes}})}),p=Object.values(h),p.length>0&&p.filter(C=>s(b,C,g)).length>0&&(g.ids=Object.values(g.entities).map(C=>Bt(C,e)))}function E(p,g){return d([p],g)}function d(p,g){const[b,h]=Cs(p,e,g);f(h,g),t(b,g)}return{removeAll:cy(l),addOne:pe(n),addMany:pe(t),setOne:pe(o),setMany:pe(i),setAll:pe(r),updateOne:pe(A),updateMany:pe(f),upsertOne:pe(E),upsertMany:pe(d),removeOne:pe(c),removeMany:pe(a)}}function ay(e,n,t){let o=0,i=e.length;for(;o<i;){let r=o+i>>>1;const c=e[r];t(n,c)>=0?o=r+1:i=r}return o}function ly(e,n,t){const o=ay(e,n,t);return e.splice(o,0,n),e}function sy(e,n){const{removeOne:t,removeMany:o,removeAll:i}=vs(e);function r(b,h){return c([b],h)}function c(b,h,m){b=zn(b);const B=new Set(m??_i(h.ids)),C=b.filter(x=>!B.has(Bt(x,e)));C.length!==0&&g(h,C)}function a(b,h){return l([b],h)}function l(b,h){if(b=zn(b),b.length!==0){for(const m of b)delete h.entities[e(m)];g(h,b)}}function s(b,h){b=zn(b),h.entities={},h.ids=[],c(b,h,[])}function A(b,h){return f([b],h)}function f(b,h){let m=!1,B=!1;for(let C of b){const x=h.entities[C.id];if(!x)continue;m=!0,Object.assign(x,C.changes);const P=e(x);if(C.id!==P){B=!0,delete h.entities[C.id];const R=h.ids.indexOf(C.id);h.ids[R]=P,h.entities[P]=x}}m&&g(h,[],m,B)}function E(b,h){return d([b],h)}function d(b,h){const[m,B,C]=Cs(b,e,h);B.length&&f(B,h),m.length&&c(m,h,C)}function p(b,h){if(b.length!==h.length)return!1;for(let m=0;m<b.length;m++)if(b[m]!==h[m])return!1;return!0}const g=(b,h,m,B)=>{const C=_i(b.entities),x=_i(b.ids),P=b.entities;let R=x;B&&(R=new Set(x));let ce=[];for(const G of R){const we=C[G];we&&ce.push(we)}const ee=ce.length===0;for(const G of h)P[e(G)]=G,ee||ly(ce,G,n);ee?ce=h.slice().sort(n):m&&ce.sort(n);const Z=ce.map(e);p(x,Z)||(b.ids=Z)};return{removeOne:t,removeMany:o,removeAll:i,addOne:pe(r),updateOne:pe(A),upsertOne:pe(E),setOne:pe(a),setMany:pe(l),setAll:pe(s),addMany:pe(c),updateMany:pe(f),upsertMany:pe(d)}}function xI(e={}){const{selectId:n,sortComparer:t}={sortComparer:!1,selectId:c=>c.id,...e},o=t?sy(n,t):vs(n),i=oy(o),r=iy();return{selectId:n,sortComparer:t,...i,...r,...o}}var Ay="task",PI="listener",kI="completed",fy="cancelled",uy=null,Ey=null,ic=null,dy=null,hi=class{constructor(e){this.code=e,this.message=`${Ay} ${fy} (reason: ${e})`}name="TaskAbortError";message},rc=(e,n)=>{if(typeof e!="function")throw new Error(Ce(32))},gi=()=>{},Is=(e,n=gi)=>(e.catch(n),e),ws=(e,n)=>(e.addEventListener("abort",n,{once:!0}),()=>e.removeEventListener("abort",n)),Wn=(e,n)=>{const t=e.signal;t.aborted||("reason"in t||Object.defineProperty(t,"reason",{enumerable:!0,value:n,configurable:!0,writable:!0}),e.abort(n))},Gn=e=>{if(e.aborted){const{reason:n}=e;throw new hi(n)}};function Ss(e,n){let t=gi;return new Promise((o,i)=>{const r=()=>i(new hi(e.reason));if(e.aborted){r();return}t=ws(e,r),n.finally(()=>t()).then(o,i)}).finally(()=>{t=gi})}var py=async(e,n)=>{try{return await Promise.resolve(),{status:"ok",value:await e()}}catch(t){return{status:t instanceof hi?"cancelled":"rejected",error:t}}finally{n?.()}},bi=e=>n=>Is(Ss(e,n).then(t=>(Gn(e),t))),Ts=e=>{const n=bi(e);return t=>n(new Promise(o=>setTimeout(o,t)))},{assign:yt}=Object,Os={},cc="listenerMiddleware",_y=(e,n)=>{const t=o=>ws(e,()=>Wn(o,e.reason));return(o,i)=>{rc(o,"taskExecutor");const r=new AbortController;t(r);const c=py(async()=>{Gn(e),Gn(r.signal);const a=await o({pause:bi(r.signal),delay:Ts(r.signal),signal:r.signal});return Gn(r.signal),a},()=>Wn(r,Ey));return i?.autoJoin&&n.push(c.catch(gi)),{result:bi(e)(c),cancel(){Wn(r,uy)}}}},hy=(e,n)=>{const t=async(o,i)=>{Gn(n);let r=()=>{};const a=[new Promise((l,s)=>{let A=e({predicate:o,effect:(f,E)=>{E.unsubscribe(),l([f,E.getState(),E.getOriginalState()])}});r=()=>{A(),s()}})];i!=null&&a.push(new Promise(l=>setTimeout(l,i,null)));try{const l=await Ss(n,Promise.race(a));return Gn(n),l}finally{r()}};return(o,i)=>Is(t(o,i))},Fs=e=>{let{type:n,actionCreator:t,matcher:o,predicate:i,effect:r}=e;if(n)i=Ue(n).match;else if(t)n=t.type,i=t.match;else if(o)i=o;else if(!i)throw new Error(Ce(21));return rc(r,"options.listener"),{predicate:i,type:n,effect:r}},Js=yt(e=>{const{type:n,predicate:t,effect:o}=Fs(e);return{id:ho(),effect:o,type:n,predicate:t,pending:new Set,unsubscribe:()=>{throw new Error(Ce(22))}}},{withTypes:()=>Js}),ac=e=>{e.pending.forEach(n=>{Wn(n,ic)})},gy=e=>()=>{e.forEach(ac),e.clear()},Ds=(e,n,t)=>{try{e(n,t)}catch(o){setTimeout(()=>{throw o},0)}},Rs=yt(Ue(`${cc}/add`),{withTypes:()=>Rs}),by=null,xs=yt(Ue(`${cc}/remove`),{withTypes:()=>xs}),my=(...e)=>{console.error(`${cc}/error`,...e)},NI=(e={})=>{const n=new Map,{extra:t,onError:o=my}=e;rc(o,"onError");const i=A=>(A.unsubscribe=()=>n.delete(A.id),n.set(A.id,A),f=>{A.unsubscribe(),f?.cancelActive&&ac(A)}),r=A=>{let f=ec(Array.from(n.values()),E=>E.effect===A.effect);return f||(f=Js(A)),i(f)};yt(r,{withTypes:()=>r});const c=A=>{const{type:f,effect:E,predicate:d}=Fs(A),p=ec(Array.from(n.values()),g=>(typeof f=="string"?g.type===f:g.predicate===d)&&g.effect===E);return p&&(p.unsubscribe(),A.cancelActive&&ac(p)),!!p};yt(c,{withTypes:()=>c});const a=async(A,f,E,d)=>{const p=new AbortController,g=hy(r,p.signal),b=[];try{A.pending.add(p),await Promise.resolve(A.effect(f,yt({},E,{getOriginalState:d,condition:(h,m)=>g(h,m).then(Boolean),take:g,delay:Ts(p.signal),pause:bi(p.signal),extra:t,signal:p.signal,fork:_y(p.signal,b),unsubscribe:A.unsubscribe,subscribe:()=>{n.set(A.id,A)},cancelActiveListeners:()=>{A.pending.forEach((h,m,B)=>{h!==p&&(Wn(h,ic),B.delete(h))})},cancel:()=>{Wn(p,ic),A.pending.delete(p)},throwIfCancelled:()=>{Gn(p.signal)}})))}catch(h){h instanceof hi||Ds(o,h,{raisedBy:"effect"})}finally{await Promise.all(b),Wn(p,dy),A.pending.delete(p)}},l=gy(n);return{middleware:A=>f=>E=>{if(!CB(E))return f(E);if(Rs.match(E))return r(E.payload);if(by.match(E)){l();return}if(xs.match(E))return c(E.payload);let d=A.getState();const p=()=>{if(d===Os)throw new Error(Ce(23));return d};let g;try{if(g=f(E),n.size>0){const b=A.getState(),h=Array.from(n.values());for(const m of h){let B=!1;try{B=m.predicate(E,b,d)}catch(C){B=!1,Ds(o,C,{raisedBy:"predicate"})}B&&a(m,E,A,p)}}}finally{d=Os}return g},startListening:r,stopListening:c,clearListeners:l}},By=e=>({id:ho(),middleware:e,applied:new Map}),yy=e=>n=>n?.meta?.instanceId===e,MI=()=>{const e=ho(),n=new Map,t=Object.assign(Ue("dynamicMiddleware/add",(...a)=>({payload:a,meta:{instanceId:e}})),{withTypes:()=>t}),o=Object.assign(function(...l){l.forEach(s=>{let A=ec(Array.from(n.values()),f=>f.middleware===s);A||(A=By(s)),n.set(A.id,A)})},{withTypes:()=>o}),i=a=>{const l=Array.from(n.values()).map(s=>Ei(s.applied,a,{insert:()=>s.middleware(a)}));return vB(...l)},r=nc(t,yy(e));return{middleware:a=>l=>s=>r(s)?(o(...s.payload),a.dispatch):i(a)(l)(s),addMiddleware:o,withMiddleware:t,instanceId:e}},Cy=e=>"reducerPath"in e&&typeof e.reducerPath=="string",vy=e=>e.flatMap(n=>Cy(n)?[[n.reducerPath,n.reducer]]:Object.entries(n)),lc=Symbol.for("rtk-state-proxy-original"),Iy=e=>!!e&&!!e[lc],wy=new WeakMap,Sy=(e,n)=>Ei(wy,e,{insert:()=>new Proxy(e,{get:(t,o,i)=>{if(o===lc)return t;const r=Reflect.get(t,o,i);if(typeof r>"u"){const c=n[o.toString()];if(c){const a=c(void 0,{type:ho()});if(typeof a>"u")throw new Error(Ce(24));return a}}return r}})}),Ty=e=>{if(!Iy(e))throw new Error(Ce(25));return e[lc]},Oy=(e={})=>e;function LI(...e){const n=Object.fromEntries(vy(e)),t=()=>Object.keys(n).length?IB(n):Oy;let o=t();function i(a,l){return o(a,l)}i.withLazyLoadedSlices=()=>i;const r=(a,l={})=>{const{reducerPath:s,reducer:A}=a,f=n[s];return!l.overrideExisting&&f&&f!==A?(typeof process<"u",i):(n[s]=A,o=t(),i)},c=Object.assign(function(l,s){return function(f,...E){return l(Sy(s?s(f,...E):f,n),...E)}},{original:Ty});return Object.assign(i,{inject:r,selector:c})}function Ce(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Fy=(e=>(e.JA_JP="ja-JP",e.EN_US="en-US",e.EN_GB="en-GB",e.ES_ES="es-ES",e.ES_LA="es-LA",e.FR_FR="fr-FR",e.DE_DE="de-DE",e.PT_BR="pt-BR",e.KO_KR="ko-KR",e.IT_IT="it-IT",e.ZH_CN="zh-CN",e.ZH_TW="zh-TW",e))(Fy||{});const Jy="en-US";var Ps=(e=>(e.ANIMAL_STICK="animal_stick.mp3",e.B2="b2.mp3",e.BEEN_TREE="been_tree.mp3",e.BOOP="boop.mp3",e.COMPLETE_QUEST_REQUIREMENT="complete_quest_requirement.mp3",e.CONFIRM_DELIVERY="confirm_delivery.mp3",e.FLITTERBUG="flitterbug.mp3",e.HERE_YOU_GO_LIGHTER="here_you_go_lighter.mp3",e.HI_FLOWERS_HIT="hi_flowers_hit.mp3",e.HUMMUS="hummus.mp3",e.ITEM_PICKUP="item_pickup.mp3",e.KNOCK_BRUSH="knock_brush.mp3",e.SAVE_AND_CHECKOUT="save_and_checkout.mp3",e))(Ps||{});function Dy(e,...n){return(n??[]).flat().reduce((t,o)=>(delete t[o],t),{...e??{}})}var Ry=(e=>(e.CUSTOM_MENU_ITEM_CLICKED="CUSTOM_MENU_ITEM_CLICKED",e.DISPLAY_ADDED="DISPLAY_ADDED",e.DISPLAY_METRICS_CHANGED="DISPLAY_METRICS_CHANGED",e.DISPLAY_REMOVED="DISPLAY_REMOVED",e.MARK_DEVTOOLS_STATE="MARK_DEVTOOLS_STATE",e.POWER_RESUMED="POWER_RESUMED",e.SET_ACCESSIBILITY_SUPPORT_ENABLED="SET_ACCESSIBILITY_SUPPORT_ENABLED",e.SET_CUSTOM_MENU_ITEMS="SET_CUSTOM_MENU_ITEMS",e.SET_NET_LOG_STATUS="SET_NET_LOG_STATUS",e.SET_NETWORK_STATUS="SET_NETWORK_STATUS",e.SET_HW_ACCEL_AVAILABILITY="SET_HW_ACCEL_AVAILABILITY",e.SET_SUSPEND_STATUS="SET_SUSPEND_STATUS",e.SET_SYSTEM_IDLE="SET_SYSTEM_IDLE",e.SET_SYSTEM_LOCKED="SET_SYSTEM_LOCKED",e.SET_SYSTEM_TRANSPARENCY="SET_SYSTEM_TRANSPARENCY",e.SET_UPDATE_STATUS="SET_UPDATE_STATUS",e.SET_UPDATE_SUPPORTED="SET_UPDATE_SUPPORTED",e.UPDATE_DESKTOP_FEATURES="UPDATE_DESKTOP_FEATURES",e.UPDATE_DOWNLOADED="UPDATE_DOWNLOADED",e.SIGN_IN_CANCELED="SIGN_IN_CANCELED",e.SIGN_IN_COMPLETE="SIGN_IN_COMPLETE",e.SIGN_IN_PROGRESS="SIGN_IN_PROGRESS",e.TICKLE_MESSAGE_SERVER="TICKLE_MESSAGE_SERVER",e.TRACK_PAGE_ERROR="TRACK_PAGE_ERROR",e.SET_SESSION_MODE="SET_SESSION_MODE",e.SET_FOCUS_SESSION="SET_FOCUS_SESSION",e))(Ry||{}),xy=(e=>(e.SELECT_TEAM="SELECT_TEAM",e.SELECT_TEAM_BY_USER_ID="SELECT_TEAM_BY_USER_ID",e.SELECT_TEAM_BY_INDEX="SELECT_TEAM_BY_INDEX",e.SET_TEAMS_BY_INDEX="SET_TEAMS_BY_INDEX",e.SELECT_CHANNEL="SELECT_CHANNEL",e.SELECT_NEXT_TEAM="SELECT_NEXT_TEAM",e.SELECT_PREVIOUS_TEAM="SELECT_PREVIOUS_TEAM",e.SIGNED_OUT_TEAM="SIGNED_OUT_TEAM",e))(xy||{}),Py=(e=>(e.APP_COMMAND="APP_COMMAND",e.CONTEXT_MENU_ITEM_CLICKED="CONTEXT_MENU_ITEM_CLICKED",e.EDITING_COMMAND="EDITING_COMMAND",e.OPEN_CONTEXT_MENU="OPEN_CONTEXT_MENU",e.POPUP_APP_MENU="POPUP_APP_MENU",e.SET_CONTEXT_MENU_TEMPLATE="SET_CONTEXT_MENU_TEMPLATE",e.CLOSE_APP_MENU="CLOSE_APP_MENU",e))(Py||{}),ky=(e=>(e.SHOW_AUTH_DIALOG="SHOW_AUTH_DIALOG",e.SHOW_URL_SCHEME_MODAL="SHOW_URL_SCHEME_MODAL",e.SUBMIT_CREDENTIALS="SUBMIT_CREDENTIALS",e.SHOW_TRAY_BALLOON="SHOW_TRAY_BALLOON",e))(ky||{}),Ny=(e=>(e.RECORD_PERFORMANCE_TIMING="RECORD_PERFORMANCE_TIMING",e.SET_SYSTEM_DIAGNOSTIC_INFO="SET_SYSTEM_DIAGNOSTIC_INFO",e))(Ny||{}),My=(e=>(e.INITIALIZE="INITIALIZE",e.READY="READY",e))(My||{}),Ly=(e=>(e.AUTOLOGIN_TEAMS_COMPLETE="AUTOLOGIN_TEAMS_COMPLETE",e.CLEAR_CACHE_RESTART_APP="CLEAR_CACHE_RESTART_APP",e.CONFIRM_AND_RESET_APP="CONFIRM_AND_RESET_APP",e.FOREGROUND_APP="FOREGROUND_APP",e.HANDLE_DEEP_LINK="HANDLE_DEEP_LINK",e.MAIN_WINDOW_BLURRED="MAIN_WINDOW_BLURRED",e.MAIN_WINDOW_SHOWN="MAIN_WINDOW_SHOWN",e.MAIN_WINDOW_UNRESPONSIVE="MAIN_WINDOW_UNRESPONSIVE",e.MOVE_WINDOW_PRIMARY_SCREEN="MOVE_WINDOW_PRIMARY_SCREEN",e.PREPARE_AND_REVEAL_LOGS="PREPARE_AND_REVEAL_LOGS",e.RESTART_APP="RESTART_APP",e.QUIT_APP="QUIT_APP",e.REFRESH_TEAMS="REFRESH_TEAMS",e.RELOAD="RELOAD",e.SHOW_ABOUT="SHOW_ABOUT",e.SHOW_RELEASE_NOTES="SHOW_RELEASE_NOTES",e.SHOW_SETTINGS_EDITOR="SHOW_SETTINGS_EDITOR",e.USE_JS_PATH="USE_JS_PATH",e.SHOW_WEBAPP_DIALOG="SHOW_WEBAPP_DIALOG",e.SIGN_OUT_TEAM="SIGN_OUT_TEAM",e.TOGGLE_DEV_TOOLS="TOGGLE_DEV_TOOLS",e.TOGGLE_FULL_SCREEN="TOGGLE_FULL_SCREEN",e.TITLE_BAR_DOUBLE_CLICKED="TITLE_BAR_DOUBLE_CLICKED",e.TOKEN_FILE_PROCESSED="TOKEN_FILE_PROCESSED",e.MAGIC_LOGIN_IN_PROGRESS="MAGIC_LOGIN_IN_PROGRESS",e.RESTART_WITH_NET_LOG="RESTART_WITH_NET_LOG",e.START_NET_LOG="START_NET_LOG",e.DOWNLOADS_CLEANED_UP="DOWNLOADS_CLEANED_UP",e.SET_TASKBAR_BADGE="SET_TASKBAR_BADGE",e.TOGGLE_FEATURE_FRAGMENT="TOGGLE_FEATURE_FRAGMENT",e.SWITCH_MODE_AND_LOAD_URL="SWITCH_MODE_AND_LOAD_URL",e))(Ly||{}),Uy=(e=>(e.NEW_NOTIFICATION="NEW_NOTIFICATION",e.REMOVE_NOTIFICATION="REMOVE_NOTIFICATION",e.CLEAR_NOTIFICATIONS="CLEAR_NOTIFICATIONS",e.CLICK_NOTIFICATION="CLICK_NOTIFICATION",e.NOTIFICATION_ACTION="NOTIFICATION_ACTION",e.REPLY_TO_NOTIFICATION="REPLY_TO_NOTIFICATION",e.SET_WINDOW_SHAPE="SET_WINDOW_SHAPE",e))(Uy||{}),jy=(e=>(e.UPDATE_SETTINGS="UPDATE_SETTINGS",e.SET_DEV_MODE="SET_DEV_MODE",e.SET_DEV_ENVIRONMENT="SET_DEV_ENVIRONMENT",e.SET_TITLE_BAR_HIDDEN="SET_TITLE_BAR_HIDDEN",e.ZOOM_IN="ZOOM_IN",e.ZOOM_OUT="ZOOM_OUT",e.RESET_ZOOM="RESET_ZOOM",e.WHITELIST_PROTOCOL="WHITELIST_PROTOCOL",e.ALLOWLIST_FILE_EXT="ALLOWLIST_FILE_EXT",e))(jy||{}),sc=(e=>(e.ADD_NEW_TEAMS="ADD_NEW_TEAMS",e.REMOVE_TEAMS="REMOVE_TEAMS",e))(sc||{}),Hy=(e=>(e.CREATE_WINDOW="CREATE_WINDOW",e.WINDOW_CREATED="WINDOW_CREATED",e.REMOVE_WINDOW="REMOVE_WINDOW",e.SET_WINDOW_FRAME="SET_WINDOW_FRAME",e.FOCUS_WINDOW="FOCUS_WINDOW",e))(Hy||{}),Ky=(e=>(e.SYNC="SYNC",e.SELECTION_CHANGED="SELECTION_CHANGED",e.SELECT_BY_ID="SELECT_BY_ID",e.SELECT_NEXT="SELECT_NEXT",e.SELECT_PREVIOUS="SELECT_PREVIOUS",e.ASSOCIATE_WEB_CONTENTS="ASSOCIATE_WEB_CONTENTS",e))(Ky||{});const UI=null;var zy=(e=>(e.DESKTOP_PRELOAD="DESKTOP PRELOAD",e))(zy||{}),Wy=(e=>(e.DEBUG="debug",e.INFO="info",e.WARN="warn",e.ERROR="error",e.FATAL="fatal",e))(Wy||{}),Gy=(e=>(e[e.VERBOSE=0]="VERBOSE",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR",e))(Gy||{});const jI={0:"debug",1:"info",2:"warn",3:"error"};var qy=(e=>(e.BROWSER="browser",e.WEB="web",e))(qy||{});function HI(e){return!!(process.env&&process.env.npm_config_disable_console&&process.env.npm_config_disable_console.includes(e))}const $y="[REDACTED]",KI="[DEPRECATED]",zI=process.env.username||process.env.USER||void 0,WI=null,GI=3,Vy=(e,n)=>{const t=n??(o=>o);return Object.entries(e).reduce((o,[i,r])=>(o[i]=t(r,i),o),{})};var Yy,Xy;const Ac=(e,n,t)=>Xy(e,(o,i)=>!n.has(i)&&Array.isArray(o)?o.map(r=>Ac(r,n,t)):!n.has(i)&&o!==null&&typeof o=="object"?Ac(o,n,t):n.has(i)?t:o),Qy=(e,n=$y)=>{const t=new Set(e);return o=>Vy(o,(i,r)=>t.has(r)?n:i)},qI=(e,n=Yy)=>t=>Ac(t,new Set(e),n),Zy=Qy(["name","team_name","team_url","token"]),$I=Ue(sc.ADD_NEW_TEAMS,(e,n=!1)=>({payload:e,meta:{logPayload:e.map(Zy),shouldSelect:n}})),eC=Ue(sc.REMOVE_TEAMS);function nC(e){if(!e.teams)return"(Empty)";const n=Object.keys(e.teams),t=ya(Object.values(e.teams).reduce((o,i)=>(o.push(...Object.keys(i)),o),[]));return`(${n}) Changed keys [${t}]`}const tC=Ue("REDUX_UPDATE_FROM_WEBAPP",e=>({payload:e,meta:{logPayload:nC(e)}}));var oC,iC;const rC="T00000000",go={active_item:"#4C9689",active_item_text:"#FFFFFF",active_presence:"#38978D",badge:"#EB4D5C",column_bg:"#4D394B",hover_item:"#3E313C",menu_bg:"#3E313C",text_color:"#FFFFFF",titlebarBackground:"#232323",titlebarTextColor:"#FFFFFF"},VI=bs({teams:{}},e=>e.addCase(tC,(n,{payload:t})=>{const o=t.teams?cC(n.teams,t.teams):n.teams;return{...n,teams:o}}).addCase(eC,(n,{payload:t})=>({...n,teams:Dy(n.teams,t)})));function cC(e,n){return Object.entries(n).filter(([t])=>t!==rC).map(([t,o])=>({[t]:{...e[t]||{},...o}})).reduce((t,o)=>({...t,...o}),e)}const aC={theme:{titlebarBackground:go.titlebarBackground,titlebarTextColor:go.titlebarTextColor},notificationPrefs:{notificationSound:Ps.KNOCK_BRUSH,noTextInNotifications:!1,muteSounds:!1},connectivityPrefs:{ntlmCredentialDomains:"*"},featureFlags:{},unreads:{unreads:0,unreadHighlights:0,showBullet:!1},locale:Jy,version:void 0,frontendBuildType:void 0},YI=e=>({...e,teams:iC(e.teams,n=>({...oC(aC),theme:n.theme,featureFlags:n.featureFlags,locale:n.locale}))});var lC,sC,AC=(e=>(e[e.Setting=0]="Setting",e[e.Action=1]="Action",e[e.Other=2]="Other",e[e.None=3]="None",e))(AC||{}),fC=(e=>(e.CHANNEL="channel",e.USER="user",e.TEAM="team",e.FILE="file",e.FILES="files",e.SHARE_FILE="share-file",e.INVITE="invite",e.NOTIFICATIONS="notifications",e.PREFERENCES="preferences",e.CREATE="create",e.BROWSE="browse",e))(fC||{});function uC(e){return/^slack:\/\/setting/i.test(e||"")}function EC(e){return/^slack:\/\/app/i.test(e||"")}function ks(e){return/^slack:/i.test(e||"")}function XI(e){let n;return Array.isArray(e)?n=e.find(t=>!!t&&ks(t)):n=e&&ks(e)?e:void 0,n?uC(n)?{type:0,href:n}:EC(n)?{type:1,href:n}:{type:2,href:n}:{type:3,href:""}}function QI(e){if(!e||typeof e!="string")return null;try{const n=new URL(e);return n.protocol!==sC?null:{args:{...Object.fromEntries(n.searchParams.entries()),cmd:n.host},pathname:n.pathname}}catch(n){return lC.warn("Unable to parse deep link",{url:e,error:n}),null}}function dC(e,n){return`slack://${e}?${new URLSearchParams(n).toString()}`}var pC;const ZI=e=>`${pC(e)}/clog/track/`,ew=(e,n)=>{const{instanceUid:t,sessionId:o,releaseChannel:i,userId:r,workspaceId:c}=n;return{...e,user_id:r,team_id:c,args:{...e.args,selected_user_id:r,selected_workspace_id:c,instanceUid:t,sessionId:o,releaseChannel:i}}};var bo=(e=>(e[e.DISPLAY_INFO=1000001]="DISPLAY_INFO",e[e._DEPRECATED_SYSTEM_LOCALE=1000002]="_DEPRECATED_SYSTEM_LOCALE",e[e._DEPRECATED_DESKTOP_HANG=1000003]="_DEPRECATED_DESKTOP_HANG",e[e.DESKTOP_CRASH=1000004]="DESKTOP_CRASH",e[e._DEPRECATED_DESKTOP_SCRIPTS_MISSING=1000005]="_DEPRECATED_DESKTOP_SCRIPTS_MISSING",e[e.DESKTOP_CLIENT_LAUNCH=1000006]="DESKTOP_CLIENT_LAUNCH",e[e.DESKTOP_RENDER_PROCESS_GONE=1000007]="DESKTOP_RENDER_PROCESS_GONE",e[e.DESKTOP_NOTIFICATION_RECEIVED=1000010]="DESKTOP_NOTIFICATION_RECEIVED",e[e.DESKTOP_NOTIFICATION_SUCCESS=1000011]="DESKTOP_NOTIFICATION_SUCCESS",e[e.DESKTOP_NOTIFICATION_ERROR=1000012]="DESKTOP_NOTIFICATION_ERROR",e[e.DESKTOP_NOTIFICATION_CLICK=1000013]="DESKTOP_NOTIFICATION_CLICK",e[e.DESKTOP_NOTIFICATION_REPLY=1000014]="DESKTOP_NOTIFICATION_REPLY",e[e.DESKTOP_NOTIFICATION_DISMISSED=1000015]="DESKTOP_NOTIFICATION_DISMISSED",e[e.DESKTOP_NOTIFICATION_FAILOVER=1000016]="DESKTOP_NOTIFICATION_FAILOVER",e[e.DESKTOP_NOTIFICATION_ACTION=1000017]="DESKTOP_NOTIFICATION_ACTION",e[e.DESKTOP_UPDATER_ERROR=1000050]="DESKTOP_UPDATER_ERROR",e[e.DESKTOP_UPDATER_CHECKING=1000051]="DESKTOP_UPDATER_CHECKING",e[e.DESKTOP_UPDATER_UPDATE_AVAILABLE=1000052]="DESKTOP_UPDATER_UPDATE_AVAILABLE",e[e.DESKTOP_UPDATER_UPDATE_NOT_AVAILABLE=1000053]="DESKTOP_UPDATER_UPDATE_NOT_AVAILABLE",e[e.DESKTOP_UPDATER_UPDATE_DOWNLOADED=1000054]="DESKTOP_UPDATER_UPDATE_DOWNLOADED",e[e.DESKTOP_UPDATER_CHECK_UPDATE_FAILURE=100055]="DESKTOP_UPDATER_CHECK_UPDATE_FAILURE",e[e._DEPRECATED_DESKTOP_WINDOWS_UPDATE_START=1000056]="_DEPRECATED_DESKTOP_WINDOWS_UPDATE_START",e[e._DEPRECATED_DESKTOP_WINDOWS_UPDATE_COMPLETED=1000057]="_DEPRECATED_DESKTOP_WINDOWS_UPDATE_COMPLETED",e[e.DESKTOP_UPDATER_APPLY_UPDATE=1000058]="DESKTOP_UPDATER_APPLY_UPDATE",e[e.DESKTOP_UPDATER_MAC_SERVER_FAIL=1000059]="DESKTOP_UPDATER_MAC_SERVER_FAIL",e[e.DESKTOP_UPDATER_SUCCESS=1000060]="DESKTOP_UPDATER_SUCCESS",e[e.DESKTOP_UPDATER_FAIL=1000061]="DESKTOP_UPDATER_FAIL",e[e._DEPRECATED_DESKTOP_DEEPLINK_ACTIVATION=1000100]="_DEPRECATED_DESKTOP_DEEPLINK_ACTIVATION",e[e._DEPRECATED_DESKTOP_TILE_ACTIVITY=1000101]="_DEPRECATED_DESKTOP_TILE_ACTIVITY",e[e._DEPRECATED_DESKTOP_TRACEROUTE=1000110]="_DEPRECATED_DESKTOP_TRACEROUTE",e[e.DESKTOP_API_TEST_ERROR=1000111]="DESKTOP_API_TEST_ERROR",e[e.DESKTOP_API_TEST_OFFLINE=1000112]="DESKTOP_API_TEST_OFFLINE",e[e.DESKTOP_NAVIGATOR_CONNECTION=1000113]="DESKTOP_NAVIGATOR_CONNECTION",e[e.DESKTOP_NAVIGATOR_ONLINE_BOGUS=1000114]="DESKTOP_NAVIGATOR_ONLINE_BOGUS",e[e.DESKTOP_PROXY_INFO=1000115]="DESKTOP_PROXY_INFO",e[e._DEPRECATED_DESKTOP_LANGUAGE_DETECTED=1000150]="_DEPRECATED_DESKTOP_LANGUAGE_DETECTED",e[e._DEPRECATED_DESKTOP_DICT_UNSUPPORTED=1000151]="_DEPRECATED_DESKTOP_DICT_UNSUPPORTED",e[e._DEPRECATED_DESKTOP_DICT_INVALID_HASH=1000152]="_DEPRECATED_DESKTOP_DICT_INVALID_HASH",e[e._DEPRECATED_DESKTOP_DICT_DOWNLOAD_FAIL=1000153]="_DEPRECATED_DESKTOP_DICT_DOWNLOAD_FAIL",e[e._DEPRECATED_DESKTOP_SPELLCHECK_FORCE_LANGUAGE=1000154]="_DEPRECATED_DESKTOP_SPELLCHECK_FORCE_LANGUAGE",e[e._DEPRECATED_DESKTOP_SPELLCHECK_AUTO_LANGUAGE=1000155]="_DEPRECATED_DESKTOP_SPELLCHECK_AUTO_LANGUAGE",e[e._DEPRECATED_DESKTOP_SPELLCHECK_UNLOAD_DICT=1000156]="_DEPRECATED_DESKTOP_SPELLCHECK_UNLOAD_DICT",e[e._DEPRECATED_DESKTOP_SPELLCHECK_SWITCH_FAIL=1000157]="_DEPRECATED_DESKTOP_SPELLCHECK_SWITCH_FAIL",e[e.DESKTOP_CLIENT_RELOAD=1000200]="DESKTOP_CLIENT_RELOAD",e[e.DESKTOP_CLIENT_RESET=1000201]="DESKTOP_CLIENT_RESET",e[e.DESKTOP_CLIENT_TIME_TO_USABLE=1000202]="DESKTOP_CLIENT_TIME_TO_USABLE",e[e.DESKTOP_KEYCHAIN_DENIED=1000203]="DESKTOP_KEYCHAIN_DENIED",e[e.DESKTOP_CLIENT_ZOOM_LEVEL=1000300]="DESKTOP_CLIENT_ZOOM_LEVEL",e[e.DESKTOP_CLIENT_ACCESSIBILITY_SUPPORT=1000301]="DESKTOP_CLIENT_ACCESSIBILITY_SUPPORT",e[e.DESKTOP_CLIENT_MENU_TRIGGER=1000302]="DESKTOP_CLIENT_MENU_TRIGGER",e[e.DESKTOP_CLIENT_THEME_SHOULD_USE_HIGH_CONTRAST_COLORS=1000303]="DESKTOP_CLIENT_THEME_SHOULD_USE_HIGH_CONTRAST_COLORS",e[e._DEPRECATED_DESKTOP_CLIENT_MAGIC_TOKEN_MARK_CLICK=1000400]="_DEPRECATED_DESKTOP_CLIENT_MAGIC_TOKEN_MARK_CLICK",e[e.DESKTOP_EA_TEAMID=1000500]="DESKTOP_EA_TEAMID",e[e.DESKTOP_INTERFACE_INVALID_PARAM=1000600]="DESKTOP_INTERFACE_INVALID_PARAM",e[e.DESKTOP_OPEN_EXTERNAL_URL=1000700]="DESKTOP_OPEN_EXTERNAL_URL",e[e.DESKTOP_OPEN_DOWNLOADED_FILE=1000701]="DESKTOP_OPEN_DOWNLOADED_FILE",e[e.DESKTOP_UNRESPONSIVE_DIALOG_SHOWN=1000800]="DESKTOP_UNRESPONSIVE_DIALOG_SHOWN",e[e.DESKTOP_UNRESPONSIVE_DIALOG_CLOSED=1000801]="DESKTOP_UNRESPONSIVE_DIALOG_CLOSED",e[e.DESKTOP_EXTERNAL_CONFIG=1000900]="DESKTOP_EXTERNAL_CONFIG",e[e.DESKTOP_LEGACY_CONFIG_NO_UPDATES_ENV=1000901]="DESKTOP_LEGACY_CONFIG_NO_UPDATES_ENV",e[e.DESKTOP_LEGACY_CONFIG_NO_UPDATES_PREF=1000902]="DESKTOP_LEGACY_CONFIG_NO_UPDATES_PREF",e[e.DESKTOP_LEGACY_CONFIG_TOKEN_FILE=1000903]="DESKTOP_LEGACY_CONFIG_TOKEN_FILE",e[e.DESKTOP_PERFORMANCE_RECORD=1001e3]="DESKTOP_PERFORMANCE_RECORD",e[e.DESKTOP_WEB_CONTENTS_LOAD_TIMEOUT=1001001]="DESKTOP_WEB_CONTENTS_LOAD_TIMEOUT",e[e.DESKTOP_MEDIA_ACCESS=1001100]="DESKTOP_MEDIA_ACCESS",e[e.CAN_INIT_AUDIO_DEVICE=1001101]="CAN_INIT_AUDIO_DEVICE",e[e.GET_AUDIO_DEVICE_DETAILS=101102]="GET_AUDIO_DEVICE_DETAILS",e[e.DESKTOP_FEATURE_FLAGS_LOADED=1001200]="DESKTOP_FEATURE_FLAGS_LOADED",e))(bo||{}),Ns=(e=>(e[e.WINRT_ELECTRON=1]="WINRT_ELECTRON",e[e.HTML=2]="HTML",e[e.MACOS_ELECTRON=4]="MACOS_ELECTRON",e[e.LINUX_ELECTRON=5]="LINUX_ELECTRON",e))(Ns||{}),_C=(e=>(e[e.LINK=0]="LINK",e[e.APP_MENU_HELP_CENTER=1]="APP_MENU_HELP_CENTER",e[e.APP_MENU_WORKSPACE_LOGIN=2]="APP_MENU_WORKSPACE_LOGIN",e[e.SIGN_OUT_EPIC=3]="SIGN_OUT_EPIC",e[e.RELEASE_NOTES_EPIC=4]="RELEASE_NOTES_EPIC",e[e.URL_SCHEME_DIALOG_EPIC=5]="URL_SCHEME_DIALOG_EPIC",e[e.MAGIC_LOGIN_REDIRECT=6]="MAGIC_LOGIN_REDIRECT",e[e.CONTEXT_MENU_SEARCH_GOOGLE=7]="CONTEXT_MENU_SEARCH_GOOGLE",e[e.EXTERNAL_LINK_EPIC=8]="EXTERNAL_LINK_EPIC",e[e.MAS_UPDATES_PAGE=9]="MAS_UPDATES_PAGE",e[e.MICROSOFT_STORE_UPDATES_PAGE=10]="MICROSOFT_STORE_UPDATES_PAGE",e))(_C||{}),hC=(e=>(e[e.CANCELLED=0]="CANCELLED",e[e.WAIT=1]="WAIT",e[e.RELOAD=2]="RELOAD",e[e.CLEAR_CACHE_RELOAD=3]="CLEAR_CACHE_RELOAD",e[e.DISMISSED=4]="DISMISSED",e))(hC||{});function mi({id:e},n){const t=Ns.HTML;window.desktop.diagnostics.track(n,{notificationId:e,notificationSystem:t})}var Bi=z(8455),Ct={};Ct.styleTagTransform=Wt(),Ct.setAttributes=Kt(),Ct.insert=Ht().bind(null,"head"),Ct.domAPI=jt(),Ct.insertStyleElement=zt();var nw=Ut()(Bi.A,Ct);const tw=Bi.A&&Bi.A.locals?Bi.A.locals:void 0;var yi=z(519),vt={};vt.styleTagTransform=Wt(),vt.setAttributes=Kt(),vt.insert=Ht().bind(null,"head"),vt.domAPI=jt(),vt.insertStyleElement=zt();var ow=Ut()(yi.A,vt);const iw=yi.A&&yi.A.locals?yi.A.locals:void 0;/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */const{entries:Ms,setPrototypeOf:Ls,isFrozen:gC,getPrototypeOf:bC,getOwnPropertyDescriptor:mC}=Object;let{freeze:Fe,seal:je,create:fc}=Object,{apply:uc,construct:Ec}=typeof Reflect<"u"&&Reflect;Fe||(Fe=function(n){return n}),je||(je=function(n){return n}),uc||(uc=function(n,t){for(var o=arguments.length,i=new Array(o>2?o-2:0),r=2;r<o;r++)i[r-2]=arguments[r];return n.apply(t,i)}),Ec||(Ec=function(n){for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];return new n(...o)});const Ci=De(Array.prototype.forEach),BC=De(Array.prototype.lastIndexOf),Us=De(Array.prototype.pop),mo=De(Array.prototype.push),yC=De(Array.prototype.splice),vi=De(String.prototype.toLowerCase),dc=De(String.prototype.toString),pc=De(String.prototype.match),Bo=De(String.prototype.replace),CC=De(String.prototype.indexOf),vC=De(String.prototype.trim),We=De(Object.prototype.hasOwnProperty),Je=De(RegExp.prototype.test),yo=IC(TypeError);function De(e){return function(n){n instanceof RegExp&&(n.lastIndex=0);for(var t=arguments.length,o=new Array(t>1?t-1:0),i=1;i<t;i++)o[i-1]=arguments[i];return uc(e,n,o)}}function IC(e){return function(){for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return Ec(e,t)}}function $(e,n){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:vi;Ls&&Ls(e,null);let o=n.length;for(;o--;){let i=n[o];if(typeof i=="string"){const r=t(i);r!==i&&(gC(n)||(n[o]=r),i=r)}e[i]=!0}return e}function wC(e){for(let n=0;n<e.length;n++)We(e,n)||(e[n]=null);return e}function Qe(e){const n=fc(null);for(const[t,o]of Ms(e))We(e,t)&&(Array.isArray(o)?n[t]=wC(o):o&&typeof o=="object"&&o.constructor===Object?n[t]=Qe(o):n[t]=o);return n}function Co(e,n){for(;e!==null;){const o=mC(e,n);if(o){if(o.get)return De(o.get);if(typeof o.value=="function")return De(o.value)}e=bC(e)}function t(){return null}return t}const js=Fe(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),_c=Fe(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),hc=Fe(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),SC=Fe(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),gc=Fe(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),TC=Fe(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Hs=Fe(["#text"]),Ks=Fe(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),bc=Fe(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),zs=Fe(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ii=Fe(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),OC=je(/\{\{[\w\W]*|[\w\W]*\}\}/gm),FC=je(/<%[\w\W]*|[\w\W]*%>/gm),JC=je(/\$\{[\w\W]*/gm),DC=je(/^data-[\-\w.\u00B7-\uFFFF]+$/),RC=je(/^aria-[\-\w]+$/),Ws=je(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),xC=je(/^(?:\w+script|data):/i),PC=je(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Gs=je(/^html$/i),kC=je(/^[a-z][.\w]*(-[.\w]+)+$/i);var qs=Object.freeze({__proto__:null,ARIA_ATTR:RC,ATTR_WHITESPACE:PC,CUSTOM_ELEMENT:kC,DATA_ATTR:DC,DOCTYPE_NAME:Gs,ERB_EXPR:FC,IS_ALLOWED_URI:Ws,IS_SCRIPT_OR_DATA:xC,MUSTACHE_EXPR:OC,TMPLIT_EXPR:JC});const vo={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},NC=function(){return typeof window>"u"?null:window},MC=function(n,t){if(typeof n!="object"||typeof n.createPolicy!="function")return null;let o=null;const i="data-tt-policy-suffix";t&&t.hasAttribute(i)&&(o=t.getAttribute(i));const r="dompurify"+(o?"#"+o:"");try{return n.createPolicy(r,{createHTML(c){return c},createScriptURL(c){return c}})}catch{return console.warn("TrustedTypes policy "+r+" could not be created."),null}},$s=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Vs(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:NC();const n=j=>Vs(j);if(n.version="3.3.1",n.removed=[],!e||!e.document||e.document.nodeType!==vo.document||!e.Element)return n.isSupported=!1,n;let{document:t}=e;const o=t,i=o.currentScript,{DocumentFragment:r,HTMLTemplateElement:c,Node:a,Element:l,NodeFilter:s,NamedNodeMap:A=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:f,DOMParser:E,trustedTypes:d}=e,p=l.prototype,g=Co(p,"cloneNode"),b=Co(p,"remove"),h=Co(p,"nextSibling"),m=Co(p,"childNodes"),B=Co(p,"parentNode");if(typeof c=="function"){const j=t.createElement("template");j.content&&j.content.ownerDocument&&(t=j.content.ownerDocument)}let C,x="";const{implementation:P,createNodeIterator:R,createDocumentFragment:ce,getElementsByTagName:ee}=t,{importNode:Z}=o;let G=$s();n.isSupported=typeof Ms=="function"&&typeof B=="function"&&P&&P.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:we,ERB_EXPR:Re,TMPLIT_EXPR:Ke,DATA_ATTR:Ge,ARIA_ATTR:Ft,IS_SCRIPT_OR_DATA:ve,ATTR_WHITESPACE:Tn,CUSTOM_ELEMENT:fn}=qs;let{IS_ALLOWED_URI:So}=qs,fe=null;const Jt=$({},[...js,..._c,...hc,...gc,...Hs]);let ae=null;const On=$({},[...Ks,...bc,...zs,...Ii]);let de=Object.seal(fc(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),xe=null,Yn=null;const un=Object.seal(fc(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Xn=!0,Dt=!0,To=!1,Oo=!0,Fn=!1,En=!0,dn=!1,Rt=!1,Qn=!1,qe=!1,Zn=!1,Jn=!1,xt=!0,xi=!1;const et="user-content-";let nt=!0,Fo=!1,Pt={},Ze=null;const Jc=$({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let SA=null;const TA=$({},["audio","video","img","source","image","track"]);let Dc=null;const OA=$({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Pi="http://www.w3.org/1998/Math/MathML",ki="http://www.w3.org/2000/svg",pn="http://www.w3.org/1999/xhtml";let kt=pn,Rc=!1,xc=null;const W0=$({},[Pi,ki,pn],dc);let Ni=$({},["mi","mo","mn","ms","mtext"]),Mi=$({},["annotation-xml"]);const G0=$({},["title","style","font","a","script"]);let Jo=null;const q0=["application/xhtml+xml","text/html"],$0="text/html";let he=null,Nt=null;const V0=t.createElement("form"),FA=function(_){return _ instanceof RegExp||_ instanceof Function},Pc=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Nt&&Nt===_)){if((!_||typeof _!="object")&&(_={}),_=Qe(_),Jo=q0.indexOf(_.PARSER_MEDIA_TYPE)===-1?$0:_.PARSER_MEDIA_TYPE,he=Jo==="application/xhtml+xml"?dc:vi,fe=We(_,"ALLOWED_TAGS")?$({},_.ALLOWED_TAGS,he):Jt,ae=We(_,"ALLOWED_ATTR")?$({},_.ALLOWED_ATTR,he):On,xc=We(_,"ALLOWED_NAMESPACES")?$({},_.ALLOWED_NAMESPACES,dc):W0,Dc=We(_,"ADD_URI_SAFE_ATTR")?$(Qe(OA),_.ADD_URI_SAFE_ATTR,he):OA,SA=We(_,"ADD_DATA_URI_TAGS")?$(Qe(TA),_.ADD_DATA_URI_TAGS,he):TA,Ze=We(_,"FORBID_CONTENTS")?$({},_.FORBID_CONTENTS,he):Jc,xe=We(_,"FORBID_TAGS")?$({},_.FORBID_TAGS,he):Qe({}),Yn=We(_,"FORBID_ATTR")?$({},_.FORBID_ATTR,he):Qe({}),Pt=We(_,"USE_PROFILES")?_.USE_PROFILES:!1,Xn=_.ALLOW_ARIA_ATTR!==!1,Dt=_.ALLOW_DATA_ATTR!==!1,To=_.ALLOW_UNKNOWN_PROTOCOLS||!1,Oo=_.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Fn=_.SAFE_FOR_TEMPLATES||!1,En=_.SAFE_FOR_XML!==!1,dn=_.WHOLE_DOCUMENT||!1,qe=_.RETURN_DOM||!1,Zn=_.RETURN_DOM_FRAGMENT||!1,Jn=_.RETURN_TRUSTED_TYPE||!1,Qn=_.FORCE_BODY||!1,xt=_.SANITIZE_DOM!==!1,xi=_.SANITIZE_NAMED_PROPS||!1,nt=_.KEEP_CONTENT!==!1,Fo=_.IN_PLACE||!1,So=_.ALLOWED_URI_REGEXP||Ws,kt=_.NAMESPACE||pn,Ni=_.MATHML_TEXT_INTEGRATION_POINTS||Ni,Mi=_.HTML_INTEGRATION_POINTS||Mi,de=_.CUSTOM_ELEMENT_HANDLING||{},_.CUSTOM_ELEMENT_HANDLING&&FA(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(de.tagNameCheck=_.CUSTOM_ELEMENT_HANDLING.tagNameCheck),_.CUSTOM_ELEMENT_HANDLING&&FA(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(de.attributeNameCheck=_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),_.CUSTOM_ELEMENT_HANDLING&&typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(de.allowCustomizedBuiltInElements=_.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fn&&(Dt=!1),Zn&&(qe=!0),Pt&&(fe=$({},Hs),ae=[],Pt.html===!0&&($(fe,js),$(ae,Ks)),Pt.svg===!0&&($(fe,_c),$(ae,bc),$(ae,Ii)),Pt.svgFilters===!0&&($(fe,hc),$(ae,bc),$(ae,Ii)),Pt.mathMl===!0&&($(fe,gc),$(ae,zs),$(ae,Ii))),_.ADD_TAGS&&(typeof _.ADD_TAGS=="function"?un.tagCheck=_.ADD_TAGS:(fe===Jt&&(fe=Qe(fe)),$(fe,_.ADD_TAGS,he))),_.ADD_ATTR&&(typeof _.ADD_ATTR=="function"?un.attributeCheck=_.ADD_ATTR:(ae===On&&(ae=Qe(ae)),$(ae,_.ADD_ATTR,he))),_.ADD_URI_SAFE_ATTR&&$(Dc,_.ADD_URI_SAFE_ATTR,he),_.FORBID_CONTENTS&&(Ze===Jc&&(Ze=Qe(Ze)),$(Ze,_.FORBID_CONTENTS,he)),_.ADD_FORBID_CONTENTS&&(Ze===Jc&&(Ze=Qe(Ze)),$(Ze,_.ADD_FORBID_CONTENTS,he)),nt&&(fe["#text"]=!0),dn&&$(fe,["html","head","body"]),fe.table&&($(fe,["tbody"]),delete xe.tbody),_.TRUSTED_TYPES_POLICY){if(typeof _.TRUSTED_TYPES_POLICY.createHTML!="function")throw yo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof _.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw yo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');C=_.TRUSTED_TYPES_POLICY,x=C.createHTML("")}else C===void 0&&(C=MC(d,i)),C!==null&&typeof x=="string"&&(x=C.createHTML(""));Fe&&Fe(_),Nt=_}},JA=$({},[..._c,...hc,...SC]),DA=$({},[...gc,...TC]),Y0=function(_){let F=B(_);(!F||!F.tagName)&&(F={namespaceURI:kt,tagName:"template"});const N=vi(_.tagName),ue=vi(F.tagName);return xc[_.namespaceURI]?_.namespaceURI===ki?F.namespaceURI===pn?N==="svg":F.namespaceURI===Pi?N==="svg"&&(ue==="annotation-xml"||Ni[ue]):!!JA[N]:_.namespaceURI===Pi?F.namespaceURI===pn?N==="math":F.namespaceURI===ki?N==="math"&&Mi[ue]:!!DA[N]:_.namespaceURI===pn?F.namespaceURI===ki&&!Mi[ue]||F.namespaceURI===Pi&&!Ni[ue]?!1:!DA[N]&&(G0[N]||!JA[N]):!!(Jo==="application/xhtml+xml"&&xc[_.namespaceURI]):!1},en=function(_){mo(n.removed,{element:_});try{B(_).removeChild(_)}catch{b(_)}},tt=function(_,F){try{mo(n.removed,{attribute:F.getAttributeNode(_),from:F})}catch{mo(n.removed,{attribute:null,from:F})}if(F.removeAttribute(_),_==="is")if(qe||Zn)try{en(F)}catch{}else try{F.setAttribute(_,"")}catch{}},RA=function(_){let F=null,N=null;if(Qn)_="<remove></remove>"+_;else{const _e=pc(_,/^[\r\n\t ]+/);N=_e&&_e[0]}Jo==="application/xhtml+xml"&&kt===pn&&(_='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+_+"</body></html>");const ue=C?C.createHTML(_):_;if(kt===pn)try{F=new E().parseFromString(ue,Jo)}catch{}if(!F||!F.documentElement){F=P.createDocument(kt,"template",null);try{F.documentElement.innerHTML=Rc?x:ue}catch{}}const Se=F.body||F.documentElement;return _&&N&&Se.insertBefore(t.createTextNode(N),Se.childNodes[0]||null),kt===pn?ee.call(F,dn?"html":"body")[0]:dn?F.documentElement:Se},xA=function(_){return R.call(_.ownerDocument||_,_,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT|s.SHOW_PROCESSING_INSTRUCTION|s.SHOW_CDATA_SECTION,null)},kc=function(_){return _ instanceof f&&(typeof _.nodeName!="string"||typeof _.textContent!="string"||typeof _.removeChild!="function"||!(_.attributes instanceof A)||typeof _.removeAttribute!="function"||typeof _.setAttribute!="function"||typeof _.namespaceURI!="string"||typeof _.insertBefore!="function"||typeof _.hasChildNodes!="function")},PA=function(_){return typeof a=="function"&&_ instanceof a};function _n(j,_,F){Ci(j,N=>{N.call(n,_,F,Nt)})}const kA=function(_){let F=null;if(_n(G.beforeSanitizeElements,_,null),kc(_))return en(_),!0;const N=he(_.nodeName);if(_n(G.uponSanitizeElement,_,{tagName:N,allowedTags:fe}),En&&_.hasChildNodes()&&!PA(_.firstElementChild)&&Je(/<[/\w!]/g,_.innerHTML)&&Je(/<[/\w!]/g,_.textContent)||_.nodeType===vo.progressingInstruction||En&&_.nodeType===vo.comment&&Je(/<[/\w]/g,_.data))return en(_),!0;if(!(un.tagCheck instanceof Function&&un.tagCheck(N))&&(!fe[N]||xe[N])){if(!xe[N]&&MA(N)&&(de.tagNameCheck instanceof RegExp&&Je(de.tagNameCheck,N)||de.tagNameCheck instanceof Function&&de.tagNameCheck(N)))return!1;if(nt&&!Ze[N]){const ue=B(_)||_.parentNode,Se=m(_)||_.childNodes;if(Se&&ue){const _e=Se.length;for(let Pe=_e-1;Pe>=0;--Pe){const hn=g(Se[Pe],!0);hn.__removalCount=(_.__removalCount||0)+1,ue.insertBefore(hn,h(_))}}}return en(_),!0}return _ instanceof l&&!Y0(_)||(N==="noscript"||N==="noembed"||N==="noframes")&&Je(/<\/no(script|embed|frames)/i,_.innerHTML)?(en(_),!0):(Fn&&_.nodeType===vo.text&&(F=_.textContent,Ci([we,Re,Ke],ue=>{F=Bo(F,ue," ")}),_.textContent!==F&&(mo(n.removed,{element:_.cloneNode()}),_.textContent=F)),_n(G.afterSanitizeElements,_,null),!1)},NA=function(_,F,N){if(xt&&(F==="id"||F==="name")&&(N in t||N in V0))return!1;if(!(Dt&&!Yn[F]&&Je(Ge,F))){if(!(Xn&&Je(Ft,F))){if(!(un.attributeCheck instanceof Function&&un.attributeCheck(F,_))){if(!ae[F]||Yn[F]){if(!(MA(_)&&(de.tagNameCheck instanceof RegExp&&Je(de.tagNameCheck,_)||de.tagNameCheck instanceof Function&&de.tagNameCheck(_))&&(de.attributeNameCheck instanceof RegExp&&Je(de.attributeNameCheck,F)||de.attributeNameCheck instanceof Function&&de.attributeNameCheck(F,_))||F==="is"&&de.allowCustomizedBuiltInElements&&(de.tagNameCheck instanceof RegExp&&Je(de.tagNameCheck,N)||de.tagNameCheck instanceof Function&&de.tagNameCheck(N))))return!1}else if(!Dc[F]){if(!Je(So,Bo(N,Tn,""))){if(!((F==="src"||F==="xlink:href"||F==="href")&&_!=="script"&&CC(N,"data:")===0&&SA[_])){if(!(To&&!Je(ve,Bo(N,Tn,"")))){if(N)return!1}}}}}}}return!0},MA=function(_){return _!=="annotation-xml"&&pc(_,fn)},LA=function(_){_n(G.beforeSanitizeAttributes,_,null);const{attributes:F}=_;if(!F||kc(_))return;const N={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ae,forceKeepAttr:void 0};let ue=F.length;for(;ue--;){const Se=F[ue],{name:_e,namespaceURI:Pe,value:hn}=Se,Mt=he(_e),Nc=hn;let Ie=_e==="value"?Nc:vC(Nc);if(N.attrName=Mt,N.attrValue=Ie,N.keepAttr=!0,N.forceKeepAttr=void 0,_n(G.uponSanitizeAttribute,_,N),Ie=N.attrValue,xi&&(Mt==="id"||Mt==="name")&&(tt(_e,_),Ie=et+Ie),En&&Je(/((--!?|])>)|<\/(style|title|textarea)/i,Ie)){tt(_e,_);continue}if(Mt==="attributename"&&pc(Ie,"href")){tt(_e,_);continue}if(N.forceKeepAttr)continue;if(!N.keepAttr){tt(_e,_);continue}if(!Oo&&Je(/\/>/i,Ie)){tt(_e,_);continue}Fn&&Ci([we,Re,Ke],jA=>{Ie=Bo(Ie,jA," ")});const UA=he(_.nodeName);if(!NA(UA,Mt,Ie)){tt(_e,_);continue}if(C&&typeof d=="object"&&typeof d.getAttributeType=="function"&&!Pe)switch(d.getAttributeType(UA,Mt)){case"TrustedHTML":{Ie=C.createHTML(Ie);break}case"TrustedScriptURL":{Ie=C.createScriptURL(Ie);break}}if(Ie!==Nc)try{Pe?_.setAttributeNS(Pe,_e,Ie):_.setAttribute(_e,Ie),kc(_)?en(_):Us(n.removed)}catch{tt(_e,_)}}_n(G.afterSanitizeAttributes,_,null)},X0=function j(_){let F=null;const N=xA(_);for(_n(G.beforeSanitizeShadowDOM,_,null);F=N.nextNode();)_n(G.uponSanitizeShadowNode,F,null),kA(F),LA(F),F.content instanceof r&&j(F.content);_n(G.afterSanitizeShadowDOM,_,null)};return n.sanitize=function(j){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},F=null,N=null,ue=null,Se=null;if(Rc=!j,Rc&&(j="<!-->"),typeof j!="string"&&!PA(j))if(typeof j.toString=="function"){if(j=j.toString(),typeof j!="string")throw yo("dirty is not a string, aborting")}else throw yo("toString is not a function");if(!n.isSupported)return j;if(Rt||Pc(_),n.removed=[],typeof j=="string"&&(Fo=!1),Fo){if(j.nodeName){const hn=he(j.nodeName);if(!fe[hn]||xe[hn])throw yo("root node is forbidden and cannot be sanitized in-place")}}else if(j instanceof a)F=RA("<!---->"),N=F.ownerDocument.importNode(j,!0),N.nodeType===vo.element&&N.nodeName==="BODY"||N.nodeName==="HTML"?F=N:F.appendChild(N);else{if(!qe&&!Fn&&!dn&&j.indexOf("<")===-1)return C&&Jn?C.createHTML(j):j;if(F=RA(j),!F)return qe?null:Jn?x:""}F&&Qn&&en(F.firstChild);const _e=xA(Fo?j:F);for(;ue=_e.nextNode();)kA(ue),LA(ue),ue.content instanceof r&&X0(ue.content);if(Fo)return j;if(qe){if(Zn)for(Se=ce.call(F.ownerDocument);F.firstChild;)Se.appendChild(F.firstChild);else Se=F;return(ae.shadowroot||ae.shadowrootmode)&&(Se=Z.call(o,Se,!0)),Se}let Pe=dn?F.outerHTML:F.innerHTML;return dn&&fe["!doctype"]&&F.ownerDocument&&F.ownerDocument.doctype&&F.ownerDocument.doctype.name&&Je(Gs,F.ownerDocument.doctype.name)&&(Pe="<!DOCTYPE "+F.ownerDocument.doctype.name+`>
`+Pe),Fn&&Ci([we,Re,Ke],hn=>{Pe=Bo(Pe,hn," ")}),C&&Jn?C.createHTML(Pe):Pe},n.setConfig=function(){let j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Pc(j),Rt=!0},n.clearConfig=function(){Nt=null,Rt=!1},n.isValidAttribute=function(j,_,F){Nt||Pc({});const N=he(j),ue=he(_);return NA(N,ue,F)},n.addHook=function(j,_){typeof _=="function"&&mo(G[j],_)},n.removeHook=function(j,_){if(_!==void 0){const F=BC(G[j],_);return F===-1?void 0:yC(G[j],F,1)[0]}return Us(G[j])},n.removeHooks=function(j){G[j]=[]},n.removeAllHooks=function(){G=$s()},n}var wi=Vs();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var mc=function(e,n){return mc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])},mc(e,n)};function It(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");mc(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}var Ys=function(){return Ys=Object.assign||function(n){for(var t,o=1,i=arguments.length;o<i;o++){t=arguments[o];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ys.apply(this,arguments)};function rw(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]]);return t}function cw(e,n,t,o){var i=arguments.length,r=i<3?n:o===null?o=Object.getOwnPropertyDescriptor(n,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,n,t,o);else for(var a=e.length-1;a>=0;a--)(c=e[a])&&(r=(i<3?c(r):i>3?c(n,t,r):c(n,t))||r);return i>3&&r&&Object.defineProperty(n,t,r),r}function aw(e,n){return function(t,o){n(t,o,e)}}function lw(e,n){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,n)}function LC(e,n,t,o){function i(r){return r instanceof t?r:new t(function(c){c(r)})}return new(t||(t=Promise))(function(r,c){function a(A){try{s(o.next(A))}catch(f){c(f)}}function l(A){try{s(o.throw(A))}catch(f){c(f)}}function s(A){A.done?r(A.value):i(A.value).then(a,l)}s((o=o.apply(e,n||[])).next())})}function Xs(e,n){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,c;return c={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function a(s){return function(A){return l([s,A])}}function l(s){if(o)throw new TypeError("Generator is already executing.");for(;t;)try{if(o=1,i&&(r=s[0]&2?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[s[0]&2,r.value]),s[0]){case 0:case 1:r=s;break;case 4:return t.label++,{value:s[1],done:!1};case 5:t.label++,i=s[1],s=[0];continue;case 7:s=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){t.label=s[1];break}if(s[0]===6&&t.label<r[1]){t.label=r[1],r=s;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(s);break}r[2]&&t.ops.pop(),t.trys.pop();continue}s=n.call(e,t)}catch(A){s=[6,A],i=0}finally{o=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}}var Qs=Object.create?function(e,n,t,o){o===void 0&&(o=t),Object.defineProperty(e,o,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,o){o===void 0&&(o=t),e[o]=n[t]};function sw(e,n){for(var t in e)t!=="default"&&!Object.prototype.hasOwnProperty.call(n,t)&&Qs(n,e,t)}function Io(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function In(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),i,r=[],c;try{for(;(n===void 0||n-- >0)&&!(i=o.next()).done;)r.push(i.value)}catch(a){c={error:a}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(c)throw c.error}}return r}function Aw(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(In(arguments[n]));return e}function fw(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;for(var o=Array(e),i=0,n=0;n<t;n++)for(var r=arguments[n],c=0,a=r.length;c<a;c++,i++)o[i]=r[c];return o}function wt(e,n){for(var t=0,o=n.length,i=e.length;t<o;t++,i++)e[i]=n[t];return e}function qn(e){return this instanceof qn?(this.v=e,this):new qn(e)}function UC(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),i,r=[];return i={},c("next"),c("throw"),c("return"),i[Symbol.asyncIterator]=function(){return this},i;function c(E){o[E]&&(i[E]=function(d){return new Promise(function(p,g){r.push([E,d,p,g])>1||a(E,d)})})}function a(E,d){try{l(o[E](d))}catch(p){f(r[0][3],p)}}function l(E){E.value instanceof qn?Promise.resolve(E.value.v).then(s,A):f(r[0][2],E)}function s(E){a("next",E)}function A(E){a("throw",E)}function f(E,d){E(d),r.shift(),r.length&&a(r[0][0],r[0][1])}}function uw(e){var n,t;return n={},o("next"),o("throw",function(i){throw i}),o("return"),n[Symbol.iterator]=function(){return this},n;function o(i,r){n[i]=e[i]?function(c){return(t=!t)?{value:qn(e[i](c)),done:i==="return"}:r?r(c):c}:r}}function jC(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof Io=="function"?Io(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(r){t[r]=e[r]&&function(c){return new Promise(function(a,l){c=e[r](c),i(a,l,c.done,c.value)})}}function i(r,c,a,l){Promise.resolve(l).then(function(s){r({value:s,done:a})},c)}}function Ew(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var HC=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function dw(e){if(e&&e.__esModule)return e;var n={};if(e!=null)for(var t in e)t!=="default"&&Object.prototype.hasOwnProperty.call(e,t)&&Qs(n,e,t);return HC(n,e),n}function pw(e){return e&&e.__esModule?e:{default:e}}function _w(e,n){if(!n.has(e))throw new TypeError("attempted to get private field on non-instance");return n.get(e)}function hw(e,n,t){if(!n.has(e))throw new TypeError("attempted to set private field on non-instance");return n.set(e,t),t}var Bc=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function re(e){return typeof e=="function"}function Zs(e){return re(e?.then)}function KC(e){var n=function(o){Error.call(o),o.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var yc=KC(function(e){return function(t){e(this),this.message=t?t.length+` errors occurred during unsubscription:
`+t.map(function(o,i){return i+1+") "+o.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=t}});function Cc(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var Si=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._teardowns=null}return e.prototype.unsubscribe=function(){var n,t,o,i,r;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var a=Io(c),l=a.next();!l.done;l=a.next()){var s=l.value;s.remove(this)}}catch(g){n={error:g}}finally{try{l&&!l.done&&(t=a.return)&&t.call(a)}finally{if(n)throw n.error}}else c.remove(this);var A=this.initialTeardown;if(re(A))try{A()}catch(g){r=g instanceof yc?g.errors:[g]}var f=this._teardowns;if(f){this._teardowns=null;try{for(var E=Io(f),d=E.next();!d.done;d=E.next()){var p=d.value;try{nA(p)}catch(g){r=r??[],g instanceof yc?r=wt(wt([],In(r)),In(g.errors)):r.push(g)}}}catch(g){o={error:g}}finally{try{d&&!d.done&&(i=E.return)&&i.call(E)}finally{if(o)throw o.error}}}if(r)throw new yc(r)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)nA(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._teardowns=(t=this._teardowns)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&Cc(t,n)},e.prototype.remove=function(n){var t=this._teardowns;t&&Cc(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),gw=Si.EMPTY;function eA(e){return e instanceof Si||e&&"closed"in e&&re(e.remove)&&re(e.add)&&re(e.unsubscribe)}function nA(e){re(e)?e():e.unsubscribe()}var $n={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},Ti={setTimeout:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Ti.delegate;return(t?.setTimeout||setTimeout).apply(void 0,wt([],In(e)))},clearTimeout:function(e){var n=Ti.delegate;return(n?.clearTimeout||clearTimeout)(e)},delegate:void 0};function tA(e){Ti.setTimeout(function(){var n=$n.onUnhandledError;if(n)n(e);else throw e})}function wo(){}var zC=function(){return vc("C",void 0,void 0)}();function WC(e){return vc("E",void 0,e)}function GC(e){return vc("N",e,void 0)}function vc(e,n,t){return{kind:e,value:n,error:t}}var Vn=null;function qC(e){if($n.useDeprecatedSynchronousErrorHandling){var n=!Vn;if(n&&(Vn={errorThrown:!1,error:null}),e(),n){var t=Vn,o=t.errorThrown,i=t.error;if(Vn=null,o)throw i}}else e()}function $C(e){$n.useDeprecatedSynchronousErrorHandling&&Vn&&(Vn.errorThrown=!0,Vn.error=e)}var Ic=function(e){It(n,e);function n(t){var o=e.call(this)||this;return o.isStopped=!1,t?(o.destination=t,eA(t)&&t.add(o)):o.destination=VC,o}return n.create=function(t,o,i){return new oA(t,o,i)},n.prototype.next=function(t){this.isStopped?Sc(GC(t),this):this._next(t)},n.prototype.error=function(t){this.isStopped?Sc(WC(t),this):(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped?Sc(zC,this):(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(Si),oA=function(e){It(n,e);function n(t,o,i){var r=e.call(this)||this,c;if(re(t))c=t;else if(t){c=t.next,o=t.error,i=t.complete;var a;r&&$n.useDeprecatedNextContext?(a=Object.create(t),a.unsubscribe=function(){return r.unsubscribe()}):a=t,c=c?.bind(a),o=o?.bind(a),i=i?.bind(a)}return r.destination={next:c?wc(c,r):wo,error:wc(o??iA,r),complete:i?wc(i,r):wo},r}return n}(Ic);function wc(e,n){return function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];try{e.apply(void 0,wt([],In(t)))}catch(i){$n.useDeprecatedSynchronousErrorHandling?$C(i):tA(i)}}}function iA(e){throw e}function Sc(e,n){var t=$n.onStoppedNotification;t&&Ti.setTimeout(function(){return t(e,n)})}var VC={closed:!0,next:wo,error:iA,complete:wo},Tc=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function rA(e){return e}function bw(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return cA(e)}function cA(e){return e.length===0?rA:e.length===1?e[0]:function(t){return e.reduce(function(o,i){return i(o)},t)}}var He=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,o){var i=this,r=XC(n)?n:new oA(n,t,o);return qC(function(){var c=i,a=c.operator,l=c.source;r.add(a?a.call(r,l):l?i._subscribe(r):i._trySubscribe(r))}),r},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var o=this;return t=aA(t),new t(function(i,r){var c;c=o.subscribe(function(a){try{n(a)}catch(l){r(l),c?.unsubscribe()}},r,i)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[Tc]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return cA(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=aA(n),new n(function(o,i){var r;t.subscribe(function(c){return r=c},function(c){return i(c)},function(){return o(r)})})},e.create=function(n){return new e(n)},e}();function aA(e){var n;return(n=e??$n.Promise)!==null&&n!==void 0?n:Promise}function YC(e){return e&&re(e.next)&&re(e.error)&&re(e.complete)}function XC(e){return e&&e instanceof Ic||YC(e)&&eA(e)}function lA(e){return re(e[Tc])}function sA(e){return Symbol.asyncIterator&&re(e?.[Symbol.asyncIterator])}function AA(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function QC(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var fA=QC();function uA(e){return re(e?.[fA])}function EA(e){return UC(this,arguments,function(){var t,o,i,r;return Xs(this,function(c){switch(c.label){case 0:t=e.getReader(),c.label=1;case 1:c.trys.push([1,,9,10]),c.label=2;case 2:return[4,qn(t.read())];case 3:return o=c.sent(),i=o.value,r=o.done,r?[4,qn(void 0)]:[3,5];case 4:return[2,c.sent()];case 5:return[4,qn(i)];case 6:return[4,c.sent()];case 7:return c.sent(),[3,2];case 8:return[3,10];case 9:return t.releaseLock(),[7];case 10:return[2]}})})}function dA(e){return re(e?.getReader)}function wn(e){if(e instanceof He)return e;if(e!=null){if(lA(e))return ZC(e);if(Bc(e))return e0(e);if(Zs(e))return n0(e);if(sA(e))return pA(e);if(uA(e))return t0(e);if(dA(e))return o0(e)}throw AA(e)}function ZC(e){return new He(function(n){var t=e[Tc]();if(re(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function e0(e){return new He(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function n0(e){return new He(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,tA)})}function t0(e){return new He(function(n){var t,o;try{for(var i=Io(e),r=i.next();!r.done;r=i.next()){var c=r.value;if(n.next(c),n.closed)return}}catch(a){t={error:a}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(t)throw t.error}}n.complete()})}function pA(e){return new He(function(n){i0(e,n).catch(function(t){return n.error(t)})})}function o0(e){return pA(EA(e))}function i0(e,n){var t,o,i,r;return LC(this,void 0,void 0,function(){var c,a;return Xs(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),t=jC(e),l.label=1;case 1:return[4,t.next()];case 2:if(o=l.sent(),!!o.done)return[3,4];if(c=o.value,n.next(c),n.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),i={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),o&&!o.done&&(r=t.return)?[4,r.call(t)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function r0(e){return re(e?.lift)}function St(e){return function(n){if(r0(n))return n.lift(function(t){try{return e(t,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}var Tt=function(e){It(n,e);function n(t,o,i,r,c){var a=e.call(this,t)||this;return a.onFinalize=c,a._next=o?function(l){try{o(l)}catch(s){t.error(s)}}:e.prototype._next,a._error=r?function(l){try{r(l)}catch(s){t.error(s)}finally{this.unsubscribe()}}:e.prototype._error,a._complete=i?function(){try{i()}catch(l){t.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,a}return n.prototype.unsubscribe=function(){var t,o=this.closed;e.prototype.unsubscribe.call(this),!o&&((t=this.onFinalize)===null||t===void 0||t.call(this))},n}(Ic);function _A(e,n){return St(function(t,o){var i=0;t.subscribe(new Tt(o,function(r){o.next(e.call(n,r,i++))}))})}function Sn(e,n,t,o,i){o===void 0&&(o=0),i===void 0&&(i=!1);var r=n.schedule(function(){t(),i?e.add(this.schedule(null,o)):this.unsubscribe()},o);if(e.add(r),!i)return r}function c0(e,n,t,o,i,r,c,a){var l=[],s=0,A=0,f=!1,E=function(){f&&!l.length&&!s&&n.complete()},d=function(g){return s<o?p(g):l.push(g)},p=function(g){r&&n.next(g),s++;var b=!1;wn(t(g,A++)).subscribe(new Tt(n,function(h){i?.(h),r?d(h):n.next(h)},function(){b=!0},void 0,function(){if(b)try{s--;for(var h=function(){var m=l.shift();c?Sn(n,c,function(){return p(m)}):p(m)};l.length&&s<o;)h();E()}catch(m){n.error(m)}}))};return e.subscribe(new Tt(n,d,function(){f=!0,E()})),function(){a?.()}}function Oi(e,n,t){return t===void 0&&(t=1/0),re(n)?Oi(function(o,i){return _A(function(r,c){return n(o,r,i,c)})(wn(e(o,i)))},t):(typeof n=="number"&&(t=n),St(function(o,i){return c0(o,i,e,t)}))}var a0=Array.isArray;function l0(e,n){return a0(n)?e.apply(void 0,wt([],In(n))):e(n)}function s0(e){return _A(function(n){return l0(e,n)})}var A0=["addListener","removeListener"],f0=["addEventListener","removeEventListener"],u0=["on","off"];function Fi(e,n,t,o){if(re(t)&&(o=t,t=void 0),o)return Fi(e,n,t).pipe(s0(o));var i=In(p0(e)?f0.map(function(a){return function(l){return e[a](n,l,t)}}):E0(e)?A0.map(hA(e,n)):d0(e)?u0.map(hA(e,n)):[],2),r=i[0],c=i[1];if(!r&&Bc(e))return Oi(function(a){return Fi(a,n,t)})(wn(e));if(!r)throw new TypeError("Invalid event target");return new He(function(a){var l=function(){for(var s=[],A=0;A<arguments.length;A++)s[A]=arguments[A];return a.next(1<s.length?s:s[0])};return r(l),function(){return c(l)}})}function hA(e,n){return function(t){return function(o){return e[t](n,o)}}}function E0(e){return re(e.addListener)&&re(e.removeListener)}function d0(e){return re(e.on)&&re(e.off)}function p0(e){return re(e.addEventListener)&&re(e.removeEventListener)}function _0(e){return e===void 0&&(e=1/0),Oi(rA,e)}var h0,Oc=new He(function(e){return e.complete()});function mw(e){return e?g0(e):Oc}function g0(e){return new h0(function(n){return e.schedule(function(){return n.complete()})})}function gA(e){return e&&re(e.schedule)}var b0;function Fc(e){return e[e.length-1]}function Bw(e){return b0(Fc(e))?e.pop():void 0}function m0(e){return gA(Fc(e))?e.pop():void 0}function B0(e,n){return typeof Fc(e)=="number"?e.pop():n}function bA(e,n){return n===void 0&&(n=0),St(function(t,o){t.subscribe(new Tt(o,function(i){return Sn(o,e,function(){return o.next(i)},n)},function(){return Sn(o,e,function(){return o.complete()},n)},function(i){return Sn(o,e,function(){return o.error(i)},n)}))})}function mA(e,n){return n===void 0&&(n=0),St(function(t,o){o.add(e.schedule(function(){return t.subscribe(o)},n))})}function y0(e,n){return wn(e).pipe(mA(n),bA(n))}function C0(e,n){return wn(e).pipe(mA(n),bA(n))}function v0(e,n){return new He(function(t){var o=0;return n.schedule(function(){o===e.length?t.complete():(t.next(e[o++]),t.closed||this.schedule())})})}function I0(e,n){return new He(function(t){var o;return Sn(t,n,function(){o=e[fA](),Sn(t,n,function(){var i,r,c;try{i=o.next(),r=i.value,c=i.done}catch(a){t.error(a);return}c?t.complete():t.next(r)},0,!0)}),function(){return re(o?.return)&&o.return()}})}function BA(e,n){if(!e)throw new Error("Iterable cannot be null");return new He(function(t){Sn(t,n,function(){var o=e[Symbol.asyncIterator]();Sn(t,n,function(){o.next().then(function(i){i.done?t.complete():t.next(i.value)})},0,!0)})})}function w0(e,n){return BA(EA(e),n)}function S0(e,n){if(e!=null){if(lA(e))return y0(e,n);if(Bc(e))return v0(e,n);if(Zs(e))return C0(e,n);if(sA(e))return BA(e,n);if(uA(e))return I0(e,n);if(dA(e))return w0(e,n)}throw AA(e)}function T0(e,n){return n?S0(e,n):wn(e)}function O0(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=m0(e),o=B0(e,1/0),i=e;return i.length?i.length===1?wn(i[0]):_0(o)(T0(i,t)):Oc}var F0=function(e){It(n,e);function n(t,o){return e.call(this)||this}return n.prototype.schedule=function(t,o){return o===void 0&&(o=0),this},n}(Si),Ji={setInterval:function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Ji.delegate;return(t?.setInterval||setInterval).apply(void 0,wt([],In(e)))},clearInterval:function(e){var n=Ji.delegate;return(n?.clearInterval||clearInterval)(e)},delegate:void 0},J0=function(e){It(n,e);function n(t,o){var i=e.call(this,t,o)||this;return i.scheduler=t,i.work=o,i.pending=!1,i}return n.prototype.schedule=function(t,o){if(o===void 0&&(o=0),this.closed)return this;this.state=t;var i=this.id,r=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(r,i,o)),this.pending=!0,this.delay=o,this.id=this.id||this.requestAsyncId(r,this.id,o),this},n.prototype.requestAsyncId=function(t,o,i){return i===void 0&&(i=0),Ji.setInterval(t.flush.bind(t,this),i)},n.prototype.recycleAsyncId=function(t,o,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return o;Ji.clearInterval(o)},n.prototype.execute=function(t,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(t,o);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,o){var i=!1,r;try{this.work(t)}catch(c){i=!0,r=c||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,o=t.id,i=t.scheduler,r=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Cc(r,this),o!=null&&(this.id=this.recycleAsyncId(i,o,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},n}(F0),yA={now:function(){return(yA.delegate||Date).now()},delegate:void 0},CA=function(){function e(n,t){t===void 0&&(t=e.now),this.schedulerActionCtor=n,this.now=t}return e.prototype.schedule=function(n,t,o){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(o,t)},e.now=yA.now,e}(),D0=function(e){It(n,e);function n(t,o){o===void 0&&(o=CA.now);var i=e.call(this,t,o)||this;return i.actions=[],i._active=!1,i._scheduled=void 0,i}return n.prototype.flush=function(t){var o=this.actions;if(this._active){o.push(t);return}var i;this._active=!0;do if(i=t.execute(t.state,t.delay))break;while(t=o.shift());if(this._active=!1,i){for(;t=o.shift();)t.unsubscribe();throw i}},n}(CA),R0=new D0(J0),x0=R0;function P0(e){return e instanceof Date&&!isNaN(e)}function vA(e,n,t){e===void 0&&(e=0),t===void 0&&(t=x0);var o=-1;return n!=null&&(gA(n)?t=n:o=n),new He(function(i){var r=P0(e)?+e-t.now():e;r<0&&(r=0);var c=0;return t.schedule(function(){i.closed||(i.next(c++),0<=o?this.schedule(void 0,o):i.complete())},r)})}function IA(e){return St(function(n,t){wn(e).subscribe(new Tt(t,function(){return t.complete()},wo)),!t.closed&&n.subscribe(t)})}function k0(e){return e<=0?function(){return Oc}:St(function(n,t){var o=0;n.subscribe(new Tt(t,function(i){++o<=e&&(t.next(i),e<=o&&t.complete())}))})}var Di=z(4871),Ot={};Ot.styleTagTransform=Wt(),Ot.setAttributes=Kt(),Ot.insert=Ht().bind(null,"head"),Ot.domAPI=jt(),Ot.insertStyleElement=zt();var yw=Ut()(Di.A,Ot);const Cw=Di.A&&Di.A.locals?Di.A.locals:void 0;var N0=(e=>(e.PENDING="pending",e.LOADED="loaded",e.LOADING="loading",e.ERROR="error",e))(N0||{});const M0=({imageUri:e})=>{const[n,t]=yn("pending");return Xe(()=>{async function i(){if(!e){t("error"),Oe.error("fetchIconImage: avatar image url is not available");return}if(n!=="pending")return;const r=()=>new Promise((c,a)=>{const l=new Image;l.onerror=s=>a(s),l.onload=()=>c(),l.src=e});try{t("loading"),await r(),t("loaded")}catch(c){Oe.error("fetchIconImage: failed to load avatar image",{error:c}),t("error")}}i()},[]),V("span",{children:n==="loaded"||n==="loading"?V("img",{className:"Avatar",src:e,draggable:!1}):V("div",{className:"Avatar",style:{width:"36px",height:"36px",backgroundColor:"var(--sk_foreground_low)"}})})},L0=()=>{const e=new Date;let n;try{n=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch(t){Oe.warn("getTimestamp: Failed to get timestamp via toLocaleTimeString, try fallback",{error:t});try{n=new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric"}).format(e),Oe.info("getTimestamp: Current locale info in system",{resolvedOptions:Intl.DateTimeFormat().resolvedOptions()})}catch(o){Oe.error("getTimestamp: Failed to get timestamp, skipping render timestamp",{error:o})}}return n},U0=e=>{const n=co(p=>p.settings),{notificationTimeout:t,notificationAfterHoverTimeout:o}=n;let i=null;Lr(()=>{if(!i)return;const p=Number.isSafeInteger(t)?t:6e3,g=Number.isSafeInteger(o)?o:2e3;if(oa(n)){Oe.info("NotificationMessage: disabling dismiss timeout");return}const b=Fi(i,"mouseleave"),h=Fi(i,"mouseover"),m=O0(vA(p).pipe(IA(h)),b.pipe(Oi(()=>vA(g).pipe(IA(h))))).pipe(k0(1)).subscribe(()=>window.desktop.notifications.removeNotification(e.notification.id));return m.unsubscribe.bind(m)},[i,t,o,e.notification]);const r=()=>{const{id:p,teamId:g,msg:b,thread_ts:h,channel:m,trace_id:B}=e.notification;window.desktop.notifications.clickNotification({notificationId:p,channel:m,teamId:g,messageId:b,traceId:B,threadTimestamp:h}),mi(e.notification,bo.DESKTOP_NOTIFICATION_CLICK)},c=(p,g="",b="")=>{const h=p||g,m=h.startsWith(`${b}: `)?h.replace(`${b}: `,""):h,B=wi.sanitize(m,{USE_PROFILES:{html:!0}});return Array.isArray(wi.removed)&&wi.removed.length>0&&Oe.warn("getContent removed",{removed:wi.removed}),B},{content:a,title:l,avatarImage:s,imageUri:A}=e.notification,{authorName:f}=Em(e.notification),E=c(a,l,f),d=L0();return Xe(()=>{mi(e.notification,bo.DESKTOP_NOTIFICATION_SUCCESS)},[]),V("div",{"data-testid":"notification-message",className:"Message",onClick:r,ref:p=>i=p,children:[V(M0,{imageUri:s}),V("div",{className:"Content",children:[V("h5",{children:[f," ",d?V("span",{className:"Timestamp",children:d}):null]}),V("p",{dangerouslySetInnerHTML:{__html:E}}),A?V("img",{src:A}):null]})]})},j0=e=>{const{notifications:n,showClose:t,name:o,id:i}=e,r=()=>{const a=(n??[])[0]?.teamId;return a||Oe.warn("renderOpenChannel: notification does not include workspaceId to open channel",{notifications:n}),V("a",{href:"#",className:"OpenChannel",onClick:()=>window.desktop.notifications.handleDeepLink({url:`slack://channel?team=${a}&id=${i}`}),children:V("h4",{children:o})})},c=()=>V("a",{href:"#",onClick:()=>n.forEach(l=>{window.desktop.notifications.removeNotification(l.id),mi(l,bo.DESKTOP_NOTIFICATION_DISMISSED)}),className:"Close",children:V("i",{className:"c-icon c-icon--times"})});return V("div",{className:"Channel",children:[V("header",{children:[o?r():V("a",{className:"OpenChannel"}),t?c():null]}),V("div",{className:"Messages",children:n.map(a=>V(U0,{notification:a},a.id))})]})},H0=(e,n)=>{const{webapp:t,workspaces:o}=n,i=Km(t,e),r=i?i.theme:go,{titlebarBackground:c,titlebarTextColor:a}=r;(!c||!a)&&Oe.warn("buildTeamObject: team object missing properties",{id:e,theme:i.theme});const l=o[e];return l?{theme:{menu_bg:c??go.titlebarBackground,text_color:a??go.titlebarTextColor},team_name:l.name}:null},K0=e=>{const n=Object.keys(e),t=n.length>1;return n.map(o=>{const i=e[o]&&e[o].length>0&&um(e[o][0]).channelName||"";return V(j0,{showClose:t,name:i,id:o,notifications:e[o]},o)})},z0=e=>{const n=co(s=>s),{id:t,channels:o}=e,i=H0(t,n),r=()=>{const s=o?Object.keys(o):[],A={team:t};s.length>0?A.id=s[0]:Oe.warn("openTeam: Notification group contains no notification. Unable to navigate to channel.");const f=dC("channel",A);window.desktop.notifications.handleDeepLink({url:f}),oa(n.settings)&&c()},c=()=>{for(const s of Object.keys(o))for(const A of o[s])window.desktop.notifications.removeNotification(A.id),mi(A,bo.DESKTOP_NOTIFICATION_DISMISSED)};if(!i)return null;const a=i&&i.theme.menu_bg?{color:i.theme.text_color}:{},l=i&&i.theme.menu_bg?{background:`linear-gradient(to bottom, ${i.theme.menu_bg} 40px, #fff 2%)`}:{};return V("div",{className:"Team",style:l,children:[V("header",{style:a,children:[V("a",{href:"#","data-testid":"open-team",className:"OpenTeam",onClick:r,children:[V("i",{className:"c-icon c-icon--vogue c-icon--inline"}),V("h3",{children:i.team_name})]}),V("a",{href:"#","data-testid":"close-notification",className:"Close",onClick:c,children:V("i",{className:"c-icon c-icon--times c-icon--inline"})})]}),V("div",{className:"Channels",children:K0(o)})]})},Ri=(e,n)=>e.id===n.id,wA=()=>{const e=co(B=>{const{notificationMaxItems:C,notifyPosition:x,userTheme:P}=B.settings,R=x.corner.split("_")[0]==="top";return{notificationMaxItems:C!==void 0?C:3,isTop:R,scaleFactor:Df(B.settings),userTheme:P}}),n=co(B=>B.notifications.notifications),[t,o]=yn([]),i=cn([]);Xe(()=>{i.current=n});const[r,c]=yn({x:0,y:0,show:!1}),a=cn(null),l=Et((B,C)=>s(!0),[r]);hh({onResize:l,targetRef:a,skipOnMount:!0,handleWidth:!1});const s=(B=!1)=>{const C=a.current;if(!C)return;const x=C.offsetLeft*e.scaleFactor,P=C.offsetHeight*e.scaleFactor,R=t.length>0,ce=x!==r.x||P!==r.y;B&&ce&&x>0&&P>0?window.desktop.notifications.setNotificationsWindowShape({x,y:P,show:r.show}):B||(window.desktop.notifications.setNotificationsWindowShape({x,y:P,show:R}),c({x,y:P,show:R}))};Lr(()=>s(),[t]),hm();const A=Vo(n,t,Ri),f=Vo(i.current,n,Ri),E=Math.max(0,t.length-f.length),d=Vo(n,t,Ri).splice(0,e.notificationMaxItems-E),p=gd(t,d),g=ya(Vo(p,f,Ri));Oe.debug("NotificationHost: Calculating notification items to render",{currentNotificationItemsQueue:n.map(B=>B.id),prevNotificationItemsQueue:i.current.map(B=>B.id),currentOnscreenItems:t.map(B=>B.id),remainingItemsInQueue:A.map(B=>B.id),removedItems:f.map(B=>B.id),itemsToAddOnScreen:d.map(B=>B.id),updatedItemsWithDismissed:p.map(B=>B.id),itemsShouldOnScreen:g.map(B=>B.id)}),d.length>0||f.length>0?Er(g,t)||(Oe.debug("NotificationHost: render new onscreen notification items"),o(g)):Oe.debug("NotificationHost: re-render triggered but no changes in onscreen notification items");const b={flexDirection:e.isTop?"column":"column-reverse"},h=fm(t),m=Object.entries(h).map(([B,C])=>V(Ch,{id:B,timeout:400,children:V(z0,{id:B,channels:C},B)}));return V("span",{className:"Notifications2018",children:V("div",{className:`NotificationHost NotificationHost--${e.userTheme}`,style:b,children:V(Fh,{id:"NotificationHost-list",className:"NotificationHost-list",nodeRef:a,children:V("div",{ref:a,style:{width:"100%",height:"100%"},children:m})})})})};window.open=null,qg(wA,"span")})(),ev=Li})()});nv();})();

//# sourceMappingURL=notifications.bundle.js.map
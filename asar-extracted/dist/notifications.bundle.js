(()=>{var fB=Object.defineProperty;var uB=(Ue,Se,$)=>Se in Ue?fB(Ue,Se,{enumerable:!0,configurable:!0,writable:!0,value:$}):Ue[Se]=$;var EB=(Ue,Se)=>()=>(Se||Ue((Se={exports:{}}).exports,Se),Se.exports);var fe=(Ue,Se,$)=>uB(Ue,typeof Se!="symbol"?Se+"":Se,$);var pB=EB((Cn,yn)=>{(function(){try{var Ue=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Se=new Error().stack;Se&&(Ue._sentryDebugIds=Ue._sentryDebugIds||{},Ue._sentryDebugIds[Se]="72303f34-a2b2-4e12-b42a-413b3903b6b5",Ue._sentryDebugIdIdentifier="sentry-dbid-72303f34-a2b2-4e12-b42a-413b3903b6b5")}catch{}})();var dB=typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};dB.SENTRY_RELEASE={id:"Slack@4.47.69"};var hB;(()=>{var Ue={7100:(p,v,h)=>{"use strict";h.d(v,{A:()=>N});var O=h(264),F=h.n(O),J=h(6520),C=h.n(J),T=C()(F());T.push([p.id,`.Avatar {
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
`],sourceRoot:""}]);const N=T},9490:(p,v,h)=>{"use strict";h.d(v,{A:()=>N});var O=h(264),F=h.n(O),J=h(6520),C=h.n(J),T=C()(F());T.push([p.id,`.Notifications2018 .Channels {
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
`],sourceRoot:""}]);const N=T},3734:(p,v,h)=>{"use strict";h.d(v,{A:()=>N});var O=h(264),F=h.n(O),J=h(6520),C=h.n(J),T=C()(F());T.push([p.id,`.Notifications2018 .Message:hover {
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
`],sourceRoot:""}]);const N=T},1685:(p,v,h)=>{"use strict";h.d(v,{A:()=>Ke});var O=h(264),F=h.n(O),J=h(6520),C=h.n(J),T=h(9571),N=h.n(T),z=new URL(h(5539),h.b),M=new URL(h(4603),h.b),V=new URL(h(4392),h.b),U=new URL(h(9138),h.b),P=new URL(h(5906),h.b),Q=new URL(h(9269),h.b),te=new URL(h(5959),h.b),re=new URL(h(7),h.b),Y=new URL(h(6723),h.b),ue=C()(F()),he=N()(z),le=N()(M),G=N()(V),oe=N()(U),D=N()(P),x=N()(Q),L=N()(te),An=N()(re),Ne=N()(Y);ue.push([p.id,`/*

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
  src: url(${he}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Regular */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 400;
  src: url(${le}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 700;
  src: url(${G}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black */
@font-face {
  font-family: 'Slack-Lato';
  font-style: normal;
  font-weight: 900;
  src: url(${oe}) format('woff2');
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
  src: url(${x}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Bold Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 700;
  src: url(${L}) format('woff2');
  unicode-range: U+0000-F8FE, U+F900-FFFF;
}
/* Black Italic */
@font-face {
  font-family: 'Slack-Lato';
  font-style: italic;
  font-weight: 900;
  src: url(${An}) format('woff2');
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
  src: url(${Ne}) format('woff2');
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
`,"",{version:3,sources:["webpack://./src/renderer/styles/html-notifications/notification-host.less","webpack://./src/resources/lato.less","webpack://./src/resources/plastic/plastic_typography.less","webpack://./src/resources/plastic/plastic_utilities.less","webpack://./src/resources/slack-icons-font.less"],names:[],mappings:"AAAA;;;;;;;;;;CAUC;AACD,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,YAAY;ACGZ;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,SAAS;ACGT;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,UAAU;ACGV;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,mBAAmB;ACGnB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,gBAAgB;ACGhB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA,iBAAiB;ACGjB;EACE,yBAAA;EACA,kBAAA;EACA,gBAAA;EACA,4DAAA;EACA,uCAAA;ADDF;AACA;;;;;;;;;;;;;EAaE;AACF;;;;EAIE;AEvFF;EACE,wBAAA;EACA,2BAAA;EACA,qBAAA;AFyFF;AACA,sEAAsE;AACtE;;;;;;;EAOE;AACF;;;CAGC;AACD;;;CAGC;AGpBD;EACE,iBAAA;AHsBF;AGpBA;EACE,iBAAA;AHsBF;AIjHA;EAEE,uBAAA;EACA,4DAAA;EACA,kBAAA;EACA,gBAAA;AJkHF;AItGA;EACE,kBAAA;EACA,oBAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;AJwGF;AIvGE;EAfA,uBAAA;EACA,eAAA;EACA,kBAAA;EACA,mBAAA;EACA,qBAAA;EACA,sBAAA;AJyHF;AIvGA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;AJyGF;AIxGE;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;AJ0GJ;AIxGE;EAEE,gBAAA;AJyGJ;AIlGA;EACE,UAAA;AJoGF;AInGE;EACE,kBAAA;AJqGJ;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AIiiBA;EACE,gBAAA;AJ/hBF;AImkBA;EAEE,WAAA;AJlkBF;AIujBE;EACE,gBAAA;EACA,cAAA;AJrjBJ;AIujBE;EACE,yBAAA;AJrjBJ;AI6jBE;EACE,eAAA;AJ3jBJ;AI+jBA;EAEE,WAAA;AJ9jBF;AI0iBE;EACE,gBAAA;EACA,cAAA;AJxiBJ;AI0iBE;EACE,yBAAA;AJxiBJ;AIyjBE;EACE,eAAA;AJvjBJ;AI2jBA;EAEE,WAAA;AJ1jBF;AI6hBE;EACE,gBAAA;EACA,cAAA;AJ3hBJ;AI6hBE;EACE,yBAAA;AJ3hBJ;AIqjBE;EACE,eAAA;AJnjBJ;AImhBE;EACE,gBAAA;EACA,cAAA;AJjhBJ;AImhBE;EACE,yBAAA;AJjhBJ;AI4gBE;EACE,gBAAA;EACA,cAAA;AJ1gBJ;AI4gBE;EACE,yBAAA;AJ1gBJ;AIqgBE;EACE,gBAAA;EACA,cAAA;AJngBJ;AIqgBE;EACE,yBAAA;AJngBJ;AI8fE;EACE,gBAAA;EACA,cAAA;AJ5fJ;AI8fE;EACE,yBAAA;AJ5fJ;AIufE;EACE,gBAAA;EACA,cAAA;AJrfJ;AIufE;EACE,yBAAA;AJrfJ;AIgfE;EACE,gBAAA;EACA,cAAA;AJ9eJ;AIgfE;EACE,yBAAA;AJ9eJ;AIyeE;EACE,gBAAA;EACA,cAAA;AJveJ;AIyeE;EACE,yBAAA;AJveJ;AIkeE;EACE,gBAAA;EACA,cAAA;AJheJ;AIkeE;EACE,yBAAA;AJheJ;AI2dE;EACE,gBAAA;EACA,cAAA;AJzdJ;AI2dE;EACE,yBAAA;AJzdJ;AIodE;EACE,gBAAA;EACA,cAAA;AJldJ;AIodE;EACE,yBAAA;AJldJ;AI6cE;EACE,gBAAA;EACA,cAAA;AJ3cJ;AI6cE;EACE,yBAAA;AJ3cJ;AIscE;EACE,gBAAA;EACA,cAAA;AJpcJ;AIscE;EACE,yBAAA;AJpcJ;AI+bE;EACE,gBAAA;EACA,cAAA;AJ7bJ;AI+bE;EACE,yBAAA;AJ7bJ;AIwbE;EACE,gBAAA;EACA,cAAA;AJtbJ;AIwbE;EACE,yBAAA;AJtbJ;AIibE;EACE,gBAAA;EACA,cAAA;AJ/aJ;AIibE;EACE,yBAAA;AJ/aJ;AI0aE;EACE,gBAAA;EACA,cAAA;AJxaJ;AI0aE;EACE,yBAAA;AJxaJ;AImaE;EACE,gBAAA;EACA,cAAA;AJjaJ;AImaE;EACE,yBAAA;AJjaJ;AI4ZE;EACE,gBAAA;EACA,cAAA;AJ1ZJ;AI4ZE;EACE,yBAAA;AJ1ZJ;AIqZE;EACE,gBAAA;EACA,cAAA;AJnZJ;AIqZE;EACE,yBAAA;AJnZJ;AI8YE;EACE,gBAAA;EACA,cAAA;AJ5YJ;AI8YE;EACE,yBAAA;AJ5YJ;AIuYE;EACE,gBAAA;EACA,cAAA;AJrYJ;AIuYE;EACE,yBAAA;AJrYJ;AIgYE;EACE,gBAAA;EACA,cAAA;AJ9XJ;AIgYE;EACE,yBAAA;AJ9XJ;AIyXE;EACE,gBAAA;EACA,cAAA;AJvXJ;AIyXE;EACE,yBAAA;AJvXJ;AIkXE;EACE,gBAAA;EACA,cAAA;AJhXJ;AIkXE;EACE,yBAAA;AJhXJ;AI2WE;EACE,gBAAA;EACA,cAAA;AJzWJ;AI2WE;EACE,yBAAA;AJzWJ;AIoWE;EACE,gBAAA;EACA,cAAA;AJlWJ;AIoWE;EACE,yBAAA;AJlWJ;AI6VE;EACE,gBAAA;EACA,cAAA;AJ3VJ;AI6VE;EACE,yBAAA;AJ3VJ;AIsVE;EACE,gBAAA;EACA,cAAA;AJpVJ;AIsVE;EACE,yBAAA;AJpVJ;AI+UE;EACE,gBAAA;EACA,cAAA;AJ7UJ;AI+UE;EACE,yBAAA;AJ7UJ;AIwUE;EACE,gBAAA;EACA,cAAA;AJtUJ;AIwUE;EACE,yBAAA;AJtUJ;AIiUE;EACE,gBAAA;EACA,cAAA;AJ/TJ;AIiUE;EACE,yBAAA;AJ/TJ;AI0TE;EACE,gBAAA;EACA,cAAA;AJxTJ;AI0TE;EACE,yBAAA;AJxTJ;AImTE;EACE,gBAAA;EACA,cAAA;AJjTJ;AImTE;EACE,yBAAA;AJjTJ;AI4SE;EACE,gBAAA;EACA,cAAA;AJ1SJ;AI4SE;EACE,yBAAA;AJ1SJ;AIqSE;EACE,gBAAA;EACA,cAAA;AJnSJ;AIqSE;EACE,yBAAA;AJnSJ;AI8RE;EACE,gBAAA;EACA,cAAA;AJ5RJ;AI8RE;EACE,yBAAA;AJ5RJ;AIuRE;EACE,gBAAA;EACA,cAAA;AJrRJ;AIuRE;EACE,yBAAA;AJrRJ;AIgRE;EACE,gBAAA;EACA,cAAA;AJ9QJ;AIgRE;EACE,yBAAA;AJ9QJ;AIyQE;EACE,gBAAA;EACA,cAAA;AJvQJ;AIyQE;EACE,yBAAA;AJvQJ;AIkQE;EACE,gBAAA;EACA,cAAA;AJhQJ;AIkQE;EACE,yBAAA;AJhQJ;AI2PE;EACE,gBAAA;EACA,cAAA;AJzPJ;AI2PE;EACE,yBAAA;AJzPJ;AIoPE;EACE,gBAAA;EACA,cAAA;AJlPJ;AIoPE;EACE,yBAAA;AJlPJ;AI6OE;EACE,gBAAA;EACA,cAAA;AJ3OJ;AI6OE;EACE,yBAAA;AJ3OJ;AIsOE;EACE,gBAAA;EACA,cAAA;AJpOJ;AIsOE;EACE,yBAAA;AJpOJ;AI+NE;EACE,gBAAA;EACA,cAAA;AJ7NJ;AI+NE;EACE,yBAAA;AJ7NJ;AIwNE;EACE,gBAAA;EACA,cAAA;AJtNJ;AIwNE;EACE,yBAAA;AJtNJ;AIiNE;EACE,gBAAA;EACA,cAAA;AJ/MJ;AIiNE;EACE,yBAAA;AJ/MJ;AI0ME;EACE,gBAAA;EACA,cAAA;AJxMJ;AI0ME;EACE,yBAAA;AJxMJ;AImME;EACE,gBAAA;EACA,cAAA;AJjMJ;AImME;EACE,yBAAA;AJjMJ;AI4LE;EACE,gBAAA;EACA,cAAA;AJ1LJ;AI4LE;EACE,yBAAA;AJ1LJ;AIqLE;EACE,gBAAA;EACA,cAAA;AJnLJ;AIqLE;EACE,yBAAA;AJnLJ;AI8KE;EACE,gBAAA;EACA,cAAA;AJ5KJ;AI8KE;EACE,yBAAA;AJ5KJ;AIuKE;EACE,gBAAA;EACA,cAAA;AJrKJ;AIuKE;EACE,yBAAA;AJrKJ;AIgKE;EACE,gBAAA;EACA,cAAA;AJ9JJ;AIgKE;EACE,yBAAA;AJ9JJ;AIyJE;EACE,gBAAA;EACA,cAAA;AJvJJ;AIyJE;EACE,yBAAA;AJvJJ;AIkJE;EACE,gBAAA;EACA,cAAA;AJhJJ;AIkJE;EACE,yBAAA;AJhJJ;AI2IE;EACE,gBAAA;EACA,cAAA;AJzIJ;AI2IE;EACE,yBAAA;AJzIJ;AIoIE;EACE,gBAAA;EACA,cAAA;AJlIJ;AIoIE;EACE,yBAAA;AJlIJ;AI6HE;EACE,gBAAA;EACA,cAAA;AJ3HJ;AI6HE;EACE,yBAAA;AJ3HJ;AIsHE;EACE,gBAAA;EACA,cAAA;AJpHJ;AIsHE;EACE,yBAAA;AJpHJ;AI+GE;EACE,gBAAA;EACA,cAAA;AJ7GJ;AI+GE;EACE,yBAAA;AJ7GJ;AIwGE;EACE,gBAAA;EACA,cAAA;AJtGJ;AIwGE;EACE,yBAAA;AJtGJ;AIiGE;EACE,gBAAA;EACA,cAAA;AJ/FJ;AIiGE;EACE,yBAAA;AJ/FJ;AI0FE;EACE,gBAAA;EACA,cAAA;AJxFJ;AI0FE;EACE,yBAAA;AJxFJ;AImFE;EACE,gBAAA;EACA,cAAA;AJjFJ;AImFE;EACE,yBAAA;AJjFJ;AI4EE;EACE,gBAAA;EACA,cAAA;AJ1EJ;AI4EE;EACE,yBAAA;AJ1EJ;AIqEE;EACE,gBAAA;EACA,cAAA;AJnEJ;AIqEE;EACE,yBAAA;AJnEJ;AI8DE;EACE,gBAAA;EACA,cAAA;AJ5DJ;AI8DE;EACE,yBAAA;AJ5DJ;AIuDE;EACE,gBAAA;EACA,cAAA;AJrDJ;AIuDE;EACE,yBAAA;AJrDJ;AIgDE;EACE,gBAAA;EACA,cAAA;AJ9CJ;AIgDE;EACE,yBAAA;AJ9CJ;AIyCE;EACE,gBAAA;EACA,cAAA;AJvCJ;AIyCE;EACE,yBAAA;AJvCJ;AIkCE;EACE,gBAAA;EACA,cAAA;AJhCJ;AIkCE;EACE,yBAAA;AJhCJ;AI2BE;EACE,gBAAA;EACA,cAAA;AJzBJ;AI2BE;EACE,yBAAA;AJzBJ;AIoBE;EACE,gBAAA;EACA,cAAA;AJlBJ;AIoBE;EACE,yBAAA;AJlBJ;AIaE;EACE,gBAAA;EACA,cAAA;AJXJ;AIaE;EACE,yBAAA;AJXJ;AIME;EACE,gBAAA;EACA,cAAA;AJJJ;AIME;EACE,yBAAA;AJJJ;AIDE;EACE,gBAAA;EACA,cAAA;AJGJ;AIDE;EACE,yBAAA;AJGJ;AIRE;EACE,gBAAA;EACA,cAAA;AJUJ;AIRE;EACE,yBAAA;AJUJ;AIfE;EACE,gBAAA;EACA,cAAA;AJiBJ;AIfE;EACE,yBAAA;AJiBJ;AItBE;EACE,gBAAA;EACA,cAAA;AJwBJ;AItBE;EACE,yBAAA;AJwBJ;AI7BE;EACE,gBAAA;EACA,cAAA;AJ+BJ;AI7BE;EACE,yBAAA;AJ+BJ;AIpCE;EACE,gBAAA;EACA,cAAA;AJsCJ;AIpCE;EACE,yBAAA;AJsCJ;AI3CE;EACE,gBAAA;EACA,cAAA;AJ6CJ;AI3CE;EACE,yBAAA;AJ6CJ;AIlDE;EACE,gBAAA;EACA,cAAA;AJoDJ;AIlDE;EACE,yBAAA;AJoDJ;AIzDE;EACE,gBAAA;EACA,cAAA;AJ2DJ;AIzDE;EACE,yBAAA;AJ2DJ;AIhEE;EACE,gBAAA;EACA,cAAA;AJkEJ;AIhEE;EACE,yBAAA;AJkEJ;AIvEE;EACE,gBAAA;EACA,cAAA;AJyEJ;AIvEE;EACE,yBAAA;AJyEJ;AI9EE;EACE,gBAAA;EACA,cAAA;AJgFJ;AI9EE;EACE,yBAAA;AJgFJ;AIrFE;EACE,gBAAA;EACA,cAAA;AJuFJ;AIrFE;EACE,yBAAA;AJuFJ;AI5FE;EACE,gBAAA;EACA,cAAA;AJ8FJ;AI5FE;EACE,yBAAA;AJ8FJ;AInGE;EACE,gBAAA;EACA,cAAA;AJqGJ;AInGE;EACE,yBAAA;AJqGJ;AI1GE;EACE,gBAAA;EACA,cAAA;AJ4GJ;AI1GE;EACE,yBAAA;AJ4GJ;AIjHE;EACE,gBAAA;EACA,cAAA;AJmHJ;AIjHE;EACE,yBAAA;AJmHJ;AIxHE;EACE,gBAAA;EACA,cAAA;AJ0HJ;AIxHE;EACE,yBAAA;AJ0HJ;AI/HE;EACE,gBAAA;EACA,cAAA;AJiIJ;AI/HE;EACE,yBAAA;AJiIJ;AItIE;EACE,gBAAA;EACA,cAAA;AJwIJ;AItIE;EACE,yBAAA;AJwIJ;AI7IE;EACE,gBAAA;EACA,cAAA;AJ+IJ;AI7IE;EACE,yBAAA;AJ+IJ;AIpJE;EACE,gBAAA;EACA,cAAA;AJsJJ;AIpJE;EACE,yBAAA;AJsJJ;AI3JE;EACE,gBAAA;EACA,cAAA;AJ6JJ;AI3JE;EACE,yBAAA;AJ6JJ;AIlKE;EACE,gBAAA;EACA,cAAA;AJoKJ;AIlKE;EACE,yBAAA;AJoKJ;AIzKE;EACE,gBAAA;EACA,cAAA;AJ2KJ;AIzKE;EACE,yBAAA;AJ2KJ;AIhLE;EACE,gBAAA;EACA,cAAA;AJkLJ;AIhLE;EACE,yBAAA;AJkLJ;AIvLE;EACE,gBAAA;EACA,cAAA;AJyLJ;AIvLE;EACE,yBAAA;AJyLJ;AI9LE;EACE,gBAAA;EACA,cAAA;AJgMJ;AI9LE;EACE,yBAAA;AJgMJ;AIrME;EACE,gBAAA;EACA,cAAA;AJuMJ;AIrME;EACE,yBAAA;AJuMJ;AI5ME;EACE,gBAAA;EACA,cAAA;AJ8MJ;AI5ME;EACE,yBAAA;AJ8MJ;AInNE;EACE,gBAAA;EACA,cAAA;AJqNJ;AInNE;EACE,yBAAA;AJqNJ;AI1NE;EACE,gBAAA;EACA,cAAA;AJ4NJ;AI1NE;EACE,yBAAA;AJ4NJ;AIjOE;EACE,gBAAA;EACA,cAAA;AJmOJ;AIjOE;EACE,yBAAA;AJmOJ;AIxOE;EACE,gBAAA;EACA,cAAA;AJ0OJ;AIxOE;EACE,yBAAA;AJ0OJ;AI/OE;EACE,gBAAA;EACA,cAAA;AJiPJ;AI/OE;EACE,yBAAA;AJiPJ;AItPE;EACE,gBAAA;EACA,cAAA;AJwPJ;AItPE;EACE,yBAAA;AJwPJ;AI7PE;EACE,gBAAA;EACA,cAAA;AJ+PJ;AI7PE;EACE,yBAAA;AJ+PJ;AIpQE;EACE,gBAAA;EACA,cAAA;AJsQJ;AIpQE;EACE,yBAAA;AJsQJ;AI3QE;EACE,gBAAA;EACA,cAAA;AJ6QJ;AI3QE;EACE,yBAAA;AJ6QJ;AIlRE;EACE,gBAAA;EACA,cAAA;AJoRJ;AIlRE;EACE,yBAAA;AJoRJ;AIzRE;EACE,gBAAA;EACA,cAAA;AJ2RJ;AIzRE;EACE,yBAAA;AJ2RJ;AIhSE;EACE,gBAAA;EACA,cAAA;AJkSJ;AIhSE;EACE,yBAAA;AJkSJ;AIvSE;EACE,gBAAA;EACA,cAAA;AJySJ;AIvSE;EACE,yBAAA;AJySJ;AI9SE;EACE,gBAAA;EACA,cAAA;AJgTJ;AI9SE;EACE,yBAAA;AJgTJ;AIrTE;EACE,gBAAA;EACA,cAAA;AJuTJ;AIrTE;EACE,yBAAA;AJuTJ;AI5TE;EACE,gBAAA;EACA,cAAA;AJ8TJ;AI5TE;EACE,yBAAA;AJ8TJ;AInUE;EACE,gBAAA;EACA,cAAA;AJqUJ;AInUE;EACE,yBAAA;AJqUJ;AI1UE;EACE,gBAAA;EACA,cAAA;AJ4UJ;AI1UE;EACE,yBAAA;AJ4UJ;AA10FA;EAEI,qBAAA;AA20FJ;AA70FA;EAWI,gCAAA;EACA,6BAAA;EACA,8BAAA;EACA,iCAAA;EAKA,2CAAA;EACA,2CAAA;EACA,2CAAA;EACA,0CAAA;EAcA,UAAA;EACA,YAAA;EACA,YAAA;EACA,aAAA;EACA,qBAAA;EAEA,0DAAA;EACA,mCAAA;AAmzFJ;AAr0FI;EACE,gCAAA;EACA,gCAAA;EACA,iCAAA;EACA,iCAAA;EACA,8CAAA;EACA,8CAAA;EACA,8CAAA;EACA,6CAAA;AAu0FN;AA3zFI;EACE,WAAA;AA6zFN;AA32FA;EAkDM,gCAAA;EACA,iCAAA;EACA,8BAAA;AA4zFN;AAh3FA;EAwDM,gCAAA;EACA,iCAAA;EACA,sCAAA;EACA,oBAAA;AA2zFN;AAvzFE;EACE;IACE,UAAA;EAyzFJ;EAvzFE;IACE,UAAA;EAyzFJ;AACF;AAtzFE;EACE;IACE,UAAA;EAwzFJ;EAtzFE;IACE,UAAA;IACA,SAAA;IACA,aAAA;IACA,gBAAA;EAwzFJ;AACF",sourcesContent:[`@import '../../../resources/lato';
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

    font-family: Slack-Lato, Meiryo, Lucida Grande, sans-serif;
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
`],sourceRoot:""}]);const Ke=ue},5796:(p,v,h)=>{"use strict";h.d(v,{A:()=>N});var O=h(264),F=h.n(O),J=h(6520),C=h.n(J),T=C()(F());T.push([p.id,`.Notifications2018 .Team {
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
`],sourceRoot:""}]);const N=T},6520:p=>{"use strict";p.exports=function(v){var h=[];return h.toString=function(){return this.map(function(F){var J="",C=typeof F[5]!="undefined";return F[4]&&(J+="@supports (".concat(F[4],") {")),F[2]&&(J+="@media ".concat(F[2]," {")),C&&(J+="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {")),J+=v(F),C&&(J+="}"),F[2]&&(J+="}"),F[4]&&(J+="}"),J}).join("")},h.i=function(F,J,C,T,N){typeof F=="string"&&(F=[[null,F,void 0]]);var z={};if(C)for(var M=0;M<this.length;M++){var V=this[M][0];V!=null&&(z[V]=!0)}for(var U=0;U<F.length;U++){var P=[].concat(F[U]);C&&z[P[0]]||(typeof N!="undefined"&&(typeof P[5]=="undefined"||(P[1]="@layer".concat(P[5].length>0?" ".concat(P[5]):""," {").concat(P[1],"}")),P[5]=N),J&&(P[2]&&(P[1]="@media ".concat(P[2]," {").concat(P[1],"}")),P[2]=J),T&&(P[4]?(P[1]="@supports (".concat(P[4],") {").concat(P[1],"}"),P[4]=T):P[4]="".concat(T)),h.push(P))}},h}},9571:p=>{"use strict";p.exports=function(v,h){return h||(h={}),v&&(v=String(v.__esModule?v.default:v),/^['"].*['"]$/.test(v)&&(v=v.slice(1,-1)),h.hash&&(v+=h.hash),/["'() \t\n]|(%20)/.test(v)||h.needQuotes?'"'.concat(v.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):v)}},264:p=>{"use strict";p.exports=function(v){var h=v[1],O=v[3];if(!O)return h;if(typeof btoa=="function"){var F=btoa(unescape(encodeURIComponent(JSON.stringify(O)))),J="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(F),C="/*# ".concat(J," */");return[h].concat([C]).join(`
`)}return[h].join(`
`)}},2408:function(p){/*! @license DOMPurify 3.1.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.1.7/LICENSE */(function(v,h){p.exports=h()})(this,function(){"use strict";const{entries:v,setPrototypeOf:h,isFrozen:O,getPrototypeOf:F,getOwnPropertyDescriptor:J}=Object;let{freeze:C,seal:T,create:N}=Object,{apply:z,construct:M}=typeof Reflect!="undefined"&&Reflect;C||(C=function(j){return j}),T||(T=function(j){return j}),z||(z=function(j,X,Z){return j.apply(X,Z)}),M||(M=function(j,X){return new j(...X)});const V=D(Array.prototype.forEach),U=D(Array.prototype.pop),P=D(Array.prototype.push),Q=D(String.prototype.toLowerCase),te=D(String.prototype.toString),re=D(String.prototype.match),Y=D(String.prototype.replace),ue=D(String.prototype.indexOf),he=D(String.prototype.trim),le=D(Object.prototype.hasOwnProperty),G=D(RegExp.prototype.test),oe=x(TypeError);function D(ne){return function(j){for(var X=arguments.length,Z=new Array(X>1?X-1:0),Te=1;Te<X;Te++)Z[Te-1]=arguments[Te];return z(ne,j,Z)}}function x(ne){return function(){for(var j=arguments.length,X=new Array(j),Z=0;Z<j;Z++)X[Z]=arguments[Z];return M(ne,X)}}function L(ne,j){let X=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Q;h&&h(ne,null);let Z=j.length;for(;Z--;){let Te=j[Z];if(typeof Te=="string"){const Ge=X(Te);Ge!==Te&&(O(j)||(j[Z]=Ge),Te=Ge)}ne[Te]=!0}return ne}function An(ne){for(let j=0;j<ne.length;j++)le(ne,j)||(ne[j]=null);return ne}function Ne(ne){const j=N(null);for(const[X,Z]of v(ne))le(ne,X)&&(Array.isArray(Z)?j[X]=An(Z):Z&&typeof Z=="object"&&Z.constructor===Object?j[X]=Ne(Z):j[X]=Z);return j}function Ke(ne,j){for(;ne!==null;){const Z=J(ne,j);if(Z){if(Z.get)return D(Z.get);if(typeof Z.value=="function")return D(Z.value)}ne=F(ne)}function X(){return null}return X}const ht=C(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),vn=C(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),In=C(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),se=C(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),je=C(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),fn=C(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),zn=C(["#text"]),Gt=C(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),qt=C(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Lo=C(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$t=C(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Uo=T(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Qe=T(/<%[\w\W]*|[\w\W]*%>/gm),Vt=T(/\${[\w\W]*}/gm),Yt=T(/^data-[\-\w.\u00B7-\uFFFF]/),Er=T(/^aria-[\-\w]+$/),pt=T(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),dr=T(/^(?:\w+script|data):/i),hr=T(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),jo=T(/^html$/i),pr=T(/^[a-z][.\w]*(-[.\w]+)+$/i);var Wn=Object.freeze({__proto__:null,MUSTACHE_EXPR:Uo,ERB_EXPR:Qe,TMPLIT_EXPR:Vt,DATA_ATTR:Yt,ARIA_ATTR:Er,IS_ALLOWED_URI:pt,IS_SCRIPT_OR_DATA:dr,ATTR_WHITESPACE:hr,DOCTYPE_NAME:jo,CUSTOM_ELEMENT:pr});const rn={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ho=function(){return typeof window=="undefined"?null:window},_t=function(j,X){if(typeof j!="object"||typeof j.createPolicy!="function")return null;let Z=null;const Te="data-tt-policy-suffix";X&&X.hasAttribute(Te)&&(Z=X.getAttribute(Te));const Ge="dompurify"+(Z?"#"+Z:"");try{return j.createPolicy(Ge,{createHTML(un){return un},createScriptURL(un){return un}})}catch{return console.warn("TrustedTypes policy "+Ge+" could not be created."),null}};function _r(){let ne=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ho();const j=H=>_r(H);if(j.version="3.1.7",j.removed=[],!ne||!ne.document||ne.document.nodeType!==rn.document)return j.isSupported=!1,j;let{document:X}=ne;const Z=X,Te=Z.currentScript,{DocumentFragment:Ge,HTMLTemplateElement:un,Node:gt,Element:Wo,NodeFilter:Kn,NamedNodeMap:Ko=ne.NamedNodeMap||ne.MozNamedAttrMap,HTMLFormElement:Go,DOMParser:ra,trustedTypes:Xt}=ne,Gn=Wo.prototype,gr=Ke(Gn,"cloneNode"),br=Ke(Gn,"remove"),qo=Ke(Gn,"nextSibling"),bt=Ke(Gn,"childNodes"),wn=Ke(Gn,"parentNode");if(typeof un=="function"){const H=X.createElement("template");H.content&&H.content.ownerDocument&&(X=H.content.ownerDocument)}let Oe,ve="";const{implementation:Qt,createNodeIterator:ca,createDocumentFragment:mr,getElementsByTagName:Br}=X,{importNode:aa}=Z;let Ze={};j.isSupported=typeof v=="function"&&typeof wn=="function"&&Qt&&Qt.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:$o,ERB_EXPR:Vo,TMPLIT_EXPR:Yo,DATA_ATTR:Xo,ARIA_ATTR:Qo,IS_SCRIPT_OR_DATA:Zo,ATTR_WHITESPACE:Fe,CUSTOM_ELEMENT:la}=Wn;let{IS_ALLOWED_URI:ei}=Wn,be=null;const ni=L({},[...ht,...vn,...In,...je,...zn]);let Be=null;const qe=L({},[...Gt,...qt,...Lo,...$t]);let pe=Object.seal(N(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ke=null,mt=null,ti=!0,Zt=!0,Sn=!1,oi=!0,Tn=!1,eo=!0,En=!1,no=!1,to=!1,On=!1,Bt=!1,qn=!1,ii=!0,dn=!1;const Cr="user-content-";let en=!0,$n=!1,Fn={},Jn=null;const ri=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let ci=null;const oo=L({},["audio","video","img","source","image","track"]);let io=null;const Ct=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Vn="http://www.w3.org/1998/Math/MathML",yt="http://www.w3.org/2000/svg",nn="http://www.w3.org/1999/xhtml";let Dn=nn,ro=!1,co=null;const hn=L({},[Vn,yt,nn],te);let Yn=null;const yr=["application/xhtml+xml","text/html"],vr="text/html";let Ce=null,Rn=null;const Ir=X.createElement("form"),ai=function(_){return _ instanceof RegExp||_ instanceof Function},ao=function(){let _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Rn&&Rn===_)){if((!_||typeof _!="object")&&(_={}),_=Ne(_),Yn=yr.indexOf(_.PARSER_MEDIA_TYPE)===-1?vr:_.PARSER_MEDIA_TYPE,Ce=Yn==="application/xhtml+xml"?te:Q,be=le(_,"ALLOWED_TAGS")?L({},_.ALLOWED_TAGS,Ce):ni,Be=le(_,"ALLOWED_ATTR")?L({},_.ALLOWED_ATTR,Ce):qe,co=le(_,"ALLOWED_NAMESPACES")?L({},_.ALLOWED_NAMESPACES,te):hn,io=le(_,"ADD_URI_SAFE_ATTR")?L(Ne(Ct),_.ADD_URI_SAFE_ATTR,Ce):Ct,ci=le(_,"ADD_DATA_URI_TAGS")?L(Ne(oo),_.ADD_DATA_URI_TAGS,Ce):oo,Jn=le(_,"FORBID_CONTENTS")?L({},_.FORBID_CONTENTS,Ce):ri,ke=le(_,"FORBID_TAGS")?L({},_.FORBID_TAGS,Ce):{},mt=le(_,"FORBID_ATTR")?L({},_.FORBID_ATTR,Ce):{},Fn=le(_,"USE_PROFILES")?_.USE_PROFILES:!1,ti=_.ALLOW_ARIA_ATTR!==!1,Zt=_.ALLOW_DATA_ATTR!==!1,Sn=_.ALLOW_UNKNOWN_PROTOCOLS||!1,oi=_.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Tn=_.SAFE_FOR_TEMPLATES||!1,eo=_.SAFE_FOR_XML!==!1,En=_.WHOLE_DOCUMENT||!1,On=_.RETURN_DOM||!1,Bt=_.RETURN_DOM_FRAGMENT||!1,qn=_.RETURN_TRUSTED_TYPE||!1,to=_.FORCE_BODY||!1,ii=_.SANITIZE_DOM!==!1,dn=_.SANITIZE_NAMED_PROPS||!1,en=_.KEEP_CONTENT!==!1,$n=_.IN_PLACE||!1,ei=_.ALLOWED_URI_REGEXP||pt,Dn=_.NAMESPACE||nn,pe=_.CUSTOM_ELEMENT_HANDLING||{},_.CUSTOM_ELEMENT_HANDLING&&ai(_.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(pe.tagNameCheck=_.CUSTOM_ELEMENT_HANDLING.tagNameCheck),_.CUSTOM_ELEMENT_HANDLING&&ai(_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(pe.attributeNameCheck=_.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),_.CUSTOM_ELEMENT_HANDLING&&typeof _.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(pe.allowCustomizedBuiltInElements=_.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Tn&&(Zt=!1),Bt&&(On=!0),Fn&&(be=L({},zn),Be=[],Fn.html===!0&&(L(be,ht),L(Be,Gt)),Fn.svg===!0&&(L(be,vn),L(Be,qt),L(Be,$t)),Fn.svgFilters===!0&&(L(be,In),L(Be,qt),L(Be,$t)),Fn.mathMl===!0&&(L(be,je),L(Be,Lo),L(Be,$t))),_.ADD_TAGS&&(be===ni&&(be=Ne(be)),L(be,_.ADD_TAGS,Ce)),_.ADD_ATTR&&(Be===qe&&(Be=Ne(Be)),L(Be,_.ADD_ATTR,Ce)),_.ADD_URI_SAFE_ATTR&&L(io,_.ADD_URI_SAFE_ATTR,Ce),_.FORBID_CONTENTS&&(Jn===ri&&(Jn=Ne(Jn)),L(Jn,_.FORBID_CONTENTS,Ce)),en&&(be["#text"]=!0),En&&L(be,["html","head","body"]),be.table&&(L(be,["tbody"]),delete ke.tbody),_.TRUSTED_TYPES_POLICY){if(typeof _.TRUSTED_TYPES_POLICY.createHTML!="function")throw oe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof _.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw oe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');Oe=_.TRUSTED_TYPES_POLICY,ve=Oe.createHTML("")}else Oe===void 0&&(Oe=_t(Xt,Te)),Oe!==null&&typeof ve=="string"&&(ve=Oe.createHTML(""));C&&C(_),Rn=_}},li=L({},["mi","mo","mn","ms","mtext"]),si=L({},["annotation-xml"]),wr=L({},["title","style","font","a","script"]),Ai=L({},[...vn,...In,...se]),cn=L({},[...je,...fn]),Sr=function(_){let R=wn(_);(!R||!R.tagName)&&(R={namespaceURI:Dn,tagName:"template"});const k=Q(_.tagName),ce=Q(R.tagName);return co[_.namespaceURI]?_.namespaceURI===yt?R.namespaceURI===nn?k==="svg":R.namespaceURI===Vn?k==="svg"&&(ce==="annotation-xml"||li[ce]):!!Ai[k]:_.namespaceURI===Vn?R.namespaceURI===nn?k==="math":R.namespaceURI===yt?k==="math"&&si[ce]:!!cn[k]:_.namespaceURI===nn?R.namespaceURI===yt&&!si[ce]||R.namespaceURI===Vn&&!li[ce]?!1:!cn[k]&&(wr[k]||!Ai[k]):!!(Yn==="application/xhtml+xml"&&co[_.namespaceURI]):!1},Me=function(_){P(j.removed,{element:_});try{wn(_).removeChild(_)}catch{br(_)}},vt=function(_,R){try{P(j.removed,{attribute:R.getAttributeNode(_),from:R})}catch{P(j.removed,{attribute:null,from:R})}if(R.removeAttribute(_),_==="is"&&!Be[_])if(On||Bt)try{Me(R)}catch{}else try{R.setAttribute(_,"")}catch{}},fi=function(_){let R=null,k=null;if(to)_="<remove></remove>"+_;else{const ye=re(_,/^[\r\n\t ]+/);k=ye&&ye[0]}Yn==="application/xhtml+xml"&&Dn===nn&&(_='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+_+"</body></html>");const ce=Oe?Oe.createHTML(_):_;if(Dn===nn)try{R=new ra().parseFromString(ce,Yn)}catch{}if(!R||!R.documentElement){R=Qt.createDocument(Dn,"template",null);try{R.documentElement.innerHTML=ro?ve:ce}catch{}}const _e=R.body||R.documentElement;return _&&k&&_e.insertBefore(X.createTextNode(k),_e.childNodes[0]||null),Dn===nn?Br.call(R,En?"html":"body")[0]:En?R.documentElement:_e},ui=function(_){return ca.call(_.ownerDocument||_,_,Kn.SHOW_ELEMENT|Kn.SHOW_COMMENT|Kn.SHOW_TEXT|Kn.SHOW_PROCESSING_INSTRUCTION|Kn.SHOW_CDATA_SECTION,null)},Ei=function(_){return _ instanceof Go&&(typeof _.nodeName!="string"||typeof _.textContent!="string"||typeof _.removeChild!="function"||!(_.attributes instanceof Ko)||typeof _.removeAttribute!="function"||typeof _.setAttribute!="function"||typeof _.namespaceURI!="string"||typeof _.insertBefore!="function"||typeof _.hasChildNodes!="function")},di=function(_){return typeof gt=="function"&&_ instanceof gt},tn=function(_,R,k){Ze[_]&&V(Ze[_],ce=>{ce.call(j,R,k,Rn)})},hi=function(_){let R=null;if(tn("beforeSanitizeElements",_,null),Ei(_))return Me(_),!0;const k=Ce(_.nodeName);if(tn("uponSanitizeElement",_,{tagName:k,allowedTags:be}),_.hasChildNodes()&&!di(_.firstElementChild)&&G(/<[/\w]/g,_.innerHTML)&&G(/<[/\w]/g,_.textContent)||_.nodeType===rn.progressingInstruction||eo&&_.nodeType===rn.comment&&G(/<[/\w]/g,_.data))return Me(_),!0;if(!be[k]||ke[k]){if(!ke[k]&&_i(k)&&(pe.tagNameCheck instanceof RegExp&&G(pe.tagNameCheck,k)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(k)))return!1;if(en&&!Jn[k]){const ce=wn(_)||_.parentNode,_e=bt(_)||_.childNodes;if(_e&&ce){const ye=_e.length;for(let Le=ye-1;Le>=0;--Le){const $e=gr(_e[Le],!0);$e.__removalCount=(_.__removalCount||0)+1,ce.insertBefore($e,qo(_))}}}return Me(_),!0}return _ instanceof Wo&&!Sr(_)||(k==="noscript"||k==="noembed"||k==="noframes")&&G(/<\/no(script|embed|frames)/i,_.innerHTML)?(Me(_),!0):(Tn&&_.nodeType===rn.text&&(R=_.textContent,V([$o,Vo,Yo],ce=>{R=Y(R,ce," ")}),_.textContent!==R&&(P(j.removed,{element:_.cloneNode()}),_.textContent=R)),tn("afterSanitizeElements",_,null),!1)},pi=function(_,R,k){if(ii&&(R==="id"||R==="name")&&(k in X||k in Ir))return!1;if(!(Zt&&!mt[R]&&G(Xo,R))){if(!(ti&&G(Qo,R))){if(!Be[R]||mt[R]){if(!(_i(_)&&(pe.tagNameCheck instanceof RegExp&&G(pe.tagNameCheck,_)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(_))&&(pe.attributeNameCheck instanceof RegExp&&G(pe.attributeNameCheck,R)||pe.attributeNameCheck instanceof Function&&pe.attributeNameCheck(R))||R==="is"&&pe.allowCustomizedBuiltInElements&&(pe.tagNameCheck instanceof RegExp&&G(pe.tagNameCheck,k)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(k))))return!1}else if(!io[R]){if(!G(ei,Y(k,Fe,""))){if(!((R==="src"||R==="xlink:href"||R==="href")&&_!=="script"&&ue(k,"data:")===0&&ci[_])){if(!(Sn&&!G(Zo,Y(k,Fe,"")))){if(k)return!1}}}}}}return!0},_i=function(_){return _!=="annotation-xml"&&re(_,la)},gi=function(_){tn("beforeSanitizeAttributes",_,null);const{attributes:R}=_;if(!R)return;const k={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Be};let ce=R.length;for(;ce--;){const _e=R[ce],{name:ye,namespaceURI:Le,value:$e}=_e,Xn=Ce(ye);let Ie=ye==="value"?$e:he($e);if(k.attrName=Xn,k.attrValue=Ie,k.keepAttr=!0,k.forceKeepAttr=void 0,tn("uponSanitizeAttribute",_,k),Ie=k.attrValue,k.forceKeepAttr||(vt(ye,_),!k.keepAttr))continue;if(!oi&&G(/\/>/i,Ie)){vt(ye,_);continue}Tn&&V([$o,Vo,Yo],Qn=>{Ie=Y(Ie,Qn," ")});const bi=Ce(_.nodeName);if(pi(bi,Xn,Ie)){if(dn&&(Xn==="id"||Xn==="name")&&(vt(ye,_),Ie=Cr+Ie),eo&&G(/((--!?|])>)|<\/(style|title)/i,Ie)){vt(ye,_);continue}if(Oe&&typeof Xt=="object"&&typeof Xt.getAttributeType=="function"&&!Le)switch(Xt.getAttributeType(bi,Xn)){case"TrustedHTML":{Ie=Oe.createHTML(Ie);break}case"TrustedScriptURL":{Ie=Oe.createScriptURL(Ie);break}}try{Le?_.setAttributeNS(Le,ye,Ie):_.setAttribute(ye,Ie),Ei(_)?Me(_):U(j.removed)}catch{}}}tn("afterSanitizeAttributes",_,null)},Tr=function H(_){let R=null;const k=ui(_);for(tn("beforeSanitizeShadowDOM",_,null);R=k.nextNode();)tn("uponSanitizeShadowNode",R,null),!hi(R)&&(R.content instanceof Ge&&H(R.content),gi(R));tn("afterSanitizeShadowDOM",_,null)};return j.sanitize=function(H){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},R=null,k=null,ce=null,_e=null;if(ro=!H,ro&&(H="<!-->"),typeof H!="string"&&!di(H))if(typeof H.toString=="function"){if(H=H.toString(),typeof H!="string")throw oe("dirty is not a string, aborting")}else throw oe("toString is not a function");if(!j.isSupported)return H;if(no||ao(_),j.removed=[],typeof H=="string"&&($n=!1),$n){if(H.nodeName){const $e=Ce(H.nodeName);if(!be[$e]||ke[$e])throw oe("root node is forbidden and cannot be sanitized in-place")}}else if(H instanceof gt)R=fi("<!---->"),k=R.ownerDocument.importNode(H,!0),k.nodeType===rn.element&&k.nodeName==="BODY"||k.nodeName==="HTML"?R=k:R.appendChild(k);else{if(!On&&!Tn&&!En&&H.indexOf("<")===-1)return Oe&&qn?Oe.createHTML(H):H;if(R=fi(H),!R)return On?null:qn?ve:""}R&&to&&Me(R.firstChild);const ye=ui($n?H:R);for(;ce=ye.nextNode();)hi(ce)||(ce.content instanceof Ge&&Tr(ce.content),gi(ce));if($n)return H;if(On){if(Bt)for(_e=mr.call(R.ownerDocument);R.firstChild;)_e.appendChild(R.firstChild);else _e=R;return(Be.shadowroot||Be.shadowrootmode)&&(_e=aa.call(Z,_e,!0)),_e}let Le=En?R.outerHTML:R.innerHTML;return En&&be["!doctype"]&&R.ownerDocument&&R.ownerDocument.doctype&&R.ownerDocument.doctype.name&&G(jo,R.ownerDocument.doctype.name)&&(Le="<!DOCTYPE "+R.ownerDocument.doctype.name+`>
`+Le),Tn&&V([$o,Vo,Yo],$e=>{Le=Y(Le,$e," ")}),Oe&&qn?Oe.createHTML(Le):Le},j.setConfig=function(){let H=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};ao(H),no=!0},j.clearConfig=function(){Rn=null,no=!1},j.isValidAttribute=function(H,_,R){Rn||ao({});const k=Ce(H),ce=Ce(_);return pi(k,ce,R)},j.addHook=function(H,_){typeof _=="function"&&(Ze[H]=Ze[H]||[],P(Ze[H],_))},j.removeHook=function(H){if(Ze[H])return U(Ze[H])},j.removeHooks=function(H){Ze[H]&&(Ze[H]=[])},j.removeAllHooks=function(){Ze={}},j}var zo=_r();return zo})},2676:(p,v,h)=>{"use strict";var O=h(4038),F={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},J={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},C={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},T={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},N={};N[O.ForwardRef]=C,N[O.Memo]=T;function z(Y){return O.isMemo(Y)?T:N[Y.$$typeof]||F}var M=Object.defineProperty,V=Object.getOwnPropertyNames,U=Object.getOwnPropertySymbols,P=Object.getOwnPropertyDescriptor,Q=Object.getPrototypeOf,te=Object.prototype;function re(Y,ue,he){if(typeof ue!="string"){if(te){var le=Q(ue);le&&le!==te&&re(Y,le,he)}var G=V(ue);U&&(G=G.concat(U(ue)));for(var oe=z(Y),D=z(ue),x=0;x<G.length;++x){var L=G[x];if(!J[L]&&!(he&&he[L])&&!(D&&D[L])&&!(oe&&oe[L])){var An=P(ue,L);try{M(Y,L,An)}catch{}}}}return Y}p.exports=re},4874:(p,v)=>{"use strict";/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=typeof Symbol=="function"&&Symbol.for,O=h?Symbol.for("react.element"):60103,F=h?Symbol.for("react.portal"):60106,J=h?Symbol.for("react.fragment"):60107,C=h?Symbol.for("react.strict_mode"):60108,T=h?Symbol.for("react.profiler"):60114,N=h?Symbol.for("react.provider"):60109,z=h?Symbol.for("react.context"):60110,M=h?Symbol.for("react.async_mode"):60111,V=h?Symbol.for("react.concurrent_mode"):60111,U=h?Symbol.for("react.forward_ref"):60112,P=h?Symbol.for("react.suspense"):60113,Q=h?Symbol.for("react.suspense_list"):60120,te=h?Symbol.for("react.memo"):60115,re=h?Symbol.for("react.lazy"):60116,Y=h?Symbol.for("react.block"):60121,ue=h?Symbol.for("react.fundamental"):60117,he=h?Symbol.for("react.responder"):60118,le=h?Symbol.for("react.scope"):60119;function G(D){if(typeof D=="object"&&D!==null){var x=D.$$typeof;switch(x){case O:switch(D=D.type,D){case M:case V:case J:case T:case C:case P:return D;default:switch(D=D&&D.$$typeof,D){case z:case U:case re:case te:case N:return D;default:return x}}case F:return x}}}function oe(D){return G(D)===V}v.AsyncMode=M,v.ConcurrentMode=V,v.ContextConsumer=z,v.ContextProvider=N,v.Element=O,v.ForwardRef=U,v.Fragment=J,v.Lazy=re,v.Memo=te,v.Portal=F,v.Profiler=T,v.StrictMode=C,v.Suspense=P,v.isAsyncMode=function(D){return oe(D)||G(D)===M},v.isConcurrentMode=oe,v.isContextConsumer=function(D){return G(D)===z},v.isContextProvider=function(D){return G(D)===N},v.isElement=function(D){return typeof D=="object"&&D!==null&&D.$$typeof===O},v.isForwardRef=function(D){return G(D)===U},v.isFragment=function(D){return G(D)===J},v.isLazy=function(D){return G(D)===re},v.isMemo=function(D){return G(D)===te},v.isPortal=function(D){return G(D)===F},v.isProfiler=function(D){return G(D)===T},v.isStrictMode=function(D){return G(D)===C},v.isSuspense=function(D){return G(D)===P},v.isValidElementType=function(D){return typeof D=="string"||typeof D=="function"||D===J||D===V||D===T||D===C||D===P||D===Q||typeof D=="object"&&D!==null&&(D.$$typeof===re||D.$$typeof===te||D.$$typeof===N||D.$$typeof===z||D.$$typeof===U||D.$$typeof===ue||D.$$typeof===he||D.$$typeof===le||D.$$typeof===Y)},v.typeOf=G},4038:(p,v,h)=>{"use strict";p.exports=h(4874)},4523:(p,v,h)=>{var O=h(983),F=O.Symbol;p.exports=F},2870:(p,v,h)=>{var O=h(4523),F=h(8173),J=h(7368),C="[object Null]",T="[object Undefined]",N=O?O.toStringTag:void 0;function z(M){return M==null?M===void 0?T:C:N&&N in Object(M)?F(M):J(M)}p.exports=z},6226:(p,v,h)=>{var O=h(5678),F=/^\s+/;function J(C){return C&&C.slice(0,O(C)+1).replace(F,"")}p.exports=J},674:p=>{var v=typeof global=="object"&&global&&global.Object===Object&&global;p.exports=v},8173:(p,v,h)=>{var O=h(4523),F=Object.prototype,J=F.hasOwnProperty,C=F.toString,T=O?O.toStringTag:void 0;function N(z){var M=J.call(z,T),V=z[T];try{z[T]=void 0;var U=!0}catch{}var P=C.call(z);return U&&(M?z[T]=V:delete z[T]),P}p.exports=N},7368:p=>{var v=Object.prototype,h=v.toString;function O(F){return h.call(F)}p.exports=O},983:(p,v,h)=>{var O=h(674),F=typeof self=="object"&&self&&self.Object===Object&&self,J=O||F||Function("return this")();p.exports=J},5678:p=>{var v=/\s/;function h(O){for(var F=O.length;F--&&v.test(O.charAt(F)););return F}p.exports=h},5395:(p,v,h)=>{var O=h(9991),F=h(6506),J=h(8076),C="Expected a function",T=Math.max,N=Math.min;function z(M,V,U){var P,Q,te,re,Y,ue,he=0,le=!1,G=!1,oe=!0;if(typeof M!="function")throw new TypeError(C);V=J(V)||0,O(U)&&(le=!!U.leading,G="maxWait"in U,te=G?T(J(U.maxWait)||0,V):te,oe="trailing"in U?!!U.trailing:oe);function D(se){var je=P,fn=Q;return P=Q=void 0,he=se,re=M.apply(fn,je),re}function x(se){return he=se,Y=setTimeout(Ne,V),le?D(se):re}function L(se){var je=se-ue,fn=se-he,zn=V-je;return G?N(zn,te-fn):zn}function An(se){var je=se-ue,fn=se-he;return ue===void 0||je>=V||je<0||G&&fn>=te}function Ne(){var se=F();if(An(se))return Ke(se);Y=setTimeout(Ne,L(se))}function Ke(se){return Y=void 0,oe&&P?D(se):(P=Q=void 0,re)}function ht(){Y!==void 0&&clearTimeout(Y),he=0,P=ue=Q=Y=void 0}function vn(){return Y===void 0?re:Ke(F())}function In(){var se=F(),je=An(se);if(P=arguments,Q=this,ue=se,je){if(Y===void 0)return x(ue);if(G)return clearTimeout(Y),Y=setTimeout(Ne,V),D(ue)}return Y===void 0&&(Y=setTimeout(Ne,V)),re}return In.cancel=ht,In.flush=vn,In}p.exports=z},9991:p=>{function v(h){var O=typeof h;return h!=null&&(O=="object"||O=="function")}p.exports=v},512:p=>{function v(h){return h!=null&&typeof h=="object"}p.exports=v},56:(p,v,h)=>{var O=h(2870),F=h(512),J="[object Symbol]";function C(T){return typeof T=="symbol"||F(T)&&O(T)==J}p.exports=C},6506:(p,v,h)=>{var O=h(983),F=function(){return O.Date.now()};p.exports=F},3196:(p,v,h)=>{var O=h(5395),F=h(9991),J="Expected a function";function C(T,N,z){var M=!0,V=!0;if(typeof T!="function")throw new TypeError(J);return F(z)&&(M="leading"in z?!!z.leading:M,V="trailing"in z?!!z.trailing:V),O(T,N,{leading:M,maxWait:N,trailing:V})}p.exports=C},8076:(p,v,h)=>{var O=h(6226),F=h(9991),J=h(56),C=NaN,T=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,z=/^0o[0-7]+$/i,M=parseInt;function V(U){if(typeof U=="number")return U;if(J(U))return C;if(F(U)){var P=typeof U.valueOf=="function"?U.valueOf():U;U=F(P)?P+"":P}if(typeof U!="string")return U===0?U:+U;U=O(U);var Q=N.test(U);return Q||z.test(U)?M(U.slice(2),Q?2:8):T.test(U)?C:+U}p.exports=V},7760:(p,v,h)=>{"use strict";var O=h(6471);function F(){}function J(){}J.resetWarningCache=F,p.exports=function(){function C(z,M,V,U,P,Q){if(Q!==O){var te=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw te.name="Invariant Violation",te}}C.isRequired=C;function T(){return C}var N={array:C,bool:C,func:C,number:C,object:C,string:C,symbol:C,any:C,arrayOf:T,element:C,elementType:C,instanceOf:T,node:C,objectOf:T,oneOf:T,oneOfType:T,shape:T,exact:T,checkPropTypes:J,resetWarningCache:F};return N.PropTypes=N,N}},8182:(p,v,h)=>{if(0)var O,F;else p.exports=h(7760)()},6471:p=>{"use strict";var v="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";p.exports=v},5323:(p,v)=>{"use strict";var h;/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=typeof Symbol=="function"&&Symbol.for,F=O?Symbol.for("react.element"):60103,J=O?Symbol.for("react.portal"):60106,C=O?Symbol.for("react.fragment"):60107,T=O?Symbol.for("react.strict_mode"):60108,N=O?Symbol.for("react.profiler"):60114,z=O?Symbol.for("react.provider"):60109,M=O?Symbol.for("react.context"):60110,V=O?Symbol.for("react.async_mode"):60111,U=O?Symbol.for("react.concurrent_mode"):60111,P=O?Symbol.for("react.forward_ref"):60112,Q=O?Symbol.for("react.suspense"):60113,te=O?Symbol.for("react.suspense_list"):60120,re=O?Symbol.for("react.memo"):60115,Y=O?Symbol.for("react.lazy"):60116,ue=O?Symbol.for("react.block"):60121,he=O?Symbol.for("react.fundamental"):60117,le=O?Symbol.for("react.responder"):60118,G=O?Symbol.for("react.scope"):60119;function oe(x){if(typeof x=="object"&&x!==null){var L=x.$$typeof;switch(L){case F:switch(x=x.type,x){case V:case U:case C:case N:case T:case Q:return x;default:switch(x=x&&x.$$typeof,x){case M:case P:case Y:case re:case z:return x;default:return L}}case J:return L}}}function D(x){return oe(x)===U}h=V,h=U,h=M,h=z,h=F,h=P,h=C,h=Y,h=re,h=J,h=N,h=T,h=Q,h=function(x){return D(x)||oe(x)===V},h=D,h=function(x){return oe(x)===M},h=function(x){return oe(x)===z},h=function(x){return typeof x=="object"&&x!==null&&x.$$typeof===F},h=function(x){return oe(x)===P},h=function(x){return oe(x)===C},h=function(x){return oe(x)===Y},h=function(x){return oe(x)===re},h=function(x){return oe(x)===J},h=function(x){return oe(x)===N},h=function(x){return oe(x)===T},h=function(x){return oe(x)===Q},h=function(x){return typeof x=="string"||typeof x=="function"||x===C||x===U||x===N||x===T||x===Q||x===te||typeof x=="object"&&x!==null&&(x.$$typeof===Y||x.$$typeof===re||x.$$typeof===z||x.$$typeof===M||x.$$typeof===P||x.$$typeof===he||x.$$typeof===le||x.$$typeof===G||x.$$typeof===ue)},h=oe},8063:(p,v,h)=>{"use strict";h(5323)},382:p=>{"use strict";var v=[];function h(J){for(var C=-1,T=0;T<v.length;T++)if(v[T].identifier===J){C=T;break}return C}function O(J,C){for(var T={},N=[],z=0;z<J.length;z++){var M=J[z],V=C.base?M[0]+C.base:M[0],U=T[V]||0,P="".concat(V," ").concat(U);T[V]=U+1;var Q=h(P),te={css:M[1],media:M[2],sourceMap:M[3],supports:M[4],layer:M[5]};if(Q!==-1)v[Q].references++,v[Q].updater(te);else{var re=F(te,C);C.byIndex=z,v.splice(z,0,{identifier:P,updater:re,references:1})}N.push(P)}return N}function F(J,C){var T=C.domAPI(C);T.update(J);var N=function(M){if(M){if(M.css===J.css&&M.media===J.media&&M.sourceMap===J.sourceMap&&M.supports===J.supports&&M.layer===J.layer)return;T.update(J=M)}else T.remove()};return N}p.exports=function(J,C){C=C||{},J=J||[];var T=O(J,C);return function(z){z=z||[];for(var M=0;M<T.length;M++){var V=T[M],U=h(V);v[U].references--}for(var P=O(z,C),Q=0;Q<T.length;Q++){var te=T[Q],re=h(te);v[re].references===0&&(v[re].updater(),v.splice(re,1))}T=P}}},6349:p=>{"use strict";var v={};function h(F){if(typeof v[F]=="undefined"){var J=document.querySelector(F);if(window.HTMLIFrameElement&&J instanceof window.HTMLIFrameElement)try{J=J.contentDocument.head}catch{J=null}v[F]=J}return v[F]}function O(F,J){var C=h(F);if(!C)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");C.appendChild(J)}p.exports=O},8170:p=>{"use strict";function v(h){var O=document.createElement("style");return h.setAttributes(O,h.attributes),h.insert(O,h.options),O}p.exports=v},8990:(p,v,h)=>{"use strict";function O(F){var J=h.nc;J&&F.setAttribute("nonce",J)}p.exports=O},727:p=>{"use strict";function v(F,J,C){var T="";C.supports&&(T+="@supports (".concat(C.supports,") {")),C.media&&(T+="@media ".concat(C.media," {"));var N=typeof C.layer!="undefined";N&&(T+="@layer".concat(C.layer.length>0?" ".concat(C.layer):""," {")),T+=C.css,N&&(T+="}"),C.media&&(T+="}"),C.supports&&(T+="}");var z=C.sourceMap;z&&typeof btoa!="undefined"&&(T+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(z))))," */")),J.styleTagTransform(T,F,J.options)}function h(F){if(F.parentNode===null)return!1;F.parentNode.removeChild(F)}function O(F){var J=F.insertStyleElement(F);return{update:function(T){v(J,F,T)},remove:function(){h(J)}}}p.exports=O},1487:p=>{"use strict";function v(h,O){if(O.styleSheet)O.styleSheet.cssText=h;else{for(;O.firstChild;)O.removeChild(O.firstChild);O.appendChild(document.createTextNode(h))}}p.exports=v},6723:(p,v,h)=>{"use strict";p.exports=h.p+"slack-icons-v25aaab12924ee17421031.woff2"},9138:(p,v,h)=>{"use strict";p.exports=h.p+"lato-blackd3e44e6115ad32c37176.woff2"},4392:(p,v,h)=>{"use strict";p.exports=h.p+"lato-bold31816c24a18fbc659282.woff2"},7:(p,v,h)=>{"use strict";p.exports=h.p+"lato-italic-black62bc5da14d9c6ff41e5f.woff2"},5959:(p,v,h)=>{"use strict";p.exports=h.p+"lato-italic-bold365ea5a303e2259ca5ab.woff2"},5906:(p,v,h)=>{"use strict";p.exports=h.p+"lato-italic-light074c7fc38126bb94664d.woff2"},9269:(p,v,h)=>{"use strict";p.exports=h.p+"lato-italic4484c4211566a05bd71b.woff2"},5539:(p,v,h)=>{"use strict";p.exports=h.p+"lato-light2815bd9ba07f2cbe781a.woff2"},4603:(p,v,h)=>{"use strict";p.exports=h.p+"lato-regularf1aa7a0753149183efa2.woff2"},5083:(p,v,h)=>{p.exports=h(4496)(172)},4496:p=>{"use strict";p.exports=self.rendererVendor}},Se={};function $(p){var v=Se[p];if(v!==void 0)return v.exports;var h=Se[p]={id:p,exports:{}};return Ue[p].call(h.exports,h,h.exports,$),h.exports}$.m=Ue,$.n=p=>{var v=p&&p.__esModule?()=>p.default:()=>p;return $.d(v,{a:v}),v},$.d=(p,v)=>{for(var h in v)$.o(v,h)&&!$.o(p,h)&&Object.defineProperty(p,h,{enumerable:!0,get:v[h]})},$.o=(p,v)=>Object.prototype.hasOwnProperty.call(p,v),$.r=p=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(p,"__esModule",{value:!0})},$.p="./",(()=>{$.b=document.baseURI||self.location.href;var p={893:0}})(),$.nc=void 0;var ur={};(()=>{"use strict";$.r(ur),$.d(ur,{NotificationHost:()=>aA});var p=$(5083),v=/["&<]/;function h(n){if(n.length===0||v.test(n)===!1)return n;for(var t=0,o=0,i="",c="";o<n.length;o++){switch(n.charCodeAt(o)){case 34:c="&quot;";break;case 38:c="&amp;";break;case 60:c="&lt;";break;default:continue}o!==t&&(i+=n.slice(t,o)),i+=c,t=o+1}return o!==t&&(i+=n.slice(t,o)),i}var O=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,F=0,J=Array.isArray;function C(n,t,o,i,c,a){var l,s,A={};for(s in t)s=="ref"?l=t[s]:A[s]=t[s];var f={type:n,props:A,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--F,__i:-1,__u:0,__source:c,__self:a};if(typeof n=="function"&&(l=n.defaultProps))for(s in l)A[s]===void 0&&(A[s]=l[s]);return p.options.vnode&&p.options.vnode(f),f}function T(n){var t=C(e,{tpl:n,exprs:[].slice.call(arguments,1)});return t.key=t.__v,t}var N={},z=/[A-Z]/g;function M(n,t){if(r.attr){var o=r.attr(n,t);if(typeof o=="string")return o}if(n==="ref"||n==="key")return"";if(n==="style"&&typeof t=="object"){var i="";for(var c in t){var a=t[c];if(a!=null&&a!==""){var l=c[0]=="-"?c:N[c]||(N[c]=c.replace(z,"-$&").toLowerCase()),s=";";typeof a!="number"||l.startsWith("--")||O.test(l)||(s="px;"),i=i+l+":"+a+s}}return n+'="'+i+'"'}return t==null||t===!1||typeof t=="function"||typeof t=="object"?"":t===!0?n:n+'="'+h(t)+'"'}function V(n){if(n==null||typeof n=="boolean"||typeof n=="function")return null;if(typeof n=="object"){if(n.constructor===void 0)return n;if(J(n)){for(var t=0;t<n.length;t++)n[t]=V(n[t]);return n}}return h(""+n)}var U=$(382),P=$.n(U),Q=$(727),te=$.n(Q),re=$(6349),Y=$.n(re),ue=$(8990),he=$.n(ue),le=$(8170),G=$.n(le),oe=$(1487),D=$.n(oe),x=$(1685),L={};L.styleTagTransform=D(),L.setAttributes=he(),L.insert=Y().bind(null,"head"),L.domAPI=te(),L.insertStyleElement=G();var An=P()(x.A,L);const Ne=x.A&&x.A.locals?x.A.locals:void 0;var Ke=(n,t,o)=>{if(t.length===1&&t[0]===o){let i=!1;try{const c={};n(c)===c&&(i=!0)}catch{}if(i){let c;try{throw new Error}catch(a){({stack:c}=a)}console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`,{stack:c})}}},ht=(n,t,o)=>{const{memoize:i,memoizeOptions:c}=t,{inputSelectorResults:a,inputSelectorResultsCopy:l}=n,s=i(()=>({}),...c);if(!(s.apply(null,a)===s.apply(null,l))){let f;try{throw new Error}catch(u){({stack:f}=u)}console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``,{arguments:o,firstInputs:a,secondInputs:l,stack:f})}},vn={inputStabilityCheck:"once",identityFunctionCheck:"once"},In=n=>{Object.assign(vn,n)},se="NOT_FOUND";function je(n,t=`expected a function, instead received ${typeof n}`){if(typeof n!="function")throw new TypeError(t)}function fn(n,t=`expected an object, instead received ${typeof n}`){if(typeof n!="object")throw new TypeError(t)}function zn(n,t="expected all items to be functions, instead received the following types: "){if(!n.every(o=>typeof o=="function")){const o=n.map(i=>typeof i=="function"?`function ${i.name||"unnamed"}()`:typeof i).join(", ");throw new TypeError(`${t}[${o}]`)}}var Gt=n=>Array.isArray(n)?n:[n];function qt(n){const t=Array.isArray(n[0])?n[0]:n;return zn(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Lo(n,t){const o=[],{length:i}=n;for(let c=0;c<i;c++)o.push(n[c].apply(null,t));return o}var $t=(n,t)=>{const{identityFunctionCheck:o,inputStabilityCheck:i}={...vn,...t};return{identityFunctionCheck:{shouldRun:o==="always"||o==="once"&&n,run:Ke},inputStabilityCheck:{shouldRun:i==="always"||i==="once"&&n,run:ht}}},Uo=0,Qe=null,Vt=class{constructor(n,t=Yt){fe(this,"revision",Uo);fe(this,"_value");fe(this,"_lastValue");fe(this,"_isEqual",Yt);this._value=this._lastValue=n,this._isEqual=t}get value(){return Qe==null||Qe.add(this),this._value}set value(n){this.value!==n&&(this._value=n,this.revision=++Uo)}};function Yt(n,t){return n===t}var Er=class{constructor(n){fe(this,"_cachedValue");fe(this,"_cachedRevision",-1);fe(this,"_deps",[]);fe(this,"hits",0);fe(this,"fn");this.fn=n}clear(){this._cachedValue=void 0,this._cachedRevision=-1,this._deps=[],this.hits=0}get value(){if(this.revision>this._cachedRevision){const{fn:n}=this,t=new Set,o=Qe;Qe=t,this._cachedValue=n(),Qe=o,this.hits++,this._deps=Array.from(t),this._cachedRevision=this.revision}return Qe==null||Qe.add(this),this._cachedValue}get revision(){return Math.max(...this._deps.map(n=>n.revision),0)}};function pt(n){return n instanceof Vt||console.warn("Not a valid cell! ",n),n.value}function dr(n,t){if(!(n instanceof Vt))throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");n.value=n._lastValue=t}function hr(n,t=Yt){return new Vt(n,t)}function jo(n){return je(n,"the first parameter to `createCache` must be a function"),new Er(n)}var pr=(n,t)=>!1;function Wn(){return hr(null,pr)}function rn(n,t){dr(n,t)}var Ho=n=>{let t=n.collectionTag;t===null&&(t=n.collectionTag=Wn()),pt(t)},_t=n=>{const t=n.collectionTag;t!==null&&rn(t,null)},_r=Symbol(),zo=0,ne=Object.getPrototypeOf({}),j=class{constructor(n){fe(this,"proxy",new Proxy(this,X));fe(this,"tag",Wn());fe(this,"tags",{});fe(this,"children",{});fe(this,"collectionTag",null);fe(this,"id",zo++);this.value=n,this.value=n,this.tag.value=n}},X={get(n,t){function o(){const{value:c}=n,a=Reflect.get(c,t);if(typeof t=="symbol"||t in ne)return a;if(typeof a=="object"&&a!==null){let l=n.children[t];return l===void 0&&(l=n.children[t]=Ge(a)),l.tag&&pt(l.tag),l.proxy}else{let l=n.tags[t];return l===void 0&&(l=n.tags[t]=Wn(),l.value=a),pt(l),a}}return o()},ownKeys(n){return Ho(n),Reflect.ownKeys(n.value)},getOwnPropertyDescriptor(n,t){return Reflect.getOwnPropertyDescriptor(n.value,t)},has(n,t){return Reflect.has(n.value,t)}},Z=class{constructor(n){fe(this,"proxy",new Proxy([this],Te));fe(this,"tag",Wn());fe(this,"tags",{});fe(this,"children",{});fe(this,"collectionTag",null);fe(this,"id",zo++);this.value=n,this.value=n,this.tag.value=n}},Te={get([n],t){return t==="length"&&Ho(n),X.get(n,t)},ownKeys([n]){return X.ownKeys(n)},getOwnPropertyDescriptor([n],t){return X.getOwnPropertyDescriptor(n,t)},has([n],t){return X.has(n,t)}};function Ge(n){return Array.isArray(n)?new Z(n):new j(n)}function un(n,t){const{value:o,tags:i,children:c}=n;if(n.value=t,Array.isArray(o)&&Array.isArray(t)&&o.length!==t.length)_t(n);else if(o!==t){let a=0,l=0,s=!1;for(const f in o)a++;for(const f in t)if(l++,!(f in o)){s=!0;break}(s||a!==l)&&_t(n)}for(const a in i){const l=o[a],s=t[a];l!==s&&(_t(n),rn(i[a],s)),typeof s=="object"&&s!==null&&delete i[a]}for(const a in c){const l=c[a],s=t[a];l.value!==s&&(typeof s=="object"&&s!==null?un(l,s):(gt(l),delete c[a]))}}function gt(n){n.tag&&rn(n.tag,null),_t(n);for(const t in n.tags)rn(n.tags[t],null);for(const t in n.children)gt(n.children[t])}function Wo(n){let t;return{get(o){return t&&n(t.key,o)?t.value:se},put(o,i){t={key:o,value:i}},getEntries(){return t?[t]:[]},clear(){t=void 0}}}function Kn(n,t){let o=[];function i(s){const A=o.findIndex(f=>t(s,f.key));if(A>-1){const f=o[A];return A>0&&(o.splice(A,1),o.unshift(f)),f.value}return se}function c(s,A){i(s)===se&&(o.unshift({key:s,value:A}),o.length>n&&o.pop())}function a(){return o}function l(){o=[]}return{get:i,put:c,getEntries:a,clear:l}}var Ko=(n,t)=>n===t;function Go(n){return function(o,i){if(o===null||i===null||o.length!==i.length)return!1;const{length:c}=o;for(let a=0;a<c;a++)if(!n(o[a],i[a]))return!1;return!0}}function ra(n,t){const o=typeof t=="object"?t:{equalityCheck:t},{equalityCheck:i=Ko,maxSize:c=1,resultEqualityCheck:a}=o,l=Go(i);let s=0;const A=c===1?Wo(l):Kn(c,l);function f(){let u=A.get(arguments);if(u===se){if(u=n.apply(null,arguments),s++,a){const E=A.getEntries().find(y=>a(y.value,u));E&&(u=E.value,s!==0&&s--)}A.put(arguments,u)}return u}return f.clearCache=()=>{A.clear(),f.resetResultsCount()},f.resultsCount=()=>s,f.resetResultsCount=()=>{s=0},f}function Xt(n){const t=Ge([]);let o=null;const i=Go(Ko),c=jo(()=>n.apply(null,t.proxy));function a(){return i(o,arguments)||(un(t,arguments),o=arguments),c.value}return a.clearCache=()=>c.clear(),a}var Gn=class{constructor(n){this.value=n}deref(){return this.value}},gr=typeof WeakRef!="undefined"?WeakRef:Gn,br=0,qo=1;function bt(){return{s:br,v:void 0,o:null,p:null}}function wn(n,t={}){let o=bt();const{resultEqualityCheck:i}=t;let c,a=0;function l(){var d,E;let s=o;const{length:A}=arguments;for(let y=0,g=A;y<g;y++){const b=arguments[y];if(typeof b=="function"||typeof b=="object"&&b!==null){let w=s.o;w===null&&(s.o=w=new WeakMap);const m=w.get(b);m===void 0?(s=bt(),w.set(b,s)):s=m}else{let w=s.p;w===null&&(s.p=w=new Map);const m=w.get(b);m===void 0?(s=bt(),w.set(b,s)):s=m}}const f=s;let u;if(s.s===qo?u=s.v:(u=n.apply(null,arguments),a++),f.s=qo,i){const y=(E=(d=c==null?void 0:c.deref)==null?void 0:d.call(c))!=null?E:c;y!=null&&i(y,u)&&(u=y,a!==0&&a--),c=typeof u=="object"&&u!==null||typeof u=="function"?new gr(u):u}return f.v=u,u}return l.clearCache=()=>{o=bt(),l.resetResultsCount()},l.resultsCount=()=>a,l.resetResultsCount=()=>{a=0},l}function Oe(n,...t){const o=typeof n=="function"?{memoize:n,memoizeOptions:t}:n,i=(...c)=>{let a=0,l=0,s,A={},f=c.pop();typeof f=="object"&&(A=f,f=c.pop()),je(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...o,...A},{memoize:d,memoizeOptions:E=[],argsMemoize:y=wn,argsMemoizeOptions:g=[],devModeChecks:b={}}=u,w=Gt(E),m=Gt(g),I=qt(c),B=d(function(){return a++,f.apply(null,arguments)},...w);let S=!0;const W=y(function(){l++;const q=Lo(I,arguments);return s=B.apply(null,q),s},...m);return Object.assign(W,{resultFunc:f,memoizedResultFunc:B,dependencies:I,dependencyRecomputations:()=>l,resetDependencyRecomputations:()=>{l=0},lastResult:()=>s,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:d,argsMemoize:y})};return Object.assign(i,{withTypes:()=>i}),i}var ve=Oe(wn),Qt=Object.assign((n,t=ve)=>{fn(n,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`);const o=Object.keys(n),i=o.map(a=>n[a]);return t(i,(...a)=>a.reduce((l,s,A)=>(l[o[A]]=s,l),{}))},{withTypes:()=>Qt});function ca(n,t){for(const o of Object.values(SettingsLayer))if(has(n[o],t))return o;return null}const mr=ve(n=>n,({zoomLevel:n,notificationZoomLevel:t})=>t&&t!==null?t:n),Br=ve(mr,n=>1+n*.2),aa=({settings:n})=>n.releaseChannelOverride||ReleaseChannel.PROD,Ze=({environment:n,settings:t})=>{const o=process.env.SLACK_DEVELOPER_MENU;if(o==="false")return!1;const{isDevMode:i,devEnv:c,openDevToolsOnStart:a}=n,{devToolsEnabled:l}=t;return i||!!c||a||!!o||l},$o=({settings:n})=>{const{devToolsEnabled:t}=n;return t},Vo=n=>!0,Yo=({app:n,environment:t,settings:o})=>{const{notificationMethod:c}=o,a=isFeatureEnabled(FeatureFlag.FORCE_NATIVE_NOTIFICATIONS,n),l=c==="html",s=c&&c!=="html";return!!l},Xo=n=>{const t=n.notificationTimeout;return Number.isSafeInteger(t)&&t===Number.MAX_SAFE_INTEGER},Qo={debug:"debug",info:"info",warn:"warn",error:"error",fatal:"error"},Zo=(n,t)=>(...o)=>{try{const i=o.map(c=>typeof c=="object"?JSON.stringify(c,null,2):c).join(" ");t?console[n](`[${t}]	${i}`):console[n](i)}catch{}},Fe=Object.entries(Qo).reduce((n,[t,o])=>(n[t]=Zo(o),n),{}),la=(n,t)=>Object.entries(Qo).reduce((o,[i,c])=>(o[i]=Zo(c,n),o),{});var ei=typeof global=="object"&&global&&global.Object===Object&&global;const be=ei;var ni=typeof self=="object"&&self&&self.Object===Object&&self,Be=be||ni||Function("return this")();const qe=Be;var pe=qe.Symbol;const ke=pe;var mt=Object.prototype,ti=mt.hasOwnProperty,Zt=mt.toString,Sn=ke?ke.toStringTag:void 0;function oi(n){var t=ti.call(n,Sn),o=n[Sn];try{n[Sn]=void 0;var i=!0}catch{}var c=Zt.call(n);return i&&(t?n[Sn]=o:delete n[Sn]),c}const Tn=oi;var eo=Object.prototype,En=eo.toString;function no(n){return En.call(n)}const to=no;var On="[object Null]",Bt="[object Undefined]",qn=ke?ke.toStringTag:void 0;function ii(n){return n==null?n===void 0?Bt:On:qn&&qn in Object(n)?Tn(n):to(n)}const dn=ii;function Cr(n){var t=typeof n;return n!=null&&(t=="object"||t=="function")}const en=Cr;var $n="[object AsyncFunction]",Fn="[object Function]",Jn="[object GeneratorFunction]",ri="[object Proxy]";function ci(n){if(!en(n))return!1;var t=dn(n);return t==Fn||t==Jn||t==$n||t==ri}const oo=ci;var io=qe["__core-js_shared__"];const Ct=io;var Vn=function(){var n=/[^.]+$/.exec(Ct&&Ct.keys&&Ct.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}();function yt(n){return!!Vn&&Vn in n}const nn=yt;var Dn=Function.prototype,ro=Dn.toString;function co(n){if(n!=null){try{return ro.call(n)}catch{}try{return n+""}catch{}}return""}const hn=co;var Yn=/[\\^$.*+?()[\]{}|]/g,yr=/^\[object .+?Constructor\]$/,vr=Function.prototype,Ce=Object.prototype,Rn=vr.toString,Ir=Ce.hasOwnProperty,ai=RegExp("^"+Rn.call(Ir).replace(Yn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ao(n){if(!en(n)||nn(n))return!1;var t=oo(n)?ai:yr;return t.test(hn(n))}const li=ao;function si(n,t){return n==null?void 0:n[t]}const wr=si;function Ai(n,t){var o=wr(n,t);return li(o)?o:void 0}const cn=Ai;var Sr=cn(Object,"create");const Me=Sr;function vt(){this.__data__=Me?Me(null):{},this.size=0}const fi=vt;function ui(n){var t=this.has(n)&&delete this.__data__[n];return this.size-=t?1:0,t}const Ei=ui;var di="__lodash_hash_undefined__",tn=Object.prototype,hi=tn.hasOwnProperty;function pi(n){var t=this.__data__;if(Me){var o=t[n];return o===di?void 0:o}return hi.call(t,n)?t[n]:void 0}const _i=pi;var gi=Object.prototype,Tr=gi.hasOwnProperty;function H(n){var t=this.__data__;return Me?t[n]!==void 0:Tr.call(t,n)}const _=H;var R="__lodash_hash_undefined__";function k(n,t){var o=this.__data__;return this.size+=this.has(n)?0:1,o[n]=Me&&t===void 0?R:t,this}const ce=k;function _e(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}_e.prototype.clear=fi,_e.prototype.delete=Ei,_e.prototype.get=_i,_e.prototype.has=_,_e.prototype.set=ce;const ye=_e;function Le(){this.__data__=[],this.size=0}const $e=Le;function Xn(n,t){return n===t||n!==n&&t!==t}const Ie=Xn;function bi(n,t){for(var o=n.length;o--;)if(Ie(n[o][0],t))return o;return-1}const Qn=bi;var hA=Array.prototype,pA=hA.splice;function _A(n){var t=this.__data__,o=Qn(t,n);if(o<0)return!1;var i=t.length-1;return o==i?t.pop():pA.call(t,o,1),--this.size,!0}const gA=_A;function bA(n){var t=this.__data__,o=Qn(t,n);return o<0?void 0:t[o][1]}const mA=bA;function BA(n){return Qn(this.__data__,n)>-1}const CA=BA;function yA(n,t){var o=this.__data__,i=Qn(o,n);return i<0?(++this.size,o.push([n,t])):o[i][1]=t,this}const vA=yA;function It(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}It.prototype.clear=$e,It.prototype.delete=gA,It.prototype.get=mA,It.prototype.has=CA,It.prototype.set=vA;const mi=It;var IA=cn(qe,"Map");const lo=IA;function wA(){this.size=0,this.__data__={hash:new ye,map:new(lo||mi),string:new ye}}const SA=wA;function TA(n){var t=typeof n;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?n!=="__proto__":n===null}const OA=TA;function FA(n,t){var o=n.__data__;return OA(t)?o[typeof t=="string"?"string":"hash"]:o.map}const Bi=FA;function JA(n){var t=Bi(this,n).delete(n);return this.size-=t?1:0,t}const DA=JA;function RA(n){return Bi(this,n).get(n)}const xA=RA;function PA(n){return Bi(this,n).has(n)}const NA=PA;function kA(n,t){var o=Bi(this,n),i=o.size;return o.set(n,t),this.size+=o.size==i?0:1,this}const MA=kA;function wt(n){var t=-1,o=n==null?0:n.length;for(this.clear();++t<o;){var i=n[t];this.set(i[0],i[1])}}wt.prototype.clear=SA,wt.prototype.delete=DA,wt.prototype.get=xA,wt.prototype.has=NA,wt.prototype.set=MA;const Ci=wt;var LA="__lodash_hash_undefined__";function UA(n){return this.__data__.set(n,LA),this}const jA=UA;function HA(n){return this.__data__.has(n)}const zA=HA;function yi(n){var t=-1,o=n==null?0:n.length;for(this.__data__=new Ci;++t<o;)this.add(n[t])}yi.prototype.add=yi.prototype.push=jA,yi.prototype.has=zA;const vi=yi;function WA(n,t,o,i){for(var c=n.length,a=o+(i?1:-1);i?a--:++a<c;)if(t(n[a],a,n))return a;return-1}const KA=WA;function GA(n){return n!==n}const qA=GA;function $A(n,t,o){for(var i=o-1,c=n.length;++i<c;)if(n[i]===t)return i;return-1}const VA=$A;function YA(n,t,o){return t===t?VA(n,t,o):KA(n,qA,o)}const XA=YA;function QA(n,t){var o=n==null?0:n.length;return!!o&&XA(n,t,0)>-1}const Or=QA;function ZA(n,t,o){for(var i=-1,c=n==null?0:n.length;++i<c;)if(o(t,n[i]))return!0;return!1}const Fr=ZA;function ef(n,t){for(var o=-1,i=n==null?0:n.length,c=Array(i);++o<i;)c[o]=t(n[o],o,n);return c}const Ii=ef;function nf(n){return function(t){return n(t)}}const Jr=nf;function tf(n,t){return n.has(t)}const so=tf;var of=200;function rf(n,t,o,i){var c=-1,a=Or,l=!0,s=n.length,A=[],f=t.length;if(!s)return A;o&&(t=Ii(t,Jr(o))),i?(a=Fr,l=!1):t.length>=of&&(a=so,l=!1,t=new vi(t));e:for(;++c<s;){var u=n[c],d=o==null?u:o(u);if(u=i||u!==0?u:0,l&&d===d){for(var E=f;E--;)if(t[E]===d)continue e;A.push(u)}else a(t,d,i)||A.push(u)}return A}const cf=rf;function af(n,t){for(var o=-1,i=t.length,c=n.length;++o<i;)n[c+o]=t[o];return n}const sa=af;function lf(n){return n!=null&&typeof n=="object"}const Zn=lf;var sf="[object Arguments]";function Af(n){return Zn(n)&&dn(n)==sf}const Aa=Af;var fa=Object.prototype,ff=fa.hasOwnProperty,uf=fa.propertyIsEnumerable,Ef=Aa(function(){return arguments}())?Aa:function(n){return Zn(n)&&ff.call(n,"callee")&&!uf.call(n,"callee")};const Dr=Ef;var df=Array.isArray;const Ve=df;var ua=ke?ke.isConcatSpreadable:void 0;function hf(n){return Ve(n)||Dr(n)||!!(ua&&n&&n[ua])}const pf=hf;function Ea(n,t,o,i,c){var a=-1,l=n.length;for(o||(o=pf),c||(c=[]);++a<l;){var s=n[a];t>0&&o(s)?t>1?Ea(s,t-1,o,i,c):sa(c,s):i||(c[c.length]=s)}return c}const Rr=Ea;function _f(n){return n}const wi=_f;function gf(n,t,o){switch(o.length){case 0:return n.call(t);case 1:return n.call(t,o[0]);case 2:return n.call(t,o[0],o[1]);case 3:return n.call(t,o[0],o[1],o[2])}return n.apply(t,o)}const bf=gf;var da=Math.max;function mf(n,t,o){return t=da(t===void 0?n.length-1:t,0),function(){for(var i=arguments,c=-1,a=da(i.length-t,0),l=Array(a);++c<a;)l[c]=i[t+c];c=-1;for(var s=Array(t+1);++c<t;)s[c]=i[c];return s[t]=o(l),bf(n,this,s)}}const ha=mf;function Bf(n){return function(){return n}}const Cf=Bf;var yf=function(){try{var n=cn(Object,"defineProperty");return n({},"",{}),n}catch{}}();const Si=yf;var vf=Si?function(n,t){return Si(n,"toString",{configurable:!0,enumerable:!1,value:Cf(t),writable:!0})}:wi;const If=vf;var wf=800,Sf=16,Tf=Date.now;function Of(n){var t=0,o=0;return function(){var i=Tf(),c=Sf-(i-o);if(o=i,c>0){if(++t>=wf)return arguments[0]}else t=0;return n.apply(void 0,arguments)}}var Ff=Of(If);const pa=Ff;function Jf(n,t){return pa(ha(n,t,wi),n+"")}const xr=Jf;var Df=9007199254740991;function Rf(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=Df}const Pr=Rf;function xf(n){return n!=null&&Pr(n.length)&&!oo(n)}const Nr=xf;function Pf(n){return Zn(n)&&Nr(n)}const Ao=Pf;function Nf(n){var t=n==null?0:n.length;return t?n[t-1]:void 0}const kf=Nf;var Mf=xr(function(n,t){var o=kf(t);return Ao(o)&&(o=void 0),Ao(n)?cf(n,Rr(t,1,Ao,!0),void 0,o):[]});const Ti=Mf;var Lf=cn(qe,"Set");const St=Lf;function Uf(){}const _a=Uf;function jf(n){var t=-1,o=Array(n.size);return n.forEach(function(i){o[++t]=i}),o}const kr=jf;var Hf=1/0,zf=St&&1/kr(new St([,-0]))[1]==Hf?function(n){return new St(n)}:_a;const Wf=zf;var Kf=200;function Gf(n,t,o){var i=-1,c=Or,a=n.length,l=!0,s=[],A=s;if(o)l=!1,c=Fr;else if(a>=Kf){var f=t?null:Wf(n);if(f)return kr(f);l=!1,c=so,A=new vi}else A=t?[]:s;e:for(;++i<a;){var u=n[i],d=t?t(u):u;if(u=o||u!==0?u:0,l&&d===d){for(var E=A.length;E--;)if(A[E]===d)continue e;t&&A.push(d),s.push(u)}else c(A,d,o)||(A!==s&&A.push(d),s.push(u))}return s}const ga=Gf;var qf=xr(function(n){return ga(Rr(n,1,Ao,!0))});const $f=qf;function Vf(n){return n&&n.length?ga(n):[]}const ba=Vf;function Yf(){this.__data__=new mi,this.size=0}const Xf=Yf;function Qf(n){var t=this.__data__,o=t.delete(n);return this.size=t.size,o}const Zf=Qf;function eu(n){return this.__data__.get(n)}const nu=eu;function tu(n){return this.__data__.has(n)}const ou=tu;var iu=200;function ru(n,t){var o=this.__data__;if(o instanceof mi){var i=o.__data__;if(!lo||i.length<iu-1)return i.push([n,t]),this.size=++o.size,this;o=this.__data__=new Ci(i)}return o.set(n,t),this.size=o.size,this}const cu=ru;function Tt(n){var t=this.__data__=new mi(n);this.size=t.size}Tt.prototype.clear=Xf,Tt.prototype.delete=Zf,Tt.prototype.get=nu,Tt.prototype.has=ou,Tt.prototype.set=cu;const Oi=Tt;function au(n,t){for(var o=-1,i=n==null?0:n.length;++o<i;)if(t(n[o],o,n))return!0;return!1}const lu=au;var su=1,Au=2;function fu(n,t,o,i,c,a){var l=o&su,s=n.length,A=t.length;if(s!=A&&!(l&&A>s))return!1;var f=a.get(n),u=a.get(t);if(f&&u)return f==t&&u==n;var d=-1,E=!0,y=o&Au?new vi:void 0;for(a.set(n,t),a.set(t,n);++d<s;){var g=n[d],b=t[d];if(i)var w=l?i(b,g,d,t,n,a):i(g,b,d,n,t,a);if(w!==void 0){if(w)continue;E=!1;break}if(y){if(!lu(t,function(m,I){if(!so(y,I)&&(g===m||c(g,m,o,i,a)))return y.push(I)})){E=!1;break}}else if(!(g===b||c(g,b,o,i,a))){E=!1;break}}return a.delete(n),a.delete(t),E}const ma=fu;var uu=qe.Uint8Array;const Ba=uu;function Eu(n){var t=-1,o=Array(n.size);return n.forEach(function(i,c){o[++t]=[c,i]}),o}const du=Eu;var hu=1,pu=2,_u="[object Boolean]",gu="[object Date]",bu="[object Error]",mu="[object Map]",Bu="[object Number]",Cu="[object RegExp]",yu="[object Set]",vu="[object String]",Iu="[object Symbol]",wu="[object ArrayBuffer]",Su="[object DataView]",Ca=ke?ke.prototype:void 0,Mr=Ca?Ca.valueOf:void 0;function Tu(n,t,o,i,c,a,l){switch(o){case Su:if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)return!1;n=n.buffer,t=t.buffer;case wu:return!(n.byteLength!=t.byteLength||!a(new Ba(n),new Ba(t)));case _u:case gu:case Bu:return Ie(+n,+t);case bu:return n.name==t.name&&n.message==t.message;case Cu:case vu:return n==t+"";case mu:var s=du;case yu:var A=i&hu;if(s||(s=kr),n.size!=t.size&&!A)return!1;var f=l.get(n);if(f)return f==t;i|=pu,l.set(n,t);var u=ma(s(n),s(t),i,c,a,l);return l.delete(n),u;case Iu:if(Mr)return Mr.call(n)==Mr.call(t)}return!1}const Ou=Tu;function Fu(n,t,o){var i=t(n);return Ve(n)?i:sa(i,o(n))}const Ju=Fu;function Du(n,t){for(var o=-1,i=n==null?0:n.length,c=0,a=[];++o<i;){var l=n[o];t(l,o,n)&&(a[c++]=l)}return a}const Ru=Du;function xu(){return[]}const Pu=xu;var Nu=Object.prototype,ku=Nu.propertyIsEnumerable,ya=Object.getOwnPropertySymbols,Mu=ya?function(n){return n==null?[]:(n=Object(n),Ru(ya(n),function(t){return ku.call(n,t)}))}:Pu;const Lu=Mu;function Uu(n,t){for(var o=-1,i=Array(n);++o<n;)i[o]=t(o);return i}const ju=Uu;function Hu(){return!1}const zu=Hu;var va=typeof Cn=="object"&&Cn&&!Cn.nodeType&&Cn,Ia=va&&typeof yn=="object"&&yn&&!yn.nodeType&&yn,Wu=Ia&&Ia.exports===va,wa=Wu?qe.Buffer:void 0,Ku=wa?wa.isBuffer:void 0,Gu=Ku||zu;const Lr=Gu;var qu=9007199254740991,$u=/^(?:0|[1-9]\d*)$/;function Vu(n,t){var o=typeof n;return t=t==null?qu:t,!!t&&(o=="number"||o!="symbol"&&$u.test(n))&&n>-1&&n%1==0&&n<t}const Ur=Vu;var Yu="[object Arguments]",Xu="[object Array]",Qu="[object Boolean]",Zu="[object Date]",eE="[object Error]",nE="[object Function]",tE="[object Map]",oE="[object Number]",iE="[object Object]",rE="[object RegExp]",cE="[object Set]",aE="[object String]",lE="[object WeakMap]",sE="[object ArrayBuffer]",AE="[object DataView]",fE="[object Float32Array]",uE="[object Float64Array]",EE="[object Int8Array]",dE="[object Int16Array]",hE="[object Int32Array]",pE="[object Uint8Array]",_E="[object Uint8ClampedArray]",gE="[object Uint16Array]",bE="[object Uint32Array]",Ee={};Ee[fE]=Ee[uE]=Ee[EE]=Ee[dE]=Ee[hE]=Ee[pE]=Ee[_E]=Ee[gE]=Ee[bE]=!0,Ee[Yu]=Ee[Xu]=Ee[sE]=Ee[Qu]=Ee[AE]=Ee[Zu]=Ee[eE]=Ee[nE]=Ee[tE]=Ee[oE]=Ee[iE]=Ee[rE]=Ee[cE]=Ee[aE]=Ee[lE]=!1;function mE(n){return Zn(n)&&Pr(n.length)&&!!Ee[dn(n)]}const BE=mE;var Sa=typeof Cn=="object"&&Cn&&!Cn.nodeType&&Cn,fo=Sa&&typeof yn=="object"&&yn&&!yn.nodeType&&yn,CE=fo&&fo.exports===Sa,jr=CE&&be.process,yE=function(){try{var n=fo&&fo.require&&fo.require("util").types;return n||jr&&jr.binding&&jr.binding("util")}catch{}}();const Ta=yE;var Oa=Ta&&Ta.isTypedArray,vE=Oa?Jr(Oa):BE;const Fa=vE;var IE=Object.prototype,wE=IE.hasOwnProperty;function SE(n,t){var o=Ve(n),i=!o&&Dr(n),c=!o&&!i&&Lr(n),a=!o&&!i&&!c&&Fa(n),l=o||i||c||a,s=l?ju(n.length,String):[],A=s.length;for(var f in n)(t||wE.call(n,f))&&!(l&&(f=="length"||c&&(f=="offset"||f=="parent")||a&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Ur(f,A)))&&s.push(f);return s}const TE=SE;var OE=Object.prototype;function FE(n){var t=n&&n.constructor,o=typeof t=="function"&&t.prototype||OE;return n===o}const JE=FE;function DE(n,t){return function(o){return n(t(o))}}var RE=DE(Object.keys,Object);const xE=RE;var PE=Object.prototype,NE=PE.hasOwnProperty;function kE(n){if(!JE(n))return xE(n);var t=[];for(var o in Object(n))NE.call(n,o)&&o!="constructor"&&t.push(o);return t}const ME=kE;function LE(n){return Nr(n)?TE(n):ME(n)}const Hr=LE;function UE(n){return Ju(n,Hr,Lu)}const Ja=UE;var jE=1,HE=Object.prototype,zE=HE.hasOwnProperty;function WE(n,t,o,i,c,a){var l=o&jE,s=Ja(n),A=s.length,f=Ja(t),u=f.length;if(A!=u&&!l)return!1;for(var d=A;d--;){var E=s[d];if(!(l?E in t:zE.call(t,E)))return!1}var y=a.get(n),g=a.get(t);if(y&&g)return y==t&&g==n;var b=!0;a.set(n,t),a.set(t,n);for(var w=l;++d<A;){E=s[d];var m=n[E],I=t[E];if(i)var B=l?i(I,m,E,t,n,a):i(m,I,E,n,t,a);if(!(B===void 0?m===I||c(m,I,o,i,a):B)){b=!1;break}w||(w=E=="constructor")}if(b&&!w){var S=n.constructor,W=t.constructor;S!=W&&"constructor"in n&&"constructor"in t&&!(typeof S=="function"&&S instanceof S&&typeof W=="function"&&W instanceof W)&&(b=!1)}return a.delete(n),a.delete(t),b}const KE=WE;var GE=cn(qe,"DataView");const zr=GE;var qE=cn(qe,"Promise");const Wr=qE;var $E=cn(qe,"WeakMap");const Kr=$E;var Da="[object Map]",VE="[object Object]",Ra="[object Promise]",xa="[object Set]",Pa="[object WeakMap]",Na="[object DataView]",YE=hn(zr),XE=hn(lo),QE=hn(Wr),ZE=hn(St),ed=hn(Kr),et=dn;(zr&&et(new zr(new ArrayBuffer(1)))!=Na||lo&&et(new lo)!=Da||Wr&&et(Wr.resolve())!=Ra||St&&et(new St)!=xa||Kr&&et(new Kr)!=Pa)&&(et=function(n){var t=dn(n),o=t==VE?n.constructor:void 0,i=o?hn(o):"";if(i)switch(i){case YE:return Na;case XE:return Da;case QE:return Ra;case ZE:return xa;case ed:return Pa}return t});const ka=et;var nd=1,Ma="[object Arguments]",La="[object Array]",Fi="[object Object]",td=Object.prototype,Ua=td.hasOwnProperty;function od(n,t,o,i,c,a){var l=Ve(n),s=Ve(t),A=l?La:ka(n),f=s?La:ka(t);A=A==Ma?Fi:A,f=f==Ma?Fi:f;var u=A==Fi,d=f==Fi,E=A==f;if(E&&Lr(n)){if(!Lr(t))return!1;l=!0,u=!1}if(E&&!u)return a||(a=new Oi),l||Fa(n)?ma(n,t,o,i,c,a):Ou(n,t,A,o,i,c,a);if(!(o&nd)){var y=u&&Ua.call(n,"__wrapped__"),g=d&&Ua.call(t,"__wrapped__");if(y||g){var b=y?n.value():n,w=g?t.value():t;return a||(a=new Oi),c(b,w,o,i,a)}}return E?(a||(a=new Oi),KE(n,t,o,i,c,a)):!1}const id=od;function ja(n,t,o,i,c){return n===t?!0:n==null||t==null||!Zn(n)&&!Zn(t)?n!==n&&t!==t:id(n,t,o,i,ja,c)}const Gr=ja;function rd(n,t){return Gr(n,t)}const qr=rd;var pn,ae,$r,Ha,Ot=0,za=[],Ji=[],Wa=p.options.__b,Ka=p.options.__r,Ga=p.options.diffed,qa=p.options.__c,$a=p.options.unmount;function nt(n,t){p.options.__h&&p.options.__h(ae,n,Ot||t),Ot=0;var o=ae.__H||(ae.__H={__:[],__h:[]});return n>=o.__.length&&o.__.push({__V:Ji}),o.__[n]}function xn(n){return Ot=1,Vr(Xa,n)}function Vr(n,t,o){var i=nt(pn++,2);if(i.t=n,!i.__c&&(i.__=[o?o(t):Xa(void 0,t),function(s){var A=i.__N?i.__N[0]:i.__[0],f=i.t(A,s);A!==f&&(i.__N=[f,i.__[1]],i.__c.setState({}))}],i.__c=ae,!ae.u)){var c=function(s,A,f){if(!i.__c.__H)return!0;var u=i.__c.__H.__.filter(function(E){return E.__c});if(u.every(function(E){return!E.__N}))return!a||a.call(this,s,A,f);var d=!1;return u.forEach(function(E){if(E.__N){var y=E.__[0];E.__=E.__N,E.__N=void 0,y!==E.__[0]&&(d=!0)}}),!(!d&&i.__c.props===s)&&(!a||a.call(this,s,A,f))};ae.u=!0;var a=ae.shouldComponentUpdate,l=ae.componentWillUpdate;ae.componentWillUpdate=function(s,A,f){if(this.__e){var u=a;a=void 0,c(s,A,f),a=u}l&&l.call(this,s,A,f)},ae.shouldComponentUpdate=c}return i.__N||i.__}function an(n,t){var o=nt(pn++,3);!p.options.__s&&Qr(o.__H,t)&&(o.__=n,o.i=t,ae.__H.__h.push(o))}function uo(n,t){var o=nt(pn++,4);!p.options.__s&&Qr(o.__H,t)&&(o.__=n,o.i=t,ae.__h.push(o))}function _n(n){return Ot=5,Ft(function(){return{current:n}},[])}function cd(n,t,o){Ot=6,uo(function(){return typeof n=="function"?(n(t()),function(){return n(null)}):n?(n.current=t(),function(){return n.current=null}):void 0},o==null?o:o.concat(n))}function Ft(n,t){var o=nt(pn++,7);return Qr(o.__H,t)?(o.__V=n(),o.i=t,o.__h=n,o.__V):o.__}function Jt(n,t){return Ot=8,Ft(function(){return n},t)}function Yr(n){var t=ae.context[n.__c],o=nt(pn++,9);return o.c=n,t?(o.__==null&&(o.__=!0,t.sub(ae)),t.props.value):n.__}function Va(n,t){p.options.useDebugValue&&p.options.useDebugValue(t?t(n):n)}function bB(n){var t=nt(pn++,10),o=xn();return t.__=n,ae.componentDidCatch||(ae.componentDidCatch=function(i,c){t.__&&t.__(i,c),o[1](i)}),[o[0],function(){o[1](void 0)}]}function ad(){var n=nt(pn++,11);if(!n.__){for(var t=ae.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var o=t.__m||(t.__m=[0,0]);n.__="P"+o[0]+"-"+o[1]++}return n.__}function ld(){for(var n;n=za.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(Di),n.__H.__h.forEach(Xr),n.__H.__h=[]}catch(t){n.__H.__h=[],p.options.__e(t,n.__v)}}p.options.__b=function(n){ae=null,Wa&&Wa(n)},p.options.__r=function(n){Ka&&Ka(n),pn=0;var t=(ae=n.__c).__H;t&&($r===ae?(t.__h=[],ae.__h=[],t.__.forEach(function(o){o.__N&&(o.__=o.__N),o.__V=Ji,o.__N=o.i=void 0})):(t.__h.forEach(Di),t.__h.forEach(Xr),t.__h=[],pn=0)),$r=ae},p.options.diffed=function(n){Ga&&Ga(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(za.push(t)!==1&&Ha===p.options.requestAnimationFrame||((Ha=p.options.requestAnimationFrame)||sd)(ld)),t.__H.__.forEach(function(o){o.i&&(o.__H=o.i),o.__V!==Ji&&(o.__=o.__V),o.i=void 0,o.__V=Ji})),$r=ae=null},p.options.__c=function(n,t){t.some(function(o){try{o.__h.forEach(Di),o.__h=o.__h.filter(function(i){return!i.__||Xr(i)})}catch(i){t.some(function(c){c.__h&&(c.__h=[])}),t=[],p.options.__e(i,o.__v)}}),qa&&qa(n,t)},p.options.unmount=function(n){$a&&$a(n);var t,o=n.__c;o&&o.__H&&(o.__H.__.forEach(function(i){try{Di(i)}catch(c){t=c}}),o.__H=void 0,t&&p.options.__e(t,o.__v))};var Ya=typeof requestAnimationFrame=="function";function sd(n){var t,o=function(){clearTimeout(i),Ya&&cancelAnimationFrame(t),setTimeout(n)},i=setTimeout(o,100);Ya&&(t=requestAnimationFrame(o))}function Di(n){var t=ae,o=n.__c;typeof o=="function"&&(n.__c=void 0,o()),ae=t}function Xr(n){var t=ae;n.__c=n.__(),ae=t}function Qr(n,t){return!n||n.length!==t.length||t.some(function(o,i){return o!==n[i]})}function Xa(n,t){return typeof t=="function"?t(n):t}function Qa(n,t){for(var o in t)n[o]=t[o];return n}function Zr(n,t){for(var o in n)if(o!=="__source"&&!(o in t))return!0;for(var i in t)if(i!=="__source"&&n[i]!==t[i])return!0;return!1}function Ri(n){this.props=n}function Ad(n,t){function o(c){var a=this.props.ref,l=a==c.ref;return!l&&a&&(a.call?a(null):a.current=null),t?!t(this.props,c)||!l:Zr(this.props,c)}function i(c){return this.shouldComponentUpdate=o,(0,p.createElement)(n,c)}return i.displayName="Memo("+(n.displayName||n.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(Ri.prototype=new p.Component).isPureReactComponent=!0,Ri.prototype.shouldComponentUpdate=function(n,t){return Zr(this.props,n)||Zr(this.state,t)};var Za=p.options.__b;p.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Za&&Za(n)};var fd=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function ud(n){function t(o){var i=Qa({},o);return delete i.ref,n(i,o.ref||null)}return t.$$typeof=fd,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var el=function(n,t){return n==null?null:(0,p.toChildArray)((0,p.toChildArray)(n).map(t))},nl={map:el,forEach:el,count:function(n){return n?(0,p.toChildArray)(n).length:0},only:function(n){var t=(0,p.toChildArray)(n);if(t.length!==1)throw"Children.only";return t[0]},toArray:p.toChildArray},Ed=p.options.__e;p.options.__e=function(n,t,o,i){if(n.then){for(var c,a=t;a=a.__;)if((c=a.__c)&&c.__c)return t.__e==null&&(t.__e=o.__e,t.__k=o.__k),c.__c(n,t)}Ed(n,t,o,i)};var tl=p.options.unmount;function ol(n,t,o){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),n.__c.__H=null),(n=Qa({},n)).__c!=null&&(n.__c.__P===o&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(i){return ol(i,t,o)})),n}function il(n,t,o){return n&&o&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(i){return il(i,t,o)}),n.__c&&n.__c.__P===t&&(n.__e&&o.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=o)),n}function xi(){this.__u=0,this.t=null,this.__b=null}function rl(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function dd(n){var t,o,i;function c(a){if(t||(t=n()).then(function(l){o=l.default||l},function(l){i=l}),i)throw i;if(!o)throw t;return(0,p.createElement)(o,a)}return c.displayName="Lazy",c.__f=!0,c}function Eo(){this.u=null,this.o=null}p.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),tl&&tl(n)},(xi.prototype=new p.Component).__c=function(n,t){var o=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(o);var c=rl(i.__v),a=!1,l=function(){a||(a=!0,o.__R=null,c?c(s):s())};o.__R=l;var s=function(){if(!--i.__u){if(i.state.__a){var A=i.state.__a;i.__v.__k[0]=il(A,A.__c.__P,A.__c.__O)}var f;for(i.setState({__a:i.__b=null});f=i.t.pop();)f.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),n.then(l,l)},xi.prototype.componentWillUnmount=function(){this.t=[]},xi.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=ol(this.__b,o,i.__O=i.__P)}this.__b=null}var c=t.__a&&(0,p.createElement)(p.Fragment,null,n.fallback);return c&&(c.__u&=-33),[(0,p.createElement)(p.Fragment,null,t.__a?null:n.children),c]};var cl=function(n,t,o){if(++o[1]===o[0]&&n.o.delete(t),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(o=n.u;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;n.u=o=o[2]}};function hd(n){return this.getChildContext=function(){return n.context},n.children}function pd(n){var t=this,o=n.i;t.componentWillUnmount=function(){(0,p.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==o&&t.componentWillUnmount(),t.l||(t.i=o,t.l={nodeType:1,parentNode:o,childNodes:[],appendChild:function(i){this.childNodes.push(i),t.i.appendChild(i)},insertBefore:function(i,c){this.childNodes.push(i),t.i.appendChild(i)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),t.i.removeChild(i)}}),(0,p.render)((0,p.createElement)(hd,{context:t.context},n.__v),t.l)}function _d(n,t){var o=(0,p.createElement)(pd,{__v:n,i:t});return o.containerInfo=t,o}(Eo.prototype=new p.Component).__a=function(n){var t=this,o=rl(t.__v),i=t.o.get(n);return i[0]++,function(c){var a=function(){t.props.revealOrder?(i.push(c),cl(t,n,i)):c()};o?o(a):a()}},Eo.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,p.toChildArray)(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&t.reverse();for(var o=t.length;o--;)this.o.set(t[o],this.u=[1,0,this.u]);return n.children},Eo.prototype.componentDidUpdate=Eo.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,o){cl(n,o,t)})};var al=typeof Symbol!="undefined"&&Symbol.for&&Symbol.for("react.element")||60103,gd=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,bd=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,md=/[A-Z0-9]/g,Bd=typeof document!="undefined",Cd=function(n){return(typeof Symbol!="undefined"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};function yd(n,t,o){return t.__k==null&&(t.textContent=""),(0,p.render)(n,t),typeof o=="function"&&o(),n?n.__c:null}function vd(n,t,o){return(0,p.hydrate)(n,t),typeof o=="function"&&o(),n?n.__c:null}p.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(p.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var ll=p.options.event;function Id(){}function wd(){return this.cancelBubble}function Sd(){return this.defaultPrevented}p.options.event=function(n){return ll&&(n=ll(n)),n.persist=Id,n.isPropagationStopped=wd,n.isDefaultPrevented=Sd,n.nativeEvent=n};var ec,Td={enumerable:!1,configurable:!0,get:function(){return this.class}},sl=p.options.vnode;p.options.vnode=function(n){typeof n.type=="string"&&function(t){var o=t.props,i=t.type,c={};for(var a in o){var l=o[a];if(!(a==="value"&&"defaultValue"in o&&l==null||Bd&&a==="children"&&i==="noscript"||a==="class"||a==="className")){var s=a.toLowerCase();a==="defaultValue"&&"value"in o&&o.value==null?a="value":a==="download"&&l===!0?l="":s==="ondoubleclick"?a="ondblclick":s!=="onchange"||i!=="input"&&i!=="textarea"||Cd(o.type)?s==="onfocus"?a="onfocusin":s==="onblur"?a="onfocusout":bd.test(a)?a=s:i.indexOf("-")===-1&&gd.test(a)?a=a.replace(md,"-$&").toLowerCase():l===null&&(l=void 0):s=a="oninput",s==="oninput"&&c[a=s]&&(a="oninputCapture"),c[a]=l}}i=="select"&&c.multiple&&Array.isArray(c.value)&&(c.value=(0,p.toChildArray)(o.children).forEach(function(A){A.props.selected=c.value.indexOf(A.props.value)!=-1})),i=="select"&&c.defaultValue!=null&&(c.value=(0,p.toChildArray)(o.children).forEach(function(A){A.props.selected=c.multiple?c.defaultValue.indexOf(A.props.value)!=-1:c.defaultValue==A.props.value})),o.class&&!o.className?(c.class=o.class,Object.defineProperty(c,"className",Td)):(o.className&&!o.class||o.class&&o.className)&&(c.class=c.className=o.className),t.props=c}(n),n.$$typeof=al,sl&&sl(n)};var Al=p.options.__r;p.options.__r=function(n){Al&&Al(n),ec=n.__c};var fl=p.options.diffed;p.options.diffed=function(n){fl&&fl(n);var t=n.props,o=n.__e;o!=null&&n.type==="textarea"&&"value"in t&&t.value!==o.value&&(o.value=t.value==null?"":t.value),ec=null};var Od={ReactCurrentDispatcher:{current:{readContext:function(n){return ec.__n[n.__c].props.value}}}},mB="17.0.2";function Fd(n){return p.createElement.bind(null,n)}function gn(n){return!!n&&n.$$typeof===al}function Jd(n){return gn(n)&&n.type===p.Fragment}function Pn(n){return gn(n)?p.cloneElement.apply(null,arguments):n}function ul(n){return!!n.__k&&((0,p.render)(null,n),!0)}function El(n){return n&&(n.base||n.nodeType===1&&n)||null}var dl=function(n,t){return n(t)},Dd=function(n,t){return n(t)},Rd=p.Fragment;function hl(n){n()}function xd(n){return n}function Pd(){return[!1,hl]}var Nd=uo,kd=gn;function Md(n,t){var o=t(),i=xn({h:{__:o,v:t}}),c=i[0].h,a=i[1];return uo(function(){c.__=o,c.v=t,nc(c)&&a({h:c})},[n,o,t]),an(function(){return nc(c)&&a({h:c}),n(function(){nc(c)&&a({h:c})})},[n]),o}function nc(n){var t,o,i=n.v,c=n.__;try{var a=i();return!((t=c)===(o=a)&&(t!==0||1/t==1/o)||t!=t&&o!=o)}catch{return!0}}var Pe={useState:xn,useId:ad,useReducer:Vr,useEffect:an,useLayoutEffect:uo,useInsertionEffect:Nd,useTransition:Pd,useDeferredValue:xd,useSyncExternalStore:Md,startTransition:hl,useRef:_n,useImperativeHandle:cd,useMemo:Ft,useCallback:Jt,useContext:Yr,useDebugValue:Va,version:"17.0.2",Children:nl,render:yd,hydrate:vd,unmountComponentAtNode:ul,createPortal:_d,createElement:p.createElement,createContext:p.createContext,createFactory:Fd,cloneElement:Pn,createRef:p.createRef,Fragment:p.Fragment,isValidElement:gn,isElement:kd,isFragment:Jd,findDOMNode:El,Component:p.Component,PureComponent:Ri,memo:Ad,forwardRef:ud,flushSync:Dd,unstable_batchedUpdates:dl,StrictMode:Rd,Suspense:xi,SuspenseList:Eo,lazy:dd,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Od},Ld=$(5395),Ud=$.n(Ld),jd=$(3196),Hd=$.n(jd);/*! *****************************************************************************
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
***************************************************************************** */var tc=function(n,t){return tc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var c in i)i.hasOwnProperty(c)&&(o[c]=i[c])},tc(n,t)};function pl(n,t){tc(n,t);function o(){this.constructor=n}n.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var Dt=function(){return Dt=Object.assign||function(t){for(var o,i=1,c=arguments.length;i<c;i++){o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Dt.apply(this,arguments)};function _l(n,t){var o={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(n);c<i.length;c++)t.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(n,i[c])&&(o[i[c]]=n[i[c]]);return o}var gl=function(n,t,o,i){switch(t){case"debounce":return Ud()(n,o,i);case"throttle":return Hd()(n,o,i);default:return n}},bl=function(n){return typeof n=="function"},ho=function(){return typeof window=="undefined"},ml=function(n){return n instanceof Element||n instanceof HTMLDocument},zd=function(n){pl(t,n);function t(o){var i=n.call(this,o)||this;i.cancelHandler=function(){i.resizeHandler&&i.resizeHandler.cancel&&(i.resizeHandler.cancel(),i.resizeHandler=null)},i.attachObserver=function(){var f=i.props,u=f.targetRef,d=f.observerOptions;if(!ho()){u&&u.current&&(i.targetRef.current=u.current);var E=i.getElement();E&&(i.observableElement&&i.observableElement===E||(i.observableElement=E,i.resizeObserver.observe(E,d)))}},i.getElement=function(){var f=i.props,u=f.querySelector,d=f.targetDomEl;if(ho())return null;if(u)return document.querySelector(u);if(d&&ml(d))return d;if(i.targetRef&&ml(i.targetRef.current))return i.targetRef.current;var E=El(i);if(!E)return null;var y=i.getRenderType();switch(y){case"renderProp":return E;case"childFunction":return E;case"child":return E;case"childArray":return E;default:return E.parentElement}},i.createResizeHandler=function(f){var u=i.props,d=u.handleWidth,E=d===void 0?!0:d,y=u.handleHeight,g=y===void 0?!0:y,b=u.onResize;if(!(!E&&!g)){var w=function(m){var I=m.width,B=m.height;i.state.width===I&&i.state.height===B||i.state.width===I&&!g||i.state.height===B&&!E||(b==null||b(I,B),i.setState({width:I,height:B}))};f.forEach(function(m){var I=m&&m.contentRect||{},B=I.width,S=I.height,W=!i.skipOnMount&&!ho();W&&w({width:B,height:S}),i.skipOnMount=!1})}},i.getRenderType=function(){var f=i.props,u=f.render,d=f.children;return bl(u)?"renderProp":bl(d)?"childFunction":gn(d)?"child":Array.isArray(d)?"childArray":"parent"};var c=o.skipOnMount,a=o.refreshMode,l=o.refreshRate,s=l===void 0?1e3:l,A=o.refreshOptions;return i.state={width:void 0,height:void 0},i.sizeRef={current:i.state},i.skipOnMount=c,i.targetRef=(0,p.createRef)(),i.observableElement=null,ho()||(i.resizeHandler=gl(i.createResizeHandler,a,s,A),i.resizeObserver=new window.ResizeObserver(i.resizeHandler)),i}return t.prototype.componentDidMount=function(){this.attachObserver()},t.prototype.componentDidUpdate=function(){this.attachObserver(),this.sizeRef.current=this.state},t.prototype.componentWillUnmount=function(){ho()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler())},t.prototype.render=function(){var o=this.props,i=o.render,c=o.children,a=o.nodeType,l=a===void 0?"div":a,s=this.state,A=s.width,f=s.height,u={width:A,height:f,targetRef:this.targetRef},d=this.getRenderType();switch(d){case"renderProp":return i==null?void 0:i(u);case"childFunction":{var E=c;return E==null?void 0:E(u)}case"child":{var y=c;if(y.type&&typeof y.type=="string"){u.targetRef;var g=_l(u,["targetRef"]);return Pn(y,g)}return Pn(y,u)}case"childArray":{var b=c;return b.map(function(w){return!!w&&Pn(w,u)})}default:return Pe.createElement(l,null)}},t}(Ri);function BB(n,t){t===void 0&&(t={});var o=function(a){pl(l,a);function l(){var s=a!==null&&a.apply(this,arguments)||this;return s.ref=createRef(),s}return l.prototype.render=function(){var s=this.props,A=s.forwardedRef,f=_l(s,["forwardedRef"]),u=A!=null?A:this.ref;return React.createElement(zd,Dt({},t,{targetRef:u}),React.createElement(n,Dt({targetRef:u},f)))},l}(Component);function i(a,l){return React.createElement(o,Dt({},a,{forwardedRef:l}))}var c=n.displayName||n.name;return i.displayName="withResizeDetector(".concat(c,")"),forwardRef(i)}function Wd(n){var t=n===void 0?{}:n,o=t.skipOnMount,i=o===void 0?!1:o,c=t.refreshMode,a=t.refreshRate,l=a===void 0?1e3:a,s=t.refreshOptions,A=t.handleWidth,f=A===void 0?!0:A,u=t.handleHeight,d=u===void 0?!0:u,E=t.targetRef,y=t.observerOptions,g=t.onResize,b=_n(i),w=xn({width:void 0,height:void 0}),m=w[0],I=w[1],B=xn((E==null?void 0:E.current)||null),S=B[0],W=B[1];E&&setTimeout(function(){E.current!==S&&W(E.current)},0);var K=Jt(function(de){de!==S&&W(de)},[S]);K.current=S,an(function(){return function(){W(null),K.current=null}},[]);var q=Jt(function(de,we){return!(de.width===we.width&&de.height===we.height||de.width===we.width&&!d||de.height===we.height&&!f)},[f,d]),ee=Jt(function(de){if(!(!f&&!d)){if(b.current){b.current=!1;return}de.forEach(function(we){var on=(we==null?void 0:we.contentRect)||{},sn=on.width,Un=on.height;I(function(Bn){return q(Bn,{width:sn,height:Un})?{width:sn,height:Un}:Bn})})}},[f,d,b,q]),xe=Jt(gl(ee,c,l,s),[ee,c,l,s]);return an(function(){var de;return S?(de=new window.ResizeObserver(xe),de.observe(S,y)):(m.width||m.height)&&I({width:void 0,height:void 0}),function(){var we,on,sn;(we=de==null?void 0:de.disconnect)===null||we===void 0||we.call(de),(sn=(on=xe).cancel)===null||sn===void 0||sn.call(on)}},[xe,S]),an(function(){g==null||g(m.width,m.height)},[m]),Dt({ref:K},m)}function po(){return po=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)({}).hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},po.apply(null,arguments)}function oc(n,t){if(n==null)return{};var o={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(t.indexOf(i)!==-1)continue;o[i]=n[i]}return o}function ic(n,t){return ic=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},ic(n,t)}function rc(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,ic(n,t)}var CB=$(8182);function Kd(n,t){return n.classList?!!t&&n.classList.contains(t):(" "+(n.className.baseVal||n.className)+" ").indexOf(" "+t+" ")!==-1}function Gd(n,t){n.classList?n.classList.add(t):Kd(n,t)||(typeof n.className=="string"?n.className=n.className+" "+t:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+t))}function Bl(n,t){return n.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function qd(n,t){n.classList?n.classList.remove(t):typeof n.className=="string"?n.className=Bl(n.className,t):n.setAttribute("class",Bl(n.className&&n.className.baseVal||"",t))}const Cl={disabled:!1},Pi=Pe.createContext(null);var _o="unmounted",tt="exited",ot="entering",Rt="entered",cc="exiting",bn=function(n){rc(t,n);function t(i,c){var a;a=n.call(this,i,c)||this;var l=c,s=l&&!l.isMounting?i.enter:i.appear,A;return a.appearStatus=null,i.in?s?(A=tt,a.appearStatus=ot):A=Rt:i.unmountOnExit||i.mountOnEnter?A=_o:A=tt,a.state={status:A},a.nextCallback=null,a}t.getDerivedStateFromProps=function(c,a){var l=c.in;return l&&a.status===_o?{status:tt}:null};var o=t.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(c){var a=null;if(c!==this.props){var l=this.state.status;this.props.in?l!==ot&&l!==Rt&&(a=ot):(l===ot||l===Rt)&&(a=cc)}this.updateStatus(!1,a)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var c=this.props.timeout,a,l,s;return a=l=s=c,c!=null&&typeof c!="number"&&(a=c.exit,l=c.enter,s=c.appear!==void 0?c.appear:l),{exit:a,enter:l,appear:s}},o.updateStatus=function(c,a){c===void 0&&(c=!1),a!==null?(this.cancelNextCallback(),a===ot?this.performEnter(c):this.performExit()):this.props.unmountOnExit&&this.state.status===tt&&this.setState({status:_o})},o.performEnter=function(c){var a=this,l=this.props.enter,s=this.context?this.context.isMounting:c,A=this.props.nodeRef?[s]:[Pe.findDOMNode(this),s],f=A[0],u=A[1],d=this.getTimeouts(),E=s?d.appear:d.enter;if(!c&&!l||Cl.disabled){this.safeSetState({status:Rt},function(){a.props.onEntered(f)});return}this.props.onEnter(f,u),this.safeSetState({status:ot},function(){a.props.onEntering(f,u),a.onTransitionEnd(E,function(){a.safeSetState({status:Rt},function(){a.props.onEntered(f,u)})})})},o.performExit=function(){var c=this,a=this.props.exit,l=this.getTimeouts(),s=this.props.nodeRef?void 0:Pe.findDOMNode(this);if(!a||Cl.disabled){this.safeSetState({status:tt},function(){c.props.onExited(s)});return}this.props.onExit(s),this.safeSetState({status:cc},function(){c.props.onExiting(s),c.onTransitionEnd(l.exit,function(){c.safeSetState({status:tt},function(){c.props.onExited(s)})})})},o.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(c,a){a=this.setNextCallback(a),this.setState(c,a)},o.setNextCallback=function(c){var a=this,l=!0;return this.nextCallback=function(s){l&&(l=!1,a.nextCallback=null,c(s))},this.nextCallback.cancel=function(){l=!1},this.nextCallback},o.onTransitionEnd=function(c,a){this.setNextCallback(a);var l=this.props.nodeRef?this.props.nodeRef.current:Pe.findDOMNode(this),s=c==null&&!this.props.addEndListener;if(!l||s){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var A=this.props.nodeRef?[this.nextCallback]:[l,this.nextCallback],f=A[0],u=A[1];this.props.addEndListener(f,u)}c!=null&&setTimeout(this.nextCallback,c)},o.render=function(){var c=this.state.status;if(c===_o)return null;var a=this.props,l=a.children,s=a.in,A=a.mountOnEnter,f=a.unmountOnExit,u=a.appear,d=a.enter,E=a.exit,y=a.timeout,g=a.addEndListener,b=a.onEnter,w=a.onEntering,m=a.onEntered,I=a.onExit,B=a.onExiting,S=a.onExited,W=a.nodeRef,K=oc(a,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Pe.createElement(Pi.Provider,{value:null},typeof l=="function"?l(c,K):Pe.cloneElement(Pe.Children.only(l),K))},t}(Pe.Component);bn.contextType=Pi,bn.propTypes={};function xt(){}bn.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:xt,onEntering:xt,onEntered:xt,onExit:xt,onExiting:xt,onExited:xt},bn.UNMOUNTED=_o,bn.EXITED=tt,bn.ENTERING=ot,bn.ENTERED=Rt,bn.EXITING=cc;const $d=bn;var Vd=function(t,o){return t&&o&&o.split(" ").forEach(function(i){return Gd(t,i)})},ac=function(t,o){return t&&o&&o.split(" ").forEach(function(i){return qd(t,i)})},lc=function(n){rc(t,n);function t(){for(var i,c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return i=n.call.apply(n,[this].concat(a))||this,i.appliedClasses={appear:{},enter:{},exit:{}},i.onEnter=function(s,A){var f=i.resolveArguments(s,A),u=f[0],d=f[1];i.removeClasses(u,"exit"),i.addClass(u,d?"appear":"enter","base"),i.props.onEnter&&i.props.onEnter(s,A)},i.onEntering=function(s,A){var f=i.resolveArguments(s,A),u=f[0],d=f[1],E=d?"appear":"enter";i.addClass(u,E,"active"),i.props.onEntering&&i.props.onEntering(s,A)},i.onEntered=function(s,A){var f=i.resolveArguments(s,A),u=f[0],d=f[1],E=d?"appear":"enter";i.removeClasses(u,E),i.addClass(u,E,"done"),i.props.onEntered&&i.props.onEntered(s,A)},i.onExit=function(s){var A=i.resolveArguments(s),f=A[0];i.removeClasses(f,"appear"),i.removeClasses(f,"enter"),i.addClass(f,"exit","base"),i.props.onExit&&i.props.onExit(s)},i.onExiting=function(s){var A=i.resolveArguments(s),f=A[0];i.addClass(f,"exit","active"),i.props.onExiting&&i.props.onExiting(s)},i.onExited=function(s){var A=i.resolveArguments(s),f=A[0];i.removeClasses(f,"exit"),i.addClass(f,"exit","done"),i.props.onExited&&i.props.onExited(s)},i.resolveArguments=function(s,A){return i.props.nodeRef?[i.props.nodeRef.current,s]:[s,A]},i.getClassNames=function(s){var A=i.props.classNames,f=typeof A=="string",u=f&&A?A+"-":"",d=f?""+u+s:A[s],E=f?d+"-active":A[s+"Active"],y=f?d+"-done":A[s+"Done"];return{baseClassName:d,activeClassName:E,doneClassName:y}},i}var o=t.prototype;return o.addClass=function(c,a,l){var s=this.getClassNames(a)[l+"ClassName"],A=this.getClassNames("enter"),f=A.doneClassName;a==="appear"&&l==="done"&&f&&(s+=" "+f),l==="active"&&c&&c.scrollTop,s&&(this.appliedClasses[a][l]=s,Vd(c,s))},o.removeClasses=function(c,a){var l=this.appliedClasses[a],s=l.base,A=l.active,f=l.done;this.appliedClasses[a]={},s&&ac(c,s),A&&ac(c,A),f&&ac(c,f)},o.render=function(){var c=this.props,a=c.classNames,l=oc(c,["classNames"]);return Pe.createElement($d,po({},l,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(Pe.Component);lc.defaultProps={classNames:""},lc.propTypes={};const Yd=lc;function Xd(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function sc(n,t){var o=function(a){return t&&gn(a)?t(a):a},i=Object.create(null);return n&&nl.map(n,function(c){return c}).forEach(function(c){i[c.key]=o(c)}),i}function Qd(n,t){n=n||{},t=t||{};function o(u){return u in t?t[u]:n[u]}var i=Object.create(null),c=[];for(var a in n)a in t?c.length&&(i[a]=c,c=[]):c.push(a);var l,s={};for(var A in t){if(i[A])for(l=0;l<i[A].length;l++){var f=i[A][l];s[i[A][l]]=o(f)}s[A]=o(A)}for(l=0;l<c.length;l++)s[c[l]]=o(c[l]);return s}function it(n,t,o){return o[t]!=null?o[t]:n.props[t]}function Zd(n,t){return sc(n.children,function(o){return Pn(o,{onExited:t.bind(null,o),in:!0,appear:it(o,"appear",n),enter:it(o,"enter",n),exit:it(o,"exit",n)})})}function eh(n,t,o){var i=sc(n.children),c=Qd(t,i);return Object.keys(c).forEach(function(a){var l=c[a];if(gn(l)){var s=a in t,A=a in i,f=t[a],u=gn(f)&&!f.props.in;A&&(!s||u)?c[a]=Pn(l,{onExited:o.bind(null,l),in:!0,exit:it(l,"exit",n),enter:it(l,"enter",n)}):!A&&s&&!u?c[a]=Pn(l,{in:!1}):A&&s&&gn(f)&&(c[a]=Pn(l,{onExited:o.bind(null,l),in:f.props.in,exit:it(l,"exit",n),enter:it(l,"enter",n)}))}}),c}var nh=Object.values||function(n){return Object.keys(n).map(function(t){return n[t]})},th={component:"div",childFactory:function(t){return t}},Ac=function(n){rc(t,n);function t(i,c){var a;a=n.call(this,i,c)||this;var l=a.handleExited.bind(Xd(a));return a.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},a}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(c,a){var l=a.children,s=a.handleExited,A=a.firstRender;return{children:A?Zd(c,s):eh(c,l,s),firstRender:!1}},o.handleExited=function(c,a){var l=sc(this.props.children);c.key in l||(c.props.onExited&&c.props.onExited(a),this.mounted&&this.setState(function(s){var A=po({},s.children);return delete A[c.key],{children:A}}))},o.render=function(){var c=this.props,a=c.component,l=c.childFactory,s=oc(c,["component","childFactory"]),A=this.state.contextValue,f=nh(this.state.children).map(l);return delete s.appear,delete s.enter,delete s.exit,a===null?Pe.createElement(Pi.Provider,{value:A},f):Pe.createElement(Pi.Provider,{value:A},Pe.createElement(a,s,f))},t}(Pe.Component);Ac.propTypes={},Ac.defaultProps=th;const oh=Ac;var Ni=Pe.createContext(null);const yB=null;function ih(n){n()}var yl=ih,rh=function(t){return yl=t},ch=function(){return yl},vl={notify:function(){}};function ah(){var n=ch(),t=null,o=null;return{clear:function(){t=null,o=null},notify:function(){n(function(){for(var c=t;c;)c.callback(),c=c.next})},get:function(){for(var c=[],a=t;a;)c.push(a),a=a.next;return c},subscribe:function(c){var a=!0,l=o={callback:c,next:null,prev:o};return l.prev?l.prev.next=l:t=l,function(){!a||t===null||(a=!1,l.next?l.next.prev=l.prev:o=l.prev,l.prev?l.prev.next=l.next:t=l.next)}}}}var Il=function(){function n(o,i){this.store=o,this.parentSub=i,this.unsubscribe=null,this.listeners=vl,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=n.prototype;return t.addNestedSub=function(i){return this.trySubscribe(),this.listeners.subscribe(i)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return!!this.unsubscribe},t.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=ah())},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=vl)},n}(),fc=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?uo:an;function lh(n){var t=n.store,o=n.context,i=n.children,c=Ft(function(){var s=new Il(t);return s.onStateChange=s.notifyNestedSubs,{store:t,subscription:s}},[t]),a=Ft(function(){return t.getState()},[t]);fc(function(){var s=c.subscription;return s.trySubscribe(),a!==t.getState()&&s.notifyNestedSubs(),function(){s.tryUnsubscribe(),s.onStateChange=null}},[c,a]);var l=o||Ni;return Pe.createElement(l.Provider,{value:c},i)}const sh=lh;var vB=$(2676),IB=$(8063),Ah=null,fh=null,wB=function(t){try{return JSON.stringify(t)}catch{return String(t)}};function uh(n,t){var o=n[1];return[t.payload,o+1]}function wl(n,t,o){useIsomorphicLayoutEffect(function(){return n.apply(void 0,t)},o)}function Eh(n,t,o,i,c,a,l){n.current=i,t.current=c,o.current=!1,a.current&&(a.current=null,l())}function dh(n,t,o,i,c,a,l,s,A,f){if(n){var u=!1,d=null,E=function(){if(!u){var b=t.getState(),w,m;try{w=i(b,c.current)}catch(I){m=I,d=I}m||(d=null),w===a.current?l.current||A():(a.current=w,s.current=w,l.current=!0,f({type:"STORE_UPDATED",payload:{error:m}}))}};o.onStateChange=E,o.trySubscribe(),E();var y=function(){if(u=!0,o.tryUnsubscribe(),o.onStateChange=null,d)throw d};return y}}var hh=function(){return[null,0]};function SB(n,t){t===void 0&&(t={});var o=t,i=o.getDisplayName,c=i===void 0?function(K){return"ConnectAdvanced("+K+")"}:i,a=o.methodName,l=a===void 0?"connectAdvanced":a,s=o.renderCountProp,A=s===void 0?void 0:s,f=o.shouldHandleStateChanges,u=f===void 0?!0:f,d=o.storeKey,E=d===void 0?"store":d,y=o.withRef,g=y===void 0?!1:y,b=o.forwardRef,w=b===void 0?!1:b,m=o.context,I=m===void 0?ReactReduxContext:m,B=_objectWithoutPropertiesLoose(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);if(0)var S;var W=I;return function(q){var ee=q.displayName||q.name||"Component",xe=c(ee),de=_extends({},B,{getDisplayName:c,methodName:l,renderCountProp:A,shouldHandleStateChanges:u,storeKey:E,displayName:xe,wrappedComponentName:ee,WrappedComponent:q}),we=B.pure;function on(He){return n(He.dispatch,de)}var sn=we?useMemo:function(He){return He()};function Un(He){var xo=useMemo(function(){var ko=He.reactReduxForwardedRef,ia=_objectWithoutPropertiesLoose(He,["reactReduxForwardedRef"]);return[He.context,ko,ia]},[He]),dt=xo[0],lA=xo[1],Po=xo[2],Zc=useMemo(function(){return dt&&dt.Consumer&&isContextConsumer(React.createElement(dt.Consumer,null))?dt:W},[dt,W]),jn=useContext(Zc),No=!!He.store&&!!He.store.getState&&!!He.store.dispatch,by=!!jn&&!!jn.store,Hn=No?He.store:jn.store,ea=useMemo(function(){return on(Hn)},[Hn]),sA=useMemo(function(){if(!u)return fh;var ko=new Subscription(Hn,No?null:jn.subscription),ia=ko.notifyNestedSubs.bind(ko);return[ko,ia]},[Hn,No,jn]),sr=sA[0],AA=sA[1],fA=useMemo(function(){return No?jn:_extends({},jn,{subscription:sr})},[No,jn,sr]),uA=useReducer(uh,Ah,hh),lB=uA[0],Ar=lB[0],sB=uA[1];if(Ar&&Ar.error)throw Ar.error;var EA=useRef(),na=useRef(Po),fr=useRef(),dA=useRef(!1),ta=sn(function(){return fr.current&&Po===na.current?fr.current:ea(Hn.getState(),Po)},[Hn,Ar,Po]);wl(Eh,[na,EA,dA,Po,ta,fr,AA]),wl(dh,[u,Hn,sr,ea,na,EA,dA,fr,AA,sB],[Hn,sr,ea]);var oa=useMemo(function(){return React.createElement(q,_extends({},ta,{ref:lA}))},[lA,q,ta]),AB=useMemo(function(){return u?React.createElement(Zc.Provider,{value:fA},oa):oa},[Zc,oa,fA]);return AB}var Bn=we?React.memo(Un):Un;if(Bn.WrappedComponent=q,Bn.displayName=Un.displayName=xe,w){var lr=React.forwardRef(function(xo,dt){return React.createElement(Bn,_extends({},xo,{reactReduxForwardedRef:dt}))});return lr.displayName=xe,lr.WrappedComponent=q,hoistStatics(lr,q)}return hoistStatics(Bn,q)}}function ph(n,t){var o={},i=function(l){var s=n[l];typeof s=="function"&&(o[l]=function(){return t(s.apply(void 0,arguments))})};for(var c in n)i(c);return o}function uc(n){return function(o,i){var c=n(o,i);function a(){return c}return a.dependsOnOwnProps=!1,a}}function Sl(n){return n.dependsOnOwnProps!==null&&n.dependsOnOwnProps!==void 0?!!n.dependsOnOwnProps:n.length!==1}function Tl(n,t){return function(i,c){var a=c.displayName,l=function(A,f){return l.dependsOnOwnProps?l.mapToProps(A,f):l.mapToProps(A)};return l.dependsOnOwnProps=!0,l.mapToProps=function(A,f){l.mapToProps=n,l.dependsOnOwnProps=Sl(n);var u=l(A,f);return typeof u=="function"&&(l.mapToProps=u,l.dependsOnOwnProps=Sl(u),u=l(A,f)),u},l}}function _h(n){return typeof n=="function"?Tl(n,"mapDispatchToProps"):void 0}function gh(n){return n?void 0:uc(function(t){return{dispatch:t}})}function bh(n){return n&&typeof n=="object"?uc(function(t){return ph(n,t)}):void 0}const TB=[_h,gh,bh];function mh(n){return typeof n=="function"?Tl(n,"mapStateToProps"):void 0}function Bh(n){return n?void 0:uc(function(){return{}})}const OB=[mh,Bh];function Ch(n,t,o){return po({},o,n,t)}function yh(n){return function(o,i){var c=i.displayName,a=i.pure,l=i.areMergedPropsEqual,s=!1,A;return function(u,d,E){var y=n(u,d,E);return s?(!a||!l(y,A))&&(A=y):(s=!0,A=y),A}}}function vh(n){return typeof n=="function"?yh(n):void 0}function Ih(n){return n?void 0:function(){return Ch}}const FB=[vh,Ih];function Ec(n,t,o){for(var i=t.length-1;i>=0;i--){var c=t[i](n);if(c)return c}return function(a,l){throw new Error("Invalid value of type "+typeof n+" for "+o+" argument when connecting component "+l.wrappedComponentName+".")}}function wh(n,t){return n===t}function JB(n){var t=n===void 0?{}:n,o=t.connectHOC,i=o===void 0?connectAdvanced:o,c=t.mapStateToPropsFactories,a=c===void 0?defaultMapStateToPropsFactories:c,l=t.mapDispatchToPropsFactories,s=l===void 0?defaultMapDispatchToPropsFactories:l,A=t.mergePropsFactories,f=A===void 0?defaultMergePropsFactories:A,u=t.selectorFactory,d=u===void 0?defaultSelectorFactory:u;return function(y,g,b,w){w===void 0&&(w={});var m=w,I=m.pure,B=I===void 0?!0:I,S=m.areStatesEqual,W=S===void 0?wh:S,K=m.areOwnPropsEqual,q=K===void 0?shallowEqual:K,ee=m.areStatePropsEqual,xe=ee===void 0?shallowEqual:ee,de=m.areMergedPropsEqual,we=de===void 0?shallowEqual:de,on=_objectWithoutPropertiesLoose(m,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),sn=Ec(y,a,"mapStateToProps"),Un=Ec(g,s,"mapDispatchToProps"),Bn=Ec(b,f,"mergeProps");return i(d,_extends({methodName:"connect",getDisplayName:function(He){return"Connect("+He+")"},shouldHandleStateChanges:!!y,initMapStateToProps:sn,initMapDispatchToProps:Un,initMergeProps:Bn,pure:B,areStatesEqual:W,areOwnPropsEqual:q,areStatePropsEqual:xe,areMergedPropsEqual:we},on))}}const DB=null;function Sh(){var n=Yr(Ni);return n}function RB(n){n===void 0&&(n=ReactReduxContext);var t=n===ReactReduxContext?useDefaultReduxContext:function(){return useContext(n)};return function(){var i=t(),c=i.store;return c}}var xB=null;function PB(n){n===void 0&&(n=ReactReduxContext);var t=n===ReactReduxContext?useDefaultStore:createStoreHook(n);return function(){var i=t();return i.dispatch}}var NB=null,Th=function(t,o){return t===o};function Oh(n,t,o,i){var c=Vr(function(g){return g+1},0),a=c[1],l=Ft(function(){return new Il(o,i)},[o,i]),s=_n(),A=_n(),f=_n(),u=_n(),d=o.getState(),E;try{if(n!==A.current||d!==f.current||s.current){var y=n(d);u.current===void 0||!t(y,u.current)?E=y:E=u.current}else E=u.current}catch(g){throw s.current&&(g.message+=`
The error may be correlated with this previous error:
`+s.current.stack+`

`),g}return fc(function(){A.current=n,f.current=d,u.current=E,s.current=void 0}),fc(function(){function g(){try{var b=o.getState(),w=A.current(b);if(t(w,u.current))return;u.current=w,f.current=b}catch(m){s.current=m}a()}return l.onStateChange=g,l.trySubscribe(),g(),function(){return l.tryUnsubscribe()}},[o,l]),E}function Fh(n){n===void 0&&(n=Ni);var t=n===Ni?Sh:function(){return Yr(n)};return function(i,c){c===void 0&&(c=Th);var a=t(),l=a.store,s=a.subscription,A=Oh(i,c,l,s);return Va(A),A}}var Jh=Fh();rh(dl);var Dh=/\s/;function Rh(n){for(var t=n.length;t--&&Dh.test(n.charAt(t)););return t}const xh=Rh;var Ph=/^\s+/;function Nh(n){return n&&n.slice(0,xh(n)+1).replace(Ph,"")}const kh=Nh;var Mh="[object Symbol]";function Lh(n){return typeof n=="symbol"||Zn(n)&&dn(n)==Mh}const ki=Lh;var Ol=NaN,Uh=/^[-+]0x[0-9a-f]+$/i,jh=/^0b[01]+$/i,Hh=/^0o[0-7]+$/i,zh=parseInt;function Wh(n){if(typeof n=="number")return n;if(ki(n))return Ol;if(en(n)){var t=typeof n.valueOf=="function"?n.valueOf():n;n=en(t)?t+"":t}if(typeof n!="string")return n===0?n:+n;n=kh(n);var o=jh.test(n);return o||Hh.test(n)?zh(n.slice(2),o?2:8):Uh.test(n)?Ol:+n}const Kh=Wh;var Fl=1/0,Gh=17976931348623157e292;function qh(n){if(!n)return n===0?n:0;if(n=Kh(n),n===Fl||n===-Fl){var t=n<0?-1:1;return t*Gh}return n===n?n:0}const $h=qh;function Vh(n){var t=$h(n),o=t%1;return t===t?o?t-o:t:0}const Yh=Vh;var Xh="Expected a function";function Qh(n,t){var o;if(typeof t!="function")throw new TypeError(Xh);return n=Yh(n),function(){return--n>0&&(o=t.apply(this,arguments)),n<=1&&(t=void 0),o}}const Zh=Qh;function ep(n){return Zh(2,n)}const np=ep(()=>({...window.desktop.store,dispatch:_a})),{render:tp}=p,op=async(n,t="div")=>{const o=np(),c=o.getState().settings.locale;c&&await window.desktop.intl.applyLocale(c);const a=document.createElement(t);document.body.appendChild(a),window.addEventListener("beforeunload",()=>ul(a)),tp(C(sh,{store:o,children:C(n,{})}),a)};function ip(n,t,o){t=="__proto__"&&Si?Si(n,t,{configurable:!0,enumerable:!0,value:o,writable:!0}):n[t]=o}const Jl=ip;function rp(n,t,o,i){for(var c=-1,a=n==null?0:n.length;++c<a;){var l=n[c];t(i,l,o(l),n)}return i}const cp=rp;function ap(n){return function(t,o,i){for(var c=-1,a=Object(t),l=i(t),s=l.length;s--;){var A=l[n?s:++c];if(o(a[A],A,a)===!1)break}return t}}var lp=ap();const sp=lp;function Ap(n,t){return n&&sp(n,t,Hr)}const fp=Ap;function up(n,t){return function(o,i){if(o==null)return o;if(!Nr(o))return n(o,i);for(var c=o.length,a=t?c:-1,l=Object(o);(t?a--:++a<c)&&i(l[a],a,l)!==!1;);return o}}var Ep=up(fp);const Dl=Ep;function dp(n,t,o,i){return Dl(n,function(c,a,l){t(i,c,o(c),l)}),i}const hp=dp;var pp=1,_p=2;function gp(n,t,o,i){var c=o.length,a=c,l=!i;if(n==null)return!a;for(n=Object(n);c--;){var s=o[c];if(l&&s[2]?s[1]!==n[s[0]]:!(s[0]in n))return!1}for(;++c<a;){s=o[c];var A=s[0],f=n[A],u=s[1];if(l&&s[2]){if(f===void 0&&!(A in n))return!1}else{var d=new Oi;if(i)var E=i(f,u,A,n,t,d);if(!(E===void 0?Gr(u,f,pp|_p,i,d):E))return!1}}return!0}const bp=gp;function mp(n){return n===n&&!en(n)}const Rl=mp;function Bp(n){for(var t=Hr(n),o=t.length;o--;){var i=t[o],c=n[i];t[o]=[i,c,Rl(c)]}return t}const Cp=Bp;function yp(n,t){return function(o){return o==null?!1:o[n]===t&&(t!==void 0||n in Object(o))}}const xl=yp;function vp(n){var t=Cp(n);return t.length==1&&t[0][2]?xl(t[0][0],t[0][1]):function(o){return o===n||bp(o,n,t)}}const Ip=vp;var wp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Sp=/^\w*$/;function Tp(n,t){if(Ve(n))return!1;var o=typeof n;return o=="number"||o=="symbol"||o=="boolean"||n==null||ki(n)?!0:Sp.test(n)||!wp.test(n)||t!=null&&n in Object(t)}const dc=Tp;var Op="Expected a function";function hc(n,t){if(typeof n!="function"||t!=null&&typeof t!="function")throw new TypeError(Op);var o=function(){var i=arguments,c=t?t.apply(this,i):i[0],a=o.cache;if(a.has(c))return a.get(c);var l=n.apply(this,i);return o.cache=a.set(c,l)||a,l};return o.cache=new(hc.Cache||Ci),o}hc.Cache=Ci;const Fp=hc;var Jp=500;function Dp(n){var t=Fp(n,function(i){return o.size===Jp&&o.clear(),i}),o=t.cache;return t}const Rp=Dp;var xp=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pp=/\\(\\)?/g,Np=Rp(function(n){var t=[];return n.charCodeAt(0)===46&&t.push(""),n.replace(xp,function(o,i,c,a){t.push(c?a.replace(Pp,"$1"):i||o)}),t});const kp=Np;var Mp=1/0,Pl=ke?ke.prototype:void 0,Nl=Pl?Pl.toString:void 0;function kl(n){if(typeof n=="string")return n;if(Ve(n))return Ii(n,kl)+"";if(ki(n))return Nl?Nl.call(n):"";var t=n+"";return t=="0"&&1/n==-Mp?"-0":t}const Lp=kl;function Up(n){return n==null?"":Lp(n)}const jp=Up;function Hp(n,t){return Ve(n)?n:dc(n,t)?[n]:kp(jp(n))}const Mi=Hp;var zp=1/0;function Wp(n){if(typeof n=="string"||ki(n))return n;var t=n+"";return t=="0"&&1/n==-zp?"-0":t}const go=Wp;function Kp(n,t){t=Mi(t,n);for(var o=0,i=t.length;n!=null&&o<i;)n=n[go(t[o++])];return o&&o==i?n:void 0}const pc=Kp;function Gp(n,t,o){var i=n==null?void 0:pc(n,t);return i===void 0?o:i}const qp=Gp;function $p(n,t){return n!=null&&t in Object(n)}const Vp=$p;function Yp(n,t,o){t=Mi(t,n);for(var i=-1,c=t.length,a=!1;++i<c;){var l=go(t[i]);if(!(a=n!=null&&o(n,l)))break;n=n[l]}return a||++i!=c?a:(c=n==null?0:n.length,!!c&&Pr(c)&&Ur(l,c)&&(Ve(n)||Dr(n)))}const Xp=Yp;function Qp(n,t){return n!=null&&Xp(n,t,Vp)}const Ml=Qp;var Zp=1,e_=2;function n_(n,t){return dc(n)&&Rl(t)?xl(go(n),t):function(o){var i=qp(o,n);return i===void 0&&i===t?Ml(o,n):Gr(t,i,Zp|e_)}}const t_=n_;function o_(n){return function(t){return t==null?void 0:t[n]}}const i_=o_;function r_(n){return function(t){return pc(t,n)}}const c_=r_;function a_(n){return dc(n)?i_(go(n)):c_(n)}const l_=a_;function s_(n){return typeof n=="function"?n:n==null?wi:typeof n=="object"?Ve(n)?t_(n[0],n[1]):Ip(n):l_(n)}const Ll=s_;function A_(n,t){return function(o,i){var c=Ve(o)?cp:hp,a=t?t():{};return c(o,n,Ll(i,2),a)}}const f_=A_;var u_=Object.prototype,E_=u_.hasOwnProperty,d_=f_(function(n,t,o){E_.call(n,o)?n[o].push(t):Jl(n,o,[t])});const Ul=d_;function h_(n,t){for(var o=-1,i=n==null?0:n.length;++o<i&&t(n[o],o,n)!==!1;);return n}const p_=h_;function __(n){return typeof n=="function"?n:wi}const g_=__;function b_(n,t){var o=Ve(n)?p_:Dl;return o(n,g_(t))}const m_=b_;function B_(n){const t=Ul(n,"teamId"),o={};return m_(t,(i,c)=>{o[c]=Ul(t[c],"channel")}),o}function C_(n){return!n.channelName||n.channelName.startsWith("#")||n.channelName.includes(" ")?n:{...n,channelName:`#${n.channelName}`}}function y_(n){if(n&&n.authorName)return n;if(n&&(n.content||"").startsWith("<img"))return Fe.warn("ensureAuthorName: not able to resolve author name, either content is empty or content is html"),n;{const t={...n},o=t.content.match(/.*?:/);return o&&o.length>0&&(t.authorName=o[0].slice(0,o[0].length-1),t.content=t.content.replace(o[0],"")),Fe.info("ensureAuthorName: notification payload does not contain author name, match possible name instead"),t}}const v_=Object.prototype.hasOwnProperty;function I_(n,t){if(Object.is(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;const o=Object.keys(n),i=Object.keys(t);if(o.length!==i.length)return!1;for(let c=0;c<o.length;c++)if(!v_.call(t,o[c])||!Object.is(n[o[c]],t[o[c]]))return!1;return!0}function w_(n){const t=_n(n);return!I_(n,t.current)&&!qr(n,t.current)&&(t.current=n),t.current}function _c(n,t){an(n,[w_(t)])}function bo(n){return Jh(n,qr)}const S_=()=>{const n=bo(t=>t.settings.locale);_c(()=>{async function t(){n&&await window.desktop.intl.applyLocale(n)}t()},[n])};var Li=$(5796),Pt={};Pt.styleTagTransform=D(),Pt.setAttributes=he(),Pt.insert=Y().bind(null,"head"),Pt.domAPI=te(),Pt.insertStyleElement=G();var UB=P()(Li.A,Pt);const jB=Li.A&&Li.A.locals?Li.A.locals:void 0;var T_=Object.prototype,O_=T_.hasOwnProperty;function F_(n,t,o){var i=n[t];(!(O_.call(n,t)&&Ie(i,o))||o===void 0&&!(t in n))&&Jl(n,t,o)}const J_=F_;function D_(n,t,o,i){if(!en(n))return n;t=Mi(t,n);for(var c=-1,a=t.length,l=a-1,s=n;s!=null&&++c<a;){var A=go(t[c]),f=o;if(A==="__proto__"||A==="constructor"||A==="prototype")return n;if(c!=l){var u=s[A];f=i?i(u,A,s):void 0,f===void 0&&(f=en(u)?u:Ur(t[c+1])?[]:{})}J_(s,A,f),s=s[A]}return n}const R_=D_;function x_(n,t,o){for(var i=-1,c=t.length,a={};++i<c;){var l=t[i],s=pc(n,l);o(s,l)&&R_(a,Mi(l,n),s)}return a}const P_=x_;function N_(n,t){return P_(n,t,function(o,i){return Ml(n,i)})}const k_=N_;function M_(n){var t=n==null?0:n.length;return t?Rr(n,1):[]}const L_=M_;function U_(n){return pa(ha(n,void 0,L_),n+"")}var j_=U_(function(n,t){return n==null?{}:k_(n,t)});const H_=j_;var z_=Math.min;function W_(n,t,o){for(var i=o?Fr:Or,c=n[0].length,a=n.length,l=a,s=Array(a),A=1/0,f=[];l--;){var u=n[l];l&&t&&(u=Ii(u,Jr(t))),A=z_(u.length,A),s[l]=!o&&(t||c>=120&&u.length>=120)?new vi(l&&u):void 0}u=n[0];var d=-1,E=s[0];e:for(;++d<c&&f.length<A;){var y=u[d],g=t?t(y):y;if(y=o||y!==0?y:0,!(E?so(E,g):i(f,g,o))){for(l=a;--l;){var b=s[l];if(!(b?so(b,g):i(n[l],g,o)))continue e}E&&E.push(g),f.push(y)}}return f}const K_=W_;function G_(n){return Ao(n)?n:[]}const q_=G_;var $_=xr(function(n){var t=Ii(n,q_);return t.length&&t[0]===n[0]?K_(t):[]});const V_=$_;function Y_(n,t){for(var o,i=-1,c=n.length;++i<c;){var a=t(n[i]);a!==void 0&&(o=o===void 0?a:o+a)}return o}const X_=Y_;function Q_(n,t){return n&&n.length?X_(n,Ll(t,2)):0}const jl=Q_;function Z_(n,t){return n.teams[t]}const eg=n=>n.length===2,Hl=n=>{const t=n.split("@");return eg(t)?t:void 0},zl=ve(n=>{var t;return(t=n==null?void 0:n.teams)!=null?t:{}},n=>{const t=Object.values(n).find(o=>o&&o.version);return t?t.version:void 0}),zB=ve([zl],n=>{if(!n)return;const t=Hl(n);return t?t[0]:void 0}),WB=ve([zl],n=>{if(!n)return;const t=Hl(n);if(!t)return;const o=Number.parseInt(t[1],10);return Number.isNaN(o)?void 0:o}),KB=ve(n=>{var t;return(t=n==null?void 0:n.teams)!=null?t:{}},n=>{const t=Object.values(n).find(o=>o&&o.frontendBuildType);return t?t.frontendBuildType:void 0}),ng=ve(n=>n,n=>Object.entries(n).reduce((t,[o,i])=>(t[o]={...i.unreads,teamId:o},t),{})),gc="*",GB=ve(n=>{var t;return(t=n==null?void 0:n.teams)!=null?t:{}},n=>Object.values(n).map(t=>{var o;return((o=t==null?void 0:t.connectivityPrefs)==null?void 0:o.ntlmCredentialDomains)||gc}).find(t=>t!==gc)||gc),qB=ve([n=>{var t,o;return(o=(t=n.webapp)==null?void 0:t.teams)!=null?o:{}},n=>n.workspaces],(n,t)=>H_(n,V_(...[n,t].map(Object.keys)))),tg=ve([n=>n.webapp?n.webapp.teams:{},n=>n.workspacesMeta.selectedWorkspaceId],(n,t)=>t?n==null?void 0:n[t]:null),$B=ve([tg,n=>n.settings.locale],(n,t)=>n?n.locale:t),VB=ve([ng],n=>{const t=Object.values(n),o=Object.keys(n).some(i=>{const{showBullet:c,unreads:a}=n[i];return c&&a>0});return{unreads:jl(t,({unreads:i})=>i||0),unreadHighlights:jl(t,({unreadHighlights:i})=>i||0),showBullet:o}});var bc=Symbol.for("immer-nothing"),mo=Symbol.for("immer-draftable"),ie=Symbol.for("immer-state"),YB=[];function Je(n,...t){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var rt=Object.getPrototypeOf;function ln(n){return!!n&&!!n[ie]}function Ye(n){var t;return n?Wl(n)||Array.isArray(n)||!!n[mo]||!!((t=n.constructor)!=null&&t[mo])||Co(n)||yo(n):!1}var og=Object.prototype.constructor.toString();function Wl(n){if(!n||typeof n!="object")return!1;const t=rt(n);if(t===null)return!0;const o=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return o===Object?!0:typeof o=="function"&&Function.toString.call(o)===og}function XB(n){return ln(n)||Je(15,n),n[ie].base_}function Nt(n,t){ct(n)===0?Reflect.ownKeys(n).forEach(o=>{t(o,n[o],n)}):n.forEach((o,i)=>t(i,o,n))}function ct(n){const t=n[ie];return t?t.type_:Array.isArray(n)?1:Co(n)?2:yo(n)?3:0}function Bo(n,t){return ct(n)===2?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function mc(n,t){return ct(n)===2?n.get(t):n[t]}function Kl(n,t,o){const i=ct(n);i===2?n.set(t,o):i===3?n.add(o):n[t]=o}function ig(n,t){return n===t?n!==0||1/n===1/t:n!==n&&t!==t}function Co(n){return n instanceof Map}function yo(n){return n instanceof Set}function De(n){return n.copy_||n.base_}function Bc(n,t){if(Co(n))return new Map(n);if(yo(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);if(!t&&Wl(n))return rt(n)?{...n}:Object.assign(Object.create(null),n);const o=Object.getOwnPropertyDescriptors(n);delete o[ie];let i=Reflect.ownKeys(o);for(let c=0;c<i.length;c++){const a=i[c],l=o[a];l.writable===!1&&(l.writable=!0,l.configurable=!0),(l.get||l.set)&&(o[a]={configurable:!0,writable:!0,enumerable:l.enumerable,value:n[a]})}return Object.create(rt(n),o)}function Cc(n,t=!1){return Ui(n)||ln(n)||!Ye(n)||(ct(n)>1&&(n.set=n.add=n.clear=n.delete=rg),Object.freeze(n),t&&Object.entries(n).forEach(([o,i])=>Cc(i,!0))),n}function rg(){Je(2)}function Ui(n){return Object.isFrozen(n)}var yc={};function at(n){const t=yc[n];return t||Je(0,n),t}function Gl(n,t){yc[n]||(yc[n]=t)}var vo;function ji(){return vo}function cg(n,t){return{drafts_:[],parent_:n,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ql(n,t){t&&(at("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=t)}function vc(n){Ic(n),n.drafts_.forEach(ag),n.drafts_=null}function Ic(n){n===vo&&(vo=n.parent_)}function $l(n){return vo=cg(vo,n)}function ag(n){const t=n[ie];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Vl(n,t){t.unfinalizedDrafts_=t.drafts_.length;const o=t.drafts_[0];return n!==void 0&&n!==o?(o[ie].modified_&&(vc(t),Je(4)),Ye(n)&&(n=Hi(t,n),t.parent_||zi(t,n)),t.patches_&&at("Patches").generateReplacementPatches_(o[ie].base_,n,t.patches_,t.inversePatches_)):n=Hi(t,o,[]),vc(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),n!==bc?n:void 0}function Hi(n,t,o){if(Ui(t))return t;const i=t[ie];if(!i)return Nt(t,(c,a)=>Yl(n,i,t,c,a,o)),t;if(i.scope_!==n)return t;if(!i.modified_)return zi(n,i.base_,!0),i.base_;if(!i.finalized_){i.finalized_=!0,i.scope_.unfinalizedDrafts_--;const c=i.copy_;let a=c,l=!1;i.type_===3&&(a=new Set(c),c.clear(),l=!0),Nt(a,(s,A)=>Yl(n,i,c,s,A,o,l)),zi(n,c,!1),o&&n.patches_&&at("Patches").generatePatches_(i,o,n.patches_,n.inversePatches_)}return i.copy_}function Yl(n,t,o,i,c,a,l){if(ln(c)){const s=a&&t&&t.type_!==3&&!Bo(t.assigned_,i)?a.concat(i):void 0,A=Hi(n,c,s);if(Kl(o,i,A),ln(A))n.canAutoFreeze_=!1;else return}else l&&o.add(c);if(Ye(c)&&!Ui(c)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;Hi(n,c),(!t||!t.scope_.parent_)&&typeof i!="symbol"&&Object.prototype.propertyIsEnumerable.call(o,i)&&zi(n,c)}}function zi(n,t,o=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Cc(t,o)}function lg(n,t){const o=Array.isArray(n),i={type_:o?1:0,scope_:t?t.scope_:ji(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let c=i,a=wc;o&&(c=[i],a=Io);const{revoke:l,proxy:s}=Proxy.revocable(c,a);return i.draft_=s,i.revoke_=l,s}var wc={get(n,t){if(t===ie)return n;const o=De(n);if(!Bo(o,t))return sg(n,o,t);const i=o[t];return n.finalized_||!Ye(i)?i:i===Sc(n.base_,t)?(Tc(n),n.copy_[t]=wo(i,n)):i},has(n,t){return t in De(n)},ownKeys(n){return Reflect.ownKeys(De(n))},set(n,t,o){const i=Xl(De(n),t);if(i!=null&&i.set)return i.set.call(n.draft_,o),!0;if(!n.modified_){const c=Sc(De(n),t),a=c==null?void 0:c[ie];if(a&&a.base_===o)return n.copy_[t]=o,n.assigned_[t]=!1,!0;if(ig(o,c)&&(o!==void 0||Bo(n.base_,t)))return!0;Tc(n),mn(n)}return n.copy_[t]===o&&(o!==void 0||t in n.copy_)||Number.isNaN(o)&&Number.isNaN(n.copy_[t])||(n.copy_[t]=o,n.assigned_[t]=!0),!0},deleteProperty(n,t){return Sc(n.base_,t)!==void 0||t in n.base_?(n.assigned_[t]=!1,Tc(n),mn(n)):delete n.assigned_[t],n.copy_&&delete n.copy_[t],!0},getOwnPropertyDescriptor(n,t){const o=De(n),i=Reflect.getOwnPropertyDescriptor(o,t);return i&&{writable:!0,configurable:n.type_!==1||t!=="length",enumerable:i.enumerable,value:o[t]}},defineProperty(){Je(11)},getPrototypeOf(n){return rt(n.base_)},setPrototypeOf(){Je(12)}},Io={};Nt(wc,(n,t)=>{Io[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Io.deleteProperty=function(n,t){return Io.set.call(this,n,t,void 0)},Io.set=function(n,t,o){return wc.set.call(this,n[0],t,o,n[0])};function Sc(n,t){const o=n[ie];return(o?De(o):n)[t]}function sg(n,t,o){var c;const i=Xl(t,o);return i?"value"in i?i.value:(c=i.get)==null?void 0:c.call(n.draft_):void 0}function Xl(n,t){if(!(t in n))return;let o=rt(n);for(;o;){const i=Object.getOwnPropertyDescriptor(o,t);if(i)return i;o=rt(o)}}function mn(n){n.modified_||(n.modified_=!0,n.parent_&&mn(n.parent_))}function Tc(n){n.copy_||(n.copy_=Bc(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var Ag=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,o,i)=>{if(typeof t=="function"&&typeof o!="function"){const a=o;o=t;const l=this;return function(A=a,...f){return l.produce(A,u=>o.call(this,u,...f))}}typeof o!="function"&&Je(6),i!==void 0&&typeof i!="function"&&Je(7);let c;if(Ye(t)){const a=$l(this),l=wo(t,void 0);let s=!0;try{c=o(l),s=!1}finally{s?vc(a):Ic(a)}return ql(a,i),Vl(c,a)}else if(!t||typeof t!="object"){if(c=o(t),c===void 0&&(c=t),c===bc&&(c=void 0),this.autoFreeze_&&Cc(c,!0),i){const a=[],l=[];at("Patches").generateReplacementPatches_(t,c,a,l),i(a,l)}return c}else Je(1,t)},this.produceWithPatches=(t,o)=>{if(typeof t=="function")return(l,...s)=>this.produceWithPatches(l,A=>t(A,...s));let i,c;return[this.produce(t,o,(l,s)=>{i=l,c=s}),i,c]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){Ye(n)||Je(8),ln(n)&&(n=Ql(n));const t=$l(this),o=wo(n,void 0);return o[ie].isManual_=!0,Ic(t),o}finishDraft(n,t){const o=n&&n[ie];(!o||!o.isManual_)&&Je(9);const{scope_:i}=o;return ql(i,t),Vl(void 0,i)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,t){let o;for(o=t.length-1;o>=0;o--){const c=t[o];if(c.path.length===0&&c.op==="replace"){n=c.value;break}}o>-1&&(t=t.slice(o+1));const i=at("Patches").applyPatches_;return ln(n)?i(n,t):this.produce(n,c=>i(c,t))}};function wo(n,t){const o=Co(n)?at("MapSet").proxyMap_(n,t):yo(n)?at("MapSet").proxySet_(n,t):lg(n,t);return(t?t.scope_:ji()).drafts_.push(o),o}function Ql(n){return ln(n)||Je(10,n),Zl(n)}function Zl(n){if(!Ye(n)||Ui(n))return n;const t=n[ie];let o;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,o=Bc(n,t.scope_.immer_.useStrictShallowCopy_)}else o=Bc(n,!0);return Nt(o,(i,c)=>{Kl(o,i,Zl(c))}),t&&(t.finalized_=!1),o}function QB(){const t="replace",o="add",i="remove";function c(E,y,g,b){switch(E.type_){case 0:case 2:return l(E,y,g,b);case 1:return a(E,y,g,b);case 3:return s(E,y,g,b)}}function a(E,y,g,b){let{base_:w,assigned_:m}=E,I=E.copy_;I.length<w.length&&([w,I]=[I,w],[g,b]=[b,g]);for(let B=0;B<w.length;B++)if(m[B]&&I[B]!==w[B]){const S=y.concat([B]);g.push({op:t,path:S,value:d(I[B])}),b.push({op:t,path:S,value:d(w[B])})}for(let B=w.length;B<I.length;B++){const S=y.concat([B]);g.push({op:o,path:S,value:d(I[B])})}for(let B=I.length-1;w.length<=B;--B){const S=y.concat([B]);b.push({op:i,path:S})}}function l(E,y,g,b){const{base_:w,copy_:m}=E;Nt(E.assigned_,(I,B)=>{const S=mc(w,I),W=mc(m,I),K=B?Bo(w,I)?t:o:i;if(S===W&&K===t)return;const q=y.concat(I);g.push(K===i?{op:K,path:q}:{op:K,path:q,value:W}),b.push(K===o?{op:i,path:q}:K===i?{op:o,path:q,value:d(S)}:{op:t,path:q,value:d(S)})})}function s(E,y,g,b){let{base_:w,copy_:m}=E,I=0;w.forEach(B=>{if(!m.has(B)){const S=y.concat([I]);g.push({op:i,path:S,value:B}),b.unshift({op:o,path:S,value:B})}I++}),I=0,m.forEach(B=>{if(!w.has(B)){const S=y.concat([I]);g.push({op:o,path:S,value:B}),b.unshift({op:i,path:S,value:B})}I++})}function A(E,y,g,b){g.push({op:t,path:[],value:y===bc?void 0:y}),b.push({op:t,path:[],value:E})}function f(E,y){return y.forEach(g=>{const{path:b,op:w}=g;let m=E;for(let W=0;W<b.length-1;W++){const K=ct(m);let q=b[W];typeof q!="string"&&typeof q!="number"&&(q=""+q),(K===0||K===1)&&(q==="__proto__"||q==="constructor")&&Je(19),typeof m=="function"&&q==="prototype"&&Je(19),m=mc(m,q),typeof m!="object"&&Je(18,b.join("/"))}const I=ct(m),B=u(g.value),S=b[b.length-1];switch(w){case t:switch(I){case 2:return m.set(S,B);case 3:Je(16);default:return m[S]=B}case o:switch(I){case 1:return S==="-"?m.push(B):m.splice(S,0,B);case 2:return m.set(S,B);case 3:return m.add(B);default:return m[S]=B}case i:switch(I){case 1:return m.splice(S,1);case 2:return m.delete(S);case 3:return m.delete(g.value);default:return delete m[S]}default:Je(17,w)}}),E}function u(E){if(!Ye(E))return E;if(Array.isArray(E))return E.map(u);if(Co(E))return new Map(Array.from(E.entries()).map(([g,b])=>[g,u(b)]));if(yo(E))return new Set(Array.from(E).map(u));const y=Object.create(rt(E));for(const g in E)y[g]=u(E[g]);return Bo(E,mo)&&(y[mo]=E[mo]),y}function d(E){return ln(E)?u(E):E}Gl("Patches",{applyPatches_:f,generatePatches_:c,generateReplacementPatches_:A})}function ZB(){class n extends Map{constructor(A,f){super(),this[ie]={type_:2,parent_:f,scope_:f?f.scope_:ji(),modified_:!1,finalized_:!1,copy_:void 0,assigned_:void 0,base_:A,draft_:this,isManual_:!1,revoked_:!1}}get size(){return De(this[ie]).size}has(A){return De(this[ie]).has(A)}set(A,f){const u=this[ie];return l(u),(!De(u).has(A)||De(u).get(A)!==f)&&(o(u),mn(u),u.assigned_.set(A,!0),u.copy_.set(A,f),u.assigned_.set(A,!0)),this}delete(A){if(!this.has(A))return!1;const f=this[ie];return l(f),o(f),mn(f),f.base_.has(A)?f.assigned_.set(A,!1):f.assigned_.delete(A),f.copy_.delete(A),!0}clear(){const A=this[ie];l(A),De(A).size&&(o(A),mn(A),A.assigned_=new Map,Nt(A.base_,f=>{A.assigned_.set(f,!1)}),A.copy_.clear())}forEach(A,f){const u=this[ie];De(u).forEach((d,E,y)=>{A.call(f,this.get(E),E,this)})}get(A){const f=this[ie];l(f);const u=De(f).get(A);if(f.finalized_||!Ye(u)||u!==f.base_.get(A))return u;const d=wo(u,f);return o(f),f.copy_.set(A,d),d}keys(){return De(this[ie]).keys()}values(){const A=this.keys();return{[Symbol.iterator]:()=>this.values(),next:()=>{const f=A.next();return f.done?f:{done:!1,value:this.get(f.value)}}}}entries(){const A=this.keys();return{[Symbol.iterator]:()=>this.entries(),next:()=>{const f=A.next();if(f.done)return f;const u=this.get(f.value);return{done:!1,value:[f.value,u]}}}}[Symbol.iterator](){return this.entries()}}function t(s,A){return new n(s,A)}function o(s){s.copy_||(s.assigned_=new Map,s.copy_=new Map(s.base_))}class i extends Set{constructor(A,f){super(),this[ie]={type_:3,parent_:f,scope_:f?f.scope_:ji(),modified_:!1,finalized_:!1,copy_:void 0,base_:A,draft_:this,drafts_:new Map,revoked_:!1,isManual_:!1}}get size(){return De(this[ie]).size}has(A){const f=this[ie];return l(f),f.copy_?!!(f.copy_.has(A)||f.drafts_.has(A)&&f.copy_.has(f.drafts_.get(A))):f.base_.has(A)}add(A){const f=this[ie];return l(f),this.has(A)||(a(f),mn(f),f.copy_.add(A)),this}delete(A){if(!this.has(A))return!1;const f=this[ie];return l(f),a(f),mn(f),f.copy_.delete(A)||(f.drafts_.has(A)?f.copy_.delete(f.drafts_.get(A)):!1)}clear(){const A=this[ie];l(A),De(A).size&&(a(A),mn(A),A.copy_.clear())}values(){const A=this[ie];return l(A),a(A),A.copy_.values()}entries(){const A=this[ie];return l(A),a(A),A.copy_.entries()}keys(){return this.values()}[Symbol.iterator](){return this.values()}forEach(A,f){const u=this.values();let d=u.next();for(;!d.done;)A.call(f,d.value,d.value,this),d=u.next()}}function c(s,A){return new i(s,A)}function a(s){s.copy_||(s.copy_=new Set,s.base_.forEach(A=>{if(Ye(A)){const f=wo(A,s);s.drafts_.set(A,f),s.copy_.add(f)}else s.copy_.add(A)}))}function l(s){s.revoked_&&Je(3,JSON.stringify(De(s)))}Gl("MapSet",{proxyMap_:t,proxySet_:c})}var ze=new Ag,es=ze.produce,eC=ze.produceWithPatches.bind(ze),nC=ze.setAutoFreeze.bind(ze),tC=ze.setUseStrictShallowCopy.bind(ze),oC=ze.applyPatches.bind(ze),iC=ze.createDraft.bind(ze),rC=ze.finishDraft.bind(ze);function cC(n){return n}function aC(n){return n}function Re(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var lC=null,ns=null,Oc=()=>Math.random().toString(36).substring(7).split("").join("."),sC={INIT:`@@redux/INIT${Oc()}`,REPLACE:`@@redux/REPLACE${Oc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Oc()}`},kt=null;function Fc(n){if(typeof n!="object"||n===null)return!1;let t=n;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(n)===t||Object.getPrototypeOf(n)===null}function AC(n){if(n===void 0)return"undefined";if(n===null)return"null";const t=typeof n;switch(t){case"boolean":case"string":case"number":case"symbol":case"function":return t}if(Array.isArray(n))return"array";if(Eg(n))return"date";if(ug(n))return"error";const o=fg(n);switch(o){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return o}return Object.prototype.toString.call(n).slice(8,-1).toLowerCase().replace(/\s/g,"")}function fg(n){return typeof n.constructor=="function"?n.constructor.name:null}function ug(n){return n instanceof Error||typeof n.message=="string"&&n.constructor&&typeof n.constructor.stackTraceLimit=="number"}function Eg(n){return n instanceof Date?!0:typeof n.toDateString=="function"&&typeof n.getDate=="function"&&typeof n.setDate=="function"}function dg(n){return typeof n}function ts(n,t,o){if(typeof n!="function")throw new Error(Re(2));if(typeof t=="function"&&typeof o=="function"||typeof o=="function"&&typeof arguments[3]=="function")throw new Error(Re(0));if(typeof t=="function"&&typeof o=="undefined"&&(o=t,t=void 0),typeof o!="undefined"){if(typeof o!="function")throw new Error(Re(1));return o(ts)(n,t)}let i=n,c=t,a=new Map,l=a,s=0,A=!1;function f(){l===a&&(l=new Map,a.forEach((w,m)=>{l.set(m,w)}))}function u(){if(A)throw new Error(Re(3));return c}function d(w){if(typeof w!="function")throw new Error(Re(4));if(A)throw new Error(Re(5));let m=!0;f();const I=s++;return l.set(I,w),function(){if(m){if(A)throw new Error(Re(6));m=!1,f(),l.delete(I),a=null}}}function E(w){if(!Fc(w))throw new Error(Re(7));if(typeof w.type=="undefined")throw new Error(Re(8));if(typeof w.type!="string")throw new Error(Re(17));if(A)throw new Error(Re(9));try{A=!0,c=i(c,w)}finally{A=!1}return(a=l).forEach(I=>{I()}),w}function y(w){if(typeof w!="function")throw new Error(Re(10));i=w,E({type:kt.REPLACE})}function g(){const w=d;return{subscribe(m){if(typeof m!="object"||m===null)throw new Error(Re(11));function I(){const S=m;S.next&&S.next(u())}return I(),{unsubscribe:w(I)}},[ns](){return this}}}return E({type:kt.INIT}),{dispatch:E,subscribe:d,getState:u,replaceReducer:y,[ns]:g}}function fC(n,t,o){return ts(n,t,o)}function uC(n){typeof console!="undefined"&&typeof console.error=="function"&&console.error(n);try{throw new Error(n)}catch{}}function EC(n,t,o,i){const c=Object.keys(t),a=o&&o.type===kt.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(c.length===0)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!Fc(n))return`The ${a} has unexpected type of "${dg(n)}". Expected argument to be an object with the following keys: "${c.join('", "')}"`;const l=Object.keys(n).filter(s=>!t.hasOwnProperty(s)&&!i[s]);if(l.forEach(s=>{i[s]=!0}),!(o&&o.type===kt.REPLACE)&&l.length>0)return`Unexpected ${l.length>1?"keys":"key"} "${l.join('", "')}" found in ${a}. Expected to find one of the known reducer keys instead: "${c.join('", "')}". Unexpected keys will be ignored.`}function hg(n){Object.keys(n).forEach(t=>{const o=n[t];if(typeof o(void 0,{type:kt.INIT})=="undefined")throw new Error(Re(12));if(typeof o(void 0,{type:kt.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(Re(13))})}function dC(n){const t=Object.keys(n),o={};for(let l=0;l<t.length;l++){const s=t[l];typeof n[s]=="function"&&(o[s]=n[s])}const i=Object.keys(o);let c,a;try{hg(o)}catch(l){a=l}return function(s={},A){if(a)throw a;let f=!1;const u={};for(let d=0;d<i.length;d++){const E=i[d],y=o[E],g=s[E],b=y(g,A);if(typeof b=="undefined"){const w=A&&A.type;throw new Error(Re(14))}u[E]=b,f=f||b!==g}return f=f||i.length!==Object.keys(s).length,f?u:s}}function os(n,t){return function(...o){return t(n.apply(this,o))}}function hC(n,t){if(typeof n=="function")return os(n,t);if(typeof n!="object"||n===null)throw new Error(Re(16));const o={};for(const i in n){const c=n[i];typeof c=="function"&&(o[i]=os(c,t))}return o}function Jc(...n){return n.length===0?t=>t:n.length===1?n[0]:n.reduce((t,o)=>(...i)=>t(o(...i)))}function pC(...n){return t=>(o,i)=>{const c=t(o,i);let a=()=>{throw new Error(Re(15))};const l={getState:c.getState,dispatch:(A,...f)=>a(A,...f)},s=n.map(A=>A(l));return a=Jc(...s)(c.dispatch),{...c,dispatch:a}}}function pg(n){return Fc(n)&&"type"in n&&typeof n.type=="string"}var _g=(...n)=>{const t=Oe(...n),o=Object.assign((...i)=>{const c=t(...i),a=(l,...s)=>c(ln(l)?Ql(l):l,...s);return Object.assign(a,c),a},{withTypes:()=>o});return o},gg=_g(wn),bg=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Jc:Jc.apply(null,arguments)},_C=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__:function(){return function(n){return n}},is=n=>n&&typeof n.match=="function";function We(n,t){function o(...i){if(t){let c=t(...i);if(!c)throw new Error(ge(0));return{type:n,payload:c.payload,..."meta"in c&&{meta:c.meta},..."error"in c&&{error:c.error}}}return{type:n,payload:i[0]}}return o.toString=()=>`${n}`,o.type=n,o.match=i=>pg(i)&&i.type===n,o}function mg(n){return typeof n=="function"&&"type"in n&&is(n)}function Bg(n){return isAction(n)&&Object.keys(n).every(Cg)}function Cg(n){return["type","payload","error","meta"].indexOf(n)>-1}function yg(n){const t=n?`${n}`.split("/"):[],o=t[t.length-1]||"actionCreator";return`Detected an action creator with type "${n||"unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${o}())\` instead of \`dispatch(${o})\`. This is necessary even if the action has no payload.`}function gC(n={}){return()=>o=>i=>o(i)}function bC(n,t){let o=0;return{measureTime(i){const c=Date.now();try{return i()}finally{const a=Date.now();o+=a-c}},warnIfExceeded(){o>n&&console.warn(`${t} took ${o}ms, which is more than the warning threshold of ${n}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`)}}}function Dc(n,t){for(const o of n)if(t(o))return o}var rs=class Mo extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,Mo.prototype)}static get[Symbol.species](){return Mo}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new Mo(...t[0].concat(this)):new Mo(...t.concat(this))}};function cs(n){return Ye(n)?es(n,()=>{}):n}function Wi(n,t,o){if(n.has(t)){let c=n.get(t);return o.update&&(c=o.update(c,t,n),n.set(t,c)),c}if(!o.insert)throw new Error(ge(10));const i=o.insert(t,n);return n.set(t,i),i}function mC(n){return typeof n!="object"||n==null||Object.isFrozen(n)}function BC(n,t,o){const i=as(n,t,o);return{detectMutations(){return ls(n,t,i,o)}}}function as(n,t=[],o,i="",c=new Set){const a={value:o};if(!n(o)&&!c.has(o)){c.add(o),a.children={};for(const l in o){const s=i?i+"."+l:l;t.length&&t.indexOf(s)!==-1||(a.children[l]=as(n,t,o[l],s))}}return a}function ls(n,t=[],o,i,c=!1,a=""){const l=o?o.value:void 0,s=l===i;if(c&&!s&&!Number.isNaN(i))return{wasMutated:!0,path:a};if(n(l)||n(i))return{wasMutated:!1};const A={};for(let u in o.children)A[u]=!0;for(let u in i)A[u]=!0;const f=t.length>0;for(let u in A){const d=a?a+"."+u:u;if(f&&t.some(g=>g instanceof RegExp?g.test(d):d===g))continue;const E=ls(n,t,o.children[u],i[u],s,d);if(E.wasMutated)return E}return{wasMutated:!1}}function CC(n={}){if(1)return()=>i=>c=>i(c);var t,o}function vg(n){const t=typeof n;return n==null||t==="string"||t==="boolean"||t==="number"||Array.isArray(n)||isPlainObject(n)}function Ig(n,t="",o=vg,i,c=[],a){let l;if(!o(n))return{keyPath:t||"<root>",value:n};if(typeof n!="object"||n===null||a!=null&&a.has(n))return!1;const s=i!=null?i(n):Object.entries(n),A=c.length>0;for(const[f,u]of s){const d=t?t+"."+f:f;if(!(A&&c.some(y=>y instanceof RegExp?y.test(d):d===y))){if(!o(u))return{keyPath:d,value:u};if(typeof u=="object"&&(l=Ig(u,d,o,i,c,a),l))return l}}return a&&ss(n)&&a.add(n),!1}function ss(n){if(!Object.isFrozen(n))return!1;for(const t of Object.values(n))if(!(typeof t!="object"||t===null)&&!ss(t))return!1;return!0}function yC(n={}){return()=>t=>o=>t(o)}function wg(n){return typeof n=="boolean"}var Sg=()=>function(t){const{thunk:o=!0,immutableCheck:i=!0,serializableCheck:c=!0,actionCreatorCheck:a=!0}=t!=null?t:{};let l=new rs;return o&&(wg(o)?l.push(thunkMiddleware):l.push(withExtraArgument(o.extraArgument))),l},As="RTK_autoBatch",vC=()=>n=>({payload:n,meta:{[As]:!0}}),fs=n=>t=>{setTimeout(t,n)},Tg=typeof window!="undefined"&&window.requestAnimationFrame?window.requestAnimationFrame:fs(10),Og=(n={type:"raf"})=>t=>(...o)=>{const i=t(...o);let c=!0,a=!1,l=!1;const s=new Set,A=n.type==="tick"?queueMicrotask:n.type==="raf"?Tg:n.type==="callback"?n.queueNotification:fs(n.timeout),f=()=>{l=!1,a&&(a=!1,s.forEach(u=>u()))};return Object.assign({},i,{subscribe(u){const d=()=>c&&u(),E=i.subscribe(d);return s.add(u),()=>{E(),s.delete(u)}},dispatch(u){var d;try{return c=!((d=u==null?void 0:u.meta)!=null&&d[As]),a=!c,a&&(l||(l=!0,A(f))),i.dispatch(u)}finally{c=!0}}})},Fg=n=>function(o){const{autoBatch:i=!0}=o!=null?o:{};let c=new rs(n);return i&&c.push(Og(typeof i=="object"?i:void 0)),c},Nn=null;function IC(n){const t=Sg(),{reducer:o=void 0,middleware:i,devTools:c=!0,preloadedState:a=void 0,enhancers:l=void 0}=n||{};let s;if(typeof o=="function")s=o;else if(isPlainObject2(o))s=combineReducers(o);else throw new Error(ge(1));if(!Nn&&i&&typeof i!="function")throw new Error(ge(2));let A;if(typeof i=="function"){if(A=i(t),!Nn&&!Array.isArray(A))throw new Error(ge(3))}else A=t();if(!Nn&&A.some(g=>typeof g!="function"))throw new Error(ge(4));let f=compose2;c&&(f=bg({trace:!Nn,...typeof c=="object"&&c}));const u=applyMiddleware(...A),d=Fg(u);if(!Nn&&l&&typeof l!="function")throw new Error(ge(5));let E=typeof l=="function"?l(d):d();if(!Nn&&!Array.isArray(E))throw new Error(ge(6));if(!Nn&&E.some(g=>typeof g!="function"))throw new Error(ge(7));!Nn&&A.length&&!E.includes(u)&&console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");const y=f(...E);return createStore(s,a,y)}function us(n){const t={},o=[];let i;const c={addCase(a,l){const s=typeof a=="string"?a:a.type;if(!s)throw new Error(ge(28));if(s in t)throw new Error(ge(29));return t[s]=l,c},addMatcher(a,l){return o.push({matcher:a,reducer:l}),c},addDefaultCase(a){return i=a,c}};return n(c),[t,o,i]}function Jg(n){return typeof n=="function"}function Es(n,t){let[o,i,c]=us(t),a;if(Jg(n))a=()=>cs(n());else{const s=cs(n);a=()=>s}function l(s=a(),A){let f=[o[A.type],...i.filter(({matcher:u})=>u(A)).map(({reducer:u})=>u)];return f.filter(u=>!!u).length===0&&(f=[c]),f.reduce((u,d)=>{if(d)if(ln(u)){const y=d(u,A);return y===void 0?u:y}else{if(Ye(u))return es(u,E=>d(E,A));{const E=d(u,A);if(E===void 0){if(u===null)return u;throw new Error(ge(9))}return E}}return u},s)}return l.getInitialState=a,l}var Dg="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",So=(n=21)=>{let t="",o=n;for(;o--;)t+=Dg[Math.random()*64|0];return t},ds=(n,t)=>is(n)?n.match(t):n(t);function To(...n){return t=>n.some(o=>ds(o,t))}function Rc(...n){return t=>n.every(o=>ds(o,t))}function Ki(n,t){if(!n||!n.meta)return!1;const o=typeof n.meta.requestId=="string",i=t.indexOf(n.meta.requestStatus)>-1;return o&&i}function Oo(n){return typeof n[0]=="function"&&"pending"in n[0]&&"fulfilled"in n[0]&&"rejected"in n[0]}function Rg(...n){return n.length===0?t=>Ki(t,["pending"]):Oo(n)?t=>{const o=n.map(c=>c.pending);return To(...o)(t)}:Rg()(n[0])}function xc(...n){return n.length===0?t=>Ki(t,["rejected"]):Oo(n)?t=>{const o=n.map(c=>c.rejected);return To(...o)(t)}:xc()(n[0])}function xg(...n){const t=o=>o&&o.meta&&o.meta.rejectedWithValue;return n.length===0?o=>Rc(xc(...n),t)(o):Oo(n)?o=>Rc(xc(...n),t)(o):xg()(n[0])}function Pg(...n){return n.length===0?t=>Ki(t,["fulfilled"]):Oo(n)?t=>{const o=n.map(c=>c.fulfilled);return To(...o)(t)}:Pg()(n[0])}function Ng(...n){return n.length===0?t=>Ki(t,["pending","fulfilled","rejected"]):Oo(n)?t=>{const o=[];for(const c of n)o.push(c.pending,c.rejected,c.fulfilled);return To(...o)(t)}:Ng()(n[0])}var kg=["name","message","stack","code"],Pc=class{constructor(n,t){fe(this,"_type");this.payload=n,this.meta=t}},hs=class{constructor(n,t){fe(this,"_type");this.payload=n,this.meta=t}},Mg=n=>{if(typeof n=="object"&&n!==null){const t={};for(const o of kg)typeof n[o]=="string"&&(t[o]=n[o]);return t}return{message:String(n)}},Lg=(()=>{function n(t,o,i){const c=We(t+"/fulfilled",(A,f,u,d)=>({payload:A,meta:{...d||{},arg:u,requestId:f,requestStatus:"fulfilled"}})),a=We(t+"/pending",(A,f,u)=>({payload:void 0,meta:{...u||{},arg:f,requestId:A,requestStatus:"pending"}})),l=We(t+"/rejected",(A,f,u,d,E)=>({payload:d,error:(i&&i.serializeError||Mg)(A||"Rejected"),meta:{...E||{},arg:u,requestId:f,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(A==null?void 0:A.name)==="AbortError",condition:(A==null?void 0:A.name)==="ConditionError"}}));function s(A){return(f,u,d)=>{const E=i!=null&&i.idGenerator?i.idGenerator(A):So(),y=new AbortController;let g,b;function w(I){b=I,y.abort()}const m=async function(){var S,W;let I;try{let K=(S=i==null?void 0:i.condition)==null?void 0:S.call(i,A,{getState:u,extra:d});if(jg(K)&&(K=await K),K===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const q=new Promise((ee,xe)=>{g=()=>{xe({name:"AbortError",message:b||"Aborted"})},y.signal.addEventListener("abort",g)});f(a(E,A,(W=i==null?void 0:i.getPendingMeta)==null?void 0:W.call(i,{requestId:E,arg:A},{getState:u,extra:d}))),I=await Promise.race([q,Promise.resolve(o(A,{dispatch:f,getState:u,extra:d,requestId:E,signal:y.signal,abort:w,rejectWithValue:(ee,xe)=>new Pc(ee,xe),fulfillWithValue:(ee,xe)=>new hs(ee,xe)})).then(ee=>{if(ee instanceof Pc)throw ee;return ee instanceof hs?c(ee.payload,E,A,ee.meta):c(ee,E,A)})])}catch(K){I=K instanceof Pc?l(null,E,A,K.payload,K.meta):l(K,E,A)}finally{g&&y.signal.removeEventListener("abort",g)}return i&&!i.dispatchConditionRejection&&l.match(I)&&I.meta.condition||f(I),I}();return Object.assign(m,{abort:w,requestId:E,arg:A,unwrap(){return m.then(Ug)}})}}return Object.assign(s,{pending:a,rejected:l,fulfilled:c,settled:To(l,c),typePrefix:t})}return n.withTypes=()=>n,n})();function Ug(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function jg(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var ps=Symbol.for("rtk-slice-createasyncthunk"),wC={[ps]:Lg},Hg=(n=>(n.reducer="reducer",n.reducerWithPrepare="reducerWithPrepare",n.asyncThunk="asyncThunk",n))(Hg||{});function zg(n,t){return`${n}/${t}`}function SC({creators:n}={}){var o;const t=(o=n==null?void 0:n.asyncThunk)==null?void 0:o[ps];return function(c){const{name:a,reducerPath:l=a}=c;if(!a)throw new Error(ge(11));const s=(typeof c.reducers=="function"?c.reducers(Kg()):c.reducers)||{},A=Object.keys(s),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(B,S){const W=typeof B=="string"?B:B.type;if(!W)throw new Error(ge(12));if(W in f.sliceCaseReducersByType)throw new Error(ge(13));return f.sliceCaseReducersByType[W]=S,u},addMatcher(B,S){return f.sliceMatchers.push({matcher:B,reducer:S}),u},exposeAction(B,S){return f.actionCreators[B]=S,u},exposeCaseReducer(B,S){return f.sliceCaseReducersByName[B]=S,u}};A.forEach(B=>{const S=s[B],W={reducerName:B,type:zg(a,B),createNotation:typeof c.reducers=="function"};qg(S)?Vg(W,S,u,t):Gg(W,S,u)});function d(){const[B={},S=[],W=void 0]=typeof c.extraReducers=="function"?us(c.extraReducers):[c.extraReducers],K={...B,...f.sliceCaseReducersByType};return Es(c.initialState,q=>{for(let ee in K)q.addCase(ee,K[ee]);for(let ee of f.sliceMatchers)q.addMatcher(ee.matcher,ee.reducer);for(let ee of S)q.addMatcher(ee.matcher,ee.reducer);W&&q.addDefaultCase(W)})}const E=B=>B,y=new Map;let g;function b(B,S){return g||(g=d()),g(B,S)}function w(){return g||(g=d()),g.getInitialState()}function m(B,S=!1){function W(q){let ee=q[B];return typeof ee=="undefined"&&S&&(ee=w()),ee}function K(q=E){const ee=Wi(y,S,{insert:()=>new WeakMap});return Wi(ee,q,{insert:()=>{var de;const xe={};for(const[we,on]of Object.entries((de=c.selectors)!=null?de:{}))xe[we]=Wg(on,q,w,S);return xe}})}return{reducerPath:B,getSelectors:K,get selectors(){return K(W)},selectSlice:W}}const I={name:a,reducer:b,actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState:w,...m(l),injectInto(B,{reducerPath:S,...W}={}){const K=S!=null?S:l;return B.inject({reducerPath:K,reducer:b},W),{...I,...m(K,!0)}}};return I}}function Wg(n,t,o,i){function c(a,...l){let s=t(a);return typeof s=="undefined"&&i&&(s=o()),n(s,...l)}return c.unwrapped=n,c}var TC=null;function Kg(){function n(t,o){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...o}}return n.withTypes=()=>n,{reducer(t){return Object.assign({[t.name](...o){return t(...o)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,o){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:o}},asyncThunk:n}}function Gg({type:n,reducerName:t,createNotation:o},i,c){let a,l;if("reducer"in i){if(o&&!$g(i))throw new Error(ge(17));a=i.reducer,l=i.prepare}else a=i;c.addCase(n,a).exposeCaseReducer(t,a).exposeAction(t,l?We(n,l):We(n))}function qg(n){return n._reducerDefinitionType==="asyncThunk"}function $g(n){return n._reducerDefinitionType==="reducerWithPrepare"}function Vg({type:n,reducerName:t},o,i,c){if(!c)throw new Error(ge(18));const{payloadCreator:a,fulfilled:l,pending:s,rejected:A,settled:f,options:u}=o,d=c(n,a,u);i.exposeAction(t,d),l&&i.addCase(d.fulfilled,l),s&&i.addCase(d.pending,s),A&&i.addCase(d.rejected,A),f&&i.addMatcher(d.settled,f),i.exposeCaseReducer(t,{fulfilled:l||Gi,pending:s||Gi,rejected:A||Gi,settled:f||Gi})}function Gi(){}function Yg(){return{ids:[],entities:{}}}function Xg(n){function t(o={},i){const c=Object.assign(Yg(),o);return i?n.setAll(c,i):c}return{getInitialState:t}}function Qg(){function n(t,o={}){const{createSelector:i=gg}=o,c=d=>d.ids,a=d=>d.entities,l=i(c,a,(d,E)=>d.map(y=>E[y])),s=(d,E)=>E,A=(d,E)=>d[E],f=i(c,d=>d.length);if(!t)return{selectIds:c,selectEntities:a,selectAll:l,selectTotal:f,selectById:i(a,s,A)};const u=i(t,a);return{selectIds:i(t,c),selectEntities:u,selectAll:i(t,l),selectTotal:i(t,f),selectById:i(u,s,A)}}return{getSelectors:n}}var Zg=null;function eb(n){const t=me((o,i)=>n(i));return function(i){return t(i,void 0)}}function me(n){return function(o,i){function c(l){return Bg(l)}const a=l=>{c(i)?n(i.payload,l):n(i,l)};return Zg(o)?(a(o),o):createNextState3(o,a)}}function Mt(n,t){return t(n)}function lt(n){return Array.isArray(n)||(n=Object.values(n)),n}function _s(n,t,o){n=lt(n);const i=[],c=[];for(const a of n){const l=Mt(a,t);l in o.entities?c.push({id:l,changes:a}):i.push(a)}return[i,c]}function gs(n){function t(g,b){const w=Mt(g,n);w in b.entities||(b.ids.push(w),b.entities[w]=g)}function o(g,b){g=lt(g);for(const w of g)t(w,b)}function i(g,b){const w=Mt(g,n);w in b.entities||b.ids.push(w),b.entities[w]=g}function c(g,b){g=lt(g);for(const w of g)i(w,b)}function a(g,b){g=lt(g),b.ids=[],b.entities={},o(g,b)}function l(g,b){return s([g],b)}function s(g,b){let w=!1;g.forEach(m=>{m in b.entities&&(delete b.entities[m],w=!0)}),w&&(b.ids=b.ids.filter(m=>m in b.entities))}function A(g){Object.assign(g,{ids:[],entities:{}})}function f(g,b,w){const m=w.entities[b.id];if(m===void 0)return!1;const I=Object.assign({},m,b.changes),B=Mt(I,n),S=B!==b.id;return S&&(g[b.id]=B,delete w.entities[b.id]),w.entities[B]=I,S}function u(g,b){return d([g],b)}function d(g,b){const w={},m={};g.forEach(B=>{B.id in b.entities&&(m[B.id]={id:B.id,changes:{...m[B.id]?m[B.id].changes:null,...B.changes}})}),g=Object.values(m),g.length>0&&g.filter(S=>f(w,S,b)).length>0&&(b.ids=Object.values(b.entities).map(S=>Mt(S,n)))}function E(g,b){return y([g],b)}function y(g,b){const[w,m]=_s(g,n,b);d(m,b),o(w,b)}return{removeAll:eb(A),addOne:me(t),addMany:me(o),setOne:me(i),setMany:me(c),setAll:me(a),updateOne:me(u),updateMany:me(d),upsertOne:me(E),upsertMany:me(y),removeOne:me(l),removeMany:me(s)}}function nb(n,t){const{removeOne:o,removeMany:i,removeAll:c}=gs(n);function a(m,I){return l([m],I)}function l(m,I){m=lt(m);const B=m.filter(S=>!(Mt(S,n)in I.entities));B.length!==0&&b(B,I)}function s(m,I){return A([m],I)}function A(m,I){m=lt(m),m.length!==0&&b(m,I)}function f(m,I){m=lt(m),I.entities={},I.ids=[],l(m,I)}function u(m,I){return d([m],I)}function d(m,I){let B=!1;for(let S of m){const W=I.entities[S.id];if(!W)continue;B=!0,Object.assign(W,S.changes);const K=n(W);S.id!==K&&(delete I.entities[S.id],I.entities[K]=W)}B&&w(I)}function E(m,I){return y([m],I)}function y(m,I){const[B,S]=_s(m,n,I);d(S,I),l(B,I)}function g(m,I){if(m.length!==I.length)return!1;for(let B=0;B<m.length&&B<I.length;B++)if(m[B]!==I[B])return!1;return!0}function b(m,I){m.forEach(B=>{I.entities[n(B)]=B}),w(I)}function w(m){const I=Object.values(m.entities);I.sort(t);const B=I.map(n),{ids:S}=m;g(S,B)||(m.ids=B)}return{removeOne:o,removeMany:i,removeAll:c,addOne:me(a),updateOne:me(u),upsertOne:me(E),setOne:me(s),setMany:me(A),setAll:me(f),addMany:me(l),updateMany:me(d),upsertMany:me(y)}}function OC(n={}){const{selectId:t,sortComparer:o}={sortComparer:!1,selectId:l=>l.id,...n},i=o?nb(t,o):gs(t),c=Xg(i),a=Qg();return{selectId:t,sortComparer:o,...c,...a,...i}}var tb="task",FC="listener",JC="completed",ob="cancelled",ib=null,rb=null,Nc=null,cb=null,qi=class{constructor(n){fe(this,"name","TaskAbortError");fe(this,"message");this.code=n,this.message=`${tb} ${ob} (reason: ${n})`}},kc=(n,t)=>{if(typeof n!="function")throw new Error(ge(32))},$i=()=>{},bs=(n,t=$i)=>(n.catch(t),n),ms=(n,t)=>(n.addEventListener("abort",t,{once:!0}),()=>n.removeEventListener("abort",t)),st=(n,t)=>{const o=n.signal;o.aborted||("reason"in o||Object.defineProperty(o,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),n.abort(t))},At=n=>{if(n.aborted){const{reason:t}=n;throw new qi(t)}};function Bs(n,t){let o=$i;return new Promise((i,c)=>{const a=()=>c(new qi(n.reason));if(n.aborted){a();return}o=ms(n,a),t.finally(()=>o()).then(i,c)}).finally(()=>{o=$i})}var ab=async(n,t)=>{try{return await Promise.resolve(),{status:"ok",value:await n()}}catch(o){return{status:o instanceof qi?"cancelled":"rejected",error:o}}finally{t==null||t()}},Vi=n=>t=>bs(Bs(n,t).then(o=>(At(n),o))),Cs=n=>{const t=Vi(n);return o=>t(new Promise(i=>setTimeout(i,o)))},{assign:lb}=Object,ys={},Yi="listenerMiddleware",sb=(n,t)=>{const o=i=>ms(n,()=>st(i,n.reason));return(i,c)=>{kc(i,"taskExecutor");const a=new AbortController;o(a);const l=ab(async()=>{At(n),At(a.signal);const s=await i({pause:Vi(a.signal),delay:Cs(a.signal),signal:a.signal});return At(a.signal),s},()=>st(a,rb));return c!=null&&c.autoJoin&&t.push(l.catch($i)),{result:Vi(n)(l),cancel(){st(a,ib)}}}},Ab=(n,t)=>{const o=async(i,c)=>{At(t);let a=()=>{};const s=[new Promise((A,f)=>{let u=n({predicate:i,effect:(d,E)=>{E.unsubscribe(),A([d,E.getState(),E.getOriginalState()])}});a=()=>{u(),f()}})];c!=null&&s.push(new Promise(A=>setTimeout(A,c,null)));try{const A=await Bs(t,Promise.race(s));return At(t),A}finally{a()}};return(i,c)=>bs(o(i,c))},vs=n=>{let{type:t,actionCreator:o,matcher:i,predicate:c,effect:a}=n;if(t)c=We(t).match;else if(o)t=o.type,c=o.match;else if(i)c=i;else if(!c)throw new Error(ge(21));return kc(a,"options.listener"),{predicate:c,type:t,effect:a}},Is=Object.assign(n=>{const{type:t,predicate:o,effect:i}=vs(n);return{id:So(),effect:i,type:t,predicate:o,pending:new Set,unsubscribe:()=>{throw new Error(ge(22))}}},{withTypes:()=>Is}),Mc=n=>{n.pending.forEach(t=>{st(t,Nc)})},fb=n=>()=>{n.forEach(Mc),n.clear()},ws=(n,t,o)=>{try{n(t,o)}catch(i){setTimeout(()=>{throw i},0)}},Ss=Object.assign(We(`${Yi}/add`),{withTypes:()=>Ss}),ub=We(`${Yi}/removeAll`),Ts=Object.assign(We(`${Yi}/remove`),{withTypes:()=>Ts}),Eb=(...n)=>{console.error(`${Yi}/error`,...n)},DC=(n={})=>{const t=new Map,{extra:o,onError:i=Eb}=n;kc(i,"onError");const c=u=>(u.unsubscribe=()=>t.delete(u.id),t.set(u.id,u),d=>{u.unsubscribe(),d!=null&&d.cancelActive&&Mc(u)}),a=u=>{let d=Dc(Array.from(t.values()),E=>E.effect===u.effect);return d||(d=Is(u)),c(d)};Object.assign(a,{withTypes:()=>a});const l=u=>{const{type:d,effect:E,predicate:y}=vs(u),g=Dc(Array.from(t.values()),b=>(typeof d=="string"?b.type===d:b.predicate===y)&&b.effect===E);return g&&(g.unsubscribe(),u.cancelActive&&Mc(g)),!!g};Object.assign(l,{withTypes:()=>l});const s=async(u,d,E,y)=>{const g=new AbortController,b=Ab(a,g.signal),w=[];try{u.pending.add(g),await Promise.resolve(u.effect(d,lb({},E,{getOriginalState:y,condition:(m,I)=>b(m,I).then(Boolean),take:b,delay:Cs(g.signal),pause:Vi(g.signal),extra:o,signal:g.signal,fork:sb(g.signal,w),unsubscribe:u.unsubscribe,subscribe:()=>{t.set(u.id,u)},cancelActiveListeners:()=>{u.pending.forEach((m,I,B)=>{m!==g&&(st(m,Nc),B.delete(m))})},cancel:()=>{st(g,Nc),u.pending.delete(g)},throwIfCancelled:()=>{At(g.signal)}})))}catch(m){m instanceof qi||ws(i,m,{raisedBy:"effect"})}finally{await Promise.all(w),st(g,cb),u.pending.delete(g)}},A=fb(t);return{middleware:u=>d=>E=>{if(!isAction3(E))return d(E);if(Ss.match(E))return a(E.payload);if(ub.match(E)){A();return}if(Ts.match(E))return l(E.payload);let y=u.getState();const g=()=>{if(y===ys)throw new Error(ge(23));return y};let b;try{if(b=d(E),t.size>0){const w=u.getState(),m=Array.from(t.values());for(const I of m){let B=!1;try{B=I.predicate(E,w,y)}catch(S){B=!1,ws(i,S,{raisedBy:"predicate"})}B&&s(I,E,u,g)}}}finally{y=ys}return b},startListening:a,stopListening:l,clearListeners:A}},db=n=>({id:So(),middleware:n,applied:new Map}),hb=n=>t=>{var o;return((o=t==null?void 0:t.meta)==null?void 0:o.instanceId)===n},RC=()=>{const n=So(),t=new Map,o=Object.assign(We("dynamicMiddleware/add",(...s)=>({payload:s,meta:{instanceId:n}})),{withTypes:()=>o}),i=Object.assign(function(...A){A.forEach(f=>{let u=Dc(Array.from(t.values()),d=>d.middleware===f);u||(u=db(f)),t.set(u.id,u)})},{withTypes:()=>i}),c=s=>{const A=Array.from(t.values()).map(f=>Wi(f.applied,s,{insert:()=>f.middleware(s)}));return compose3(...A)},a=Rc(o,hb(n));return{middleware:s=>A=>f=>a(f)?(i(...f.payload),s.dispatch):c(s)(A)(f),addMiddleware:i,withMiddleware:o,instanceId:n}},pb=n=>"reducerPath"in n&&typeof n.reducerPath=="string",_b=n=>n.flatMap(t=>pb(t)?[[t.reducerPath,t.reducer]]:Object.entries(t)),Lc=Symbol.for("rtk-state-proxy-original"),gb=n=>!!n&&!!n[Lc],bb=new WeakMap,mb=(n,t)=>Wi(bb,n,{insert:()=>new Proxy(n,{get:(o,i,c)=>{if(i===Lc)return o;const a=Reflect.get(o,i,c);if(typeof a=="undefined"){const l=t[i.toString()];if(l){const s=l(void 0,{type:So()});if(typeof s=="undefined")throw new Error(ge(24));return s}}return a}})}),Bb=n=>{if(!gb(n))throw new Error(ge(25));return n[Lc]},Cb=(n={})=>n;function xC(...n){const t=Object.fromEntries(_b(n)),o=()=>Object.keys(t).length?combineReducers2(t):Cb;let i=o();function c(s,A){return i(s,A)}c.withLazyLoadedSlices=()=>c;const a=(s,A={})=>{const{reducerPath:f,reducer:u}=s,d=t[f];return!A.overrideExisting&&d&&d!==u||(t[f]=u,i=o()),c},l=Object.assign(function(A,f){return function(d,...E){return A(mb(f?f(d,...E):d,t),...E)}},{original:Bb});return Object.assign(c,{inject:a,selector:l})}function ge(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var yb=(n=>(n.JA_JP="ja-JP",n.EN_US="en-US",n.EN_GB="en-GB",n.ES_ES="es-ES",n.ES_LA="es-LA",n.FR_FR="fr-FR",n.DE_DE="de-DE",n.PT_BR="pt-BR",n.KO_KR="ko-KR",n.IT_IT="it-IT",n.ZH_CN="zh-CN",n.ZH_TW="zh-TW",n))(yb||{});const vb="en-US";function Ib(n,...t){return(t!=null?t:[]).flat().reduce((o,i)=>(delete o[i],o),{...n!=null?n:{}})}var wb=(n=>(n.CUSTOM_MENU_ITEM_CLICKED="CUSTOM_MENU_ITEM_CLICKED",n.DISPLAY_ADDED="DISPLAY_ADDED",n.DISPLAY_METRICS_CHANGED="DISPLAY_METRICS_CHANGED",n.DISPLAY_REMOVED="DISPLAY_REMOVED",n.MARK_DEVTOOLS_STATE="MARK_DEVTOOLS_STATE",n.POWER_RESUMED="POWER_RESUMED",n.SET_ACCESSIBILITY_SUPPORT_ENABLED="SET_ACCESSIBILITY_SUPPORT_ENABLED",n.SET_CUSTOM_MENU_ITEMS="SET_CUSTOM_MENU_ITEMS",n.SET_NET_LOG_STATUS="SET_NET_LOG_STATUS",n.SET_NETWORK_STATUS="SET_NETWORK_STATUS",n.SET_HW_ACCEL_AVAILABILITY="SET_HW_ACCEL_AVAILABILITY",n.SET_SUSPEND_STATUS="SET_SUSPEND_STATUS",n.SET_SYSTEM_IDLE="SET_SYSTEM_IDLE",n.SET_SYSTEM_LOCKED="SET_SYSTEM_LOCKED",n.SET_SYSTEM_TRANSPARENCY="SET_SYSTEM_TRANSPARENCY",n.SET_UPDATE_STATUS="SET_UPDATE_STATUS",n.SET_UPDATE_SUPPORTED="SET_UPDATE_SUPPORTED",n.UPDATE_DESKTOP_FEATURES="UPDATE_DESKTOP_FEATURES",n.UPDATE_DOWNLOADED="UPDATE_DOWNLOADED",n.SIGN_IN_CANCELED="SIGN_IN_CANCELED",n.SIGN_IN_COMPLETE="SIGN_IN_COMPLETE",n.SIGN_IN_PROGRESS="SIGN_IN_PROGRESS",n.TICKLE_MESSAGE_SERVER="TICKLE_MESSAGE_SERVER",n.TRACK_PAGE_ERROR="TRACK_PAGE_ERROR",n.SET_SESSION_MODE="SET_SESSION_MODE",n.SET_FOCUS_SESSION="SET_FOCUS_SESSION",n))(wb||{}),Sb=(n=>(n.SELECT_TEAM="SELECT_TEAM",n.SELECT_TEAM_BY_USER_ID="SELECT_TEAM_BY_USER_ID",n.SELECT_TEAM_BY_INDEX="SELECT_TEAM_BY_INDEX",n.SET_TEAMS_BY_INDEX="SET_TEAMS_BY_INDEX",n.SELECT_CHANNEL="SELECT_CHANNEL",n.SELECT_NEXT_TEAM="SELECT_NEXT_TEAM",n.SELECT_PREVIOUS_TEAM="SELECT_PREVIOUS_TEAM",n.SIGNED_OUT_TEAM="SIGNED_OUT_TEAM",n))(Sb||{}),Tb=(n=>(n.APP_COMMAND="APP_COMMAND",n.CONTEXT_MENU_ITEM_CLICKED="CONTEXT_MENU_ITEM_CLICKED",n.EDITING_COMMAND="EDITING_COMMAND",n.OPEN_CONTEXT_MENU="OPEN_CONTEXT_MENU",n.POPUP_APP_MENU="POPUP_APP_MENU",n.SET_CONTEXT_MENU_TEMPLATE="SET_CONTEXT_MENU_TEMPLATE",n.CLOSE_APP_MENU="CLOSE_APP_MENU",n))(Tb||{}),Ob=(n=>(n.SHOW_AUTH_DIALOG="SHOW_AUTH_DIALOG",n.SHOW_URL_SCHEME_MODAL="SHOW_URL_SCHEME_MODAL",n.SUBMIT_CREDENTIALS="SUBMIT_CREDENTIALS",n.SHOW_TRAY_BALLOON="SHOW_TRAY_BALLOON",n))(Ob||{}),Fb=(n=>(n.RECORD_PERFORMANCE_TIMING="RECORD_PERFORMANCE_TIMING",n.SET_SYSTEM_DIAGNOSTIC_INFO="SET_SYSTEM_DIAGNOSTIC_INFO",n))(Fb||{}),Jb=(n=>(n.INITIALIZE="INITIALIZE",n.READY="READY",n))(Jb||{}),Db=(n=>(n.AUTOLOGIN_TEAMS_COMPLETE="AUTOLOGIN_TEAMS_COMPLETE",n.CLEAR_CACHE_RESTART_APP="CLEAR_CACHE_RESTART_APP",n.CONFIRM_AND_RESET_APP="CONFIRM_AND_RESET_APP",n.FOREGROUND_APP="FOREGROUND_APP",n.HANDLE_DEEP_LINK="HANDLE_DEEP_LINK",n.MAIN_WINDOW_BLURRED="MAIN_WINDOW_BLURRED",n.MAIN_WINDOW_SHOWN="MAIN_WINDOW_SHOWN",n.MAIN_WINDOW_UNRESPONSIVE="MAIN_WINDOW_UNRESPONSIVE",n.MOVE_WINDOW_PRIMARY_SCREEN="MOVE_WINDOW_PRIMARY_SCREEN",n.PREPARE_AND_REVEAL_LOGS="PREPARE_AND_REVEAL_LOGS",n.RESTART_APP="RESTART_APP",n.QUIT_APP="QUIT_APP",n.REFRESH_TEAMS="REFRESH_TEAMS",n.RELOAD="RELOAD",n.SHOW_ABOUT="SHOW_ABOUT",n.SHOW_RELEASE_NOTES="SHOW_RELEASE_NOTES",n.SHOW_SETTINGS_EDITOR="SHOW_SETTINGS_EDITOR",n.USE_JS_PATH="USE_JS_PATH",n.SHOW_WEBAPP_DIALOG="SHOW_WEBAPP_DIALOG",n.SIGN_OUT_TEAM="SIGN_OUT_TEAM",n.TOGGLE_DEV_TOOLS="TOGGLE_DEV_TOOLS",n.TOGGLE_FULL_SCREEN="TOGGLE_FULL_SCREEN",n.TITLE_BAR_DOUBLE_CLICKED="TITLE_BAR_DOUBLE_CLICKED",n.TOKEN_FILE_PROCESSED="TOKEN_FILE_PROCESSED",n.MAGIC_LOGIN_IN_PROGRESS="MAGIC_LOGIN_IN_PROGRESS",n.RESTART_WITH_NET_LOG="RESTART_WITH_NET_LOG",n.START_NET_LOG="START_NET_LOG",n.DOWNLOADS_CLEANED_UP="DOWNLOADS_CLEANED_UP",n.SET_TASKBAR_BADGE="SET_TASKBAR_BADGE",n.TOGGLE_FEATURE_FRAGMENT="TOGGLE_FEATURE_FRAGMENT",n.SWITCH_MODE_AND_LOAD_URL="SWITCH_MODE_AND_LOAD_URL",n))(Db||{}),Rb=(n=>(n.NEW_NOTIFICATION="NEW_NOTIFICATION",n.REMOVE_NOTIFICATION="REMOVE_NOTIFICATION",n.CLEAR_NOTIFICATIONS="CLEAR_NOTIFICATIONS",n.CLICK_NOTIFICATION="CLICK_NOTIFICATION",n.NOTIFICATION_ACTION="NOTIFICATION_ACTION",n.REPLY_TO_NOTIFICATION="REPLY_TO_NOTIFICATION",n.SET_WINDOW_SHAPE="SET_WINDOW_SHAPE",n))(Rb||{}),xb=(n=>(n.UPDATE_SETTINGS="UPDATE_SETTINGS",n.SET_DEV_MODE="SET_DEV_MODE",n.SET_DEV_ENVIRONMENT="SET_DEV_ENVIRONMENT",n.SET_TITLE_BAR_HIDDEN="SET_TITLE_BAR_HIDDEN",n.ZOOM_IN="ZOOM_IN",n.ZOOM_OUT="ZOOM_OUT",n.RESET_ZOOM="RESET_ZOOM",n.WHITELIST_PROTOCOL="WHITELIST_PROTOCOL",n.ALLOWLIST_FILE_EXT="ALLOWLIST_FILE_EXT",n))(xb||{}),Uc=(n=>(n.ADD_NEW_TEAMS="ADD_NEW_TEAMS",n.REMOVE_TEAMS="REMOVE_TEAMS",n))(Uc||{}),Pb=(n=>(n.CREATE_WINDOW="CREATE_WINDOW",n.WINDOW_CREATED="WINDOW_CREATED",n.REMOVE_WINDOW="REMOVE_WINDOW",n.SET_WINDOW_FRAME="SET_WINDOW_FRAME",n.FOCUS_WINDOW="FOCUS_WINDOW",n))(Pb||{}),Nb=(n=>(n.SYNC="SYNC",n.SELECTION_CHANGED="SELECTION_CHANGED",n.SELECT_BY_ID="SELECT_BY_ID",n.SELECT_NEXT="SELECT_NEXT",n.SELECT_PREVIOUS="SELECT_PREVIOUS",n.ASSOCIATE_WEB_CONTENTS="ASSOCIATE_WEB_CONTENTS",n))(Nb||{});const PC=null;var kb=(n=>(n.DESKTOP_PRELOAD="DESKTOP PRELOAD",n))(kb||{}),Mb=(n=>(n.DEBUG="debug",n.INFO="info",n.WARN="warn",n.ERROR="error",n.FATAL="fatal",n))(Mb||{}),Lb=(n=>(n[n.VERBOSE=0]="VERBOSE",n[n.INFO=1]="INFO",n[n.WARN=2]="WARN",n[n.ERROR=3]="ERROR",n))(Lb||{});const NC={0:"debug",1:"info",2:"warn",3:"error"};var Ub=(n=>(n.BROWSER="browser",n.WEB="web",n))(Ub||{});function kC(n){return!!(process.env&&process.env.npm_config_disable_console&&process.env.npm_config_disable_console.includes(n))}const jb="[REDACTED]",MC="[DEPRECATED]",LC=process.env.username||process.env.USER||void 0,UC=null,jC=3,Hb=(n,t)=>{const o=t!=null?t:i=>i;return Object.entries(n).reduce((i,[c,a])=>(i[c]=o(a,c),i),{})},jc=(n,t,o)=>mapValues(n,(i,c)=>!t.has(c)&&Array.isArray(i)?i.map(a=>jc(a,t,o)):!t.has(c)&&i!==null&&typeof i=="object"?jc(i,t,o):t.has(c)?o:i),zb=(n,t=jb)=>{const o=new Set(n);return i=>Hb(i,(c,a)=>o.has(a)?t:c)},HC=(n,t=REDACTED_STRING)=>o=>jc(o,new Set(n),t),Wb=zb(["name","team_name","team_url","token"]),zC=We(Uc.ADD_NEW_TEAMS,(n,t=!1)=>({payload:n,meta:{logPayload:n.map(Wb),shouldSelect:t}})),Kb=We(Uc.REMOVE_TEAMS);function Gb(n){if(!n.teams)return"(Empty)";const t=Object.keys(n.teams),o=ba(Object.values(n.teams).reduce((i,c)=>(i.push(...Object.keys(c)),i),[]));return`(${t}) Changed keys [${o}]`}const qb=We("REDUX_UPDATE_FROM_WEBAPP",n=>({payload:n,meta:{logPayload:Gb(n)}})),$b="T00000000",Fo={active_item:"#4C9689",active_item_text:"#FFFFFF",active_presence:"#38978D",badge:"#EB4D5C",column_bg:"#4D394B",hover_item:"#3E313C",menu_bg:"#3E313C",text_color:"#FFFFFF",titlebarBackground:"#232323",titlebarTextColor:"#FFFFFF"},WC=Es({teams:{}},n=>n.addCase(qb,(t,{payload:o})=>{const i=o.teams?Vb(t.teams,o.teams):t.teams;return{...t,teams:i}}).addCase(Kb,(t,{payload:o})=>({...t,teams:Ib(t.teams,o)})));function Vb(n,t){return Object.entries(t).filter(([o])=>o!==$b).map(([o,i])=>({[o]:{...n[o]||{},...i}})).reduce((o,i)=>({...o,...i}),n)}const Yb={theme:{titlebarBackground:Fo.titlebarBackground,titlebarTextColor:Fo.titlebarTextColor},notificationPrefs:{notificationSound:"knock_brush.mp3",noTextInNotifications:!1,muteSounds:!1},connectivityPrefs:{ntlmCredentialDomains:"*"},featureFlags:{},unreads:{unreads:0,unreadHighlights:0,showBullet:!1},locale:vb,version:void 0,frontendBuildType:void 0},KC=n=>({...n,teams:mapValues(n.teams,t=>({...cloneDeep(Yb),theme:t.theme,featureFlags:t.featureFlags,locale:t.locale}))});var Xb=(n=>(n[n.Setting=0]="Setting",n[n.Action=1]="Action",n[n.Other=2]="Other",n[n.None=3]="None",n))(Xb||{}),Qb=(n=>(n.CHANNEL="channel",n.USER="user",n.TEAM="team",n.FILE="file",n.FILES="files",n.SHARE_FILE="share-file",n.INVITE="invite",n.NOTIFICATIONS="notifications",n.PREFERENCES="preferences",n.CREATE="create",n.BROWSE="browse",n))(Qb||{});function Zb(n){return/^slack:\/\/setting/i.test(n||"")}function em(n){return/^slack:\/\/app/i.test(n||"")}function Os(n){return/^slack:/i.test(n||"")}function GC(n){let t;return Array.isArray(n)?t=n.find(o=>!!o&&Os(o)):t=n&&Os(n)?n:void 0,t?Zb(t)?{type:0,href:t}:em(t)?{type:1,href:t}:{type:2,href:t}:{type:3,href:""}}function qC(n){if(!n||typeof n!="string")return null;try{const t=new URL(n);return t.protocol!==SLACK_PROTOCOL?null:{args:{...Object.fromEntries(t.searchParams.entries()),cmd:t.host},pathname:t.pathname}}catch(t){return logger.warn("Unable to parse deep link",{url:n,error:t}),null}}function nm(n,t){return`slack://${n}?${new URLSearchParams(t).toString()}`}const $C=n=>`${baseSlackURL(n)}/clog/track/`,VC=(n,t)=>{const{instanceUid:o,sessionId:i,releaseChannel:c,userId:a,workspaceId:l}=t;return{...n,user_id:a,team_id:l,args:{...n.args,selected_user_id:a,selected_workspace_id:l,instanceUid:o,sessionId:i,releaseChannel:c}}};var Jo=(n=>(n[n.DISPLAY_INFO=1000001]="DISPLAY_INFO",n[n._DEPRECATED_SYSTEM_LOCALE=1000002]="_DEPRECATED_SYSTEM_LOCALE",n[n._DEPRECATED_DESKTOP_HANG=1000003]="_DEPRECATED_DESKTOP_HANG",n[n.DESKTOP_CRASH=1000004]="DESKTOP_CRASH",n[n._DEPRECATED_DESKTOP_SCRIPTS_MISSING=1000005]="_DEPRECATED_DESKTOP_SCRIPTS_MISSING",n[n.DESKTOP_CLIENT_LAUNCH=1000006]="DESKTOP_CLIENT_LAUNCH",n[n.DESKTOP_RENDER_PROCESS_GONE=1000007]="DESKTOP_RENDER_PROCESS_GONE",n[n.DESKTOP_NOTIFICATION_RECEIVED=1000010]="DESKTOP_NOTIFICATION_RECEIVED",n[n.DESKTOP_NOTIFICATION_SUCCESS=1000011]="DESKTOP_NOTIFICATION_SUCCESS",n[n.DESKTOP_NOTIFICATION_ERROR=1000012]="DESKTOP_NOTIFICATION_ERROR",n[n.DESKTOP_NOTIFICATION_CLICK=1000013]="DESKTOP_NOTIFICATION_CLICK",n[n.DESKTOP_NOTIFICATION_REPLY=1000014]="DESKTOP_NOTIFICATION_REPLY",n[n.DESKTOP_NOTIFICATION_DISMISSED=1000015]="DESKTOP_NOTIFICATION_DISMISSED",n[n.DESKTOP_NOTIFICATION_FAILOVER=1000016]="DESKTOP_NOTIFICATION_FAILOVER",n[n.DESKTOP_NOTIFICATION_ACTION=1000017]="DESKTOP_NOTIFICATION_ACTION",n[n.DESKTOP_UPDATER_ERROR=1000050]="DESKTOP_UPDATER_ERROR",n[n.DESKTOP_UPDATER_CHECKING=1000051]="DESKTOP_UPDATER_CHECKING",n[n.DESKTOP_UPDATER_UPDATE_AVAILABLE=1000052]="DESKTOP_UPDATER_UPDATE_AVAILABLE",n[n.DESKTOP_UPDATER_UPDATE_NOT_AVAILABLE=1000053]="DESKTOP_UPDATER_UPDATE_NOT_AVAILABLE",n[n.DESKTOP_UPDATER_UPDATE_DOWNLOADED=1000054]="DESKTOP_UPDATER_UPDATE_DOWNLOADED",n[n.DESKTOP_UPDATER_CHECK_UPDATE_FAILURE=100055]="DESKTOP_UPDATER_CHECK_UPDATE_FAILURE",n[n._DEPRECATED_DESKTOP_WINDOWS_UPDATE_START=1000056]="_DEPRECATED_DESKTOP_WINDOWS_UPDATE_START",n[n._DEPRECATED_DESKTOP_WINDOWS_UPDATE_COMPLETED=1000057]="_DEPRECATED_DESKTOP_WINDOWS_UPDATE_COMPLETED",n[n.DESKTOP_UPDATER_APPLY_UPDATE=1000058]="DESKTOP_UPDATER_APPLY_UPDATE",n[n.DESKTOP_UPDATER_MAC_SERVER_FAIL=1000059]="DESKTOP_UPDATER_MAC_SERVER_FAIL",n[n.DESKTOP_UPDATER_SUCCESS=1000060]="DESKTOP_UPDATER_SUCCESS",n[n.DESKTOP_UPDATER_FAIL=1000061]="DESKTOP_UPDATER_FAIL",n[n._DEPRECATED_DESKTOP_DEEPLINK_ACTIVATION=1000100]="_DEPRECATED_DESKTOP_DEEPLINK_ACTIVATION",n[n._DEPRECATED_DESKTOP_TILE_ACTIVITY=1000101]="_DEPRECATED_DESKTOP_TILE_ACTIVITY",n[n._DEPRECATED_DESKTOP_TRACEROUTE=1000110]="_DEPRECATED_DESKTOP_TRACEROUTE",n[n.DESKTOP_API_TEST_ERROR=1000111]="DESKTOP_API_TEST_ERROR",n[n.DESKTOP_API_TEST_OFFLINE=1000112]="DESKTOP_API_TEST_OFFLINE",n[n.DESKTOP_NAVIGATOR_CONNECTION=1000113]="DESKTOP_NAVIGATOR_CONNECTION",n[n.DESKTOP_NAVIGATOR_ONLINE_BOGUS=1000114]="DESKTOP_NAVIGATOR_ONLINE_BOGUS",n[n.DESKTOP_PROXY_INFO=1000115]="DESKTOP_PROXY_INFO",n[n._DEPRECATED_DESKTOP_LANGUAGE_DETECTED=1000150]="_DEPRECATED_DESKTOP_LANGUAGE_DETECTED",n[n._DEPRECATED_DESKTOP_DICT_UNSUPPORTED=1000151]="_DEPRECATED_DESKTOP_DICT_UNSUPPORTED",n[n._DEPRECATED_DESKTOP_DICT_INVALID_HASH=1000152]="_DEPRECATED_DESKTOP_DICT_INVALID_HASH",n[n._DEPRECATED_DESKTOP_DICT_DOWNLOAD_FAIL=1000153]="_DEPRECATED_DESKTOP_DICT_DOWNLOAD_FAIL",n[n._DEPRECATED_DESKTOP_SPELLCHECK_FORCE_LANGUAGE=1000154]="_DEPRECATED_DESKTOP_SPELLCHECK_FORCE_LANGUAGE",n[n._DEPRECATED_DESKTOP_SPELLCHECK_AUTO_LANGUAGE=1000155]="_DEPRECATED_DESKTOP_SPELLCHECK_AUTO_LANGUAGE",n[n._DEPRECATED_DESKTOP_SPELLCHECK_UNLOAD_DICT=1000156]="_DEPRECATED_DESKTOP_SPELLCHECK_UNLOAD_DICT",n[n._DEPRECATED_DESKTOP_SPELLCHECK_SWITCH_FAIL=1000157]="_DEPRECATED_DESKTOP_SPELLCHECK_SWITCH_FAIL",n[n.DESKTOP_CLIENT_RELOAD=1000200]="DESKTOP_CLIENT_RELOAD",n[n.DESKTOP_CLIENT_RESET=1000201]="DESKTOP_CLIENT_RESET",n[n.DESKTOP_CLIENT_TIME_TO_USABLE=1000202]="DESKTOP_CLIENT_TIME_TO_USABLE",n[n.DESKTOP_KEYCHAIN_DENIED=1000203]="DESKTOP_KEYCHAIN_DENIED",n[n.DESKTOP_CLIENT_ZOOM_LEVEL=1000300]="DESKTOP_CLIENT_ZOOM_LEVEL",n[n.DESKTOP_CLIENT_ACCESSIBILITY_SUPPORT=1000301]="DESKTOP_CLIENT_ACCESSIBILITY_SUPPORT",n[n.DESKTOP_CLIENT_MENU_TRIGGER=1000302]="DESKTOP_CLIENT_MENU_TRIGGER",n[n.DESKTOP_CLIENT_THEME_SHOULD_USE_HIGH_CONTRAST_COLORS=1000303]="DESKTOP_CLIENT_THEME_SHOULD_USE_HIGH_CONTRAST_COLORS",n[n._DEPRECATED_DESKTOP_CLIENT_MAGIC_TOKEN_MARK_CLICK=1000400]="_DEPRECATED_DESKTOP_CLIENT_MAGIC_TOKEN_MARK_CLICK",n[n.DESKTOP_EA_TEAMID=1000500]="DESKTOP_EA_TEAMID",n[n.DESKTOP_INTERFACE_INVALID_PARAM=1000600]="DESKTOP_INTERFACE_INVALID_PARAM",n[n.DESKTOP_OPEN_EXTERNAL_URL=1000700]="DESKTOP_OPEN_EXTERNAL_URL",n[n.DESKTOP_OPEN_DOWNLOADED_FILE=1000701]="DESKTOP_OPEN_DOWNLOADED_FILE",n[n.DESKTOP_UNRESPONSIVE_DIALOG_SHOWN=1000800]="DESKTOP_UNRESPONSIVE_DIALOG_SHOWN",n[n.DESKTOP_UNRESPONSIVE_DIALOG_CLOSED=1000801]="DESKTOP_UNRESPONSIVE_DIALOG_CLOSED",n[n.DESKTOP_EXTERNAL_CONFIG=1000900]="DESKTOP_EXTERNAL_CONFIG",n[n.DESKTOP_LEGACY_CONFIG_NO_UPDATES_ENV=1000901]="DESKTOP_LEGACY_CONFIG_NO_UPDATES_ENV",n[n.DESKTOP_LEGACY_CONFIG_NO_UPDATES_PREF=1000902]="DESKTOP_LEGACY_CONFIG_NO_UPDATES_PREF",n[n.DESKTOP_LEGACY_CONFIG_TOKEN_FILE=1000903]="DESKTOP_LEGACY_CONFIG_TOKEN_FILE",n[n.DESKTOP_PERFORMANCE_RECORD=1001e3]="DESKTOP_PERFORMANCE_RECORD",n[n.DESKTOP_WEB_CONTENTS_LOAD_TIMEOUT=1001001]="DESKTOP_WEB_CONTENTS_LOAD_TIMEOUT",n[n.DESKTOP_MEDIA_ACCESS=1001100]="DESKTOP_MEDIA_ACCESS",n[n.CAN_INIT_AUDIO_DEVICE=1001101]="CAN_INIT_AUDIO_DEVICE",n[n.GET_AUDIO_DEVICE_DETAILS=101102]="GET_AUDIO_DEVICE_DETAILS",n))(Jo||{}),Fs=(n=>(n[n.WINRT_ELECTRON=1]="WINRT_ELECTRON",n[n.HTML=2]="HTML",n[n.MACOS_ELECTRON=4]="MACOS_ELECTRON",n[n.LINUX_ELECTRON=5]="LINUX_ELECTRON",n))(Fs||{}),tm=(n=>(n[n.LINK=0]="LINK",n[n.APP_MENU_HELP_CENTER=1]="APP_MENU_HELP_CENTER",n[n.APP_MENU_WORKSPACE_LOGIN=2]="APP_MENU_WORKSPACE_LOGIN",n[n.SIGN_OUT_EPIC=3]="SIGN_OUT_EPIC",n[n.RELEASE_NOTES_EPIC=4]="RELEASE_NOTES_EPIC",n[n.URL_SCHEME_DIALOG_EPIC=5]="URL_SCHEME_DIALOG_EPIC",n[n.MAGIC_LOGIN_REDIRECT=6]="MAGIC_LOGIN_REDIRECT",n[n.CONTEXT_MENU_SEARCH_GOOGLE=7]="CONTEXT_MENU_SEARCH_GOOGLE",n[n.EXTERNAL_LINK_EPIC=8]="EXTERNAL_LINK_EPIC",n[n.MAS_UPDATES_PAGE=9]="MAS_UPDATES_PAGE",n[n.MICROSOFT_STORE_UPDATES_PAGE=10]="MICROSOFT_STORE_UPDATES_PAGE",n))(tm||{}),om=(n=>(n[n.CANCELLED=0]="CANCELLED",n[n.WAIT=1]="WAIT",n[n.RELOAD=2]="RELOAD",n[n.CLEAR_CACHE_RELOAD=3]="CLEAR_CACHE_RELOAD",n[n.DISMISSED=4]="DISMISSED",n))(om||{});function Xi({id:n},t){const o=Fs.HTML;window.desktop.diagnostics.track(t,{notificationId:n,notificationSystem:o})}var Qi=$(9490),Lt={};Lt.styleTagTransform=D(),Lt.setAttributes=he(),Lt.insert=Y().bind(null,"head"),Lt.domAPI=te(),Lt.insertStyleElement=G();var YC=P()(Qi.A,Lt);const XC=Qi.A&&Qi.A.locals?Qi.A.locals:void 0;var Zi=$(3734),Ut={};Ut.styleTagTransform=D(),Ut.setAttributes=he(),Ut.insert=Y().bind(null,"head"),Ut.domAPI=te(),Ut.insertStyleElement=G();var QC=P()(Zi.A,Ut);const ZC=Zi.A&&Zi.A.locals?Zi.A.locals:void 0;var er=$(2408);/*! *****************************************************************************
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
***************************************************************************** */var Hc=function(n,t){return Hc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(o,i){o.__proto__=i}||function(o,i){for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(o[c]=i[c])},Hc(n,t)};function jt(n,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Hc(n,t);function o(){this.constructor=n}n.prototype=t===null?Object.create(t):(o.prototype=t.prototype,new o)}var Js=function(){return Js=Object.assign||function(t){for(var o,i=1,c=arguments.length;i<c;i++){o=arguments[i];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a])}return t},Js.apply(this,arguments)};function ey(n,t){var o={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&t.indexOf(i)<0&&(o[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(n);c<i.length;c++)t.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(n,i[c])&&(o[i[c]]=n[i[c]]);return o}function ny(n,t,o,i){var c=arguments.length,a=c<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,t,o,i);else for(var s=n.length-1;s>=0;s--)(l=n[s])&&(a=(c<3?l(a):c>3?l(t,o,a):l(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a}function ty(n,t){return function(o,i){t(o,i,n)}}function oy(n,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,t)}function im(n,t,o,i){function c(a){return a instanceof o?a:new o(function(l){l(a)})}return new(o||(o=Promise))(function(a,l){function s(u){try{f(i.next(u))}catch(d){l(d)}}function A(u){try{f(i.throw(u))}catch(d){l(d)}}function f(u){u.done?a(u.value):c(u.value).then(s,A)}f((i=i.apply(n,t||[])).next())})}function Ds(n,t){var o={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},i,c,a,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(f){return function(u){return A([f,u])}}function A(f){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,c&&(a=f[0]&2?c.return:f[0]?c.throw||((a=c.return)&&a.call(c),0):c.next)&&!(a=a.call(c,f[1])).done)return a;switch(c=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return o.label++,{value:f[1],done:!1};case 5:o.label++,c=f[1],f=[0];continue;case 7:f=o.ops.pop(),o.trys.pop();continue;default:if(a=o.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){o=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){o.label=f[1];break}if(f[0]===6&&o.label<a[1]){o.label=a[1],a=f;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(f);break}a[2]&&o.ops.pop(),o.trys.pop();continue}f=t.call(n,o)}catch(u){f=[6,u],c=0}finally{i=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}var Rs=Object.create?function(n,t,o,i){i===void 0&&(i=o),Object.defineProperty(n,i,{enumerable:!0,get:function(){return t[o]}})}:function(n,t,o,i){i===void 0&&(i=o),n[i]=t[o]};function iy(n,t){for(var o in n)o!=="default"&&!Object.prototype.hasOwnProperty.call(t,o)&&Rs(t,n,o)}function Do(n){var t=typeof Symbol=="function"&&Symbol.iterator,o=t&&n[t],i=0;if(o)return o.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function kn(n,t){var o=typeof Symbol=="function"&&n[Symbol.iterator];if(!o)return n;var i=o.call(n),c,a=[],l;try{for(;(t===void 0||t-- >0)&&!(c=i.next()).done;)a.push(c.value)}catch(s){l={error:s}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(l)throw l.error}}return a}function ry(){for(var n=[],t=0;t<arguments.length;t++)n=n.concat(kn(arguments[t]));return n}function cy(){for(var n=0,t=0,o=arguments.length;t<o;t++)n+=arguments[t].length;for(var i=Array(n),c=0,t=0;t<o;t++)for(var a=arguments[t],l=0,s=a.length;l<s;l++,c++)i[c]=a[l];return i}function Ht(n,t){for(var o=0,i=t.length,c=n.length;o<i;o++,c++)n[c]=t[o];return n}function ft(n){return this instanceof ft?(this.v=n,this):new ft(n)}function rm(n,t,o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=o.apply(n,t||[]),c,a=[];return c={},l("next"),l("throw"),l("return"),c[Symbol.asyncIterator]=function(){return this},c;function l(E){i[E]&&(c[E]=function(y){return new Promise(function(g,b){a.push([E,y,g,b])>1||s(E,y)})})}function s(E,y){try{A(i[E](y))}catch(g){d(a[0][3],g)}}function A(E){E.value instanceof ft?Promise.resolve(E.value.v).then(f,u):d(a[0][2],E)}function f(E){s("next",E)}function u(E){s("throw",E)}function d(E,y){E(y),a.shift(),a.length&&s(a[0][0],a[0][1])}}function ay(n){var t,o;return t={},i("next"),i("throw",function(c){throw c}),i("return"),t[Symbol.iterator]=function(){return this},t;function i(c,a){t[c]=n[c]?function(l){return(o=!o)?{value:ft(n[c](l)),done:c==="return"}:a?a(l):l}:a}}function cm(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=n[Symbol.asyncIterator],o;return t?t.call(n):(n=typeof Do=="function"?Do(n):n[Symbol.iterator](),o={},i("next"),i("throw"),i("return"),o[Symbol.asyncIterator]=function(){return this},o);function i(a){o[a]=n[a]&&function(l){return new Promise(function(s,A){l=n[a](l),c(s,A,l.done,l.value)})}}function c(a,l,s,A){Promise.resolve(A).then(function(f){a({value:f,done:s})},l)}}function ly(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}var am=Object.create?function(n,t){Object.defineProperty(n,"default",{enumerable:!0,value:t})}:function(n,t){n.default=t};function sy(n){if(n&&n.__esModule)return n;var t={};if(n!=null)for(var o in n)o!=="default"&&Object.prototype.hasOwnProperty.call(n,o)&&Rs(t,n,o);return am(t,n),t}function Ay(n){return n&&n.__esModule?n:{default:n}}function fy(n,t){if(!t.has(n))throw new TypeError("attempted to get private field on non-instance");return t.get(n)}function uy(n,t,o){if(!t.has(n))throw new TypeError("attempted to set private field on non-instance");return t.set(n,o),o}var zc=function(n){return n&&typeof n.length=="number"&&typeof n!="function"};function Ae(n){return typeof n=="function"}function xs(n){return Ae(n==null?void 0:n.then)}function lm(n){var t=function(i){Error.call(i),i.stack=new Error().stack},o=n(t);return o.prototype=Object.create(Error.prototype),o.prototype.constructor=o,o}var Wc=lm(function(n){return function(o){n(this),this.message=o?o.length+` errors occurred during unsubscription:
`+o.map(function(i,c){return c+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=o}});function Kc(n,t){if(n){var o=n.indexOf(t);0<=o&&n.splice(o,1)}}var nr=function(){function n(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._teardowns=null}return n.prototype.unsubscribe=function(){var t,o,i,c,a;if(!this.closed){this.closed=!0;var l=this._parentage;if(l)if(this._parentage=null,Array.isArray(l))try{for(var s=Do(l),A=s.next();!A.done;A=s.next()){var f=A.value;f.remove(this)}}catch(b){t={error:b}}finally{try{A&&!A.done&&(o=s.return)&&o.call(s)}finally{if(t)throw t.error}}else l.remove(this);var u=this.initialTeardown;if(Ae(u))try{u()}catch(b){a=b instanceof Wc?b.errors:[b]}var d=this._teardowns;if(d){this._teardowns=null;try{for(var E=Do(d),y=E.next();!y.done;y=E.next()){var g=y.value;try{Ns(g)}catch(b){a=a!=null?a:[],b instanceof Wc?a=Ht(Ht([],kn(a)),kn(b.errors)):a.push(b)}}}catch(b){i={error:b}}finally{try{y&&!y.done&&(c=E.return)&&c.call(E)}finally{if(i)throw i.error}}}if(a)throw new Wc(a)}},n.prototype.add=function(t){var o;if(t&&t!==this)if(this.closed)Ns(t);else{if(t instanceof n){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._teardowns=(o=this._teardowns)!==null&&o!==void 0?o:[]).push(t)}},n.prototype._hasParent=function(t){var o=this._parentage;return o===t||Array.isArray(o)&&o.includes(t)},n.prototype._addParent=function(t){var o=this._parentage;this._parentage=Array.isArray(o)?(o.push(t),o):o?[o,t]:t},n.prototype._removeParent=function(t){var o=this._parentage;o===t?this._parentage=null:Array.isArray(o)&&Kc(o,t)},n.prototype.remove=function(t){var o=this._teardowns;o&&Kc(o,t),t instanceof n&&t._removeParent(this)},n.EMPTY=function(){var t=new n;return t.closed=!0,t}(),n}(),Ey=nr.EMPTY;function Ps(n){return n instanceof nr||n&&"closed"in n&&Ae(n.remove)&&Ae(n.add)&&Ae(n.unsubscribe)}function Ns(n){Ae(n)?n():n.unsubscribe()}var ut={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},tr={setTimeout:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=tr.delegate;return((o==null?void 0:o.setTimeout)||setTimeout).apply(void 0,Ht([],kn(n)))},clearTimeout:function(n){var t=tr.delegate;return((t==null?void 0:t.clearTimeout)||clearTimeout)(n)},delegate:void 0};function ks(n){tr.setTimeout(function(){var t=ut.onUnhandledError;if(t)t(n);else throw n})}function Ro(){}var sm=function(){return Gc("C",void 0,void 0)}();function Am(n){return Gc("E",void 0,n)}function fm(n){return Gc("N",n,void 0)}function Gc(n,t,o){return{kind:n,value:t,error:o}}var Et=null;function um(n){if(ut.useDeprecatedSynchronousErrorHandling){var t=!Et;if(t&&(Et={errorThrown:!1,error:null}),n(),t){var o=Et,i=o.errorThrown,c=o.error;if(Et=null,i)throw c}}else n()}function Em(n){ut.useDeprecatedSynchronousErrorHandling&&Et&&(Et.errorThrown=!0,Et.error=n)}var qc=function(n){jt(t,n);function t(o){var i=n.call(this)||this;return i.isStopped=!1,o?(i.destination=o,Ps(o)&&o.add(i)):i.destination=dm,i}return t.create=function(o,i,c){return new Ms(o,i,c)},t.prototype.next=function(o){this.isStopped?Vc(fm(o),this):this._next(o)},t.prototype.error=function(o){this.isStopped?Vc(Am(o),this):(this.isStopped=!0,this._error(o))},t.prototype.complete=function(){this.isStopped?Vc(sm,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(o){this.destination.next(o)},t.prototype._error=function(o){try{this.destination.error(o)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(nr),Ms=function(n){jt(t,n);function t(o,i,c){var a=n.call(this)||this,l;if(Ae(o))l=o;else if(o){l=o.next,i=o.error,c=o.complete;var s;a&&ut.useDeprecatedNextContext?(s=Object.create(o),s.unsubscribe=function(){return a.unsubscribe()}):s=o,l=l==null?void 0:l.bind(s),i=i==null?void 0:i.bind(s),c=c==null?void 0:c.bind(s)}return a.destination={next:l?$c(l,a):Ro,error:$c(i!=null?i:Ls,a),complete:c?$c(c,a):Ro},a}return t}(qc);function $c(n,t){return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];try{n.apply(void 0,Ht([],kn(o)))}catch(c){ut.useDeprecatedSynchronousErrorHandling?Em(c):ks(c)}}}function Ls(n){throw n}function Vc(n,t){var o=ut.onStoppedNotification;o&&tr.setTimeout(function(){return o(n,t)})}var dm={closed:!0,next:Ro,error:Ls,complete:Ro},Yc=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function Us(n){return n}function dy(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return js(n)}function js(n){return n.length===0?Us:n.length===1?n[0]:function(o){return n.reduce(function(i,c){return c(i)},o)}}var Xe=function(){function n(t){t&&(this._subscribe=t)}return n.prototype.lift=function(t){var o=new n;return o.source=this,o.operator=t,o},n.prototype.subscribe=function(t,o,i){var c=this,a=pm(t)?t:new Ms(t,o,i);return um(function(){var l=c,s=l.operator,A=l.source;a.add(s?s.call(a,A):A?c._subscribe(a):c._trySubscribe(a))}),a},n.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(o){t.error(o)}},n.prototype.forEach=function(t,o){var i=this;return o=Hs(o),new o(function(c,a){var l;l=i.subscribe(function(s){try{t(s)}catch(A){a(A),l==null||l.unsubscribe()}},a,c)})},n.prototype._subscribe=function(t){var o;return(o=this.source)===null||o===void 0?void 0:o.subscribe(t)},n.prototype[Yc]=function(){return this},n.prototype.pipe=function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return js(t)(this)},n.prototype.toPromise=function(t){var o=this;return t=Hs(t),new t(function(i,c){var a;o.subscribe(function(l){return a=l},function(l){return c(l)},function(){return i(a)})})},n.create=function(t){return new n(t)},n}();function Hs(n){var t;return(t=n!=null?n:ut.Promise)!==null&&t!==void 0?t:Promise}function hm(n){return n&&Ae(n.next)&&Ae(n.error)&&Ae(n.complete)}function pm(n){return n&&n instanceof qc||hm(n)&&Ps(n)}function zs(n){return Ae(n[Yc])}function Ws(n){return Symbol.asyncIterator&&Ae(n==null?void 0:n[Symbol.asyncIterator])}function Ks(n){return new TypeError("You provided "+(n!==null&&typeof n=="object"?"an invalid object":"'"+n+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function _m(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Gs=_m();function qs(n){return Ae(n==null?void 0:n[Gs])}function $s(n){return rm(this,arguments,function(){var o,i,c,a;return Ds(this,function(l){switch(l.label){case 0:o=n.getReader(),l.label=1;case 1:l.trys.push([1,,9,10]),l.label=2;case 2:return[4,ft(o.read())];case 3:return i=l.sent(),c=i.value,a=i.done,a?[4,ft(void 0)]:[3,5];case 4:return[2,l.sent()];case 5:return[4,ft(c)];case 6:return[4,l.sent()];case 7:return l.sent(),[3,2];case 8:return[3,10];case 9:return o.releaseLock(),[7];case 10:return[2]}})})}function Vs(n){return Ae(n==null?void 0:n.getReader)}function Mn(n){if(n instanceof Xe)return n;if(n!=null){if(zs(n))return gm(n);if(zc(n))return bm(n);if(xs(n))return mm(n);if(Ws(n))return Ys(n);if(qs(n))return Bm(n);if(Vs(n))return Cm(n)}throw Ks(n)}function gm(n){return new Xe(function(t){var o=n[Yc]();if(Ae(o.subscribe))return o.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function bm(n){return new Xe(function(t){for(var o=0;o<n.length&&!t.closed;o++)t.next(n[o]);t.complete()})}function mm(n){return new Xe(function(t){n.then(function(o){t.closed||(t.next(o),t.complete())},function(o){return t.error(o)}).then(null,ks)})}function Bm(n){return new Xe(function(t){var o,i;try{for(var c=Do(n),a=c.next();!a.done;a=c.next()){var l=a.value;if(t.next(l),t.closed)return}}catch(s){o={error:s}}finally{try{a&&!a.done&&(i=c.return)&&i.call(c)}finally{if(o)throw o.error}}t.complete()})}function Ys(n){return new Xe(function(t){ym(n,t).catch(function(o){return t.error(o)})})}function Cm(n){return Ys($s(n))}function ym(n,t){var o,i,c,a;return im(this,void 0,void 0,function(){var l,s;return Ds(this,function(A){switch(A.label){case 0:A.trys.push([0,5,6,11]),o=cm(n),A.label=1;case 1:return[4,o.next()];case 2:if(i=A.sent(),!!i.done)return[3,4];if(l=i.value,t.next(l),t.closed)return[2];A.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=A.sent(),c={error:s},[3,11];case 6:return A.trys.push([6,,9,10]),i&&!i.done&&(a=o.return)?[4,a.call(o)]:[3,8];case 7:A.sent(),A.label=8;case 8:return[3,10];case 9:if(c)throw c.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function vm(n){return Ae(n==null?void 0:n.lift)}function zt(n){return function(t){if(vm(t))return t.lift(function(o){try{return n(o,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}var Wt=function(n){jt(t,n);function t(o,i,c,a,l){var s=n.call(this,o)||this;return s.onFinalize=l,s._next=i?function(A){try{i(A)}catch(f){o.error(f)}}:n.prototype._next,s._error=a?function(A){try{a(A)}catch(f){o.error(f)}finally{this.unsubscribe()}}:n.prototype._error,s._complete=c?function(){try{c()}catch(A){o.error(A)}finally{this.unsubscribe()}}:n.prototype._complete,s}return t.prototype.unsubscribe=function(){var o,i=this.closed;n.prototype.unsubscribe.call(this),!i&&((o=this.onFinalize)===null||o===void 0||o.call(this))},t}(qc);function Xs(n,t){return zt(function(o,i){var c=0;o.subscribe(new Wt(i,function(a){i.next(n.call(t,a,c++))}))})}function Ln(n,t,o,i,c){i===void 0&&(i=0),c===void 0&&(c=!1);var a=t.schedule(function(){o(),c?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(a),!c)return a}function Im(n,t,o,i,c,a,l,s){var A=[],f=0,u=0,d=!1,E=function(){d&&!A.length&&!f&&t.complete()},y=function(b){return f<i?g(b):A.push(b)},g=function(b){a&&t.next(b),f++;var w=!1;Mn(o(b,u++)).subscribe(new Wt(t,function(m){c==null||c(m),a?y(m):t.next(m)},function(){w=!0},void 0,function(){if(w)try{f--;for(var m=function(){var I=A.shift();l?Ln(t,l,function(){return g(I)}):g(I)};A.length&&f<i;)m();E()}catch(I){t.error(I)}}))};return n.subscribe(new Wt(t,y,function(){d=!0,E()})),function(){s==null||s()}}function or(n,t,o){return o===void 0&&(o=1/0),Ae(t)?or(function(i,c){return Xs(function(a,l){return t(i,a,c,l)})(Mn(n(i,c)))},o):(typeof t=="number"&&(o=t),zt(function(i,c){return Im(i,c,n,o)}))}var wm=Array.isArray;function Sm(n,t){return wm(t)?n.apply(void 0,Ht([],kn(t))):n(t)}function Tm(n){return Xs(function(t){return Sm(n,t)})}var Om=["addListener","removeListener"],Fm=["addEventListener","removeEventListener"],Jm=["on","off"];function ir(n,t,o,i){if(Ae(o)&&(i=o,o=void 0),i)return ir(n,t,o).pipe(Tm(i));var c=kn(xm(n)?Fm.map(function(s){return function(A){return n[s](t,A,o)}}):Dm(n)?Om.map(Qs(n,t)):Rm(n)?Jm.map(Qs(n,t)):[],2),a=c[0],l=c[1];if(!a&&zc(n))return or(function(s){return ir(s,t,o)})(Mn(n));if(!a)throw new TypeError("Invalid event target");return new Xe(function(s){var A=function(){for(var f=[],u=0;u<arguments.length;u++)f[u]=arguments[u];return s.next(1<f.length?f:f[0])};return a(A),function(){return l(A)}})}function Qs(n,t){return function(o){return function(i){return n[o](t,i)}}}function Dm(n){return Ae(n.addListener)&&Ae(n.removeListener)}function Rm(n){return Ae(n.on)&&Ae(n.off)}function xm(n){return Ae(n.addEventListener)&&Ae(n.removeEventListener)}function Pm(n){return n===void 0&&(n=1/0),or(Us,n)}var Xc=new Xe(function(n){return n.complete()});function hy(n){return n?Nm(n):Xc}function Nm(n){return new Observable(function(t){return n.schedule(function(){return t.complete()})})}function Zs(n){return n&&Ae(n.schedule)}function Qc(n){return n[n.length-1]}function py(n){return isFunction(Qc(n))?n.pop():void 0}function km(n){return Zs(Qc(n))?n.pop():void 0}function Mm(n,t){return typeof Qc(n)=="number"?n.pop():t}function eA(n,t){return t===void 0&&(t=0),zt(function(o,i){o.subscribe(new Wt(i,function(c){return Ln(i,n,function(){return i.next(c)},t)},function(){return Ln(i,n,function(){return i.complete()},t)},function(c){return Ln(i,n,function(){return i.error(c)},t)}))})}function nA(n,t){return t===void 0&&(t=0),zt(function(o,i){i.add(n.schedule(function(){return o.subscribe(i)},t))})}function Lm(n,t){return Mn(n).pipe(nA(t),eA(t))}function Um(n,t){return Mn(n).pipe(nA(t),eA(t))}function jm(n,t){return new Xe(function(o){var i=0;return t.schedule(function(){i===n.length?o.complete():(o.next(n[i++]),o.closed||this.schedule())})})}function Hm(n,t){return new Xe(function(o){var i;return Ln(o,t,function(){i=n[Gs](),Ln(o,t,function(){var c,a,l;try{c=i.next(),a=c.value,l=c.done}catch(s){o.error(s);return}l?o.complete():o.next(a)},0,!0)}),function(){return Ae(i==null?void 0:i.return)&&i.return()}})}function tA(n,t){if(!n)throw new Error("Iterable cannot be null");return new Xe(function(o){Ln(o,t,function(){var i=n[Symbol.asyncIterator]();Ln(o,t,function(){i.next().then(function(c){c.done?o.complete():o.next(c.value)})},0,!0)})})}function zm(n,t){return tA($s(n),t)}function Wm(n,t){if(n!=null){if(zs(n))return Lm(n,t);if(zc(n))return jm(n,t);if(xs(n))return Um(n,t);if(Ws(n))return tA(n,t);if(qs(n))return Hm(n,t);if(Vs(n))return zm(n,t)}throw Ks(n)}function Km(n,t){return t?Wm(n,t):Mn(n)}function Gm(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=km(n),i=Mm(n,1/0),c=n;return c.length?c.length===1?Mn(c[0]):Pm(i)(Km(c,o)):Xc}var qm=function(n){jt(t,n);function t(o,i){return n.call(this)||this}return t.prototype.schedule=function(o,i){return i===void 0&&(i=0),this},t}(nr),rr={setInterval:function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var o=rr.delegate;return((o==null?void 0:o.setInterval)||setInterval).apply(void 0,Ht([],kn(n)))},clearInterval:function(n){var t=rr.delegate;return((t==null?void 0:t.clearInterval)||clearInterval)(n)},delegate:void 0},$m=function(n){jt(t,n);function t(o,i){var c=n.call(this,o,i)||this;return c.scheduler=o,c.work=i,c.pending=!1,c}return t.prototype.schedule=function(o,i){if(i===void 0&&(i=0),this.closed)return this;this.state=o;var c=this.id,a=this.scheduler;return c!=null&&(this.id=this.recycleAsyncId(a,c,i)),this.pending=!0,this.delay=i,this.id=this.id||this.requestAsyncId(a,this.id,i),this},t.prototype.requestAsyncId=function(o,i,c){return c===void 0&&(c=0),rr.setInterval(o.flush.bind(o,this),c)},t.prototype.recycleAsyncId=function(o,i,c){if(c===void 0&&(c=0),c!=null&&this.delay===c&&this.pending===!1)return i;rr.clearInterval(i)},t.prototype.execute=function(o,i){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var c=this._execute(o,i);if(c)return c;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(o,i){var c=!1,a;try{this.work(o)}catch(l){c=!0,a=l||new Error("Scheduled action threw falsy error")}if(c)return this.unsubscribe(),a},t.prototype.unsubscribe=function(){if(!this.closed){var o=this,i=o.id,c=o.scheduler,a=c.actions;this.work=this.state=this.scheduler=null,this.pending=!1,Kc(a,this),i!=null&&(this.id=this.recycleAsyncId(c,i,null)),this.delay=null,n.prototype.unsubscribe.call(this)}},t}(qm),oA={now:function(){return(oA.delegate||Date).now()},delegate:void 0},iA=function(){function n(t,o){o===void 0&&(o=n.now),this.schedulerActionCtor=t,this.now=o}return n.prototype.schedule=function(t,o,i){return o===void 0&&(o=0),new this.schedulerActionCtor(this,t).schedule(i,o)},n.now=oA.now,n}(),Vm=function(n){jt(t,n);function t(o,i){i===void 0&&(i=iA.now);var c=n.call(this,o,i)||this;return c.actions=[],c._active=!1,c._scheduled=void 0,c}return t.prototype.flush=function(o){var i=this.actions;if(this._active){i.push(o);return}var c;this._active=!0;do if(c=o.execute(o.state,o.delay))break;while(o=i.shift());if(this._active=!1,c){for(;o=i.shift();)o.unsubscribe();throw c}},t}(iA),Ym=new Vm($m),Xm=Ym;function Qm(n){return n instanceof Date&&!isNaN(n)}function rA(n,t,o){n===void 0&&(n=0),o===void 0&&(o=Xm);var i=-1;return t!=null&&(Zs(t)?o=t:i=t),new Xe(function(c){var a=Qm(n)?+n-o.now():n;a<0&&(a=0);var l=0;return o.schedule(function(){c.closed||(c.next(l++),0<=i?this.schedule(void 0,i):c.complete())},a)})}function cA(n){return zt(function(t,o){Mn(n).subscribe(new Wt(o,function(){return o.complete()},Ro)),!o.closed&&t.subscribe(o)})}function Zm(n){return n<=0?function(){return Xc}:zt(function(t,o){var i=0;t.subscribe(new Wt(o,function(c){++i<=n&&(o.next(c),n<=i&&o.complete())}))})}var cr=$(7100),Kt={};Kt.styleTagTransform=D(),Kt.setAttributes=he(),Kt.insert=Y().bind(null,"head"),Kt.domAPI=te(),Kt.insertStyleElement=G();var _y=P()(cr.A,Kt);const gy=cr.A&&cr.A.locals?cr.A.locals:void 0;var eB=(n=>(n.PENDING="pending",n.LOADED="loaded",n.LOADING="loading",n.ERROR="error",n))(eB||{});const nB=({imageUri:n})=>{const[t,o]=xn("pending");return an(()=>{async function c(){if(!n){o("error"),Fe.error("fetchIconImage: avatar image url is not available");return}if(t!=="pending")return;const a=()=>new Promise((l,s)=>{const A=new Image;A.onerror=f=>s(f),A.onload=()=>l(),A.src=n});try{o("loading"),await a(),o("loaded")}catch(l){Fe.error("fetchIconImage: failed to load avatar image",{error:l}),o("error")}}c()},[]),C("span",{children:t==="loaded"||t==="loading"?C("img",{className:"Avatar",src:n,draggable:!1}):C("div",{className:"Avatar",style:{width:"36px",height:"36px",backgroundColor:"var(--sk_foreground_low)"}})})},tB=()=>{const n=new Date;let t;try{t=n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch(o){Fe.warn("getTimestamp: Failed to get timestamp via toLocaleTimeString, try fallback",{error:o});try{t=new Intl.DateTimeFormat("default",{hour:"numeric",minute:"numeric"}).format(n),Fe.info("getTimestamp: Current locale info in system",{resolvedOptions:Intl.DateTimeFormat().resolvedOptions()})}catch(i){Fe.error("getTimestamp: Failed to get timestamp, skipping render timestamp",{error:i})}}return t},oB=n=>{const t=bo(g=>g.settings),{notificationTimeout:o,notificationAfterHoverTimeout:i}=t;let c=null;_c(()=>{if(!c)return;const g=Number.isSafeInteger(o)?o:6e3,b=Number.isSafeInteger(i)?i:2e3;if(Xo(t)){Fe.info("NotificationMessage: disabling dismiss timeout");return}const w=ir(c,"mouseleave"),m=ir(c,"mouseover"),I=Gm(rA(g).pipe(cA(m)),w.pipe(or(()=>rA(b).pipe(cA(m))))).pipe(Zm(1)).subscribe(()=>window.desktop.notifications.removeNotification(n.notification.id));return I.unsubscribe.bind(I)},[c,o,i,n.notification]);const a=()=>{const{id:g,teamId:b,msg:w,thread_ts:m,channel:I,trace_id:B}=n.notification;window.desktop.notifications.clickNotification({notificationId:g,channel:I,teamId:b,messageId:w,traceId:B,threadTimestamp:m}),Xi(n.notification,Jo.DESKTOP_NOTIFICATION_CLICK)},l=(g,b="",w)=>{const m=g||b,I=m.startsWith(`${w}: `)?m.replace(`${w}: `,""):m,B=er.sanitize(I,{USE_PROFILES:{html:!0}});return Array.isArray(er.removed)&&er.removed.length>0&&Fe.warn("getContent removed",{removed:er.removed}),B},{content:s,title:A,avatarImage:f,imageUri:u}=n.notification,{authorName:d}=y_(n.notification),E=l(s,A,d),y=tB();return an(()=>{Xi(n.notification,Jo.DESKTOP_NOTIFICATION_SUCCESS)},[]),C("div",{"data-testid":"notification-message",className:"Message",onClick:a,ref:g=>c=g,children:[C(nB,{imageUri:f}),C("div",{className:"Content",children:[C("h5",{children:[d," ",y?C("span",{className:"Timestamp",children:y}):null]}),C("p",{dangerouslySetInnerHTML:{__html:E}}),u?C("img",{src:u}):null]})]})},iB=n=>{const{notifications:t,showClose:o,name:i,id:c}=n,a=()=>{var f;const s=(f=(t!=null?t:[])[0])==null?void 0:f.teamId;return s||Fe.warn("renderOpenChannel: notification does not include workspaceId to open channel",{notifications:t}),C("a",{href:"#",className:"OpenChannel",onClick:()=>window.desktop.notifications.handleDeepLink({url:`slack://channel?team=${s}&id=${c}`}),children:C("h4",{children:i})})},l=()=>C("a",{href:"#",onClick:()=>t.forEach(A=>{window.desktop.notifications.removeNotification(A.id),Xi(A,Jo.DESKTOP_NOTIFICATION_DISMISSED)}),className:"Close",children:C("i",{className:"c-icon c-icon--times"})});return C("div",{className:"Channel",children:[C("header",{children:[i?a():C("a",{className:"OpenChannel"}),o?l():null]}),C("div",{className:"Messages",children:t.map(s=>C(oB,{notification:s},s.id))})]})},rB=(n,t)=>{const{webapp:o,workspaces:i}=t,c=Z_(o,n),a=c?c.theme:Fo,{titlebarBackground:l,titlebarTextColor:s}=a;(!l||!s)&&Fe.warn("buildTeamObject: team object missing properties",{id:n,theme:c.theme});const A=i[n];return A?{theme:{menu_bg:l!=null?l:Fo.titlebarBackground,text_color:s!=null?s:Fo.titlebarTextColor},team_name:A.name}:null},cB=n=>{const t=Object.keys(n),o=t.length>1;return t.map(i=>{const c=n[i]&&n[i].length>0&&C_(n[i][0]).channelName||"";return C(iB,{showClose:o,name:c,id:i,notifications:n[i]},i)})},aB=n=>{const t=bo(f=>f),{id:o,channels:i}=n,c=rB(o,t),a=()=>{const f=i?Object.keys(i):[],u={team:o};f.length>0?u.id=f[0]:Fe.warn("openTeam: Notification group contains no notification. Unable to navigate to channel.");const d=nm("channel",u);window.desktop.notifications.handleDeepLink({url:d}),Xo(t.settings)&&l()},l=()=>{for(const f of Object.keys(i))for(const u of i[f])window.desktop.notifications.removeNotification(u.id),Xi(u,Jo.DESKTOP_NOTIFICATION_DISMISSED)};if(!c)return null;const s=c&&c.theme.menu_bg?{color:c.theme.text_color}:{},A=c&&c.theme.menu_bg?{background:`linear-gradient(to bottom, ${c.theme.menu_bg} 40px, #fff 2%)`}:{};return C("div",{className:"Team",style:A,children:[C("header",{style:s,children:[C("a",{href:"#","data-testid":"open-team",className:"OpenTeam",onClick:a,children:[C("i",{className:"c-icon c-icon--vogue c-icon--inline"}),C("h3",{children:c.team_name})]}),C("a",{href:"#","data-testid":"close-notification",className:"Close",onClick:l,children:C("i",{className:"c-icon c-icon--times c-icon--inline"})})]}),C("div",{className:"Channels",children:cB(i)})]})},ar=(n,t)=>n.id===t.id,aA=()=>{const n=bo(B=>{const{notificationMaxItems:S,notifyPosition:W,userTheme:K}=B.settings,q=W.corner.split("_")[0]==="top";return{notificationMaxItems:S!==void 0?S:3,isTop:q,scaleFactor:Br(B.settings),userTheme:K}}),t=bo(B=>B.notifications.notifications),[o,i]=xn([]),c=_n([]);an(()=>{c.current=t});const[a,l]=xn({x:0,y:0,show:!1}),s=_n(null),A=Jt((B,S)=>f(!0),[a]);Wd({onResize:A,targetRef:s,skipOnMount:!0,handleWidth:!1});const f=(B=!1)=>{const S=s.current;if(!S)return;const W=S.offsetLeft*n.scaleFactor,K=S.offsetHeight*n.scaleFactor,q=o.length>0,ee=W!==a.x||K!==a.y;B&&ee&&W>0&&K>0?window.desktop.notifications.setNotificationsWindowShape({x:W,y:K,show:a.show}):B||(window.desktop.notifications.setNotificationsWindowShape({x:W,y:K,show:q}),l({x:W,y:K,show:q}))};_c(()=>f(),[o]),S_();const u=Ti(t,o,ar),d=Ti(c.current,t,ar),E=Math.max(0,o.length-d.length),y=Ti(t,o,ar).splice(0,n.notificationMaxItems-E),g=$f(o,y),b=ba(Ti(g,d,ar));Fe.debug("NotificationHost: Calculating notification items to render",{currentNotificationItemsQueue:t.map(B=>B.id),prevNotificationItemsQueue:c.current.map(B=>B.id),currentOnscreenItems:o.map(B=>B.id),remainingItemsInQueue:u.map(B=>B.id),removedItems:d.map(B=>B.id),itemsToAddOnScreen:y.map(B=>B.id),updatedItemsWithDismissed:g.map(B=>B.id),itemsShouldOnScreen:b.map(B=>B.id)}),y.length>0||d.length>0?qr(b,o)||(Fe.debug("NotificationHost: render new onscreen notification items"),i(b)):Fe.debug("NotificationHost: re-render triggered but no changes in onscreen notification items");const w={flexDirection:n.isTop?"column":"column-reverse"},m=B_(o),I=Object.entries(m).map(([B,S])=>C(Yd,{id:B,timeout:400,children:C(aB,{id:B,channels:S},B)}));return C("span",{className:"Notifications2018",children:C("div",{className:`NotificationHost NotificationHost--${n.userTheme}`,style:w,children:C(oh,{id:"NotificationHost-list",className:"NotificationHost-list",nodeRef:s,children:C("div",{ref:s,style:{width:"100%",height:"100%"},children:I})})})})};window.open=null,op(aA,"span")})(),hB=ur})()});pB();})();

//# sourceMappingURL=notifications.bundle.js.map
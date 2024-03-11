(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{7150:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/drm",function(){return n(6084)}])},6084:function(e,s,n){"use strict";n.r(s),n.d(s,{__toc:function(){return a}});var r=n(5893),o=n(2673),i=n(3393),t=n(2702);n(9128);var l=n(2643),c=n(2771);let a=[{depth:2,value:"Provide DRM data (only tested with http/https assets)",id:"provide-drm-data-only-tested-with-httphttps-assets"},{depth:3,value:"base64Certificate",id:"base64certificate"},{depth:3,value:"certificateUrl",id:"certificateurl"},{depth:3,value:"getLicense",id:"getlicense"},{depth:3,value:"headers",id:"headers"},{depth:3,value:"licenseServer",id:"licenseserver"},{depth:3,value:"type",id:"type"},{depth:3,value:"contentId",id:"contentid"},{depth:2,value:"Common Usage Scenarios",id:"common-usage-scenarios"},{depth:3,value:"Send cookies to license server",id:"send-cookies-to-license-server"},{depth:3,value:"Custom License Acquisition (only iOS for now)",id:"custom-license-acquisition-only-ios-for-now"}];function _createMdxContent(e){let s=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",strong:"strong",h2:"h2",code:"code",h3:"h3",br:"br",pre:"pre",span:"span"},(0,l.a)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{children:"DRM"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," DRM is not supported on visionOS yet."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"provide-drm-data-only-tested-with-httphttps-assets",children:"Provide DRM data (only tested with http/https assets)"}),"\n",(0,r.jsxs)(s.p,{children:["You can provide some configuration to allow DRM playback.\nThis feature will disable the use of ",(0,r.jsx)(s.code,{children:"TextureView"})," on Android."]}),"\n",(0,r.jsx)(s.p,{children:"DRM object allows this members:"}),"\n",(0,r.jsx)(s.h3,{id:"base64certificate",children:(0,r.jsx)(s.code,{children:"base64Certificate"})}),"\n",(0,r.jsx)(c.Z,{types:["iOS"]}),"\n",(0,r.jsxs)(s.p,{children:["Type: bool",(0,r.jsx)(s.br,{}),"\n","Default: false"]}),"\n",(0,r.jsx)(s.p,{children:"Whether or not the certificate url returns it on base64."}),"\n",(0,r.jsx)(s.h3,{id:"certificateurl",children:(0,r.jsx)(s.code,{children:"certificateUrl"})}),"\n",(0,r.jsx)(c.Z,{types:["iOS"]}),"\n",(0,r.jsxs)(s.p,{children:["Type: string",(0,r.jsx)(s.br,{}),"\n","Default: undefined"]}),"\n",(0,r.jsx)(s.p,{children:"URL to fetch a valid certificate for FairPlay."}),"\n",(0,r.jsx)(s.h3,{id:"getlicense",children:(0,r.jsx)(s.code,{children:"getLicense"})}),"\n",(0,r.jsx)(c.Z,{types:["iOS"]}),"\n",(0,r.jsxs)(s.p,{children:["Type: function",(0,r.jsx)(s.br,{}),"\n","Default: undefined"]}),"\n",(0,r.jsxs)(s.p,{children:["Rather than setting the ",(0,r.jsx)(s.code,{children:"licenseServer"})," url to get the license, you can manually get the license on the JS part, and send the result to the native part to configure FairplayDRM for the stream"]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"licenseServer"})," and ",(0,r.jsx)(s.code,{children:"headers"})," will be ignored. You will obtain as argument the ",(0,r.jsx)(s.code,{children:"SPC"}),"\n(as ASCII string, you will probably need to convert it to base 64) obtained from\nyour ",(0,r.jsx)(s.code,{children:"contentId"})," + the provided certificate via ",(0,r.jsx)(s.code,{children:"objc [loadingRequest streamingContentKeyRequestDataForApp:certificateData contentIdentifier:contentIdData options:nil error:&spcError]; "})]}),"\n",(0,r.jsxs)(s.p,{children:["Also, you will receive the ",(0,r.jsx)(s.code,{children:"contentId"})," and a ",(0,r.jsx)(s.code,{children:"licenseUrl"})," URL defined as ",(0,r.jsx)(s.code,{children:"loadingRequest.request.URL.absoluteString "})," or as the ",(0,r.jsx)(s.code,{children:"licenseServer"})," prop if it's passed."]}),"\n",(0,r.jsxs)(s.p,{children:["You should return on this method a ",(0,r.jsx)(s.code,{children:"CKC"})," in Base64, either by just returning it or returning a ",(0,r.jsx)(s.code,{children:"Promise"})," that resolves with the ",(0,r.jsx)(s.code,{children:"CKC"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"With this prop you can override the license acquisition flow, as an example:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"getLicense"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (spcString"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" contentId"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" licenseUrl) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"base64spc"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Base64"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(spcString);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"formData"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"FormData"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"formData"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".append"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'spc'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" base64spc);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`https://license.pallycon.com/ri/licenseManager.do`"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    method"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'POST'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    headers"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pallycon-customdata-v2'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'d2VpcmRiYXNlNjRzdHJpbmcgOlAgRGFuaWVsIE1hcmnxbyB3YXMgaGVyZQ=='"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Content-Type'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'application/x-www-form-urlencoded'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    body"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" formData"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  })"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((response) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".text"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((response) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" response;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    })"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".catch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((error) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".error"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Error'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" error);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    });"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})})]})}),"\n",(0,r.jsx)(s.h3,{id:"headers",children:(0,r.jsx)(s.code,{children:"headers"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS"]}),"\n",(0,r.jsxs)(s.p,{children:["Type: Object",(0,r.jsx)(s.br,{}),"\n","Default: undefined"]}),"\n",(0,r.jsx)(s.p,{children:"You can customize headers send to the licenseServer."}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"source"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    uri"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://media.axprod.net/TestVectors/v7-MultiDRM-SingleKey/Manifest_1080p.mpd'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"drm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"{{"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DRMType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"WIDEVINE"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      licenseServer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://drm-widevine-licensing.axtest.net/AcquireLicense'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      headers"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"          "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'X-AxDRM-Message'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJjb21fa2V5X2lkIjoiYjMzNjRlYjUtNTFmNi00YWUzLThjOTgtMzNjZWQ1ZTMxYzc4IiwibWVzc2FnZSI6eyJ0eXBlIjoiZW50aXRsZW1lbnRfbWVzc2FnZSIsImZpcnN0X3BsYXlfZXhwaXJhdGlvbiI6NjAsInBsYXlyZWFkeSI6eyJyZWFsX3RpbWVfZXhwaXJhdGlvbiI6dHJ1ZX0sImtleXMiOlt7ImlkIjoiOWViNDA1MGQtZTQ0Yi00ODAyLTkzMmUtMjdkNzUwODNlMjY2IiwiZW5jcnlwdGVkX2tleSI6ImxLM09qSExZVzI0Y3Iya3RSNzRmbnc9PSJ9XX19.FAbIiPxX8BHi9RwfzD7Yn-wugU19ghrkBFKsaCPrZmU'"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})})]})}),"\n",(0,r.jsx)(s.h3,{id:"licenseserver",children:(0,r.jsx)(s.code,{children:"licenseServer"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS"]}),"\n",(0,r.jsxs)(s.p,{children:["Type: string",(0,r.jsx)(s.br,{}),"\n","Default: false"]}),"\n",(0,r.jsx)(s.p,{children:"The URL pointing to the licenseServer that will provide the authorization to play the protected stream."}),"\n",(0,r.jsx)(s.h3,{id:"type",children:(0,r.jsx)(s.code,{children:"type"})}),"\n",(0,r.jsx)(c.Z,{types:["Android","iOS"]}),"\n",(0,r.jsxs)(s.p,{children:["Type: DRMType",(0,r.jsx)(s.br,{}),"\n","Default: undefined"]}),"\n",(0,r.jsx)(s.p,{children:"You can specify the DRM type, either by string or using the exported DRMType enum.\nValid values are, for Android: DRMType.WIDEVINE / DRMType.PLAYREADY / DRMType.CLEARKEY.\nfor iOS: DRMType.FAIRPLAY"}),"\n",(0,r.jsx)(s.h3,{id:"contentid",children:(0,r.jsx)(s.code,{children:"contentId"})}),"\n",(0,r.jsx)(c.Z,{types:["iOS"]}),"\n",(0,r.jsxs)(s.p,{children:["Type: string",(0,r.jsx)(s.br,{}),"\n","Default: undefined"]}),"\n",(0,r.jsxs)(s.p,{children:["Specify the content id of the stream, otherwise it will take the host value from ",(0,r.jsx)(s.code,{children:"loadingRequest.request.URL.host"})," (f.e: ",(0,r.jsx)(s.code,{children:"skd://testAsset"})," -> will take ",(0,r.jsx)(s.code,{children:"testAsset"}),")"]}),"\n",(0,r.jsx)(s.h2,{id:"common-usage-scenarios",children:"Common Usage Scenarios"}),"\n",(0,r.jsx)(s.h3,{id:"send-cookies-to-license-server",children:"Send cookies to license server"}),"\n",(0,r.jsxs)(s.p,{children:["You can send Cookies to the license server via ",(0,r.jsx)(s.code,{children:"headers"})," prop. Example:"]}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"drm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DRMType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"WIDEVINE"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    licenseServer"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://drm-widevine-licensing.axtest.net/AcquireLicense'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    headers"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Cookie'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:": "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'PHPSESSID=etcetc; csrftoken=mytoken; _gat=1; foo=bar'"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,r.jsx)(s.h3,{id:"custom-license-acquisition-only-ios-for-now",children:"Custom License Acquisition (only iOS for now)"}),"\n",(0,r.jsx)(s.pre,{"data-language":"js","data-theme":"default",children:(0,r.jsxs)(s.code,{"data-language":"js","data-theme":"default",children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"drm"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    type"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"DRMType"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"FAIRPLAY"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    getLicense"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (spcString) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"base64spc"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Base64"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".encode"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(spcString);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"fetch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'YOUR LICENSE SERVER HERE'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            method"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'POST'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            headers"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Content-Type'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'application/json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                Accept"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'application/json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            body"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"JSON"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".stringify"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                getFairplayLicense"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    foo"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'bar'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    spcMessage"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" base64spc"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            })"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        })"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(response "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".json"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"())"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".then"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((response) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (response "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".getFairplayLicenseResponse"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"getFairplayLicenseResponse"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".ckcResponse) {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                    "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"response"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"getFairplayLicenseResponse"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".ckcResponse;"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                }"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"throw"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Error"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'No correct response'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            })"})}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".catch"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"((error) "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"                "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".error"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'CKC error'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" error);"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"            });"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})]})}let h={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.a)(),e.components);return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/component/drm.mdx",route:"/component/drm",timestamp:170991033e4,pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/react-native-video/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",ads:"Ads",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"ads",route:"/component/ads"},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging","new-arch":"New Architecture"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"misc",route:"/other/misc"},{kind:"MdxPage",name:"new-arch",route:"/other/new-arch"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"DRM",headings:a},pageNextRoute:"/component/drm",nextraLayout:i.ZP,themeConfig:t.Z};s.default=(0,o.j)(h)},2771:function(e,s,n){"use strict";var r=n(5893);n(7294);var o=n(7672),i=n.n(o);s.Z=function(e){let{types:s}=e;return(0,r.jsxs)("p",{className:i().paragraphStyle,children:[1!==s.length||s.includes("All")?"Platforms:":"Platform:",(0,r.jsx)("span",{className:i().spanStyle,children:" "+s.join(" | ")})]})}},2702:function(e,s,n){"use strict";var r=n(5893);n(7294),s.Z={head:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"language",content:"en"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,r.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,r.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,r.jsx)("meta",{name:"og:description",content:"A Video component for React Native"}),(0,r.jsx)("meta",{name:"og:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:title",content:"React Native Video"}),(0,r.jsx)("meta",{name:"twitter:description",content:"A Video component for React Native"}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://react-native-video.github.io/react-native-video/thumbnail.jpg"}),(0,r.jsx)("meta",{name:"twitter:image:alt",content:"React Native Video"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:!0}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap",rel:"stylesheet"})]}),logo:(0,r.jsxs)("span",{children:["\uD83C\uDFAC ",(0,r.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/react-native-video/react-native-video"},docsRepositoryBase:"https://github.com/react-native-video/react-native-video/tree/master/docs/",footer:{text:(0,r.jsxs)("span",{children:["Built with love ❤️ by ",(0,r.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}},7672:function(e){e.exports={paragraphStyle:"PlatformsList_paragraphStyle__v_l36",spanStyle:"PlatformsList_spanStyle__ISLBH"}},5789:function(){}},function(e){e.O(0,[774,890,888,179],function(){return e(e.s=7150)}),_N_E=e.O()}]);
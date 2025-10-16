import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dh9dJKyG.js";import"./preload-helper-PPVm8Dsz.js";const m={"label-small":{fontFamily:"Circular Std",fontWeight:450,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"headings-h5":{fontFamily:"Roboto",fontWeight:400,fontSize:"23px",lineHeight:"32px",letterSpacing:"normal",textTransform:"none"},"label-large":{fontFamily:"Circular Std",fontWeight:450,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"headings-h3":{fontFamily:"Roboto",fontWeight:400,fontSize:"32px",lineHeight:"40px",letterSpacing:"normal",textTransform:"none"},"label-medium":{fontFamily:"Circular Std",fontWeight:450,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h7":{fontFamily:"Roboto",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h4":{fontFamily:"Roboto",fontWeight:400,fontSize:"28px",lineHeight:"36px",letterSpacing:"normal",textTransform:"none"},"label-large strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"headings-h6":{fontFamily:"Roboto",fontWeight:400,fontSize:"17px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"capitalized text-large strong":{fontFamily:"Roboto",fontWeight:600,fontSize:"12px",lineHeight:"16px",letterSpacing:"0.18px",textTransform:"uppercase"},"capitalized text-large":{fontFamily:"Roboto",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"0.18px",textTransform:"uppercase"},"capitalized text-small strong":{fontFamily:"Roboto",fontWeight:600,fontSize:"10px",lineHeight:"12px",letterSpacing:"0.15px",textTransform:"uppercase"},"headings-h2":{fontFamily:"Roboto",fontWeight:400,fontSize:"36px",lineHeight:"44px",letterSpacing:"normal",textTransform:"none"},"label link-small link":{fontFamily:"Roboto",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label link-x small link":{fontFamily:"Roboto",fontWeight:500,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label-small strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label-medium strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h1":{fontFamily:"Roboto",fontWeight:400,fontSize:"45px",lineHeight:"52px",letterSpacing:"normal",textTransform:"none"},"label link-medium link":{fontFamily:"Roboto",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"label link-large link":{fontFamily:"Roboto",fontWeight:500,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"body-small":{fontFamily:"Roboto",fontWeight:400,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"body-medium":{fontFamily:"Roboto",fontWeight:400,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"label-x small":{fontFamily:"Circular Std",fontWeight:450,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"body-large":{fontFamily:"Roboto",fontWeight:400,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"label-x small strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"}},u="_typography_1aqgv_1",v={typography:u},o=({variant:c,as:x="p",children:y,className:h="",color:f})=>{const a=m[c],b={fontFamily:(g=>g==="Circular Std"?"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif":`'${g}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)(a.fontFamily),fontWeight:a.fontWeight,fontSize:a.fontSize,lineHeight:a.lineHeight,letterSpacing:a.letterSpacing!=="normal"?a.letterSpacing:void 0,textTransform:a.textTransform!=="none"?a.textTransform:void 0,color:f||"inherit"};return e.jsx(x,{className:`${v.typography} ${h}`.trim(),style:b,children:y})};o.displayName="Typography";o.__docgenInfo={description:"Typography component that applies Figma design system text styles",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:"keyof typeof typography",elements:[{name:"literal",value:"'label-small'"},{name:"literal",value:"'headings-h5'"},{name:"literal",value:"'label-large'"},{name:"literal",value:"'headings-h3'"},{name:"literal",value:"'label-medium'"},{name:"literal",value:"'headings-h7'"},{name:"literal",value:"'headings-h4'"},{name:"literal",value:"'label-large strong'"},{name:"literal",value:"'headings-h6'"},{name:"literal",value:"'capitalized text-large strong'"},{name:"literal",value:"'capitalized text-large'"},{name:"literal",value:"'capitalized text-small strong'"},{name:"literal",value:"'headings-h2'"},{name:"literal",value:"'label link-small link'"},{name:"literal",value:"'label link-x small link'"},{name:"literal",value:"'label-small strong'"},{name:"literal",value:"'label-medium strong'"},{name:"literal",value:"'headings-h1'"},{name:"literal",value:"'label link-medium link'"},{name:"literal",value:"'label link-large link'"},{name:"literal",value:"'body-small'"},{name:"literal",value:"'body-medium'"},{name:"literal",value:"'label-x small'"},{name:"literal",value:"'body-large'"},{name:"literal",value:"'label-x small strong'"}]},description:"The typography variant to use from the design system"},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"The HTML element to render",defaultValue:{value:"'p'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Text color"}}};const F={title:"Design System/Typography",component:o,parameters:{layout:"padded",docs:{description:{component:`
The Typography component allows users to create visually appealing text with consistent styling across the design system. It supports multiple type styles including headings (H1-H7), body text, labels, and links.

The system uses two font families: Roboto for headings and display text, and Circular Std for body text, labels, and UI elements. Each style comes with predefined sizes and weights to ensure clear visual hierarchy and optimal readability.
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:Object.keys(m),description:"Typography variant from Figma design system"},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div","label"],description:"HTML element to render"},color:{control:"color",description:"Text color"}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(o,{variant:"headings-h2",as:"h2",children:"Typography System"}),e.jsx(o,{variant:"body-large",children:"A comprehensive typography system using Roboto for headings and Circular Std for body text, creating clear visual hierarchy and excellent readability."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{variant:"headings-h4",as:"h3",children:"Section Heading"}),e.jsx(o,{variant:"body-medium",children:"This is body text at the medium size, perfect for most content and reading experiences."}),e.jsx(o,{variant:"label-medium strong",as:"label",children:"Form Label"})]})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{marginBottom:"8px",padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"8px",color:"#1f2937"},children:"Roboto Font Family"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",margin:0},children:"Used for headings and display text"})]}),e.jsx(o,{variant:"headings-h1",as:"h1",children:"H1 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h2",as:"h2",children:"H2 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h3",as:"h3",children:"H3 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h4",as:"h4",children:"H4 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h5",as:"h5",children:"H5 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h6",as:"h6",children:"H6 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h7",as:"h6",children:"H7 - The quick brown fox jumps over the lazy dog"})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"8px",color:"#1f2937"},children:"Circular Std Font Family"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",margin:0},children:"Used for body text and UI elements"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx(o,{variant:"body-large",children:"Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}),e.jsx("p",{style:{fontSize:"12px",fontFamily:"Circular Std",color:"#6b7280",marginTop:"8px",margin:0},children:"Perfect for important content and introductory paragraphs"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx(o,{variant:"body-medium",children:"Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{style:{fontSize:"12px",fontFamily:"Circular Std",color:"#6b7280",marginTop:"8px",margin:0},children:"Default body text for most content"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx(o,{variant:"body-small",children:"Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{fontSize:"12px",fontFamily:"Circular Std",color:"#6b7280",marginTop:"8px",margin:0},children:"For secondary information and captions"})]})]})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"8px",color:"#1f2937"},children:"Label Styles"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",margin:0},children:"For form labels, UI components, and interactive elements"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#4b5563"},children:"Regular Weight"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"label-large",children:"Label Large"}),e.jsx(o,{variant:"label-medium",children:"Label Medium"}),e.jsx(o,{variant:"label-small",children:"Label Small"}),e.jsx(o,{variant:"label-x small",children:"Label X Small"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#4b5563"},children:"Strong Weight"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"label-large strong",children:"Label Large Strong"}),e.jsx(o,{variant:"label-medium strong",children:"Label Medium Strong"}),e.jsx(o,{variant:"label-small strong",children:"Label Small Strong"}),e.jsx(o,{variant:"label-x small strong",children:"Label X Small Strong"})]})]})]})]})},n={args:{variant:"headings-h2",as:"h2",children:"The quick brown fox jumps over the lazy dog"}},d={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",maxWidth:"1200px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#15803d"},children:"✅ Do's"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#15803d"},children:"Follow heading hierarchy"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"8px"},children:[e.jsx(o,{variant:"headings-h2",as:"h2",children:"Page Title (H2)"}),e.jsx(o,{variant:"headings-h4",as:"h3",children:"Section (H4)"}),e.jsx(o,{variant:"headings-h6",as:"h4",children:"Subsection (H6)"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",margin:0},children:"Maintain logical heading order for accessibility"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#15803d"},children:"Use appropriate text sizes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"8px"},children:[e.jsx(o,{variant:"body-large",children:"Important content in large size"}),e.jsx(o,{variant:"body-medium",children:"Regular content in medium"}),e.jsx(o,{variant:"body-small",children:"Secondary info in small"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",margin:0},children:"Match text size to content importance"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#15803d"},children:"Ensure good contrast"}),e.jsx("div",{style:{marginBottom:"8px"},children:e.jsx(o,{variant:"body-medium",color:"#1f2937",children:"Dark text on light background"})}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",margin:0},children:"Meet WCAG contrast requirements for readability"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#991b1b"},children:"❌ Don'ts"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#991b1b"},children:"Skip heading levels"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"8px",opacity:.7},children:[e.jsx(o,{variant:"headings-h1",children:"Title (H1)"}),e.jsx(o,{variant:"headings-h5",children:"❌ Skipped to H5"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"This breaks screen reader navigation and hierarchy"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#991b1b"},children:"Mix too many text sizes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",marginBottom:"8px",opacity:.7},children:[e.jsx(o,{variant:"body-large",children:"Large text"}),e.jsx(o,{variant:"label-x small",children:"Then tiny text"}),e.jsx(o,{variant:"headings-h3",children:"Then huge text"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"Creates visual chaos and poor readability"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#991b1b"},children:"Use low contrast text"}),e.jsx("div",{style:{marginBottom:"8px",opacity:.7},children:e.jsx(o,{variant:"body-medium",color:"#d1d5db",children:"Light gray on white background"})}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"Fails accessibility standards and hard to read"})]})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"Capitalized Text"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"capitalized text-large",children:"Capitalized Text Large"}),e.jsx(o,{variant:"capitalized text-large strong",children:"Capitalized Text Large Strong"}),e.jsx(o,{variant:"capitalized text-small strong",children:"Capitalized Text Small Strong"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"Link Styles"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"label link-large link",as:"a",color:"#6baa32",children:"Large Link"}),e.jsx(o,{variant:"label link-medium link",as:"a",color:"#6baa32",children:"Medium Link"}),e.jsx(o,{variant:"label link-small link",as:"a",color:"#6baa32",children:"Small Link"}),e.jsx(o,{variant:"label link-x small link",as:"a",color:"#6baa32",children:"X Small Link"})]})]})]})},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"Font Family Usage"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontFamily:"Roboto",fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#15803d"},children:"Roboto"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",marginBottom:"16px"},children:"Used for headings and display text"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"headings-h3",children:"Page Title"}),e.jsx(o,{variant:"headings-h5",children:"Section Header"}),e.jsx(o,{variant:"headings-h7",children:"Subsection"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontFamily:"Circular Std",fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#15803d"},children:"Circular Std"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",marginBottom:"16px"},children:"Used for body text and UI elements"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"body-medium",children:"This is body text for reading"}),e.jsx(o,{variant:"label-medium strong",children:"Form Label"}),e.jsx(o,{variant:"label-small",children:"Helper text"})]})]})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="headings-h2" as="h2">
        Typography System
      </Typography>
      <Typography variant="body-large">
        A comprehensive typography system using Roboto for headings and Circular Std for body text, creating clear visual hierarchy and excellent readability.
      </Typography>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headings-h4" as="h3">Section Heading</Typography>
        <Typography variant="body-medium">
          This is body text at the medium size, perfect for most content and reading experiences.
        </Typography>
        <Typography variant="label-medium strong" as="label">Form Label</Typography>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      marginBottom: '8px',
      padding: '20px',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
        <h3 style={{
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        marginBottom: '8px',
        color: '#1f2937'
      }}>Roboto Font Family</h3>
        <p style={{
        fontSize: '14px',
        fontFamily: 'Circular Std',
        color: '#6b7280',
        margin: 0
      }}>Used for headings and display text</p>
      </div>
      <Typography variant="headings-h1" as="h1">
        H1 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h2" as="h2">
        H2 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h3" as="h3">
        H3 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h4" as="h4">
        H4 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h5" as="h5">
        H5 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h6" as="h6">
        H6 - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="headings-h7" as="h6">
        H7 - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      padding: '20px',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
        <h3 style={{
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        marginBottom: '8px',
        color: '#1f2937'
      }}>Circular Std Font Family</h3>
        <p style={{
        fontSize: '14px',
        fontFamily: 'Circular Std',
        color: '#6b7280',
        margin: 0
      }}>Used for body text and UI elements</p>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        padding: '20px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px'
      }}>
          <Typography variant="body-large">
            Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Typography>
          <p style={{
          fontSize: '12px',
          fontFamily: 'Circular Std',
          color: '#6b7280',
          marginTop: '8px',
          margin: 0
        }}>Perfect for important content and introductory paragraphs</p>
        </div>
        <div style={{
        padding: '20px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px'
      }}>
          <Typography variant="body-medium">
            Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Typography>
          <p style={{
          fontSize: '12px',
          fontFamily: 'Circular Std',
          color: '#6b7280',
          marginTop: '8px',
          margin: 0
        }}>Default body text for most content</p>
        </div>
        <div style={{
        padding: '20px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px'
      }}>
          <Typography variant="body-small">
            Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <p style={{
          fontSize: '12px',
          fontFamily: 'Circular Std',
          color: '#6b7280',
          marginTop: '8px',
          margin: 0
        }}>For secondary information and captions</p>
        </div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      padding: '20px',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
        <h3 style={{
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        marginBottom: '8px',
        color: '#1f2937'
      }}>Label Styles</h3>
        <p style={{
        fontSize: '14px',
        fontFamily: 'Circular Std',
        color: '#6b7280',
        margin: 0
      }}>For form labels, UI components, and interactive elements</p>
      </div>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }}>
        <div style={{
        padding: '20px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px'
      }}>
          <h4 style={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          marginBottom: '12px',
          color: '#4b5563'
        }}>Regular Weight</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Typography variant="label-large">Label Large</Typography>
            <Typography variant="label-medium">Label Medium</Typography>
            <Typography variant="label-small">Label Small</Typography>
            <Typography variant="label-x small">Label X Small</Typography>
          </div>
        </div>
        <div style={{
        padding: '20px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px'
      }}>
          <h4 style={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          marginBottom: '12px',
          color: '#4b5563'
        }}>Strong Weight</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Typography variant="label-large strong">Label Large Strong</Typography>
            <Typography variant="label-medium strong">Label Medium Strong</Typography>
            <Typography variant="label-small strong">Label Small Strong</Typography>
            <Typography variant="label-x small strong">Label X Small Strong</Typography>
          </div>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'headings-h2',
    as: 'h2',
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    maxWidth: '1200px'
  }}>
      {/* DO's Column */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <h3 style={{
        marginBottom: '8px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#15803d'
      }}>✅ Do's</h3>
        
        {/* Proper Hierarchy - Good */}
        <div style={{
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px'
      }}>
          <h4 style={{
          marginBottom: '12px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#15803d'
        }}>Follow heading hierarchy</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '8px'
        }}>
            <Typography variant="headings-h2" as="h2">Page Title (H2)</Typography>
            <Typography variant="headings-h4" as="h3">Section (H4)</Typography>
            <Typography variant="headings-h6" as="h4">Subsection (H6)</Typography>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#166534',
          margin: 0
        }}>Maintain logical heading order for accessibility</p>
        </div>

        {/* Appropriate sizes - Good */}
        <div style={{
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px'
      }}>
          <h4 style={{
          marginBottom: '12px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#15803d'
        }}>Use appropriate text sizes</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '8px'
        }}>
            <Typography variant="body-large">Important content in large size</Typography>
            <Typography variant="body-medium">Regular content in medium</Typography>
            <Typography variant="body-small">Secondary info in small</Typography>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#166534',
          margin: 0
        }}>Match text size to content importance</p>
        </div>

        {/* Good contrast - Good */}
        <div style={{
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px'
      }}>
          <h4 style={{
          marginBottom: '12px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#15803d'
        }}>Ensure good contrast</h4>
          <div style={{
          marginBottom: '8px'
        }}>
            <Typography variant="body-medium" color="#1f2937">Dark text on light background</Typography>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#166534',
          margin: 0
        }}>Meet WCAG contrast requirements for readability</p>
        </div>
      </div>

      {/* DON'T Column */}
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <h3 style={{
        marginBottom: '8px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#991b1b'
      }}>❌ Don'ts</h3>
        
        {/* Skipping levels - Bad */}
        <div style={{
        padding: '20px',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '12px'
      }}>
          <h4 style={{
          marginBottom: '12px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#991b1b'
        }}>Skip heading levels</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          marginBottom: '8px',
          opacity: 0.7
        }}>
            <Typography variant="headings-h1">Title (H1)</Typography>
            <Typography variant="headings-h5">❌ Skipped to H5</Typography>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#991b1b',
          margin: 0
        }}>This breaks screen reader navigation and hierarchy</p>
        </div>

        {/* Too many sizes - Bad */}
        <div style={{
        padding: '20px',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '12px'
      }}>
          <h4 style={{
          marginBottom: '12px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#991b1b'
        }}>Mix too many text sizes</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          marginBottom: '8px',
          opacity: 0.7
        }}>
            <Typography variant="body-large">Large text</Typography>
            <Typography variant="label-x small">Then tiny text</Typography>
            <Typography variant="headings-h3">Then huge text</Typography>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#991b1b',
          margin: 0
        }}>Creates visual chaos and poor readability</p>
        </div>

        {/* Poor contrast - Bad */}
        <div style={{
        padding: '20px',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '12px'
      }}>
          <h4 style={{
          marginBottom: '12px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#991b1b'
        }}>Use low contrast text</h4>
          <div style={{
          marginBottom: '8px',
          opacity: 0.7
        }}>
            <Typography variant="body-medium" color="#d1d5db">Light gray on white background</Typography>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#991b1b',
          margin: 0
        }}>Fails accessibility standards and hard to read</p>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div style={{
      padding: '20px',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
        <h3 style={{
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        marginBottom: '16px',
        color: '#1f2937'
      }}>Capitalized Text</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Typography variant="capitalized text-large">Capitalized Text Large</Typography>
          <Typography variant="capitalized text-large strong">Capitalized Text Large Strong</Typography>
          <Typography variant="capitalized text-small strong">Capitalized Text Small Strong</Typography>
        </div>
      </div>

      <div style={{
      padding: '20px',
      backgroundColor: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '12px'
    }}>
        <h3 style={{
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        marginBottom: '16px',
        color: '#1f2937'
      }}>Link Styles</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Typography variant="label link-large link" as="a" color="#6baa32">
            Large Link
          </Typography>
          <Typography variant="label link-medium link" as="a" color="#6baa32">
            Medium Link
          </Typography>
          <Typography variant="label link-small link" as="a" color="#6baa32">
            Small Link
          </Typography>
          <Typography variant="label link-x small link" as="a" color="#6baa32">
            X Small Link
          </Typography>
        </div>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <h3 style={{
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        marginBottom: '16px',
        color: '#1f2937'
      }}>Font Family Usage</h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px'
      }}>
          <div style={{
          padding: '20px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px'
        }}>
            <h4 style={{
            fontFamily: 'Roboto',
            fontSize: '18px',
            fontWeight: '500',
            marginBottom: '12px',
            color: '#15803d'
          }}>Roboto</h4>
            <p style={{
            fontSize: '14px',
            fontFamily: 'Circular Std',
            color: '#166534',
            marginBottom: '16px'
          }}>Used for headings and display text</p>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
              <Typography variant="headings-h3">Page Title</Typography>
              <Typography variant="headings-h5">Section Header</Typography>
              <Typography variant="headings-h7">Subsection</Typography>
            </div>
          </div>
          
          <div style={{
          padding: '20px',
          backgroundColor: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: '12px'
        }}>
            <h4 style={{
            fontFamily: 'Circular Std',
            fontSize: '18px',
            fontWeight: '500',
            marginBottom: '12px',
            color: '#15803d'
          }}>Circular Std</h4>
            <p style={{
            fontSize: '14px',
            fontFamily: 'Circular Std',
            color: '#166534',
            marginBottom: '16px'
          }}>Used for body text and UI elements</p>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
              <Typography variant="body-medium">This is body text for reading</Typography>
              <Typography variant="label-medium strong">Form Label</Typography>
              <Typography variant="label-small">Helper text</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};const k=["Example","Headings","BodyText","Labels","Playground","DosAndDonts","SpecializedText","FontShowcase"];export{r as BodyText,d as DosAndDonts,i as Example,p as FontShowcase,t as Headings,l as Labels,n as Playground,s as SpecializedText,k as __namedExportsOrder,F as default};

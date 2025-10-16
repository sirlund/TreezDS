import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DwXjYd5z.js";import"./preload-helper-PPVm8Dsz.js";const m={"label-small":{fontFamily:"Circular Std",fontWeight:450,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"headings-h5":{fontFamily:"Roboto",fontWeight:400,fontSize:"23px",lineHeight:"32px",letterSpacing:"normal",textTransform:"none"},"label-large":{fontFamily:"Circular Std",fontWeight:450,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"headings-h3":{fontFamily:"Roboto",fontWeight:400,fontSize:"32px",lineHeight:"40px",letterSpacing:"normal",textTransform:"none"},"label-medium":{fontFamily:"Circular Std",fontWeight:450,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h7":{fontFamily:"Roboto",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h4":{fontFamily:"Roboto",fontWeight:400,fontSize:"28px",lineHeight:"36px",letterSpacing:"normal",textTransform:"none"},"label-large strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"headings-h6":{fontFamily:"Roboto",fontWeight:400,fontSize:"17px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"capitalized text-large strong":{fontFamily:"Roboto",fontWeight:600,fontSize:"12px",lineHeight:"16px",letterSpacing:"0.18px",textTransform:"uppercase"},"capitalized text-large":{fontFamily:"Roboto",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"0.18px",textTransform:"uppercase"},"capitalized text-small strong":{fontFamily:"Roboto",fontWeight:600,fontSize:"10px",lineHeight:"12px",letterSpacing:"0.15px",textTransform:"uppercase"},"headings-h2":{fontFamily:"Roboto",fontWeight:400,fontSize:"36px",lineHeight:"44px",letterSpacing:"normal",textTransform:"none"},"label link-small link":{fontFamily:"Roboto",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label link-x small link":{fontFamily:"Roboto",fontWeight:500,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label-small strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label-medium strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h1":{fontFamily:"Roboto",fontWeight:400,fontSize:"45px",lineHeight:"52px",letterSpacing:"normal",textTransform:"none"},"label link-medium link":{fontFamily:"Roboto",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"label link-large link":{fontFamily:"Roboto",fontWeight:500,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"body-small":{fontFamily:"Roboto",fontWeight:400,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"body-medium":{fontFamily:"Roboto",fontWeight:400,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"label-x small":{fontFamily:"Circular Std",fontWeight:450,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"body-large":{fontFamily:"Roboto",fontWeight:400,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"label-x small strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"}},b="_typography_1aqgv_1",u={typography:b},o=({variant:g,as:x="p",children:c,className:y="",color:h})=>{const a=m[g],f={fontFamily:(p=>p==="Circular Std"?"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif":`'${p}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)(a.fontFamily),fontWeight:a.fontWeight,fontSize:a.fontSize,lineHeight:a.lineHeight,letterSpacing:a.letterSpacing!=="normal"?a.letterSpacing:void 0,textTransform:a.textTransform!=="none"?a.textTransform:void 0,color:h||"inherit"};return e.jsx(x,{className:`${u.typography} ${y}`.trim(),style:f,children:c})};o.displayName="Typography";o.__docgenInfo={description:"Typography component that applies Figma design system text styles",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:"keyof typeof typography",elements:[{name:"literal",value:"'label-small'"},{name:"literal",value:"'headings-h5'"},{name:"literal",value:"'label-large'"},{name:"literal",value:"'headings-h3'"},{name:"literal",value:"'label-medium'"},{name:"literal",value:"'headings-h7'"},{name:"literal",value:"'headings-h4'"},{name:"literal",value:"'label-large strong'"},{name:"literal",value:"'headings-h6'"},{name:"literal",value:"'capitalized text-large strong'"},{name:"literal",value:"'capitalized text-large'"},{name:"literal",value:"'capitalized text-small strong'"},{name:"literal",value:"'headings-h2'"},{name:"literal",value:"'label link-small link'"},{name:"literal",value:"'label link-x small link'"},{name:"literal",value:"'label-small strong'"},{name:"literal",value:"'label-medium strong'"},{name:"literal",value:"'headings-h1'"},{name:"literal",value:"'label link-medium link'"},{name:"literal",value:"'label link-large link'"},{name:"literal",value:"'body-small'"},{name:"literal",value:"'body-medium'"},{name:"literal",value:"'label-x small'"},{name:"literal",value:"'body-large'"},{name:"literal",value:"'label-x small strong'"}]},description:"The typography variant to use from the design system"},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"The HTML element to render",defaultValue:{value:"'p'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Text color"}}};const z={title:"Design System/Typography",component:o,parameters:{layout:"padded",docs:{description:{component:`
# Typography System

A comprehensive typography system using two carefully selected fonts to create clear visual hierarchy and excellent readability.

## Font Families

- **Roboto** - Used for headings and display text for strong visual impact
- **Circular Std** - Used for labels, body text, and UI elements for optimal readability

## Type Scale

- **Headings (H1-H7)** - Roboto font for clear hierarchy and emphasis
- **Body Text** - Circular Std in large, medium, and small sizes
- **Labels** - Circular Std for form labels and UI text
- **Links** - Circular Std with appropriate styling for interactive elements

## ✅ Do's

- Use headings (H1-H7) to establish clear content hierarchy
- Choose body text sizes based on content importance and reading distance
- Use label styles for form elements and UI components
- Maintain consistent line spacing for readability
- Combine font weights appropriately (regular/strong)

## ❌ Don'ts

- Don't skip heading levels (e.g., H1 to H3 without H2)
- Don't use too many different text sizes in one interface
- Don't use small text for important information
- Don't mix fonts outside the established system
- Don't use text that's too light against light backgrounds

## Accessibility

- All text meets WCAG contrast requirements
- Semantic HTML elements support screen readers
- Consistent spacing improves readability for all users
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:Object.keys(m),description:"Typography variant from Figma design system"},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div","label"],description:"HTML element to render"},color:{control:"color",description:"Text color"}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{marginBottom:"8px",padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"8px",color:"#1f2937"},children:"Roboto Font Family"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",margin:0},children:"Used for headings and display text"})]}),e.jsx(o,{variant:"headings-h1",as:"h1",children:"H1 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h2",as:"h2",children:"H2 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h3",as:"h3",children:"H3 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h4",as:"h4",children:"H4 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h5",as:"h5",children:"H5 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h6",as:"h6",children:"H6 - The quick brown fox jumps over the lazy dog"}),e.jsx(o,{variant:"headings-h7",as:"h6",children:"H7 - The quick brown fox jumps over the lazy dog"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"8px",color:"#1f2937"},children:"Circular Std Font Family"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",margin:0},children:"Used for body text and UI elements"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx(o,{variant:"body-large",children:"Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}),e.jsx("p",{style:{fontSize:"12px",fontFamily:"Circular Std",color:"#6b7280",marginTop:"8px",margin:0},children:"Perfect for important content and introductory paragraphs"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx(o,{variant:"body-medium",children:"Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{style:{fontSize:"12px",fontFamily:"Circular Std",color:"#6b7280",marginTop:"8px",margin:0},children:"Default body text for most content"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx(o,{variant:"body-small",children:"Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("p",{style:{fontSize:"12px",fontFamily:"Circular Std",color:"#6b7280",marginTop:"8px",margin:0},children:"For secondary information and captions"})]})]})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"8px",color:"#1f2937"},children:"Label Styles"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",margin:0},children:"For form labels, UI components, and interactive elements"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#4b5563"},children:"Regular Weight"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"label-large",children:"Label Large"}),e.jsx(o,{variant:"label-medium",children:"Label Medium"}),e.jsx(o,{variant:"label-small",children:"Label Small"}),e.jsx(o,{variant:"label-x small",children:"Label X Small"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#4b5563"},children:"Strong Weight"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"label-large strong",children:"Label Large Strong"}),e.jsx(o,{variant:"label-medium strong",children:"Label Medium Strong"}),e.jsx(o,{variant:"label-small strong",children:"Label Small Strong"}),e.jsx(o,{variant:"label-x small strong",children:"Label X Small Strong"})]})]})]})]})},l={args:{variant:"headings-h1",as:"h1",children:"The quick brown fox jumps over the lazy dog"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"Capitalized Text"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"capitalized text-large",children:"Capitalized Text Large"}),e.jsx(o,{variant:"capitalized text-large strong",children:"Capitalized Text Large Strong"}),e.jsx(o,{variant:"capitalized text-small strong",children:"Capitalized Text Small Strong"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"Link Styles"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"label link-large link",as:"a",color:"#6baa32",children:"Large Link"}),e.jsx(o,{variant:"label link-medium link",as:"a",color:"#6baa32",children:"Medium Link"}),e.jsx(o,{variant:"label link-small link",as:"a",color:"#6baa32",children:"Small Link"}),e.jsx(o,{variant:"label link-x small link",as:"a",color:"#6baa32",children:"X Small Link"})]})]})]})},s={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"Font Family Usage"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontFamily:"Roboto",fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#15803d"},children:"Roboto"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",marginBottom:"16px"},children:"Used for headings and display text"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"headings-h3",children:"Page Title"}),e.jsx(o,{variant:"headings-h5",children:"Section Header"}),e.jsx(o,{variant:"headings-h7",children:"Subsection"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontFamily:"Circular Std",fontSize:"18px",fontWeight:"500",marginBottom:"12px",color:"#15803d"},children:"Circular Std"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",marginBottom:"16px"},children:"Used for body text and UI elements"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"body-medium",children:"This is body text for reading"}),e.jsx(o,{variant:"label-medium strong",children:"Form Label"}),e.jsx(o,{variant:"label-small",children:"Helper text"})]})]})]})]})})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"✅ Good Examples"}),e.jsxs("div",{style:{marginBottom:"24px",padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#15803d"},children:"Proper Heading Hierarchy"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(o,{variant:"headings-h2",as:"h2",children:"Main Article Title"}),e.jsx(o,{variant:"headings-h4",as:"h3",children:"Section Heading"}),e.jsx(o,{variant:"headings-h6",as:"h4",children:"Subsection"}),e.jsx(o,{variant:"body-medium",children:"Body text follows with appropriate contrast and spacing."})]})]}),e.jsxs("div",{style:{marginBottom:"24px",padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#15803d"},children:"Form Layout"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:e.jsxs("div",{children:[e.jsx(o,{variant:"label-medium strong",as:"label",children:"Email Address"}),e.jsx("div",{style:{padding:"8px 12px",border:"1px solid #e5e7eb",borderRadius:"8px",marginTop:"4px",backgroundColor:"#fff"},children:e.jsx(o,{variant:"body-medium",children:"user@example.com"})}),e.jsx(o,{variant:"label-small",color:"#6b7280",children:"We'll never share your email"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",marginBottom:"16px",color:"#1f2937"},children:"❌ Avoid These"}),e.jsxs("div",{style:{marginBottom:"24px",padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#991b1b"},children:"Skipping Heading Levels"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",opacity:.7},children:[e.jsx(o,{variant:"headings-h1",children:"Main Title"}),e.jsx(o,{variant:"headings-h5",children:"❌ Skipped H2, H3, H4"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"This breaks accessibility and visual hierarchy"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{fontSize:"16px",fontFamily:"Roboto",fontWeight:"500",marginBottom:"12px",color:"#991b1b"},children:"Inconsistent Text Sizes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",opacity:.7},children:[e.jsx(o,{variant:"body-large",children:"Some content here"}),e.jsx(o,{variant:"label-small",children:"❌ Then jumping to very small text"}),e.jsx(o,{variant:"headings-h3",children:"❌ Then very large text"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"Creates visual chaos and poor user experience"})]})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'headings-h1',
    as: 'h1',
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      }}>✅ Good Examples</h3>
        
        <div style={{
        marginBottom: '24px',
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px'
      }}>
          <h4 style={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          marginBottom: '12px',
          color: '#15803d'
        }}>Proper Heading Hierarchy</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Typography variant="headings-h2" as="h2">Main Article Title</Typography>
            <Typography variant="headings-h4" as="h3">Section Heading</Typography>
            <Typography variant="headings-h6" as="h4">Subsection</Typography>
            <Typography variant="body-medium">Body text follows with appropriate contrast and spacing.</Typography>
          </div>
        </div>

        <div style={{
        marginBottom: '24px',
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px'
      }}>
          <h4 style={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          marginBottom: '12px',
          color: '#15803d'
        }}>Form Layout</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <div>
              <Typography variant="label-medium strong" as="label">Email Address</Typography>
              <div style={{
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              marginTop: '4px',
              backgroundColor: '#fff'
            }}>
                <Typography variant="body-medium">user@example.com</Typography>
              </div>
              <Typography variant="label-small" color="#6b7280">We'll never share your email</Typography>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        marginBottom: '16px',
        color: '#1f2937'
      }}>❌ Avoid These</h3>
        
        <div style={{
        marginBottom: '24px',
        padding: '20px',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '12px'
      }}>
          <h4 style={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          marginBottom: '12px',
          color: '#991b1b'
        }}>Skipping Heading Levels</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          opacity: 0.7
        }}>
            <Typography variant="headings-h1">Main Title</Typography>
            <Typography variant="headings-h5">❌ Skipped H2, H3, H4</Typography>
            <p style={{
            fontSize: '14px',
            fontFamily: 'Circular Std',
            color: '#991b1b',
            margin: 0
          }}>This breaks accessibility and visual hierarchy</p>
          </div>
        </div>

        <div style={{
        padding: '20px',
        backgroundColor: '#fef2f2',
        border: '1px solid #fecaca',
        borderRadius: '12px'
      }}>
          <h4 style={{
          fontSize: '16px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          marginBottom: '12px',
          color: '#991b1b'
        }}>Inconsistent Text Sizes</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          opacity: 0.7
        }}>
            <Typography variant="body-large">Some content here</Typography>
            <Typography variant="label-small">❌ Then jumping to very small text</Typography>
            <Typography variant="headings-h3">❌ Then very large text</Typography>
            <p style={{
            fontSize: '14px',
            fontFamily: 'Circular Std',
            color: '#991b1b',
            margin: 0
          }}>Creates visual chaos and poor user experience</p>
          </div>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const F=["Headings","BodyText","Labels","Playground","SpecializedText","FontShowcase","UsageExamples"];export{t as BodyText,s as FontShowcase,i as Headings,r as Labels,l as Playground,n as SpecializedText,d as UsageExamples,F as __namedExportsOrder,z as default};

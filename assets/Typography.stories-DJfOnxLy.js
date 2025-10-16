import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DbW-AAXC.js";import"./preload-helper-PPVm8Dsz.js";const m={"label-small":{fontFamily:"Circular Std",fontWeight:450,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"headings-h5":{fontFamily:"Roboto",fontWeight:400,fontSize:"23px",lineHeight:"32px",letterSpacing:"normal",textTransform:"none"},"label-large":{fontFamily:"Circular Std",fontWeight:450,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"headings-h3":{fontFamily:"Roboto",fontWeight:400,fontSize:"32px",lineHeight:"40px",letterSpacing:"normal",textTransform:"none"},"label-medium":{fontFamily:"Circular Std",fontWeight:450,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h7":{fontFamily:"Roboto",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h4":{fontFamily:"Roboto",fontWeight:400,fontSize:"28px",lineHeight:"36px",letterSpacing:"normal",textTransform:"none"},"label-large strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"headings-h6":{fontFamily:"Roboto",fontWeight:400,fontSize:"17px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"capitalized text-large strong":{fontFamily:"Roboto",fontWeight:600,fontSize:"12px",lineHeight:"16px",letterSpacing:"0.18px",textTransform:"uppercase"},"capitalized text-large":{fontFamily:"Roboto",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"0.18px",textTransform:"uppercase"},"capitalized text-small strong":{fontFamily:"Roboto",fontWeight:600,fontSize:"10px",lineHeight:"12px",letterSpacing:"0.15px",textTransform:"uppercase"},"headings-h2":{fontFamily:"Roboto",fontWeight:400,fontSize:"36px",lineHeight:"44px",letterSpacing:"normal",textTransform:"none"},"label link-small link":{fontFamily:"Roboto",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label link-x small link":{fontFamily:"Roboto",fontWeight:500,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label-small strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"label-medium strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"headings-h1":{fontFamily:"Roboto",fontWeight:400,fontSize:"45px",lineHeight:"52px",letterSpacing:"normal",textTransform:"none"},"label link-medium link":{fontFamily:"Roboto",fontWeight:500,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"label link-large link":{fontFamily:"Roboto",fontWeight:500,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"body-small":{fontFamily:"Roboto",fontWeight:400,fontSize:"12px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"body-medium":{fontFamily:"Roboto",fontWeight:400,fontSize:"14px",lineHeight:"20px",letterSpacing:"normal",textTransform:"none"},"label-x small":{fontFamily:"Circular Std",fontWeight:450,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"},"body-large":{fontFamily:"Roboto",fontWeight:400,fontSize:"15px",lineHeight:"24px",letterSpacing:"normal",textTransform:"none"},"label-x small strong":{fontFamily:"Circular Std",fontWeight:500,fontSize:"11px",lineHeight:"16px",letterSpacing:"normal",textTransform:"none"}},u="_typography_1aqgv_1",v={typography:u},a=({variant:c,as:g="p",children:y,className:x="",color:h})=>{const i=m[c],f={fontFamily:(p=>p==="Circular Std"?"'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif":`'${p}', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`)(i.fontFamily),fontWeight:i.fontWeight,fontSize:i.fontSize,lineHeight:i.lineHeight,letterSpacing:i.letterSpacing!=="normal"?i.letterSpacing:void 0,textTransform:i.textTransform!=="none"?i.textTransform:void 0,color:h||"inherit"};return e.jsx(g,{className:`${v.typography} ${x}`.trim(),style:f,children:y})};a.displayName="Typography";a.__docgenInfo={description:"Typography component that applies Figma design system text styles",methods:[],displayName:"Typography",props:{variant:{required:!0,tsType:{name:"union",raw:"keyof typeof typography",elements:[{name:"literal",value:"'label-small'"},{name:"literal",value:"'headings-h5'"},{name:"literal",value:"'label-large'"},{name:"literal",value:"'headings-h3'"},{name:"literal",value:"'label-medium'"},{name:"literal",value:"'headings-h7'"},{name:"literal",value:"'headings-h4'"},{name:"literal",value:"'label-large strong'"},{name:"literal",value:"'headings-h6'"},{name:"literal",value:"'capitalized text-large strong'"},{name:"literal",value:"'capitalized text-large'"},{name:"literal",value:"'capitalized text-small strong'"},{name:"literal",value:"'headings-h2'"},{name:"literal",value:"'label link-small link'"},{name:"literal",value:"'label link-x small link'"},{name:"literal",value:"'label-small strong'"},{name:"literal",value:"'label-medium strong'"},{name:"literal",value:"'headings-h1'"},{name:"literal",value:"'label link-medium link'"},{name:"literal",value:"'label link-large link'"},{name:"literal",value:"'body-small'"},{name:"literal",value:"'body-medium'"},{name:"literal",value:"'label-x small'"},{name:"literal",value:"'body-large'"},{name:"literal",value:"'label-x small strong'"}]},description:"The typography variant to use from the design system"},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"The HTML element to render",defaultValue:{value:"'p'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to display"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Text color"}}};const z={title:"Design System/Typography",component:a,parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:Object.keys(m),description:"Typography variant from Figma design system"},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div","label"],description:"HTML element to render"},color:{control:"color",description:"Text color"}}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{marginBottom:"8px"},children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"8px"},children:"Roboto Font Family"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",margin:0},children:"Used for headings and display text"})]}),e.jsx(a,{variant:"headings-h1",as:"h1",children:"H1 - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"headings-h2",as:"h2",children:"H2 - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"headings-h3",as:"h3",children:"H3 - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"headings-h4",as:"h4",children:"H4 - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"headings-h5",as:"h5",children:"H5 - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"headings-h6",as:"h6",children:"H6 - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"headings-h7",as:"h6",children:"H7 - The quick brown fox jumps over the lazy dog"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"8px"},children:"Circular Std Font Family"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",margin:0,marginBottom:"16px"},children:"Used for body text and UI elements"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(a,{variant:"body-large",children:"Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}),e.jsx("small",{style:{color:"#666"},children:"Perfect for important content and introductory paragraphs"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"body-medium",children:"Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("small",{style:{color:"#666"},children:"Default body text for most content"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"body-small",children:"Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),e.jsx("small",{style:{color:"#666"},children:"For secondary information and captions"})]})]})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"8px"},children:"Label Styles"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",margin:0,marginBottom:"16px"},children:"For form labels, UI components, and interactive elements"})]}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",marginBottom:"12px",color:"#333"},children:"Regular Weight"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"label-large",children:"Label Large"}),e.jsx(a,{variant:"label-medium",children:"Label Medium"}),e.jsx(a,{variant:"label-small",children:"Label Small"}),e.jsx(a,{variant:"label-x small",children:"Label X Small"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{fontSize:"14px",marginBottom:"12px",color:"#333"},children:"Strong Weight"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"label-large strong",children:"Label Large Strong"}),e.jsx(a,{variant:"label-medium strong",children:"Label Medium Strong"}),e.jsx(a,{variant:"label-small strong",children:"Label Small Strong"}),e.jsx(a,{variant:"label-x small strong",children:"Label X Small Strong"})]})]})]})]})},r={args:{variant:"headings-h1",as:"h1",children:"The quick brown fox jumps over the lazy dog"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"16px"},children:"Capitalized Text"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"capitalized text-large",children:"Capitalized Text Large"}),e.jsx(a,{variant:"capitalized text-large strong",children:"Capitalized Text Large Strong"}),e.jsx(a,{variant:"capitalized text-small strong",children:"Capitalized Text Small Strong"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"16px"},children:"Link Styles"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"label link-large link",as:"a",color:"#1976d2",children:"Large Link"}),e.jsx(a,{variant:"label link-medium link",as:"a",color:"#1976d2",children:"Medium Link"}),e.jsx(a,{variant:"label link-small link",as:"a",color:"#1976d2",children:"Small Link"}),e.jsx(a,{variant:"label link-x small link",as:"a",color:"#1976d2",children:"X Small Link"})]})]})]})},s={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"16px"},children:"Font Family Usage"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f8f9fa",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontFamily:"Roboto",fontSize:"16px",marginBottom:"12px",color:"#333"},children:"Roboto"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"16px"},children:"Used for headings and display text"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"headings-h3",children:"Page Title"}),e.jsx(a,{variant:"headings-h5",children:"Section Header"}),e.jsx(a,{variant:"headings-h7",children:"Subsection"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0f8ff",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontFamily:"Circular Std",fontSize:"16px",marginBottom:"12px",color:"#333"},children:"Circular Std"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"16px"},children:"Used for body text and UI elements"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"body-medium",children:"This is body text for reading"}),e.jsx(a,{variant:"label-medium strong",children:"Form Label"}),e.jsx(a,{variant:"label-small",children:"Helper text"})]})]})]})]})})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"16px"},children:"✅ Good Examples"}),e.jsxs("div",{style:{marginBottom:"24px",padding:"16px",backgroundColor:"#f8fff8",borderRadius:"8px",border:"1px solid #d4edda"},children:[e.jsx("h4",{style:{fontSize:"14px",marginBottom:"12px",color:"#155724"},children:"Proper Heading Hierarchy"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"headings-h2",as:"h2",children:"Main Article Title"}),e.jsx(a,{variant:"headings-h4",as:"h3",children:"Section Heading"}),e.jsx(a,{variant:"headings-h6",as:"h4",children:"Subsection"}),e.jsx(a,{variant:"body-medium",children:"Body text follows with appropriate contrast and spacing."})]})]}),e.jsxs("div",{style:{marginBottom:"24px",padding:"16px",backgroundColor:"#f8fff8",borderRadius:"8px",border:"1px solid #d4edda"},children:[e.jsx("h4",{style:{fontSize:"14px",marginBottom:"12px",color:"#155724"},children:"Form Layout"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:e.jsxs("div",{children:[e.jsx(a,{variant:"label-medium strong",as:"label",children:"Email Address"}),e.jsx("div",{style:{padding:"8px 12px",border:"1px solid #ccc",borderRadius:"4px",marginTop:"4px"},children:e.jsx(a,{variant:"body-medium",children:"user@example.com"})}),e.jsx(a,{variant:"label-small",color:"#666",children:"We'll never share your email"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"system-ui",fontSize:"18px",marginBottom:"16px"},children:"❌ Avoid These"}),e.jsxs("div",{style:{marginBottom:"24px",padding:"16px",backgroundColor:"#fff8f8",borderRadius:"8px",border:"1px solid #f5c6cb",opacity:.7},children:[e.jsx("h4",{style:{fontSize:"14px",marginBottom:"12px",color:"#721c24"},children:"Skipping Heading Levels"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"headings-h1",children:"Main Title"}),e.jsx(a,{variant:"headings-h5",children:"❌ Skipped H2, H3, H4"}),e.jsx("p",{style:{fontSize:"12px",color:"#721c24",margin:0},children:"This breaks accessibility and visual hierarchy"})]})]}),e.jsxs("div",{style:{padding:"16px",backgroundColor:"#fff8f8",borderRadius:"8px",border:"1px solid #f5c6cb",opacity:.7},children:[e.jsx("h4",{style:{fontSize:"14px",marginBottom:"12px",color:"#721c24"},children:"Inconsistent Text Sizes"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(a,{variant:"body-large",children:"Some content here"}),e.jsx(a,{variant:"label-small",children:"❌ Then jumping to very small text"}),e.jsx(a,{variant:"headings-h3",children:"❌ Then very large text"}),e.jsx("p",{style:{fontSize:"12px",color:"#721c24",margin:0},children:"Creates visual chaos and poor user experience"})]})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      marginBottom: '8px'
    }}>
        <h3 style={{
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '8px'
      }}>Roboto Font Family</h3>
        <p style={{
        fontSize: '14px',
        color: '#666',
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '8px'
      }}>Circular Std Font Family</h3>
        <p style={{
        fontSize: '14px',
        color: '#666',
        margin: 0,
        marginBottom: '16px'
      }}>Used for body text and UI elements</p>
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <Typography variant="body-large">
            Body Large - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
          </Typography>
          <small style={{
          color: '#666'
        }}>Perfect for important content and introductory paragraphs</small>
        </div>
        <div>
          <Typography variant="body-medium">
            Body Medium - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </Typography>
          <small style={{
          color: '#666'
        }}>Default body text for most content</small>
        </div>
        <div>
          <Typography variant="body-small">
            Body Small - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
          <small style={{
          color: '#666'
        }}>For secondary information and captions</small>
        </div>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <h3 style={{
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '8px'
      }}>Label Styles</h3>
        <p style={{
        fontSize: '14px',
        color: '#666',
        margin: 0,
        marginBottom: '16px'
      }}>For form labels, UI components, and interactive elements</p>
      </div>
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }}>
        <div>
          <h4 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: '#333'
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
        <div>
          <h4 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: '#333'
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'headings-h1',
    as: 'h1',
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '16px'
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

      <div>
        <h3 style={{
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '16px'
      }}>Link Styles</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <Typography variant="label link-large link" as="a" color="#1976d2">
            Large Link
          </Typography>
          <Typography variant="label link-medium link" as="a" color="#1976d2">
            Medium Link
          </Typography>
          <Typography variant="label link-small link" as="a" color="#1976d2">
            Small Link
          </Typography>
          <Typography variant="label link-x small link" as="a" color="#1976d2">
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
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '16px'
      }}>Font Family Usage</h3>
        <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px'
      }}>
          <div style={{
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
            <h4 style={{
            fontFamily: 'Roboto',
            fontSize: '16px',
            marginBottom: '12px',
            color: '#333'
          }}>Roboto</h4>
            <p style={{
            fontSize: '14px',
            color: '#666',
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
          backgroundColor: '#f0f8ff',
          borderRadius: '8px'
        }}>
            <h4 style={{
            fontFamily: 'Circular Std',
            fontSize: '16px',
            marginBottom: '12px',
            color: '#333'
          }}>Circular Std</h4>
            <p style={{
            fontSize: '14px',
            color: '#666',
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
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '16px'
      }}>✅ Good Examples</h3>
        
        <div style={{
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: '#f8fff8',
        borderRadius: '8px',
        border: '1px solid #d4edda'
      }}>
          <h4 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: '#155724'
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
        padding: '16px',
        backgroundColor: '#f8fff8',
        borderRadius: '8px',
        border: '1px solid #d4edda'
      }}>
          <h4 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: '#155724'
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
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginTop: '4px'
            }}>
                <Typography variant="body-medium">user@example.com</Typography>
              </div>
              <Typography variant="label-small" color="#666">We'll never share your email</Typography>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
        fontFamily: 'system-ui',
        fontSize: '18px',
        marginBottom: '16px'
      }}>❌ Avoid These</h3>
        
        <div style={{
        marginBottom: '24px',
        padding: '16px',
        backgroundColor: '#fff8f8',
        borderRadius: '8px',
        border: '1px solid #f5c6cb',
        opacity: 0.7
      }}>
          <h4 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: '#721c24'
        }}>Skipping Heading Levels</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Typography variant="headings-h1">Main Title</Typography>
            <Typography variant="headings-h5">❌ Skipped H2, H3, H4</Typography>
            <p style={{
            fontSize: '12px',
            color: '#721c24',
            margin: 0
          }}>This breaks accessibility and visual hierarchy</p>
          </div>
        </div>

        <div style={{
        padding: '16px',
        backgroundColor: '#fff8f8',
        borderRadius: '8px',
        border: '1px solid #f5c6cb',
        opacity: 0.7
      }}>
          <h4 style={{
          fontSize: '14px',
          marginBottom: '12px',
          color: '#721c24'
        }}>Inconsistent Text Sizes</h4>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
            <Typography variant="body-large">Some content here</Typography>
            <Typography variant="label-small">❌ Then jumping to very small text</Typography>
            <Typography variant="headings-h3">❌ Then very large text</Typography>
            <p style={{
            fontSize: '12px',
            color: '#721c24',
            margin: 0
          }}>Creates visual chaos and poor user experience</p>
          </div>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const k=["Headings","BodyText","Labels","Playground","SpecializedText","FontShowcase","UsageExamples"];export{o as BodyText,s as FontShowcase,t as Headings,l as Labels,r as Playground,n as SpecializedText,d as UsageExamples,k as __namedExportsOrder,z as default};

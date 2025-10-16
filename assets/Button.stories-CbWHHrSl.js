import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-Dh9dJKyG.js";import"./preload-helper-PPVm8Dsz.js";const W="_button_jm6dm_2",C="_icon_jm6dm_27",F="_label_jm6dm_34",I="_primary_jm6dm_40",T="_secondary_jm6dm_60",w="_tertiary_jm6dm_83",D="_small_jm6dm_104",k="_medium_jm6dm_118",_="_large_jm6dm_132",A="_fullWidth_jm6dm_146",r={button:W,icon:C,label:F,primary:I,secondary:T,tertiary:w,small:D,medium:k,large:_,fullWidth:A},t=({variant:a="primary",size:h="medium",iconBefore:f,iconAfter:g,children:b,onClick:v,disabled:B=!1,className:S="",type:j="button",fullWidth:z=!1})=>{const R=[r.button,r[a],r[h],z&&r.fullWidth,S].filter(Boolean).join(" ");return e.jsxs("button",{type:j,className:R,onClick:v,disabled:B,children:[f&&e.jsx("span",{className:r.icon,children:f}),e.jsx("span",{className:r.label,children:b}),g&&e.jsx("span",{className:r.icon,children:g})]})};t.displayName="Button";t.__docgenInfo={description:`Button v2 (beta) - Treez Design System

The Button component allows users to create visually appealing experiences with
flexible customization options. It supports three different types of buttons:
Primary (filled), Secondary (outlined), and Tertiary (text).

Additionally, buttons can be created in three different sizes: Medium (default), Large, and Small.

@see https://www.figma.com/design/zPEk7VNZnVzhGaNCnalP6o/Design-System?node-id=16340-114580

@example
\`\`\`tsx
<Button variant="primary" size="medium">
  Click me
</Button>

<Button variant="secondary" iconBefore={<Icon />}>
  With Icon
</Button>
\`\`\``,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"Button type/variant\n- `primary`: Filled button with brand color background (default)\n- `secondary`: Outlined button with border\n- `tertiary`: Text-only button without background or border",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Button size\n- `small`: 32px height\n- `medium`: 40px height (default)\n- `large`: 52px height",defaultValue:{value:"'medium'",computed:!1}},iconBefore:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the button text"},iconAfter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display after the button text"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"Button type attribute",defaultValue:{value:"'button'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}}}};const M={title:"Design System/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`
The Button component allows users to create visually appealing experiences with flexible customization options. It supports three different types of buttons: Primary (filled), Secondary (outlined), and Tertiary (text).

Additionally, buttons can be created in three different sizes: Medium (default), Large, and Small.
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant - Primary (filled), Secondary (outlined), or Tertiary (text)",table:{type:{summary:"primary | secondary | tertiary"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"Button size",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Make button full width",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Primary Button"}),e.jsx(t,{variant:"secondary",children:"Secondary Button"}),e.jsx(t,{variant:"tertiary",children:"Tertiary Button"})]})},o={args:{variant:"primary",children:"Primary Button"}},n={args:{variant:"secondary",children:"Secondary Button"}},l={args:{variant:"tertiary",children:"Tertiary Button"}},s={args:{variant:"primary",size:"medium",children:"Button Text"}},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Button Variants"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"})]})]})})},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Button Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"medium",children:"Medium"}),e.jsx(t,{size:"large",children:"Large"})]})]})})},c={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Buttons with Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{iconBefore:e.jsx("span",{children:"←"}),children:"Back"}),e.jsx(t,{variant:"secondary",iconAfter:e.jsx("span",{children:"→"}),children:"Next"}),e.jsx(t,{variant:"tertiary",iconBefore:e.jsx("span",{children:"+"}),children:"Add"})]})]})})},m={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Button States"}),e.jsx("p",{style:{marginBottom:"16px",fontFamily:"Circular Std",fontSize:"14px",color:"#6b7280"},children:"Buttons support multiple interaction states: enabled (default), hovered, pressed, focused, and disabled."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"Primary States"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Enabled"}),e.jsx(t,{variant:"primary",disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"Secondary States"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"secondary",children:"Enabled"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Disabled"})]})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"Tertiary States"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"tertiary",children:"Enabled"}),e.jsx(t,{variant:"tertiary",disabled:!0,children:"Disabled"})]})]})]})]})})},x={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px",maxWidth:"1200px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#15803d"},children:"✅ Do's"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#15803d"},children:"Use one primary action"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"},children:[e.jsx(t,{variant:"primary",children:"Save Changes"}),e.jsx(t,{variant:"secondary",children:"Cancel"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",margin:0},children:"One clear primary action with secondary alternatives"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#15803d"},children:"Use descriptive labels"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"},children:[e.jsx(t,{variant:"primary",children:"Save Changes"}),e.jsx(t,{variant:"secondary",iconAfter:e.jsx("span",{children:"→"}),children:"Continue to Payment"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",margin:0},children:"Labels clearly describe what will happen"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#15803d"},children:"Use tertiary in lists"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"},children:[e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"✏️"}),children:"Edit"}),e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"🗑️"}),children:"Delete"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#166534",margin:0},children:"Tertiary buttons work well for repeated actions"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#991b1b"},children:"❌ Don'ts"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#991b1b"},children:"Multiple primary buttons"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px",opacity:.7},children:[e.jsx(t,{variant:"primary",children:"Save"}),e.jsx(t,{variant:"primary",children:"Send"}),e.jsx(t,{variant:"primary",children:"Submit"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"Too many competing primary actions confuse users"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#991b1b"},children:"Vague button labels"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px",opacity:.7},children:[e.jsx(t,{variant:"primary",children:"Click Here"}),e.jsx(t,{variant:"secondary",children:"Submit"}),e.jsx(t,{variant:"tertiary",children:"Go"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"Labels don't describe the action clearly"})]}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsx("h4",{style:{marginBottom:"12px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#991b1b"},children:"Mix button sizes randomly"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px",opacity:.7},children:[e.jsx(t,{size:"small",children:"Save"}),e.jsx(t,{size:"large",children:"Cancel"}),e.jsx(t,{size:"medium",children:"Delete"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",margin:0},children:"Keep button sizes consistent in the same context"})]})]})]})},y={parameters:{layout:"padded"},args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Size Comparison"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["primary","secondary","tertiary"].map(a=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsxs("span",{style:{width:"80px",fontSize:"14px",fontFamily:"Circular Std",fontWeight:"500",textTransform:"capitalize",color:"#4b5563"},children:[a,":"]}),e.jsx(t,{variant:a,size:"small",children:"Small"}),e.jsx(t,{variant:a,size:"medium",children:"Medium"}),e.jsx(t,{variant:a,size:"large",children:"Large"})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Padding Differences"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",marginBottom:"16px"},children:"Tertiary buttons have reduced horizontal padding for visual balance"}),e.jsx("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Primary (20px)"}),e.jsx(t,{variant:"secondary",children:"Secondary (20px)"}),e.jsx(t,{variant:"tertiary",children:"Tertiary (10px)"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Icon Spacing"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",marginBottom:"16px"},children:"Icon buttons automatically adjust padding for proper visual alignment"}),e.jsx("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{iconBefore:e.jsx("span",{children:"+"}),children:"With Icon"}),e.jsx(t,{children:"Without Icon"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",iconAfter:e.jsx("span",{children:"→"}),children:"Icon After"}),e.jsx(t,{variant:"tertiary",iconBefore:e.jsx("span",{children:"⚙️"}),iconAfter:e.jsx("span",{children:"↗"}),children:"Both Icons"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Accessibility"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{children:"Keyboard Focusable"}),e.jsx(t,{disabled:!0,children:"Screen Reader Compatible"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#15803d",marginTop:"12px",margin:0},children:"All buttons support keyboard navigation and include proper ARIA attributes"})]})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="tertiary">Tertiary Button</Button>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button Text'
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Button Variants</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Button Sizes</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
        </div>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Buttons with Icons</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Button iconBefore={<span>←</span>}>Back</Button>
          <Button variant="secondary" iconAfter={<span>→</span>}>Next</Button>
          <Button variant="tertiary" iconBefore={<span>+</span>}>Add</Button>
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Button States</h3>
        <p style={{
        marginBottom: '16px',
        fontFamily: 'Circular Std',
        fontSize: '14px',
        color: '#6b7280'
      }}>
          Buttons support multiple interaction states: enabled (default), hovered, pressed, focused, and disabled.
        </p>
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
            <h4 style={{
            marginBottom: '12px',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '16px',
            color: '#4b5563'
          }}>Primary States</h4>
            <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
              <Button variant="primary">Enabled</Button>
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
          <div style={{
          padding: '20px',
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px'
        }}>
            <h4 style={{
            marginBottom: '12px',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '16px',
            color: '#4b5563'
          }}>Secondary States</h4>
            <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
              <Button variant="secondary">Enabled</Button>
              <Button variant="secondary" disabled>Disabled</Button>
            </div>
          </div>
          <div style={{
          padding: '20px',
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px'
        }}>
            <h4 style={{
            marginBottom: '12px',
            fontFamily: 'Roboto',
            fontWeight: '500',
            fontSize: '16px',
            color: '#4b5563'
          }}>Tertiary States</h4>
            <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
              <Button variant="tertiary">Enabled</Button>
              <Button variant="tertiary" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
        
        {/* Form Actions - Good */}
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
        }}>Use one primary action</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#166534',
          margin: 0
        }}>One clear primary action with secondary alternatives</p>
        </div>

        {/* Clear Labels - Good */}
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
        }}>Use descriptive labels</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary" iconAfter={<span>→</span>}>Continue to Payment</Button>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#166534',
          margin: 0
        }}>Labels clearly describe what will happen</p>
        </div>

        {/* Tertiary for lists - Good */}
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
        }}>Use tertiary in lists</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '8px'
        }}>
            <Button variant="tertiary" size="small" iconBefore={<span>✏️</span>}>Edit</Button>
            <Button variant="tertiary" size="small" iconBefore={<span>🗑️</span>}>Delete</Button>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#166534',
          margin: 0
        }}>Tertiary buttons work well for repeated actions</p>
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
        
        {/* Multiple Primary - Bad */}
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
        }}>Multiple primary buttons</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '8px',
          opacity: 0.7
        }}>
            <Button variant="primary">Save</Button>
            <Button variant="primary">Send</Button>
            <Button variant="primary">Submit</Button>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#991b1b',
          margin: 0
        }}>Too many competing primary actions confuse users</p>
        </div>

        {/* Vague Labels - Bad */}
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
        }}>Vague button labels</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '8px',
          opacity: 0.7
        }}>
            <Button variant="primary">Click Here</Button>
            <Button variant="secondary">Submit</Button>
            <Button variant="tertiary">Go</Button>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#991b1b',
          margin: 0
        }}>Labels don't describe the action clearly</p>
        </div>

        {/* Inconsistent sizing - Bad */}
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
        }}>Mix button sizes randomly</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginBottom: '8px',
          opacity: 0.7
        }}>
            <Button size="small">Save</Button>
            <Button size="large">Cancel</Button>
            <Button size="medium">Delete</Button>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#991b1b',
          margin: 0
        }}>Keep button sizes consistent in the same context</p>
        </div>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Size Comparison</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          {['primary', 'secondary', 'tertiary'].map(variant => <div key={variant} style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
              <span style={{
            width: '80px',
            fontSize: '14px',
            fontFamily: 'Circular Std',
            fontWeight: '500',
            textTransform: 'capitalize',
            color: '#4b5563'
          }}>{variant}:</span>
              <Button variant={variant as any} size="small">Small</Button>
              <Button variant={variant as any} size="medium">Medium</Button>
              <Button variant={variant as any} size="large">Large</Button>
            </div>)}
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Padding Differences</h3>
        <p style={{
        fontSize: '14px',
        fontFamily: 'Circular Std',
        color: '#6b7280',
        marginBottom: '16px'
      }}>
          Tertiary buttons have reduced horizontal padding for visual balance
        </p>
        <div style={{
        padding: '20px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px'
      }}>
          <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
            <Button variant="primary">Primary (20px)</Button>
            <Button variant="secondary">Secondary (20px)</Button>
            <Button variant="tertiary">Tertiary (10px)</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Icon Spacing</h3>
        <p style={{
        fontSize: '14px',
        fontFamily: 'Circular Std',
        color: '#6b7280',
        marginBottom: '16px'
      }}>
          Icon buttons automatically adjust padding for proper visual alignment
        </p>
        <div style={{
        padding: '20px',
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '12px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
              <Button iconBefore={<span>+</span>}>With Icon</Button>
              <Button>Without Icon</Button>
            </div>
            <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
              <Button variant="secondary" iconAfter={<span>→</span>}>Icon After</Button>
              <Button variant="tertiary" iconBefore={<span>⚙️</span>} iconAfter={<span>↗</span>}>Both Icons</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Accessibility</h3>
        <div style={{
        padding: '20px',
        backgroundColor: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: '12px'
      }}>
          <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
            <Button>Keyboard Focusable</Button>
            <Button disabled>Screen Reader Compatible</Button>
          </div>
          <p style={{
          fontSize: '14px',
          fontFamily: 'Circular Std',
          color: '#15803d',
          marginTop: '12px',
          margin: 0
        }}>
            All buttons support keyboard navigation and include proper ARIA attributes
          </p>
        </div>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};const N=["Example","Primary","Secondary","Tertiary","Playground","Variants","Sizes","WithIcons","States","DosAndDonts","FullWidth","TechnicalSpecs"];export{x as DosAndDonts,i as Example,y as FullWidth,s as Playground,o as Primary,n as Secondary,p as Sizes,m as States,u as TechnicalSpecs,l as Tertiary,d as Variants,c as WithIcons,N as __namedExportsOrder,M as default};

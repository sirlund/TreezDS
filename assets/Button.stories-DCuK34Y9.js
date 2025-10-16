import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DwXjYd5z.js";import"./preload-helper-PPVm8Dsz.js";const j="_button_10hd1_2",S="_icon_10hd1_35",z="_label_10hd1_42",R="_primary_10hd1_48",W="_secondary_10hd1_62",F="_tertiary_10hd1_77",C="_small_10hd1_92",I="_medium_10hd1_103",T="_large_10hd1_114",k="_fullWidth_10hd1_126",i={button:j,icon:S,label:z,primary:R,secondary:W,tertiary:F,small:C,medium:I,large:T,fullWidth:k},t=({variant:a="primary",size:x="medium",iconBefore:m,iconAfter:u,children:y,onClick:f,disabled:g=!1,className:h="",type:v="button",fullWidth:b=!1})=>{const B=[i.button,i[a],i[x],b&&i.fullWidth,h].filter(Boolean).join(" ");return e.jsxs("button",{type:v,className:B,onClick:f,disabled:g,children:[m&&e.jsx("span",{className:i.icon,children:m}),e.jsx("span",{className:i.label,children:y}),u&&e.jsx("span",{className:i.icon,children:u})]})};t.displayName="Button";t.__docgenInfo={description:`Button component from Treez Design System

Implements the Button v2 (beta) design with three variants (Primary, Secondary, Tertiary)
and three sizes (Small, Medium, Large).

@example
\`\`\`tsx
<Button variant="primary" size="medium">
  Click me
</Button>

<Button variant="secondary" iconBefore={<Icon />}>
  With Icon
</Button>
\`\`\``,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"Button type/variant\n- `primary`: Filled button with brand color background (default)\n- `secondary`: Outlined button with border\n- `tertiary`: Text-only button without background or border",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Button size\n- `small`: 8px vertical padding, 12px/6px horizontal\n- `medium`: 8px vertical padding, 20px/10px horizontal (default)\n- `large`: 12px vertical padding, 24px/12px horizontal",defaultValue:{value:"'medium'",computed:!1}},iconBefore:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the button text"},iconAfter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display after the button text"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"Button type attribute",defaultValue:{value:"'button'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}}}};const A={title:"Design System/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`
# Button Component

A flexible button component from Treez Design System with three variants and sizes to fit different use cases.

## Variants

- **Primary** - For the most important actions (e.g., Submit, Save)
- **Secondary** - For complementary actions (e.g., Cancel, Back)  
- **Tertiary** - For low-priority actions in lists or toolbars (e.g., Edit, Delete)

## Sizes

- **Small** - Compact buttons for dense layouts
- **Medium** - Default size for most interfaces
- **Large** - Prominent buttons for key actions

## ✅ Do's

- Use Primary buttons for the main action on a page
- Limit to one Primary button per section
- Use consistent button sizing within the same context
- Provide clear, action-oriented labels (e.g., "Save Changes" not "Save")
- Add icons to improve clarity when helpful

## ❌ Don'ts

- Don't use multiple Primary buttons in the same area
- Don't use vague labels like "Click Here" or "Submit"
- Don't make buttons too small for touch interfaces
- Don't use Tertiary buttons for critical actions
- Don't mix button sizes inconsistently in button groups

## Technical Notes

- Tertiary buttons have reduced padding for visual balance
- Icon buttons automatically adjust padding for proper spacing
- All buttons support keyboard navigation and screen readers
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant - Primary (filled), Secondary (outlined), or Tertiary (text)",table:{type:{summary:"primary | secondary | tertiary"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"Button size",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Make button full width",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},r={args:{variant:"primary",children:"Primary Button"}},o={args:{variant:"secondary",children:"Secondary Button"}},n={args:{variant:"tertiary",children:"Tertiary Button"}},s={args:{variant:"primary",size:"medium",children:"Button Text"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"medium",children:"Medium"}),e.jsx(t,{size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{iconBefore:e.jsx("span",{children:"←"}),children:"Back"}),e.jsx(t,{variant:"secondary",iconAfter:e.jsx("span",{children:"→"}),children:"Next"}),e.jsx(t,{variant:"tertiary",iconBefore:e.jsx("span",{children:"+"}),children:"Add"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"States"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{children:"Default"}),e.jsx(t,{disabled:!0,children:"Disabled"})]})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"✅ Good Examples"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"Form Actions"}),e.jsx("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Save Changes"}),e.jsx(t,{variant:"secondary",children:"Cancel"})]})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"Navigation"}),e.jsx("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",iconBefore:e.jsx("span",{children:"←"}),children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:e.jsx("span",{children:"→"}),children:"Continue"})]})})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"List Actions"}),e.jsx("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"✏️"}),children:"Edit"}),e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"🗑️"}),children:"Delete"}),e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"📋"}),children:"Copy"})]})})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"❌ Avoid These"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"Multiple Primary Buttons"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",opacity:.6},children:[e.jsx(t,{variant:"primary",children:"Save"}),e.jsx(t,{variant:"primary",children:"Send"}),e.jsx(t,{variant:"primary",children:"Submit"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",marginTop:"12px",margin:0},children:"❌ Too many competing primary actions"})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"Roboto",fontWeight:"500",fontSize:"16px",color:"#4b5563"},children:"Vague Labels"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#fef2f2",border:"1px solid #fecaca",borderRadius:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",opacity:.6},children:[e.jsx(t,{variant:"primary",children:"Click Here"}),e.jsx(t,{variant:"secondary",children:"Submit"}),e.jsx(t,{variant:"tertiary",children:"Go"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#991b1b",marginTop:"12px",margin:0},children:"❌ Labels don't describe the action clearly"})]})]})]})]})},p={parameters:{layout:"padded"},args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Size Comparison"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["primary","secondary","tertiary"].map(a=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsxs("span",{style:{width:"80px",fontSize:"14px",fontFamily:"Circular Std",fontWeight:"500",textTransform:"capitalize",color:"#4b5563"},children:[a,":"]}),e.jsx(t,{variant:a,size:"small",children:"Small"}),e.jsx(t,{variant:a,size:"medium",children:"Medium"}),e.jsx(t,{variant:a,size:"large",children:"Large"})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Padding Differences"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",marginBottom:"16px"},children:"Tertiary buttons have reduced horizontal padding for visual balance"}),e.jsx("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Primary (20px)"}),e.jsx(t,{variant:"secondary",children:"Secondary (20px)"}),e.jsx(t,{variant:"tertiary",children:"Tertiary (10px)"})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Icon Spacing"}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#6b7280",marginBottom:"16px"},children:"Icon buttons automatically adjust padding for proper visual alignment"}),e.jsx("div",{style:{padding:"20px",backgroundColor:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:"12px"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{iconBefore:e.jsx("span",{children:"+"}),children:"With Icon"}),e.jsx(t,{children:"Without Icon"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",iconAfter:e.jsx("span",{children:"→"}),children:"Icon After"}),e.jsx(t,{variant:"tertiary",iconBefore:e.jsx("span",{children:"⚙️"}),iconAfter:e.jsx("span",{children:"↗"}),children:"Both Icons"})]})]})})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"Roboto",fontWeight:"500",fontSize:"20px",color:"#1f2937"},children:"Accessibility"}),e.jsxs("div",{style:{padding:"20px",backgroundColor:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{children:"Keyboard Focusable"}),e.jsx(t,{disabled:!0,children:"Screen Reader Compatible"})]}),e.jsx("p",{style:{fontSize:"14px",fontFamily:"Circular Std",color:"#15803d",marginTop:"12px",margin:0},children:"All buttons support keyboard navigation and include proper ARIA attributes"})]})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button Text'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      }}>Variants</h3>
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

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>Sizes</h3>
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

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>With Icons</h3>
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

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'Roboto',
        fontWeight: '500',
        fontSize: '20px',
        color: '#1f2937'
      }}>States</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      }}>✅ Good Examples</h3>
        
        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#4b5563'
        }}>Form Actions</h4>
          <div style={{
          padding: '20px',
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px'
        }}>
            <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
              <Button variant="primary">Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </div>
        </div>

        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#4b5563'
        }}>Navigation</h4>
          <div style={{
          padding: '20px',
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px'
        }}>
            <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
              <Button variant="secondary" iconBefore={<span>←</span>}>Back</Button>
              <Button variant="primary" iconAfter={<span>→</span>}>Continue</Button>
            </div>
          </div>
        </div>

        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#4b5563'
        }}>List Actions</h4>
          <div style={{
          padding: '20px',
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px'
        }}>
            <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          }}>
              <Button variant="tertiary" size="small" iconBefore={<span>✏️</span>}>Edit</Button>
              <Button variant="tertiary" size="small" iconBefore={<span>🗑️</span>}>Delete</Button>
              <Button variant="tertiary" size="small" iconBefore={<span>📋</span>}>Copy</Button>
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
      }}>❌ Avoid These</h3>
        
        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#4b5563'
        }}>Multiple Primary Buttons</h4>
          <div style={{
          padding: '20px',
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px'
        }}>
            <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            opacity: 0.6
          }}>
              <Button variant="primary">Save</Button>
              <Button variant="primary">Send</Button>
              <Button variant="primary">Submit</Button>
            </div>
            <p style={{
            fontSize: '14px',
            fontFamily: 'Circular Std',
            color: '#991b1b',
            marginTop: '12px',
            margin: 0
          }}>❌ Too many competing primary actions</p>
          </div>
        </div>

        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'Roboto',
          fontWeight: '500',
          fontSize: '16px',
          color: '#4b5563'
        }}>Vague Labels</h4>
          <div style={{
          padding: '20px',
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '12px'
        }}>
            <div style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            opacity: 0.6
          }}>
              <Button variant="primary">Click Here</Button>
              <Button variant="secondary">Submit</Button>
              <Button variant="tertiary">Go</Button>
            </div>
            <p style={{
            fontSize: '14px',
            fontFamily: 'Circular Std',
            color: '#991b1b',
            marginTop: '12px',
            margin: 0
          }}>❌ Labels don't describe the action clearly</p>
          </div>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  args: {
    variant: 'primary',
    fullWidth: true,
    children: 'Full Width Button'
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const P=["Primary","Secondary","Tertiary","Playground","Overview","UsageExamples","FullWidth","TechnicalSpecs"];export{p as FullWidth,l as Overview,s as Playground,r as Primary,o as Secondary,c as TechnicalSpecs,n as Tertiary,d as UsageExamples,P as __namedExportsOrder,A as default};

import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DbW-AAXC.js";import"./preload-helper-PPVm8Dsz.js";const b="_button_10hd1_2",S="_icon_10hd1_35",z="_label_10hd1_42",I="_primary_10hd1_48",T="_secondary_10hd1_62",F="_tertiary_10hd1_77",_="_small_10hd1_92",D="_medium_10hd1_103",w="_large_10hd1_114",A="_fullWidth_10hd1_126",i={button:b,icon:S,label:z,primary:I,secondary:T,tertiary:F,small:_,medium:D,large:w,fullWidth:A},t=({variant:a="primary",size:u="medium",iconBefore:m,iconAfter:y,children:x,onClick:h,disabled:f=!1,className:v="",type:g="button",fullWidth:B=!1})=>{const j=[i.button,i[a],i[u],B&&i.fullWidth,v].filter(Boolean).join(" ");return e.jsxs("button",{type:g,className:j,onClick:h,disabled:f,children:[m&&e.jsx("span",{className:i.icon,children:m}),e.jsx("span",{className:i.label,children:x}),y&&e.jsx("span",{className:i.icon,children:y})]})};t.displayName="Button";t.__docgenInfo={description:`Button component from Treez Design System

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
\`\`\``,methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"Button type/variant\n- `primary`: Filled button with brand color background (default)\n- `secondary`: Outlined button with border\n- `tertiary`: Text-only button without background or border",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"Button size\n- `small`: 8px vertical padding, 12px/6px horizontal\n- `medium`: 8px vertical padding, 20px/10px horizontal (default)\n- `large`: 12px vertical padding, 24px/12px horizontal",defaultValue:{value:"'medium'",computed:!1}},iconBefore:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display before the button text"},iconAfter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display after the button text"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"Button type attribute",defaultValue:{value:"'button'",computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}}}};const k={title:"Design System/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"],description:"Button variant - Primary (filled), Secondary (outlined), or Tertiary (text)",table:{type:{summary:"primary | secondary | tertiary"},defaultValue:{summary:"primary"}}},size:{control:"select",options:["small","medium","large"],description:"Button size",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"medium"}}},disabled:{control:"boolean",description:"Disabled state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullWidth:{control:"boolean",description:"Make button full width",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},n={args:{variant:"primary",children:"Primary Button"}},r={args:{variant:"secondary",children:"Secondary Button"}},s={args:{variant:"tertiary",children:"Tertiary Button"}},o={args:{variant:"primary",size:"medium",children:"Button Text"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"tertiary",children:"Tertiary"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"medium",children:"Medium"}),e.jsx(t,{size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{iconBefore:e.jsx("span",{children:"←"}),children:"Back"}),e.jsx(t,{variant:"secondary",iconAfter:e.jsx("span",{children:"→"}),children:"Next"}),e.jsx(t,{variant:"tertiary",iconBefore:e.jsx("span",{children:"+"}),children:"Add"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"States"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{children:"Default"}),e.jsx(t,{disabled:!0,children:"Disabled"})]})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"✅ Good Examples"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"system-ui",fontSize:"14px",color:"#666"},children:"Form Actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Save Changes"}),e.jsx(t,{variant:"secondary",children:"Cancel"})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"system-ui",fontSize:"14px",color:"#666"},children:"Navigation"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",iconBefore:e.jsx("span",{children:"←"}),children:"Back"}),e.jsx(t,{variant:"primary",iconAfter:e.jsx("span",{children:"→"}),children:"Continue"})]})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"system-ui",fontSize:"14px",color:"#666"},children:"List Actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"✏️"}),children:"Edit"}),e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"🗑️"}),children:"Delete"}),e.jsx(t,{variant:"tertiary",size:"small",iconBefore:e.jsx("span",{children:"📋"}),children:"Copy"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"❌ Avoid These"}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"system-ui",fontSize:"14px",color:"#666"},children:"Multiple Primary Buttons"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",opacity:.6},children:[e.jsx(t,{variant:"primary",children:"Save"}),e.jsx(t,{variant:"primary",children:"Send"}),e.jsx(t,{variant:"primary",children:"Submit"})]}),e.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"4px"},children:"❌ Too many competing primary actions"})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h4",{style:{marginBottom:"8px",fontFamily:"system-ui",fontSize:"14px",color:"#666"},children:"Vague Labels"}),e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",opacity:.6},children:[e.jsx(t,{variant:"primary",children:"Click Here"}),e.jsx(t,{variant:"secondary",children:"Submit"}),e.jsx(t,{variant:"tertiary",children:"Go"})]}),e.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"4px"},children:"❌ Labels don't describe the action clearly"})]})]})]})},p={parameters:{layout:"padded"},args:{variant:"primary",fullWidth:!0,children:"Full Width Button"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"Size Comparison"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["primary","secondary","tertiary"].map(a=>e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsxs("span",{style:{width:"80px",fontSize:"14px",textTransform:"capitalize"},children:[a,":"]}),e.jsx(t,{variant:a,size:"small",children:"Small"}),e.jsx(t,{variant:a,size:"medium",children:"Medium"}),e.jsx(t,{variant:a,size:"large",children:"Large"})]},a))})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"Padding Differences"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"16px"},children:"Tertiary buttons have reduced horizontal padding for visual balance"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"primary",children:"Primary (20px)"}),e.jsx(t,{variant:"secondary",children:"Secondary (20px)"}),e.jsx(t,{variant:"tertiary",children:"Tertiary (10px)"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"Icon Spacing"}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginBottom:"16px"},children:"Icon buttons automatically adjust padding for proper visual alignment"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{iconBefore:e.jsx("span",{children:"+"}),children:"With Icon"}),e.jsx(t,{children:"Without Icon"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{variant:"secondary",iconAfter:e.jsx("span",{children:"→"}),children:"Icon After"}),e.jsx(t,{variant:"tertiary",iconBefore:e.jsx("span",{children:"⚙️"}),iconAfter:e.jsx("span",{children:"↗"}),children:"Both Icons"})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontFamily:"system-ui",fontSize:"18px"},children:"Accessibility"}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(t,{children:"Keyboard Focusable"}),e.jsx(t,{disabled:!0,children:"Screen Reader Compatible"})]}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"8px"},children:"All buttons support keyboard navigation and include proper ARIA attributes"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary Button'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary Button'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button Text'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'system-ui',
        fontSize: '18px'
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
        fontFamily: 'system-ui',
        fontSize: '18px'
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
        fontFamily: 'system-ui',
        fontSize: '18px'
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
        fontFamily: 'system-ui',
        fontSize: '18px'
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
        fontFamily: 'system-ui',
        fontSize: '18px'
      }}>✅ Good Examples</h3>
        
        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'system-ui',
          fontSize: '14px',
          color: '#666'
        }}>Form Actions</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
            <Button variant="primary">Save Changes</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </div>

        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'system-ui',
          fontSize: '14px',
          color: '#666'
        }}>Navigation</h4>
          <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
            <Button variant="secondary" iconBefore={<span>←</span>}>Back</Button>
            <Button variant="primary" iconAfter={<span>→</span>}>Continue</Button>
          </div>
        </div>

        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'system-ui',
          fontSize: '14px',
          color: '#666'
        }}>List Actions</h4>
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

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'system-ui',
        fontSize: '18px'
      }}>❌ Avoid These</h3>
        
        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'system-ui',
          fontSize: '14px',
          color: '#666'
        }}>Multiple Primary Buttons</h4>
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
          fontSize: '12px',
          color: '#999',
          marginTop: '4px'
        }}>❌ Too many competing primary actions</p>
        </div>

        <div style={{
        marginBottom: '24px'
      }}>
          <h4 style={{
          marginBottom: '8px',
          fontFamily: 'system-ui',
          fontSize: '14px',
          color: '#666'
        }}>Vague Labels</h4>
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
          fontSize: '12px',
          color: '#999',
          marginTop: '4px'
        }}>❌ Labels don't describe the action clearly</p>
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
        fontFamily: 'system-ui',
        fontSize: '18px'
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
            textTransform: 'capitalize'
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
        fontFamily: 'system-ui',
        fontSize: '18px'
      }}>Padding Differences</h3>
        <p style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '16px'
      }}>
          Tertiary buttons have reduced horizontal padding for visual balance
        </p>
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

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'system-ui',
        fontSize: '18px'
      }}>Icon Spacing</h3>
        <p style={{
        fontSize: '14px',
        color: '#666',
        marginBottom: '16px'
      }}>
          Icon buttons automatically adjust padding for proper visual alignment
        </p>
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

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontFamily: 'system-ui',
        fontSize: '18px'
      }}>Accessibility</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center'
      }}>
          <Button>Keyboard Focusable</Button>
          <Button disabled>Screen Reader Compatible</Button>
        </div>
        <p style={{
        fontSize: '12px',
        color: '#666',
        marginTop: '8px'
      }}>
          All buttons support keyboard navigation and include proper ARIA attributes
        </p>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const R=["Primary","Secondary","Tertiary","Playground","Overview","UsageExamples","FullWidth","TechnicalSpecs"];export{p as FullWidth,l as Overview,o as Playground,n as Primary,r as Secondary,c as TechnicalSpecs,s as Tertiary,d as UsageExamples,R as __namedExportsOrder,k as default};

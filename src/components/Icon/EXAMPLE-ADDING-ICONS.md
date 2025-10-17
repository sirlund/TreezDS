# 🎯 Ejemplo Práctico: Agregando Material Icons

## ℹ️ Estilo de Iconos

Treez Design System usa **Material Symbols Rounded**:
- **Variant**: Rounded
- **Weight**: 400
- **Grade**: Normal (0)
- **Fill**: No fill (outlined)

El componente Icon automáticamente usa la variante Rounded. No necesitas especificarla en el mapeo.

## Escenario: Necesitas agregar iconos para un módulo de inventario

Supongamos que necesitas estos iconos:
- `shopping_cart` - Para carrito de compras
- `local_shipping` - Para envíos
- `inventory_2` - Para inventario
- `add_circle` - Para agregar items

## 📝 Paso a Paso

### 1. Busca los iconos en MUI

Ve a https://mui.com/material-ui/material-icons/ y busca cada uno:

| Buscas | Nombre del icono | Componente MUI |
|--------|------------------|----------------|
| Shopping cart | `shopping_cart` | `ShoppingCart` |
| Shipping | `local_shipping` | `LocalShipping` |
| Inventory | `inventory_2` | `Inventory2` |
| Add | `add_circle` | `AddCircle` |

### 2. Actualiza materialIconMap.ts

```typescript
// ANTES
export const materialIconMap = {
  account_circle: 'AccountCircle',
  admin_panel_settings: 'AdminPanelSettings',
  apps: 'Apps',
  auto_graph: 'AutoGraph',
  dashboard: 'Dashboard',
  group: 'Group',
  integration_instructions: 'IntegrationInstructions',
  loyalty: 'Loyalty',
  payments: 'Payments',
  product: 'Inventory',
  redeem: 'Redeem',
  rocket_launch: 'RocketLaunch',
  settings: 'Settings',
  storefront: 'Storefront',
  verified: 'Verified',
} as const;
```

```typescript
// DESPUÉS (en orden alfabético)
export const materialIconMap = {
  account_circle: 'AccountCircle',
  add_circle: 'AddCircle',              // ← NUEVO
  admin_panel_settings: 'AdminPanelSettings',
  apps: 'Apps',
  auto_graph: 'AutoGraph',
  dashboard: 'Dashboard',
  group: 'Group',
  integration_instructions: 'IntegrationInstructions',
  inventory_2: 'Inventory2',            // ← NUEVO
  local_shipping: 'LocalShipping',      // ← NUEVO
  loyalty: 'Loyalty',
  payments: 'Payments',
  product: 'Inventory',
  redeem: 'Redeem',
  rocket_launch: 'RocketLaunch',
  settings: 'Settings',
  shopping_cart: 'ShoppingCart',        // ← NUEVO
  storefront: 'Storefront',
  verified: 'Verified',
} as const;
```

### 3. Guarda el archivo

¡Eso es todo! TypeScript automáticamente:
- ✅ Actualiza el tipo `MaterialIconName`
- ✅ Actualiza `materialIconNames` array
- ✅ Actualiza `allIconNames` en Icon.tsx
- ✅ Hace disponibles los iconos en Storybook

### 4. Usa los nuevos iconos

```tsx
import { Icon } from '@/components/Icon';

// En tu componente de inventario
function InventoryToolbar() {
  return (
    <div className="toolbar">
      <button>
        <Icon name="add_circle" size="m" />
        Agregar Producto
      </button>
      
      <button>
        <Icon name="shopping_cart" size="m" />
        Ver Carrito
      </button>
      
      <button>
        <Icon name="local_shipping" size="m" />
        Envíos
      </button>
      
      <button>
        <Icon name="inventory_2" size="m" />
        Inventario
      </button>
    </div>
  );
}
```

### 5. Verifica en Storybook

```bash
npm run storybook
```

Navega a: **Components > Icon > Material Design Icons**

Deberías ver tus 4 nuevos iconos en la galería.

---

## 🎨 Caso de Uso Real: Sistema POS

### Iconos que podrías necesitar:

```typescript
export const materialIconMap = {
  // ... existentes ...
  
  // Productos y Ventas
  shopping_cart: 'ShoppingCart',
  add_shopping_cart: 'AddShoppingCart',
  receipt: 'Receipt',
  point_of_sale: 'PointOfSale',
  
  // Inventario
  inventory: 'Inventory',
  inventory_2: 'Inventory2',
  category: 'Category',
  
  // Logística
  local_shipping: 'LocalShipping',
  delivery_dining: 'DeliveryDining',
  
  // Finanzas
  attach_money: 'AttachMoney',
  credit_card: 'CreditCard',
  
  // Usuarios
  person: 'Person',
  person_add: 'PersonAdd',
  badge: 'Badge',
  
  // Acciones comunes
  add_circle: 'AddCircle',
  edit: 'Edit',
  delete: 'Delete',
  search: 'Search',
  filter_list: 'FilterList',
  
  // ... resto de existentes
} as const;
```

---

## 🔄 Comparación: Material vs Custom

### Material Icon (Fácil - 30 segundos)

```typescript
// 1. Agregar a materialIconMap.ts
shopping_cart: 'ShoppingCart',

// 2. Usar
<Icon name="shopping_cart" />
```

### Custom Icon (Complejo - 5 minutos)

```bash
# 1. Exportar SVG desde Figma
# 2. Colocar en imported-from-figma/
# 3. Ejecutar script
npm run watch:icons

# 4. Usar
<Icon name="my_custom_icon" />
```

---

## 💡 Tips Pro

### 1. Mantén el orden alfabético
Facilita encontrar iconos y evita duplicados.

### 2. Usa nombres descriptivos
```typescript
// ✅ Bueno
shopping_cart: 'ShoppingCart',

// ❌ Malo (muy genérico)
icon1: 'ShoppingCart',
```

### 3. Documenta nombres especiales
```typescript
// Mapeo especial: "product" apunta a "Inventory"
product: 'Inventory',
```

### 4. Agrupa iconos relacionados
```typescript
// Iconos de usuario
account_circle: 'AccountCircle',
person: 'Person',
person_add: 'PersonAdd',

// Iconos de productos
inventory: 'Inventory',
shopping_cart: 'ShoppingCart',
storefront: 'Storefront',
```

### 5. Verifica disponibilidad primero
No todos los iconos de Material Design están en `@mui/icons-material`.
Busca primero en: https://mui.com/material-ui/material-icons/

---

## ⚡ Quick Copy-Paste

Iconos comunes para sistemas de comercio:

```typescript
// Copia y pega en materialIconMap.ts (en orden alfabético)

add_circle: 'AddCircle',
attach_money: 'AttachMoney',
badge: 'Badge',
category: 'Category',
credit_card: 'CreditCard',
delete: 'Delete',
delivery_dining: 'DeliveryDining',
edit: 'Edit',
filter_list: 'FilterList',
inventory: 'Inventory',
inventory_2: 'Inventory2',
local_shipping: 'LocalShipping',
person: 'Person',
person_add: 'PersonAdd',
point_of_sale: 'PointOfSale',
receipt: 'Receipt',
search: 'Search',
shopping_cart: 'ShoppingCart',
```

---

**Tiempo estimado por icono**: 30 segundos  
**Dificultad**: ⭐ Muy fácil  
**Requiere restart**: ❌ No (hot reload funciona)

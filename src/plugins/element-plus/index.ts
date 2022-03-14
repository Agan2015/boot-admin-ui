import { App, Component } from "vue";
import {
  ElTag,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElDivider,
  ElDropdown,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElAvatar,
  ElEmpty,
  ElCollapse,
  ElCollapseItem,
  // 指令
  ElLoading,
  ElInfiniteScroll,
  ElCheckbox,
  ElCard,
  ElTree,
  ElForm,
  ElFormItem,
  ElInputNumber,
  ElTable,
  ElTableColumn,
  ElSelect,
  ElOption,
  ElPagination,
  ElDialog,
  ElUpload,
  ElDatePicker
} from "element-plus";

// Directives
const plugins = [ElLoading, ElInfiniteScroll];

const components = [
  ElTag,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElScrollbar,
  ElSubMenu,
  ElButton,
  ElCol,
  ElRow,
  ElDivider,
  ElDropdown,
  ElMenu,
  ElMenuItem,
  ElDropdownItem,
  ElDropdownMenu,
  ElIcon,
  ElInput,
  ElPopover,
  ElPopper,
  ElTooltip,
  ElDrawer,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElBacktop,
  ElSwitch,
  ElBadge,
  ElTabs,
  ElTabPane,
  ElAvatar,
  ElEmpty,
  ElCollapse,
  ElCollapseItem,
  ElCheckbox,
  ElTree,
  ElForm,
  ElFormItem,
  ElInputNumber,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElTable,
  ElTableColumn,
  ElSelect,
  ElOption,
  ElPagination,
  ElUpload,
  ElDatePicker,
  ElDialog,
  ElCard
];

export function useElementPlus(app: App) {
  // 注册组件
  components.forEach((component: Component) => {
    app.component(component.name, component);
  });
  // 注册指令
  plugins.forEach(plugin => {
    app.use(plugin);
  });
}

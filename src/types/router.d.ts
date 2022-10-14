import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    /**
     * @description: 菜单图标
     * @type {string}
     */
    icon?: string;

    /**
     * @description: 菜单名称
     * @type {string}
     */
    title?: string;

    /**
     * @description: 是否隐藏子菜单
     * @type {boolean}
     */
    hideChildMenu?: boolean;

    /**
     * @description: 隐藏子菜单后,子路由对应激活的菜单项
     * @type {boolean}
     */
    activeMenu?: string;

    /**
     * @description: 是否隐藏菜单
     * @type {boolean}
     */
    hideMenu?: boolean;

    /**
     * @description: 是否在头部显示,临时参数,后续会去掉
     * @type {boolean}
     */
    hideHeader?: boolean;

    /**
     * @description: 排序参数,数值越小越靠前
     * @type {number}
     */
    order?: number;

    /**
     * @description: 是否隐藏面包屑
     * @type {boolean}
     */
    hiddenBreadcrumb?: boolean;
  }
}

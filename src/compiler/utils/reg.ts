/** @description 合法变量名/类名/文件名 */
export const legally_name_reg = /^[\$\_a-zA-Z]+[\$\_\d\w]*$/;

/** @description 系统自动生成的变量名 n开头数字结尾 */
export const sys_name_reg = /^n[\d]+$/;

/** @description 文件扩展名 */
export const file_extension = /\.[^\.]+$/;

/** @description 文件包路径 */
export const package_path = /^[\\\/]*([^\.]+)/;
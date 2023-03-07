/**
 * @description 获取tag对应的内置类型
 * @param {string} tag
 * @return {*}  {string}
 */
export function getTagType(tag: string): string {
  if(tag.length < 1) {
    return tag;
  }
  const existing = typeConfig.typeMapping[tag];
  const typeString = existing ?? tag;
  return typeString;
}

// 类型配置
export const typeConfig: {
  // tag映射列表
  typeMapping: Record<string, string | undefined>;
} = {
  typeMapping: {
    group: "fairygui.GGroup",
    Group: "fairygui.GGroup",
    object: "fairygui.GObject",
    Object: "fairygui.GObject",
    graph: "fairygui.GGraph",
    Graph: "fairygui.GGraph",
    image: "fairygui.GImage",
    Image: "fairygui.GImage",
    movieclip: "fairygui.GMovieClip",
    MovieClip: "fairygui.GMovieClip",
    root: "fairygui.GRoot",
    Root: "fairygui.GRoot",
    text: "fairygui.GTextField",
    TextField: "fairygui.GTextField",
    richtext: "fairygui.GRichTextField",
    RichTextField: "fairygui.GRichTextField",
    textinput: "fairygui.GTextInput",
    TextInput: "fairygui.GTextInput",
    loader: "fairygui.GLoader",
    Loader: "fairygui.GLoader",
    loader3D: "fairygui.GLoader3D",
    Loader3D: "fairygui.GLoader3D",
    component: "fairygui.GComponent",
    Component: "fairygui.GComponent",
    label: "fairygui.GLabel",
    Label: "fairygui.GLabel",
    button: "fairygui.GButton",
    Button: "fairygui.GButton",
    combobox: "fairygui.GComboBox",
    ComboBox: "fairygui.GComboBox",
    slider: "fairygui.GSlider",
    Slider: "fairygui.GSlider",
    progressbar: "fairygui.GProgressBar",
    ProgressBar: "fairygui.GProgressBar",
    scrollbar: "fairygui.GScrollBar",
    ScrollBar: "fairygui.GScrollBar",
    list: "fairygui.GList",
    List: "fairygui.GList",
    tree: "fairygui.GTree",
    Tree: "fairygui.GTree",
    controller: "fairygui.Controller",
    transition: "fairygui.Transition"
  }
};
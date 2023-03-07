// import { fairygui } from "./fairygui";

export declare namespace fairygui {
  interface Controller { 
    selectIndex: number;
  }
  interface Transition { }
  interface GObject {
    getChild<T extends GObject>(name: string, clazz?: new() => T): T;
    getController(name: string): Controller;
    getTransition(transName: string): Transition;
  }
  interface GComponent extends GObject {
    addEvent(type: string, fn: () => void);
  }
  interface GTextField extends GObject { 
    text: string;
  }
  interface GButton extends GComponent { 
    addClickHandler(fn: () => void):void;
  }
  interface GComboBox extends GComponent { }
  interface GGraph extends GObject { }
  interface GGroup extends GObject { }
  interface GImage extends GObject {
    url: string;
  }
  interface GLabel extends GComponent {
    text: string;
  }
  interface GList extends GComponent { }
  interface GLoader extends GObject { 
    url: string;
  }
  interface GMovieClip extends GObject { }
  interface GProgressBar extends GComponent { }
  interface GRichTextField extends GTextField { }
  interface GScrollBar extends GComponent { }
  interface GSlider extends GComponent { }
  interface GTextInput extends GTextField { }
}
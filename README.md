# ngx-contextmenu (Custom right-click menus)
## Installation

- npm install

### Component Code

```js
@Component({
  ...
})
export class MyContextMenuClass {
  public items = [
      { name: 'John', otherProperty: 'Foo' },
      { name: 'Joe', otherProperty: 'Bar' }
  ];
  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;
}
```

## Menu and Sub-menus
 
```html
<ul>
    <li *ngFor="let item of items" [contextMenu]="basicMenu" [contextMenuSubject]="item">Right Click: {{item?.name}}</li>
</ul>
<context-menu>
  <ng-template contextMenuItem [subMenu]="saySubMenu">
    Say...
  </ng-template>
  <context-menu #saySubMenu>
    <ng-template contextMenuItem (execute)="showMessage('Hi, ' + $event.item.name)">
      ...hi!
    </ng-template>
    <ng-template contextMenuItem (execute)="showMessage('Hola, ' + $event.item.name)">
      ...hola!
    </ng-template>
    <ng-template contextMenuItem (execute)="showMessage('Salut, ' + $event.item.name)">
      ...salut!
    </ng-template>
  </context-menu>
  <ng-template contextMenuItem divider="true"></ng-template>
  <ng-template contextMenuItem let-item (execute)="showMessage($event.item.name + ' said: ' + $event.item.otherProperty)">
    Bye, {{item?.name}}
  </ng-template>
  <ng-template contextMenuItem passive="true">
    Input something: <input type="text">
  </ng-template>
</context-menu>
```

 
## Multiple Context Menus
You can use multiple context menus in the same component if you would like.

```html
<ul>
    <li *ngFor="let item of items" [contextMenu]="basicMenu" [contextMenuSubject]="item">{{item?.name}}</li>
</ul>
<context-menu #basicMenu>
  ...
</context-menu>

<ul>
    <li *ngFor="let item of items" [contextMenu]="otherMenu" [contextMenuSubject]="item">{{item?.name}}</li>
</ul>
<context-menu #otherMenu>
  ...
</context-menu>
```

```js
@ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
@ViewChild('otherMenu') public otherMenu: ContextMenuComponent;
```
 
 
## Bootstrap 4

If you're using Bootstrap 4, you can specify a `useBootstrap4` property in the `forRoot` function of the `ContextMenuModule` in order to get the appropriate class names.  Like this:

```js
@NgModule({
  import: [
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    }),
  ],
})
export class AppModule {}
```

**Or, if you want to repeat yourself,** you can add a `useBootstrap4` attribute to each `context-menu` component.  Like this:

```html
<context-menu [useBootstrap4]="true"></context-menu>
```

## AutoFocus

You can optionally set focus on the context menu whenever it opens.  This enables a user to easily tab through the context menu items and press enter to select them.

```js
@NgModule({
  import: [
    ContextMenuModule.forRoot({
      autoFocus: true,
    }),
  ],
})
export class AppModule {}
```

## Keyboard navigation

You can use the keyboard to manipulate the context menu.  Note: Keyboard navigation should be used in conjunction with `autoFocus`, since key events are only captured when the context menu is focused.

| Key            | Action                                         |
|:--------------:|------------------------------------------------|
| ArrowDown      | Move to next menu item (wrapping)              |
| ArrowUp        | Move to previous menu item (wrapping)          |
| ArrowRight     | Open submenu of current menu item if present   |
| ArrowLeft      | Close current menu unless already at root menu |
| Enter \| Space | Open submenu or execute current menu item      |
| Esc            | Close current menu                             |

## Disable Context Menu

If you need to disable the context menu, you can pass a `boolean` to the `[disabled]` input:

```html
<context-menu [disabled]="true"></context-menu>
```

## Close event emitter

There is a `(close)` output EventEmitter that you can subscribe to for notifications when the context menu closes (either by clicking outside or choosing a menu item).

```html
<context-menu (close)="processContextMenuCloseEvent()"></context-menu>
```

## Dynamic context menu

The items in the context menu are completely controlled by the `contextMenuActions` object.

```html
<ul>
    <li *ngFor="item in items" [contextMenu]="myContextMenu" [contextMenuSubject]="item">Right Click: {{item.name}}</li>
</ul>
<context-menu #myContextMenu>
  <ng-template *ngFor="let action of contextMenuActions" contextMenuItem let-item
    [visible]="action.visible" [enabled]="action.enabled" [divider]="action.divider"
    (execute)="action.click($event.item)">
    {{ action.html($event.item) }}
  </ng-template>
</context-menu>
```

```ts
@Component({
  ...
})
export class MyContextMenuClass {
  public items = [
      { name: 'John', otherProperty: 'Foo', type: 'type1' },
      { name: 'Joe', otherProperty: 'Bar', type: 'type2' }
  ];
  @ViewChild(ContextMenuComponent) public contextMenu: ContextMenuComponent;
  public contextMenuActions = [
        {
          html: (item) => `Say hi!`,
          click: (item) => alert('Hi, ' + item.name),
          enabled: (item) => true,
          visible: (item) => item.type === 'type1',
        },
        {
          divider: true,
          visible: true,
        },
        {
          html: (item) => `Something else`,
          click: (item) => alert('Or not...'),
          enabled: (item) => false,
          visible: (item) => item.type === 'type1',
        },
      ];
}
```

## One on One Help
I fork it from github.com/isaacplmann.
h's available for (paid) one on one sessions through Code Mentor. 
[![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/isaacplmann?utm_source=github&utm_medium=button&utm_term=isaacplmann&utm_campaign=github)

## Sponsor Link
<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/nfmq92vFC4p9tYPkg1bFpsoZ/isaacplmann/ngx-contextmenu'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/nfmq92vFC4p9tYPkg1bFpsoZ/isaacplmann/ngx-contextmenu.svg' />
</a>

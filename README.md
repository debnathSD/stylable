# Stylable 

coming soon...

```bash
    npm install stylable --save
```

React Component Usage:
```tsx

    import { SBStateless, SBComponent, Stylesheet } from "stylable/react";
    
    const Button = SBComponent(class extends React.Component<{ text: string }, any>{
        render() {
            return <button cssStates={{"my-state": this.state.isMyStateActive}}>
                <div cssStates={{"hidden": this.state.isBeforeHidden}} className="BeforeText">{this.props.beforeText}</div>
                {this.props.text}
            </button>
        }
    }, `
        .root {
            background: white;
            -sb-states: my-state;
        }

        .BeforeText{
            color: black;
            -sb-states: hidden;
        }

        .BeforeText:hidden{
            visibility: hidden;
        }
    `);


```



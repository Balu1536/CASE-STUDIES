import React from "react";
import { Asset } from "../";

interface AssetEditorState {
name: string;
symbol: string;
value: string;
change: string;
}


class AssetEditor extends React.Component<AssetEditorProps,
AssetEditorState
> {
state: AssetEditorState = {
name: "",
symbol: "",
value: "",
change: "",
};


handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
this.setState({
    [e.target.name]: e.target.value,
    } as Pick<AssetEditorState, keyof AssetEditorState>);
};


handleSubmit = (e: React.FormEvent) => {
e.preventDefault();


this.props.onUpdate({
name: this.state.name,
symbol: this.state.symbol,
value: Number(this.state.value),
change: Number(this.state.change),
});


this.setState({
name: "",
symbol: "",
value: "",
change: "",
});
};


render() {
return (
<form onSubmit={this.handleSubmit}>
<h3>Add Asset</h3>


<input name="name" onChange={this.handleChange} />
<input name="symbol" onChange={this.handleChange} />
<input name="value" type="number" onChange={this.handleChange} />
<input name="change" type="number" onChange={this.handleChange} />


<button>Add</button>
</form>
);
}
}


export default AssetEditor;
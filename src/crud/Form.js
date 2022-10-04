import React from "react";
import {Input} from "antd";

const FormElement = ({handleSubmit, name, setname}) => (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <Input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                style={{width:"50%"}}
                autoFocus
                required
            />
            <br/>
            <button className="btn btn-primary mt-1">Submit</button>
            <button className="btn btn-primary mt-1" onClick={() => setname("")}>
                Cancel
            </button>
        </div>
    </form>
);

export default FormElement;
import { Input } from "antd";
import React, {useState, useEffect} from "react";
import {toast} from "react-toastify";
import {updateName, getName} from "./api";

const update = ({history, match}) => {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadName();
    }, []);

    console.log("params", match.params.id)
    console.log("name", name)

    const loadName = () => {
        getName(match.params.id).then((d) => setName(d.data.name));
    };

    const handleSubmit = () => {};
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    {loading ? <Loading /> : (<h4>Update name</h4>)}
                    <Input handleSubmit={handleSubmit} name={name} setName={setName} />
                </div>
            </div>
        </div>
    )
};
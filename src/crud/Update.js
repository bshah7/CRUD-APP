//import { Input } from "antd";
import React, {useState, useEffect} from "react";
import {toast} from "react-toastify";
import {updateName, getName} from "./api";
import FormElement from "./Form";
import Loading from "./Loading";
import { useParams, Link } from "react-router-dom";
import {DatabaseOutlined} from "@ant-design/icons";

const Update = ({history, match}) => {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadName();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const { id } = useParams();

    const loadName = () => {
        getName(id).then((d) => setName(d.data.name));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        updateName(id, {name})
            .then((res) => {
                setLoading(false);
                setName("");  // eslint-disable-next-line
                toast.success(name + ' is updated');
                history.push("/");
            })
            .catch((err) => {
                setLoading(false);
                if(err.response.status === 400) toast.error(err.response.data)
            });
    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    {loading ? <Loading /> : (<h4>Update name</h4>)}
                    <FormElement
                     handleSubmit={handleSubmit} 
                     name={name} 
                     setName={setName}
                    />
                    <Link to={// eslint-disable-next-line
                                '/'} >
                            <span 
                                className="btn btn-sm float-right"
                            >
                            <DatabaseOutlined className="text-warning"/>
                            
                            </span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Update;
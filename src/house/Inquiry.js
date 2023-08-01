import { useState } from "react";

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState({
        name:"",
        email: "",
        remarks:"",    });

    const onChange = (e) =>{
        setContactInfo({...contactInfo, [e.target.id]: e.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);

    }
    return (
        <form className="mt-2">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={contactInfo.name}
                    onChange={onChange}
                    placeholder="Name"
                    name=""
                    id="name"  />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    value={contactInfo.email}
                    onChange={onChange}
                    name=""
                    placeholder="Email"
                    id="email"  />
            </div>

            <div className="form-group">
                <label htmlFor="remarks">Remarks</label>
                <input
                    type="text"
                    className="form-control"
                    value={contactInfo.remarks}
                    onChange={onChange}
                    name=""
                    placeholder="Remarks"
                    id="remarks"  />
            </div>

            <button
                 type="submit"
                 className="btn btn-primary mt-2"
                 disabled= {!contactInfo.name || !contactInfo.email}
                 onClick={onSubmit}>
                Submit
            </button>
        </form>
      );
}

export default Inquiry;
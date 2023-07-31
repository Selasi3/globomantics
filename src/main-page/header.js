import logo from './logo.svg';

const Header = (props) => {
   return ( <div className='row'>
            <div className="col-md-5">
                <img src={logo} alt="logo" className='logo' />

            </div>

            <div className='col md-7 mt-5 subtitle'>
            {props.subtitle}
            </div>

    </div>
    );
};

export default Header;
import Link from "next/link";


const Menu = () => (

    <div>
        <Link legacyBehavior href="#">
            <a>Home</a>
        </Link>
        
        <Link legacyBehavior href="#">
            <a>Heroes</a>
        </Link>

        <Link legacyBehavior href="#">
            <a>Relatório</a>
        </Link>

        <Link legacyBehavior href="#">
            <a>Admin</a>
        </Link>

    </div>

);

export default Menu
import Link from 'next/link'

export default  function HomePage(){
    console.log('HomePage')
    return(
       <>
        <h1>Indie Gamer</h1>
        <p> Only the best indie games, reviewed for you </p>
        <nav>
            <ul>
                <li>
                    <Link href="/reviews/hollow-knight">Hollow Knight</Link>
                </li>
                <li>
                    <Link href="/reviews/stardew-valley" >Stardew Valley </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}
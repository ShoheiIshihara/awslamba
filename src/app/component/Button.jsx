'use client'

export default function Button() {
    const onClick = async () =>{
        console.log('onClick')
        const url = 'https://0ue8zsr9p2.execute-api.us-east-1.amazonaws.com/slack-test/slack-test'
        // try{
        //     const response = await axios.get(url);
        //     console.log(response)
        // }catch(err){
        //     console.error(err)
        // }

        const res = await fetch(url)

    }
    return (
        <button onClick={onClick}>TST</button>
    )
}
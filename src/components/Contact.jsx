
const Contact = () => {
    const contact={
        address:"Lagos,Nigeria",
        phone:"09011192901",
        email:"aigbojie2020@gmail.com"

    }
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="my-10 text-center text-4xl ">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4 ">{contact.address}</p>
            <p className="my-4 ">{contact.phone}</p>
            <a href="mailto:aigbojie2020@gmail.com" className=" border-b">{contact.email}</a>

        </div>

    </div>
  )
}

export default Contact
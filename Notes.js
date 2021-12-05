The bcrypt has three main function:

1.compare
2.hash
3.genSalt

genSalt: It generate random password and it is difficult to make predectible.
It looks like: genSalt(value) : genSalt(10).
We write: bcrypt.genSalt(20)

hash: it generate rndom string that is difficult to break threoug.
It takes two argument: hash(req.body.password,genSalt(10))
we write: bcrypt.hash(a1,a2)

compare: it comapre to check wether the password is match or nt.
        It takes req.body.password and user.password.
        It compare(req.body.password,user.password)
        
 we write bcrypt.compare(req.body.password,user.password)



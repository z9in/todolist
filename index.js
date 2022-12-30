const express = require('express');
const app = express();
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

const Posts = sequelize.define('Posts',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    post: {
        type: DataTypes.STRING,
        allowNull:false
    }
})

sequelize.sync().then(function(res){
    console.log('데이터 연결 ON!!');
})

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/', async (req,res)=>{
    const posts = await Posts.findAll();
    res.render('index.ejs', { posts })
})

app.get('/about', (req,res)=>{
    res.render('pages/about.ejs')
})

app.post('/create',async (req,res)=>{
    let titleEl = req.body.title;
    let contentEl = req.body.content;
    console.log(titleEl, contentEl)
    await Posts.create({
        title: titleEl,
        post : contentEl
    })
    res.redirect('/');
})

app.post('/delete/:id', async (req,res)=>{
    let ids = req.params.id;
    
    await Posts.destroy({where:{
        id : ids
    }})

    res.redirect('/');
})

app.post('/update/:id', async(req,res)=>{
    const id = req.params.id;
    const content = req.body.rewrite;
    await Posts.update(
        {post: content},{where:{
            id: id
        }})
    res.redirect('/')
})

app.listen(3005, (req,res)=>{
    console.log('3005번 서버열림');
})
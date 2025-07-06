body {
font-family: Arial, sans-serif;
margin: 20px;
}

h4 {
margin-bottom: 10px;
}

form {
margin-bottom: 20px;
}

form div {
display: flex;
flex-wrap: wrap;
margin-bottom: 10px;
}

form div > div {
flex: 1;
min-width: 200px;
margin-right: 10px;
}

form div > div:last-child {
margin-right: 0;
}

label {
display: block;
margin-bottom: 5px;
}

input[type="text"],
input[type="date"],
select {
width: 100%;
padding: 8px;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 4px;
}

input[type="text"]:focus,
input[type="date"]:focus,
select:focus {
border-color: #007bff;
outline: none;
}

input[type="file"] {
margin-top: 5px;
}

button {
padding: 10px 20px;
background-color: #007bff;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
}

button:hover {
background-color: #0056b3;
}

.hidden {
display: none;
}
</style>
</head>
<template>
  <div>
    <div class="text-center mb-3">
      <button @click="toggleForm" class="bg-primary text-white add-btn">Add</button>
    </div>
    <div v-if="showForm" class="student-form mb-4">
      <div class="form-group mb-2">
        <label for="studentId">ID</label>
        <input v-model="newStudent.id" type="number" class="form-control" id="studentId" placeholder="Enter ID">
      </div>
      <div class="form-group mb-2">
        <label for="studentName">Name</label>
        <input v-model="newStudent.name" type="text" class="form-control" id="studentName" placeholder="Enter name">
      </div>
      <div class="form-group mb-2">
        <label for="studentCity">City</label>
        <input v-model="newStudent.city" type="text" class="form-control" id="studentCity" placeholder="Enter city">
      </div>
      <button @click="addStudent" class="btn btn-success mt-2">Save Student</button>
    </div>
  <table v-else class="table table-bordered striped w-100 text-center">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.city }}</td>
      </tr>
    </tbody>
    <tfoot>
      <th colspan="3"># of students = {{ students.length }}</th>
    </tfoot>
  </table>
  </div>
  
 </template>
 
 <script>
 export default{
    data(){
      return{
        showForm:false,
        newStudent:{
          id:null,
          name:'',
          city:''
        },
        students:[{id:100,name:'Ahmed',city:'Cairo'}]
      }
    },
    methods:{
      toggleForm(){
        this.showForm = !this.showForm;
        if(!this.showForm){
          this.newStudent = {id:null,name:'',city:''};
        }
      },
      addStudent(){
        if(this.newStudent.id && this.newStudent.name && this.newStudent.city){
          this.students.push({...this.newStudent});
          this.newStudent = {id:null,name:'',city:''};
          this.showForm = false;
        }else{
          alert('Please fill all fields');
        }
      }
    }
 }
 
 </script>
 
 <style>
  .add-btn{
    width: 35%;
    text-align: center;
    font-weight: bold;
    font-size:1.25rem;
  }
 
 </style>
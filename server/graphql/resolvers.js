import Project from './models/Project.js'
import Task from './models/Task.js';
export const resolver={
  Query:{
    projects: async () => await Project.find(),
    project: async (_, {_id}) => await Project.findById(_id),
    tasks: async () => await Task.find(),
    task: async (_, {_id}) => await Task.findById(_id),
  },
  Mutation: {
    createProject: async (_, {name, description}) => {
      const newProject = new Project({
        name,
        description
      });
      const projectSaved = await newProject.save();
      return projectSaved;
    },
    deleteProject: async (_, {_id}) => {
      const deletedProject = await Project.findByIdAndDelete(_id);
      if(!deletedProject) throw new Error('Project NOT Found');
      await Task.deleteMany({projectId: deletedProject._id});
      return deletedProject;
    },
    updateProject: async (_, args) => {
      const updatedProject = await Project.findByIdAndUpdate(args._id, args,{
        new: true,
      });
      if(!updatedProject) throw new Error('Project Not Found');
      return updatedProject;

    },
    createTask: async (_, {title, projectId}) => {
      const projectFind = await Project.findById(projectId);
      if(!projectFind) throw new Error('Project Not Found');
      const newTask = new Task({
        title,
        projectId,
      });
      const taskSaved = await newTask.save();
      return taskSaved
    },
    deleteTask: async (_, {_id}) => {
      const deletedTask = await Task.findByIdAndDelete(_id);
      if(!deletedTask) throw new Error('Task NOT Found');
      return deletedTask;
    },
    updateTask: async (_, args) => {
      const updatedTask = await Task.findByIdAndUpdate(args._id, args,{
        new: true,
      });
      if(!updatedTask) throw new Error('Task Not Found');
      return updatedTask;
    },
  },
  Project:{
    tasks: async (parent) => {
      const task = await Task.find({projectId: parent._id});
      return task;
    }
  },
  Task: {
    project: async(parent) => {
      const project = await Project.findById(parent.projectId);
      return project;
    }
  }
};
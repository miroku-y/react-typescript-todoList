import * as React from "react";
import "./App.css";
import Button from './components/button'

export interface Task {
  id: number;
  value: string;
  completed: boolean;
}
export interface AppState {
  currentTask: string;
  tasks: Array<Task>;
}
export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentTask: "",
      tasks: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.renderTask = this.renderTask.bind(this);
    this.deleteBtn = this.deleteBtn.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }
  private handleChange(e: any) {
    console.log(e.target.value);
    this.setState({
      currentTask: e.target.value
    });
  }
  private deleteBtn(event:any){
    const filterArr = this.state.tasks.filter((item)=>item.id!=event.target.dataset.id)
    console.log(event.target.dataset.id,this.state.tasks,filterArr)
    this.setState({
      ...this.state,
      tasks:filterArr
    })
  }
  private renderTask(): JSX.Element[] {
    return this.state.tasks.map((item: Task, index: number) => {
      return (
        <div key={item.id} className="task_item">
          <span>{item.value}</span>
          {/* <button className="btn">删除</button> */}
          <Button type="danger" size="large" text='删除' onClick={this.deleteBtn} dataId={item.id}/>
        </div>
      );
    });
  }
  private handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        {
          id: Math.random(),
          value: this.state.currentTask,
          completed: false
        }
      ]
    });
    console.log(e);
  }
  
  public render() {
    return (
      <div className="app">
        <h2>Hello React TS</h2>
        <hr />
        <form onSubmit={e => this.handleSubmit(e)}>
          <input placeholder="请添加代办事项" onChange={this.handleChange} />
          <button type="submit" className="btn">
            添加
          </button>
        </form>
        <section>{this.renderTask()}</section>
      </div>
    );
  }
}

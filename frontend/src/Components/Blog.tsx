import React, { Component } from "react";
import { getBlogActionCreator } from "../actions/blog-actions";

export interface IBlogProps {
  blogs: [];
  getBlogActionCreator?: () => void;
}

class BlogHomePage extends Component<IBlogProps> {
  constructor(props: IBlogProps) {
    super(props);
  }

  componentDidMount() {
    getBlogActionCreator();
  }

  render() {
    return (
      <div>
        <h3>Blog Homepage</h3>
        <ul>
          <li>Test</li>
        </ul>
      </div>
    );
  }
}

export default BlogHomePage;

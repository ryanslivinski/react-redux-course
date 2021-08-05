// import React and ReactDOM libs
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create React component
const App = () =>
{
	return(
		<div className="ui container comments">

			<ApprovalCard>
				<div>
					<h4>WARNING!</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timePosted="Today at 4:20pm" 
					content="Nice cock!" 
					avatar={Faker.image.avatar()} 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timePosted="Today at 2:30am" 
					content="Sick bobs" 
					avatar={Faker.image.avatar()} 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timePosted="3 days ago" 
					content="420" 
					avatar={Faker.image.avatar()} 
				/>
			</ApprovalCard>
		</div>
	);
};

// take react component and show to screen
ReactDOM.render(<App />, document.querySelector('#root'));
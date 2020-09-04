import React, {useState, useEffect} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

interface Member {
  name: string;
  email: string;
}
export function AllMembers() {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    fetch("http://localhost:3001/members")
    .then(response => response.json())
    .then(json => setMembers(json.members))
  }, [])
  if (members.length === 0) {
    return <div>No Members</div>
  }
  const memberList = members.map((member) => {
    return <MemberItem member={member}></MemberItem>
  })
    return (
      <div>
        <h2>All Members</h2>
        <ul>
          {memberList}
        </ul>
      </div>
    );
  }
interface MemberProps{
  member: Member;
}
const MemberItem = ({member}: MemberProps) => {
return <li>{member.name}, {member.email}</li>
}
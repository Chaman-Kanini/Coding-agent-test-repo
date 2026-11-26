import { Link, Navigate, Route, Routes } from 'react-router-dom';

import TaskItemPage from './features/task-item/TaskItemPage';
import TeamMemberPage from './features/team-member/TeamMemberPage';
import LabelPage from './features/label/LabelPage';

export default function App() {
  return (
    <>
      <nav>
        <Link to="/task-items">TaskItems</Link>
        <Link to="/team-members">TeamMembers</Link>
        <Link to="/labels">Labels</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/task-items/*" element={<TaskItemPage />} />
          <Route path="/team-members/*" element={<TeamMemberPage />} />
          <Route path="/labels/*" element={<LabelPage />} />
          <Route path="*" element={<Navigate to="/task-items" replace />} />
        </Routes>
      </main>
    </>
  );
}

import React from 'react';

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
  // children: React.ReactNode; function 키워드로 만들 때는 넣어줘야함
};

// 이 경우 props에 children이 들어 있음
// const Greetings: React.FC<GreetingsProps> = ({
//   name,
//   mark = '!',
//   optional,
//   onClick,
// }) => {
//   const handleClick = () => onClick(name);

//   return (
//     <div>
//       Hi Ho, {name} {mark}
//       {optional && <p>{optional}</p>}
//       <div>
//         <button onClick={handleClick}>Touch me</button>
//       </div>
//     </div>
//   );
// };

// children 쓰려면 prosp 타입에 정의해야 함
function Greetings({ name, mark, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hi Ho, {name} {mark}
      <div>
        <button onClick={handleClick}>Touch me</button>{' '}
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: '!',
};

export default Greetings;

// TODO: Refactor the class to a factory function.
const lessonInfo = (state) =>
({
  information: () => console.log(state.title, state.description),
});

const Lesson = (title, description) =>
{
  const state =
  {
    title,
    description,
  };

  return {...lessonInfo(state)};
};

const csForJS = Lesson('Module 17 - Computer Science', 'CS for JS');
csForJS.information();

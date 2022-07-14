type Place = 'home' | {custom: string}

type Todo = Readonly< {
    id: number;
    text: string;
    date: Date;
    done: boolean;
    place?: Place;
}>
type CompletedTodo = Todo & {
    readonly done: true;
}
export const toggleTodo = (todo: Todo): Todo =>{
    return todo;
}
export const completeAll = (todos: readonly Todo[]): readonly CompletedTodo[] => {
    return todos.map(todo => ({...todo, done: true}));
}
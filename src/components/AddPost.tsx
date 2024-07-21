import Button from "./Button";
import Input from "./Input";

export const AddPost = () => {
  const leadingElement = (
    <div>
      <div className="bg-darkA h-12 w-12 rounded-full flex items-center justify-center shrink-0">
        💬
      </div>
    </div>
  );

  return (
    <div className="bg-darkA border-2 rounded-lg py-10 px-6 border-gray mt-10">
      <h1 className="mb-4">Create post</h1>
      <div className="flex items-center mb-2">
        <div className="w-full">
          <Input
            placeholder="How are you feeling today?"
            type="text"
            leadingElement={leadingElement}
            mode="dark"
            onLeadingElementPressed={() => {}}
          />
        </div>
      </div>
      <div className="flex justify-end items-center mt-4">
        <Button label="Post" onClick={() => {}} variant="autoWidth" />
      </div>
    </div>
  );
};

import Image from "next/image";
import PromptBox from "./PromptBox";

const Dashboard = () => {

  const prompts = [
    {
      title: "The first time I saw you",
      description: "I was walking down the street and I saw you. You were wearing a red shirt and blue jeans. You were walking towards me and I was walking towards you. We met in the middle and we kissed. It was the first time I saw you.",
      author: "John Doe",
      authorImg: "/fire.svg",
      category: "Romance",
    },
    {
      title: "Next.js 13 new Metadata API with SEO support | Next.js 13.2 Tutorial",
      description: "FYI: The Next.js 'metadata' API is not allowed in a client component. To add metadata to a client component, you'll need to create a new layout for that page to add the metadata since a layout is a server side component.",
      author: "John Doe",
      authorImg: "/fire.svg",
      category: "Coding",
    },]
  return (
    <div className="dashboard">
      <div className="max-w-6xl mx-auto px-4">
            <h1 className="flex align-middle mt-4">
                <Image src="/fire.svg" alt="logo" width={20} height={20} />
                Todays Prompts
            </h1>
        {prompts.map((prompt, index) => (
          <PromptBox key={index} prompt={prompt}/>
        ))}
        </div>
    </div>
  );
};

export default Dashboard;
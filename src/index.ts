import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new photo into the database...");
    const photo = new Photo({
      title: "photo1",
      description: "desc photo1",
      size: "42",
    });
    await AppDataSource.manager.save(photo);

    console.log("Updating a new photo into the database...");
    const updatedPhoto = photo.update({ size: "43" });
    await AppDataSource.manager.save(updatedPhoto);
  })
  .catch((error) => console.log(error));

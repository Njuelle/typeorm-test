import { AppDataSource } from "./data-source";
import { Photo } from "./entity/Photo";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new photo into the database...");
    const photo = new Photo();
    photo.title = "photo1";
    photo.description = "desc photo1";
    photo.size = "42";

    const updatedPhoto = photo.update({ size: "43" });

    await AppDataSource.manager.save(photo);
    await AppDataSource.manager.save(updatedPhoto);
  })
  .catch((error) => console.log(error));

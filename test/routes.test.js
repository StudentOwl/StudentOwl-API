import request from "supertest";
import app from "../src/app";

describe("Component Endpoints", () => {
  it("should get all components", async () => {
    const res = await request(app).get("/api/v1.0/components/all");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
  });

  it("should delete all components", async () => {
    const res = await request(app).delete("/api/v1.0/components/all");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
  });

  it("should create a new GTPR01 component", async () => {
    const res = await request(app)
      .post("/api/v1.0/components/new")
      .send({
        _id: "GTPR01",
        name: "Gestión de proyectos",
        teacher: "mpabad",
        students: ["jjgahona", "lfbermeo", "jjramirez8", "vhmartinez5"]
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
  });

  it("should create a new INRE01 component", async () => {
    const res = await request(app).post("/api/v1.0/components/new").send({
      _id: "INRE01",
      name: "Ingeniería de requisitos",
      teacher: "racorrea2",
      students: []
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
  });

  it("should create a new CMPR99 component", async () => {
    const res = await request(app)
      .post("/api/v1.0/components/new")
      .send({
        _id: "CMPR99",
        name: "Componente de prueba",
        teacher: "teacher",
        students: ["student1", "student2"]
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("data");
  });

  it("should prevent creating a new CMPR99 component", async () => {
    const res = await request(app)
      .post("/api/v1.0/components/new")
      .send({
        _id: "CMPR99",
        name: "Componente de prueba",
        teacher: "teacher",
        students: ["student1", "student2"]
      });

    expect(res.statusCode).toEqual(500);
  });

  it("should get a CMPR99 component", async () => {
    const res = await request(app).get("/api/v1.0/components/CMPR99");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
    expect(res.body).toHaveProperty("data");
  });

  it("should delete a CMPR99 component", async () => {
    const res = await request(app).delete("/api/v1.0/components/CMPR99");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("status");
  });
});
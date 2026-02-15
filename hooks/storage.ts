import { z } from "zod";
import { createLocalStorage } from "@stork-tools/zod-local-storage";

const serviceItemSchema = z.object({
  city: z.string().min(2).max(80),
  street: z.string().min(2).max(80),
  serviceName: z.string().min(1).max(100),
  id: z.string(),
});

const userServiceData = z.array(serviceItemSchema).catch([]);

export const serviceStorage = createLocalStorage({
  serviceData: userServiceData,
});


